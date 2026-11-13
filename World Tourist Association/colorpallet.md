# PATA Website — Detailed Color Palette & Visual Color System

Recreate the visual color language of the current PATA (Pacific Asia Travel Association) website as closely as possible.

IMPORTANT:

* Do NOT randomly introduce modern SaaS colors, gradients, neon colors, purple, pink, orange, or excessive dark backgrounds.
* The overall visual identity must feel professional, international, tourism-focused, institutional, trustworthy, clean, and editorial.
* The primary visual identity should be based around PATA's strong blue brand language combined with white space, very light neutral backgrounds, dark typography, and subtle blue accents.
* Do not claim that the HEX values below are official PATA brand-guide values. Treat them as the implementation palette for recreating the visual appearance of the website.
* Preserve the existing page structure, animations, content, component layout, and functionality. This task is ONLY for establishing and consistently applying the color system.

---

## 1. CORE COLOR TOKENS

Create a centralized color system using CSS variables/Tailwind theme tokens.

### Primary Brand Blue

PRIMARY BLUE:
#0072BC

Purpose:

* Primary buttons
* Main links
* Active navigation
* Important labels
* Icons
* Section accents
* Interactive elements
* Event category indicators
* CTA elements

Do NOT use this blue as the background of every section.

It should function as the primary brand accent.

---

### Deep Brand Blue

DEEP BLUE:
#005B9A

Purpose:

* Button hover states
* Darker interactive states
* Important headings when required
* Secondary navigation states
* Footer accents
* Dark blue graphical elements

Hover transition:

#0072BC → #005B9A

Keep the transition subtle and professional.

---

### Accent Cyan Blue

ACCENT BLUE:
#00A6D6

Purpose:

* Small decorative elements
* Secondary highlights
* Data visualisation accents
* Curved graphical elements
* Small icons
* Hover details
* Visual separators

Use sparingly.

This color should NEVER overpower the primary PATA blue.

---

## 2. DARK TYPOGRAPHY COLORS

### Primary Text

DARK NAVY:
#172B3A

Use for:

* Main headings
* Navigation text
* Hero heading
* Section titles
* Important information
* Footer headings

This should replace pure black.

Avoid:

#000000

for normal typography.

---

### Secondary Text

SECONDARY TEXT:
#5C6870

Use for:

* Paragraphs
* Descriptions
* Supporting information
* Metadata
* Event descriptions
* Blog excerpts

This creates a softer editorial appearance.

---

### Muted Text

MUTED:
#7A858C

Use for:

* Dates
* Small metadata
* Secondary labels
* Less important information

Do not use muted text for important content because accessibility must remain strong.

---

## 3. WHITE SYSTEM

### Pure White

WHITE:
#FFFFFF

Primary uses:

* Header
* Navigation
* Cards
* Hero content areas
* Main content
* Modal backgrounds
* Forms
* Footer content areas when appropriate

White should be the dominant surface color.

---

### Soft Background

LIGHT BACKGROUND:
#F5F7F8

Use for:

* Alternating sections
* Research sections
* Events sections
* Blog sections
* Large content areas
* Supporting panels

This should create visual separation without making the website look heavily boxed.

---

### Blue-Tinted Background

PALE BLUE:
#EAF6FB

Use for:

* Information blocks
* Highlighted cards
* Newsletter sections
* Research highlights
* Sustainability highlights
* Hover backgrounds

Use this instead of creating random blue gradients.

---

## 4. BORDER SYSTEM

### Primary Border

BORDER:
#E9EEF1

Use for:

* Cards
* Navigation separators
* Event rows
* Blog cards
* Form fields
* Footer separators
* Content divisions

Borders must remain subtle.

Avoid dark borders.

---

### Strong Border

STRONG BORDER:
#D5DEE3

Use only when a stronger visual separation is required.

Do not use this everywhere.

---

## 5. INTERACTION COLORS

### Primary Button

Normal:

background: #0072BC
text: #FFFFFF

Hover:

background: #005B9A
text: #FFFFFF

Active:

