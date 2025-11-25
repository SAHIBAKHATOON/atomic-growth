import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialSection from './components/TestimonialSection'
import HowItWorksSection from './components/HowItWorksSection'
import ApproachMetricsSection from './components/ApproachMetricsSection'
const navLinks = [
  { label: 'Podcasting', href: '#hero' },
  { label: 'AI Studio', href: '#ai-studio' },
  { label: 'Clipping', href: '#clipping' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'FAQ', href: '#faq' },
]

const services = [
  {
    id: 'hero',
    eyebrow: 'Podcasting',
    title: 'Podcasting For VCs & Tech Companies',
    copy:
      'We help venture capital funds and tech companies scale content strategies to attract quality deal flow and deepen relationships, either by starting a new podcast or optimizing an existing one.',
    cta: 'Book A Call',
  },
  {
    id: 'ai-studio',
    eyebrow: 'AI Studio',
    title: 'The future of marketing.',
    copy: 'Create cinema level AI videos for launches, memes, explainers, and more.',
    cta: 'Explore',
  },
  {
    id: 'clipping',
    eyebrow: 'Clipping',
    title: 'Guaranteed millions of views.',
    copy: 'The fastest way to dominate social feeds with IRL shoots built for hot tech companies.',
    cta: 'Explore',
  },
]

const heroSlides = [
  {
    label: 'AI Studio',
    description: 'Cinema-level AI video for launches, memes, explainers, and more.',
  },
  {
    label: 'Clipping',
    description: 'Turn a single recording into 30+ pieces of social-first content every week.',
  },
]

const clientLogos = [
  { name: 'Acquired', tag: 'Top 5 Tech Podcast' },
  { name: 'Grit by Kleiner Perkins', tag: 'Top Venture Fund' },
  { name: 'Minus One by South Park Commons', tag: 'Startup Incubator' },
  { name: 'HD in HD', tag: 'Co-Founder of Brex' },
  { name: 'Greylock', tag: 'Top Venture Capital' },
  { name: 'Reid Hoffman', tag: 'Co-Founder LinkedIn' },
  { name: 'Primary', tag: 'Top Venture Capital' },
  { name: 'Darknet Diaries', tag: 'Top 5 Tech Podcast' },
  { name: 'CLIMB by VSC', tag: 'Climate Tech Podcast' },
  { name: 'Floating Points by Windsurf', tag: 'Tech Podcast' },
]

const stats = [
  { value: '0+', label: 'Videos Created' },
  { value: '0B+', label: 'Views' },
  { value: '0+', label: 'Relationships Built' },
]

const videoSamples = [
  { title: 'Darknet Diaries', stat: '2.4M+ Views', muted: true },
  { title: 'Acquired FM', stat: '4.9M+ Views', muted: false },
]

const caseStudies = [
  {
    title: 'Acquired gained 52M views on autopilot',
    stat: '52M views',
    summary: 'Distribution flywheel across LinkedIn, YouTube, and clips.',
  },
  {
    title: 'Darknet Diaries hit 5.2M views in 4 months',
    stat: '5.2M views',
    summary: 'Grey-hat distribution plus paid amplification.',
  },
]

const processSteps = [
  {
    label: '1',
    title: '1 hour of recording a week turns into...',
    detail: 'We run the prep, you show up and record.',
  },
  {
    label: '2',
    title: 'A podcast featured on top streaming platforms.',
    detail: 'Apple, Spotify, YouTube, and more.',
  },
  {
    label: '3',
    title: 'Repurposed into 4 YouTube videos, 18 shorts, and 2 SEO articles.',
    detail: 'A holistic content engine from every conversation.',
  },
]

const serviceTracks = [
  {
    id: 'scale',
    headline: 'Scale',
    subhead: 'Elevate your existing podcast through smarter distribution.',
    bullets: [
      'Exploration Calls',
      'Content Audit',
      'Pre-Production',
      'Post-Production',
      'Grey Hat Distribution',
      'Social Media Management',
      'Inorganic Promotions & Campaign Management',
      'Reporting & Analytics',
      '24 x 7 Slack Support',
    ],
  },
  {
    id: 'launch',
    headline: 'Launch',
    subhead: 'From concept to dealflow�a podcast built for outcomes.',
    bullets: [
      'Exploration Calls',
      'Pre-Production',
      'Post-Production',
      'Grey Hat Distribution',
      'Social Media Management',
      'Inorganic Promotions & Campaign Management',
      'Reporting & Analytics',
      '24 x 7 Slack Support',
      'Visual Identity & Brand Design',
      'Studio Bookings / Production in Office',
      'Guest Liaison',
    ],
  },
]

