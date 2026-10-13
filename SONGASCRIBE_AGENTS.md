# Songascribe --- Agent Instructions

> **Purpose:** This file is the shared source of truth for AI coding and
> design agents working on Songascribe. Read it before making changes
> and follow it throughout the task.

## 1. Product identity

-   **Platform name:** Songascribe
-   **Product:** A transcription website that helps people turn spoken
    audio into text.
-   **Current confirmed scope:** The owner has explicitly requested a
    **Sign in** and **Create account** experience. Do not assume
    additional features, pricing, workflows, integrations, or business
    rules are approved unless they are already present in the codebase
    or explicitly requested.
-   **Core message:** Turn every voice into words.
-   **Supporting message:** Fast, accurate transcription for interviews,
    meetings, podcasts, and more.
-   Treat Songascribe as a polished, trustworthy, modern transcription
    product---not a generic corporate dashboard.

## 2. Non-negotiable working rules

1.  **Inspect before changing.** Read the relevant files, existing
    components, routes, styles, and project conventions before editing.
2.  **Make only the requested changes.** Keep the task narrowly scoped.
    Do not use a small request as permission to redesign or refactor
    unrelated parts of the application.
3.  **Preserve working behaviour.** Avoid breaking existing routes,
    authentication, forms, responsive layouts, integrations, or other
    functioning features.
4.  **Reuse existing patterns.** Prefer existing components, design
    tokens, utilities, and dependencies when suitable. Do not introduce
    a new framework or library without a clear need.
5.  **Do not guess at product rules.** If an important requirement is
    unclear and cannot be safely inferred from the existing
    implementation, ask a focused question or clearly state the
    assumption before proceeding.
6.  **No unrelated edits.** Do not rename, delete, reformat, or
    restructure unrelated files. Avoid broad search-and-replace
    operations.
7.  **Keep changes production-conscious.** Consider accessibility,
    performance, security, error states, and mobile behaviour---not just
    the ideal desktop screenshot.
8.  **Never fake functionality.** Buttons, links, navigation,
    authentication states, and forms must behave as their labels imply.
    Do not present a visual mock-up as a working feature.
9.  **Protect secrets.** Never expose API keys, credentials, session
    tokens, private environment variables, or sensitive user data in
    source code, logs, screenshots, or documentation.
10. **Report honestly.** Distinguish between work implemented, work
    tested, and work that could not be verified. Never claim a test
    passed if it was not run.

## 3. Visual direction

### Overall style

-   Premium, minimalist, editorial, cinematic, and calm.
-   Predominantly **black, white, and restrained greys**.
-   Use generous negative space and clear visual hierarchy.
-   Prefer refined typography: an elegant serif for prominent headlines
    and a clean, readable sans-serif for navigation, body copy, labels,
    and controls.
-   The interface should feel deliberate and high quality without
    looking overly decorative or like a generic SaaS template.
-   Use animation sparingly and purposefully.

### Colour and contrast

-   Use a near-black or black foundation with white foreground text
    where appropriate.
-   Use white or softly off-white for primary actions when it provides
    strong contrast against a dark background.
-   Use grey for secondary copy, borders, and subdued interface details
    while keeping all text readable.
-   Do not introduce bright accent colours, gradients, neon effects, or
    extra visual themes unless explicitly requested or already
    established by the project.
-   Keep interactive states visible and accessible. Do not sacrifice
    readability for visual subtlety.

### Audio waveform hero

The established hero visual is a fine-lined, layered **white and grey
audio waveform on a black background**.

-   The waveform is the primary visual element on the **centre-right**
    of the desktop hero.
-   Keep the **left side relatively open** for the headline, supporting
    text, and call-to-action buttons.
-   Preserve the existing waveform's design, proportions, and placement
    when asked to work on its animation or presentation.
-   The intended motion is smooth, fluid, restrained, and continuous:
    layered lines ripple at slightly different phases, with gentle
    changes to peaks and troughs.
-   Avoid jitter, abrupt jumps, aggressive bouncing, chaotic distortion,
    excessive glow, or distracting movement.
-   When looping a video, aim for a seamless transition from the final
    frame to the first.
-   Do not add text, logos, icons, or unrelated objects to the waveform
    asset unless specifically requested.
-   For background video, consider a poster/fallback frame,
    reduced-motion preferences, efficient loading, and mobile
    performance.

## 4. Landing page content and navigation

The following is the current creative direction, not permission to
invent unapproved product functionality.

### Suggested hero copy

**Headline:**\
"Turn every voice into words."

**Supporting text:**\
"Fast, accurate transcription for interviews, meetings, podcasts, and
more."

**Primary call to action:**\
"Start transcribing"

**Secondary call to action:**\
"See how it works"

Use these as the starting copy unless the owner requests a revision or
the current implementation establishes different approved content.

### Suggested navigation

-   Product
-   How it works
-   Pricing
-   Sign in
-   Create account

