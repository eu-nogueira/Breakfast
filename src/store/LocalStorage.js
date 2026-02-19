
const localStorage = (store) => (next) => (action) => {
    const resolve = next(action)
    const { meta } = action
    const state = store.getState().total.cakes
    if(meta && meta.localStorage) {
        const { key } = meta.localStorage
        window.localStorage.setItem(key, JSON.stringify(state))
    }
    return resolve
}

export default localStorage