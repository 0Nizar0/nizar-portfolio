import React, { useState, useEffect } from 'react';

const profilePhotoPath = process.env.PUBLIC_URL + '/Nizar.jpg';

const artifacts = [
  {
  title: "AI & ML Timeline",
  description: "Created a detailed timeline showcasing key AI and ML milestones, demonstrating my understanding of AI evolution and its relevance to my studies.",
  link: "https://chatgpt.com/canvas/shared/6904ec085d408191a5bc2dd34016d953",
  reflection: "This timeline illustrates my ability to organize complex information, research skills, and contextual understanding of AI for professional portfolio purposes."
  },
  {
    title: "Machine Learning vs. Deep Learning Analysis",
    description:
      "A structured comparison exploring the differences between Machine Learning and Deep Learning, focusing on algorithms, architectures, applications, and practical scalability in real-world environments.",
    reflection:
      "This artifact demonstrates my ability to critically analyze AI concepts and translate them into meaningful insights. By comparing ML and DL, I learned how to evaluate model complexity, data requirements, and appropriate use cases. This strengthened my technical reasoning and helps me make informed decisions about selecting the right approach in future projects."
  },
  {
    title: "Deep Learning Implementation & Adaptation",
    description:
      "Hands-on implementation of neural network models, including experimentation with preprocessing, architecture tuning, and training optimization while addressing performance challenges.",
    reflection:
      "Working with neural networks allowed me to turn theory into real practice. I learned how to diagnose training issues, adjust hyperparameters, and manage data limitations. This artifact highlights my adaptability, problem-solving skills, and growing confidence in handling deep learning workflows — key abilities for advanced AI development."
  },
  {
    title: "Secure Online Auction System (2023)",
    description:
      "A full-stack auction platform built with Spring Boot and React, featuring secure transactions, real-time bidding logic, and automated backend workflows.",
    reflection:
      "This project showcases my practical experience in full-stack web development, secure system design, and database integration. It reflects my ability to build real-world applications that balance performance, reliability, and user experience — skills that support my long-term goals in AI-driven software engineering."
  },
  {
    title: "Alumni Management Portal (2023)",
    description:
      "A microservices-based web application designed to support alumni interaction, event management, and data organization across distributed services.",
    reflection:
      "Through this project, I gained deeper experience in system architecture, API communication, and collaborative software development. This artifact highlights my technical versatility and my ability to design maintainable, scalable backend systems."
  }
];

