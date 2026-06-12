/* ============================================================
   Domestic Air – Equipment Health Check
   form.js – loads config, renders form, handles submit & save
   ============================================================ */

let settings = {};
let questionsConfig = {};

/* ── Icon SVG map ── */
const ICONS = {
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/></svg>`,
  settings:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eye:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  wind:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
  thermometer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
  zap:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  sliders:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  'check-circle':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  chevron:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  download:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  send:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  check:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  info:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
};

/* ════════════════════════════════════════════════════════════
   LOAD CONFIG
   Reads from window.SETTINGS and window.QUESTIONS, which are
   defined in config/settings.js and config/questions.js.
   This approach works when opening the file directly (file://)
   as well as when served from GitHub Pages or any web server.
   ════════════════════════════════════════════════════════════ */
async function loadConfig() {
  if (!window.SETTINGS || !window.QUESTIONS) {
    throw new Error('Config not found. Make sure config/settings.js and config/questions.js are loaded.');
  }
  settings = window.SETTINGS;
  questionsConfig = window.QUESTIONS;
}

/* ════════════════════════════════════════════════════════════
   RENDER FORM
   ════════════════════════════════════════════════════════════ */
function renderForm() {
  // Header
  const logo = document.getElementById('company-logo');
  logo.alt = settings.companyName || 'Company Logo';
  if (settings.logoUrl) {
    logo.src = settings.logoUrl;
    logo.style.display = '';
  }
  document.getElementById('form-title').textContent = settings.formTitle || 'Health Check';
  document.getElementById('form-subtitle').textContent = settings.formSubtitle || '';
  document.title = `${settings.formTitle} – ${settings.companyName}`;

  const container = document.getElementById('form-sections');
  container.innerHTML = '';

  const totalFields = questionsConfig.sections.reduce((sum, s) => sum + s.fields.length, 0);
  let fieldIndex = 0;

  questionsConfig.sections.forEach((section, sIdx) => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'form-section';
    sectionEl.dataset.sectionIndex = sIdx;

    sectionEl.innerHTML = `
      <div class="section-header" role="button" aria-expanded="true" tabindex="0">
        <span class="section-icon">${ICONS[section.icon] || ICONS.clipboard}</span>
        <h2>${escHtml(section.title)}</h2>
        <span class="section-status" data-section="${sIdx}">0 / ${section.fields.length}</span>
        <span class="section-toggle">${ICONS.chevron}</span>
      </div>
      <div class="section-body" id="section-body-${sIdx}">
        ${section.fields.map(field => renderField(field, fieldIndex++)).join('')}
      </div>
    `;

    container.appendChild(sectionEl);

    // Toggle collapse
    const header = sectionEl.querySelector('.section-header');
    header.addEventListener('click', () => toggleSection(sectionEl));
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSection(sectionEl); }
    });
  });

  updateProgress();
  attachFieldListeners();
}

function toggleSection(el) {
  el.classList.toggle('collapsed');
  el.querySelector('.section-header').setAttribute('aria-expanded', !el.classList.contains('collapsed'));
}

function renderField(field, idx) {
  const required = field.required ? `<span class="required-star" aria-hidden="true">*</span>` : '';
  const label = `<label class="field-label" for="field-${field.id}">${escHtml(field.label)}${required}</label>`;

  let input = '';

  switch (field.type) {
    case 'text':
      input = `<input type="text" id="field-${field.id}" name="${field.id}"
                 placeholder="${escAttr(field.placeholder || '')}"
                 ${field.required ? 'required' : ''} autocomplete="off">`;
      break;

    case 'textarea':
      input = `<textarea id="field-${field.id}" name="${field.id}"
                  placeholder="${escAttr(field.placeholder || '')}"
                  rows="3" ${field.required ? 'required' : ''}></textarea>`;
      break;

    case 'date':
      input = `<input type="date" id="field-${field.id}" name="${field.id}"
                 ${field.required ? 'required' : ''}>`;
      break;

    case 'number':
      if (field.unit) {
        input = `<div class="input-with-unit">
                   <input type="number" id="field-${field.id}" name="${field.id}"
                     placeholder="${escAttr(field.placeholder || '')}" step="any"
                     ${field.required ? 'required' : ''}>
                   <span class="unit-label">${escHtml(field.unit)}</span>
                 </div>`;
      } else {
        input = `<input type="number" id="field-${field.id}" name="${field.id}"
                   placeholder="${escAttr(field.placeholder || '')}" step="any"
                   ${field.required ? 'required' : ''}>`;
      }
      break;

    case 'select':
      const opts = (field.options || []).map(o =>
        `<option value="${escAttr(o)}">${escHtml(o)}</option>`
      ).join('');
      input = `<select id="field-${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>
                 <option value="">– Select –</option>
                 ${opts}
               </select>`;
      break;

    case 'radio':
      const radios = (field.options || []).map(o => `
        <div class="radio-option">
          <input type="radio" id="field-${field.id}-${slugify(o)}" name="${field.id}" value="${escAttr(o)}"
                 ${field.required ? 'required' : ''}>
          <label for="field-${field.id}-${slugify(o)}">${escHtml(o)}</label>
        </div>`).join('');
      input = `<div class="radio-group" role="group" aria-labelledby="label-${field.id}">${radios}</div>`;
      break;

    case 'checkbox':
      input = `<label class="checkbox-group">
                 <input type="checkbox" id="field-${field.id}" name="${field.id}">
                 <span>${escHtml(field.label)}</span>
               </label>`;
      // Checkbox uses its own label, skip the outer one
      return `<div class="field-group" data-field-id="${field.id}">
                ${input}
                <span class="field-error" id="error-${field.id}"></span>
              </div>`;
  }

  const labelId = field.type === 'radio' ? `id="label-${field.id}"` : '';
  return `<div class="field-group" data-field-id="${field.id}">
            <label class="field-label" ${labelId} for="field-${field.id}">
              ${escHtml(field.label)}${required}
            </label>
            ${input}
            <span class="field-error" id="error-${field.id}"></span>
          </div>`;
}

/* ════════════════════════════════════════════════════════════
   PROGRESS TRACKING
   ════════════════════════════════════════════════════════════ */
function attachFieldListeners() {
  document.getElementById('health-check-form').addEventListener('input', updateProgress);
  document.getElementById('health-check-form').addEventListener('change', updateProgress);
}

function updateProgress() {
  let total = 0, filled = 0;
  const data = collectFormData();

  questionsConfig.sections.forEach((section, sIdx) => {
    let sTotal = 0, sFilled = 0;
    section.fields.forEach(field => {
      if (field.type === 'checkbox') return; // optional by nature
      sTotal++; total++;
      const val = data[field.id];
      if (val !== '' && val !== null && val !== undefined) { sFilled++; filled++; }
    });
    const badge = document.querySelector(`.section-status[data-section="${sIdx}"]`);
    if (badge) badge.textContent = `${sFilled} / ${sTotal}`;
  });

  const pct = total > 0 ? Math.round((filled / total) * 100) : 0;
  const bar = document.querySelector('.progress-bar');
  if (bar) bar.style.width = pct + '%';
}

/* ════════════════════════════════════════════════════════════
   COLLECT & VALIDATE
   ════════════════════════════════════════════════════════════ */
function collectFormData() {
  const data = {};
  questionsConfig.sections.forEach(section => {
    section.fields.forEach(field => {
      if (field.type === 'radio') {
        const checked = document.querySelector(`input[name="${field.id}"]:checked`);
        data[field.id] = checked ? checked.value : '';
      } else if (field.type === 'checkbox') {
        const el = document.getElementById(`field-${field.id}`);
        data[field.id] = el ? (el.checked ? 'Yes' : 'No') : 'No';
      } else {
        const el = document.getElementById(`field-${field.id}`);
        data[field.id] = el ? el.value.trim() : '';
      }
    });
  });
  return data;
}

function validateForm() {
  let valid = true;
  clearErrors();

  questionsConfig.sections.forEach((section, sIdx) => {
    section.fields.forEach(field => {
      if (!field.required) return;

      let val = '';
      if (field.type === 'radio') {
        const checked = document.querySelector(`input[name="${field.id}"]:checked`);
        val = checked ? checked.value : '';
      } else if (field.type !== 'checkbox') {
        const el = document.getElementById(`field-${field.id}`);
        val = el ? el.value.trim() : '';
      }

      if (!val) {
        valid = false;
        showFieldError(field.id, 'This field is required');
        // Expand section if collapsed
        const sectionEl = document.querySelector(`[data-section-index="${sIdx}"]`);
        if (sectionEl && sectionEl.classList.contains('collapsed')) {
          sectionEl.classList.remove('collapsed');
        }
      }
    });
  });

  return valid;
}

function showFieldError(fieldId, msg) {
  const errEl = document.getElementById(`error-${fieldId}`);
  if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }

  const input = document.getElementById(`field-${fieldId}`);
  if (input) input.classList.add('error');

  // For radio groups
  const group = document.querySelector(`[data-field-id="${fieldId}"]`);
  if (group) {
    const radios = group.querySelectorAll('label');
    radios.forEach(l => l.style.borderColor = 'var(--error)');
  }
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(el => {
    el.textContent = ''; el.classList.remove('visible');
  });
  document.querySelectorAll('input.error, select.error, textarea.error').forEach(el => {
    el.classList.remove('error');
  });
  document.querySelectorAll('.radio-option label').forEach(l => {
    l.style.borderColor = '';
  });
}

/* ════════════════════════════════════════════════════════════
   FORMAT DATA FOR OUTPUT
   ════════════════════════════════════════════════════════════ */
function buildLabelMap() {
  const map = {};
  questionsConfig.sections.forEach(section => {
    section.fields.forEach(field => { map[field.id] = field.label; });
  });
  return map;
}

function buildHtmlReport(data) {
  const labelMap = buildLabelMap();
  let html = '';
  questionsConfig.sections.forEach(section => {
    html += `<h3 style="margin:16px 0 8px;color:#0B4EA2;border-bottom:2px solid #0B4EA2;padding-bottom:4px;">${escHtml(section.title)}</h3>`;
    html += '<table style="width:100%;border-collapse:collapse;margin-bottom:8px;">';
    section.fields.forEach(field => {
      const val = data[field.id] || '—';
      html += `<tr style="border-bottom:1px solid #EBF4FF;">
                 <td style="padding:6px 8px;font-weight:600;color:#1A2E4A;width:50%;font-size:0.85rem;">${escHtml(labelMap[field.id] || field.id)}</td>
                 <td style="padding:6px 8px;color:#4A5568;font-size:0.85rem;">${escHtml(val)}</td>
               </tr>`;
    });
    html += '</table>';
  });
  return html;
}

function buildPlainTextReport(data) {
  const labelMap = buildLabelMap();
  let text = `${settings.companyName} – ${settings.formTitle}\n`;
  text += '='.repeat(50) + '\n\n';
  questionsConfig.sections.forEach(section => {
    text += `[ ${section.title} ]\n`;
    text += '-'.repeat(40) + '\n';
    section.fields.forEach(field => {
      const val = data[field.id] || '—';
      text += `${labelMap[field.id] || field.id}: ${val}\n`;
    });
    text += '\n';
  });
  text += `\nGenerated: ${new Date().toLocaleString('en-GB')}`;
  return text;
}

/* ════════════════════════════════════════════════════════════
   SAVE LOCALLY (Print-to-PDF)
   ════════════════════════════════════════════════════════════ */
function saveLocally() {
  const data = collectFormData();
  const reportHtml = buildHtmlReport(data);
  const now = new Date().toLocaleString('en-GB');

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${settings.formTitle} – ${settings.companyName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; font-size: 11pt; color: #1A2E4A; background: white; padding: 20mm; }
    .header { display: flex; align-items: center; gap: 16px; border-bottom: 3px solid #0B4EA2; padding-bottom: 14px; margin-bottom: 20px; }
    .header img { height: 50px; width: auto; }
    .header-text h1 { font-size: 14pt; color: #0B4EA2; }
    .header-text p  { font-size: 9pt; color: #718096; margin-top: 2px; }
    h3 { margin: 16px 0 8px; color: #0B4EA2; border-bottom: 2px solid #0B4EA2; padding-bottom: 4px; font-size: 11pt; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
    td { padding: 5px 8px; border-bottom: 1px solid #EBF4FF; font-size: 9.5pt; }
    td:first-child { font-weight: bold; width: 50%; color: #1A2E4A; }
    td:last-child { color: #4A5568; }
    .footer { margin-top: 20px; border-top: 1px solid #CBD5E0; padding-top: 8px; font-size: 8pt; color: #718096; }
    @media print { @page { margin: 15mm; } body { padding: 0; } }
  </style>
</head>
<body>
  <div class="header">
    <img src="${settings.logoUrl}" alt="${settings.companyName}">
    <div class="header-text">
      <h1>${settings.formTitle}</h1>
      <p>${settings.companyName} – ${settings.formSubtitle || ''}</p>
    </div>
  </div>
  ${reportHtml}
  <div class="footer">
    <strong>Domestic Air Ltd</strong> &nbsp;|&nbsp; Generated: ${now}
  </div>
  <script>window.onload = function() { window.print(); }<\/script>
</body>
</html>`);
  printWindow.document.close();
}

