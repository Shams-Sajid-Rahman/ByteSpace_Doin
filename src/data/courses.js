import imageWeb from '../assets/images/course-reference-2.jpg'
import imageDesign from '../assets/images/course-reference-1.jpg'
import imageData from '../assets/images/course-reference-3.jpg'
import imageProductivity from '../assets/images/course-reference-4.jpg'
import imageMoney from '../assets/images/course-reference-5.jpg'
import imageStartup from '../assets/images/course-reference-6.jpg'

const courseDefaults = {
  instructor: 'purepearl studio',
  rating: 4.5,
  level: 'Beginner',
  lessons: 17,
  duration: '2 hours 16 mins',
  comments: 59,
  price: 25,
}

export const courses = [
  {
    ...courseDefaults,
    title: 'Learn Figma from Basic',
    image: imageDesign,
    category: 'UI/UX Design',
  },
  {
    ...courseDefaults,
    title: 'Build Digital Asset',
    image: imageWeb,
    category: 'Graphic Design',
  },
  {
    ...courseDefaults,
    title: 'the Power of Big Data',
    image: imageData,
    category: 'Data Science',
  },
  {
    ...courseDefaults,
    title: 'Balancing Productivity and Life',
    image: imageProductivity,
    category: 'Productivity',
  },
  {
    ...courseDefaults,
    title: 'Mastering Money Management',
    image: imageMoney,
    category: 'Freelance & Entrepreneurship',
  },
  {
    ...courseDefaults,
    title: 'From Idea to Startup Success',
    image: imageStartup,
    category: 'Marketing',
  },
]