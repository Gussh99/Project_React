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

const invoicesName = invoices.map(i => {
  return i.name;
});

console.log(invoices);
console.log(invoicesName);

const invoicesCliente = invoices.map(i => {
  return i.client.name;
});

console.log(invoicesCliente);
console.log("Busqueda por id");
const invoiceById = invoices.find(i => i.id === 2);
console.log(invoiceById);
console.log("Busqueda por Cliente");
const invoiceByClientName = invoices.find(i => i.client.name === "Pepe");
console.log(invoiceByClientName);

const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

console.log("Eliminar");
const invoiceDelete = invoices.filter(i => i.id != 2);
console.log(invoiceDelete);

const invoiceFilter2 = invoices.filter(i => i.items.includes(Colors));
console.log(invoiceFilter2);

const result = invoices.some(i => i.client.name === "Pepe");
console.log(result);