background: #004F86

Disabled:

background: #D5DEE3
text: #7A858C

---

### Secondary Button

Normal:

background: transparent
border: #0072BC
text: #0072BC

Hover:

background: #EAF6FB
border: #0072BC
text: #005B9A

Active:

background: #DDF1F8

---

### Text Links

Normal:

#0072BC

Hover:

#005B9A

Visited:

Do NOT introduce purple.

Keep the visual language consistent with the PATA blue system.

---

## 6. HEADER COLOR SYSTEM

The header should be primarily white.

Header:

background:
#FFFFFF

Navigation:

#172B3A

Navigation hover:

#0072BC

Navigation active:

#0072BC

Navigation dropdown background:

#FFFFFF

Dropdown border:

#E9EEF1

Dropdown hover:

#EAF6FB

Member Login CTA:

background:
#0072BC

Member Login hover:

background:
#005B9A

Do not create a dark/navy header unless the existing design specifically requires it.

---

## 7. HERO COLOR SYSTEM

The hero must feel premium and editorial.

Primary hero background:

#FFFFFF

Hero heading:

#172B3A

Highlighted words:

#0072BC

Supporting paragraph:

#5C6870

Primary CTA:

#0072BC

CTA hover:

#005B9A

Decorative blue elements:

#0072BC
#00A6D6

If using photography, do NOT apply a heavy blue overlay over the entire image.

Use natural photography with subtle brand-colored graphical elements.

---

## 8. SECTION COLOR ALTERNATION

Avoid making every section white.

Use a controlled rhythm:

SECTION 01:
#FFFFFF

SECTION 02:
#F5F7F8

SECTION 03:
#FFFFFF

SECTION 04:
#EAF6FB

SECTION 05:
#FFFFFF

SECTION 06:
#F5F7F8

SECTION 07:
#FFFFFF

This creates hierarchy while maintaining the clean PATA-style appearance.

Do not use large blocks of saturated blue unless they are specifically intended as CTA/feature sections.

---

# 9. CARDS

Normal card:

background:
#FFFFFF

border:
#E9EEF1

heading:
#172B3A

description:
#5C6870

accent:
#0072BC

Hover:

background:
#FFFFFF

border:
#0072BC

heading:
#005B9A

Do NOT add:

* Neon shadows
* Glassmorphism
* Purple gradients
* Heavy drop shadows
* Excessive rounded corners

The cards should feel institutional/editorial rather than startup/SaaS.

---

# 10. EVENTS SECTION

Event dates should use the PATA blue system.

Date:

#0072BC

Event title:

#172B3A

Description:

#5C6870

Divider:

#E9EEF1

Hover:

Title:
#005B9A

Date:
#0072BC

Optional event category:

#00A6D6

Keep event cards predominantly white.

---

# 11. RESEARCH SECTION

Research/data content should use blue as the information accent.

Chart primary:

#0072BC

Chart secondary:

#00A6D6

Chart neutral:

#D5DEE3

Main statistic:

#172B3A

Statistic label:

#5C6870

Research card background:

#FFFFFF

Research section background:

#F5F7F8

Do NOT introduce multiple unrelated chart colors unless the data requires categorical distinction.

---

# 12. SUSTAINABILITY SECTION

Do NOT turn the sustainability section into a generic green environmental website.

The overall PATA identity must remain blue.

Use:

Primary:
#0072BC

Accent:
#00A6D6

Background:
#EAF6FB

Text:
#172B3A

Supporting neutral:
#5C6870

If green is required for a specific sustainability indicator, use a very restrained natural green only as a semantic status color—not as a replacement for the PATA brand color.

---

# 13. NEWS / BLOG

Blog cards:

background:
#FFFFFF

border:
#E9EEF1

Category:

#0072BC

Title:

#172B3A

Excerpt:

#5C6870

Date:

#7A858C

Read More:

#0072BC

Hover:

#005B9A

Images should remain natural and vibrant.

Do not place strong blue overlays over photographs.

---

# 14. PARTNERS SECTION

