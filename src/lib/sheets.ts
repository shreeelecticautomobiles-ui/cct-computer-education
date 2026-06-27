const SHEET_URLS = {
  courses:      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpT6b3jEohgQlzb_-ejAsEvpot2txmfbz-tNxFy_c_XLGDam7P8zeO_V0ws8mYU-BC3UFDX1643zpa/pub?gid=752330087&single=true&output=csv',
  services:     'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpT6b3jEohgQlzb_-ejAsEvpot2txmfbz-tNxFy_c_XLGDam7P8zeO_V0ws8mYU-BC3UFDX1643zpa/pub?gid=466157279&single=true&output=csv',
  laptopSale:   'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpT6b3jEohgQlzb_-ejAsEvpot2txmfbz-tNxFy_c_XLGDam7P8zeO_V0ws8mYU-BC3UFDX1643zpa/pub?gid=1370980233&single=true&output=csv',
  announcement: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpT6b3jEohgQlzb_-ejAsEvpot2txmfbz-tNxFy_c_XLGDam7P8zeO_V0ws8mYU-BC3UFDX1643zpa/pub?gid=1166076126&single=true&output=csv',
};

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return [];
  const parseLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
        else inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    result.push(current.trim());
    return result;
  };
  const headers = parseLine(lines[0]);
  return lines.slice(1).map(line => {
    const values = parseLine(line);
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => { obj[h.trim()] = (values[i] || '').trim(); });
    return obj;
  }).filter(row => Object.values(row).some(v => v !== ''));
}

export async function fetchSheet(key: keyof typeof SHEET_URLS): Promise<Record<string, string>[]> {
  try {
    const res = await fetch(SHEET_URLS[key]);
    if (!res.ok) throw new Error('fetch failed');
    const text = await res.text();
    return parseCSV(text);
  } catch (err) {
    console.error('[Sheets] Error fetching', key, err);
    return [];
  }
}
