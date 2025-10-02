# Foundry AI Governance

A production-grade, vendor-neutral, one-page marketing site for AI governance and EU AI Act compliance services.

## Features

- **Next.js 14+** with App Router and TypeScript
- **Tailwind CSS** for styling with custom brand colors
- **Mobile-first responsive design** with WCAG 2.1 AA compliance
- **Smooth scrolling navigation** with active section highlighting
- **Contact form** with client-side validation and API integration
- **SEO optimized** with metadata, robots.txt, and sitemap.xml
- **Lightweight analytics** with custom event tracking
- **Accessibility features** including skip links and proper ARIA labels

## Brand Colors

- Primary Navy: `#0B1F3B`
- Graphite: `#1F2937`
- Soft Green: `#10B981`
- Light Background: `#F5F7FA`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── globals.css             # Global styles and Tailwind config
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Main page component
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
├── components/
│   ├── Contact.tsx             # Contact form with validation
│   ├── FAQ.tsx                 # FAQ section
│   ├── Footer.tsx              # Footer with disclaimer
│   ├── Header.tsx              # Sticky navigation header
│   ├── Hero.tsx                # Hero section with CTA
│   ├── HowWeWork.tsx           # Process and methodology
│   ├── Proof.tsx               # Credentials and expertise
│   ├── Resources.tsx           # Free resources with prefill
│   ├── Services.tsx            # Service offerings
│   └── WhyNow.tsx              # EU AI Act deadlines
└── lib/
    └── events.ts               # Analytics event tracking
```

## API Endpoints

### POST /api/contact

Handles contact form submissions with validation.

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "company": "string", 
  "role": "string",
  "goals": ["string"],
  "message": "string",
  "consent": boolean
}
```

**Response:**
```json
{
  "ok": true
}
```

## TODO

- [ ] Integrate email service (SendGrid, Resend, etc.)
- [ ] Add CRM integration (HubSpot, Salesforce, etc.)
- [ ] Implement real analytics (GA4, LinkedIn Insight)
- [ ] Add email confirmation system
- [ ] Set up monitoring and error tracking

## Performance

The site is optimized for:
- **LCP < 2.5s** (Largest Contentful Paint)
- **CLS < 0.1** (Cumulative Layout Shift)
- **Lighthouse scores** ≥ 90 across all categories

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

## License

© Foundry AI Governance. All rights reserved.
