type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events: { [eventName: string]: Callback[] } = {}

    subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        const listeners = this.events[eventName]

        listeners.push(callback);

        return {
            unsubscribe: () => {
                const idx = listeners.indexOf(callback)

                if (idx !== -1) {
                    listeners.splice(idx, 1)
                }
            }
        };
    }

    emit(eventName: string, args: any[] = []) {
        const callbacks = this.events[eventName] || [];

        return callbacks.map(func => func(...args))
    }
}


const emitter = new EventEmitter();

function onClickCallback() { return 99 }
function onClickCallback2() { return 23 }

console.log(emitter.emit('onClick'));

