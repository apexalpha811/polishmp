import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './styles.css'

// Import main page content
import { Nav } from './components/site/Nav'
import { Hero } from './components/site/Hero'
import { SocialProof } from './components/site/SocialProof'
import { Services } from './components/site/Services'
import { Pricing } from './components/site/Pricing'
import { Visit } from './components/site/Visit'
import { ContactForm } from './components/site/ContactForm'
import { BottomCTA } from './components/site/BottomCTA'
import { Footer } from './components/site/Footer'
import { Toaster } from './components/ui/sonner'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Pricing />
        <Visit />
        <ContactForm />
        <BottomCTA />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
