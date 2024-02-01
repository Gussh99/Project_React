const Colors = {
    producto: "Colors",
    price: 20,
    quantity: 3,
};
const invoices = [
    {
      id: 1,
      name: "Compras de oficina",
      date: new Date(),
      client: {
        id: 2,
        name: "Jorge",
        lastname: "Doe",
        age: 20,
      },
      items: [
        {
          producto: "keyboars",
          price: 200,
          quantity: 4,
        },
        {
          producto: "Mouse",
          price: 599,
          quantity: 2,
        },
        Colors,
      ],
    },
    {
      id: 2,
      name: "Compras de computacion",
      date: new Date(),
      client: {
        id: 2,
        name: "Jhon",
        lastname: "Doe",
        age: 20,
      },
      items: [
        {
          producto: "keyboars",
          price: 200,
          quantity: 4,
        },
        {
          producto: "Monitor",
          price: 599,
          quantity: 2,
        },
        {
          producto: "Proyector",
          price: 9999,
          quantity: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Compras de papeleria",
      date: new Date(),
      client: {
        id: 2,
        name: "Pepe",
        lastname: "Doe",
        age: 20,
      },
      items: [
        {
          producto: "Books",
          price: 150,
          quantity: 4,
        },
        {
          producto: "Pencil",
          price: 7.9,
          quantity: 10,
        },
        Colors,
      ],
    },
  ];

  const invoiceByClientName =(clientName) => {
    return invoices.find(i => i.client.name === clientName);
  }

  const invoiceById = (id) =>{
    return invoices.find(i => i.id === id);
  }

  //Promesas 
  const findInvoiceById = (id) =>{
    const promise = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        const result = invoiceById(id);
        if (result){
          resolve(result);
        } else{
          reject('Error: Al chile no pa no existe')
        }
        
        //console.log("Realizando prueba con periodo de tiempo")
      },2500);
  
    });
  
    return promise;
  };

  export{
    Colors,
    invoices as default,
    invoiceByClientName,
    invoiceById,
    findInvoiceById
  }