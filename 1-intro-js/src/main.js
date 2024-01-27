import invoiceByClientName, { Colors,invoices} from './data/invoice';

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
//const invoiceByClientName = invoices.find(i => i.client.name === "Pepe");
console.log(invoiceByClientName('Jhon'));

const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

console.log("Eliminar");
const invoiceDelete = invoices.filter(i => i.id != 2);
console.log(invoiceDelete);

const invoiceFilter2 = invoices.filter(i => i.items.includes(Colors));
console.log(invoiceFilter2);

const result = invoices.some(i => i.client.name === "Pepe");
console.log(result);
