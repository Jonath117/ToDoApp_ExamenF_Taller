class CategoryObserver {
    constructor(){
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter((sub) => sub !== fn);
    }

    notify(data) {
        this.subscribers.forEach((fn) => fn(data));
    }
}

export const categoryObserver = new CategoryObserver();