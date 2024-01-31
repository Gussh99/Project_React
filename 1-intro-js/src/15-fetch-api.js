const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

/*httpClient.then(response =>{
  //impresion del log del json de users
  response.json().then(data =>{
    console.log(data)
  })
})*/

httpClient
  .then(reponse => reponse.json())
  .then(data => console.log(data));

