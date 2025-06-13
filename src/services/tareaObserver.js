export const taskObserver = {
    subscribers: [],
    subscribe(fn) {
        this.subscribers.push(fn);
    },

    unsubcribe(fn){
        this.subscribers = this.subscribers.filter((sub) => sub !== fn);
    }, 

    notify(data) {
        this.subscribers.forEach((fn) => fn(data));
    },
};