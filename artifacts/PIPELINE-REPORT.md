# NovuLabs pipeline report

_Generated 2026-08-22T03:02:33.777Z by `ruflo-office/pipeline.js`._

Every number here was produced by running the checks, not by reading the source.

## Stages

| Stage | Result | Time |
| --- | --- | --- |
| claims | pass | 0.3s |
| audit | pass | 1.8s |
| keywords | pass | 17.4s |

## PR claim verification

11/12 claims reproduce

## Page scores

| Route | SEO | AEO | GEO |
| --- | --- | --- | --- |
| `/` | 80 | 90 | 80 |
| `/services` | 90 | 60 | 70 |
| `/solutions` | 90 | 70 | 80 |
| `/portfolio` | 90 | 60 | 80 |
| `/about` | 90 | 70 | 80 |
| `/contact` | 100 | 90 | 70 |
| `/blog` | 90 | 70 | 70 |

GEO scores stay capped until CLIENT-ACTIONS.md items 4 (phone) and 5 (street address) are supplied — LocalBusiness schema cannot validate without them.

## Keyword demand (Google Suggest, PK)

| Seed | Variants |
| --- | --- |
| software house islamabad | 109 |
| core banking software pakistan | 4 |
| aml software pakistan | 0 |

Prominence, not search volume — there is no volume source on this machine (Ahrefs, Semrush and DataForSEO all return plan/quota errors).

## Re-run

```bash
node ruflo-office/pipeline.js
```
