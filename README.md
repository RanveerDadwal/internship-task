# Internship Task - React (Next.js) Implementation

This project is a React-based, responsive implementation of the provided Figma assignment, built using Next.js.

## Tech Stack

- React
- Next.js
- CSS (global stylesheet)

## Run Locally

From the repository root:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Deploy To Vercel

This project is ready to deploy on Vercel as a standard Next.js app. No extra environment variables are required for the current codebase.

### Vercel dashboard

1. Push this repository to GitHub.
2. Go to Vercel and click **Add New... -> Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Next.js**.
5. Confirm these settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click **Deploy**.

After the first deployment finishes, Vercel will give you a live URL and will automatically redeploy on every push to the connected branch.

### Vercel CLI

```bash
npm i -g vercel
vercel
```

For production deployment after setup:

```bash
vercel --prod
```

## Docker (Submission Requirement)

The project is fully self-contained for submission:
- all UI images are bundled locally in `public/`
- the production build uses webpack for stable container builds
- the app runs on port `3000`

### Build and run with Docker Compose

```bash
docker compose up --build
```

Open `http://localhost:3000`.

### Build and run with Docker directly

```bash
docker build -t internship-task .
docker run -p 3000:3000 internship-task
```

## Troubleshooting

If Docker reports a container-name conflict from an older run, remove the old container and start again:

```bash
docker rm -f internship-task
docker compose up --build
```

## Production Commands

```bash
npm run build
npm run start
```
