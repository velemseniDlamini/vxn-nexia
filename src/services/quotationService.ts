import { generateQuotationPDF, generateReferenceNumber } from './pdfGenerator';
import type { QuotationData } from './pdfGenerator';
import { EmailService } from './emailService';

export interface QuotationFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  vatNumber?: string;
  contactPerson?: string;
  projectCategory: string;
  otherCategory?: string;
  projectDescription: string;
  timeline: string;
  budgetRange?: string;
  referralSource?: string;
  serviceType: 'one-time' | 'saas';
}

export interface QuotationSubmissionResult {
  success: boolean;
  referenceNumber?: string;
  error?: string;
}

export class QuotationService {
  public static async submitQuotation(formData: QuotationFormData): Promise<QuotationSubmissionResult> {
    try {
      // Generate reference number
      const referenceNumber = generateReferenceNumber(formData.fullName);
      
      // Prepare quotation data
      const quotationData: QuotationData = {
        ...formData,
        referenceNumber,
        submissionDate: new Date(),
      };
      
      // Generate PDF
      const pdfBuffer = generateQuotationPDF(quotationData);
      
      // Generate emails
      const clientEmail = EmailService.generateClientEmail(quotationData, pdfBuffer);
      const internalEmail = EmailService.generateInternalEmail(quotationData, pdfBuffer);
      
      // Send emails
      const [clientEmailSent, internalEmailSent] = await Promise.all([
        EmailService.sendEmail(clientEmail),
        EmailService.sendEmail(internalEmail),
      ]);
      
      if (!clientEmailSent || !internalEmailSent) {
        throw new Error('Failed to send emails');
      }
      
      // TODO: Store in database
      await this.storeQuotationRequest(quotationData);
      
      // TODO: Log for analytics
      this.logQuotationSubmission(quotationData);
      
      return {
        success: true,
        referenceNumber,
      };
      
    } catch (error) {
      console.error('Error submitting quotation:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }
  
  private static async storeQuotationRequest(data: QuotationData): Promise<void> {
    // TODO: Implement database storage
    console.log('Storing quotation request:', {
      referenceNumber: data.referenceNumber,
      companyName: data.companyName,
      projectCategory: data.projectCategory,
      submissionDate: data.submissionDate,
    });
    
    // Mock storage delay
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  private static logQuotationSubmission(data: QuotationData): void {
    // TODO: Implement analytics tracking
    console.log('Analytics: Quotation submitted', {
      category: data.projectCategory,
      serviceType: data.serviceType,
      timeline: data.timeline,
      budgetRange: data.budgetRange,
      referralSource: data.referralSource,
    });
  }
  
  public static downloadPDF(formData: QuotationFormData): Uint8Array {
    const referenceNumber = generateReferenceNumber(formData.fullName);
    const quotationData: QuotationData = {
      ...formData,
      referenceNumber,
      submissionDate: new Date(),
    };
    
    return generateQuotationPDF(quotationData);
  }
}
