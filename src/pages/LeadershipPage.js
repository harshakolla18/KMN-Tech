import React from 'react';
import CustomFooter from '../components/CustomFooter';
import { motion } from 'framer-motion';
import './LeadershipPage.css';
import harshakollaJpeg from '../images/harshakolla.jpeg';
import fazilKhanImg from '../images/Fazilkhan.jpg';
import udaybhanuImg from '../images/udaybhanu.png';

function LeadershipPage() {
  const leaders = [
    {
      name: 'Harsha Kolla',
      role: 'Founder',
      bio: 'Harsha Kolla is the founder of Neos Tech. His journey began with a passion for technology and a drive to solve real-world problems. Over the years, Harsha has transformed ideas into impactful solutions, leading the development of enterprise-grade applications and AI-driven platforms for global clients. From building robust trade settlement systems to architecting analytics pipelines that process massive data, his work reflects a commitment to innovation, teamwork, and continuous learning. Harsha believes in empowering teams, embracing challenges, and creating technology that makes a difference for businesses and communities worldwide.',
      image: harshakollaJpeg,
    },

{
      name: 'Fazil Khan',
      role: 'Full Stack Developer',
      bio: 'Fazil is a versatile full stack developer with 4+ years of experience, skilled in both frontend and backend technologies, delivering robust and scalable solutions for modern web applications.',
      image: fazilKhanImg,
    },

    {
      name: 'Uday Bhanu',
      role: 'Data Engineer',
      bio: <>Uday Bhanu is a seasoned data engineer with 15+ years of experience, specializing in data architecture, ETL pipelines, and big data solutions for enterprise clients. He has worked at <span className="company-highlight">Genpact</span>, delivering advanced data solutions for global organizations.</>,
      image: udaybhanuImg,
    },
    {
      name: 'Omkar Naidu',
      role: 'Machine Learning Engineer',
      bio: <>Omkar Naidu is a machine learning engineer with 15+ years of experience. He has worked as a project manager at <span className="company-highlight">Target</span>, leading teams to deliver advanced AI and ML solutions.</>,
      image: '🤖',
    },
    
    {
      name: 'Nagaraju',
      role: 'Software Developer',
      bio: <>Nagaraju is a software developer with 15+ years of experience who has worked at <span className="company-highlight">OpenText</span>, contributing to enterprise software solutions and driving innovation in the tech industry.</>,
      image: '💻',
    },
  ];

  // Split leaders and developers
  const coreLeaders = leaders.filter(l => !l.role.toLowerCase().includes('developer') && l.name !== 'Uday Bhanu' && l.name !== 'Omkar Naidu');
  const developers = leaders.filter(l => l.role.toLowerCase().includes('developer') || l.name === 'Uday Bhanu' || l.name === 'Omkar Naidu');

  return (
    <>
    <div className="leadership-page">
      <motion.div
        className="leadership-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Team</h1>
        <p>Meet the visionaries driving innovation at Neos Tech</p>
      </motion.div>

      <div className="executives-section">
        <h2 className="executives-title">Our Executives</h2>
        <div className="leaders-container">
          {coreLeaders.map((leader, index) => (
            leader.name === 'Harsha Kolla' ? (
              <motion.div
                key={index}
                className="leader-profile-card founder-profile-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 30px 80px rgba(66, 165, 245, 0.3)',
                }}
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2.5rem', background: 'rgba(255,255,255,0.03)', padding: '2.5rem 2rem' }}
              >
                <div style={{ flex: '0 0 260px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: '260px',
                      height: '340px',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      boxShadow: '0 8px 32px rgba(13,71,161,0.18)',
                      border: '4px solid #1976d2',
                      background: '#fff',
                    }}
                  />
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#0d47a1' }}>{leader.name}</h2>
                  <h3 style={{ color: '#bfa14a', fontWeight: 700, marginBottom: '1.2rem', fontSize: '1.3rem' }}>{leader.role} <span style={{ color: '#FFD600', fontWeight: 400, fontSize: '1.1rem' }}>| Software Engineer</span></h3>
                  <p style={{ fontSize: '1.1rem', color: '#212121', marginBottom: '1.2rem' }}>
                    His journey began with a passion for technology and a drive to solve real-world problems. Over the years, Harsha has transformed ideas into impactful solutions, leading the development of enterprise-grade applications and AI-driven platforms for global clients. From building robust trade settlement systems to architecting analytics pipelines that process massive data, his work reflects a commitment to innovation, teamwork, and continuous learning. Harsha believes in empowering teams, embracing challenges, and creating technology that makes a difference for businesses and communities worldwide.<br /><br />
                    <span style={{ display: 'block', fontStyle: 'italic', color: '#FFD600', marginTop: '1rem' }}>&quot;We transform ideas into scalable digital platforms built for growth.&quot; &mdash; <b>Harsha Kolla</b></span>
                  </p>
                  <motion.a
                    href="https://www.harshakolla18.com" target="_blank" rel="noopener noreferrer"
                    className="profile-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-block', textDecoration: 'none', color: '#fff', marginRight: '1rem' }}
                  >
                    Learn more
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/harsha-kolla/" target="_blank" rel="noopener noreferrer"
                    className="profile-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-block', textDecoration: 'none', color: '#fff' }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                className="leader-profile-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 30px 80px rgba(66, 165, 245, 0.3)',
                }}
              >
                <div className="leader-profile-image">
                  {typeof leader.image === 'string' && leader.image.length <= 3 ? (
                    <span style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#1976d2',
                      background: '#e3eafc',
                      borderRadius: '50%',
                      border: '2px solid #1976d2',
                    }}>
                      {leader.image.length === 1 ? leader.image : leader.name.charAt(0)}
                    </span>
                  ) : (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  )}
                </div>
                <h2>{leader.name}</h2>
                <p className="leader-role">{leader.role}</p>
                <p className="leader-bio">{leader.bio}</p>
                <motion.button
                  className="profile-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            )
          ))}
        </div>
      </div>

      <div className="developers-section">
        <h2 className="developers-title">Our Developers</h2>
        <div className="leaders-container">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              className="leader-profile-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 30px 80px rgba(66, 165, 245, 0.3)',
              }}
            >
              <div className="leader-profile-image">
                {typeof dev.image === 'string' && dev.image.length <= 3 ? (
                  <span style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#1976d2',
                    background: '#e3eafc',
                    borderRadius: '50%',
                    border: '2px solid #1976d2',
                  }}>
                    {dev.image.length === 1 ? dev.image : dev.name.charAt(0)}
                  </span>
                ) : (
                  <img
                    src={dev.image}
                    alt={dev.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                )}
              </div>
              <h2>{dev.name}</h2>
              <p className="leader-role">{dev.role}</p>
              <p className="leader-bio">{dev.bio}</p>
              {dev.name === 'Fazil Khan' ? (
                <motion.a
                  href="https://www.linkedin.com/in/mohammed-fazil-khasim-80a716273/" target="_blank" rel="noopener noreferrer"
                  className="profile-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-block', textDecoration: 'none', color: '#fff' }}
                >
                  Learn More
                </motion.a>
              ) : (
                <motion.button
                  className="profile-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.section
        className="leadership-values"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            { title: 'Innovation', description: 'We constantly push boundaries to deliver cutting-edge solutions' },
            { title: 'Integrity', description: 'We conduct business with honesty and transparent communication' },
            { title: 'Excellence', description: 'We maintain the highest standards in everything we do' },
            { title: 'Collaboration', description: 'We believe in teamwork and partnership to achieve success' },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
    <CustomFooter />
    </>
  );
}

export default LeadershipPage;
