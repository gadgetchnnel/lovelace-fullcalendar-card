export class CalendarEvent {
	
	static FromEventData(eventData){
		var event = new CalendarEvent();
		
		event.title = eventData.summary ? eventData.summary : eventData.title; 
        event.start = eventData.start.date ? eventData.start.date : eventData.start.dateTime ? eventData.start.dateTime : eventData.start;
        event.end = eventData.end.date ? eventData.end.date : eventData.end.dateTime ? eventData.end.dateTime : eventData.end;
        event.allDay = (!!eventData.start.date);
        
        return event;
	}
	
	static FromEntity(hass, entityConf){
		var event = new CalendarEvent();
		var stateObj = hass.states[entityConf.entity];
		
		event.title = ((entityConf.name) ? entiyConf.name : stateObj.attributes.friendly_name) ;
        
        if(stateObj.attributes.device_class === "timestamp"){
    		event.start = stateObj.state;
    	}
    	else{
    		let domain = stateObj.entity_id.split('.')[0];
    		event.start = (stateObj.attributes.last_changed ? stateObj.attributes.last_changed : stateObj.last_changed);				
    	}
        event.allDay = true;
        
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
  			return [CalendarEvent.FromEntity(hass, entityConf)];
  		}
  	}
  	
	async getCalendarEvents(hass, calendar, start, end){
  		let startStr = start.toISOString();
  		let endStr = end.toISOString();
  		
  		let url = `calendars/${calendar}?start=${startStr}&end=${endStr}`;
        let result = await hass.callApi('get', url);
        var events = result.map(x => CalendarEvent.FromEventData(x));
        
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