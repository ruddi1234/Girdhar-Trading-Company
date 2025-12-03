'use client';

import { useEnquiryForm } from '@/hooks/useEnquiryForm';
import InputField from './InputField';
import GreenButton from './GreenButton';
import { CheckCircle, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryFormProps {
  defaultProduct?: string;
}

export default function EnquiryForm({ defaultProduct }: EnquiryFormProps) {
  const { formData, loading, error, success, handleChange, handleSubmit, resetForm } = useEnquiryForm(defaultProduct);

  return (
    <AnimatePresence mode="wait">
      {success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200 rounded-3xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-soft-lg">
              <CheckCircle className="w-12 h-12 text-primary-600" />
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-primary-900 mb-3"
          >
            Enquiry Submitted!
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-700 mb-6 text-lg"
          >
            Thank you! We'll get back to you soon with pricing and details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GreenButton onClick={resetForm} variant="primary">
              <Sparkles size={20} />
              Submit Another Enquiry
            </GreenButton>
          </motion.div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3"
            >
              <span className="text-2xl">⚠️</span>
              <span className="font-medium">{error}</span>
            </motion.div>
          )}

          <InputField
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={(value) => handleChange('name', value)}
            placeholder="Enter your full name"
            required
          />

          <InputField
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(value) => handleChange('phone', value)}
            placeholder="Enter 10-digit phone number"
            required
          />

          <InputField
            label="Product"
            type="select"
            value={formData.product}
            onChange={(value) => handleChange('product', value)}
            required
            options={[
              { value: 'Rice', label: 'Premium Rice' },
              { value: 'Wheat', label: 'Premium Wheat' },
            ]}
          />

          <InputField
            label="Quantity Required"
            type="text"
            value={formData.quantity}
            onChange={(value) => handleChange('quantity', value)}
            placeholder="e.g., 100 tons, 50 quintals"
            required
          />

          <InputField
            label="Additional Message"
            type="textarea"
            value={formData.message}
            onChange={(value) => handleChange('message', value)}
            placeholder="Any specific requirements or questions..."
            rows={4}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GreenButton type="submit" disabled={loading} fullWidth variant="primary">
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Enquiry
                  <Sparkles size={18} />
                </>
              )}
            </GreenButton>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

