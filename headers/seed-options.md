# AstroHout header design option space and seed build specs

Direction: Swiss / International Typographic Style grid, with wood tones. The thing being designed is the website header (masthead plus hero area). This file contains the option space (8 characteristics, each an alphabetically sorted list numbered from 0) and one self-contained Build spec per seed. Seeds were generated externally; the mapping is deterministic.

Mapping rule: character N of the seed selects from characteristic N (characteristics in alphabetical order). Pick = (index of character in `abcdefghijklmnopqrstuvwxyz0123456789`, a=0 ... z=25, 0=26 ... 9=35) mod (number of options).

Characteristics (alphabetical): 1. Colour palette (10 options); 2. Image treatment (8 options); 3. Layout (9 options); 4. Logo placement (8 options); 5. Rules and ornament (8 options); 6. Typographic scale (8 options); 7. Typography (10 options); 8. Whitespace (8 options)

---

## Part 1: Option space

### Characteristic 1: Colour palette (10 options)

- **0. Ash Grey Bone**: Cool-neutral light. Background #E9E6DF (bone), text #2A2724 (near-black brown), accent #8A5A33 (walnut, used for links, rules, one highlighted word), secondary #B9B2A5 (ash grey for hairlines, captions, inactive nav). Wood appears only as the accent; the page is quiet and paper-like.
- **1. Black Walnut Night**: Dark, warm. Background #1B1410 (black walnut), text #EDE3D3 (cream), accent #D98A3D (oiled amber, for the single call-to-action and key numerals), secondary #5A4334 (mid-brown for rules, panels, muted text). Text on background contrast about 13:1.
- **2. Cedar Signal Red**: Classic Swiss poster. Background #F4EDE2 (pale cedar), text #1E1A17 (ink), accent #D2381E (Swiss signal red, used sparingly: one block, one word, one rule), secondary #A9663C (cedar brown for secondary text, small blocks, captions).
- **3. Charred Oak**: Shou-sugi-ban dark, low-chroma. Background #121110 (charred black), text #D9D4CB (ash white), accent #C8A27A (raw oak, highlights and rules), secondary #3A3631 (warm charcoal for panels and hairlines). No saturated colour anywhere.
- **4. Honey Birch**: Loud warm yellow-wood. Background #F3E2BC (honey birch), text #3B2A18 (dark walnut), accent #B5651D (burnt orange-brown for headline emphasis and buttons), secondary #E0C58E (deeper honey for blocks and panels). Whole header sits on the honey ground.
- **5. Mahogany Full Bleed**: Loud, saturated. Background #5B1F14 (mahogany), text #F6E8D6 (warm ivory), accent #F0B95B (brass-gold, for the logo, numerals and key rule), secondary #8C3A25 (lighter red-brown for blocks and hairlines). Background is full bleed to every edge.
- **6. Maple Cobalt**: Unexpected non-wood accent against wood. Background #F7F0E1 (pale maple), text #16140F (ink), accent #1F3FBF (cobalt blue, as in a Swiss poster, for one block and the links), secondary #C99B62 (maple tan for hairlines, captions, small blocks).
- **7. Pine Moss**: Green-tinted forest wood. Background #E8DFC8 (pale pine), text #1F2A1C (deep forest green-black), accent #4F6B3A (moss green, links, one block), secondary #A68A5B (pine brown for rules and captions).
- **8. Pine Sawdust Mono**: Near-monochrome brown scale. Background #F8F3E8 (sawdust), text #2E2218 (dark brown), accent #6B4A2B (mid walnut, used only as a tint of the text hue, never as a contrasting hue), secondary #D8C8AC (light tan for blocks and hairlines). All elements are shades of one brown hue.
- **9. Whitewashed Oak Blue-Grey**: Scandinavian cool wood. Background #EFEBE4 (whitewashed oak), text #24282B (blue-black), accent #6F8795 (slate blue-grey, links and one block), secondary #C7B79F (pale oak for rules, captions, panels).

### Characteristic 2: Image treatment (8 options)

- **0. Blueprint Line Drawings**: No photographs in the header. Instead use technical SVG line drawings of a joint, chair or table (dovetail, mortise and tenon, plan and elevation). Stroke 1px in the text colour (accents 1px in accent colour), fill none, on the background colour. Include small dimension numbers (e.g. 450, 720) set in the small label size. Drawings occupy 3 to 6 grid columns; draw them yourself as inline SVG.
- **1. Duotone Wood**: Use the portfolio photos converted to duotone: shadows mapped to the text colour, highlights mapped to the background colour (use CSS filter grayscale(1) contrast(1.1) with mix-blend-mode: multiply over a background-colour or accent-colour container, or an SVG feColorMatrix duotone). Photos fill whole grid cells with object-fit: cover.
- **2. Full-Bleed Hero**: One portfolio photo as full-viewport-width hero, 100vw by about 70vh, object-fit: cover, natural colour, no border, no radius. All header text overlays it in the text colour or sits in a solid block of the background colour at its edge. Add a 40% dark gradient only if text legibility requires it.
- **3. Grayscale High Contrast**: All photos filtered with grayscale(1) contrast(1.2) brightness(0.95), no colour. On hover (or never, if no hover), colour returns with a 300ms transition. Images are cropped to grid cells, 4:5 or 3:2, no radius, no shadow.
- **4. Halftone Dither**: Photos pre-processed (or CSS/SVG filtered) into coarse 1-bit halftone: dots at 45 degrees, about 6px pitch, dots in the text colour on the background colour. Result looks like newsprint. Images occupy full grid cells; no smooth tones.
- **5. Hard-Cropped Squares**: All photos cropped to exact 1:1 squares, laid edge to edge in a strip of 3 to 4 squares with 0 gap (or 2px gap in the background colour). object-fit: cover, natural colour, no radius. Each square is exactly one grid module wide.
- **6. Natural Colour Contact Sheet**: Row of 4 to 6 small natural-colour photos at 4:5 ratio, 3px gaps, like a photographer's contact sheet. Each has a tiny frame number under it (01, 02, ...) in the small label size and a thin 1px frame line in the secondary colour. Photos are modest in size (about 160 to 220px wide).
- **7. Oversized Detail Crops**: Macro-crop one or two portfolio photos at about 200% so only wood grain, a joint edge or a tool detail fills the cell. Natural colour, no filter, heavy crop, object-fit: cover with object-position chosen on the most interesting grain. Cells are large: 5 to 7 of 12 columns wide.

