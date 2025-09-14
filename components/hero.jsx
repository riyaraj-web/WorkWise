"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated background elements */}
      <div className="hero-bg-primary"></div>
      <div className="hero-bg-secondary"></div>
      <div className="hero-bg-particles"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Your AI Career Coach for
            <br />
            <span className="hero-title-accent">Professional Success</span>
          </h1>
          <p className="hero-description">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        
        <div className="hero-actions">
          <Link href="/dashboard">
            <Button className="btn-hero-primary">
              <span>Get Started</span>
              <svg 
                className="btn-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Button>
          </Link>
          <Button variant="outline" className="btn-hero-secondary">
            Watch Demo
          </Button>
        </div>
        
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <div className="image-glow"></div>
            <Image
              src="/banner4.jpeg"
              width={1280}
              height={720}
              alt="AI Career Coach Dashboard Preview"
              className="hero-dashboard-image"
              priority
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          width: 100%;
          min-height: 100vh;
          padding: 9rem 1.5rem 2.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b2c87 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding: 12rem 1.5rem 2.5rem;
          }
        }

        /* Background Elements */
        .hero-bg-primary {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(79, 172, 254, 0.2) 0%, transparent 50%);
          animation: pulse 4s ease-in-out infinite;
        }

        .hero-bg-secondary {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%);
          animation: shimmer 6s ease-in-out infinite;
        }

        .hero-bg-particles {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 50% 10%, rgba(102, 126, 234, 0.1) 1px, transparent 1px);
          background-size: 100px 100px, 150px 150px, 200px 200px;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          text-align: center;
        }

        .hero-text {
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: clamp(3rem, 6vw, 5rem);
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: clamp(3.5rem, 7vw, 6rem);
          }
        }

        @media (min-width: 1280px) {
          .hero-title {
            font-size: clamp(4rem, 8vw, 7rem);
          }
        }

        .hero-title-accent {
          background: linear-gradient(135deg, #4facfe 0%, #f093fb 50%, #ff6b9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { 
            background: linear-gradient(135deg, #4facfe 0%, #f093fb 50%, #ff6b9d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          50% { 
            background: linear-gradient(135deg, #ff6b9d 0%, #4facfe 50%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        .hero-description {
          max-width: 600px;
          margin: 0 auto 2rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .hero-description {
            font-size: 1.25rem;
          }
        }

        /* Actions */
        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .hero-actions {
            flex-direction: row;
            justify-content: center;
            gap: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .hero-actions {
            margin-bottom: 4rem;
          }
        }

        .btn-hero-primary {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 9999px;
          box-shadow: 0 8px 25px rgba(240, 147, 251, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.125rem;
          position: relative;
          overflow: hidden;
        }

        .btn-hero-primary:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 35px rgba(240, 147, 251, 0.6);
        }

        .btn-hero-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .btn-hero-primary:hover::before {
          left: 100%;
        }

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 9999px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.125rem;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
          transition: transform 0.3s ease;
        }

        .btn-hero-primary:hover .btn-icon {
          transform: translateX(2px);
        }

        /* Image */
        .hero-image-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-image {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-image.scrolled {
          transform: translateY(-20px) scale(0.95);
        }

        .image-glow {
          position: absolute;
          inset: -2rem;
          background: radial-gradient(ellipse, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
          border-radius: 1.5rem;
          filter: blur(20px);
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .hero-dashboard-image {
          border-radius: 0.75rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(118, 75, 162, 0.3);
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .hero-dashboard-image:hover {
          box-shadow: 0 35px 70px rgba(118, 75, 162, 0.4);
          transform: translateY(-5px);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;