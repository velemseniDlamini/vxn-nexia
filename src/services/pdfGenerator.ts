import jsPDF from 'jspdf';
import { QUOTATION_CONFIG } from '../config/quotation';

export interface QuotationData {
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
  referenceNumber: string;
  submissionDate: Date;
}

export class PDFGenerator {
  private doc: jsPDF;
  private pageHeight: number;
  private pageWidth: number;
  private currentY: number;
  private margin: number;

  constructor() {
    this.doc = new jsPDF('p', 'mm', 'a4');
    this.pageHeight = this.doc.internal.pageSize.height;
    this.pageWidth = this.doc.internal.pageSize.width;
    this.margin = QUOTATION_CONFIG.pdf.margins.left;
    this.currentY = this.margin;
  }

  private addNewPage(): void {
    this.doc.addPage();
    this.currentY = this.margin;
    this.addPageNumber();
  }

  private addPageNumber(): void {
    const pageCount = this.doc.getNumberOfPages();
    this.doc.setFontSize(10);
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.mutedColor);
    this.doc.text(
      `Page ${pageCount}`,
      this.pageWidth - this.margin,
      this.pageHeight - 10,
      { align: 'right' }
    );
  }

  private checkPageBreak(requiredHeight: number): void {
    if (this.currentY + requiredHeight > this.pageHeight - this.margin) {
      this.addNewPage();
    }
  }

  private addTitle(title: string, fontSize: number = 16): void {
    this.checkPageBreak(20);
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.primaryColor);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(title, this.margin, this.currentY);
    this.currentY += 15;
  }

  private addSubtitle(subtitle: string, fontSize: number = 12): void {
    this.checkPageBreak(15);
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.textColor);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(subtitle, this.margin, this.currentY);
    this.currentY += 10;
  }

  private addText(text: string, fontSize: number = 10, bold: boolean = false): void {
    this.checkPageBreak(10);
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.textColor);
    this.doc.setFont('helvetica', bold ? 'bold' : 'normal');
    
    const lines = this.doc.splitTextToSize(text, this.pageWidth - 2 * this.margin);
    lines.forEach((line: string) => {
      this.checkPageBreak(8);
      this.doc.text(line, this.margin, this.currentY);
      this.currentY += 6;
    });
    this.currentY += 4;
  }

  private addSpacer(height: number = 10): void {
    this.currentY += height;
  }

  private addHeader(): void {
    // Add VXN-NEXIA logo/branding
    this.doc.setFontSize(24);
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.primaryColor);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('VXN-NEXIA', this.margin, this.currentY);
    this.currentY += 15;

    // Add tagline
    this.doc.setFontSize(10);
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.mutedColor);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Innovative Software Solutions', this.margin, this.currentY);
    this.currentY += 20;
  }

  private addCoverPage(data: QuotationData): void {
    this.addHeader();
    
    // Main title
    this.addTitle(`PROPOSAL: ${data.projectCategory} - ${data.companyName}`, 20);
    this.addSpacer(10);
    
    // Submission date
    this.addText(`Submission Date: ${data.submissionDate.toLocaleDateString('en-ZA')}`, 12, true);
    this.addSpacer(20);
    
    // Company branding section
    this.addSubtitle('About VXN-NEXIA');
    this.addText('VXN-NEXIA is a leading software development company specializing in innovative digital solutions. We transform ideas into powerful, scalable applications that drive business growth.');
    
    this.addSpacer(30);
    
    // Contact information
    this.addSubtitle('Contact Information');
    this.addText(`Email: ${QUOTATION_CONFIG.company.email}`);
    this.addText(`Phone: ${QUOTATION_CONFIG.company.phone}`);
    this.addText(`Website: ${QUOTATION_CONFIG.company.website}`);
    this.addText(`Address: ${QUOTATION_CONFIG.company.address.street}, ${QUOTATION_CONFIG.company.address.area}, ${QUOTATION_CONFIG.company.address.city} ${QUOTATION_CONFIG.company.address.postalCode}`);
    
    this.addPageNumber();
  }

  private addProposalHeader(data: QuotationData): void {
    this.addNewPage();
    
    this.addTitle('DEVELOPMENT GUIDE AND PROPOSAL FOR:', 16);
    this.addSpacer(10);
    
    this.addText(`Client: ${data.companyName}`, 12, true);
    this.addText(`Project: ${data.projectCategory}`, 12, true);
    this.addText(`Date: ${data.submissionDate.toLocaleDateString('en-ZA')}`, 12, true);
    this.addText(`Our Reference: ${data.referenceNumber}`, 12, true);
    
    this.addSpacer(20);
  }

  private addCoverLetter(data: QuotationData): void {
    this.addNewPage();
    
    const contactPerson = data.contactPerson || data.fullName;
    
    this.addText(`To: ${data.companyName}`, 10, true);
    this.addText(`Attention: ${contactPerson}`, 10, true);
    this.addText(data.address);
    this.addSpacer(10);
    
    this.addText(`REF: ${data.projectCategory} - Initial Consultation Proposal`, 10, true);
    this.addSpacer(10);
    
    this.addText(`Dear ${contactPerson},`);
    this.addSpacer(5);
    
    this.addText(`Thank you for your interest in VXN-NEXIA's services. We appreciate the opportunity to discuss your ${data.projectCategory} requirements.`);
    this.addSpacer(5);
    
    this.addText('This proposal outlines the next steps for your project. We have scheduled an initial consultation to understand your specific needs and provide a detailed quotation tailored to your requirements.');
    this.addSpacer(5);
    
    this.addText('Please find the meeting details below and do not hesitate to contact us for any questions or clarifications.');
    this.addSpacer(10);
    
    this.addText('Warmest regards,');
    this.addSpacer(15);
    
    this.addText('VXN-NEXIA Team', 10, true);
    this.addText('Innovative Software Solutions');
    
    this.addSpacer(20);
    
    // Contact information block
    this.addSubtitle('Contact Information');
    this.addText(QUOTATION_CONFIG.company.phone);
    this.addText(QUOTATION_CONFIG.company.email);
    this.addText(QUOTATION_CONFIG.company.website);
    this.addSpacer(10);
    
    this.addText('Head Office:');
    this.addText(`${QUOTATION_CONFIG.company.address.street}`);
    this.addText(`${QUOTATION_CONFIG.company.address.area}`);
    this.addText(`${QUOTATION_CONFIG.company.address.city} ${QUOTATION_CONFIG.company.address.postalCode}`);
    this.addSpacer(10);
    
    this.addText(`${QUOTATION_CONFIG.company.registration.beeLevel}`, 10, true);
  }

  private addTableOfContents(): void {
    this.addNewPage();
    
    this.addTitle('TABLE OF CONTENTS');
    this.addSpacer(10);
    
    const contents = [
      '1. Introduction',
      '2. Project Overview',
      '3. Next Steps',
      '4. Meeting Details',
      '5. Our Development Approach',
      '6. Terms & Acceptance',
    ];
    
    contents.forEach((item) => {
      this.addText(`${item}`, 11);
    });
  }

  private addIntroduction(data: QuotationData): void {
    this.addNewPage();
    
    this.addTitle('1. INTRODUCTION');
    
    this.addSubtitle('1.1 About VXN-NEXIA');
    this.addText('VXN-NEXIA is a premier software development company dedicated to creating innovative digital solutions that empower businesses to thrive in the digital age. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality, scalable, and user-centric applications.');
    
    this.addSubtitle('1.2 Project Background');
    this.addText(`Project Category: ${data.projectCategory}`);
    if (data.otherCategory) {
      this.addText(`Specific Category: ${data.otherCategory}`);
    }
    this.addText(`Service Type: ${data.serviceType === 'saas' ? 'Software as a Service (SaaS)' : 'One-time Project Delivery'}`);
    this.addSpacer(10);
    
    this.addText('Project Description:');
    this.addText(data.projectDescription);
  }

  private addProjectOverview(data: QuotationData): void {
    this.addNewPage();
    
    this.addTitle('2. PROJECT OVERVIEW');
    
    this.addText(`Project Category: ${data.projectCategory}`, 11, true);
    if (data.otherCategory) {
      this.addText(`Specific Requirements: ${data.otherCategory}`, 11, true);
    }
    
    this.addSpacer(10);
    this.addText('Submitted Requirements:', 11, true);
    this.addText(data.projectDescription);
    
    this.addSpacer(10);
    const timelineLabel = QUOTATION_CONFIG.form.options.timelines.find(t => t.value === data.timeline)?.label || data.timeline;
    this.addText(`Timeline Preference: ${timelineLabel}`, 11, true);
    
    if (data.budgetRange) {
      this.addText(`Budget Range: ${data.budgetRange}`, 11, true);
    }
    
    this.addText(`Service Model: ${data.serviceType === 'saas' ? 'Software as a Service (SaaS) - Ongoing subscription model' : 'One-time Project - Complete delivery with handover'}`, 11, true);
  }

  private addNextSteps(): void {
    this.addNewPage();
    
    this.addTitle('3. NEXT STEPS');
    
    this.addText('To provide you with an accurate and comprehensive quotation, we propose an initial consultation meeting where we will:');
    this.addSpacer(5);
    
    const steps = [
      'Discuss your specific project requirements in detail',
      'Review technical specifications and feasibility',
      'Explore possible development approaches',
      'Provide timeline and cost estimates',
      'Answer any questions you may have'
    ];
    
    steps.forEach(step => {
      this.addText(`• ${step}`);
    });
    
    this.addSpacer(10);
    this.addText('Following this consultation, we will prepare a detailed proposal with:');
    this.addSpacer(5);
    
    const deliverables = [
      'Specific pricing for your project',
      'Development milestones and timeline',
      'Technology stack recommendations',
      'Payment terms and structure'
    ];
    
    deliverables.forEach(deliverable => {
      this.addText(`• ${deliverable}`);
    });
  }

  private addMeetingDetails(): void {
    this.addNewPage();
    
    this.addTitle('4. MEETING DETAILS', 16);
    this.addSpacer(10);
    
    // Prominent section header
    this.doc.setFillColor(QUOTATION_CONFIG.pdf.branding.primaryColor);
    this.doc.rect(this.margin, this.currentY - 5, this.pageWidth - 2 * this.margin, 15, 'F');
    
    this.doc.setTextColor(255, 255, 255);
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('SCHEDULE YOUR CONSULTATION MEETING', this.margin + 5, this.currentY + 5);
    this.currentY += 20;
    
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.textColor);
    this.addText('We have prepared a Microsoft Teams meeting link for your convenience:');
    this.addSpacer(10);
    
    // Large, prominent meeting link
    this.doc.setFillColor(240, 240, 240);
    this.doc.rect(this.margin, this.currentY - 5, this.pageWidth - 2 * this.margin, 20, 'F');
    
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.primaryColor);
    this.doc.text('Meeting Link:', this.margin + 5, this.currentY + 5);
    this.doc.text(QUOTATION_CONFIG.meetings.defaultTeamsLink, this.margin + 5, this.currentY + 12);
    this.currentY += 30;
    
    this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.textColor);
    this.addText('Please click the link above or copy it to your browser to join the meeting at your preferred time.');
    this.addSpacer(10);
    
    this.addSubtitle('Alternative Contact Methods:');
    this.addText(`• Email: ${QUOTATION_CONFIG.company.email}`);
    this.addText(`• Phone: ${QUOTATION_CONFIG.company.phone}`);
    if (QUOTATION_CONFIG.meetings.alternativeLinks.calendly) {
      this.addText(`• Schedule via: ${QUOTATION_CONFIG.meetings.alternativeLinks.calendly}`);
    }
  }

  private addDevelopmentApproach(): void {
    this.addNewPage();
    
    this.addTitle('5. OUR DEVELOPMENT APPROACH');
    
    this.addText('VXN-NEXIA follows a proven 6-phase development methodology to ensure project success:');
    this.addSpacer(10);
    
    QUOTATION_CONFIG.developmentPhases.forEach(phase => {
      this.addSubtitle(`Phase ${phase.phase}: ${phase.title}`);
      this.addText(phase.description);
      this.addSpacer(5);
    });
  }

  private addTermsAndAcceptance(data: QuotationData): void {
    this.addNewPage();
    
    this.addTitle('6. TERMS & ACCEPTANCE');
    
    this.addSubtitle('QUOTATION VALIDITY');
    this.addText(`This initial consultation proposal is valid for ${QUOTATION_CONFIG.terms.quotationValidity} days from the date of issue. A detailed quotation with specific pricing will be provided following our consultation meeting.`);
    
    this.addSpacer(10);
    this.addSubtitle('STANDARD PAYMENT TERMS (For Reference)');
    
    if (data.serviceType === 'one-time') {
      this.addText(`• ${QUOTATION_CONFIG.terms.paymentTerms.oneTime.deposit}% upfront deposit upon proposal acceptance`);
      this.addText(`• ${QUOTATION_CONFIG.terms.paymentTerms.oneTime.milestone}% upon completion of testing`);
      this.addText(`• ${QUOTATION_CONFIG.terms.paymentTerms.oneTime.final}% upon final deployment and handover`);
    } else {
      this.addText(`• ${QUOTATION_CONFIG.terms.paymentTerms.saas.setup}`);
      this.addText(`• ${QUOTATION_CONFIG.terms.paymentTerms.saas.monthly}`);
      this.addText(`• ${QUOTATION_CONFIG.terms.paymentTerms.saas.annual}`);
    }
    
    this.addSpacer(10);
    this.addSubtitle('NEXT STEPS');
    const nextSteps = [
      'Schedule your consultation meeting using the link provided',
      'Attend the consultation to discuss your project',
      'Receive detailed quotation with specific pricing',
      'Review and accept the detailed proposal',
      'Project kickoff'
    ];
    
    nextSteps.forEach((step, index) => {
      this.addText(`${index + 1}. ${step}`);
    });
  }

  private addAcknowledgment(_data: QuotationData): void {
    this.addNewPage();
    
    this.addTitle('ACKNOWLEDGMENT OF RECEIPT');
    this.addSpacer(20);
    
    this.addText('I, _________________, duly authorised, acknowledge receipt of this proposal on behalf of _________________.');
    this.addSpacer(20);
    
    this.addText('Date: _________________');
    this.addSpacer(10);
    this.addText('Company: _________________');
    this.addSpacer(10);
    this.addText('Contact Person: _________________');
    this.addSpacer(10);
    this.addText('Email: _________________');
    this.addSpacer(10);
    this.addText('Signature: _________________');
    
    this.addSpacer(30);
    this.addText('Please sign and return a scanned copy to info@vxn-nexia.com');
    this.addSpacer(10);
    this.addText('We look forward to discussing your project and bringing your vision to life!');
    this.addSpacer(10);
    this.addText('Please initial all pages before returning.', 10, true);
  }

  public generateQuotationPDF(data: QuotationData): Uint8Array {
    // Generate all pages
    this.addCoverPage(data);
    this.addProposalHeader(data);
    this.addCoverLetter(data);
    this.addTableOfContents();
    this.addIntroduction(data);
    this.addProjectOverview(data);
    this.addNextSteps();
    this.addMeetingDetails();
    this.addDevelopmentApproach();
    this.addTermsAndAcceptance(data);
    this.addAcknowledgment(data);
    
    // Add page numbers to all pages
    const totalPages = this.doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      this.doc.setPage(i);
      this.doc.setFontSize(10);
      this.doc.setTextColor(QUOTATION_CONFIG.pdf.branding.mutedColor);
      this.doc.text(
        `Page ${i} of ${totalPages}`,
        this.pageWidth - this.margin,
        this.pageHeight - 10,
        { align: 'right' }
      );
    }
    
    return this.doc.output('arraybuffer') as Uint8Array;
  }
}

export const generateQuotationPDF = (data: QuotationData): Uint8Array => {
  const generator = new PDFGenerator();
  return generator.generateQuotationPDF(data);
};

export const generateReferenceNumber = (fullName: string): string => {
  const initials = fullName
    .split(' ')
    .map(name => name.charAt(0).toUpperCase())
    .join('');
  
  const year = new Date().getFullYear();
  const increment = Math.floor(Math.random() * 999) + 1;
  
  return `${QUOTATION_CONFIG.referenceNumber.prefix}-${initials}-${year}-${String(increment).padStart(3, '0')}`;
};
