const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// API endpoint for health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API endpoint for project information
app.get('/api/project-info', (req, res) => {
  res.json({
    name: 'GitOps with Monitoring',
    description: 'Complete GitOps workflow with ArgoCD on AWS EKS, featuring Prometheus and Grafana for monitoring',
    technologies: [
      {
        name: 'AWS EKS',
        category: 'Infrastructure',
        description: 'Managed Kubernetes cluster on AWS',
        icon: 'cloud',
        color: '#FF9900'
      },
      {
        name: 'Terraform',
        category: 'Infrastructure as Code',
        description: 'Provision EKS cluster and VPC infrastructure',
        icon: 'code',
        color: '#7B42BC'
      },
      {
        name: 'ArgoCD',
        category: 'GitOps',
        description: 'Declarative continuous delivery for Kubernetes',
        icon: 'git-branch',
        color: '#EF7B4D'
      },
      {
        name: 'Prometheus',
        category: 'Monitoring',
        description: 'Metrics collection and alerting',
        icon: 'activity',
        color: '#E6522C'
      },
      {
        name: 'Grafana',
        category: 'Visualization',
        description: 'Metrics visualization and dashboards',
        icon: 'bar-chart',
        color: '#F46800'
      },
      {
        name: 'Helm',
        category: 'Package Manager',
        description: 'Deploy Prometheus and Grafana via Helm charts',
        icon: 'package',
        color: '#0F1689'
      },
      {
        name: 'Kubernetes',
        category: 'Orchestration',
        description: 'Container orchestration platform',
        icon: 'box',
        color: '#326CE5'
      }
    ],
    architecture: {
      infrastructure: 'AWS EKS cluster with 2 t3.medium nodes across 2 availability zones',
      networking: 'VPC with public and private subnets, NAT gateway for outbound traffic',
      gitops: 'ArgoCD monitors Git repository and automatically syncs changes to cluster',
      monitoring: 'Prometheus scrapes metrics, Grafana visualizes cluster and application health'
    },
    features: [
      'Automated GitOps workflow with ArgoCD',
      'Infrastructure provisioned via Terraform',
      'Comprehensive monitoring with Prometheus & Grafana',
      'Auto-sync and self-healing deployments',
      'Multi-AZ high availability setup',
      'Secure VPC networking with NAT gateway'
    ],
    repository: 'https://github.com/Amitabh-DevOps/GitOps-with-monitoring.git'
  });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 GitOps Project Showcase running on http://0.0.0.0:${PORT}`);
});