export default function App() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = window.pageYOffset + elementRect.top;
    const middleOffset = (window.innerHeight / 2) - (elementRect.height / 2);

    window.scrollTo({
      top: absoluteElementTop - middleOffset - navbarHeight / 2,
      behavior: 'smooth'
    });

    // Highlight effect without breaking fade-in
    element.classList.add('highlight');
    setTimeout(() => element.classList.remove('highlight'), 1200);
  };

  // Fade-in sections when visible
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Nizar Muala</div>
        <ul className="nav-links">
          <li><button onClick={() => handleNavClick('home')}>Home</button></li>
          <li><button onClick={() => handleNavClick('about')}>About</button></li>
          <li><button onClick={() => handleNavClick('experience')}>Experience</button></li>
          <li><button onClick={() => handleNavClick('education')}>Education</button></li>
          <li><button onClick={() => handleNavClick('skills')}>Skills</button></li>
          <li><button onClick={() => handleNavClick('artifacts')}>Artifacts</button></li>
          <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="section home">
        <img 
          src={profilePhotoPath} 
          alt="Nizar Muala" 
          className="profile-photo" 
          onError={e => e.target.style.display = 'none'}
        />
        <h1>Nizar Muala</h1>
        <h2>Web Developer | Master’s in Computer Information Systems (AI Specialization – In Progress)</h2>
      </section>
      <hr className="divider"/>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Talented Software Engineer with 3+ years of experience building robust applications using Java, Spring Boot, and React. 
          Skilled in front-end and back-end development, database management with MySQL & SQL Server, and delivering user-friendly solutions.
          Committed to collaboration, professional growth, and creating high-quality software products.
        </p>
      </section>
      <hr className="divider"/>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Web Developer – Internal Systems (Whitestar Distributors Inc.)</h3>
          <span>08/2025 - Present | Glendale, AZ</span>
          <ul>
            <li>Developed and maintained internal web applications using Java, Spring Boot, React, HTML/CSS.</li>
            <li>Assisted with database tasks and SQL queries, contributed to version control and deployment.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Software Developer (Endeavor Technology Ltd)</h3>
          <span>03/2020 - 03/2023 | Remote</span>
          <ul>
            <li>Built responsive web interfaces using React, HTML, CSS, and JavaScript.</li>
            <li>Developed backend modules with Java and maintained application consistency.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Assistant Sales Manager (Advanced Piping Solutions)</h3>
          <span>01/2013 - 02/2023 | Riyadh, Saudi Arabia</span>
          <ul>
            <li>Managed projects, resources, and technical proposals for efficient operations.</li>
          </ul>
        </div>
      </section>
      <hr className="divider"/>

      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Master of Science in Computer Information Systems – AI Specialization (In Progress)</h3>
          <span>08/2025 - Present | Indiana Wesleyan University</span>
        </div>
        <div className="education-item">
          <h3>Bachelor of Science in Mechanical Engineering</h3>
          <span>09/2007 - 05/2012 | An-Najah National University, Palestine</span>
        </div>
      </section>
      <hr className="divider"/>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills & Technical Expertise</h2>
        <div className="skills-grid">
          <div>
            <h3>Programming Languages</h3>
            <p>Java, JavaScript</p>
          </div>
          <div>
            <h3>Web Technologies</h3>
            <p>HTML5, CSS3, XML, JSON</p>
          </div>
          <div>
            <h3>Frameworks & Libraries</h3>
            <p>React, Spring Boot</p>
          </div>
          <div>
            <h3>Databases</h3>
            <p>MySQL, MS SQL Server</p>
          </div>
          <div>
            <h3>Web Services</h3>
            <p>RESTful APIs</p>
          </div>
          <div>
            <h3>Development Tools</h3>
            <p>IntelliJ, Eclipse, VS Code, Postman, Docker, GitHub, SQL Workbench, StarUML</p>
          </div>
          <div>
            <h3>Methodologies</h3>
            <p>Agile (Scrum), Waterfall</p>
          </div>
          <div>
            <h3>Design Patterns</h3>
            <p>MTV, MVC, Singleton, Factory, Observer</p>
          </div>
        </div>
      </section>
      <hr className="divider"/>

      {/* Artifacts */}
      <section id="artifacts" className="section">
        <h2>Artifacts</h2>
        <div className="artifacts-grid">
          {artifacts.map((artifact, index) => (
            <div key={index} className="artifact-card" onClick={() => setSelectedArtifact(artifact)}>
              <h3>{artifact.title}</h3>
              <p>{artifact.description.substring(0, 80)}...</p>
            </div>
          ))}
        </div>
      </section>

      {selectedArtifact && (
        <div className="modal-overlay" onClick={() => setSelectedArtifact(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>{selectedArtifact.title}</h2>
            <p><strong>Description:</strong> {selectedArtifact.description}</p>
            {selectedArtifact.link && (
              <p>
                <a
                 href={selectedArtifact.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-600 underline font-medium"
                >
                  AI Research & Development Timeline
                </a>
              </p>
            )}

            <p><strong>Reflection:</strong> {selectedArtifact.reflection}</p>
            <button className="close-btn" onClick={() => setSelectedArtifact(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-buttons">
          <a href="mailto:Nizar.Muala@outlook.com" className="contact-btn">Email Me</a>
          <a href="https://linkedin.com/in/nizarmuala" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Nizar Muala. All rights reserved.</p>
      </footer>
    </div>
  );
}
