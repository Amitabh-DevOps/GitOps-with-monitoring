# GitOps Project Showcase

A beautiful, modern web application showcasing the GitOps with Monitoring project - featuring AWS EKS, ArgoCD, Prometheus, and Grafana.

## About This Project

This is an informational web application that presents the complete GitOps workflow implementation. It provides detailed information about:

- **Infrastructure**: AWS EKS cluster with Terraform provisioning
- **GitOps**: ArgoCD for automated deployments
- **Monitoring**: Prometheus for metrics collection
- **Visualization**: Grafana for dashboards
- **Orchestration**: Kubernetes for container management

## Features

✨ **Modern UI Design**
- Premium dark theme with glassmorphism effects
- Smooth animations and transitions
- Fully responsive layout
- Beautiful gradient effects

📚 **Comprehensive Information**
- Technology stack overview
- Architecture breakdown
- Key features and capabilities
- Direct GitHub integration

🚀 **Production Ready**
- Dockerized application
- Health check endpoints
- Optimized for Kubernetes deployment
- Minimal resource footprint

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Modern CSS with custom design system
- **Containerization**: Docker

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:3000`

### Production

```bash
npm start
```

## Docker Deployment

### Build the image:

```bash
docker build -t YOUR_DOCKERHUB_USERNAME/gitops-monitoring-dashboard:latest .
```

### Run locally:

```bash
docker run -p 3000:3000 YOUR_DOCKERHUB_USERNAME/gitops-monitoring-dashboard:latest
```

### Push to Docker Hub:

```bash
docker push YOUR_DOCKERHUB_USERNAME/gitops-monitoring-dashboard:latest
```

## Kubernetes Deployment

The application is configured to run in your EKS cluster via ArgoCD:

1. Update `manifests/deployment.yaml` with your Docker image
2. Commit and push changes to Git
3. ArgoCD will automatically sync and deploy

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/project-info` - Complete project information

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

## Project Structure

```
app/
├── public/
│   ├── index.html      # Main landing page
│   ├── styles.css      # Premium styling
│   └── app.js          # Client-side logic
├── server.js           # Express server
├── package.json        # Dependencies
├── Dockerfile          # Container configuration
└── README.md           # This file
```

## Main Project

This web app is part of the larger **GitOps with Monitoring** project:
- Repository: https://github.com/Amitabh-DevOps/GitOps-with-monitoring
- Technologies: AWS EKS, Terraform, ArgoCD, Prometheus, Grafana, Helm, Kubernetes

## License

MIT
