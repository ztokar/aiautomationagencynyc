const base = 'https://www.aiautomationagencynewyork.com'
const lastModified = '2026-06-12'

export default function sitemap() {
  return [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/ai-agents-nyc`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/workflow-automation-nyc`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/custom-ai-solutions-nyc`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ai-automation-cost-nyc`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
