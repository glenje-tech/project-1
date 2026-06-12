/**
 * Domestic Air – Equipment Health Check
 * Google Apps Script – receives form submissions and writes to Google Sheets
 *
 * SETUP INSTRUCTIONS (one-time):
 *   1. Open your Google Sheet (create a new blank one)
 *   2. Click Extensions > Apps Script
 *   3. Delete any existing code and paste this entire file
 *   4. Replace YOUR_SPREADSHEET_ID below with your sheet's ID
 *      (found in the URL: docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
 *   5. Click Deploy > New Deployment
 *   6. Type: Web App
 *   7. Execute as: Me (your Google account)
 *   8. Who has access: Anyone
 *   9. Click Deploy, then Authorise
 *  10. Copy the Web App URL and paste it into config/settings.json
 *      under googleSheets > scriptUrl
 */

var SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
var SHEET_NAME     = 'Health Checks';

/* ── Entry point for form submissions ── */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    appendRow(data);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/* ── Also handle GET for connection testing ── */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Domestic Air Health Check endpoint is live.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ── Append a row to the sheet ── */
function appendRow(data) {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  // Create the sheet if it doesn't exist yet
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  var existingHeaders = [];
  if (sheet.getLastRow() > 0) {
    existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  }

  // Merge any new keys from this submission into the header row
  var allKeys = Object.keys(data);
  allKeys.forEach(function(key) {
    if (existingHeaders.indexOf(key) === -1) {
      existingHeaders.push(key);
    }
  });

  // Re-write header row with friendly labels
  var headerLabels = existingHeaders.map(function(key) {
    return formatHeader(key);
  });

  // Style the header row
  if (sheet.getLastRow() === 0 || sheet.getRange(1, 1).getValue() === '') {
    sheet.getRange(1, 1, 1, headerLabels.length).setValues([headerLabels]);
    formatHeaderRow(sheet, headerLabels.length);
  } else {
    // Update headers in case new columns were added
    sheet.getRange(1, 1, 1, headerLabels.length).setValues([headerLabels]);
  }

  // Build the data row in header order
  var row = existingHeaders.map(function(key) {
    var val = data[key];
    if (val === undefined || val === null) return '';
    // Format ISO timestamp nicely
    if (key === 'timestamp' && val.match(/^\d{4}-\d{2}-\d{2}T/)) {
      return new Date(val).toLocaleString('en-GB');
    }
    return val;
  });

  sheet.appendRow(row);

  // Auto-resize columns on every 10th submission for tidiness
  if (sheet.getLastRow() % 10 === 0) {
    sheet.autoResizeColumns(1, existingHeaders.length);
  }
}

/* ── Convert snake_case key to a readable label ── */
function formatHeader(key) {
  if (key === 'timestamp') return 'Submission Time';
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

/* ── Apply styling to the header row ── */
function formatHeaderRow(sheet, numCols) {
  var headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setBackground('#0B4EA2');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(10);
  sheet.setFrozenRows(1);
}
