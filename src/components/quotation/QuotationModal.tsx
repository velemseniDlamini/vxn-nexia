import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { QuotationForm } from './QuotationForm';
import './QuotationModal.css';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuotationModal = ({ isOpen, onClose }: QuotationModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 overflow-y-auto quotation-modal-overlay">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity quotation-modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4 quotation-modal-container">
        <div 
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-hidden quotation-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Request a Quotation</h2>
              <p className="text-sm text-gray-600 mt-1">
                Tell us about your project and we'll provide a detailed proposal
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-muted/50 transition-colors"
              title="Close modal"
              aria-label="Close quotation modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            <QuotationForm onSuccess={onClose} />
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at the root level
  return createPortal(modalContent, document.body);
};
