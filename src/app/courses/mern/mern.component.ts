import { Component } from '@angular/core';

@Component({
  selector: 'app-mern',
  templateUrl: './mern.component.html',
  styleUrls: ['./mern.component.css']
})
export class MernComponent {
  faqs = [
    {
      "question": "Module 1: Frontend Development (React.js)",
      "answer": `
      <p><b>1.1 HTML, CSS, and JavaScript</b></p>
      <ul>
        <li>HTML5: Elements, Forms, Semantic Tags</li>
        <li>CSS3: Flexbox, Grid, Media Queries</li>
        <li>JavaScript: ES6+ Features (Arrow Functions, Async/Await, Promises)</li>
      </ul>

      <p><b>1.2 React.js Basics</b></p>
      <ul>
        <li>Introduction to React.js</li>
        <li>JSX & Components</li>
        <li>Props & State Management</li>
        <li>Handling Events in React</li>
      </ul>

      <p><b>1.3 Advanced React.js</b></p>
      <ul>
        <li>React Router for Navigation</li>
        <li>Hooks (useState, useEffect, useContext)</li>
        <li>State Management with Redux (Optional)</li>
        <li>Material UI & Styled Components</li>
      </ul>

      <p><b>1.4 API Integration & Testing</b></p>
      <ul>
        <li>Fetching Data with Fetch API & Axios</li>
        <li>CRUD Operations with REST API</li>
        <li>React Form Handling & Validation</li>
        <li>Unit Testing in React (Jest, React Testing Library)</li>
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
        <li>RESTful API Development</li>
        <li>Error Handling & Logging</li>
      </ul>

      <p><b>2.3 Authentication & Security</b></p>
      <ul>
        <li>User Authentication with JWT</li>
        <li>Middleware for Role-Based Access</li>
        <li>Hashing Passwords (bcrypt.js)</li>
        <li>CORS & Helmet for Security</li>
      </ul>

      <p><b>2.4 API Development & Testing</b></p>
      <ul>
        <li>Building Secure REST APIs</li>
        <li>Postman for API Testing</li>
        <li>Integrating APIs with React Frontend</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 3: Database (MongoDB & Mongoose)",
      "answer": `
      <p><b>3.1 MongoDB Basics</b></p>
      <ul>
        <li>Introduction to NoSQL Databases</li>
        <li>Installing & Configuring MongoDB</li>
        <li>CRUD Operations in MongoDB</li>
        <li>Indexes & Aggregation</li>
      </ul>

      <p><b>3.2 Mongoose ODM</b></p>
      <ul>
        <li>Schema & Models in Mongoose</li>
        <li>Data Validation & Relationships</li>
        <li>Population & Virtuals</li>
      </ul>

      <p><b>3.3 Advanced Database Topics</b></p>
      <ul>
        <li>Database Optimization</li>
        <li>Transactions in MongoDB</li>
        <li>Backup & Restore Strategies</li>
      </ul>

      <p><b>3.4 Cloud Database Deployment</b></p>
      <ul>
        <li>MongoDB Atlas Setup</li>
        <li>Connecting MongoDB Atlas with Express.js</li>
        <li>Environment Variables & Security</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 4: Project Work & Deployment (2 Months)",
      "answer": `
      <p><b>4.1 Full-Stack MERN Project</b></p>
      <ul>
        <li>Understanding Project Requirements</li>
        <li>Building a Scalable MERN Application</li>
        <li>Integrating Frontend, Backend, and Database</li>
        <li>Implementing Authentication & Authorization</li>
      </ul>

      <p><b>4.2 Performance Optimization</b></p>
      <ul>
        <li>Lazy Loading & Code Splitting</li>
        <li>Optimizing API Calls & Database Queries</li>
      </ul>

      <p><b>4.3 Deployment & DevOps</b></p>
      <ul>
        <li>Hosting Frontend on Vercel/Netlify</li>
        <li>Deploying Backend on Render/Heroku</li>
        <li>Using Docker for Containerization (Optional)</li>
      </ul>

      <p><b>4.4 Final Project Submission</b></p>
      <ul>
        <li>Preparing Documentation & Reports</li>
        <li>Final Review & Feedback</li>
        <li>Project Presentation</li>
      </ul>
    `,
      "open": false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
