import { from, timer } from 'rxjs';
import { take, filter, mergeMap } from 'rxjs/operators';
export default class EventManager {
    constructor(events) {
        this.events = events;
        this.events.sort( ev => ev.seconds );
        this.maxTime = events.length > 0 ? events[events.length - 1].second : 0;
    }
    run() {
        // implement your code here...
        console.log("RUNNING");
        const time$ = timer(0, 1000).pipe(
            take(this.maxTime + 1),
            mergeMap( (currSec) => from( this.events ).pipe(
                    filter(ev => currSec === ev.second ),
                )
            ),
        );

        time$.subscribe( {
            next: val => val.log()
        } )
        
    }
};