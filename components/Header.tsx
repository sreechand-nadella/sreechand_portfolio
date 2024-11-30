'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, Home, User, Briefcase, FolderOpen, FileText, Mail, Sun, Moon } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/publications', label: 'Publications', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Mail },
]

import { ReactNode } from 'react';

function NavItem({ href, children, icon: Icon }: { href: string; children: ReactNode; icon: React.ElementType }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      >
        <Icon className="w-5 h-5 mr-2" />
        {children}
      </Link>
    </li>
  )
}

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="py-4 bg-white shadow-sm dark:bg-gray-900">
      <Container>
        <nav className="relative z-50 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-0.5 shadow-lg"
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-900">
                  <span className="text-lg font-bold text-primary-700 dark:text-primary-300">SCN</span>
                </span>
              </motion.div>
            </Link>
            <div className="hidden md:flex md:ml-10">
              <ul className="flex space-x-4">
                {navLinks.map((link) => (
                  <NavItem key={link.href} href={link.href} icon={link.icon}>
                    {link.label}
                  </NavItem>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Toggle theme</span>
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <div className="md:hidden ml-4">
              <button
                type="button"
                className="p-2 text-gray-500 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <motion.div
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsMenuOpen(false)}>
              <span className="sr-only">Sree Chand Nadella</span>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SCN</span>
              </div>
            </Link>
            <button
              type="button"
              className="p-2 text-gray-500 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.icon className="w-5 h-5 mr-2" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}

