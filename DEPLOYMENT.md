# Websoul Digital — Project Reset & Firebase Deployment

This project has been completely reset as a clean, frontend-only Next.js 14 website. We have removed all old integrations, backend complexities, and legacy Cloud Run deployment configurations.

## The Reset Plan & Architecture

1.  **Frontend-only Next.js:** We are using Next.js 14 with App Router, Tailwind CSS, and Framer Motion.
2.  **No Backend:** We have removed Payload CMS, Prisma, PostgreSQL, and all environment variable dependencies. The site is entirely static.
3.  **Firebase Hosting:** The application has been prepared for Firebase Hosting using Next.js Static Export (`output: 'export'`). This means it will build a static `out/` directory that Firebase Hosting will serve globally on their CDN.

## Included Pages (Fully Built & Linked)

*   **Home:** `/`
*   **Trust Services:** `/trust-services`
*   **Digital Consultancy:** `/digital-consultancy`
*   **DISP Advisory:** `/disp-advisory`
*   **About:** `/about`
*   **Careers:** `/careers`
*   **Contact:** `/contact`
*   **Privacy:** `/privacy`
*   **Terms:** `/terms`

All navigation links are relative and will work in production seamlessly without any hardcoded URL issues.

## Legacy Url Removal

All `.run.app` Cloud Run service URLs and absolute URLs to the previous deployment were removed. The site is domain-agnostic and robust.

## Firebase Deployment Walkthrough

To move this to Firebase Hosting, the project is configured and ready to go.

### 1. Prerequisites (Local Machine)
Ensure you have the Firebase CLI installed on your computer.
```bash
npm install -g firebase-tools
```

### 2. Login & Connect
Log in to your Google Account containing the Firebase project.
```bash
firebase login
```

### 3. Initialize Firebase (if not already done)
The `.firebaserc` file is pre-populated with `"websoul-digital-production"`.
1. Update `"websoul-digital-production"` inside `.firebaserc` to your *actual* exact Firebase Project ID.
2. The `firebase.json` is already configured to deploy the Next.js `out` folder.

### 4. Build the App
Compile the Next.js app to the static `out` folder.
```bash
npm run build
```

This will run the Next.js build script. Because we set `output: 'export'` in `next.config.mjs`, Next.js will generate pure static HTML/CSS/JS inside a folder called `out`.

### 5. Deploy to Firebase
Once the build is complete and the `out` folder is generated, deploy the site.
```bash
firebase deploy --only hosting
```

Your new site will be instantly live on a new Firebase domain (e.g., `https://<your-project-id>.web.app`).

### 6. Map Custom Domain
1. Go to the Firebase Console -> Build -> Hosting.
2. Click **Add custom domain**.
3. Type in `www.websoul.com.au` (or `websoul.com.au`).
4. Firebase will output a TXT verification record and an A Record.
5. Create those records with your DNS provider. 
6. Wait 5-10 minutes for Firebase to provision the SSL Certificate, and the cutover is complete!
