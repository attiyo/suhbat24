"use client";
import React from "react";
import Nav from "@/components/nav/nav";
import Features from "@/components/features/features";
import Experts from "@/components/experts/experts";
import { Testimonials } from "@/components/testimonials/testimonials";
import Pricing from "@/components/pricing/pricing";
import Faq from "@/components/faq/faq";
import Cta from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero-section/hero-section";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <HeroSection />
      <Features />
      <Experts />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
};

export default HomePage;
