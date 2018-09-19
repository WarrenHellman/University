// A cleaned up version of the fetch version. Each function is now asynchronous. It creates a response variable that waits for the fetch call and returns that response. Our app.js file will console log the asynchronous response. 

class EasyHTTP {
  // Make HTTP GET Request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  // MAke HTTP Post Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

  // MAke HTTP Put Request
  async put(url, data) {
    const response = await fetch(url,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }
  // MAke HTTPdelete Request
  async delete(url) {
    const response = await fetch(url,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const resData = await 'Resource Deleted';
    return resData;
  }
}