import project from '../../../public/projects/sample.jpg'
import { v4 as uuidv4 } from 'uuid'
import { SiNextdotjs } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa6'
import { SiShadcnui } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'

export const projects = [
  {
    id: uuidv4(),
    date: 'April 02, 2024',
    title: 'Sample Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: project,
    href: '',
    github: '',
    techs: [
      {
        name: 'Next JS',
        icon: SiNextdotjs,
      },
      {
        name: 'Typescript',
        icon: SiTypescript,
      },
      {
        name: 'React JS',
        icon: FaReact,
      },
      {
        name: 'Shadcn UI',
        icon: SiShadcnui,
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
    ],
  },
  {
    id: uuidv4(),
    date: 'February 20, 2024',
    title: 'Sample Title 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: project,
    href: '',
    github: '',
    techs: [
      {
        name: 'Next JS',
        icon: SiNextdotjs,
      },
      {
        name: 'Typescript',
        icon: SiTypescript,
      },
      {
        name: 'React JS',
        icon: FaReact,
      },
      {
        name: 'Shadcn UI',
        icon: SiShadcnui,
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
    ],
  },
  {
    id: uuidv4(),
    date: 'September 02, 2023',
    title: 'Sample Title 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: project,
    href: '',
    github: '',
    techs: [
      {
        name: 'Next JS',
        icon: SiNextdotjs,
      },
      {
        name: 'Typescript',
        icon: SiTypescript,
      },
      {
        name: 'React JS',
        icon: FaReact,
      },
      {
        name: 'Shadcn UI',
        icon: SiShadcnui,
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
    ],
  },
]
