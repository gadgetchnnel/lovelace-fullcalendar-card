import { LitElement, html, css } from "lit-element";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import coreCSS from '@fullcalendar/common/main.css';
import daygridCSS from '@fullcalendar/daygrid/main.css';
import tippy from 'tippy.js';
import tippyCSS from 'tippy.js/dist/tippy.css';
import tippyAnimationCSS from 'tippy.js/animations/scale-extreme.css';
import tippyThemeCSS from './tippy-theme.css';
import { CalendarService } from "./data.js";

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
			${tippyCSS}
			${tippyAnimationCSS}
			${tippyThemeCSS}
			
			:host {
          display: flex;
          flex-direction: column;
          --fc-theme-standard-border-color: var(--divider-color);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }

        :host([narrow]) .header {
          padding-right: 8px;
          padding-left: 8px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: initial;
        }

        .navigation {
          display: flex;
          align-items: center;
          flex-grow: 0;
        }

        a {
          color: var(--primary-text-color);
        }

        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .today {
          margin-right: 20px;
        }

        .prev,
        .next {
          --mdc-icon-button-size: 32px;
        }

        ha-button-toggle-group {
          color: var(--primary-color);
        }

        #calendar {
          flex-grow: 1;
          background-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          min-height: 400px;
          --fc-neutral-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-list-event-hover-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-theme-standard-border-color: var(--divider-color);
          --fc-border-color: var(--divider-color);
        }

        a {
            color: inherit !important; 
        }

        .fc-theme-standard .fc-scrollgrid {
          border: 1px solid var(--divider-color);
        }

        .fc-scrollgrid-section-header td {
          border: none;
        }

        th.fc-col-header-cell.fc-day {
          color: var(--secondary-text-color);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .fc-daygrid-dot-event:hover {
          background-color: inherit
        }

        .fc-daygrid-day-top {
          text-align: center;
          padding-top: 5px;
          justify-content: center;
        }

        table.fc-scrollgrid-sync-table
          tbody
          tr:first-child
          .fc-daygrid-day-top {
          padding-top: 0;
        }

        a.fc-daygrid-day-number {
          float: none !important;
          font-size: 12px;
        }

        .fc .fc-daygrid-day-number {
            padding: 3px !important;
        }

        .fc .fc-daygrid-day.fc-day-today {
          background: inherit;
        }

        td.fc-day-today .fc-daygrid-day-top {
          padding-top: 4px;
        }

        td.fc-day-today .fc-daygrid-day-number {
          height: 24px;
          color: var(--text-primary-color) !important;
          background-color: var(--primary-color);
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          width: max-content;
          min-width: 24px;
          line-height: 140%;
        }

        .fc-daygrid-day-events {
          margin-top: 4px;
        }

        .fc-event {
          border-radius: 4px;
          line-height: 1.7;
        }

        .fc-daygrid-block-event .fc-event-main {
          padding: 0 1px;
        }

        .fc-day-past .fc-daygrid-day-events {
          opacity: 0.5;
        }

        .fc-icon-x:before {
          font-family: var(--material-font-family);
          content: "X";
        }

        .fc-popover {
          background-color: var(--primary-background-color) !important;
        }

        .fc-popover-header {
          background-color: var(--secondary-background-color) !important;
        }

        .fc-theme-standard .fc-list-day-frame {
          background-color: transparent;
        }

        .fc-list.fc-view,
        .fc-list-event.fc-event td {
          border: none;
        }

        .fc-list-day.fc-day th {
          border-bottom: none;
          border-top: 1px solid var(--fc-theme-standard-border-color, #ddd) !important;
        }

        .fc-list-day-text {
          font-size: 16px;
          font-weight: 400;
        }

        .fc-list-day-side-text {
          font-weight: 400;
          font-size: 16px;
          color: var(--primary-color);
        }

        .fc-list-table td,
        .fc-list-day-frame {
          padding-top: 12px;
          padding-bottom: 12px;
        }

        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-time,
        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-title,
          :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-bottom {
          display: none;
        }

        :host([narrow]) .fc .fc-dayGridMonth-view .fc-daygrid-event-harness-abs {
          visibility: visible !important;
          position: static;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-events {
          display: flex;
          min-height: 2em !important;
          justify-content: center;
          flex-wrap: wrap;
          max-height: 2em;
          height: 2em;
          overflow: hidden;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-scrollgrid-sync-table {
          overflow: hidden;
        }

        .fc-scroller::-webkit-scrollbar {
          width: 0.4rem;
          height: 0.4rem;
        }

        .fc-scroller::-webkit-scrollbar-thumb {
          -webkit-border-radius: 4px;
          border-radius: 4px;
          background: var(--scrollbar-thumb-color);
        }

        .fc-scroller {
          overflow-y: auto;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
      		</style>`;
	}
	
  	render() {
		return [this.calendarcss, this.hostcss, html`<div id="calendar"></div>`];
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
  		return this.entities.map(entityConf => {
  			return{
  				events: async (info) => {
  					return await this.calendarService.getEvents(this._hass, entityConf, info.start, info.end);
  				},
  				id: entityConf.entity.startsWith("calendar") ?
  				(entityConf.name ? entityConf.name : this._hass.states[entityConf.entity].attributes.friendly_name)
  				: "Entities",
  				color: entityConf.eventColor
  			}
  		});
  	}
  	
	firstUpdated(){
		var calendarEl = this.root.querySelector("#calendar");
		let portrait = (window.innerHeight > window.innerWidth);
		
		tippy.setDefaultProps({ maxWidth: '', maxHeight: '' });
		
		this.calendar = new Calendar(calendarEl, {
    		plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
    		aspectRatio: this._isPanel ?  (portrait ? 0.4 : 2.5) : 1.35,
    		eventDisplay: "auto",
    		header: {
  				start:   'today prev, next',
  				center: 'title',
  				right:  'dayGridMonth dayGridWeek dayGridDay'
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
  			eventDidMount: function(info) {
    			tippy(info.el, {
  					content: `<div style="min-width:40em; min-height:10em;">
  						<h2>${info.event.title}</h2>
  						<p><ha-icon icon="mdi:clock"></ha-icon> ${info.event.extendedProps.displayTime}</p>
	 					<p></p>
	 					<p><ha-icon icon="mdi:calendar"></ha-icon> ${info.event.source.id}</p>
	 				</div>
	 		`,
	 				arrow: false,
  					animation: 'scale-extreme',
  					placement: 'auto',
  					theme: 'homeassistant',
  					appendTo: calendarEl,
  					trigger: 'click',
  					hideOnClick: true,
  					onHide(instance) {
    					let now = new Date();
    					instance.lastHidden = now;
    				},
    				onShow(instance) {
    					let now = new Date();
    					if(instance.lastHidden){
    						// Block if showing las than 0.5 seconds after hiding
    						let ago = now.getTime() - instance.lastHidden.getTime();
    						if(ago < 500) return false;
    					}	
    				},
    				popperOptions: {
    					modifiers: [
      						{
        						name: 'flip',
        						options: {
          							fallbackPlacements: ['bottom', 'right'],
        						},
      						},
      						{
        						name: 'preventOverflow',
        						options: {
          							altAxis: true,
          							tether: false,
        						},
      						},
    					],
  					},
  					allowHTML: true
				});
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