/* ════════════════════════════════════════════════════════════
   EMAIL SUBMISSION (EmailJS)
   ════════════════════════════════════════════════════════════ */
async function submitEmail(data) {
  const { publicKey, serviceId, templateId } = settings.email.emailJS;

  if (!publicKey || publicKey.startsWith('YOUR_')) {
    console.warn('EmailJS not configured – skipping email send.');
    return { skipped: true };
  }

  emailjs.init(publicKey);

  const reportHtml = buildHtmlReport(data);
  const engineerName = data['engineer_name'] || 'Unknown Engineer';
  const siteName = data['customer_name'] || data['site_address'] || 'Unknown Site';
  const visitDate = data['visit_date'] || new Date().toLocaleDateString('en-GB');

  return emailjs.send(serviceId, templateId, {
    to_email:      settings.email.recipientAddress,
    engineer_name: engineerName,
    site_name:     siteName,
    visit_date:    visitDate,
    report_html:   reportHtml,
    company_name:  settings.companyName
  });
}

/* ════════════════════════════════════════════════════════════
   GOOGLE SHEETS SUBMISSION
   ════════════════════════════════════════════════════════════ */
async function submitToSheets(data) {
  const url = settings.googleSheets && settings.googleSheets.scriptUrl;

  if (!url || url.startsWith('YOUR_')) {
    console.warn('Google Sheets not configured – skipping.');
    return { skipped: true };
  }

  const payload = {
    timestamp: new Date().toISOString(),
    ...data
  };

  // no-cors: data is sent; response cannot be read (this is expected)
  await fetch(url, {
    method:  'POST',
    mode:    'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload)
  });

  return { ok: true };
}

