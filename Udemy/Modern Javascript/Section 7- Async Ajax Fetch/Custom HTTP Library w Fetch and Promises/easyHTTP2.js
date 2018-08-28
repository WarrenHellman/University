class EasyHTTP {
  // Make HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // MAke HTTP Post Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // MAke HTTP Put Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
  // MAke HTTPdelete Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted'))
      .catch(err => reject(err));
    });
  }
}