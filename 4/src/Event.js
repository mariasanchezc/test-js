export default class Event {
// implement your code here...
    constructor( second, type, message ) {
        this.second  = second;
        this.type    = type;
        this.message = message;
    }

    log() {
        console.log(`At second ${this.second}: {type: "${this.type}", message: "${this.message}"}`);
    }
};