### Characteristic 3: Layout (9 options)

- **0. Asymmetric 12-Column with Sidebar**: 12-column grid, max width 1280px, 24px gutters. Left sidebar occupies columns 1-3: wordmark, small descriptor and nav stacked vertically. Main content occupies columns 4-12: headline, intro line and imagery. Header sidebar sticks (position: sticky; top: 0) on desktop. On mobile it collapses to a single column with the wordmark first.
- **1. Centred Axis Stack**: Single central axis. Content sits in columns 4-9 of a 12-column grid (about 50% width), everything centred on the axis: logo/wordmark, nav as one centred line, headline, one-line intro. Strict vertical stack with equal 48px spacing. Columns 1-3 and 10-12 are empty.
- **2. Four-Column Modular Grid**: 4 equal columns with 24px gutter, and header height of 4 modular rows (each row about 18vh with 24px gaps). Modules are filled: wordmark in module (1,1), nav in (4,1), headline spanning (1-3, 2-3), imagery in (4, 2-4), intro in (1-2, 4). Every element snaps to module edges.
- **3. Horizontal Bands**: Header made of three full-width stacked bands separated by 1px rules: band 1 (about 64px) nav and wordmark in a 12-column row; band 2 (about 50vh) giant headline; band 3 (about 20vh) imagery or intro line spread across 4 equal groups of 3 columns. Bands never overlap.
- **4. Index List Table**: Header as a typographic table/index: 12-column grid, rows separated by 1px rules, each row about 56px high. Row layout: columns 1-1 number (01...), columns 2-7 title (Meubels, Maatwerk, Keukens, Over, Contact), columns 8-11 short description, column 12 arrow. Wordmark is the first row, spanning columns 1-12. Rows are links.
- **5. Rotated Spine**: Narrow left spine (column 1, about 72px wide) holds text rotated 90 degrees counter-clockwise (writing-mode: vertical-rl; transform: rotate(180deg)): wordmark and nav read bottom-to-top. The remaining 11 columns (a 12-column grid with the spine as column 1) hold headline (cols 2-9), imagery (cols 8-12) and intro (cols 2-5).
- **6. Six-Column Diagonal Cascade**: 6 columns, 24px gutters. Elements step down diagonally from top-left to bottom-right: wordmark at column 1 row 1, nav at column 2 row 2, headline at columns 3-6 row 3, imagery at columns 4-6 row 4, intro at column 5-6 row 5. Row height about 14vh. Empty cells are deliberate.
- **7. Split Screen 50/50**: Viewport divided exactly into two halves, each a 6-column grid. Left half (columns 1-6): solid block in the accent or secondary colour with wordmark, nav and headline. Right half (columns 7-12): imagery filling the full half height (100vh minus nothing) or a stacked pair of images. Hard vertical split, no gutter between halves.
- **8. Three-Column Rigid Newspaper**: 3 equal columns (gutter 32px) separated by 1px vertical rules. Column 1: wordmark and nav. Column 2: headline and intro as running text. Column 3: imagery plus short caption. Masthead row above all three with date/place line (Nederland, ambachtelijk meubelmaker) and a 1px double rule below it.

### Characteristic 4: Logo placement (8 options)

- **0. Baseline Footnote Mark**: Logo is tiny (24px high), placed at the bottom-right corner of the header block, aligned on the last text baseline, like a printer's mark. The wordmark is typeset separately in the main type; the logo adds no weight to the composition.
- **1. Centred Above Wordmark**: Logo about 96px high, horizontally centred on the layout axis, directly above the wordmark with 16px gap. Wordmark below it in the main type, same centre axis. Treat the pair as one lockup.
- **2. Cropped Giant Watermark**: Logo scaled to about 80vw wide, in the secondary colour at 12 to 18% opacity, placed behind all content and cropped by the right and/or bottom edge of the header (overflow hidden). It is texture, not a mark; a small wordmark carries identity.
- **3. Grid Cell Square**: Logo occupies one full square grid module (e.g. 2 columns wide by the same height, around 160 to 200px), sitting on a solid accent- or secondary-colour tile, logo centred with 20% padding. Tile is flush with the grid edges and the top-left of the content area.
- **4. Inline With Wordmark**: Logo 40px high immediately left of the wordmark, 12px gap, vertically centred on the wordmark x-height. They read as one line: [logo] AstroHout. Placed at the top-left of the content area, in the nav row.
- **5. Rotated Vertical Lockup**: Logo plus wordmark rotated 90 degrees (writing-mode: vertical-rl), running up the left edge of the header, logo at the bottom, about 40px logo size, wordmark above it. The lockup is one column wide and runs the full header height.
- **6. Top Left Flush**: Logo 48px high, flush to the top-left corner of the content area (no extra margin), aligned to column 1 edge and the top margin line. Wordmark/nav begin at the next column. Nothing is offset from the grid.
- **7. Top Right Corner Stamp**: Logo 64 to 80px, placed at the top-right corner, flush to the last column edge, treated as a stamp or seal: optionally inside a 1px circle or square outline in the text colour. The wordmark is positioned elsewhere (top-left or in the headline).

### Characteristic 5: Rules and ornament (8 options)

