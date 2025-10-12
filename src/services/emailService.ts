import { QUOTATION_CONFIG } from '../config/quotation';
import type { QuotationData } from './pdfGenerator';

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Uint8Array;
    contentType: string;
  }>;
}

export class EmailService {
  private static replaceTemplateVariables(template: string, data: QuotationData): string {
    return template
      .replace(/{{referenceNumber}}/g, data.referenceNumber)
      .replace(/{{projectCategory}}/g, data.projectCategory)
      .replace(/{{companyName}}/g, data.companyName)
      .replace(/{{fullName}}/g, data.fullName)
      .replace(/{{contactPerson}}/g, data.contactPerson || data.fullName);
  }

  public static generateClientEmail(data: QuotationData, pdfBuffer: Uint8Array): EmailData {
    const subject = this.replaceTemplateVariables(
      QUOTATION_CONFIG.email.templates.client.subject,
      data
    );

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your VXN-NEXIA Consultation Proposal</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #2563eb;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 10px;
          }
          .tagline {
            color: #6b7280;
            font-size: 14px;
          }
          .meeting-section {
            background: linear-gradient(135deg, #2563eb, #1e40af);
            color: white;
            padding: 25px;
            border-radius: 8px;
            margin: 25px 0;
            text-align: center;
          }
          .meeting-button {
            display: inline-block;
            background-color: #f59e0b;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin: 15px 0;
            font-size: 16px;
          }
          .contact-info {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .contact-item {
            margin: 8px 0;
            display: flex;
            align-items: center;
          }
          .contact-icon {
            margin-right: 10px;
            font-weight: bold;
            color: #2563eb;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 12px;
          }
          .reference-number {
            background-color: #eff6ff;
            border: 1px solid #2563eb;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
            font-weight: bold;
            color: #2563eb;
            text-align: center;
            margin: 15px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">VXN-NEXIA</div>
            <div class="tagline">Innovative Software Solutions</div>
          </div>
          
          <h2>Dear ${data.contactPerson || data.fullName},</h2>
          
          <p>Thank you for your interest in VXN-NEXIA!</p>
          
          <p>We're excited to discuss your <strong>${data.projectCategory}</strong> project. Attached is your initial consultation proposal.</p>
          
          <div class="reference-number">
            Reference Number: ${data.referenceNumber}
          </div>
          
          <div class="meeting-section">
            <h3 style="margin-top: 0;">🚀 NEXT STEP: Schedule Your Consultation</h3>
            <p>Click the button below to join our Teams meeting:</p>
            <a href="${QUOTATION_CONFIG.meetings.defaultTeamsLink}" class="meeting-button">
              Join Teams Meeting
            </a>
            <p style="font-size: 14px; margin-top: 15px;">
              Or copy this link: <br>
              <span style="word-break: break-all; font-family: monospace; background-color: rgba(255,255,255,0.2); padding: 5px; border-radius: 3px;">
                ${QUOTATION_CONFIG.meetings.defaultTeamsLink}
              </span>
            </p>
          </div>
          
          <p>During this consultation, we'll discuss your project in detail and provide a comprehensive quotation tailored to your specific needs.</p>
          
          <div class="contact-info">
            <h4 style="margin-top: 0; color: #2563eb;">If you have any questions before the meeting:</h4>
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span>${QUOTATION_CONFIG.company.email}</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>${QUOTATION_CONFIG.company.phone}</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🌐</span>
              <span>${QUOTATION_CONFIG.company.website}</span>
            </div>
          </div>
          
          <p>We look forward to speaking with you!</p>
          
          <p><strong>Best regards,<br>The VXN-NEXIA Team</strong></p>
          
          <div class="footer">
            <p>This email was sent from VXN-NEXIA. Please do not reply to this automated message.</p>
            <p>© ${new Date().getFullYear()} VXN-NEXIA. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return {
      to: data.email,
      subject,
      html,
      attachments: [
        {
          filename: `VXN-NEXIA-Proposal-${data.referenceNumber}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    };
  }

  public static generateInternalEmail(data: QuotationData, pdfBuffer: Uint8Array): EmailData {
    const subject = this.replaceTemplateVariables(
      QUOTATION_CONFIG.email.templates.internal.subject,
      data
    );

    const serviceTypeLabel = data.serviceType === 'saas' ? 'Software as a Service (SaaS)' : 'One-time Project';
    const timelineLabel = QUOTATION_CONFIG.form.options.timelines.find(t => t.value === data.timeline)?.label || data.timeline;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quotation Request</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #2563eb, #1e40af);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }
          .section {
            margin: 25px 0;
            padding: 20px;
            border-left: 4px solid #2563eb;
            background-color: #f8f9fa;
          }
          .section h3 {
            margin-top: 0;
            color: #2563eb;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 15px 0;
          }
          .info-item {
            background-color: white;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #e5e7eb;
          }
          .info-label {
            font-weight: bold;
            color: #374151;
            margin-bottom: 5px;
          }
          .info-value {
            color: #6b7280;
          }
          .description-box {
            background-color: white;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #e5e7eb;
            margin: 15px 0;
          }
          .priority-high {
            background-color: #fef2f2;
            border-color: #fca5a5;
          }
          .priority-medium {
            background-color: #fffbeb;
            border-color: #fcd34d;
          }
          .action-required {
            background-color: #dc2626;
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
            font-weight: bold;
          }
          .reference-number {
            background-color: #eff6ff;
            border: 2px solid #2563eb;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-weight: bold;
            color: #2563eb;
            text-align: center;
            font-size: 18px;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🚨 New Quotation Request Received</h2>
            <p style="margin: 10px 0 0 0;">Immediate attention required</p>
          </div>
          
          <div class="reference-number">
            Reference: ${data.referenceNumber}
          </div>
          
          <p><strong>Date:</strong> ${data.submissionDate.toLocaleString('en-ZA')}</p>
          
          <div class="section">
            <h3>👤 CLIENT DETAILS</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${data.fullName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">${data.companyName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${data.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">${data.phone}</div>
              </div>
            </div>
            
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Address</div>
              <div class="info-value">${data.address}</div>
            </div>
            
            ${data.vatNumber ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">VAT Number</div>
              <div class="info-value">${data.vatNumber}</div>
            </div>
            ` : ''}
            
            ${data.contactPerson ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Contact Person</div>
              <div class="info-value">${data.contactPerson}</div>
            </div>
            ` : ''}
          </div>
          
          <div class="section">
            <h3>🚀 PROJECT DETAILS</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Category</div>
                <div class="info-value">${data.projectCategory}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Service Type</div>
                <div class="info-value">${serviceTypeLabel}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Timeline</div>
                <div class="info-value">${timelineLabel}</div>
              </div>
              ${data.budgetRange ? `
              <div class="info-item">
                <div class="info-label">Budget Range</div>
                <div class="info-value">${data.budgetRange}</div>
              </div>
              ` : ''}
            </div>
            
            ${data.otherCategory ? `
            <div class="info-item" style="margin-top: 15px;">
              <div class="info-label">Specific Category</div>
              <div class="info-value">${data.otherCategory}</div>
            </div>
            ` : ''}
            
            <div class="description-box">
              <div class="info-label">Project Description</div>
              <div class="info-value">${data.projectDescription}</div>
            </div>
            
            ${data.referralSource ? `
            <div class="info-item">
              <div class="info-label">How they heard about us</div>
              <div class="info-value">${data.referralSource}</div>
            </div>
            ` : ''}
          </div>
          
          <div class="section">
            <h3>📋 NEXT STEPS</h3>
            <p>✅ PDF proposal has been generated and sent to client</p>
            <p>✅ Teams meeting link provided: <a href="${QUOTATION_CONFIG.meetings.defaultTeamsLink}">Join Meeting</a></p>
            <p>📧 Client email: ${data.email}</p>
          </div>
          
          <div class="action-required">
            ⚠️ ACTION REQUIRED: Follow up with client if they don't schedule within 3 days
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated notification from the VXN-NEXIA quotation system.</p>
            <p>Generated on ${new Date().toLocaleString('en-ZA')}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return {
      to: QUOTATION_CONFIG.email.internalNotifications.join(','),
      subject,
      html,
      attachments: [
        {
          filename: `VXN-NEXIA-Proposal-${data.referenceNumber}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    };
  }

  // Mock email sending function - replace with actual email service integration
  public static async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      // TODO: Integrate with actual email service (SendGrid, AWS SES, etc.)
      console.log('Sending email:', {
        to: emailData.to,
        subject: emailData.subject,
        attachments: emailData.attachments?.length || 0,
      });
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
