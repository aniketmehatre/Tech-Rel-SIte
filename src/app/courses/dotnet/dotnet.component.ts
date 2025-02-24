import { Component } from '@angular/core';

@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.css']
})
export class DotnetComponent {
  faqs = [
    {
      "question": "Module 1: Fundamentals of .NET Development",
      "answer": `
      <p><b>1.1 Introduction to .NET</b></p>
      <ul>
        <li>Overview of .NET Framework, .NET Core & .NET 6+</li>
        <li>CLR (Common Language Runtime) & CTS (Common Type System)</li>
        <li>Compilation Process in .NET</li>
        <li>.NET Application Development Lifecycle</li>
      </ul>

      <p><b>1.2 C# Programming Basics</b></p>
      <ul>
        <li>Syntax, Data Types & Variables</li>
        <li>Control Structures (Loops, Conditions)</li>
        <li>Functions & Methods</li>
        <li>Error Handling & Debugging</li>
      </ul>

      <p><b>1.3 Object-Oriented Programming in C#</b></p>
      <ul>
        <li>Classes & Objects</li>
        <li>Encapsulation, Inheritance, Polymorphism, Abstraction</li>
        <li>Interfaces & Abstract Classes</li>
        <li>Collections & Generics</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 2: Backend Development with ASP.NET Core",
      "answer": `
      <p><b>2.1 Introduction to ASP.NET Core</b></p>
      <ul>
        <li>What is ASP.NET Core?</li>
        <li>Setting Up an ASP.NET Core Project</li>
        <li>Understanding Middleware & Request Pipeline</li>
      </ul>

      <p><b>2.2 Web API Development</b></p>
      <ul>
        <li>RESTful API Concepts</li>
        <li>Creating Controllers & Routing</li>
        <li>Model-View-Controller (MVC) Pattern</li>
        <li>Dependency Injection & Services</li>
      </ul>

      <p><b>2.3 Authentication & Security</b></p>
      <ul>
        <li>JWT (JSON Web Token) Authentication</li>
        <li>Role-Based Access Control (RBAC)</li>
        <li>Security Best Practices in .NET</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 3: Database & Entity Framework",
      "answer": `
      <p><b>3.1 Database Fundamentals</b></p>
      <ul>
        <li>Introduction to SQL & Databases</li>
        <li>CRUD Operations with SQL Server</li>
        <li>Joins, Stored Procedures & Transactions</li>
      </ul>

      <p><b>3.2 Entity Framework Core</b></p>
      <ul>
        <li>Introduction to ORM (Object-Relational Mapping)</li>
        <li>Code-First vs Database-First Approach</li>
        <li>Performing CRUD Operations using Entity Framework</li>
        <li>LINQ (Language Integrated Query) in .NET</li>
      </ul>

      <p><b>3.3 API Integration & Testing</b></p>
      <ul>
        <li>Integrating Frontend with .NET APIs</li>
        <li>Unit Testing & Integration Testing</li>
        <li>Logging & Debugging .NET Applications</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 4: Project Work (2 Months)",
      "answer": `
      <p><b>4.1 Real-World .NET Project</b></p>
      <ul>
        <li>Understanding Project Requirements</li>
        <li>Creating API Endpoints & Database Design</li>
        <li>Building a Full-Stack .NET Application</li>
        <li>Implementing Authentication & Security</li>
      </ul>

      <p><b>4.2 Deployment & DevOps</b></p>
      <ul>
        <li>Hosting .NET Applications on Cloud (Azure, AWS)</li>
        <li>CI/CD Pipelines with GitHub Actions</li>
        <li>Logging & Performance Monitoring</li>
      </ul>

      <p><b>4.3 Final Project Evaluation</b></p>
      <ul>
        <li>Code Review & Optimization</li>
        <li>Project Presentation & Documentation</li>
        <li>Feedback & Future Enhancements</li>
      </ul>
    `,
      "open": false
    }
  ];


  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