- **0. Corner Registration Marks**: Print-style crop/registration marks at the four corners of the header content area: L-shaped marks 14px long, 1px, in the text colour, offset 12px outside the content box. Optional small cross-hair registration mark centred on the top edge. No other ornament.
- **1. Dimension Lines**: Woodworking/architectural dimension lines: 1px lines with perpendicular end ticks (8px) and arrowheads, with a centred measurement label in the small label size (e.g. 1200 mm, 450 mm) in the secondary colour. Used to measure the header column spans, image edges and headline width. Colour: secondary or accent.
- **2. Grain Line Pattern**: Subtle wood-grain texture built from thin SVG lines: repeating gently wavy horizontal lines, 1px, spaced 6 to 14px irregularly, in the secondary colour at 15 to 25% opacity, tiled behind the header or inside one or two blocks. Pattern must not interfere with text contrast.
- **3. Hairline Everything**: A 1px rule in the secondary (or text-at-30%) colour separates every cell, row, column and block of the header. Layout becomes a visible table of cells: horizontal rules between rows, vertical rules between columns. No other ornament.
- **4. Heavy Bar Accents**: Thick bars as ornament: a 12px high by 48px wide solid accent bar above the headline, plus an 8px full-width bar at the top edge of the header in the text colour. No hairlines. Bars align to column edges exactly.
- **5. No Rules At All**: No lines, borders, boxes or ornaments of any kind. Separation is achieved only by whitespace, type scale and alignment. Even the nav has no underline (use colour or weight for the active item).
- **6. Numbered Section Markers**: Every group of content is prefixed with a section number such as 01, 02, 03 or 01 / Meubels, set in the small label size in the accent colour (tabular numerals, uppercase labels, letter-spacing 0.08em). Small 24px-wide 1px rule after each number.
- **7. Visible Grid Overlay**: The grid's column guides are drawn permanently as ornament: 1px dashed or solid vertical lines at every column edge, in the text colour at 10% opacity, spanning the full header height, plus horizontal baseline lines every 24px at 5% opacity optionally. Content aligns to the visible lines.

### Characteristic 6: Typographic scale (8 options)

- **0. Compact Uniform**: Everything is 14px / 18px line height, including headline and wordmark. Hierarchy comes from weight (400 vs 700), uppercase, colour and position only. The header looks like a technical specification sheet. Letter-spacing 0; uppercase labels 0.04em.
- **1. Extreme Contrast**: Two extremes: 12px / 16px uppercase labels (letter-spacing 0.1em) for nav, captions, intro, and one single giant element (wordmark) at 22vw (min 120px) with line-height 0.8 and tight tracking -0.04em. No intermediate sizes.
- **2. Golden Ratio**: Ratio 1.618 from 16px base: 16px body, 26px lead, 42px subhead, 68px headline, 110px display. Line height 1.4 for body, 1.05 for 68px+. Use sizes at the nearest step only; clamp the largest down to 56px on mobile.
- **3. Major Third**: Ratio 1.25 from 16px base: 16, 20, 25, 31, 39, 49, 61px. Nav 16px, intro 20px, subheads 25px, headline 61px (clamp 39px on mobile), wordmark 39px. Line height 1.45 for body, 1.1 for headline. Gentle, conventional hierarchy.
- **4. Perfect Fifth**: Ratio 1.5 from 16px base: 16, 24, 36, 54, 81, 122px. Nav 16px, intro 24px, headline 81px (36px mobile), wordmark 54px, display 122px for numerals. Line height 1.0 to 1.1 for sizes 54px and up. Dramatic poster scale.
- **5. Perfect Fourth**: Ratio 1.333 from 16px base: 16, 21, 28, 38, 50, 67, 89px. Nav 16px, intro 21px, wordmark 28px, headline 67px (clamp 38px on mobile), numerals 89px. Line height 1.4 body, 1.05 for 50px+.
- **6. Single Giant Headline**: Body and everything else 15px / 20px. One headline set with clamp(80px, 14vw, 220px), line-height 0.9, tracking -0.03em, taking up the majority of the header. Wordmark and nav are 15px, so the headline dominates 10:1.
- **7. Two Sizes Only**: Exactly two font sizes: 13px / 18px for all small text and 72px / 72px (clamp 40px on mobile) for headline and wordmark. No other sizes; hierarchy by position and weight.

### Characteristic 7: Typography (10 options)

- **0. Archivo Expanded Grotesk**: Google Fonts Archivo variable. Headings and wordmark: Archivo weight 800, width axis wdth 125 (expanded), uppercase, tracking 0.01em. Body, nav and labels: Archivo weight 400, wdth 100. Wide, heavy, industrial.
- **1. Bebas Neue Condensed Caps**: Google Fonts Bebas Neue 400 for headline, wordmark and nav (always uppercase, tracking 0.02em, tall condensed). Body and intro: Inter 400 / 500. Strong tall poster type against neutral text.
- **2. DM Serif Display with DM Sans**: Google Fonts DM Serif Display 400 (headline and wordmark, sentence case, tight tracking -0.01em) with DM Sans 400 / 500 for nav, intro and labels. High-contrast serif display on a clean sans; warmer, more craft-like.
- **3. Fraunces Soft with Work Sans**: Google Fonts Fraunces variable, weight 600, opsz 144, SOFT 100 (soft wonky serif) for headline and wordmark; Work Sans 400 / 500 for nav, intro and labels. Friendly, handmade, wood-shop feel.
- **4. IBM Plex Mono Technical**: Google Fonts IBM Plex Mono only: weight 500 for headline and wordmark, weight 400 for everything else. Uppercase labels with 0.06em tracking, tabular numerals. All text in one monospaced family: drawing-office / spec sheet feel.
- **5. Instrument Serif Editorial**: Google Fonts Instrument Serif 400 (regular and italic) for headline and wordmark, with italic for emphasis words; Inter 400 for nav, intro and labels. Elegant condensed serif display, editorial magazine feel.
- **6. Inter Neo-Grotesque**: Google Fonts Inter variable: weight 700 for headline and wordmark with tracking -0.03em, weight 400 for body, weight 500 for nav, 0.01em tracking on small labels. The closest equivalent to Helvetica; the canonical Swiss look.
- **7. Roboto Slab Workshop**: Google Fonts Roboto Slab weight 700 for headline and wordmark, weight 400 for intro; Roboto 400 / 500 for nav and labels. Sturdy slab serifs, workshop-sign, craftsman feel.
- **8. Space Grotesk with Space Mono**: Google Fonts Space Grotesk weight 700 for headline and wordmark (tracking -0.02em), weight 400 for intro; Space Mono 400 for nav, labels, numerals. Quirky geometric grotesk paired with mono for data.
- **9. Unbounded Round Geometric**: Google Fonts Unbounded weight 700 for headline and wordmark (wide, rounded, geometric, tracking 0), Manrope 400 / 500 for nav, intro and labels. Futuristic round type; a nod to the astronaut.

