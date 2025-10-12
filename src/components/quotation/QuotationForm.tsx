import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, Download } from 'lucide-react';
import { QuotationService } from '../../services/quotationService';
import { QUOTATION_CONFIG } from '../../config/quotation';

const quotationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(10, 'Please enter your physical address'),
  vatNumber: z.string().optional(),
  contactPerson: z.string().optional(),
  projectCategory: z.string().min(1, 'Please select a project category'),
  otherCategory: z.string().optional(),
  projectDescription: z.string().min(50, 'Project description must be at least 50 characters'),
  timeline: z.string().min(1, 'Please select a preferred timeline'),
  budgetRange: z.string().optional(),
  referralSource: z.string().optional(),
  serviceType: z.enum(['one-time', 'saas']).refine((val) => val !== undefined, {
    message: 'Please select a service type',
  }),
});

type QuotationFormData = z.infer<typeof quotationSchema>;

const PROJECT_CATEGORIES = QUOTATION_CONFIG.form.options.projectCategories;
const TIMELINE_OPTIONS = QUOTATION_CONFIG.form.options.timelines;
const BUDGET_RANGES = QUOTATION_CONFIG.form.options.budgetRanges;
const SERVICE_TYPES = QUOTATION_CONFIG.form.options.serviceTypes;

interface QuotationFormProps {
  onSuccess: () => void;
}

export const QuotationForm = ({ onSuccess }: QuotationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
  });

  const selectedCategory = watch('projectCategory');
  const serviceType = watch('serviceType');

  const onSubmit = async (data: QuotationFormData) => {
    setIsSubmitting(true);
    try {
      const result = await QuotationService.submitQuotation(data);
      
      if (result.success && result.referenceNumber) {
        setReferenceNumber(result.referenceNumber);
        setSubmitSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          reset();
          setSubmitSuccess(false);
          onSuccess();
        }, 4000);
      } else {
        throw new Error(result.error || 'Failed to submit quotation');
      }
      
    } catch (error) {
      console.error('Error submitting quotation:', error);
      // TODO: Show error message to user
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = async () => {
    const formData = watch();
    
    // Basic validation before download
    if (!formData.fullName || !formData.companyName || !formData.email || !formData.projectCategory) {
      alert('Please fill in the required fields before downloading the PDF.');
      return;
    }

    setIsDownloading(true);
    try {
      const pdfBuffer = QuotationService.downloadPDF(formData);
      
      // Create blob and download
      const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `VXN-NEXIA-Proposal-${formData.companyName.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Quotation Request Submitted!</h3>
        <p className="text-muted-foreground mb-4">
          Your reference number is: <span className="font-mono font-bold text-primary">{referenceNumber}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          We'll send you a detailed proposal via email within 24 hours. Please check your inbox for our Teams meeting link to discuss your project further.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
      {/* Service Type Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          Service Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICE_TYPES.map((serviceType) => (
            <label key={serviceType.value} className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
              <input
                type="radio"
                value={serviceType.value}
                {...register('serviceType')}
                className="text-primary focus:ring-primary"
              />
              <div>
                <div className="font-medium">{serviceType.label}</div>
                <div className="text-sm text-muted-foreground">{serviceType.description}</div>
              </div>
            </label>
          ))}
        </div>
        {errors.serviceType && (
          <p className="text-sm text-red-500">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('fullName')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('companyName')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="Enter your company name"
          />
          {errors.companyName && (
            <p className="text-sm text-red-500">{errors.companyName.message}</p>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Physical Address <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('address')}
          rows={3}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
          placeholder="Enter your physical address"
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* Optional Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            VAT Registration Number
          </label>
          <input
            type="text"
            {...register('vatNumber')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="Enter VAT number (optional)"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Contact Person (if different)
          </label>
          <input
            type="text"
            {...register('contactPerson')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="Enter contact person name"
          />
        </div>
      </div>

      {/* Project Category */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Project Category <span className="text-red-500">*</span>
        </label>
        <select
          {...register('projectCategory')}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
        >
          <option value="">Select a project category</option>
          {PROJECT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.projectCategory && (
          <p className="text-sm text-red-500">{errors.projectCategory.message}</p>
        )}
      </div>

      {/* Other Category Input */}
      {selectedCategory === 'Other' && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Please specify your project category
          </label>
          <input
            type="text"
            {...register('otherCategory')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="Describe your project category"
          />
        </div>
      )}

      {/* Project Description */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('projectDescription')}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
          placeholder="Describe your project requirements in detail (minimum 50 characters)"
        />
        {errors.projectDescription && (
          <p className="text-sm text-red-500">{errors.projectDescription.message}</p>
        )}
      </div>

      {/* Timeline and Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Preferred Timeline <span className="text-red-500">*</span>
          </label>
          <select
            {...register('timeline')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
          >
            <option value="">Select timeline</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.timeline && (
            <p className="text-sm text-red-500">{errors.timeline.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Budget Range {serviceType === 'saas' ? '(Monthly)' : ''}
          </label>
          <select
            {...register('budgetRange')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
          >
            <option value="">Select budget range (optional)</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Referral Source */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          How did you hear about us?
        </label>
        <input
          type="text"
          {...register('referralSource')}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
          placeholder="Google search, referral, social media, etc."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-border/20">
        <button
          type="button"
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="inline-flex items-center px-6 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-muted/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating PDF...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download PDF Preview
            </>
          )}
        </button>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-medium rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Submit Quotation Request
            </>
          )}
        </button>
      </div>
    </form>
  );
};
