# Abdelmalik Hachemi — Portfolio

A lightweight, static HTML/CSS/JS portfolio. It has no build step and can be published from the repository root with GitHub Pages. GSAP, ScrollTrigger, and Lenis load from CDNs for the motion layer.

## Project cards

The project cards currently use lightweight CSS 3D artwork with a “Coming soon” hover animation. Titles, categories, and date placeholders are listed in `index.html`. Original clips are not loaded by the page; add web-sized copies and replace the placeholder scenes when the films are ready.

The supplied MH Studio Production logo is used for `favicon.png`. The four partner marks are stored in `assets/partners/` and shown in a static, responsive row.

## Publish with GitHub Pages and a custom domain

In the repository settings, open **Pages**, choose **Deploy from a branch**, then select the branch and `/ (root)` folder. When the domain is ready, enter it in the Pages custom domain setting and add the DNS records GitHub specifies for your domain type. GitHub Pages will create a `CNAME` file for the configured domain. Enable **Enforce HTTPS** after the domain is verified.

The site uses Tajawal from Google Fonts, with a sans-serif fallback.
