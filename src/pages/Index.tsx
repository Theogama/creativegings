
import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollToTop from '@/components/ScrollToTop';
import PaymentStatusHandler from '@/components/PaymentStatusHandler';

// Lazy load components that are below the fold
const Approach = lazy(() => import('@/components/Approach'));
const Services = lazy(() => import('@/components/Services'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen">
      <PaymentStatusHandler />
      <Header />
      <Hero />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <Approach />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
};

export default Index;
