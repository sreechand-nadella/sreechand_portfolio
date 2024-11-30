"use Client";
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { BackgroundDesign } from '@/components/BackgroundDesign'
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sree Chand Nadella - Software Engineer',
  description: 'Personal website and portfolio of Sree Chand Nadella, a software engineer specializing in web development and machine learning.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            <BackgroundDesign />
            <div className="relative z-10">
              <Header />
              <main className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/10">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

