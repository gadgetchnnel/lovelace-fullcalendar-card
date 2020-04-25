export class CalendarEvent {
	constructor(eventData){
		this.title = eventData.summary ? eventData.summary : eventData.title; 
        this.start = eventData.start.date ? eventData.start.date : eventData.start.dateTime ? eventData.start.dateTime : eventData.start;
        this.end = eventData.end.date ? eventData.end.date : eventData.end.dateTime ? eventData.end.dateTime : eventData.end;
        this.allDay = (!!eventData.start.date);
	}
}

export class CalendarService {
	constructor() {
		this.eventData = {};
	}
	
	async getCalendarEvents(hass, calendar, start, end){
  		if(!hass) return [];
  		let startStr = start.toISOString();
  		let endStr = end.toISOString();
  		
  		let url = `calendars/${calendar.entity}?start=${startStr}&end=${endStr}`;
        let result = await hass.callApi('get', url);
        var events = result.map(x => new CalendarEvent(x));
        
        let oldEvents = this.eventData[calendar.entity] || [];
        oldEvents.push(...events);
        
        this.eventData[calendar.entity] = oldEvents.filter((thing, index) => {
  			const _thing = JSON.stringify(thing);
  			return index === oldEvents.findIndex(obj => {
    			return JSON.stringify(obj) === _thing;
  			});
		});
		
        return this.eventData[calendar.entity];
  	}
}