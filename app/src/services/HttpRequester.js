class HttpRequester {

    static async get(route) {
      const url = `${process.env.API_URL}/${route}`
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
  
    static async post(route, payload) {
      let postObject = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
      const url = `${process.env.API_URL}/${route}`
      const response = await fetch(url, postObject)
      const data = await response.json()
      return data
    }
  }
  
  export default HttpRequester
  