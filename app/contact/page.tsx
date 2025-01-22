'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail,  Github, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Get in touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          I&apos;m currently crafting stunning websites and diving into exciting tech projects. If you&apos;d like to connect, please use the form below!
        </p>

        <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="relative lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-blue-600/90" />
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Contact information
                </h2>
                <p className="text-blue-50 mb-8">
                  Please contact me with any questions or comments you may have. You can also
                  schedule a service through the form.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-white" />
                    <span className="text-white">+1 352 222 3220</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-white" />
                    <span className="text-white">sreechand.nadella@gmail.com</span>
                  </div>
                </div>
                <div className="mt-8 flex space-x-6">
                 
                  <a href="https://github.com/sreechand-nadella" className="text-white hover:text-blue-200 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://x.com/sreechand2000?t=z3aau9vyNWLe5a_Okku7uA&s=09" className="text-white hover:text-blue-200 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-8 lg:p-12 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
                Send me a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="mt-1 bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="mt-1 bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">
                      Phone <span className="text-gray-500">(Optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-1 bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <div className="relative mt-1">
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[150px] resize-none bg-gray-50 dark:bg-gray-800"
                      maxLength={500}
                    />
                    <span className="absolute bottom-2 right-2 text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

