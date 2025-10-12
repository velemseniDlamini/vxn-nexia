// VXN-NEXIA Logo as SVG string for PDF generation
export const VXN_NEXIA_LOGO_SVG = `
<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e40af;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- VXN -->
  <text x="10" y="35" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="url(#logoGradient)">VXN</text>
  
  <!-- Separator -->
  <line x1="70" y1="15" x2="70" y2="45" stroke="#6b7280" stroke-width="2"/>
  
  <!-- NEXIA -->
  <text x="80" y="35" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="url(#logoGradient)">NEXIA</text>
  
  <!-- Tagline -->
  <text x="10" y="52" font-family="Arial, sans-serif" font-size="10" fill="#6b7280">Innovative Software Solutions</text>
</svg>
`;

// Base64 encoded version for PDF embedding
export const VXN_NEXIA_LOGO_BASE64 = btoa(VXN_NEXIA_LOGO_SVG);
