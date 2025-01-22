import { NextResponse } from 'next/server'

const experiences = [

  {

  },
  {
    title: 'Full-stack Developer',
    company: 'BigCommerce',
    date: ' Present',
    description: [
     ' Developed a high-performance front-end with React and Redux, improving page load times by 9% through advanced state management and code refactoring, enhancing user experience and reducing bounce rates.',
' Engineered a robust microservices-based architecture utilizing Java (Spring Boot), J2EE, and Spring Cloud, enabling seamless independent deployments, horizontal scaling, and modular service management across the platform.',
' Optimized data persistence layers by integrating Hibernate for efficient ORM and MySQL for relational database management, improving query performance by 30% and ensuring 99.9% transactional consistency and high availability across distributed services, resulting in faster data retrieval and reduced system downtime.',
' Implemented enterprise-grade security protocols with Spring Security, leveraging role-based access control (RBAC) and OAuth2 authentication, enhancing API security and user data protection, reducing unauthorized access incidents by 40% and ensuring compliance with industry standards.',
' Deployed scalable containerized microservices with Docker and automated CI/CD pipelines, enabling continuous delivery and zero downtime while minimizing manual intervention.',
' Leveraged Azure services such as Azure Virtual Machines for autoscaling compute resources, Azure Blob Storage for secure and scalable data storage, and Azure Functions for serverless computing, optimizing cost-efficiency by 30%, improving platform performance by 25%, and enhancing fault tolerance, reducing system downtime by 15%.'
    ],
    location: 'USA',
    link: { url: 'https://www.bigcommerce.com/', label: 'bigcommerce.com' },
  },
  {
    title: 'Jr. Software Developer',
    company: 'Tandem Arc',
    date: 'May 2024 - Present',
    description: [
      'Enhanced Apache Airflow with enterprise-grade features to boost developer productivity and improve operational efficiency by providing a resilient suite of tools, facilitating expedited pipeline deployment.',
      'Utilized technologies such as React.js, Apache Airflow, pgSQL, and Python to develop feature-rich solutions for data processing.',
    ],
    location: 'Seattle, WA',
    link: { url: 'https://www.tandemarc.com', label: 'Tandem Arc' },
  },
  {
    title: 'Jr. Software Developer',
    company: 'NodeTek Inc',
    date: 'Jan 2024 - May 2024',
    description: [
      'Implemented scalable CI/CD pipelines to reduce deployment time and minimize downtime using Jenkins, Docker, and Kubernetes.',
      'Automated infrastructure provisioning across AWS and GCP using Terraform and Ansible.',
      'Enhanced team collaboration processes by optimizing Git branching workflows.',
    ],
    location: 'Gainesville, FL',
    link: { url: 'https://www.nodetek.com', label: 'NodeTek Inc' },
  },
  {
    title: 'Operations Associate',
    company: 'University of Florida',
    date: 'Apr 2023 - Jan 2024',
    description: [
      'Managed and maintained internal software applications for the RecSports department, ensuring smooth operation and accessibility for both staff and patrons.',
      'Provided technical support for program registration, facility management, and other operational software, while troubleshooting and resolving issues promptly.',
    ],
    location: 'Gainesville, FL',
    link: { url: 'https://www.ufl.edu', label: 'University of Florida' },
  },
  {
    title: 'Machine Learning Engineer',
    company: 'UF Innovate',
    date: 'Oct 2023 - Oct 2023',
    description: [
      'Developed and deployed a computer vision tool that significantly improved the accuracy of zoning parcel detection, achieving a 90% boost in efficiency compared to manual processes.',
      'Worked closely with cross-functional teams to seamlessly integrate the tool with AutoCAD.',
    ],
    location: 'Gainesville, FL',
    link: { url: 'https://innovate.research.ufl.edu', label: 'UF Innovate' },
  },
  {
    title: 'Junior Software Developer',
    company: 'Shiash Info Solutions',
    date: 'Jan 2022 - Jun 2022',
    description: [
      'Developed an application to help customers in buying or selling products through an online auction platform.',
      'Implemented features that allow merchants to sell products, customers to buy products, and auctioneers to conduct auctions, with admin support to manage auctioneers.',
    ],
    location: 'India',
    link: { url: 'https://www.shiashinfosolutions.com', label: 'Shiash Info Solutions' },
  },
  {
    title: 'Full-stack Developer',
    company: 'Maxgen Technologies ',
    date: 'Mar 2020 - Dec 2021',
    description: [
     ' Designed scalable microservices-based RESTful APIs using Java, Spring Boot, and Spring Cloud, leading to a 20% reduction in response times and enhanced performance with circuit breakers and service meshes for resilience.',
'Enhanced data persistence performance by 30% through advanced Hibernate and JDBC tuning, caching strategies, and database partitioning; managed MySQL and PostgreSQL databases with effective indexing, partitioning, and replication for high availability.',
'Automated CI/CD pipelines with Jenkins, Maven, and Docker reducing deployment time by 40%, leveraging Kubernetes for zero-downtime deployments and implementing canary and blue-green strategies for seamless rollouts.',
'Integrated secure authentication protocols (OAuth 2.0, JWT, SAML) and implemented RBAC and ABAC for robust endpoint security in line with industry standards.',
'Deployed containerized applications with Docker and managed multi-node Kubernetes clusters, improving fault tolerance and scalability by 30%, while implementing advanced networking and security features, resulting in a 25% reduction in system downtime.',
'Spearheaded comprehensive testing using JUnit, Mockito, JMeter, and automated UI tests with Selenium; improved code reliability and reduced production defects by 25% with microservices contract testing.',
'Optimized client-server interactions by integrating JavaScript and front-end frameworks with RESTful APIs, achieving a 15% boost in performance through server-side rendering (SSR) and PWA features.'
    ],
    location: 'India',
    link: { url: 'https://maxgentechnologies.com/', label: 'Maxgen Technologies' },
  },

]

export async function GET() {
  try {
    // Simulate a delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return the experiences data
    return NextResponse.json(experiences)
  } catch (error) {
    console.error('Error in GET /api/experiences:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

