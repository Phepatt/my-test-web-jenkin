## Simple Jenkins Test Web App

This is a minimal Node.js + Express + JavaScript web application intended for testing Jenkins pipelines.

### How to run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

3. Open in your browser:

   - `http://localhost:3000`
   - API health endpoint: `http://localhost:3000/api/health`

### Run tests

```bash
npm test
```

### Jenkins

This project includes a `Jenkinsfile` with stages to:

- Install dependencies (`npm install`)
- Run tests (`npm test`)

Use this repository as a Jenkins pipeline job (Multibranch or Pipeline from SCM) to validate your Jenkins setup.


