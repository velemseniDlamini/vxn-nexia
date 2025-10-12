export const QUOTATION_CONFIG = {
  // Company Information
  company: {
    name: 'VXN-NEXIA',
    email: 'info@vxn-nexia.com',
    phone: '+27 (0)11 123 4567',
    website: 'www.vxn-nexia.com',
    address: {
      street: '123 Innovation Drive',
      area: 'Sandton',
      city: 'Johannesburg',
      postalCode: '2196',
      country: 'South Africa',
    },
    registration: {
      number: 'REG123456789',
      vatNumber: 'VAT987654321',
      beeLevel: 'Level 2 BEE Company',
    },
  },

  // Meeting Configuration
  meetings: {
    defaultTeamsLink: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_default_link',
    alternativeLinks: {
      zoom: 'https://zoom.us/j/vxn-nexia-consultation',
      calendly: 'https://calendly.com/vxn-nexia/consultation',
    },
    duration: '60 minutes',
    availability: 'Monday to Friday, 9:00 AM - 5:00 PM (SAST)',
  },

  // Email Configuration
  email: {
    from: 'info@vxn-nexia.com',
    replyTo: 'info@vxn-nexia.com',
    internalNotifications: [
      'info@vxn-nexia.com',
      'admin@vxn-nexia.com',
    ],
    templates: {
      client: {
        subject: 'Your VXN-NEXIA Consultation Proposal - {{referenceNumber}}',
        followUpDays: 3,
      },
      internal: {
        subject: 'New Quotation Request - {{projectCategory}} - {{companyName}}',
      },
    },
  },

  // PDF Configuration
  pdf: {
    branding: {
      primaryColor: '#2563eb', // Blue
      secondaryColor: '#1e40af', // Darker blue
      accentColor: '#f59e0b', // Orange/Gold
      textColor: '#1f2937',
      mutedColor: '#6b7280',
    },
    fonts: {
      primary: 'Inter',
      heading: 'Inter',
      mono: 'JetBrains Mono',
    },
    margins: {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    },
  },

  // Reference Number Configuration
  referenceNumber: {
    prefix: 'VXN',
    format: 'VXN-{{initials}}-{{year}}-{{increment}}',
    startingNumber: 1,
  },

  // Form Configuration
  form: {
    validation: {
      minDescriptionLength: 50,
      phoneMinLength: 10,
      addressMinLength: 10,
    },
    options: {
      projectCategories: [
        'Web Development',
        'Mobile App Development (iOS/Android)',
        'UI/UX Design',
        'E-commerce Solutions',
        'Custom Software Development',
        'System Integration',
        'Cloud Solutions & Hosting',
        'API Development',
        'Progressive Web Apps (PWA)',
        'Project Revival/Refactoring',
        'Other',
      ],
      timelines: [
        { value: 'urgent', label: 'Urgent - 1-2 months' },
        { value: 'standard', label: 'Standard - 3-4 months' },
        { value: 'flexible', label: 'Flexible - 5+ months' },
      ],
      budgetRanges: [
        'Under R100k',
        'R100k-R250k',
        'R250k-R500k',
        'R500k+',
        'Not Sure',
      ],
      serviceTypes: [
        {
          value: 'one-time',
          label: 'One-time Project',
          description: 'Complete project delivery with handover',
        },
        {
          value: 'saas',
          label: 'Software as a Service (SaaS)',
          description: 'Ongoing service with monthly subscription',
        },
      ],
    },
  },

  // Development Phases
  developmentPhases: [
    {
      phase: 1,
      title: 'Requirement Analysis & Planning',
      description: 'Detailed analysis of project requirements and strategic planning',
    },
    {
      phase: 2,
      title: 'System Architecture & Design',
      description: 'Technical architecture design and user interface planning',
    },
    {
      phase: 3,
      title: 'Development & Feature Implementation',
      description: 'Core development and feature implementation',
    },
    {
      phase: 4,
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing and quality assurance processes',
    },
    {
      phase: 5,
      title: 'Deployment & Training',
      description: 'System deployment and user training',
    },
    {
      phase: 6,
      title: 'Ongoing Support & Maintenance',
      description: 'Continuous support and maintenance services',
    },
  ],

  // Terms and Conditions
  terms: {
    quotationValidity: 30, // days
    paymentTerms: {
      oneTime: {
        deposit: 50,
        milestone: 25,
        final: 25,
      },
      saas: {
        setup: 'One-time setup fee',
        monthly: 'Monthly subscription',
        annual: 'Annual subscription (10% discount)',
      },
    },
  },
};
