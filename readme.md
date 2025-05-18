# Machine Learning Engineer Portfolio Website

This repository contains the source code for a personal portfolio website designed for a Machine Learning Engineer specializing in NLP, Image Processing, and CNN.

## Overview

This is a static website built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages. The website showcases professional skills, projects, and a blog focused on machine learning topics.

## Features

- Minimalist black and white design with Courier font
- Responsive layout that works on all device sizes
- Portfolio of machine learning projects
- Blog section for technical articles
- Contact form (requires configuration with a form handling service for functionality)
- Skills and expertise visualization

## Deployment Guide

### Prerequisites

- A GitHub account
- Git installed on your computer (optional for local development)

### Deploying to GitHub Pages

1. **Create a new repository**

   Create a new repository named `yourusername.github.io`, where `yourusername` is your GitHub username.

2. **Clone the repository** (if developing locally)

   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

3. **Add the website files**

   Add all the files from this project to your repository, either by uploading them directly through GitHub's web interface or by copying them to your local repository folder if you cloned it.

4. **Customize the content**

   - Update all instances of `[Your Name]` with your actual name
   - Replace placeholder images in the `assets/img/` directory with your own
   - Update project details, blog posts, and personal information
   - Modify the contact information

5. **Commit and push your changes** (if developing locally)

   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

6. **Enable GitHub Pages**

   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Select the branch you want to deploy (usually `main` or `master`)
   - Click "Save"

7. **Access your website**

   Your website will be available at `https://yourusername.github.io` after a few minutes.

### Setting Up a Custom Domain (Optional)

1. **Purchase a domain** from a domain registrar of your choice.

2. **Configure DNS settings** at your domain registrar:
   - For an apex domain (example.com), create A records pointing to GitHub Pages' IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For a subdomain (www.example.com), create a CNAME record pointing to `yourusername.github.io`

3. **Add custom domain in GitHub**:
   - Go to your repository settings
   - Under GitHub Pages, enter your custom domain in the "Custom domain" field
   - Click "Save"
   - Optionally, check "Enforce HTTPS" for secure connections

## Configuring the Contact Form

The contact form in this template is set up as a demo. To make it functional, you have several options:

1. **Use Formspree**:
   - Sign up at [Formspree](https://formspree.io/)
   - Get your unique form endpoint
   - Update the `action` attribute in the form tag in `contact.html`:
     ```html
     <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
     ```

2. **Use other form services** like FormSubmit, Netlify Forms, or Google Forms.

## Directory Structure

```
yourusername.github.io/
├── index.html              # Homepage
├── about.html              # About Me page
├── projects.html           # Projects overview
├── projects/               # Individual project pages
│   ├── sentiment-analysis.html
│   ├── object-detection.html
│   └── other project files...
├── blog.html               # Blog listing page
├── blog/                   # Individual blog posts
│   ├── bert-explained.html
│   └── other blog posts...
├── skills.html             # Skills & Expertise page
├── contact.html            # Contact page
├── css/                    # Stylesheets
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Responsive design rules
├── js/                     # JavaScript files
│   └── main.js             # Main JavaScript file
└── assets/                 # Images and other assets
    ├── img/                # Images
    │   ├── profile.jpg     # Your profile picture
    │   ├── photography/    # Your photography work
    │   ├── projects/       # Project screenshots
    │   └── blog/           # Blog post images
    └── docs/               # Downloadable documents
        └── resume.pdf      # Your resume
```

## Customization

This template is designed to be easily customizable:

- **Colors**: Update the color scheme by modifying the CSS variables in `style.css`
- **Fonts**: Replace the Courier font with another font of your choice
- **Images**: Add your own images to personalize the website
- **Content**: Update the text content to reflect your own experience and projects

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions about this portfolio template!