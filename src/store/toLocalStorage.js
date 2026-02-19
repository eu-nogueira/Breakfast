

const toLocalStorage = (payload) =>{
    return {
        payload,
        meta: {
          localStorage: {
            key: 'cakes'
          }
        }
      }
}

export default toLocalStorage