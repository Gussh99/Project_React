import { findInvoiceById } from './data/invoice';

findInvoiceById(1)
  .then(console.log)
  .catch(console.error);


