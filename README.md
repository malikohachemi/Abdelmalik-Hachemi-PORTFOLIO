# Abdelmalik Hachemi — Portfolio

A lightweight, static HTML/CSS/JS portfolio. It has no build step and can be published from the repository root with GitHub Pages. GSAP, ScrollTrigger, and Lenis load from CDNs for the motion layer.

## Add your videos

Add files to the existing `assets/` folder using these names, or update the matching `data-src` paths in `index.html`:

- `showreel.mp4`
- `project-01.mp4`
- `project-02.mp4`
- `project-03.mp4`
- `project-04.mp4`

The reel and project previews play on hover and pause when the pointer leaves or the video scrolls out of view. Click a video to keep it playing; click again to pause. On touchscreens, click controls playback. Videos start muted. Keep video files reasonably compressed for faster page loads.

The supplied MH Studio Production logo is used for `favicon.png`. Partner logos are displayed in their original colors in a static, responsive strip.

## Publish with GitHub Pages and a custom domain

In the repository settings, open **Pages**, choose **Deploy from a branch**, then select the branch and `/ (root)` folder. When the domain is ready, enter it in the Pages custom domain setting and add the DNS records GitHub specifies for your domain type. GitHub Pages will create a `CNAME` file for the configured domain. Enable **Enforce HTTPS** after the domain is verified.

The site uses Tajawal from Google Fonts, with a sans-serif fallback.
