import Link from 'next/link'
import { Container } from '@/components/Container'
import { Mail } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6">
              <div className="flex flex-col items-center gap-6 w-full">
                <Link 
                  href="mailto:sreechand.nadella@gmail.com"
                  className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-medium text-primary hover:text-primary/80 dark:text-white dark:hover:text-white/80 transition-colors duration-200 break-all text-center"
                >
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                  <span className="inline-block ">sreechand.nadella@gmail.com</span>
                </Link>
                <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span className="transition hover:text-accent-500 dark:hover:text-accent-400">{link.label}</span>
                    </Link>
                  ))}
                  <a 
                    href="https://drive.google.com/file/d/1FGKHacWQsEEAhBU96nLGyldFSFkmO-Yy/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-accent-500 dark:hover:text-accent-400"
                  >
                    Resume
                  </a>
                </nav>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Sree Chand Nadella. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

