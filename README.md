# Abdelmalik Hachemi — Portfolio

A lightweight, static HTML/CSS/JS portfolio. It has no build step and can be published from the repository root with GitHub Pages. GSAP, ScrollTrigger, and Lenis load from CDNs for the motion layer.

## Project videos

Web-ready videos live in `assets/videos/`; their titles, categories, dates, and file paths are listed in `index.html`. Replace each “Date to be confirmed” label when the project dates are known. The original camera files are kept in their category folders under `assets/` and should not be committed: they exceed GitHub's per-file upload limit. The smaller web copies play muted on hover, pause when the pointer leaves or the video scrolls out of view, and can be toggled by click.

The supplied MH Studio Production logo is used for `favicon.png`. The four partner marks are separated from the supplied logo sheet, vectorized as SVGs, and shown in a static, responsive row.

## Publish with GitHub Pages and a custom domain

In the repository settings, open **Pages**, choose **Deploy from a branch**, then select the branch and `/ (root)` folder. When the domain is ready, enter it in the Pages custom domain setting and add the DNS records GitHub specifies for your domain type. GitHub Pages will create a `CNAME` file for the configured domain. Enable **Enforce HTTPS** after the domain is verified.

The site uses Tajawal from Google Fonts, with a sans-serif fallback.
