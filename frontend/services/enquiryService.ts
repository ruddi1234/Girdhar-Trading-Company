import { EnquiryFormData, Enquiry } from '@/types/Enquiry';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const enquiryService = {
  async sendEnquiry(data: EnquiryFormData): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to submit enquiry');
    }
    
    return response.json();
  },

  async getEnquiries(): Promise<Enquiry[]> {
    const response = await fetch(`${API_BASE_URL}/api/enquiry`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch enquiries');
    }
    
    return response.json();
  },
};

