'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import { Card } from '@/components/ui/card'
import * as Icons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import * as GoIcons from 'react-icons/go'
import * as HiIcons from 'react-icons/hi'
import * as ImIcons from 'react-icons/im'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as TiIcons from 'react-icons/ti'
import * as WiIcons from 'react-icons/wi'

const education = [
  {
    degree: 'Master of Science, Computer Science',
    schoolName: 'University of Florida (UF)',
    startDate: 'Aug 2022',
    endDate: 'May 2024',
    description: 'Specialization in Machine Learning and Data Science',
    details: 'GPA: 3.8/4.0',
    icon: FaGraduationCap,
    color: '#00529B',
    bgColor: '#F2F6FA',
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    schoolName: 'Vellore Institute of Technology (VIT)',
    description: 'Specialization in Artificial Intelligence and Machine Learning',
    details: 'GPA: 4.0/4.0',
    icon: FaUniversity,
    color: '#BB1622',
    bgColor: '#FEEAE6',
  }
]

const skills = {
  languages: [
    { name: 'Python', color: '#3776AB', icon: 'SiPython' },
    { name: 'Java', color: '#007396', icon: 'FaJava' },
    { name: 'C', color: '#A8B9CC', icon: 'SiC' },
    { name: 'R', color: '#276DC3', icon: 'SiR' },
    { name: 'PHP', color: '#777BB4', icon: 'FaPhp' },
    { name: 'SQL', color: '#4479A1', icon: 'SiMysql' },
    { name: 'HTML', color: '#E34F26', icon: 'FaHtml5' },
    { name: 'CSS', color: '#1572B6', icon: 'FaCss3Alt' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'FaJs' },
    { name: 'Erlang', color: '#A90533', icon: 'SiErlang' },
  ],
  technologies: [
    { name: 'PyTorch', color: '#EE4C2C', icon: 'SiPytorch' },
    { name: 'TensorFlow', color: '#FF6F00', icon: 'SiTensorflow' },
    { name: 'Figma', color: '#F24E1E', icon: 'SiFigma' },
    { name: 'AWS', color: '#FF9900', icon: 'FaAws' },
    { name: 'Git', color: '#F05032', icon: 'FaGitAlt' },
    { name: 'IDEs', color: '#5C2D91', icon: 'SiVisualstudiocode' },
    { name: 'VMware', color: '#607078', icon: 'SiVmware' },
    { name: 'AutoCAD', color: '#0696D7', icon: 'SiAutodesk' },
    { name: 'Cisco Packet Tracer', color: '#1BA0D7', icon: 'SiCisco' },
    { name: 'Word', color: '#2B579A', icon: 'SiMicrosoftword' },
    { name: 'Excel', color: '#217346', icon: 'SiMicrosoftexcel' },
    { name: 'PowerPoint', color: '#D24726', icon: 'SiMicrosoftpowerpoint' },
    { name: 'GAN', color: '#9B59B6', icon: 'SiPytorch' },
    { name: 'VAE', color: '#3498DB', icon: 'SiPytorch' },
    { name: 'Docker', color: '#2496ED', icon: 'FaDocker' },
    { name: 'PowerBI', color: '#F2C811', icon: 'SiPowerbi' },
    { name: 'Postman', color: '#FF6C37', icon: 'SiPostman' },
    { name: 'Kubernetes', color: '#326CE5', icon: 'SiKubernetes' },
  ],
  courses: [
    { name: 'DBMS', color: '#4CAF50', icon: 'MdStorage' },
    { name: 'OOPs', color: '#2196F3', icon: 'GiCubes' },
    { name: 'Blockchain', color: '#FFC107', icon: 'SiBlockchaindotcom' },
    { name: 'Cryptography', color: '#9C27B0', icon: 'AiOutlineLock' },
    { name: 'AI', color: '#F44336', icon: 'GiBrain' },
    { name: 'Software Engineering', color: '#3F51B5', icon: 'AiOutlineCode' },
    { name: 'ML', color: '#009688', icon: 'BiBrain' },
    { name: 'Deep Learning', color: '#FF5722', icon: 'BiSolidBrain' },
    { name: 'Analysis of Algorithms', color: '#795548', icon: 'GoGraph' },
    { name: 'Mathematics for Intelligent Systems', color: '#607D8B', icon: 'GiAbacus' },
    { name: 'Distributed Operating Systems ', color: '#8BC34A', icon: 'AiOutlineCluster' },
    { name: 'Cyber-Physical Security Systems', color: '#FF9800', icon: 'GiCctvCamera' },
    { name: 'Computer Networks', color: '#E91E63', icon: 'AiOutlineNodeIndex' },
    { name: 'Advanced Data Analytics', color: '#CDDC39', icon: 'IoMdAnalytics' },
    { name: 'Reinforcement Learning', color: '#9E9E9E', icon: 'GiArtificialIntelligence' },
    { name: 'Computer Vision', color: '#673AB7', icon: 'MdRemoveRedEye' },
    { name: 'NLP', color: '#03A9F4', icon: 'GiTalk' },
    { name: 'Data Warehousing and Data Mining', color: '#FF4081', icon: 'BiData' },
    { name: 'Statistical Analysis and Modeling', color: '#4DB6AC', icon: 'TiChartBar' },
  ],
  coreCompetencies: [
    { name: 'Machine Learning', color: '#FF5252', icon: 'GiArtificialIntelligence' },
    { name: 'Deep Learning', color: '#FF4081', icon: 'GiBrain' },
    { name: 'Computer Science', color: '#7C4DFF', icon: 'BsLaptop' },
    { name: 'Statistics', color: '#536DFE', icon: 'IoMdStats' },
    { name: 'Algorithms', color: '#448AFF', icon: 'GiProcessor' },
    { name: 'Data Manipulation', color: '#40C4FF', icon: 'BiData' },
  ],
}