const testimonials = [
  {
    quote: 'Woooooo!! Amazing!!!',
    person: 'Laura Dubugras',
    role: 'Host, HD in HD Podcast',
  },
  {
    quote: 'Awesome! You guys crushed it!',
    person: 'Ben Gilbert',
    role: 'Co-Host, Acquired',
  },
  {
    quote: "I'm constantly impressed by how good they are! Nice work.",
    person: 'Jack Rhysider',
    role: 'Host, Darknet Diaries',
  },
  {
    quote: 'This is awesome! Great to see.',
    person: 'Jason Shuman',
    role: 'Primary VC',
  },
]

const faqItems = [
  {
    question: 'What exactly does Atomik Growth do, and how is it different?',
    answer:
      'Were a boutique agency that launches and scales podcasts with a focus on distribution, built specifically for venture capital funds and tech companies.',
  },
  {
    question: 'Why do VCs launch podcasts?',
    answer:
      'They demonstrate thought leadership, deepen relationships, and drive quality deal flow. We make that turnkey.',
  },
  {
    question: 'Do you handle recording logistics if we prefer in-person interviews?',
    answer:
      'Yes. We have studio partners in New York and San Francisco and can handle bookings end-to-end.',
  },
  {
    question: 'What if we plan to record remotely?',
    answer:
      'We recommend Riverside or SquadCast, run technical checks, and capture redundant feeds for pristine audio/video.',
  },
  {
    question: 'How does the end-to-end process work?',
    answer:
      'Guest booking, research, recording, post-production, approvals, distribution, and promotion�handled by one team.',
  },
  {
    question: 'Whats the typical turnaround time?',
    answer: 'Standard turnaround from recording to release is seven days, with faster timelines when urgent.',
  },
  {
    question: 'What are your pricing structures?',
    answer: 'Plans are tailored per podcast, with end-to-end production starting at $8,000/month.',
  },
]

