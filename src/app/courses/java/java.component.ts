import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {

  faqs = [
    {
      "question": "Module 1: Frontend Development (HTML, CSS, JavaScript & Angular)",
      "answer": `
      <p><b>1.1 HTML & CSS</b></p>
      <ul>
        <li>HTML5: Elements, Forms, Semantics</li>
        <li>CSS3: Flexbox, Grid, Media Queries</li>
        <li>Responsive Design (Bootstrap, Tailwind CSS)</li>
      </ul>

      <p><b>1.2 JavaScript & TypeScript</b></p>
      <ul>
        <li>ES6+ Features (Arrow Functions, Promises, Async/Await)</li>
        <li>DOM Manipulation & Events</li>
        <li>TypeScript Basics</li>
      </ul>

      <p><b>1.3 Angular Framework</b></p>
      <ul>
        <li>Modules, Components, Directives</li>
        <li>Data Binding (Interpolation, Property, Event, Two-Way)</li>
        <li>Structural & Attribute Directives</li>
        <li>Routing & Navigation (Router Module, Lazy Loading)</li>
        <li>HTTP Client & API Integration (Fetching Data, CRUD Operations)</li>
        <li>Form Handling (Template-Driven & Reactive Forms)</li>
        <li>State Management (Using Services, NgRx - Optional)</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 2: Backend Development (Core Java, Spring Boot & REST API)",
      "answer": `
      <p><b>2.1 Core Java</b></p>
      <ul>
        <li>OOPs Concepts (Encapsulation, Inheritance, Polymorphism, Abstraction)</li>
        <li>Exception Handling & Multithreading</li>
        <li>Collections Framework (List, Set, Map)</li>
        <li>Java 8 Features (Streams, Lambda, Functional Interfaces)</li>
      </ul>

      <p><b>2.2 Spring Framework & REST API</b></p>
      <ul>
        <li>Spring Core & Dependency Injection</li>
        <li>Spring Boot (Project Setup, Annotations, REST API Development)</li>
        <li>Spring Data JPA & Hibernate (ORM & Database Interaction)</li>
        <li>Spring Security (JWT Authentication, Role-Based Access)</li>
        <li>Testing REST APIs with Postman</li>
      </ul>

      <p><b>2.3 Microservices & Cloud Deployment</b></p>
      <ul>
        <li>Introduction to Microservices</li>
        <li>Spring Cloud & API Gateway</li>
        <li>Docker & Kubernetes (Optional)</li>
        <li>Deploying Applications on AWS/GCP</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 3: Database & DevOps",
      "answer": `
      <p><b>3.1 Database (SQL & NoSQL)</b></p>
      <ul>
        <li>MySQL/PostgreSQL (RDBMS Basics, CRUD Operations, Joins, Indexing)</li>
        <li>Spring Data JPA (Entity Mapping & Transactions)</li>
        <li>MongoDB (NoSQL Database, Collections, Queries)</li>
      </ul>

      <p><b>3.2 DevOps & Version Control</b></p>
      <ul>
        <li>Git & GitHub (Branching, Merging, Pull Requests)</li>
        <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
        <li>Docker & Containerization</li>
      </ul>

      <p><b>3.3 Testing & Debugging</b></p>
      <ul>
        <li>JUnit & Mockito (Unit Testing in Java)</li>
        <li>End-to-End Testing (Selenium for UI Testing)</li>
        <li>Debugging & Error Handling</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 4: Project Work (2 Months)",
      "answer": `
      <p><b>4.1 Full Stack Development Project</b></p>
      <ul>
        <li>Understanding Project Requirements</li>
        <li>Creating Project Architecture</li>
        <li>Frontend Development (UI & API Integration)</li>
        <li>Backend Development (REST API, Database Design)</li>
      </ul>

      <p><b>4.2 Implementing Security & Deployment</b></p>
      <ul>
        <li>JWT Authentication & Role-Based Access Control</li>
        <li>Unit Testing & Debugging</li>
        <li>Deploying Application on AWS/GCP</li>
      </ul>

      <p><b>4.3 Final Project Evaluation</b></p>
      <ul>
        <li>Preparing Project Documentation</li>
        <li>Code Review & Optimization</li>
        <li>Project Presentation & Submission</li>
      </ul>
    `,
      "open": false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }


}
