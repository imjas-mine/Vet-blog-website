import React from 'react'
import Navbar from '../Components/Navbar'
import Blog from '../Components/Blog'
import HeroImage from '../assets/Hero.png'

const Blogs = () => {
  // This data would typically come from an API or admin panel
  const blogPosts = [
    {
      id: 1,
      image: HeroImage,
      title: "Understanding Pet Vaccinations",
      description: "Essential guide to keeping your pets protected through proper vaccination schedules and preventive care.",
      date: "Dec 15, 2023"
    },
    {
      id: 2,
      image: HeroImage,
      title: "Nutrition Tips for Healthy Pets",
      description: "Learn about the best dietary practices to keep your furry friends healthy and energetic.",
      date: "Dec 12, 2023"
    },
    {
      id: 3,
      image: HeroImage,
      title: "Common Behavioral Issues",
      description: "Understanding and addressing common behavioral challenges in pets through positive reinforcement.",
      date: "Dec 10, 2023"
    },
    {
      id: 4,
      image: HeroImage,
      title: "Dental Care for Pets",
      description: "Tips and tricks for maintaining good oral hygiene in pets and preventing dental diseases.",
      date: "Dec 8, 2023"
    }
  ]

  return (
    <div className='bg-indigo-100 min-h-screen w-full'>
      <Navbar />
      <div className='px-4 py-8 md:px-28 md:py-10 mx-10'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold text-center mb-4 text-indigo-900 font-serif'>Pet Care Blogs</h1>
          <p className='text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto'>
            Expert advice and insights to help you provide the best care for your beloved pets
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-11'>
            {blogPosts.map((post) => (
              <Blog
                key={post.id}
                image={post.image}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