interface Skill {
  name: string;
  color: string;
  icon: string;
}

import { IconType } from 'react-icons';

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const iconLibraries: { [key: string]: IconType } = {
    ...Icons,
    ...SiIcons,
    ...AiIcons,
    ...BiIcons,
    ...BsIcons,
    ...GiIcons,
    ...GoIcons,
    ...HiIcons,
    ...ImIcons,
    ...IoIcons,
    ...MdIcons,
    ...TiIcons,
    ...WiIcons,
  }

  const IconComponent = iconLibraries[skill.icon]
  return IconComponent ? <IconComponent className="w-10 h-10" /> : null
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          About Me
        </h1>
        <div className="mt-6 space-y-7 text-base text-gray-600 dark:text-gray-400">
          <p>
            I&apos;m Sree Chand Nadella, a passionate software engineer with a focus on creating
            innovative and user-friendly digital solutions. With a strong background in web
            development and machine learning, I strive to build products that make a positive
            impact on people&apos;s lives.
          </p>
          <p>
            My journey in technology began with a fascination for how computers work and evolved
            into a career dedicated to pushing the boundaries of what&apos;s possible in software
            development. I&apos;m constantly learning and adapting to new technologies, always eager
            to take on challenging projects that require creative problem-solving.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring the great outdoors, reading about the
            latest tech trends, or contributing to open-source projects. I believe in the power of
            technology to transform industries and improve society, and I&apos;m excited to be part of
            this ever-evolving field.
          </p>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl mb-8">
          Education
        </h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800"
                style={{
                  borderColor: edu.color,
                  borderLeftWidth: '4px',
                }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gray-100 dark:bg-gray-700 shadow-md">
                    <edu.icon className="w-6 h-6" style={{ color: edu.color }} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100" style={{ color: edu.color }}>
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{edu.schoolName}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.startDate} - {edu.endDate}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{edu.description}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{edu.details}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl mb-8">
          Skills
        </h2>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 capitalize">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 shadow-lg flex items-center justify-center mb-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      backgroundColor: skill.color,
                    }}
                  >
                    <div className="text-white">
                      <SkillIcon skill={skill} />
                    </div>
                </motion.div>
                  <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </Container>
  )
}