### Characteristic 8: Whitespace (8 options)

- **0. Asymmetric Void**: Content is pushed into the left 4 of 12 columns; the right 8 columns of the header are intentionally empty (only imagery, if any, sits at the far edge). Outer margin 40px. At least 55% of the header area is empty. Void is on the right/top.
- **1. Balanced Medium**: Conventional spacing. Page margin 5vw, gutters 24px, 64px between blocks, 32px inside blocks. About 35% of the header area is empty. Spacing is even and predictable.
- **2. Dense Packed**: Minimum space. Margins 16px, gutters 8px, 16px between blocks. Every grid cell is filled; empty area under 10%. Header feels packed like a newspaper front page.
- **3. Edge To Edge**: Zero outer margin and zero gutters: blocks, images and rules touch each other and the viewport edges. Inside text blocks use 16px padding. Structure is shown by colour blocks and hairlines, not by space.
- **4. Generous Margins**: Wide margins: 12vw left and right (min 48px), 96px top and bottom, 48px gutters. Content column narrower than the viewport, centred, with a clear frame of empty space. About 50% of the header area is empty.
- **5. Giant Top Void**: The top 40vh of the header is empty (only a small nav line at the very top), then headline and content start below it. Left and right margin 32px, gutters 24px. All empty space is concentrated at the top.
- **6. Hanging Margin**: Columns 1-2 are an empty hanging margin: all text and imagery start at column 3 (of 12). Section labels and numerals may sit alone in the hanging margin (small label size). Gutters 24px, vertical gaps 48px.
- **7. Vertical Rhythm Airy**: Everything sits on an 8px baseline; vertical spacing is in multiples of 24px with 96px between major blocks and 48px between sub-blocks. Side margins 6vw, gutters 32px. Airy, calm, text and image blocks float with air above and below.

---

## Part 2: Seed mapping and Build specs

### Seed `6yobedbf`

Arithmetic:

- Character 1 `6` = 32; Colour palette has 10 options; 32 mod 10 = 2 -> **Cedar Signal Red**
- Character 2 `y` = 24; Image treatment has 8 options; 24 mod 8 = 0 -> **Blueprint Line Drawings**
- Character 3 `o` = 14; Layout has 9 options; 14 mod 9 = 5 -> **Rotated Spine**
- Character 4 `b` = 1; Logo placement has 8 options; 1 mod 8 = 1 -> **Centred Above Wordmark**
- Character 5 `e` = 4; Rules and ornament has 8 options; 4 mod 8 = 4 -> **Heavy Bar Accents**
- Character 6 `d` = 3; Typographic scale has 8 options; 3 mod 8 = 3 -> **Major Third**
- Character 7 `b` = 1; Typography has 10 options; 1 mod 10 = 1 -> **Bebas Neue Condensed Caps**
- Character 8 `f` = 5; Whitespace has 8 options; 5 mod 8 = 5 -> **Giant Top Void**

#### Build spec for seed `6yobedbf`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Cedar Signal Red** (option 2). Classic Swiss poster. Background #F4EDE2 (pale cedar), text #1E1A17 (ink), accent #D2381E (Swiss signal red, used sparingly: one block, one word, one rule), secondary #A9663C (cedar brown for secondary text, small blocks, captions).
- **Image treatment: Blueprint Line Drawings** (option 0). No photographs in the header. Instead use technical SVG line drawings of a joint, chair or table (dovetail, mortise and tenon, plan and elevation). Stroke 1px in the text colour (accents 1px in accent colour), fill none, on the background colour. Include small dimension numbers (e.g. 450, 720) set in the small label size. Drawings occupy 3 to 6 grid columns; draw them yourself as inline SVG.
- **Layout: Rotated Spine** (option 5). Narrow left spine (column 1, about 72px wide) holds text rotated 90 degrees counter-clockwise (writing-mode: vertical-rl; transform: rotate(180deg)): wordmark and nav read bottom-to-top. The remaining 11 columns (a 12-column grid with the spine as column 1) hold headline (cols 2-9), imagery (cols 8-12) and intro (cols 2-5).
- **Logo placement: Centred Above Wordmark** (option 1). Logo about 96px high, horizontally centred on the layout axis, directly above the wordmark with 16px gap. Wordmark below it in the main type, same centre axis. Treat the pair as one lockup.
- **Rules and ornament: Heavy Bar Accents** (option 4). Thick bars as ornament: a 12px high by 48px wide solid accent bar above the headline, plus an 8px full-width bar at the top edge of the header in the text colour. No hairlines. Bars align to column edges exactly.
- **Typographic scale: Major Third** (option 3). Ratio 1.25 from 16px base: 16, 20, 25, 31, 39, 49, 61px. Nav 16px, intro 20px, subheads 25px, headline 61px (clamp 39px on mobile), wordmark 39px. Line height 1.45 for body, 1.1 for headline. Gentle, conventional hierarchy.
- **Typography: Bebas Neue Condensed Caps** (option 1). Google Fonts Bebas Neue 400 for headline, wordmark and nav (always uppercase, tracking 0.02em, tall condensed). Body and intro: Inter 400 / 500. Strong tall poster type against neutral text.
- **Whitespace: Giant Top Void** (option 5). The top 40vh of the header is empty (only a small nav line at the very top), then headline and content start below it. Left and right margin 32px, gutters 24px. All empty space is concentrated at the top.

