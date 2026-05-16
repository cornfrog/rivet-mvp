export const createInvoiceInput = (
    fieldName,
    fieldValue,
    fieldLabel,
    fieldPlaceholder,
    fieldType,
    fieldRequired = true
) => ({
    name: fieldName,
    value: fieldValue,
    label: fieldLabel,
    placeholder: fieldPlaceholder,
    type: fieldType,
    required: fieldRequired,
});