// Admin configuration for easy customization
export const ADMIN_CONFIG = {
  // Teams Meeting Links - Update these as needed
  meetings: {
    // Primary consultation meeting link
    defaultTeamsLink: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_vxn_nexia_consultation',
    
    // Alternative meeting platforms
    alternativeLinks: {
      zoom: 'https://zoom.us/j/vxn-nexia-consultation',
      calendly: 'https://calendly.com/vxn-nexia/consultation',
      googleMeet: 'https://meet.google.com/vxn-nexia-consultation',
    },
    
    // Meeting availability
    availability: 'Monday to Friday, 9:00 AM - 5:00 PM (SAST)',
    duration: '60 minutes',
  },

  // Email Configuration
  email: {
    // Update these email addresses
    from: 'info@vxn-nexia.com',
    replyTo: 'info@vxn-nexia.com',
    
    // Internal notification recipients
    internalNotifications: [
      'info@vxn-nexia.com',
      'admin@vxn-nexia.com',
      // Add more team members as needed
    ],
    
    // Email service settings (for future integration)
    service: {
      provider: 'sendgrid', // or 'aws-ses', 'mailgun', 'nodemailer'
      apiKey: process.env.EMAIL_API_KEY || '',
      fromName: 'VXN-NEXIA Team',
    },
  },

  // Company Branding
  branding: {
    // Update company colors
    colors: {
      primary: '#2563eb',      // Blue
      secondary: '#1e40af',    // Darker blue
      accent: '#f59e0b',       // Orange/Gold
      text: '#1f2937',         // Dark gray
      muted: '#6b7280',        // Light gray
    },
    
    // Logo settings
    logo: {
      width: 200,
      height: 60,
      showInPDF: true,
      showInEmails: true,
    },
  },

  // PDF Settings
  pdf: {
    // Company information for PDF footer
    companyInfo: {
      registrationNumber: 'REG123456789',
      vatNumber: 'VAT987654321',
      beeLevel: 'Level 2 BEE Company',
    },
    
    // PDF generation settings
    settings: {
      includePageNumbers: true,
      includeWatermark: false,
      compressionLevel: 0.8,
    },
  },

  // Form Customization
  form: {
    // Required fields (cannot be changed without code updates)
    requiredFields: [
      'fullName',
      'companyName', 
      'email',
      'phone',
      'address',
      'projectCategory',
      'projectDescription',
      'timeline',
      'serviceType'
    ],
    
    // Validation rules
    validation: {
      minDescriptionLength: 50,
      phoneMinLength: 10,
      addressMinLength: 10,
      maxFileSize: '10MB', // For future file upload feature
    },
    
    // Auto-save settings (for future implementation)
    autoSave: {
      enabled: false,
      intervalSeconds: 30,
    },
  },

  // Analytics (for future implementation)
  analytics: {
    googleAnalyticsId: process.env.GA_TRACKING_ID || '',
    trackFormSubmissions: true,
    trackPDFDownloads: true,
    trackEmailOpens: true,
  },

  // Security Settings
  security: {
    // Rate limiting
    rateLimit: {
      maxSubmissionsPerHour: 5,
      maxSubmissionsPerDay: 10,
    },
    
    // reCAPTCHA (for future implementation)
    recaptcha: {
      enabled: false,
      siteKey: process.env.RECAPTCHA_SITE_KEY || '',
      secretKey: process.env.RECAPTCHA_SECRET_KEY || '',
    },
  },

  // Feature Flags
  features: {
    enablePDFDownload: true,
    enableEmailNotifications: true,
    enableInternalNotifications: true,
    enableFormValidation: true,
    enableAutoSave: false,
    enableAnalytics: false,
    enableRateLimiting: false,
    enableRecaptcha: false,
  },

  // Development Settings
  development: {
    mockEmailSending: true, // Set to false in production
    logFormSubmissions: true,
    showDebugInfo: false,
  },
};

// Helper function to get environment-specific config
export const getConfig = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    ...ADMIN_CONFIG,
    development: {
      ...ADMIN_CONFIG.development,
      mockEmailSending: isDevelopment,
      logFormSubmissions: isDevelopment,
      showDebugInfo: isDevelopment,
    },
  };
};
