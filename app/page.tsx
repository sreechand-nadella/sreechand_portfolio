'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Github, Linkedin, FileText } from 'lucide-react'
import { TypewriterEffect } from '@/components/TypewriterEffect'

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
     <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <motion.div 
          className="lg:pl-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/avatar.jpg"
              alt="Sree Chand Nadella"
              width={800}
              height={800}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-gray-100 object-cover dark:bg-gray-800 shadow-xl"
            />
          </div>
        </motion.div>
        <motion.div 
          className="lg:order-first lg:row-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Sree Chand Nadella
          </h1>
          <h2 className="mt-6 text-2xl font-medium text-gray-700 dark:text-gray-300">
            I am a <TypewriterEffect words={['Student', 'Software Developer']} />
          </h2>
          <div className="mt-6 space-y-7 text-base text-gray-600 dark:text-gray-400">
            <p>
              I&apos;m a passionate software engineer specializing in building exceptional digital experiences. 
              With expertise in web development and machine learning, I create innovative solutions that make a difference.
            </p>
            <p>
              Currently, I&apos;m focused on developing accessible, human-centered products that push the boundaries of what&apos;s possible in technology.
            </p>
          </div>
          <ul role="list" className="mt-8 flex gap-6">
            <li>
              <Link
                href="https://x.com/sreechand2000?t=z3aau9vyNWLe5a_Okku7uA&s=09"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/sreechand-nadella"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                href="http://www.linkedin.com/in/sreechandnadella"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Get in touch
            </Link>
            {/* <a 
              href="https://drive.google.com/file/d/1FGKHacWQsEEAhBU96nLGyldFSFkmO-Yy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            > */}
            <a 
              href="https://drive.google.com/file/d/17J3mz7njhFBPW3YG8779O-7LVtGR4tc2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              <FileText className="mr-2" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

