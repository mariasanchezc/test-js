import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        // implement your code here ...
        const retrievedEvents = [];
        for ( event of events ) {
            if ( types && event.type && types.includes( event.type ) ) {
               const ev = new Event( event.second, event.type, event.message );
               retrievedEvents.push( ev );
            }
        }
        return new EventManager( retrievedEvents );
    }
};