'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const fullText = 'Professional';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const skills = [
    { name: 'Penetration Testing', level: 90, icon: '🎯' },
    { name: 'Web Application Security', level: 85, icon: '🌐' },
    { name: 'Network Security', level: 80, icon: '🔐' },
    { name: 'Cryptography', level: 75, icon: '🔑' },
    { name: 'Reverse Engineering', level: 70, icon: '⚙️' },
    { name: 'Cloud Security', level: 80, icon: '☁️' }
  ];

  const certifications = [
    'OSCP - Offensive Security Certified Professional',
    'CEH - Certified Ethical Hacker',
    'CompTIA Security+',
    'eWPT - Web Application Penetration Tester'
  ];

  const projects = [
    { 
      name: 'Enterprise Security Assessment', 
      desc: 'Comprehensive penetration testing and vulnerability assessment for Fortune 500 company infrastructure',
      impact: 'Identified 47 critical vulnerabilities',
      tech: ['Burp Suite', 'Metasploit', 'Nmap'],
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'API Security Framework', 
      desc: 'Developed automated testing framework for REST API security analysis and threat detection',
      impact: '10,000+ downloads on GitHub',
      tech: ['Python', 'OWASP', 'Docker'],
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Zero-Day Research', 
      desc: 'Discovered and responsibly disclosed critical vulnerability in widely-used authentication system',
      impact: 'CVE assigned, $15,000 bounty',
      tech: ['C', 'Assembly', 'IDA Pro'],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const experience = [
    {
      role: 'Senior Security Consultant',
      company: 'SecureNet Solutions',
      period: '2022 - Present',
      desc: 'Lead penetration testing engagements and security assessments for enterprise clients'
    },
    {
      role: 'Security Researcher',
      company: 'CyberDefense Labs',
      period: '2020 - 2022',
      desc: 'Conducted vulnerability research and developed exploitation techniques'
    },
    {
      role: 'Junior Penetration Tester',
      company: 'InfoSec Group',
      period: '2018 - 2020',
      desc: 'Performed security audits and compliance testing for various organizations'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid-bg"></div>
      </div>

      {/* Spotlight effect */}
      <div 
        className="fixed inset-0 pointer-events-none spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      ></div>

      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent glitch-title">
              CYPHER_SEC
            </div>
            <div className="hidden md:flex gap-6 lg:gap-8 text-sm">
              <a href="#about" className="text-zinc-400 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">About</a>
              <a href="#experience" className="text-zinc-400 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Experience</a>
              <a href="#skills" className="text-zinc-400 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Skills</a>
              <a href="#projects" className="text-zinc-400 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Projects</a>
              <a href="#contact" className="text-zinc-400 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Contact</a>
            </div>
            {/* Mobile menu indicator */}
            <a href="#contact" className="md:hidden px-4 py-2 text-sm bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
              <span className="digital-text text-[10px] sm:text-xs">SYSTEM_ONLINE // AVAILABLE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
              <span className="inline-block text-white glitch-hero" data-text="Cybersecurity">Cybersecurity</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block glitch" data-text={typedText}>
                {typedText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 mb-8 sm:mb-12 leading-relaxed">
              <span className="text-cyan-400 font-mono">{'>'}</span> Offensive Security Specialist with 6+ years of experience in penetration testing, 
              vulnerability research, and security consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105 relative overflow-hidden text-center">
                <span className="relative z-10 text-sm sm:text-base">Initialize Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all backdrop-blur-sm text-center text-sm sm:text-base">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & TryHackMe Section */}
      <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 glitch-title">
            <span className="text-cyan-400 font-mono text-xl sm:text-2xl">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-cyan-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-4">
                  I'm a certified cybersecurity professional specializing in offensive security operations. 
                  My expertise spans web application security, network penetration testing, and vulnerability research. 
                  I've helped organizations across various industries strengthen their security posture through 
                  comprehensive assessments and actionable recommendations.
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Beyond professional engagements, I actively participate in bug bounty programs and CTF competitions, 
                  continuously honing my skills and staying current with emerging threats and exploitation techniques.
                </p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-cyan-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-cyan-400">
                  <span className="font-mono">[</span> Certifications <span className="font-mono">]</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-2 text-zinc-400 group">
                      <svg className="w-5 h-5 text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm group-hover:text-cyan-300 transition-colors">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-first md:order-last">
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-cyan-500/20 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-cyan-400 flex items-center gap-2">
                  <span className="font-mono">{'<'}</span>
                  <span className="text-sm sm:text-base">TryHackMe Profile</span>
                  <span className="font-mono">{'/>'}</span>
                </h3>
                <div className="bg-black/50 rounded-lg p-3 sm:p-4 border border-cyan-500/20">
                  <iframe 
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=840142" 
                    style={{ border: 'none', width: '100%', height: '180px' }}
                    title="TryHackMe Badge"
                    className="sm:h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 glitch-title">
            <span className="text-cyan-400 font-mono text-xl sm:text-2xl">02.</span> Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-cyan-500/30 pl-6 sm:pl-8 pb-6 sm:pb-8 relative group hover:border-cyan-500 transition-all">
                <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full -translate-x-[7px] sm:-translate-x-[9px] shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:shadow-[0_0_20px_rgba(6,182,212,1)] transition-all"></div>
                <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-cyan-500/20 rounded-xl p-4 sm:p-6 backdrop-blur-sm group-hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">{exp.role}</h3>
                    <span className="text-xs sm:text-sm text-cyan-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-zinc-400 mb-2 font-semibold text-sm sm:text-base">{exp.company}</p>
                  <p className="text-zinc-500 text-sm sm:text-base">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 glitch-title">
            <span className="text-cyan-400 font-mono text-xl sm:text-2xl">03.</span> Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="group bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-cyan-500/20 rounded-lg p-4 sm:p-6 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-base sm:text-lg font-medium text-zinc-200 group-hover:text-cyan-400 transition-colors leading-tight">{skill.name}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-zinc-500 font-mono">Level</span>
                    <span className="text-cyan-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-950 rounded-full overflow-hidden border border-cyan-500/20">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 glitch-title">
            <span className="text-cyan-400 font-mono text-xl sm:text-2xl">04.</span> Featured Projects
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, i) => (
              <div key={i} className="group bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-cyan-500/20 rounded-xl p-6 sm:p-8 hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all backdrop-blur-sm">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${project.color} rounded-lg mb-4 flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  🔒
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-zinc-100 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                <p className="text-zinc-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.desc}</p>
                <div className="flex items-center gap-2 mb-3 sm:mb-4 text-cyan-400">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm font-mono">{project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-2.5 sm:px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300 font-mono hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 glitch-title">
            <span className="text-cyan-400 font-mono text-xl sm:text-2xl">05.</span> Initialize Connection
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            <span className="text-cyan-400 font-mono">{'>'}</span> Ready to collaborate on your next security challenge? 
            Let's establish a secure connection.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 px-4">
            <a href="https://github.com" className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-zinc-900/50 border-2 border-cyan-500/30 text-zinc-100 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all backdrop-blur-sm text-sm sm:text-base">
              <span className="font-mono group-hover:text-cyan-400">GitHub</span>
            </a>
            <a href="https://linkedin.com" className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-zinc-900/50 border-2 border-cyan-500/30 text-zinc-100 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all backdrop-blur-sm text-sm sm:text-base">
              <span className="font-mono group-hover:text-cyan-400">LinkedIn</span>
            </a>
            <a href="https://twitter.com" className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-zinc-900/50 border-2 border-cyan-500/30 text-zinc-100 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all backdrop-blur-sm text-sm sm:text-base">
              <span className="font-mono group-hover:text-cyan-400">Twitter</span>
            </a>
            <a href="mailto:security@example.com" className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105 relative overflow-hidden text-sm sm:text-base">
              <span className="relative z-10 font-mono">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-zinc-500">
            <p className="font-mono text-center sm:text-left">© 2025 <span className="text-cyan-400">CYPHER_SEC</span> // All rights reserved</p>
            <p className="font-mono text-center sm:text-right">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-4px, 4px);
          }
          40% {
            transform: translate(-4px, -4px);
          }
          60% {
            transform: translate(4px, 4px);
          }
          80% {
            transform: translate(4px, -4px);
          }
        }

        .glitch {
          position: relative;
          animation: glitch 0.5s infinite;
        }

        .glitch:before,
        .glitch:after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .glitch:before {
          animation: glitchTop 0.3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-3px, -3px);
          color: #06b6d4;
          text-shadow: -2px 0 #06b6d4;
          opacity: 0.8;
        }

        .glitch:after {
          animation: glitchBottom 0.4s infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          transform: translate(3px, 3px);
          color: #f43f5e;
          text-shadow: 2px 0 #f43f5e;
          opacity: 0.8;
        }

        .glitch-hero {
          position: relative;
        }

        .glitch-hero:before,
        .glitch-hero:after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-hero:before {
          animation: glitchTop 0.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
          color: #06b6d4;
          text-shadow: -3px 0 #06b6d4;
          opacity: 0.7;
        }

        .glitch-hero:after {
          animation: glitchBottom 0.6s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          color: #f43f5e;
          text-shadow: 3px 0 #f43f5e;
          opacity: 0.7;
        }

        @keyframes glitchTop {
          0%, 90%, 100% {
            transform: translate(0, 0);
          }
          92% {
            transform: translate(-4px, -4px);
          }
          94% {
            transform: translate(4px, -4px);
          }
          96% {
            transform: translate(-4px, 4px);
          }
          98% {
            transform: translate(4px, 4px);
          }
        }

        @keyframes glitchBottom {
          0%, 90%, 100% {
            transform: translate(0, 0);
          }
          92% {
            transform: translate(-4px, 4px);
          }
          94% {
            transform: translate(4px, 4px);
          }
          96% {
            transform: translate(-4px, -4px);
          }
          98% {
            transform: translate(4px, -4px);
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .scanline {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(6, 182, 212, 0.1) 50%,
            transparent 100%
          );
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 100;
        }

        .grid-bg {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #06b6d4;
          border-radius: 50%;
          box-shadow: 0 0 10px #06b6d4;
          opacity: 0.6;
        }

        .particle-1 {
          top: 20%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .particle-2 {
          top: 60%;
          left: 80%;
          animation: float 10s ease-in-out infinite 2s;
        }

        .particle-3 {
          top: 40%;
          left: 30%;
          animation: float 12s ease-in-out infinite 4s;
        }

        .particle-4 {
          top: 80%;
          left: 60%;
          animation: float 9s ease-in-out infinite 1s;
        }

        .particle-5 {
          top: 30%;
          left: 90%;
          animation: float 11s ease-in-out infinite 3s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          75% {
            transform: translate(20px, 20px);
          }
        }

        .glitch-title:hover {
          animation: glitch 0.3s ease-in-out;
        }

        .digital-text {
          font-family: 'Courier New', monospace;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}