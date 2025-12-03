'use client';

import { motion } from 'framer-motion';
import { ChangeEvent, useState } from 'react';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'tel' | 'email' | 'textarea' | 'select';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

export default function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  options = [],
  rows = 4,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const baseClasses = 'w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none';
  const stateClasses = error
    ? 'border-red-300 focus:border-red-500'
    : isFocused
    ? 'border-primary-500 bg-primary-50/30'
    : 'border-gray-200 hover:border-primary-300';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <motion.label
        className={`block text-sm font-medium mb-2 transition-colors ${
          error ? 'text-red-600' : isFocused ? 'text-primary-700' : 'text-gray-700'
        }`}
        animate={{ scale: isFocused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </motion.label>

      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClasses} ${stateClasses} resize-none`}
        />
      ) : type === 'select' ? (
        <select
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${baseClasses} ${stateClasses} cursor-pointer`}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`${baseClasses} ${stateClasses}`}
        />
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1 flex items-center gap-1"
        >
          <span>⚠</span> {error}
        </motion.p>
      )}
    </motion.div>
  );
}

