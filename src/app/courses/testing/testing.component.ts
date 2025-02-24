import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  faqs = [

    {
      "question": "Module 1: Fundamentals of Software Testing",
      "answer": `
      <p><b>1.1 Introduction to Software Testing</b></p>
      <ul>
        <li>What is Software Testing?</li>
        <li>Importance & Benefits of Testing</li>
        <li>Software Development Life Cycle (SDLC) vs. Software Testing Life Cycle (STLC)</li>
        <li>Software Testing Principles</li>
        <li>Types of Software Testing</li>
      </ul>

      <p><b>1.2 Manual Testing</b></p>
      <ul>
        <li>Levels of Testing (Unit, Integration, System, UAT)</li>
        <li>Test Case Design Techniques (Black Box, White Box)</li>
        <li>Test Execution & Bug Reporting</li>
        <li>Test Management Tools (JIRA, TestRail)</li>
      </ul>

      <p><b>1.3 Agile & DevOps Testing</b></p>
      <ul>
        <li>Agile Testing Methodology</li>
        <li>Continuous Integration & Continuous Testing</li>
        <li>Test Automation in DevOps</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 2: Automation & API Testing",
      "answer": `
      <p><b>2.1 Automation Testing</b></p>
      <ul>
        <li>Introduction to Automation Testing</li>
        <li>When to Automate Testing?</li>
        <li>Popular Automation Tools (Selenium, Cypress, TestNG)</li>
        <li>Writing Test Scripts</li>
      </ul>

      <p><b>2.2 API Testing</b></p>
      <ul>
        <li>Introduction to API Testing</li>
        <li>Using Postman for API Testing</li>
        <li>Automating API Testing with REST Assured</li>
      </ul>

      <p><b>2.3 Test Frameworks</b></p>
      <ul>
        <li>JUnit & TestNG for Java</li>
        <li>Mocha & Chai for JavaScript</li>
        <li>Integrating Test Automation in CI/CD</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 3: Performance, Security & Advanced Testing",
      "answer": `
      <p><b>3.1 Performance Testing</b></p>
      <ul>
        <li>Introduction to Performance Testing</li>
        <li>Load Testing with JMeter</li>
        <li>Stress Testing & Scalability Testing</li>
      </ul>

      <p><b>3.2 Security Testing</b></p>
      <ul>
        <li>Common Security Vulnerabilities</li>
        <li>Penetration Testing Basics</li>
        <li>Security Testing Tools (OWASP ZAP, Burp Suite)</li>
      </ul>

      <p><b>3.3 Mobile & Cloud Testing</b></p>
      <ul>
        <li>Testing Mobile Applications</li>
        <li>Cloud-based Testing Tools</li>
        <li>Cross-Browser & Cross-Platform Testing</li>
      </ul>
    `,
      "open": false
    },
    {
      "question": "Module 4: Project Work (2 Months)",
      "answer": `
      <p><b>4.1 Real-World Software Testing Project</b></p>
      <ul>
        <li>Understanding Project Requirements</li>
        <li>Creating Test Plans & Strategies</li>
        <li>Designing & Executing Test Cases</li>
        <li>Defect Logging & Reporting</li>
      </ul>

      <p><b>4.2 Automation Testing Implementation</b></p>
      <ul>
        <li>Building Automated Test Scripts</li>
        <li>Integrating with CI/CD Pipelines</li>
        <li>Executing & Debugging Automation Scripts</li>
      </ul>

      <p><b>4.3 Final Project Evaluation</b></p>
      <ul>
        <li>Preparing Test Reports & Documentation</li>
        <li>Review & Feedback Sessions</li>
        <li>Project Presentation & Submission</li>
      </ul>
    `,
      "open": false
    },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
