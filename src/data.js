var moment = require("moment");
import "./locale.js";

const eventAllDay = function(event){
   		var allDay = false;
   		if(event.start.date){
				allDay = true;
		}
		else if(event.start.dateTime){
			allDay = false;	
		}
		else{
			let start = moment(event.start);
			let end = moment(event.end);
			let diffInHours = end.diff(start, 'hours');
			allDay = (diffInHours >= 24);
		}
		
		return allDay;
};

const eventTimeString = function(event, language){
	moment.locale(language);
	
	let startDateTime = moment(new Date(event.start));
	let endDateTime = event.end ? moment(new Date(event.end)) : moment(new Date(event.start)).add(1, 'days');
	
	let eventTime = "";
	if(event.allDay){
		endDateTime = endDateTime.startOf('day').add(-1, 'hours');
		if(startDateTime.clone().startOf('day').isSame(endDateTime.clone().startOf('day'))) // One day event
		{
			eventTime = `${startDateTime.format("dddd, D MMMM")}`;
		}
		else if(startDateTime.month() == endDateTime.month()){
			eventTime = `${startDateTime.format("D")} - ${endDateTime.format("D MMMM YYYY")}`;
		}
		else if(startDateTime.year() == endDateTime.year())
		{
			eventTime = `${startDateTime.format("D MMMM")} - ${endDateTime.format("D MMMM YYYY")}`;
		}
		else {
			eventTime = `${startDateTime.format("D MMMM YYYY")} - ${endDateTime.format("D MMMM YYYY")}`;
		}
	}
	else
	{
		if(startDateTime.clone().startOf('day').isSame(endDateTime.clone().startOf('day'))) // Start and end same day
		{
			if(startDateTime.format("a") == endDateTime.format("a"))
			{
				eventTime = `${startDateTime.format("dddd, D MMMM")}  ⋅ ${startDateTime.format("h:mm")} - ${endDateTime.format("h:mm a")}`;
			}
			else{
				eventTime = `${startDateTime.format("dddd, D MMMM")}  ⋅ ${startDateTime.format("h:mm a")} - ${endDateTime.format("h:mm a")}`;
			}		
		}
		else
		{
			eventTime = `${startDateTime.format("D MMMM YYYY, h:mm a")} - ${endDateTime.format("D MMMM YYYY, h:mm a")}`;
		}
	}
	
	return eventTime;
}

class CalendarEvent {
	
	static FromEventData(hass, eventData){
		var event = new CalendarEvent();
		
		event.title = eventData.summary ? eventData.summary : eventData.title; 
        event.start = eventData.start.date ? eventData.start.date : eventData.start.dateTime ? eventData.start.dateTime : eventData.start;
        event.end = eventData.end.date ? eventData.end.date : eventData.end.dateTime ? eventData.end.dateTime : eventData.end;
        event.allDay = eventAllDay(eventData);
        event.displayTime = eventTimeString(event, hass.language); 
        return event;
	}
	
	static FromEntity(hass, entityConf, stateObj){
		var event = new CalendarEvent();
		
		event.title = ((entityConf.name) ? entityConf.name : stateObj.attributes.friendly_name) ;
        
        if(stateObj.attributes.device_class === "timestamp"){
    		event.start = stateObj.state;
    	}
    	else{
    		let domain = stateObj.entity_id.split('.')[0];
    		event.start = (stateObj.attributes.last_changed ? stateObj.attributes.last_changed : stateObj.last_changed);				
    	}
        event.allDay = true;
        event.displayTime = eventTimeString(event, hass.language);
        return event;
	}
}

export class CalendarService {
	constructor() {
		this.eventData = {};
	}
	
	
	async getEvents(hass, entityConf, start, end){
  		if(!hass) return [];
  		
  		var entity = entityConf.entity;
  		var domain = entity.split('.')[0];
  		if(domain == 'calendar'){
  			return this.getCalendarEvents(hass, entity, start, end);
  		}
  		else{
  			return this.getEntityEvents(hass, entityConf);
  		}
  	}
  	
  	async getEntityEvents(hass, entityConf){
  		var stateObj = hass.states[entityConf.entity];
  		if(!entityConf.time_list_attribute){
  			return [CalendarEvent.FromEntity(hass, entityConf, stateObj)];
  		}
  		else{
  			var event = CalendarEvent.FromEntity(hass, entityConf, stateObj);
  			var time_list = stateObj.attributes[entityConf.time_list_attribute];
  			if(time_list){
  				return time_list.map(time => { return {...event, start:time} });
  			}
  			else return [event];
  		}
  	}
  	
	async getCalendarEvents(hass, calendar, start, end){
  		let startStr = start.toISOString();
  		let endStr = end.toISOString();
  		
  		let url = `calendars/${calendar}?start=${startStr}&end=${endStr}`;
        let result = await hass.callApi('get', url);
        var events = result.map(x => CalendarEvent.FromEventData(hass, x));
        
        let oldEvents = this.eventData[calendar] || [];
        oldEvents.push(...events);
        
        this.eventData[calendar] = oldEvents.filter((thing, index) => {
  			const _thing = JSON.stringify(thing);
  			return index === oldEvents.findIndex(obj => {
    			return JSON.stringify(obj) === _thing;
  			});
		});
		
        return this.eventData[calendar];
  	}
}