---

### Seed `6she6g4q`

Arithmetic:

- Character 1 `6` = 32; Colour palette has 10 options; 32 mod 10 = 2 -> **Cedar Signal Red**
- Character 2 `s` = 18; Image treatment has 8 options; 18 mod 8 = 2 -> **Full-Bleed Hero**
- Character 3 `h` = 7; Layout has 9 options; 7 mod 9 = 7 -> **Split Screen 50/50**
- Character 4 `e` = 4; Logo placement has 8 options; 4 mod 8 = 4 -> **Inline With Wordmark**
- Character 5 `6` = 32; Rules and ornament has 8 options; 32 mod 8 = 0 -> **Corner Registration Marks**
- Character 6 `g` = 6; Typographic scale has 8 options; 6 mod 8 = 6 -> **Single Giant Headline**
- Character 7 `4` = 30; Typography has 10 options; 30 mod 10 = 0 -> **Archivo Expanded Grotesk**
- Character 8 `q` = 16; Whitespace has 8 options; 16 mod 8 = 0 -> **Asymmetric Void**

#### Build spec for seed `6she6g4q`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Cedar Signal Red** (option 2). Classic Swiss poster. Background #F4EDE2 (pale cedar), text #1E1A17 (ink), accent #D2381E (Swiss signal red, used sparingly: one block, one word, one rule), secondary #A9663C (cedar brown for secondary text, small blocks, captions).
- **Image treatment: Full-Bleed Hero** (option 2). One portfolio photo as full-viewport-width hero, 100vw by about 70vh, object-fit: cover, natural colour, no border, no radius. All header text overlays it in the text colour or sits in a solid block of the background colour at its edge. Add a 40% dark gradient only if text legibility requires it.
- **Layout: Split Screen 50/50** (option 7). Viewport divided exactly into two halves, each a 6-column grid. Left half (columns 1-6): solid block in the accent or secondary colour with wordmark, nav and headline. Right half (columns 7-12): imagery filling the full half height (100vh minus nothing) or a stacked pair of images. Hard vertical split, no gutter between halves.
- **Logo placement: Inline With Wordmark** (option 4). Logo 40px high immediately left of the wordmark, 12px gap, vertically centred on the wordmark x-height. They read as one line: [logo] AstroHout. Placed at the top-left of the content area, in the nav row.
- **Rules and ornament: Corner Registration Marks** (option 0). Print-style crop/registration marks at the four corners of the header content area: L-shaped marks 14px long, 1px, in the text colour, offset 12px outside the content box. Optional small cross-hair registration mark centred on the top edge. No other ornament.
- **Typographic scale: Single Giant Headline** (option 6). Body and everything else 15px / 20px. One headline set with clamp(80px, 14vw, 220px), line-height 0.9, tracking -0.03em, taking up the majority of the header. Wordmark and nav are 15px, so the headline dominates 10:1.
- **Typography: Archivo Expanded Grotesk** (option 0). Google Fonts Archivo variable. Headings and wordmark: Archivo weight 800, width axis wdth 125 (expanded), uppercase, tracking 0.01em. Body, nav and labels: Archivo weight 400, wdth 100. Wide, heavy, industrial.
- **Whitespace: Asymmetric Void** (option 0). Content is pushed into the left 4 of 12 columns; the right 8 columns of the header are intentionally empty (only imagery, if any, sits at the far edge). Outer margin 40px. At least 55% of the header area is empty. Void is on the right/top.

---

### Seed `92wkiowx`

Arithmetic:

- Character 1 `9` = 35; Colour palette has 10 options; 35 mod 10 = 5 -> **Mahogany Full Bleed**
- Character 2 `2` = 28; Image treatment has 8 options; 28 mod 8 = 4 -> **Halftone Dither**
- Character 3 `w` = 22; Layout has 9 options; 22 mod 9 = 4 -> **Index List Table**
- Character 4 `k` = 10; Logo placement has 8 options; 10 mod 8 = 2 -> **Cropped Giant Watermark**
- Character 5 `i` = 8; Rules and ornament has 8 options; 8 mod 8 = 0 -> **Corner Registration Marks**
- Character 6 `o` = 14; Typographic scale has 8 options; 14 mod 8 = 6 -> **Single Giant Headline**
- Character 7 `w` = 22; Typography has 10 options; 22 mod 10 = 2 -> **DM Serif Display with DM Sans**
- Character 8 `x` = 23; Whitespace has 8 options; 23 mod 8 = 7 -> **Vertical Rhythm Airy**

#### Build spec for seed `92wkiowx`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Mahogany Full Bleed** (option 5). Loud, saturated. Background #5B1F14 (mahogany), text #F6E8D6 (warm ivory), accent #F0B95B (brass-gold, for the logo, numerals and key rule), secondary #8C3A25 (lighter red-brown for blocks and hairlines). Background is full bleed to every edge.
- **Image treatment: Halftone Dither** (option 4). Photos pre-processed (or CSS/SVG filtered) into coarse 1-bit halftone: dots at 45 degrees, about 6px pitch, dots in the text colour on the background colour. Result looks like newsprint. Images occupy full grid cells; no smooth tones.
- **Layout: Index List Table** (option 4). Header as a typographic table/index: 12-column grid, rows separated by 1px rules, each row about 56px high. Row layout: columns 1-1 number (01...), columns 2-7 title (Meubels, Maatwerk, Keukens, Over, Contact), columns 8-11 short description, column 12 arrow. Wordmark is the first row, spanning columns 1-12. Rows are links.
- **Logo placement: Cropped Giant Watermark** (option 2). Logo scaled to about 80vw wide, in the secondary colour at 12 to 18% opacity, placed behind all content and cropped by the right and/or bottom edge of the header (overflow hidden). It is texture, not a mark; a small wordmark carries identity.
- **Rules and ornament: Corner Registration Marks** (option 0). Print-style crop/registration marks at the four corners of the header content area: L-shaped marks 14px long, 1px, in the text colour, offset 12px outside the content box. Optional small cross-hair registration mark centred on the top edge. No other ornament.
- **Typographic scale: Single Giant Headline** (option 6). Body and everything else 15px / 20px. One headline set with clamp(80px, 14vw, 220px), line-height 0.9, tracking -0.03em, taking up the majority of the header. Wordmark and nav are 15px, so the headline dominates 10:1.
- **Typography: DM Serif Display with DM Sans** (option 2). Google Fonts DM Serif Display 400 (headline and wordmark, sentence case, tight tracking -0.01em) with DM Sans 400 / 500 for nav, intro and labels. High-contrast serif display on a clean sans; warmer, more craft-like.
- **Whitespace: Vertical Rhythm Airy** (option 7). Everything sits on an 8px baseline; vertical spacing is in multiples of 24px with 96px between major blocks and 48px between sub-blocks. Side margins 6vw, gutters 32px. Airy, calm, text and image blocks float with air above and below.

