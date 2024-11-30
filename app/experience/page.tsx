'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiLinksLine } from 'react-icons/ri'
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { Card } from '@/components/ui/card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'

interface Experience {
  title: string
  company: string
  date: string
  description: string[]
  location: string
  link: {
    url: string
    label: string
  }
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('/api/experiences', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setExperiences(data)
      } catch (e) {
        console.error('Fetch error:', e)
        setError('Failed to load experiences. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchExperiences()
  }, [])

  if (isLoading) {
    return (
      <Container className="mt-16 sm:mt-32">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="mt-16 sm:mt-32">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Oops! Something went wrong.</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </Container>
    )
  }

  return (
    <SimpleLayout
      title="My Journey in Tech"
      intro="From coding bootcamps to cutting-edge projects, here's a glimpse into my professional evolution in the world of technology."
    >
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <FaBriefcase className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{experience.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <FaBuilding className="mr-2" />
                    {experience.company}
                  </p>
                </div>
              </div>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-300 flex items-center">
                <FaCalendarAlt className="mr-2" />
                {experience.date}
              </p>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {experience.location}
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1 text-gray-600 dark:text-gray-300">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
              <div className="flex items-center">
                <RiLinksLine className="w-5 h-5 mr-2 text-blue-500" />
                <a
                  href={experience.link.url}
                  className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.link.label}
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SimpleLayout>
  )
}

