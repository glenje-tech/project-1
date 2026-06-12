/* ── Domestic Air – Form Settings ──────────────────────────
   Edit this file to change company details, email address,
   and API keys. No other files need to be changed.
   ────────────────────────────────────────────────────────── */

window.SETTINGS = {
  companyName:  "Domestic Air",
  formTitle:    "Equipment Health Check",
  formSubtitle: "Complete all sections for each site visit",

  logoUrl: "images/logo.png",

  email: {
    recipientAddress: "glenje@outlook.com",
    emailJS: {
      publicKey:  "YOUR_EMAILJS_PUBLIC_KEY",
      serviceId:  "YOUR_EMAILJS_SERVICE_ID",
      templateId: "YOUR_EMAILJS_TEMPLATE_ID"
    }
  },

  googleSheets: {
    scriptUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL"
  }
};
