"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, Zap, Rocket, ArrowRight, Code, Database, LineChart, Bot, Users, Globe, Terminal } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with our advanced analytics tools.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build scalable web applications with modern technologies and best practices.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing applications.',
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with our BI tools and dashboards.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enhance team productivity with our collaborative development environment.',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Deploy your applications worldwide with our distributed infrastructure.',
  },
]

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art AI models for your projects',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Get instant results with our optimized infrastructure',
  },
  {
    icon: Rocket,
    title: 'Scale Infinitely',
    description: 'Grow your AI applications without limits',
  },
]

const caseStudies = [
  {
    title: 'E-commerce Revolution',
    company: 'ShopTech Inc.',
    description: 'How we helped increase sales by 300% using AI-powered recommendations',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=400&q=80'
  },
  {
    title: 'FinTech Innovation',
    company: 'Global Finance',
    description: 'Transforming financial services with predictive analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&q=80'
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const servicesRef = useRef(null)
  const caseStudiesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-content > *', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      })

      // Features animations
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top center+=100',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      })

      // Services animations
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top center+=100',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      })

      // Case studies animations
      gsap.from('.case-study-card', {
        scrollTrigger: {
          trigger: caseStudiesRef.current,
          start: 'top center+=100',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 bg-gradient-to-b from-background via-background to-primary/5"
      >
        <div className="container max-w-6xl mx-auto text-center hero-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <span className="text-sm font-medium">Now with GPT-4 Integration</span>
            <span className="px-2 py-1 text-xs rounded-full bg-primary text-primary-foreground">New</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600">
            Build the Future with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your development workflow with AI-powered tools and services.
            Build faster, smarter, and more efficiently than ever before.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="text-lg">
              Start Building <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Book Demo
            </Button>
          </div>
          <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=1200&h=800&q=80"
              alt="AI Platform Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-24 px-4 bg-background"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern development challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card p-6 bg-card hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-24 px-4 bg-muted/50"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build amazing AI-powered applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="feature-card p-6 bg-background hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        ref={caseStudiesRef}
        className="py-24 px-4 bg-background"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our clients achieve success with our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="case-study-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {study.company}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Button variant="outline" size="sm">
                    Read Case Study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Case Studies <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">DevAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of development with AI-powered tools and services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/products/ai-models" className="text-sm text-muted-foreground hover:text-primary">AI Models</Link></li>
                <li><Link href="/products/api-services" className="text-sm text-muted-foreground hover:text-primary">API Services</Link></li>
                <li><Link href="/products/enterprise" className="text-sm text-muted-foreground hover:text-primary">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">Case Studies</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/security" className="text-sm text-muted-foreground hover:text-primary">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 DevAI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}