**Important:** Navigation items must lead somewhere meaningful. Do not
create dead links or invent product, pricing, or informational pages
simply because a navigation label appears in the visual concept. Inspect
the existing routes and implementation first. If a destination is not
implemented, make that limitation clear and follow the task's scope.

### Authentication

Sign in and Create account are the only explicitly confirmed functional
requirements from the owner so far.

-   Inspect the existing authentication setup before changing it.
-   Use clear labels, helpful validation, visible loading states, and
    understandable error messages.
-   Preserve secure authentication practices and existing provider or
    backend integrations.
-   Do not invent authentication providers, account fields, verification
    flows, password policies, or database structures.
-   Ensure authentication interfaces work on both desktop and mobile.

## 5. Responsive behaviour

-   Desktop hero compositions should respect a **16:9 visual canvas**
    where appropriate, while adapting to the actual viewport rather than
    forcing a fixed aspect ratio on every screen.
-   Keep the headline readable and the CTA easy to find.
-   On narrow screens, reflow content intentionally. Do not merely
    shrink the desktop layout.
-   Prevent the waveform from colliding with text, buttons, navigation,
    or authentication controls.
-   If necessary, reduce the waveform's scale, crop it carefully,
    reposition it, or use a suitable mobile treatment while preserving
    the visual identity.
-   Check small phones, larger phones, tablets, and desktop widths.
-   Avoid horizontal overflow, clipped controls, excessive empty space,
    and text that becomes difficult to read over the video.
-   Ensure navigation and authentication actions remain accessible on
    touch screens.

## 6. Motion, video, and performance

-   Motion should support the product experience rather than compete
    with the content.
-   Prefer smooth, subtle animation with no distracting flashes or
    sudden changes.
-   Respect `prefers-reduced-motion`; provide a static or reduced-motion
    alternative when appropriate.
-   Background video should not block access to the page or delay
    essential content.
-   Use appropriate video formats, compression, dimensions, and loading
    behaviour based on the project's current stack.
-   Provide a poster image or stable fallback so the hero does not show
    a blank area while media loads or when playback is unavailable.
-   Avoid unnecessary continuous CPU/GPU work, especially on mobile.
-   Do not add audio playback to an ambient hero video unless explicitly
    requested.

## 7. Accessibility and usability

-   Use semantic HTML and meaningful heading order.
-   Give buttons and links descriptive accessible names.
-   Maintain sufficient text and control contrast.
-   Make keyboard navigation and focus states visible.
-   Associate form labels and error messages with their inputs.
-   Do not rely on colour alone to communicate status.
-   Keep interactive targets comfortable to use on touch screens.
-   Decorative waveform media should not create unnecessary
    screen-reader noise.

## 8. Engineering safeguards

Before editing:

1.  Identify the application framework, entry points, routing approach,
    styling system, and existing conventions.
2.  Locate the smallest set of files required for the task.
3.  Check for existing components or logic that already solve part of
    the problem.
4.  Identify potential side effects, particularly around authentication,
    routing, shared styles, and responsive layouts.

While editing:

-   Keep changes small, focused, and easy to review.
-   Do not replace a whole file when a targeted edit will do.
-   Do not hard-code secrets or environment-specific credentials.
-   Do not remove existing validation, error handling, analytics, or
    accessibility behaviour without explicit approval.
-   Do not change database schemas, authentication architecture,
    deployment settings, dependencies, or environment variables unless
    required by the task.
-   Do not silently add mock data or pretend backend operations
    succeeded.

After editing:

1.  Review the diff and remove accidental or unrelated changes.
2.  Run the relevant checks available in the repository, such as
    linting, type checks, tests, or a production build.
3.  Check affected routes and key interactions where practical.
4.  Review desktop and mobile behaviour for UI changes.
5.  Report any remaining risks or unverified behaviour.

## 9. Definition of done

A task is complete only when:

-   The requested outcome has been implemented.
-   Existing unrelated behaviour has been preserved.
-   The result follows Songascribe's visual direction and product scope.
-   Relevant responsive and accessibility considerations have been
    addressed.
-   Appropriate checks have been run where possible.
-   The final response states:
    -   What changed.
    -   Which files were changed.
    -   What was tested and the result.
    -   What remains unverified or needs the owner's decision.

## 10. Instruction priority

When instructions conflict, use this order:

1.  Explicit requirements from the owner in the current task.
2.  Existing, confirmed product behaviour and repository conventions.
3.  This Songascribe agent guide.
4.  An agent's own assumptions or preferences.

Do not use this guide to override a clear new instruction from the
owner. Update this file only when the owner asks to change the shared
rules or confirms a lasting product decision.

------------------------------------------------------------------------

**Final principle:** Make Songascribe feel simple, precise, and premium.
Work carefully, change only what is needed, preserve what already works,
and never invent requirements on the owner's behalf.
