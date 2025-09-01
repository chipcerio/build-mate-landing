'use client';

import { X, Phone, Calendar, User, Building } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [inquiryType, setInquiryType] = useState<'need-work' | 'offer-services' | ''>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const resetForm = () => {
    setInquiryType('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      projectType: '',
      urgency: 'normal'
    });
    setSubmitStatus(null);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_email: 'digitalhorizon073@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not specified',
        inquiry_type: inquiryType === 'need-work' ? 'I need work done' : 'I want to offer services',
        project_type: formData.projectType || 'Not specified',
        urgency: formData.urgency,
        message: formData.message,
        subject: `New Contact Form Submission - ${inquiryType === 'need-work' ? 'Work Request' : 'Service Offer'}`
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    const requiredFields = ['name', 'email', 'phone', 'message'];
    return inquiryType && requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Inquiry Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What brings you here?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setInquiryType('need-work')}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  inquiryType === 'need-work'
                    ? 'border-pickaxe-blue bg-pickaxe-light-orange'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-pickaxe-blue" />
                  <div>
                    <div className="font-medium">I need work done</div>
                    <div className="text-sm text-gray-600">Looking for skilled workers</div>
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('offer-services')}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  inquiryType === 'offer-services'
                    ? 'border-pickaxe-blue bg-pickaxe-light-orange'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-pickaxe-blue" />
                  <div>
                    <div className="font-medium">I want to offer services</div>
                    <div className="text-sm text-gray-600">Join our network of workers</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pickaxe-blue focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pickaxe-blue focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pickaxe-blue focus:border-transparent"
                  placeholder="+63 xxx xxx xxxx"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pickaxe-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Conditional Fields based on inquiry type */}
          {inquiryType === 'need-work' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pickaxe-blue focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation/Remodeling</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="painting">Painting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pickaxe-blue focus:border-transparent"
                  >
                    <option value="normal">Normal (1-2 weeks)</option>
                    <option value="urgent">Urgent (Within a week)</option>
                    <option value="emergency">Emergency (ASAP)</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder={
                inquiryType === 'need-work'
                  ? "Describe your project, timeline, and any specific requirements..."
                  : inquiryType === 'offer-services'
                  ? "Tell us about your skills, experience, and services you offer..."
                  : "Tell us how we can help you..."
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pickaxe-blue focus:border-transparent resize-none"
            />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>Urgent? Call us: <strong>+63 xxx xxx xxxx</strong></span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Large project? <a href="#" className="text-pickaxe-blue hover:underline">Schedule consultation</a></span>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-green-800 font-medium">Message sent successfully!</span>
              </div>
              <p className="text-green-700 text-sm mt-1">We'll get back to you within 24 hours.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✗</span>
                </div>
                <span className="text-red-800 font-medium">Failed to send message</span>
              </div>
              <p className="text-red-700 text-sm mt-1">Please try again or contact us directly at digitalhorizon073@gmail.com</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="px-6 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="px-6 py-2 bg-pickaxe-blue text-white rounded-md hover:bg-pickaxe-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}