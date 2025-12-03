import { useState } from 'react';
import { EnquiryFormData } from '@/types/Enquiry';
import { enquiryService } from '@/services/enquiryService';

export const useEnquiryForm = (defaultProduct?: string) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    product: defaultProduct || '',
    quantity: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.phone.trim()) return 'Phone number is required';
    if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      return 'Please enter a valid 10-digit phone number';
    }
    if (!formData.product) return 'Please select a product';
    if (!formData.quantity.trim()) return 'Quantity is required';
    return null;
  };

  const handleChange = (field: keyof EnquiryFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await enquiryService.sendEnquiry(formData);
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        product: '',
        quantity: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit enquiry');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      product: '',
      quantity: '',
      message: '',
    });
    setError(null);
    setSuccess(false);
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

