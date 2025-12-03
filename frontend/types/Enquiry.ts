export interface Enquiry {
  id?: string;
  name: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
  created_at?: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

