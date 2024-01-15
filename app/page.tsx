import BlogHero from '@/components/BlogHero'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionOne from '@/components/SectionOne'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen flex-col flex-1">
      <Header />
      <Hero />
      <SectionOne />
      <BlogHero />
      <div className="h-screen flex items-end w-full">
      <Footer />
      </div>
    </div>
  )
}
