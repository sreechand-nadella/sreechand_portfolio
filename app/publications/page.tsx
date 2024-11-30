'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Book, FileText, ExternalLink } from 'lucide-react'

const publications = [
  {
    title: 'AI-Powered Realistic Physical Interaction in VR',
    type: 'Patent',
    description: 'An AI-driven VR algorithm that seamlessly translates real-world physical movements into immersive virtual interactions.',
    link: 'https://linktopatent.com/patent1',
    icon: FileText,
  },
  {
    title: 'Visualization and Prediction of Covid-19 data using Random Forest Regression',
    type: 'Publication',
    description: 'Employs AI to resolve challenges created by data clutter to assist researchers and medical professionals.',
    link: 'https://linktopublication.com/ai-publication',
    icon: Book,
  },
  // Add more publications as needed
]

export default function Publications() {
  return (
    <Container className="mt-16 sm:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-8">
          Publications
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col justify-between bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="flex items-center mb-4">
                    <pub.icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-3" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      {pub.title}
                    </h2>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{pub.type}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {pub.description}
                  </p>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  Read More
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  )
}

