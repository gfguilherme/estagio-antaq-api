const { GoogleSpreadsheet } = require('google-spreadsheet');

async function getAuth() {
  const creds = require('./credentials.json');
  const doc = new GoogleSpreadsheet(
    '1OnjETcm8DRtE-rj4Q2RYeq_f88JKMAd8o63ZjY28UUw'
  );
  await doc.useServiceAccountAuth(creds);

  return doc;
}

async function getSpreadsheet() {
  const spreadsheet = await getAuth();

  // loads document properties and worksheets
  await spreadsheet.loadInfo();

  const sheet = spreadsheet.sheetsByIndex[0];

  return sheet;
}

async function getRows() {
  const sheet = await getSpreadsheet();

  const rows = await sheet.getRows();

  return rows;
}

module.exports = { getRows, getSpreadsheet };
