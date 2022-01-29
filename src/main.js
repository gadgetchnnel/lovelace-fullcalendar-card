import { LitElement, html, css, unsafeCSS } from "lit-element";
import { Calendar } from '@fullcalendar/core';
import fullcalendarStyle from "@fullcalendar/common/main.css";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from "@fullcalendar/daygrid";
import daygridStyle from "@fullcalendar/daygrid/main.css";
import listPlugin from "@fullcalendar/list";
import listStyle from "@fullcalendar/list/main.css";
import tippy from 'tippy.js';
import tippyStyle from 'tippy.js/dist/tippy.css';
import tippyAnimationStyle from 'tippy.js/animations/scale-extreme.css';
import tippyThemeStyle from './tippy-theme.css';
import { CalendarService } from "./data.js";
import { haStyle } from "./styles.js"
import { mdiViewAgenda, mdiViewDay, mdiViewModule, mdiViewWeek } from "./icons.js";
import { applyThemesOnElement } from 'custom-card-helpers';
const viewButtons = [
  { label: "Month View", value: "dayGridMonth", iconPath: mdiViewModule },
  { label: "Week View", value: "dayGridWeek", iconPath: mdiViewWeek },
  { label: "Day View", value: "dayGridDay", iconPath: mdiViewDay },
  { label: "List View", value: "list", iconPath: mdiViewAgenda },
];


const getListWeekRange = (currentDate) => {
  const startDate = new Date(currentDate.valueOf());
  const endDate = new Date(currentDate.valueOf());

  endDate.setDate(endDate.getDate() + 7);

  return { start: startDate, end: endDate };
};

class FullCalendarCard extends LitElement {

    constructor() {
    	super();
    	this._activeView = "dayGridMonth";
    	this.initialView = "dayGridMonth";
    	this.views = [
    		"dayGridMonth",
    		"dayGridWeek",
    		"dayGridDay",
  		];
    }
    
	setConfig(config) {
		if(!config || !config.entities)
			throw new Error("Invalid configuration");
		this._config = config;
		this.entities = this.processConfigEntities(this._config.entities);
		this.calendarService = new CalendarService();
	}
 
	static get styles() {
    console.log("getting styles");
    return [
      haStyle,
      css`
        ${unsafeCSS(fullcalendarStyle)}
      	${unsafeCSS(daygridStyle)}
      	${unsafeCSS(listStyle)}
      	${unsafeCSS(tippyStyle)}
      	${unsafeCSS(tippyAnimationStyle)}
      	${unsafeCSS(tippyThemeStyle)}
      	
        :host {
          display: flex;
          flex-direction: column;
          --fc-theme-standard-border-color: var(--divider-color);
        }
        
        :host([ispanel]) {
    		height: calc(100% - 6em);
        }
        
        :host([ispanel]) ha-card {
        	height: calc(100% - 6em);
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
          height: 100%;
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
      `,
    ];
  }
  
	get calendarHtml() {
		const viewToggleButtons =  viewButtons.filter((button) =>
      		this.views.includes(button.value)
    	);
		
		return html`<ha-card>
      ${this.calendar
        ? html`
            <div class="header">
              ${!this.narrow
                ? html`
                    <div class="navigation">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >Today</mwc-button
                      >
                      <ha-icon-button
                        label=${this._hass.localize("ui.common.previous")}
                        icon="hass:chevron-left"
                        class="prev"
                        @click=${this._handlePrev}
                      >
                      </ha-icon-button>
                      <ha-icon-button
                        label=${this._hass.localize("ui.common.next")}
                        icon="hass:chevron-right"
                        class="next"
                        @click=${this._handleNext}
                      >
                      </ha-icon-button>
                    </div>
                    <h1>
                      ${this.calendar.view.title}
                    </h1>
                    <ha-button-toggle-group
                      .buttons=${viewToggleButtons}
                      .active=${this._activeView}
                      @value-changed=${this._handleView}
                    ></ha-button-toggle-group>
                  `
                : html`
                    <div class="controls">
                      <h1>
                        ${this.calendar.view.title}
                      </h1>
                      <div>
                        <ha-icon-button
                          label=${this._hass.localize("ui.common.previous")}
                          icon="hass:chevron-left"
                          class="prev"
                          @click=${this._handlePrev}
                        >
                        </ha-icon-button>
                        <ha-icon-button
                          label=${this._hass.localize("ui.common.next")}
                          icon="hass:chevron-right"
                          class="next"
                          @click=${this._handleNext}
                        >
                        </ha-icon-button>
                      </div>
                    </div>
                    <div class="controls">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >Today</mwc-button
                      >
                      <ha-button-toggle-group
                        .buttons=${viewToggleButtons}
                        .active=${this._activeView}
                        @value-changed=${this._handleView}
                      ></ha-button-toggle-group>
                    </div>
                  `}
            </div>
          `
        : ""}
      <div id="calendar"></div></ha-card>
    `;
	}
	
