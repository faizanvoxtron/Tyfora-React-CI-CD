🚀 Deploy to Server GitHub Action
Automated deployment for tyfora.com using GitHub Actions and SSH.

🌟 How It Works
Code Checkout – Pulls the latest code from the main branch.
Setup SSH – Connects to the server using a private key.
Backup & Deploy
Backs up the current dist folder.
Pulls the latest changes.
Installs dependencies and rebuilds the project.
Restart Service – Restarts the PM2 process.

Notifications – Sends an email on success or failure.
🛠️ Setup
1. Add Secrets
Go to Settings → Secrets and add:
DEPLOY_SSH_KEY → Private SSH key

2. Environment Variables
Variable	Description
DEPLOYMENT_SERVER	Server IP address
DEPLOYMENT_PATH	Path to project directory

🚀 Trigger Deployment
Push changes to main branch:
git push origin main

🔥 Rollback Strategy
Automatically rolls back to the last working commit if deployment fails.
Keeps a backup of the dist folder.

📧 Notifications
✅ Success → Sent to DevOps team
❌ Failure → Sent to relevant developers


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
