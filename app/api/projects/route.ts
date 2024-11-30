import { NextResponse } from 'next/server'

const projects = [
  {
    title: 'Smart Parking Management System',
    description: 'Developed software to computerize the traditional way of booking parking slots. The attendant manages all the requests made by customers for slot booking. Admin manages all the attendees.',
    image: '/images/projects/Smartpark.png',
    link: 'https://github.com/yourusername/smart-parking',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Real-Time Object Detector',
    description: 'Focused on detecting and identifying objects from RGB images using an object detection framework. Developed an Android-based live application to run the framework in real-time.',
    image: '/images/projects/Real-Time.png',
    link: 'https://github.com/yourusername/object-detector',
    tags: ['Python', 'TensorFlow', 'OpenCV']
  },
  {
    title: 'IoT Sensors and Devices Projects',
    description: 'Led several projects including an automatic water level detector using Arduino, door automation using Raspberry Pi, and a rough terrain climber bot with a microcontroller-based circuit.',
    image: '/images/projects/Iot.png',
    link: 'https://github.com/yourusername/iot-projects',
    tags: ['Arduino', 'Raspberry Pi', 'IoT']
  },
  {
    title: 'Road Accident Analysis in India',
    description: 'Analyzed data on road accidents in India to identify trends and suggest improvements for road safety.',
    image: '/images/projects/road.jpg',
    link: 'https://github.com/yourusername/road-accident-analysis',
    tags: ['Data Analysis', 'Python', 'Pandas']
  },
  {
    title: 'Twitter Clone Using Erlang',
    description: 'Developed a clone of Twitter using Erlang and WebSocket API for real-time communication and data exchange.',
    image: '/images/projects/twitter.png',
    link: 'https://github.com/yourusername/twitter-clone',
    tags: ['Erlang', 'WebSocket', 'Full-Stack']
  },
]

export async function GET() {
  try {
    // Simulate a delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return the projects data
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error in GET /api/projects:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