  	render() {
		return [this.calendarHtml];
	}
	
  	get root(){
  		return this.shadowRoot ? this.shadowRoot : this;
  	}
  	
  	static get properties() {
   		return {
   			narrow: { 
   				type: Boolean,
        		reflect: true
        	},
        	views: {
        		type: Object
        	},
        	initialView: {
        		type: Object
        	},
   			isPanel: { 
   				type: Boolean,
        		reflect: true
        	},
        	_hass: {
        		type: Object
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
  	
  	updateAspectRatio(){
  		this._measureCard();
  		
  		if(!this.calendar) return;
  		
  		this.calendar.updateSize();
  		// let portrait = (window.innerHeight > window.innerWidth);
// 			
// 			let aspectRatio = this._isPanel ?  (portrait ? 0.4 : 2.5) : 1.35;
// 			if(aspectRatio != this.calendar.getOption('aspectRatio')){
// 				this.calendar.setOption("aspectRatio", aspectRatio);
// 			}
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
  	

  	updated(changedProps){
    	super.updated(changedProps);
	
		if (!this.calendar) {
      		return;
    	}

    	if (changedProps.has("narrow")) {
      		this.views = this.narrow ? ["list", "dayGridMonth", "dayGridDay"] 
      			: [ "dayGridMonth", "dayGridWeek", "dayGridDay"];
      		this.initialView = this.narrow ? "list" : "dayGridMonth";
      		this._activeView = this.initialView;
      		this.calendar.changeView(this._activeView);
      		this.calendar.setOption("eventDisplay", this.narrow ? "list-item" : "auto");
      		this.requestUpdate();
    	}
    	
    	if (changedProps.has("views") && !this.views.includes(this._activeView)) {
      		this._activeView = this.initialView && this.views.includes(this.initialView)
          		? this.initialView
          		: this.views[0];
      		this.calendar.changeView(this._activeView);
      		this.requestUpdate();
    	}
    	
    	if (!this._config) {
      		return;
    	}

    	if (this._hass) {
      		const oldHass = changedProps.get('_hass');
      			if (!oldHass || oldHass.themes !== this._hass.themes) {
        			applyThemesOnElement(this, this._hass.themes, this._config.theme);
      			}
    	}
  	}
  	
	firstUpdated(){
		var calendarEl = this.root.querySelector("#calendar");
		let portrait = (window.innerHeight > window.innerWidth);
		
		tippy.setDefaultProps({ maxWidth: '', maxHeight: '' });
		
		this.calendar = new Calendar(calendarEl, {
    		plugins: [dayGridPlugin, listPlugin, interactionPlugin],
    		//aspectRatio: this.isPanel ?  (portrait ? 0.4 : 2.5) : 1.35,
    		initialView: this.initialView,
    		locale: this._hass.language,
    		eventDisplay: "auto",
    		views: {
    			list: {
      				visibleRange: getListWeekRange,
    			},
  			},
    		headerToolbar: false,
    		height: "parent",
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
  		this._measureCard();
  		this.requestUpdate();
  		
	}
  	
  	getCardSize() {
    	return 2;
  	}
  	
  	_measureCard() {
  		let card = this.shadowRoot.querySelector("#calendar");
  		if(!card) return;
    	this.narrow = card.offsetWidth < 870;

		this.requestUpdate();
  	}
  	
	set hass(hass) {
		this._hass = hass;
		if(this.calendar){
			this.updateAspectRatio();
		}
	}
	
	_handleNext() {
    	this.calendar.next();
    	this.requestUpdate();
  	}

	_handlePrev() {
    	this.calendar.prev();
    	this.requestUpdate();
  	}
  	
	_handleToday() {
    	this.calendar.today();
		this.requestUpdate();
	}
  
  	_handleView(ev) {
    	this._activeView = ev.detail.value;
    	this.calendar.changeView(this._activeView);
    	this.requestUpdate();
  	}
}
    
customElements.define('fullcalendar-card', FullCalendarCard);