---

### Seed `uqqp8r38`

Arithmetic:

- Character 1 `u` = 20; Colour palette has 10 options; 20 mod 10 = 0 -> **Ash Grey Bone**
- Character 2 `q` = 16; Image treatment has 8 options; 16 mod 8 = 0 -> **Blueprint Line Drawings**
- Character 3 `q` = 16; Layout has 9 options; 16 mod 9 = 7 -> **Split Screen 50/50**
- Character 4 `p` = 15; Logo placement has 8 options; 15 mod 8 = 7 -> **Top Right Corner Stamp**
- Character 5 `8` = 34; Rules and ornament has 8 options; 34 mod 8 = 2 -> **Grain Line Pattern**
- Character 6 `r` = 17; Typographic scale has 8 options; 17 mod 8 = 1 -> **Extreme Contrast**
- Character 7 `3` = 29; Typography has 10 options; 29 mod 10 = 9 -> **Unbounded Round Geometric**
- Character 8 `8` = 34; Whitespace has 8 options; 34 mod 8 = 2 -> **Dense Packed**

#### Build spec for seed `uqqp8r38`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Ash Grey Bone** (option 0). Cool-neutral light. Background #E9E6DF (bone), text #2A2724 (near-black brown), accent #8A5A33 (walnut, used for links, rules, one highlighted word), secondary #B9B2A5 (ash grey for hairlines, captions, inactive nav). Wood appears only as the accent; the page is quiet and paper-like.
- **Image treatment: Blueprint Line Drawings** (option 0). No photographs in the header. Instead use technical SVG line drawings of a joint, chair or table (dovetail, mortise and tenon, plan and elevation). Stroke 1px in the text colour (accents 1px in accent colour), fill none, on the background colour. Include small dimension numbers (e.g. 450, 720) set in the small label size. Drawings occupy 3 to 6 grid columns; draw them yourself as inline SVG.
- **Layout: Split Screen 50/50** (option 7). Viewport divided exactly into two halves, each a 6-column grid. Left half (columns 1-6): solid block in the accent or secondary colour with wordmark, nav and headline. Right half (columns 7-12): imagery filling the full half height (100vh minus nothing) or a stacked pair of images. Hard vertical split, no gutter between halves.
- **Logo placement: Top Right Corner Stamp** (option 7). Logo 64 to 80px, placed at the top-right corner, flush to the last column edge, treated as a stamp or seal: optionally inside a 1px circle or square outline in the text colour. The wordmark is positioned elsewhere (top-left or in the headline).
- **Rules and ornament: Grain Line Pattern** (option 2). Subtle wood-grain texture built from thin SVG lines: repeating gently wavy horizontal lines, 1px, spaced 6 to 14px irregularly, in the secondary colour at 15 to 25% opacity, tiled behind the header or inside one or two blocks. Pattern must not interfere with text contrast.
- **Typographic scale: Extreme Contrast** (option 1). Two extremes: 12px / 16px uppercase labels (letter-spacing 0.1em) for nav, captions, intro, and one single giant element (wordmark) at 22vw (min 120px) with line-height 0.8 and tight tracking -0.04em. No intermediate sizes.
- **Typography: Unbounded Round Geometric** (option 9). Google Fonts Unbounded weight 700 for headline and wordmark (wide, rounded, geometric, tracking 0), Manrope 400 / 500 for nav, intro and labels. Futuristic round type; a nod to the astronaut.
- **Whitespace: Dense Packed** (option 2). Minimum space. Margins 16px, gutters 8px, 16px between blocks. Every grid cell is filled; empty area under 10%. Header feels packed like a newspaper front page.

---


---

## Round 2 seeds (generated with Python secrets; specs assembled by script from Part 1)

### Seed `jc0rlr3e`

Arithmetic:

- Character 1 `j` = 9; Colour palette has 10 options; 9 mod 10 = 9 -> **Whitewashed Oak Blue-Grey**
- Character 2 `c` = 2; Image treatment has 8 options; 2 mod 8 = 2 -> **Full-Bleed Hero**
- Character 3 `0` = 26; Layout has 9 options; 26 mod 9 = 8 -> **Three-Column Rigid Newspaper**
- Character 4 `r` = 17; Logo placement has 8 options; 17 mod 8 = 1 -> **Centred Above Wordmark**
- Character 5 `l` = 11; Rules and ornament has 8 options; 11 mod 8 = 3 -> **Hairline Everything**
- Character 6 `r` = 17; Typographic scale has 8 options; 17 mod 8 = 1 -> **Extreme Contrast**
- Character 7 `3` = 29; Typography has 10 options; 29 mod 10 = 9 -> **Unbounded Round Geometric**
- Character 8 `e` = 4; Whitespace has 8 options; 4 mod 8 = 4 -> **Generous Margins**

