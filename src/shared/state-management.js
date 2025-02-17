//create pub sub state management function

export  const pubSub = (() => {

    let state = {}

    return {
        publish: (key, value) => {
            const callbacks = state[key];
            callbacks.forEach(cb => {
                cb(value)
            });
        },
        subscribe: (key, callback, context) => {
            state[key] = state[key] || []
            state[key].push(callback.bind(context || this))
        }
    }
})()