/*httpClient
  .then(reponse => reponse.json())
  .then(data => console.log(data));*/

  const findAllUser = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const ul = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.innerText = user.name;
      ul.append(li);
      console.log(user.name)
    });

    document.getElementById('root').append(ul);
  }

  const users = await findAllUser();
  console.log(users);
  console.log('Provando fetch api')