#### Build spec for seed `jc0rlr3e`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Whitewashed Oak Blue-Grey**. Scandinavian cool wood. Background #EFEBE4 (whitewashed oak), text #24282B (blue-black), accent #6F8795 (slate blue-grey, links and one block), secondary #C7B79F (pale oak for rules, captions, panels).
- **Image treatment: Full-Bleed Hero**. One portfolio photo as full-viewport-width hero, 100vw by about 70vh, object-fit: cover, natural colour, no border, no radius. All header text overlays it in the text colour or sits in a solid block of the background colour at its edge. Add a 40% dark gradient only if text legibility requires it.
- **Layout: Three-Column Rigid Newspaper**. 3 equal columns (gutter 32px) separated by 1px vertical rules. Column 1: wordmark and nav. Column 2: headline and intro as running text. Column 3: imagery plus short caption. Masthead row above all three with date/place line (Nederland, ambachtelijk meubelmaker) and a 1px double rule below it.
- **Logo placement: Centred Above Wordmark**. Logo about 96px high, horizontally centred on the layout axis, directly above the wordmark with 16px gap. Wordmark below it in the main type, same centre axis. Treat the pair as one lockup.
- **Rules and ornament: Hairline Everything**. A 1px rule in the secondary (or text-at-30%) colour separates every cell, row, column and block of the header. Layout becomes a visible table of cells: horizontal rules between rows, vertical rules between columns. No other ornament.
- **Typographic scale: Extreme Contrast**. Two extremes: 12px / 16px uppercase labels (letter-spacing 0.1em) for nav, captions, intro, and one single giant element (wordmark) at 22vw (min 120px) with line-height 0.8 and tight tracking -0.04em. No intermediate sizes.
- **Typography: Unbounded Round Geometric**. Google Fonts Unbounded weight 700 for headline and wordmark (wide, rounded, geometric, tracking 0), Manrope 400 / 500 for nav, intro and labels. Futuristic round type; a nod to the astronaut.
- **Whitespace: Generous Margins**. Wide margins: 12vw left and right (min 48px), 96px top and bottom, 48px gutters. Content column narrower than the viewport, centred, with a clear frame of empty space. About 50% of the header area is empty.

### Seed `7nxgi4xc`

Arithmetic:

- Character 1 `7` = 33; Colour palette has 10 options; 33 mod 10 = 3 -> **Charred Oak**
- Character 2 `n` = 13; Image treatment has 8 options; 13 mod 8 = 5 -> **Hard-Cropped Squares**
- Character 3 `x` = 23; Layout has 9 options; 23 mod 9 = 5 -> **Rotated Spine**
- Character 4 `g` = 6; Logo placement has 8 options; 6 mod 8 = 6 -> **Top Left Flush**
- Character 5 `i` = 8; Rules and ornament has 8 options; 8 mod 8 = 0 -> **Corner Registration Marks**
- Character 6 `4` = 30; Typographic scale has 8 options; 30 mod 8 = 6 -> **Single Giant Headline**
- Character 7 `x` = 23; Typography has 10 options; 23 mod 10 = 3 -> **Fraunces Soft with Work Sans**
- Character 8 `c` = 2; Whitespace has 8 options; 2 mod 8 = 2 -> **Dense Packed**

#### Build spec for seed `7nxgi4xc`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Charred Oak**. Shou-sugi-ban dark, low-chroma. Background #121110 (charred black), text #D9D4CB (ash white), accent #C8A27A (raw oak, highlights and rules), secondary #3A3631 (warm charcoal for panels and hairlines). No saturated colour anywhere.
- **Image treatment: Hard-Cropped Squares**. All photos cropped to exact 1:1 squares, laid edge to edge in a strip of 3 to 4 squares with 0 gap (or 2px gap in the background colour). object-fit: cover, natural colour, no radius. Each square is exactly one grid module wide.
- **Layout: Rotated Spine**. Narrow left spine (column 1, about 72px wide) holds text rotated 90 degrees counter-clockwise (writing-mode: vertical-rl; transform: rotate(180deg)): wordmark and nav read bottom-to-top. The remaining 11 columns (a 12-column grid with the spine as column 1) hold headline (cols 2-9), imagery (cols 8-12) and intro (cols 2-5).
- **Logo placement: Top Left Flush**. Logo 48px high, flush to the top-left corner of the content area (no extra margin), aligned to column 1 edge and the top margin line. Wordmark/nav begin at the next column. Nothing is offset from the grid.
- **Rules and ornament: Corner Registration Marks**. Print-style crop/registration marks at the four corners of the header content area: L-shaped marks 14px long, 1px, in the text colour, offset 12px outside the content box. Optional small cross-hair registration mark centred on the top edge. No other ornament.
- **Typographic scale: Single Giant Headline**. Body and everything else 15px / 20px. One headline set with clamp(80px, 14vw, 220px), line-height 0.9, tracking -0.03em, taking up the majority of the header. Wordmark and nav are 15px, so the headline dominates 10:1.
- **Typography: Fraunces Soft with Work Sans**. Google Fonts Fraunces variable, weight 600, opsz 144, SOFT 100 (soft wonky serif) for headline and wordmark; Work Sans 400 / 500 for nav, intro and labels. Friendly, handmade, wood-shop feel.
- **Whitespace: Dense Packed**. Minimum space. Margins 16px, gutters 8px, 16px between blocks. Every grid cell is filled; empty area under 10%. Header feels packed like a newspaper front page.

### Seed `wu3ikcf7`

Arithmetic:

- Character 1 `w` = 22; Colour palette has 10 options; 22 mod 10 = 2 -> **Cedar Signal Red**
- Character 2 `u` = 20; Image treatment has 8 options; 20 mod 8 = 4 -> **Halftone Dither**
- Character 3 `3` = 29; Layout has 9 options; 29 mod 9 = 2 -> **Four-Column Modular Grid**
- Character 4 `i` = 8; Logo placement has 8 options; 8 mod 8 = 0 -> **Baseline Footnote Mark**
- Character 5 `k` = 10; Rules and ornament has 8 options; 10 mod 8 = 2 -> **Grain Line Pattern**
- Character 6 `c` = 2; Typographic scale has 8 options; 2 mod 8 = 2 -> **Golden Ratio**
- Character 7 `f` = 5; Typography has 10 options; 5 mod 10 = 5 -> **Instrument Serif Editorial**
- Character 8 `7` = 33; Whitespace has 8 options; 33 mod 8 = 1 -> **Balanced Medium**