function App() {
  
  const [activeHero, setActiveHero] = useState(heroSlides[0].label)
  const [activeFaq, setActiveFaq] = useState(faqItems[0].question)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [clientIndex, setClientIndex] = useState(0)
  const [activeTrack, setActiveTrack] = useState(serviceTracks[0].id)
  const [clippingMuted, setClippingMuted] = useState(true)

  const visibleClients = useMemo(() => {
    const visible = []
    for (let i = 0; i < 5; i += 1) {
      visible.push(clientLogos[(clientIndex + i) % clientLogos.length])
    }
    return visible
  }, [clientIndex])

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setActiveHero((prev) => {
        const idx = heroSlides.findIndex((slide) => slide.label === prev)
        return heroSlides[(idx + 1) % heroSlides.length].label
      })
    }, 6000)

    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 6500)

    const clientTimer = setInterval(() => {
      setClientIndex((prev) => (prev + 2) % clientLogos.length)
    }, 5000)

    return () => {
      clearInterval(heroTimer)
      clearInterval(testimonialTimer)
      clearInterval(clientTimer)
    }
  }, [])

  const activeTrackData = serviceTracks.find((track) => track.id === activeTrack)

  return (
    <div className="">
       <Navbar />
       <HeroSection />
       <ServicesSection />
       <PortfolioSection />
       <TestimonialSection />
       <HowItWorksSection />
       <ApproachMetricsSection />
      {/* <header className="site-header">
        <div className="logo">Atomik Growth</div>
        <nav aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button className="pill primary">Book A Call</button>
      </header> */}

      {/* <main>
        <section id="hero" className="hero">
          <div className="hero-left">
            <p className="eyebrow">Podcasting  AI Studio  Clipping</p>
            <h1>Podcasting For VCs & Tech Companies</h1>
            <p className="lede">
              We help venture capital funds and tech companies scale content strategies to attract quality deal flow and
              deepen relationships�either by launching a new podcast or optimizing an existing one.
            </p>
            <div className="hero-cta-row">
              <button className="pill primary">Book A Call</button>
              <button className="pill ghost">See Case Studies</button>
            </div>
            <div className="hero-chips">
              {heroSlides.map((slide) => (
                <button
                  key={slide.label}
                  className={`pill chip ${activeHero === slide.label ? 'active' : ''}`}
                  onClick={() => setActiveHero(slide.label)}
                >
                  {slide.label}
                </button>
              ))}
            </div>
            <p className="hero-description">
              {heroSlides.find((slide) => slide.label === activeHero)?.description}
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-video-card">
              <span className="pill muted">Guaranteed millions of views</span>
              <div className="hero-video-placeholder">
                <span>Video Placeholder</span>
              </div>
              <p className="caption">Acquired  Darknet Diaries  Reid Hoffman  Primary VC</p>
            </div>
          </div>
        </section>

        <section className="services">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-card">
              <p className="eyebrow">{service.eyebrow}</p>
              <h2>{service.title}</h2>
              <p>{service.copy}</p>
              <button className="pill ghost">{service.cta}</button>
            </article>
          ))}
        </section>

        <section className="clipping-hero" id="clipping">
          <div className="clipping-bg-icon left" aria-hidden="true" />
          <div className="clipping-bg-icon right" aria-hidden="true" />
          <div className="clipping-hero-inner">
            <p className="eyebrow highlight">Clipping</p>
            <h2>Clipping</h2>
            <p className="clipping-copy">
              The fastest way to dominate social media feeds (Cluely style marketing). Guaranteed millions of views with
              monthly on-site shoots at a flat per-million-view rate, built for the hottest tech companies in the valley.
            </p>
            <button className="pill clipping-cta">Join the Community</button>
          </div>
          <div className="clipping-video-shell">
            <button
              className="mute-toggle"
              aria-pressed={!clippingMuted}
              onClick={() => setClippingMuted((prev) => !prev)}
            >
              {clippingMuted ? '🔇' : '🔊'}
              <span className="sr-only">Toggle clip audio</span>
            </button>
            <div className={`clipping-video-frame ${clippingMuted ? 'muted' : 'unmuted'}`}>
              <div className="video-glow" />
            </div>
          </div>
        </section>

        <section className="clients" id="case-studies">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Portfolio Clients</p>
              <h2>Trusted by top venture funds & breakout podcasts.</h2>
            </div>
            <div className="slider-controls">
              <button className="pill ghost" onClick={() => setClientIndex((prev) => (prev - 2 + clientLogos.length) % clientLogos.length)}>
                Previous
              </button>
              <button className="pill ghost" onClick={() => setClientIndex((prev) => (prev + 2) % clientLogos.length)}>
                Next
              </button>
            </div>
          </div>
          <div className="client-track">
            {visibleClients.map((client) => (
              <article key={client.name} className="client-card">
                <h4>{client.name}</h4>
                <p>{client.tag}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stat-row">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p className="value">{stat.value}</p>
              <p className="label">{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="videos">
          {videoSamples.map((sample) => (
            <article key={sample.title} className="video-card">
              <div className={`video-frame ${sample.muted ? 'muted' : 'unmuted'}`}>
                <span>{sample.muted ? 'Muted' : 'Unmuted'}</span>
              </div>
              <h3>{sample.title}</h3>
              <p>{sample.stat}</p>
              <button className="pill ghost">Explore</button>
            </article>
          ))}
        </section>

        <section className="case-grid">
          {caseStudies.map((study) => (
            <article key={study.title} className="case-card">
              <p className="eyebrow">{study.stat}</p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <button className="pill ghost">Download Case Study</button>
            </article>
          ))}
        </section>

        <section className="process">
          <div className="section-heading column">
            <p className="eyebrow">How it works</p>
            <h2>A holistic content approach</h2>
            <p>
              Elevate thought leadership by turning four conversations a month into 30+ pieces of content posted across
              every channel with minimal time investment.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.label} className="process-card">
                <span className="badge">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tracks">
          <div className="track-tabs">
            {serviceTracks.map((track) => (
              <button
                key={track.id}
                className={`pill chip ${activeTrack === track.id ? 'active' : ''}`}
                onClick={() => setActiveTrack(track.id)}
              >
                {track.headline}
              </button>
            ))}
          </div>
          <article className="track-card">
            <p className="eyebrow">{activeTrackData?.headline}</p>
            <h3>{activeTrackData?.subhead}</h3>
            <ul>
              {activeTrackData?.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="testimonials">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Testimonials</p>
              <h2>Operators talking about results.</h2>
            </div>
            <div className="slider-controls">
              <button className="pill ghost" onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
                Previous
              </button>
              <button className="pill ghost" onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}>
                Next
              </button>
            </div>
          </div>
          <article className="testimonial-card">
            <p className="quote">{testimonials[testimonialIndex].quote}</p>
            <p className="person">{testimonials[testimonialIndex].person}</p>
            <p className="role">{testimonials[testimonialIndex].role}</p>
          </article>
        </section>

        <section className="faq" aria-label="FAQ" id="faq">
          <div className="section-heading column">
            <p className="eyebrow">Frequently Asked</p>
            <h2>Your questions, answered.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => {
              const open = activeFaq === item.question
              return (
                <article key={item.question} className={`faq-item ${open ? 'open' : ''}`}>
                  <header onClick={() => setActiveFaq(open ? '' : item.question)}>
                    <h3>{item.question}</h3>
                    <span>{open ? '�' : '+'}</span>
                  </header>
                  {open && <p>{item.answer}</p>}
                </article>
              )
            })}
          </div>
        </section>
      </main> */}

      <footer className="site-footer">
        
        <p>Atomik Growth  All rights reserved</p>
      </footer>
    </div>
  )
}

export default App
