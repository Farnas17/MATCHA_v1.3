# Design System Specification: Editorial Organicism

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Atelier"**

This design system moves away from the sterile, rigid grids of traditional SaaS platforms. Instead, it adopts the philosophy of a high-end editorial look—think boutique architectural journals or premium lifestyle periodicals. It balances the "warmth" of a human connection platform with the "precision" required for a technical developer environment.

The system breaks the "template" look through:
*   **Intentional Asymmetry:** Using generous, purposeful white space to lead the eye.
*   **Tonal Depth:** Replacing harsh lines with sophisticated, layered paper-like surfaces.
*   **High-Contrast Scale:** Pairing oversized, authoritative display type with hyper-legible utility text.

The goal is to make the user feel they are entering a curated space where finding a teammate is a thoughtful, human-centric process, not a database query.

---

## 2. Colors: The Matcha Palette
The palette is rooted in botanical tones and warm mineral neutrals, designed to feel grounding and premium.

### Primary & Secondary (The Greens)
*   **Primary (`#45622d`):** A deep, forest-inspired matcha. Used for primary actions and authoritative headings.
*   **Primary Container (`#5d7b43`):** Use this for large hero areas or prominent card backgrounds to provide a softer immersion than the deep primary.
*   **Secondary (`#556348`):** An olive-tinted sage. Use for supportive UI elements and secondary navigation.

### The Warm Neutrals (The "Ceramic" Base)
*   **Surface / Background (`#fbf9f3`):** A creamy, unbleached paper tone. This is your "Canvas."
*   **Surface Container Tiers:**
    *   **Lowest (`#f5f3ed`):** For subtle sectioning.
    *   **Low (`#f0eee8`):** For standard card backgrounds.
    *   **High (`#eae8e2`):** For interactive hover states.

### The Accent (The "Peach" Spark)
*   **Tertiary (`#983d2a`):** A sophisticated coral/terracotta. 
*   **Tertiary Container (`#b7553f`):** Used exclusively for high-conversion CTAs and "Matching" notifications. This provides a warm, energetic contrast to the cool greens.

### Core Rules for Application
1.  **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Define boundaries solely through background shifts. For example, a `surface-container-low` card sits on a `surface` background.
2.  **The Glass & Gradient Rule:** For floating navigation or modal overlays, use `surface` with 80% opacity and a `24px` backdrop blur. Apply a subtle linear gradient (Primary to Primary-Container) on primary buttons to give them "soul" and depth.

---

## 3. Typography: Editorial Authority
We utilize a two-font system to balance character with utility.

*   **Display & Headlines (Manrope):** A modern, geometric sans-serif with a warm soul. 
    *   *Usage:* Use `display-lg` (3.5rem) for hero statements. Use `headline-md` (1.75rem) for card titles. Bold weights are preferred for headlines to create a "printed" feel.
*   **Body & Labels (Inter):** The gold standard for readability. 
    *   *Usage:* All functional data, bios, and descriptions. `body-md` (0.875rem) is the workhorse for developer bios and project descriptions.

**Hierarchy Tip:** Always lean into extremes. If a headline is large, ensure the sub-label is significantly smaller and elegantly spaced (`letter-spacing: 0.02em`).

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are largely replaced by **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a natural "lift" that feels like layered fine paper.
*   **Ambient Shadows:** When a card must float (e.g., a "Match Found" popover), use a "Ghost Shadow": `box-shadow: 0 20px 40px rgba(69, 98, 45, 0.06)`. Note the tint—the shadow is a deep green-grey, not pure black, to keep it organic.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Human-Centric UI

### Cards (The "Profile" Unit)
*   **Rule:** No dividers. Separate the "Name" from the "Skills" using `24px` of vertical whitespace or a subtle `surface-container-high` background for the skill tags.
*   **Corner Radius:** Use `xl` (1.5rem) for large profile cards and `md` (0.75rem) for internal elements like tags or inputs.

### Buttons
*   **Primary:** Background: Linear Gradient (`primary` to `primary_container`). Color: `on_primary`. 
*   **Secondary:** Background: `secondary_container`. Color: `on_secondary_container`. 
*   **Interaction:** On hover, increase the background saturation slightly; do not use a border change.

### Chips (Skill Tags)
*   Use `secondary_fixed` for the background. They should feel like soft "pills." 
*   Avoid high-contrast colors; the goal is for a wall of 10 tags to look like a harmonious texture, not a distraction.

### Input Fields
*   Background: `surface_container_low`. 
*   Shape: `md` (0.75rem).
*   State: On focus, the background shifts to `surface_container_lowest` and a soft `primary` glow (2px blur) is applied.

---

## 6. Do's and Don'ts

### Do
*   **Do** use "Breathing Room." If you think there’s enough padding, add 8px more.
*   **Do** use asymmetrical layouts for Hero sections (e.g., Text on the left, overlapping cards on the right).
*   **Do** use the `tertiary` (Coral) sparingly. It is a "moment of delight," not a primary theme color.

### Don't
*   **Don't** use 100% black text. Always use `on_surface` (`#1b1c18`) for a softer, premium feel.
*   **Don't** use sharp corners. Everything in this system is designed to feel approachable and "hand-finished."
*   **Don't** use standard "line-and-icon" lists. Use card-based layouts with tonal shifts to separate list items.

---

## 7. Signature Interaction: The "Soft Merge"
When two teammates are "Matched," do not use a standard modal. Use a full-screen `surface_container_lowest` overlay with a slow `0.5s` ease-in-out transition, featuring the two profile cards overlapping slightly in the center—visually representing the "matching" of two individuals.