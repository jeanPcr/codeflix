module.exports = class myEventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [fn];
    } else {
      this.events[eventName].push(fn);
    }
  }
  emit(eventName, ...data) {
    const listeners = this.events[eventName];

    if (!listeners) return;
    listeners.forEach((listener) => {
      listener(data);
    });
  }
};
