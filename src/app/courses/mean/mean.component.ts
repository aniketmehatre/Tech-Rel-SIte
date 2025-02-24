import { Component } from '@angular/core';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent {
  faqs = [
    {
      "question": "Module 1: Frontend Development (Angular)",
      "answer": `
      <p><b>1.1 HTML, CSS & TypeScript</b></p>
      <ul>
        <li>HTML5: Semantic Elements, Forms</li>
        <li>CSS3: Flexbox, Grid, Media Queries</li>
        <li>Bootstrap & Tailwind CSS</li>
        <li>TypeScript Basics</li>
      </ul>

      <p><b>1.2 Angular Basics</b></p>
      <ul>
        <li>Modules, Components, Directives</li>
        <li>Data Binding (Interpolation, Property, Event, Two-Way)</li>
        <li>Structural & Attribute Directives</li>
      </ul>

      <p><b>1.3 Services & Dependency Injection</b></p>
      <ul>
        <li>Creating & Using Services</li>
        <li>Observables & RxJS</li>
      </ul>

      <p><b>1.4 Routing & Navigation</b></p>
      <ul>
        <li>Router Module & Lazy Loading</li>
        <li>Route Guards & Child Routes</li>
      </ul>

      <p><b>1.5 HTTP Client & API Integration</b></p>
      <ul>
        <li>Fetching Data from Backend</li>
        <li>CRUD Operations with HTTP</li>
      </ul>

      <p><b>1.6 Form Handling</b></p>
      <ul>
        <li>Template-Driven & Reactive Forms</li>
        <li>Form Validation</li>
      </ul>

      <p><b>1.7 State Management</b></p>
      <ul>
        <li>Using Services for State Management</li>
        <li>Introduction to NgRx (Optional)</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 2: Backend Development (Node.js & Express.js)",
      "answer": `
      <p><b>2.1 Node.js Basics</b></p>
      <ul>
        <li>Introduction to Node.js</li>
        <li>Asynchronous JavaScript (Callbacks, Promises, Async/Await)</li>
        <li>Event Loop & Streams</li>
      </ul>

      <p><b>2.2 Express.js Framework</b></p>
      <ul>
        <li>Setting up Express.js Server</li>
        <li>Middleware & Routing</li>
        <li>Building RESTful APIs</li>
        <li>Error Handling & Logging</li>
      </ul>

      <p><b>2.3 Authentication & Security</b></p>
      <ul>
        <li>User Authentication with JWT</li>
        <li>Middleware for Role-Based Access</li>
        <li>Hashing Passwords (bcrypt.js)</li>
        <li>CORS & Helmet for Security</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 3: Database (MongoDB & Mongoose)",
      "answer": `
      <p><b>3.1 Introduction to MongoDB</b></p>
      <ul>
        <li>Understanding NoSQL vs. SQL Databases</li>
        <li>CRUD Operations in MongoDB</li>
        <li>Indexing & Aggregation</li>
      </ul>

      <p><b>3.2 Mongoose ODM</b></p>
      <ul>
        <li>Defining Schemas & Models</li>
        <li>Validation & Middleware</li>
        <li>Relationships & Population</li>
      </ul>

      <p><b>3.3 Advanced Database Concepts</b></p>
      <ul>
        <li>Database Security & Backup</li>
        <li>MongoDB Transactions</li>
        <li>Performance Optimization</li>
      </ul>

      <p><b>3.4 Cloud Database & Deployment</b></p>
      <ul>
        <li>Connecting MongoDB with Cloud (MongoDB Atlas)</li>
        <li>Deploying Databases on Cloud Platforms</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 4: Project Work (2 Months)",
      "answer": `
      <p><b>4.1 Full-Stack MEAN Project</b></p>
      <ul>
        <li>Understanding Project Requirements</li>
        <li>Setting Up Frontend & Backend Architecture</li>
        <li>API Integration & Database Connectivity</li>
      </ul>

      <p><b>4.2 Implementing Features</b></p>
      <ul>
        <li>Authentication & Authorization</li>
        <li>Role-Based Access Control</li>
        <li>Real-Time Data Handling</li>
      </ul>

      <p><b>4.3 Testing & Optimization</b></p>
      <ul>
        <li>Unit Testing with Jest & Mocha</li>
        <li>Performance & Load Testing</li>
        <li>Security Audits & Fixing Vulnerabilities</li>
      </ul>

      <p><b>4.4 Final Project Submission</b></p>
      <ul>
        <li>Deploying the Application (Vercel, Heroku, AWS)</li>
        <li>Documentation & Code Review</li>
        <li>Project Presentation & Feedback</li>
      </ul>
    `,
      "open": false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