/* ════════════════════════════════════════════════════════════
   FORM SUBMISSION HANDLER
   ════════════════════════════════════════════════════════════ */
async function handleSubmit(e) {
  e.preventDefault();

  if (!validateForm()) {
    showToast('error', 'Please fix the errors', 'Complete all required fields before submitting.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const submitBtn = document.getElementById('submit-btn');
  const saveBtn   = document.getElementById('save-btn');
  submitBtn.disabled = true;
  saveBtn.disabled   = true;
  submitBtn.innerHTML = `<div class="spinner" style="width:20px;height:20px;border-width:2px;margin:0;border-top-color:#fff;"></div> Submitting…`;

  const data = collectFormData();

  let emailOk = false, sheetsOk = false;

  try {
    const emailResult = await submitEmail(data);
    emailOk = emailResult.skipped || (emailResult.status === 200);
  } catch (err) {
    console.error('Email error:', err);
  }

  try {
    await submitToSheets(data);
    sheetsOk = true;
  } catch (err) {
    console.error('Sheets error:', err);
  }

  submitBtn.disabled = false;
  saveBtn.disabled   = false;
  submitBtn.innerHTML = `${ICONS.send} Submit Report`;

  if (emailOk || sheetsOk) {
    document.getElementById('success-modal').classList.remove('hidden');
  } else {
    showToast('error', 'Submission Failed',
      'Could not submit. Please save locally and contact your manager.');
  }
}

/* ════════════════════════════════════════════════════════════
   TOAST NOTIFICATIONS
   ════════════════════════════════════════════════════════════ */
function showToast(type, title, message, duration = 5000) {
  const container = document.getElementById('toast-container');
  const icons = { success: ICONS.check, error: ICONS.x, info: ICONS.info };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <div class="toast-text">
      <div class="toast-title">${escHtml(title)}</div>
      ${message ? `<div class="toast-msg">${escHtml(message)}</div>` : ''}
    </div>
    <button class="toast-close" aria-label="Close">${ICONS.x}</button>`;

  toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, duration);
}

/* ════════════════════════════════════════════════════════════
   UTILITIES
   ════════════════════════════════════════════════════════════ */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escAttr(str) { return escHtml(str); }

function slugify(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/* ════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('form-sections');
  container.innerHTML = `<div class="loading-wrap"><div class="spinner"></div><p>Loading form…</p></div>`;

  try {
    await loadConfig();
    renderForm();

    // Set today's date on date fields that are "visit_date"
    const visitDateEl = document.getElementById('field-visit_date');
    if (visitDateEl && !visitDateEl.value) {
      visitDateEl.value = new Date().toISOString().split('T')[0];
    }

    updateProgress();

  } catch (err) {
    container.innerHTML = `<div class="loading-wrap">
      <p style="color:var(--error);">Failed to load form configuration.<br>
      Please check that <code>config/settings.json</code> and <code>config/questions.json</code> exist.</p>
    </div>`;
    console.error(err);
    return;
  }

  // Form submit
  document.getElementById('health-check-form').addEventListener('submit', handleSubmit);

  // Save locally
  document.getElementById('save-btn').addEventListener('click', saveLocally);

  // Close success modal / reset form
  document.getElementById('modal-close-btn').addEventListener('click', () => {
    document.getElementById('success-modal').classList.add('hidden');
    document.getElementById('health-check-form').reset();
    // Re-set today's date
    const visitDateEl = document.getElementById('field-visit_date');
    if (visitDateEl) visitDateEl.value = new Date().toISOString().split('T')[0];
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
