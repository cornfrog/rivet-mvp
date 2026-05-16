import { createInvoiceInput } from "./invoice_factories";

export const DEFAULT_INVOICE_TEMPLATE = {
    company: {
        name: createInvoiceInput('company-name', '', 'Company Name', 'Your Company', 'text', true),
        address: createInvoiceInput('company-address', '', 'Address', '123 Business St, City', 'text', false),
        email: createInvoiceInput('company-email', '', 'Email', 'hello@company.com', 'email', false),
        phone: createInvoiceInput('company-phone', '', 'Phone', '+1 234 567 890', 'tel', false),
    },
    client: {
        name: createInvoiceInput('client-name', '', 'Client Name', 'Client Name', 'text', true),
        address: createInvoiceInput('client-address', '', 'Address', '456 Client Rd, City', 'text', false),
        email: createInvoiceInput('client-email', '', 'Email', 'billing@client.com', 'email', false),
        phone: createInvoiceInput('client-phone', '', 'Phone', '+1 234 567 890', 'tel', false),
    },
    dates: {
        issueDate: createInvoiceInput('issue-date', new Date().toISOString().split('T')[0], 'Issue Date', '', 'date', true),
        dueDate: createInvoiceInput('due-date', new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], 'Due Date', '', 'date', true),
    },
    items: [],
};
