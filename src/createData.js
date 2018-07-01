exports.order = function(order){
    return fetch("/orders", {
        body: JSON.stringify(order),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json()) 
}