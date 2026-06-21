import React, { useState, useEffect } from 'react';

const profilePhotoPath = process.env.PUBLIC_URL + '/Nizar.jpg';

const artifacts = [
{
title: "AI & Machine Learning Timeline",
artifactType: "Interactive Canvas Timeline",
introduction: "A visual timeline highlighting the major milestones in AI and ML from the 1950s to recent advancements.",
description: "This timeline presents key historical developments, periods of AI winter, and breakthroughs in deep learning and cloud computing. It focuses on major figures, companies, and innovations shaping AI.",
objective: "To demonstrate understanding of AI’s historical context and major advancements while creating an engaging, chronological visual representation.",
process: "Researched AI milestones, AI winters, and recent achievements; selected the most impactful events; created a digital timeline using ChatGPT/Canvas with clear descriptions and visuals.",
tools: "ChatGPT Canvas, online research",
valueProposition: "Shows ability to synthesize complex AI history and present it visually for educational or professional audiences.",
uniqueValue: "Provides an interactive, chronological overview combining historical context with recent AI achievements.",
relevance: "Highlights understanding of AI/ML concepts, history, and their evolution, which is essential for AI professionals.",
references: "Credible AI history articles, research papers, and industry sources",
link: "https://chatgpt.com/canvas/shared/6904ec085d408191a5bc2dd34016d953",
pdf: null
},
{
title: "Machine Learning vs Deep Learning Comparison",
artifactType: "PDF Document",
introduction: "A comparative analysis illustrating when to use machine learning versus deep learning through real-world examples.",
description: "Two examples demonstrate ML and DL applications: spam email detection (ML) and tumor detection in medical imaging (DL). Includes explanation of why each method is suitable or unsuitable for the problem.",
objective: "To critically evaluate differences between ML and DL and understand their application contexts.",
process: "Reviewed course materials, selected real-world examples, analyzed each method’s advantages and limitations, and documented the findings in a clear, concise report.",
tools: "Microsoft Word (converted to PDF), course materials",
valueProposition: "Demonstrates ability to analyze AI techniques and choose the right approach for different problem types.",
uniqueValue: "Combines clear explanation, real-world examples, and practical reasoning to show mastery of ML and DL concepts.",
relevance: "Essential for AI/ML professionals to understand and select appropriate methodologies for structured vs unstructured data.",
references: "Course materials, AI textbooks and articles",
link: null,
pdf: process.env.PUBLIC_URL + "/artifacts/ML_vs_DL_Analysis.pdf"
},
{
title: "Adapting to Challenges in Leadership",
artifactType: "PDF Document",
introduction: "Reflection on personal leadership challenges and applying biblical examples to adapt effectively.",
description: "Describes current leadership challenges, such as balancing responsibilities and making tough decisions. Draws on Moses and Esther as examples of adaptive leadership.",
objective: "To develop skills in adaptive leadership and critical reflection on decision-making.",
process: "Identified real-world leadership challenges, analyzed biblical examples, reflected on personal strategies, and documented insights.",
tools: "Microsoft Word (converted to PDF), course materials",
valueProposition: "Demonstrates ability to reflect on leadership challenges and implement strategies for effective adaptation.",
uniqueValue: "Integrates personal experience with historical/biblical context to show growth in leadership skills.",
relevance: "Highlights critical thinking, adaptability, and decision-making skills relevant for professional and personal development.",
references: "Bible, course materials",
link: null,
pdf: process.env.PUBLIC_URL + "/artifacts/Adapting_to_Challenges.pdf"
},
{
title: "Clear Communication in Leadership",
artifactType: "PDF Document",
introduction: "Reflection on communication challenges and strategies to prevent confusion within teams.",
description: "Analyzes personal communication style, explores potential pitfalls, and proposes methods for ensuring clarity using biblical and professional examples.",
objective: "To improve leadership communication skills and prevent misunderstandings in professional settings.",
process: "Reflected on past experiences of confusion, studied course guidance, documented actionable strategies for clear communication, and prepared a professional artifact for portfolio.",
tools: "Microsoft Word (converted to PDF), course materials",
valueProposition: "Demonstrates awareness of effective communication and practical methods to enhance clarity in leadership contexts.",
uniqueValue: "Combines personal reflection with actionable strategies, showing ownership of learning and professional growth.",
relevance: "Essential skill for leadership and collaboration in any professional environment.",
references: "Course materials, Scripture references (optional)",
link: null,
pdf: process.env.PUBLIC_URL + "/artifacts/Clear_Communication.pdf"
},
{
title: "Commercial Applications of AI",
artifactType: "Newsletter (PDF)",
introduction: "A professional newsletter analyzing how artificial intelligence is currently being applied across multiple industries.",
description: "This artifact explores real-world commercial AI applications in three industries, highlighting specific companies and products and explaining how AI is transforming business processes and decision-making.",
objective: "To demonstrate the ability to analyze practical AI use cases and clearly communicate their business impact to a non-technical audience.",
process: "Researched recent commercial AI developments, selected representative industries, analyzed business use cases, and structured the findings into a polished newsletter format.",
tools: "Course materials, online research, Microsoft Word (converted to PDF)",
valueProposition: "Shows applied understanding of AI in business environments and the ability to present technical concepts in a professional, accessible manner.",
uniqueValue: "Focuses on current, real-world AI adoption rather than theoretical models, emphasizing business relevance.",
relevance: "Demonstrates applied AI knowledge, industry awareness, and professional communication skills essential for AI and ML roles.",
references: "Industry reports, company documentation, and course materials",
link: null,
pdf: process.env.PUBLIC_URL + "/artifacts/Commercial_Applications_of_AI.pdf"
},

/* ✅ AIML-501 Workshop 1 */
{
title: "Machine Learning Algorithm Types",
artifactType: "Interactive HTML Infographic",
introduction: "A visual framework mapping 10 core machine learning algorithms across their learning styles, application domains, and real-world use cases.",
description: "This infographic categorizes key ML algorithms — including Decision Trees, Random Forest, Linear Regression, SVM, K-Means, PCA, CNN, Transformers, GANs, and Diffusion Models — by learning type (supervised vs. unsupervised) and application domain (tabular data, computer vision, NLP, and generative AI). Each algorithm includes a concise explanation and practical real-world examples.",
objective: "To clearly identify and categorize key machine learning algorithms, illustrate their primary application domains through a visually compelling framework, and provide practical examples that communicate their significance within AI applications.",
process: "Reviewed course materials on AI/ML algorithm types and domains; researched real-world use cases for each algorithm; designed and built an interactive HTML infographic styled to match the professional portfolio, organized with a domain summary row, legend, and individual algorithm cards.",
tools: "HTML, CSS, course materials, online research",
valueProposition: "Demonstrates the ability to synthesize and communicate complex ML concepts in a clear, professional, and visually accessible format suitable for both technical and non-technical audiences.",
uniqueValue: "Combines technical accuracy with clean visual design — matching the portfolio's aesthetic — to present a comprehensive ML algorithm reference that serves as a practical guide throughout the course and beyond.",
relevance: "Understanding algorithm types and their appropriate domains is a foundational skill for any AI/ML professional. This artifact shows the ability to organize and communicate that knowledge effectively.",
references: "Course materials (AIML-501), Microsoft Azure ML Algorithm Reference, IBM Technology resources, industry AI/ML documentation",
link: process.env.PUBLIC_URL + "/artifacts/ml_algorithms.html",
pdf: null
},

/* ✅ AIML-501 Workshop 2 */
{
title: "Visualizing Neural Networks",
artifactType: "Interactive HTML Presentation",
introduction: "A 9-slide visual presentation covering the core components of neural networks — layers, neurons, weights, activation functions, loss functions, and optimization algorithms.",
description: "This presentation walks through the architecture and function of neural networks using diagrams, component breakdowns, and real-world context. It includes a hand-built SVG architecture diagram showing data flow from input through hidden layers to output, detailed slides for each of the six key components, and a summary slide synthesizing the key insights.",
objective: "To clearly define and describe key neural network components, visually illustrate their roles and functions, and communicate complex AI concepts in a concise, professional, and accessible format.",
process: "Explored the TensorFlow Neural Network Playground with different data types, noise levels, and layer configurations to observe their impact on training. Used those observations to inform the explanations and visuals in the presentation. Built a custom interactive HTML slideshow styled to match the professional portfolio.",
tools: "TensorFlow Neural Network Playground, HTML/CSS/JavaScript, course materials",
valueProposition: "Demonstrates both conceptual understanding of neural network architecture and the ability to communicate that understanding visually and accessibly for technical and non-technical audiences.",
uniqueValue: "Features a custom-built SVG architecture diagram and interactive slide navigation — not a generic template. Each component is explained with practical context and real-world relevance rather than textbook definitions.",
relevance: "Neural networks are the foundation of modern AI systems. A clear understanding of how they are structured and trained is essential for anyone working in machine learning model development.",
references: "IBM Technology Neural Networks video, 3blue1brown Neural Network series, Google ML Crash Course, TensorFlow Playground",
link: process.env.PUBLIC_URL + "/artifacts/neural_networks.html",
pdf: null
},

{
title: "Generative AI LLM Infrastructure: Training Process and Costs",
artifactType: "Interactive HTML Infographic + Explanatory Document",
introduction: "A visual breakdown of how large language models like GPT-4, Claude, Gemini, and LLaMA are trained — from raw data collection to deployment — and what it actually costs to get there.",
description: "This infographic covers the full 7-step LLM training lifecycle, four resource cost categories (data, compute, energy, time) with real figures, a side-by-side comparison of GPT-4, Claude 3, Gemini Ultra, and LLaMA 2, an estimated training cost bar chart across model generations, and three key industry insights. An accompanying explanatory document summarizes the design rationale and sources.",
objective: "To clearly illustrate the key steps involved in training generative AI LLMs, explain primary resource categories and their costs, and communicate complex infrastructure concepts visually for varied audiences.",
process: "Researched training processes and cost data from public technical reports, official model documentation, and course materials. Designed and built an interactive HTML infographic matching the professional portfolio aesthetic, then compiled an explanatory Word document summarizing the content and design decisions.",
tools: "HTML/CSS, course materials, OpenAI/Anthropic/Meta/Google technical reports",
valueProposition: "Translates complex and often opaque LLM infrastructure information into a clear, visually accessible format — useful for developers, business stakeholders, and investors who need to understand what training frontier AI models actually involves and costs.",
uniqueValue: "Combines real cost figures with visual comparison across four major models and a clear process flow — all in one artifact rather than scattered across multiple documents. The open vs. closed model distinction and the alignment cost dimension are often overlooked in surface-level treatments of this topic.",
relevance: "Understanding the infrastructure and cost structure of LLM training is foundational for anyone making decisions about AI adoption, development, or investment. This artifact demonstrates both technical understanding and the ability to communicate it clearly.",
references: "IBM Technologies LLM video, Wolfram ChatGPT article, GPT-4 Technical Report, LLaMA 2 paper, Anthropic Claude documentation, Gemini technical report",
link: process.env.PUBLIC_URL + "/artifacts/llm_infrastructure.html",
pdf: null
},

/* ✅ AIML-501 Workshop 4 */
{
title: "Explainable AI: Transparency, Validation & Trust",
artifactType: "Interactive HTML Infographic + Explanatory Document",
introduction: "An infographic exploring Explainable AI (XAI) for large language models — why transparency matters in healthcare, finance, and law, the structural challenges that make LLMs hard to interpret, and how leading AI labs are addressing the problem.",
description: "This infographic covers what XAI means and why it matters, four core explainability challenges (black box complexity, post-hoc explanation gaps, data quality and bias, regulatory pressure), a four-stage validation and performance metrics pipeline (benchmarks, red teaming, human evaluation, continuous monitoring), and a side-by-side look at how OpenAI, Anthropic, Google, and Meta are approaching explainability. An accompanying explanatory document expands on each section and outlines the design rationale.",
objective: "To explain the key obstacles in interpreting generative AI outputs, describe industry techniques for improving explainability, and demonstrate how validation and performance metrics contribute to trustworthy AI — all communicated clearly for a non-technical audience.",
process: "Researched explainability challenges and current industry approaches from lab documentation and course materials, then designed and built an interactive HTML infographic matching the professional portfolio aesthetic, followed by a written explanatory document covering the research and design choices.",
tools: "HTML/CSS, course materials, OpenAI/Anthropic/Google/Meta documentation",
valueProposition: "Demonstrates the ability to break down a nuanced, often technical AI safety topic into a format that non-technical stakeholders in regulated industries can understand and act on.",
uniqueValue: "Frames explainability, validation, and documentation as complementary rather than competing solutions, and presents four different industry strategies side by side rather than focusing on a single approach.",
relevance: "As AI systems take on more consequential roles in healthcare, finance, and law, the ability to communicate why these systems can or cannot be trusted is a critical skill for AI/ML professionals.",
references: "OpenAI GPT-4 System Card, Anthropic interpretability research, Google Responsible AI documentation, Meta LLaMA model cards, course materials (AIML-501)",
link: process.env.PUBLIC_URL + "/artifacts/explainability.html",
pdf: null
},

/* ✅ AIML-501 Workshop 5 */
{
title: "Pre-Trained Model Decision Matrix",
artifactType: "Interactive HTML Infographic + Explanatory Document",
introduction: "A decision matrix comparing five pre-trained models — GPT-4, BERT-base, MobileNetV3, EfficientNet-B0, and XGBoost — across model size, accuracy, speed, and explainability considerations to guide model selection across NLP, computer vision, and tabular data domains.",
description: "This artifact presents a color-coded comparison table covering NLP/generative AI, computer vision, and tabular data models, followed by domain-specific recommendations (GPT-4 vs. BERT-base, MobileNetV3 vs. EfficientNet-B0, and XGBoost as a tabular default). An accompanying explanatory document provides the methodology, detailed analysis, and recommendations behind the matrix.",
objective: "To research and compare key characteristics of pre-trained models across domains, analyze trade-offs between size, accuracy, and speed, and present a clear decision matrix that supports informed model selection.",
process: "Researched benchmark performance and architectural characteristics for five pre-trained models across three domains, compiled the findings into a color-coded decision matrix styled to match the professional portfolio, and wrote an explanatory document detailing methodology and analysis.",
tools: "HTML/CSS, course materials, model benchmark documentation (ImageNet, GLUE, MMLU)",
valueProposition: "Demonstrates the ability to translate raw model specifications into a practical decision-making tool, balancing technical performance against deployment constraints and explainability needs.",
uniqueValue: "Goes beyond listing model specs by pairing each domain with a direct recommendation, framing model selection as a deliberate tradeoff rather than a default choice of the most powerful option.",
relevance: "Selecting the right pre-trained model for a given constraint set — not just the most accurate one — is a core practical skill for AI/ML professionals working across NLP, vision, and structured data applications.",
references: "ImageNet benchmark results, GLUE benchmark, MMLU benchmark, OpenAI/Google/Hugging Face model documentation, course materials (AIML-501)",
link: process.env.PUBLIC_URL + "/artifacts/decision_matrix.html",
pdf: null
},

{
title: "Generative AI Storytelling for Brand Development",
artifactType: "PDF Document + Product Visual",
introduction: "A project demonstrating how generative AI supports product branding, marketing storytelling, and advertisement development using a smartwatch example.",
description: "This artifact presents a complete workflow using generative AI tools to design product positioning, create marketing visuals, generate video scripts, and develop advertisement copy for a 46mm smartwatch.",
objective: "To demonstrate practical application of generative AI in branding, marketing, and storytelling while maintaining human creative and strategic control.",
process: "Used Google Gemini for product ideation and messaging, Microsoft Copilot for product visuals, and Canva for marketing advertisement creation. Compiled the workflow into a structured professional assignment.",
tools: "Google Gemini, Microsoft Copilot, Canva, Microsoft Word (converted to PDF)",
valueProposition: "Demonstrates ability to combine AI-driven creativity with structured marketing strategy and product storytelling.",
uniqueValue: "Shows real-world generative AI usage across ideation, design, promotional messaging, and brand storytelling.",
relevance: "Highlights practical generative AI knowledge and marketing application skills relevant to modern AI-driven business environments.",
references: "Workshop materials, AI-generated content, marketing design resources",
link: process.env.PUBLIC_URL + "/artifacts/PulseOne_Smart_Watch.pdf",
pdf: process.env.PUBLIC_URL + "/artifacts/Generative_AI_Storytelling.pdf"
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

element.classList.add('highlight');
setTimeout(() => element.classList.remove('highlight'), 1200);
};

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

<section id="home" className="section home">
<img src={profilePhotoPath} alt="Nizar Muala" className="profile-photo" onError={e => e.target.style.display = 'none'} />
<h1>Nizar Muala</h1>
<h2>Business Web Applications Developer | Master’s in Computer Information Systems (AI Specialization – In Progress)</h2>
</section>

<hr className="divider"/>

<section id="about" className="section">
<h2>About Me</h2>
<p>
Talented Software Engineer with 3+ years of experience building robust applications using Java, Spring Boot, and React. Skilled in front-end and back-end development, database management with MySQL & SQL Server, and delivering user-friendly solutions. Committed to collaboration, professional growth, and creating high-quality software products.
</p>
</section>

<hr className="divider"/>

<section id="experience" className="section">
<h2>Experience</h2>

<div className="experience-item">
<h3>Business Web Applications Developer (Whitestar Distributors Inc.)</h3>
<span>08/2025 - Present | Glendale, AZ</span>
<ul>
<li>Develop and maintain internal web-based applications supporting core business operations such as inventory tracking, sales management, and multi-branch coordination.</li>
<li>Build and enhance user interfaces for internal tools using React and modern front-end technologies.</li>
<li>Develop and implement RESTful APIs to support internal web application functionality.</li>
<li>Work with relational databases (MySQL, PostgreSQL) for data storage, retrieval, and reporting.</li>
<li>Use Git for version control in a collaborative development environment, and perform functional testing prior to deployment.</li>
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

<p><strong>Introduction:</strong> {selectedArtifact.introduction}</p>
<p><strong>Description:</strong> {selectedArtifact.description}</p>
<p><strong>Objective:</strong> {selectedArtifact.objective}</p>
<p><strong>Process:</strong> {selectedArtifact.process}</p>
<p><strong>Tools:</strong> {selectedArtifact.tools}</p>
<p><strong>Value Proposition:</strong> {selectedArtifact.valueProposition}</p>
<p><strong>Unique Value:</strong> {selectedArtifact.uniqueValue}</p>
<p><strong>Relevance:</strong> {selectedArtifact.relevance}</p>
<p><strong>References:</strong> {selectedArtifact.references}</p>

{selectedArtifact.link && (
<p>
<a href={selectedArtifact.link} target="_blank" rel="noopener noreferrer" style={{ color: '#82EFFF', textDecoration: 'underline', fontWeight: 500 }}>
Open Link
</a>
</p>
)}

{selectedArtifact.pdf && (
<p>
<a href={selectedArtifact.pdf} download style={{ color: '#82EFFF', textDecoration: 'underline', fontWeight: 500 }}>
Download PDF
</a>
</p>
)}

<button className="close-btn" onClick={() => setSelectedArtifact(null)}>Close</button>
</div>
</div>
)}

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
