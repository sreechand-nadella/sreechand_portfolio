import { NextResponse } from 'next/server'

const experiences = [
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
    title: 'Software Developer Intern',
    company: 'Shiash Info Solutions',
    date: 'Jan 2022 - Jun 2022',
    description: [
      'Developed an application to help customers in buying or selling products through an online auction platform.',
      'Implemented features that allow merchants to sell products, customers to buy products, and auctioneers to conduct auctions, with admin support to manage auctioneers.',
    ],
    location: 'India',
    link: { url: 'https://www.shiashinfosolutions.com', label: 'Shiash Info Solutions' },
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

