import { useState, useCallback, useMemo } from 'react';

// Fallback for non-secure contexts (like mobile testing via IP)
const generateId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        try {
            return crypto.randomUUID();
        } catch (e) {
            // Fallback if randomUUID fails
        }
    }
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const useInvoiceState = (initialState) => {
    const [invoice, setInvoice] = useState(initialState);
    const [touched, setTouched] = useState({});

    const updateField = useCallback((section, field, value) => {
        setInvoice((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: {
                    ...prev[section][field],
                    value,
                },
            },
        }));
        setTouched((prev) => ({
            ...prev,
            [`${section}.${field}`]: true,
        }));
    }, []);

    const addItem = useCallback(() => {
        const newItem = {
            description: '',
            rate: '',
            hours: '',
            amount: '0.00',
            id: generateId(),
        };
        setInvoice((prev) => ({
            ...prev,
            items: [...prev.items, newItem],
        }));
    }, []);

    const removeItem = useCallback((id) => {
        setInvoice((prev) => ({
            ...prev,
            items: prev.items.filter((item) => item.id !== id),
        }));
    }, []);

    const updateItem = useCallback((id, field, value) => {
        setInvoice((prev) => {
            const updatedItems = prev.items.map((item) => {
                if (item.id === id) {
                    const updatedItem = { ...item, [field]: value };
                    
                    if (field === 'rate' || field === 'hours') {
                        const rate = parseFloat(updatedItem.rate) || 0;
                        const hours = parseFloat(updatedItem.hours) || 0;
                        updatedItem.amount = (rate * hours).toFixed(2);
                    }
                    
                    return updatedItem;
                }
                return item;
            });
            return { ...prev, items: updatedItems };
        });
        setTouched((prev) => ({
            ...prev,
            [`items.${id}.${field}`]: true,
        }));
    }, []);

    const errors = useMemo(() => {
        const errs = {};
        
        // Validate Company & Client
        ['company', 'client', 'dates'].forEach(section => {
            Object.entries(invoice[section]).forEach(([key, field]) => {
                if (field.required && !field.value) {
                    errs[`${section}.${key}`] = `${field.label} is required`;
                } else if (field.type === 'email' && field.value && !/\S+@\S+\.\S+/.test(field.value)) {
                    errs[`${section}.${key}`] = 'Invalid email address';
                }
            });
        });

        // Validate Items
        if (invoice.items.length === 0) {
            errs.items = 'At least one item is required';
        } else {
            invoice.items.forEach((item) => {
                if (!item.description) errs[`items.${item.id}.description`] = 'Required';
                if (!item.rate || parseFloat(item.rate) <= 0) errs[`items.${item.id}.rate`] = 'Required';
                if (!item.hours || parseFloat(item.hours) <= 0) errs[`items.${item.id}.hours`] = 'Required';
            });
        }

        return errs;
    }, [invoice]);

    const calculateTotal = useCallback(() => {
        return invoice.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0).toFixed(2);
    }, [invoice.items]);

    return {
        invoice,
        updateField,
        addItem,
        removeItem,
        updateItem,
        total: calculateTotal(),
        errors,
        touched,
        isValid: Object.keys(errors).length === 0,
    };
};
