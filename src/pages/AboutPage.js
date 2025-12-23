import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p className="about-tagline">Empowering Innovation, Delivering Excellence</p>
      </section>
      <section className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            We are <b>Neos Tech</b>, a passionate team of technology professionals, engineers, and innovators dedicated to building scalable digital solutions for the modern world. Our diverse expertise spans software engineering, artificial intelligence, data analytics, and digital transformation.
          </p>
        </div>
        <div className="about-card">
          <h2>Where We Are Based</h2>
          <p>
            Neos Tech is headquartered in <b>St. Louis, Missouri, USA</b>, with a global presence and a commitment to serving clients worldwide. Our team collaborates across borders to deliver impactful results wherever our clients are located.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to <b>transform ideas into scalable digital platforms built for growth</b>. We strive to empower organizations by delivering innovative, reliable, and future-ready technology solutions that drive business success and make a positive impact on society.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
