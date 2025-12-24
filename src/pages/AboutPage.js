import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutPage.css';
import aboutIllustration from '../images/aboutus.png';
import tabLogo from '../images/tab logo.png';
import CustomFooter from '../components/CustomFooter';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Neos Tech | Digital Innovation & Global Team</title>
        <meta name="description" content="Learn about Neos Tech, our global team, mission, and digital innovation expertise in the US, India, and South Africa." />
        <meta property="og:title" content="About Neos Tech | Digital Innovation & Global Team" />
        <meta property="og:description" content="Learn about Neos Tech, our global team, mission, and digital innovation expertise in the US, India, and South Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neostechus.com/about" />
        <meta property="og:image" content="https://neostechus.com/logo.png" />
      </Helmet>
      <div className="aboutpage-style" style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      <div className="aboutpage-hero-section" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5vw 2rem 5vw', minHeight: '60vh', marginTop: '2.5rem' }}>
        <div className="aboutpage-illustration" style={{ flex: '1 1 400px', minWidth: 320, maxWidth: 520 }}>
          <img src={aboutIllustration} alt="About Neos Tech" style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block' }} />
        </div>
        <div className="aboutpage-hero-content" style={{ flex: '1 1 400px', minWidth: 320, maxWidth: 600, marginLeft: '2vw' }}>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.2rem', lineHeight: 1.1 }}>Neos Tech<br />Strategy and Consulting</h1>
          <p style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', fontWeight: 400 }}>
            Reinvention is continuous. Together, we create measurable value at scale.
          </p>
        </div>
      </div>
      <div className="aboutpage-bottom-section" style={{ padding: '2rem 5vw 3rem 5vw', display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.2rem' }}>Reinvention starts here</h2>
          <div style={{ fontSize: '1.15rem', color: '#e0e0e0', maxWidth: 900, lineHeight: 1.7 }}>
            <p>
              We are <b>Neos Tech</b>, a passionate team of technology professionals, engineers, and innovators dedicated to building scalable digital solutions for the modern world. Our diverse expertise spans software engineering, artificial intelligence, data analytics, and digital transformation.<br /><br />
              <b>Where We Are Based:</b> Neos Tech is headquartered in <b>St. Louis, Missouri, USA</b>, and has expanded to <b>India</b> and <b>South Africa</b>, with ongoing projects in these regions. Our team collaborates across borders to deliver impactful results wherever our clients are located.<br /><br />
              <b>Our Mission:</b> Our mission is to <b>transform ideas into scalable digital platforms built for growth</b>. We strive to empower organizations by delivering innovative, reliable, and future-ready technology solutions that drive business success and make a positive impact on society.
            </p>
          </div>
        </div>
        <div style={{ flex: '0 0 260px', display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end', minWidth: 180, height: '100%' }}>
          <img src={tabLogo} alt="Tab Logo" style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block', marginLeft: '10px', borderRadius: '12px', background: '#fff' }} />
        </div>
      </div>
      <CustomFooter />
    </div>
    </>
  );
}

export default AboutPage;
