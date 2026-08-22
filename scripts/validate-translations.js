const fs = require('fs');
const path = require('path');

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys = keys.concat(getKeys(v, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys.sort();
}

const enPath = path.join(__dirname, '../messages/en.json');
const arPath = path.join(__dirname, '../messages/ar.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

const enKeys = getKeys(en);
const arKeys = getKeys(ar);

const missingInAr = enKeys.filter(k => !arKeys.includes(k));
const missingInEn = arKeys.filter(k => !enKeys.includes(k));

if (missingInAr.length > 0) {
  console.error('❌ Keys missing in messages/ar.json:', missingInAr);
}
if (missingInEn.length > 0) {
  console.error('❌ Keys missing in messages/en.json:', missingInEn);
}

if (missingInAr.length === 0 && missingInEn.length === 0) {
  console.log(`✅ Key parity verified! Total keys: ${enKeys.length}`);
  process.exit(0);
} else {
  process.exit(1);
}
