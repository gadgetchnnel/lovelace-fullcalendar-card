import { LitElement, html, css } from "lit-element";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import coreCSS from '@fullcalendar/core/main.css';
import daygridCSS from '@fullcalendar/daygrid/main.css';
import timegridCSS from '@fullcalendar/timegrid/main.css';
import { CalendarEvent, CalendarService } from "./data.js";

class FullCalendarCard extends LitElement {

	setConfig(config) {
		if(!config || !config.entities)
			throw new Error("Invalid configuration");
		this._config = config;
		this.entities = this.processConfigEntities(this._config.entities);
		this.calendarService = new CalendarService();
	}
 
	createRenderRoot() {
		return this;
	}

	get hostcss() {
		return this.isPanel ? html`<style type="text/css">
			:host #calendar {
        		width: 100%;
        		height: 100%;
        		color: var(--primary-text-color);
        		background-color: var(--paper-card-background-color);
      		}
      		</style>` : html`<style type="text/css">
      			:host #calendar {
      				color: var(--primary-text-color);
        			background-color: var(--paper-card-background-color);
      			}
      		</style>`;
	}
	
	get calendarcss() {
		return html`<style type="text/css">
      		${coreCSS}
			${daygridCSS}
			${timegridCSS}
      		</style>`;
	}
	
  	render() {
		return [this.hostcss, this.calendarcss, html`<div id="calendar"></div>`];
	}
	
  	get root(){
  		return this.shadowRoot ? this.shadowRoot : this;
  	}
  	
  	static get properties() {
   		return {
   			isPanel: { 
   				type: Boolean,
        		reflectToAttribute: true
        	} 
        };
 	}
 	
 	processConfigEntities(entities) {
  		if (!Array.isArray(entities)) {
    		throw new Error("Entities need to be an array");
  		}
  		
		return entities.map((entityConf, index) => {
			if (typeof entityConf === "string") {
      			entityConf = { entity: entityConf, eventColor: "#3788d8" };
    		} else if (typeof entityConf === "object" && !Array.isArray(entityConf)) {
      			if (!entityConf.entity) {
        			throw new Error(
          				`Entity object at position ${index} is missing entity field.`
        			);
        			if(!entityConf.eventColor) entityConf = {...entityConf, eventColor: "#3788d8"};
        		 }
    		} else {
      			throw new Error(`Invalid entity specified at position ${index}.`);
    		}
			return entityConf;
  		});
	}
 	
  	connectedCallback() {
  		super.connectedCallback();
   		let fontFaceSheet = new CSSStyleSheet();
    	fontFaceSheet.replaceSync(`@font-face {
       		font-family: "fcicons";
       		src: url("data:application/x-font-ttf;charset=utf-8;base64,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") format("truetype");
     	}`);
     	document.adoptedStyleSheets = [...document.adoptedStyleSheets, fontFaceSheet];
  	}
  	
  	get isPanel(){
  		return this._isPanel;
  	}
  	
  	set isPanel(isPanel){
  		this._isPanel = isPanel;
  	}
  	
  	updateAspectRatio(){
  		let portrait = (window.innerHeight > window.innerWidth);
			
			let aspectRatio = this._isPanel ?  (portrait ? 0.4 : 2.5) : 1.35;
			if(aspectRatio != this.calendar.getOption('aspectRatio')){
				this.calendar.setOption("aspectRatio", aspectRatio);
			}
  	}
  	
  	getEventSources(){
  		return this.entities.map(calendar => {
  			return{
  				events: async (info) => {
  					return await this.calendarService.getCalendarEvents(this._hass, calendar, info.start, info.end);
  				},
  				color: calendar.eventColor
  			}
  		});
  	}
  	
	firstUpdated(){
		var calendarEl = this.root.querySelector("#calendar");
		console.log("Calendar Element", calendarEl);
		let portrait = (window.innerHeight > window.innerWidth);
		this.calendar = new Calendar(calendarEl, {
    		plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
    		aspectRatio: this._isPanel ?  (portrait ? 0.4 : 2.5) : 1.35,
    		header: {
  				left:   'title',
  				center: '',
  				right:  'today dayGridMonth timeGridWeek timeGridDay prev,next'
			},
    		eventTimeFormat: {
    			hour: 'numeric',
    			minute: '2-digit',
    			hour12: false
  			},
  			eventSources: this.getEventSources(),
  			windowResize: () => {
    			this.updateAspectRatio();
  			},
  			dateClick: (info) => {
    			this.calendar.changeView('timeGridDay', info.dateStr);
  			}
  		});
  		
  		this.calendar.render();
	}
  	
  	getCardSize() {
    	return 2;
  	}
  	
	set hass(hass) {
		this._hass = hass;
		if(this.calendar){
			this.updateAspectRatio();
		}
	}
}
    
customElements.define('fullcalendar-card', FullCalendarCard);