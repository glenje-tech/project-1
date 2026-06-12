# Domestic Air – Equipment Health Check Form

A mobile-friendly, browser-based health check form for field engineers.
Hosted on GitHub Pages. Submissions are emailed to the office and automatically logged to a Google Sheet.

---

## Quick start — hosting on GitHub Pages

1. Create a **new repository** on GitHub (e.g. `domesticair-health-check`)
2. Upload all files from this folder, keeping the folder structure
3. Go to **Settings → Pages** and set Source to `main` branch, root folder
4. Your form will be live at `https://YOUR_USERNAME.github.io/domesticair-health-check/`

Engineers can bookmark this URL or add it to their phone's home screen.

---

## Step 1 — Set up email (EmailJS)

EmailJS lets the form send emails from the browser, with no server required.

1. Go to [emailjs.com](https://www.emailjs.com) and create a **free account**
2. Click **Add New Service** and connect your email (Gmail, Outlook, or SMTP)
3. Note down your **Service ID**
4. Click **Email Templates → Create New Template**
5. Set the template up as follows:

   - **Subject:** `Equipment Health Check – {{site_name}} – {{visit_date}}`
   - **To email:** `{{to_email}}`
   - **Body (HTML):**

   ```html
   <p>A new health check has been submitted by <strong>{{engineer_name}}</strong>.</p>
   <p><strong>Site:</strong> {{site_name}}<br>
   <strong>Date:</strong> {{visit_date}}</p>
   <hr>
   {{{report_html}}}
   <hr>
   <p style="color:#718096;font-size:0.8em;">Sent automatically by the Domestic Air Health Check system.</p>
   ```

6. Note down your **Template ID**
7. Go to **Account → General** and note your **Public Key**

8. Open `config/settings.json` and fill in:

```json
"emailJS": {
  "publicKey":  "abc123...",
  "serviceId":  "service_xxxxx",
  "templateId": "template_xxxxx"
}
```

---

## Step 2 — Set up Google Sheets logging

This logs every submission as a new row in a spreadsheet automatically.

1. Go to [Google Sheets](https://sheets.google.com) and create a **new blank spreadsheet**
2. Copy the **Spreadsheet ID** from the URL bar:
   `docs.google.com/spreadsheets/d/**COPY_THIS_PART**/edit`
3. Click **Extensions → Apps Script**
4. Delete all existing code and paste the contents of `google-apps-script/Code.gs`
5. Replace `YOUR_SPREADSHEET_ID` near the top with the ID you copied
6. Click **Deploy → New Deployment**
7. Set:
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy** then **Authorise** (allow the permissions)
9. Copy the **Web App URL** provided
10. Open `config/settings.json` and paste the URL:

```json
"googleSheets": {
  "scriptUrl": "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
}
```

The sheet will be created automatically on the first submission, with a styled blue header row matching your brand.

---

## Step 3 — Configure your email address

Open `config/settings.json` and set the recipient email:

```json
"email": {
  "recipientAddress": "reports@domesticair.co.uk",
  ...
}
```

Change this at any time — it takes effect immediately on next submission.

---

## Editing the questions

All questions are in `config/questions.json`. You can add, remove, or reorder questions without touching any code.

### Field types available

| Type        | Description                          | Example use                   |
|-------------|--------------------------------------|-------------------------------|
| `text`      | Single-line text input               | Engineer name, serial number  |
| `textarea`  | Multi-line text box                  | Notes, recommendations        |
| `date`      | Date picker                          | Visit date, next service date |
| `number`    | Numeric input (supports `unit`)      | Temperature, pressure, voltage|
| `select`    | Dropdown list (requires `options`)   | Equipment type                |
| `radio`     | Button choice (requires `options`)   | Pass / Fail / N/A             |
| `checkbox`  | Single tick-box (Yes/No)             | Filters replaced?             |

### Example — adding a new question

Open `config/questions.json` and add a field object inside any section's `"fields"` array:

```json
{
  "id": "unique_field_id",
  "type": "radio",
  "label": "Was the warranty card checked?",
  "required": true,
  "options": ["Yes", "No", "N/A"]
}
```

Rules:
- `id` must be unique across all fields (use lowercase with underscores)
- `required: true` means the engineer cannot submit without answering
- For `select` and `radio`, provide an `"options"` array
- For `number`, add a `"unit"` string (e.g. `"°C"`, `"bar"`, `"V"`)

### Example — adding a new section

```json
{
  "title": "Gas Safety Check",
  "icon": "thermometer",
  "fields": [
    {
      "id": "gas_pressure_check",
      "type": "radio",
      "label": "Gas pressure within safe range?",
      "required": true,
      "options": ["Pass", "Fail", "N/A"]
    }
  ]
}
```

Available icons: `clipboard`, `settings`, `eye`, `wind`, `thermometer`, `zap`, `sliders`, `check-circle`

---

## Features

- **Mobile-first** — large touch targets, works on any phone or tablet
- **Desktop** — full-width layout, keyboard accessible
- **Save Locally** — opens a formatted print preview (save as PDF from browser)
- **Submit Report** — sends email via EmailJS + logs to Google Sheets
- **Auto-progress bar** — shows how much of the form is complete
- **Collapsible sections** — engineers can navigate quickly
- **Pass / Fail / N/A colour coding** — green/red/grey for quick scanning
- **Editable config** — change questions, email, or settings without code changes
- **Offline-tolerant** — save locally always works even without a connection

---

## File structure

```
domesticair-health-check/
├── index.html                    ← Main form page
├── css/
│   └── styles.css                ← White/blue styling
├── js/
│   └── form.js                   ← All form logic
├── config/
│   ├── settings.json             ← ★ Email address, API keys, logo URL
│   └── questions.json            ← ★ All form questions (edit freely)
└── google-apps-script/
    └── Code.gs                   ← Paste into Google Apps Script
```

Files marked ★ are the ones you'll edit regularly.

---

## Troubleshooting

**Form shows "Failed to load configuration"**
→ Make sure you're accessing the site via a web server (GitHub Pages or local dev server), not by opening the HTML file directly. Use VS Code Live Server for local testing.

**Email not sending**
→ Check your EmailJS Public Key, Service ID, and Template ID in `settings.json`. Ensure the EmailJS free plan hasn't exceeded 200 emails/month.

**Google Sheets not updating**
→ Make sure the Apps Script was deployed as a Web App with access set to "Anyone". Re-deploy if you edit the script.

**Logo not showing**
→ The logo is loaded from the Domestic Air website. It will show as long as the site is online. You can also download the logo and host it in the repo instead.
