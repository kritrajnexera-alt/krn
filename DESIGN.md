---
name: KritRaj Nexera
description: AI-powered web development & automation agency
colors:
  ink-space: "#07091A"
  card-bg: "#0F1228"
  surface-mid: "#0B0E24"
  nexera-violet: "#5B2FD4"
  nexera-cyan: "#00C8E0"
  cool-white: "#F0F4FF"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.04em
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: 0.15em
    textTransform: uppercase
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.nexera-violet}"
    textColor: "{colors.cool-white}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.nexera-cyan}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    border: "1px solid rgba(0, 200, 224, 0.5)"
  card-default:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.lg}"
    border: "1px solid rgba(91, 47, 212, 0.15)"
  card-hover:
    border: "1px solid rgba(0, 200, 224, 0.3)"
    boxShadow: "0 0 40px rgba(0, 200, 224, 0.08)"
---

# Design System: KritRaj Nexera

## 1. Overview

**Creative North Star: "The Digital Space Agency"**

A dark-spatial design system built for an AI-powered development agency. The canvas is not black but a tinted deep navy (#07091A) that creates atmosphere without crushing detail. Violet and cyan are used as surgical signals — one accent moment per viewport, never decoration. The typography pairing (Space Grotesk display × Inter body × Space Mono labels) creates an engineering-led editorial feel: precise, technical, but warm enough for local Indian business owners to trust.

The system explicitly rejects: dark SaaS template patterns (purple blob gradients, glassmorphism, stock illustrations), numbered section markers, identical card grids, and bounce animations. It embraces: generous whitespace, hairline borders, code-adjacent label styling, and deliberate motion that serves the narrative — not decoration.

**Key Characteristics:**
- Dark-spatial depth (ink-space navy, not pure black)
- Restrained accent (violet + cyan, one moment per viewport)
- Engineering-led aesthetic (mono labels, terminal-like data displays)
- Local-first narrative (INR pricing, city names, WhatsApp as primary channel)

## 2. Colors

A restricted palette where every color serves a structural role.

### Primary
- **Nexera Violet** (#5B2FD4): Primary action color. Used for CTA buttons, focus indicators, and as the dominant accent on interactive elements. Never used as body text or background.

### Secondary
- **Nexera Cyan** (#00C8E0): Active/hover signal. Used for active nav links, hover states on cards and links, and the WhatsApp button. Draws attention without competing with violet.

### Neutral
- **Ink Space** (#07091A): Body background. A tinted deep navy, not pure black. Creates atmospheric depth.
- **Card BG** (#0F1228): Surface container for cards and panels. One step lighter than ink-space for subtle elevation.
- **Surface Mid** (#0B0E24): Alternating card surface for visual variety without breaking the dark theme.
- **Cool White** (#F0F4FF): Primary text color. Slightly blue-tinted white for readability against dark backgrounds.

### Named Rules
**The One Accent Rule.** Violet or cyan appears on ≤10% of any given viewport. Their rarity is what makes them signals — when everything glows, nothing guides the eye.

## 3. Typography

**Display Font:** Space Grotesk (sans-serif)
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** Space Mono (monospace)

**Character:** A three-family stack that separates structural roles by weight and spacing. Space Grotesk provides bold, tight display heads with engineering precision. Inter carries long-form body copy at comfortable reading size. Space Mono isolates metadata, pricing, and labels in a code-native voice.

### Hierarchy
- **Display** (700, clamp(2rem, 5vw, 3.5rem), 0.9): Section headings. Max 96px. `text-wrap: balance`. letter-spacing -0.04em minimum.
- **Headline** (700, clamp(1.8rem, 4vw, 3rem), 1.1): Sub-section headings. One step below display.
- **Title** (700, 18–20px, 1.2): Card titles and feature names.
- **Body** (400, 14px, 1.7): Paragraph text. Max line length 65ch. Color: cool-white/50 for secondary, cool-white for primary.
- **Label/Mono** (400, 11px, 1.4, 0.15em tracking, uppercase): Service numbers, prices, metadata. Space Mono only.

## 4. Elevation

The system uses tonal layering rather than drop shadows. Elevation is conveyed by background lightness: ink-space (base) → card-bg (surface) → surface-mid (alternate). Hover states use border-color shift (violet/10 → cyan/30) and optional glow via `box-shadow: 0 0 40px rgba(0, 200, 224, 0.08)`. No ambient shadows at rest.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Depth appears only through interaction state changes (hover border, focus ring, active scale).

## 5. Components

### Buttons
- **Shape:** Fully rounded (9999px). Minimum 44px touch target.
- **Primary:** Violet bg (#5B2FD4), white text, 14px font, 14px/28px padding. Hover shifts to 80% opacity + glow shadow.
- **Ghost:** Transparent bg, cyan border (50% opacity), cyan text. Hover adds 10% cyan bg tint.
- **Focus:** Cyan ring at 2px, offset 2px.

### Cards / Containers
- **Corner Style:** 16px radius (rounded-2xl).
- **Background:** Card-bg (#0F1228) for primary, surface-mid (#0B0E24) for alternating.
- **Border:** 1px solid nexera-violet at 10% opacity at rest; shifts to nexera-cyan at 30% opacity on hover.
- **Shadow Strategy:** None at rest. Optional glow on hover: 0 0 40px rgba(0, 200, 224, 0.08).
- **Internal Padding:** 32px (p-8), flexible with flex justify-between for vertical balance.

### Navigation
- **Desktop:** Fixed top nav, dark bg (#0D1024/95), 16px text links with 8px gap. Active link uses cyan underline via Framer Motion layoutId. Hover transitions text to 90% white.
- **Mobile:** Full-screen overlay, centered, dark bg (#0D1024/98), 30px text links with staggered blur-in animation. Hamburger icon animates to X on open.
- **Logo:** Full brand logo image (removebg PNG) with brand name. Logo scales on hover.

### Inputs / Fields
- No form inputs currently implemented. Contact is handled via external paths (WhatsApp, email, Calendly).

## 6. Do's and Don'ts

### Do:
- **Do** use ink-space (#07091A) not pure black for the body background. The tint creates depth.
- **Do** keep one accent moment per viewport — violet OR cyan, not both competing.
- **Do** use Space Grotesk for headings, Inter for body, Space Mono for labels consistently.
- **Do** use `prefers-reduced-motion` to disable all animations for vestibular safety.
- **Do** ensure body text meets WCAG AA (4.5:1) contrast against dark backgrounds.

### Don't:
- **Don't** use numbered section markers (01/02/03) as decorative scaffolding above every section.
- **Don't** put a tiny uppercase tracked eyebrow above every section heading. One as a brand signature is voice; repeating it is template grammar.
- **Don't** use gradient text (`background-clip: text`) for body content. Logo mark may use brand color solid.
- **Don't** use identical card grids across multiple sections. Vary backgrounds (card-bg vs surface-mid) and hover treatments.
- **Don't** use pure black backgrounds (#000). Use ink-space (#07091A).
- **Don't** use bounce, elastic, or spring animations. Use cubic-bezier(0.22, 1, 0.36, 1) for reveals.
- **Don't** use glassmorphism (frosted glass blur) as a default treatment.
- **Don't** use stock illustrations, rocket icons, or laptop imagery.
- **Don't** create dead affordances — "View project" must link somewhere or not appear.
- **Don't** overflow text on mobile; test heading clamp at all breakpoints.
