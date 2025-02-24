import { Component } from '@angular/core';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent {
  faqs = [
    {
      "question": "Module 1: DevOps Fundamentals",
      "answer": `
      <p><b>1.1 Introduction to DevOps</b></p>
      <ul>
        <li>What is DevOps?</li>
        <li>DevOps Lifecycle & Principles</li>
        <li>Benefits & Challenges of DevOps</li>
        <li>CI/CD Pipeline Overview</li>
      </ul>

      <p><b>1.2 Linux & Shell Scripting</b></p>
      <ul>
        <li>Linux Basics & Commands</li>
        <li>File System & User Management</li>
        <li>Shell Scripting for Automation</li>
      </ul>

      <p><b>1.3 Version Control with Git & GitHub</b></p>
      <ul>
        <li>Git Basics (Clone, Commit, Push, Pull)</li>
        <li>Branching, Merging & Conflict Resolution</li>
        <li>GitHub Actions & Workflows</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 2: Continuous Integration & Deployment",
      "answer": `
      <p><b>2.1 Continuous Integration (CI) Tools</b></p>
      <ul>
        <li>Introduction to CI/CD</li>
        <li>Jenkins Setup & Configuration</li>
        <li>Pipeline as Code (Jenkinsfile)</li>
      </ul>

      <p><b>2.2 Configuration Management</b></p>
      <ul>
        <li>Introduction to Configuration Management</li>
        <li>Ansible Playbooks & Roles</li>
        <li>Infrastructure as Code (IaC) with Terraform</li>
      </ul>

      <p><b>2.3 Containerization with Docker</b></p>
      <ul>
        <li>Docker Basics & Installation</li>
        <li>Working with Docker Images & Containers</li>
        <li>Docker Compose & Networking</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 3: Orchestration & Cloud Computing (AWS)",
      "answer": `
      <p><b>3.1 Kubernetes & Container Orchestration</b></p>
      <ul>
        <li>Introduction to Kubernetes</li>
        <li>Pods, Deployments & Services</li>
        <li>Helm Charts & Kubernetes Networking</li>
      </ul>

      <p><b>3.2 AWS Fundamentals</b></p>
      <ul>
        <li>AWS Overview & Services</li>
        <li>IAM (Identity & Access Management)</li>
        <li>EC2 (Elastic Compute Cloud)</li>
        <li>S3 (Simple Storage Service)</li>
      </ul>

      <p><b>3.3 AWS DevOps Services</b></p>
      <ul>
        <li>AWS CodePipeline & CodeBuild</li>
        <li>AWS ECS & EKS (Managed Containers)</li>
        <li>AWS Lambda (Serverless Computing)</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 4: Project Work (2 Months)",
      "answer": `
      <p><b>4.1 Real-World DevOps Project</b></p>
      <ul>
        <li>Setting up a CI/CD Pipeline</li>
        <li>Automating Infrastructure with Terraform</li>
        <li>Deploying Applications with Docker & Kubernetes</li>
      </ul>

      <p><b>4.2 AWS Cloud Deployment</b></p>
      <ul>
        <li>Hosting a Web Application on AWS</li>
        <li>Monitoring & Logging with AWS CloudWatch</li>
        <li>Security Best Practices in AWS</li>
      </ul>

      <p><b>4.3 Final Project Evaluation</b></p>
      <ul>
        <li>Project Review & Troubleshooting</li>
        <li>Performance & Security Optimization</li>
        <li>Presentation & Certification</li>
      </ul>
    `,
      "open": false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