Use a predominantly white or #F5F7F8 background.

Partner logos should preferably appear:

* Original brand colors where appropriate
  OR
* Subtle grayscale treatment

On hover:

* Restore original logo color
* Slight opacity increase

Do NOT put every logo inside a colored box.

---

# 15. NEWSLETTER SECTION

Use a subtle blue-focused treatment.

Recommended:

Background:
#EAF6FB

Heading:
#172B3A

Description:
#5C6870

Input:
#FFFFFF

Input border:
#D5DEE3

Input focus:
#0072BC

Subscribe button:
#0072BC

Hover:
#005B9A

Avoid bright gradient newsletter backgrounds.

---

# 16. FOOTER

Use a darker variation of the PATA blue system.

Recommended:

Footer background:
#005B9A

Primary footer text:
#FFFFFF

Secondary footer text:
#DDEAF0

Links:
#FFFFFF

Link hover:
#00A6D6

Divider:
rgba(255,255,255,0.20)

Do NOT use pure black for the footer.

The footer should feel like an extension of the brand identity.

---

# 17. ACCESSIBILITY

Maintain strong contrast between:

#172B3A
and
#FFFFFF

Maintain strong contrast between:

#0072BC
and
#FFFFFF

Do not use light blue text on white backgrounds for important content.

Avoid:

#00A6D6

for normal body text on white backgrounds because it may not provide sufficient contrast.

Use accent blue primarily for graphical and decorative purposes.

---

# 18. COLOR USAGE RATIO

Follow this approximate visual ratio:

60% — WHITE / LIGHT SURFACES

15% — LIGHT GRAY / #F5F7F8

15% — PATA BLUE / #0072BC

7% — DEEP BLUE / #005B9A

3% — ACCENT BLUE / #00A6D6

This ratio is important.

The website should feel:

WHITE → CLEAN → BLUE → PROFESSIONAL

not:

BLUE → BLUE → BLUE → BLUE.

---

# 19. COLOR RULES

Follow these rules globally:

1. Never introduce purple.
2. Never introduce pink.
3. Never introduce neon colors.
4. Avoid orange unless required for semantic status.
5. Avoid unnecessary gradients.
6. Avoid black backgrounds.
7. Avoid excessive dark navy sections.
8. Avoid colorful glassmorphism.
9. Avoid excessive shadows.
10. Avoid excessive saturation.
11. Keep photography natural.
12. Keep blue as the primary brand accent.
13. Use white space heavily.
14. Use light gray for section separation.
15. Use pale blue for information highlights.
16. Use deep blue primarily for hover/emphasis.
17. Keep the visual identity consistent across every page.

---

# 20. CSS VARIABLES

Implement the complete system centrally:

:root {
--color-primary: #0072BC;
--color-primary-dark: #005B9A;
--color-primary-active: #004F86;
--color-accent: #00A6D6;

--color-text-primary: #172B3A;
--color-text-secondary: #5C6870;
--color-text-muted: #7A858C;

--color-white: #FFFFFF;
--color-background: #F5F7F8;
--color-surface: #FFFFFF;
--color-blue-soft: #EAF6FB;

--color-border: #E9EEF1;
--color-border-strong: #D5DEE3;

--color-footer: #005B9A;
--color-footer-text: #FFFFFF;
--color-footer-muted: #DDEAF0;
}

Make all components use these variables.

Do NOT hard-code random colors throughout the application.

---

# 21. VISUAL RESULT

After implementation, the final website should visually communicate:

Professional
International
Tourism
Trust
Research
Networking
Sustainability
Institutional credibility
Modern editorial design

The color experience should immediately feel like a **Pacific Asia tourism organisation**, with strong PATA-style blue branding and generous white space.

The final result should NOT look like:

* A SaaS dashboard
* A startup landing page
* A generic travel booking website
* A cryptocurrency website
* A neon modern portfolio
* A dark-mode agency website

It should look like a **premium international tourism association website**.

Before finishing, audit every page and component and replace any inconsistent colors with the centralized PATA color tokens above.
