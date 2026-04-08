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