#### Build spec for seed `wu3ikcf7`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Cedar Signal Red**. Classic Swiss poster. Background #F4EDE2 (pale cedar), text #1E1A17 (ink), accent #D2381E (Swiss signal red, used sparingly: one block, one word, one rule), secondary #A9663C (cedar brown for secondary text, small blocks, captions).
- **Image treatment: Halftone Dither**. Photos pre-processed (or CSS/SVG filtered) into coarse 1-bit halftone: dots at 45 degrees, about 6px pitch, dots in the text colour on the background colour. Result looks like newsprint. Images occupy full grid cells; no smooth tones.
- **Layout: Four-Column Modular Grid**. 4 equal columns with 24px gutter, and header height of 4 modular rows (each row about 18vh with 24px gaps). Modules are filled: wordmark in module (1,1), nav in (4,1), headline spanning (1-3, 2-3), imagery in (4, 2-4), intro in (1-2, 4). Every element snaps to module edges.
- **Logo placement: Baseline Footnote Mark**. Logo is tiny (24px high), placed at the bottom-right corner of the header block, aligned on the last text baseline, like a printer's mark. The wordmark is typeset separately in the main type; the logo adds no weight to the composition.
- **Rules and ornament: Grain Line Pattern**. Subtle wood-grain texture built from thin SVG lines: repeating gently wavy horizontal lines, 1px, spaced 6 to 14px irregularly, in the secondary colour at 15 to 25% opacity, tiled behind the header or inside one or two blocks. Pattern must not interfere with text contrast.
- **Typographic scale: Golden Ratio**. Ratio 1.618 from 16px base: 16px body, 26px lead, 42px subhead, 68px headline, 110px display. Line height 1.4 for body, 1.05 for 68px+. Use sizes at the nearest step only; clamp the largest down to 56px on mobile.
- **Typography: Instrument Serif Editorial**. Google Fonts Instrument Serif 400 (regular and italic) for headline and wordmark, with italic for emphasis words; Inter 400 for nav, intro and labels. Elegant condensed serif display, editorial magazine feel.
- **Whitespace: Balanced Medium**. Conventional spacing. Page margin 5vw, gutters 24px, 64px between blocks, 32px inside blocks. About 35% of the header area is empty. Spacing is even and predictable.

### Seed `92u4lbxs`

Arithmetic:

- Character 1 `9` = 35; Colour palette has 10 options; 35 mod 10 = 5 -> **Mahogany Full Bleed**
- Character 2 `2` = 28; Image treatment has 8 options; 28 mod 8 = 4 -> **Halftone Dither**
- Character 3 `u` = 20; Layout has 9 options; 20 mod 9 = 2 -> **Four-Column Modular Grid**
- Character 4 `4` = 30; Logo placement has 8 options; 30 mod 8 = 6 -> **Top Left Flush**
- Character 5 `l` = 11; Rules and ornament has 8 options; 11 mod 8 = 3 -> **Hairline Everything**
- Character 6 `b` = 1; Typographic scale has 8 options; 1 mod 8 = 1 -> **Extreme Contrast**
- Character 7 `x` = 23; Typography has 10 options; 23 mod 10 = 3 -> **Fraunces Soft with Work Sans**
- Character 8 `s` = 18; Whitespace has 8 options; 18 mod 8 = 2 -> **Dense Packed**

#### Build spec for seed `92u4lbxs`

Build a website header (masthead plus hero area) for AstroHout, a one-man Dutch woodworking and furniture business (logo is an astronaut), in a Swiss / International Typographic Style grid with wood tones. Follow every characteristic below exactly; it is self-contained.

- **Colour palette: Mahogany Full Bleed**. Loud, saturated. Background #5B1F14 (mahogany), text #F6E8D6 (warm ivory), accent #F0B95B (brass-gold, for the logo, numerals and key rule), secondary #8C3A25 (lighter red-brown for blocks and hairlines). Background is full bleed to every edge.
- **Image treatment: Halftone Dither**. Photos pre-processed (or CSS/SVG filtered) into coarse 1-bit halftone: dots at 45 degrees, about 6px pitch, dots in the text colour on the background colour. Result looks like newsprint. Images occupy full grid cells; no smooth tones.
- **Layout: Four-Column Modular Grid**. 4 equal columns with 24px gutter, and header height of 4 modular rows (each row about 18vh with 24px gaps). Modules are filled: wordmark in module (1,1), nav in (4,1), headline spanning (1-3, 2-3), imagery in (4, 2-4), intro in (1-2, 4). Every element snaps to module edges.
- **Logo placement: Top Left Flush**. Logo 48px high, flush to the top-left corner of the content area (no extra margin), aligned to column 1 edge and the top margin line. Wordmark/nav begin at the next column. Nothing is offset from the grid.
- **Rules and ornament: Hairline Everything**. A 1px rule in the secondary (or text-at-30%) colour separates every cell, row, column and block of the header. Layout becomes a visible table of cells: horizontal rules between rows, vertical rules between columns. No other ornament.
- **Typographic scale: Extreme Contrast**. Two extremes: 12px / 16px uppercase labels (letter-spacing 0.1em) for nav, captions, intro, and one single giant element (wordmark) at 22vw (min 120px) with line-height 0.8 and tight tracking -0.04em. No intermediate sizes.
- **Typography: Fraunces Soft with Work Sans**. Google Fonts Fraunces variable, weight 600, opsz 144, SOFT 100 (soft wonky serif) for headline and wordmark; Work Sans 400 / 500 for nav, intro and labels. Friendly, handmade, wood-shop feel.
- **Whitespace: Dense Packed**. Minimum space. Margins 16px, gutters 8px, 16px between blocks. Every grid cell is filled; empty area under 10%. Header feels packed like a newspaper front page.
