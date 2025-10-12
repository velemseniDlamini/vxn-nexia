# VXN-NEXIA Quotation System

## Overview

The VXN-NEXIA Quotation System is a comprehensive solution for handling client quotation requests. It includes a modal form, PDF generation, email notifications, and configuration management.

## Features

### ✅ Completed Features

1. **Navbar Integration**
   - "Get in Touch" button replaced with "Get Quotation"
   - Modal trigger functionality
   - Mobile responsive design

2. **Quotation Form Modal**
   - Comprehensive form with all required fields
   - Real-time validation using Zod schema
   - Service type selection (One-time Project vs SaaS)
   - Project category dropdown with "Other" option
   - PDF preview download functionality

3. **PDF Generation**
   - Professional multi-page proposal document
   - VXN-NEXIA branding and styling
   - Dynamic content based on form submission
   - Includes cover page, project overview, meeting details, and terms

4. **Email Service**
   - Client notification email with PDF attachment
   - Internal team notification
   - Professional HTML email templates
   - Teams meeting link integration

5. **Configuration Management**
   - Centralized configuration file
   - Easy customization of company details
   - Meeting links and email templates
   - Form options and validation rules

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx (Updated with Get Quotation button)
│   └── quotation/
│       ├── QuotationModal.tsx (Modal wrapper)
│       └── QuotationForm.tsx (Main form component)
├── config/
│   └── quotation.ts (Configuration settings)
├── services/
│   ├── quotationService.ts (Main service orchestrator)
│   ├── pdfGenerator.ts (PDF generation logic)
│   └── emailService.ts (Email templates and sending)
└── assets/
    └── logo.ts (VXN-NEXIA logo for PDF)
```

## Form Fields

### Required Fields
- Full Name
- Company Name
- Email Address
- Phone Number
- Physical Address
- Project Category
- Project Description (min 50 characters)
- Preferred Timeline
- Service Type (One-time Project / SaaS)

### Optional Fields
- VAT Registration Number
- Contact Person (if different from applicant)
- Budget Range
- How did you hear about us?

## Project Categories

1. Web Development
2. Mobile App Development (iOS/Android)
3. UI/UX Design
4. E-commerce Solutions
5. Custom Software Development
6. System Integration
7. Cloud Solutions & Hosting
8. API Development
9. Progressive Web Apps (PWA)
10. Project Revival/Refactoring
11. Other (with text input)

## Service Types

### One-time Project
- Complete project delivery with handover
- Traditional project-based pricing
- Payment terms: 50% deposit, 25% milestone, 25% final

### Software as a Service (SaaS)
- Ongoing service with monthly subscription
- Setup fee + monthly/annual subscription
- Continuous support and maintenance

## PDF Document Structure

1. **Cover Page**
   - Project title and company name
   - Submission date
   - VXN-NEXIA branding

2. **Proposal Header**
   - Client details
   - Reference number format: VXN-[INITIALS]-[YEAR]-[INCREMENT]

3. **Cover Letter**
   - Personalized greeting
   - Project acknowledgment
   - Next steps explanation

4. **Table of Contents**

5. **Introduction**
   - About VXN-NEXIA
   - Project background

6. **Project Overview**
   - Category and requirements
   - Timeline preferences
   - Service type details

7. **Next Steps**
   - Consultation meeting process
   - What to expect

8. **Meeting Details** (Prominent Section)
   - Teams meeting link
   - Alternative contact methods

9. **Development Approach**
   - 6-phase methodology

10. **Terms & Acceptance**
    - Quotation validity
    - Payment terms
    - Next steps

11. **Acknowledgment Page**
    - Signature section

## Email Templates

### Client Email
- Professional HTML template
- Prominent Teams meeting link
- PDF attachment
- Contact information
- Reference number display

### Internal Notification
- Comprehensive client and project details
- Action required alerts
- PDF attachment for team review

## Configuration Options

### Company Information
- Name, contact details, address
- Registration and VAT numbers
- BEE level information

### Meeting Configuration
- Default Teams meeting link
- Alternative platform links
- Availability information

### PDF Styling
- Brand colors and fonts
- Margins and layout settings
- Professional blue color scheme

## Technical Implementation

### Dependencies Added
- `jspdf` - PDF generation
- `html2canvas` - HTML to canvas conversion (if needed)

### Form Validation
- Zod schema validation
- Real-time error messages
- Required field indicators

### State Management
- React hooks for form state
- Loading states for async operations
- Success/error handling

## Usage Instructions

1. **User Flow**
   - Click "Get Quotation" button in navbar
   - Fill out the comprehensive form
   - Optional: Download PDF preview
   - Submit quotation request
   - Receive confirmation with reference number

2. **Admin Flow**
   - Receive internal notification email
   - Review client details and project requirements
   - Follow up with Teams meeting
   - Provide detailed quotation

## Configuration Updates

To update company information, meeting links, or email templates:

1. Edit `src/config/quotation.ts`
2. Update relevant sections:
   - Company details
   - Meeting links
   - Email templates
   - Form options

## Future Enhancements

### Recommended Additions
1. **Database Integration**
   - Store quotation requests
   - Track status and follow-ups
   - Analytics and reporting

2. **Admin Dashboard**
   - View all requests
   - Update status
   - Send follow-up emails
   - Generate reports

3. **Email Service Integration**
   - SendGrid, AWS SES, or Mailgun
   - Automated follow-up sequences
   - Email tracking

4. **Advanced Features**
   - reCAPTCHA integration
   - Rate limiting
   - Auto-save drafts
   - Multi-step form with progress indicator

5. **Analytics**
   - Google Analytics events
   - Conversion tracking
   - Source attribution

## Security Considerations

1. **Data Protection (POPIA Compliance)**
   - Secure data handling
   - Privacy policy integration
   - Data retention policies

2. **Form Security**
   - Input sanitization
   - CSRF protection
   - Rate limiting

3. **Email Security**
   - SPF/DKIM records
   - Secure attachment handling

## Testing

### Manual Testing Checklist
- [ ] Form validation works correctly
- [ ] PDF generates with proper content
- [ ] Modal opens and closes properly
- [ ] Mobile responsiveness
- [ ] Email templates render correctly
- [ ] Download functionality works
- [ ] Success/error states display properly

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Support

For technical support or customization requests, contact the development team.

---

**Last Updated:** October 12, 2025
**Version:** 1.0.0
**Status:** Production Ready
