import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate developer with a strong interest in Artificial Intelligence and Quantum Computing. With a focus on cutting-edge technologies, I am continuously honing my skills in both software development and quantum computing. My goal is to leverage my expertise in these fields to create innovative solutions that push the boundaries of technology and contribute to the future of computing.`;

export const ABOUT_TEXT = `I am a dedicated and versatile second-year student at the University of Toronto with a passion for Artificial Intelligence and Quantum Computing. My journey began with a deep curiosity about the transformative potential of AI and the principles of quantum mechanics, evolving into a commitment to advancing these cutting-edge technologies. I am actively engaged in innovative projects that push the boundaries of technology and scientific understanding. Thriving in collaborative environments, I enjoy tackling complex problems and contributing to impactful solutions. Outside of my studies, I stay engaged with the latest technological trends and actively participate in the AI and Quantum communities. I am eager to connect with professionals and researchers in these fields and explore new opportunities for collaboration.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Sentiment Analysis for Predicting Stock Trend",
    image: project1,
    description:
      "A deep learning project that analyzes the sentiment of tweets and news articles to predict stock trends (up or down). The project includes data preprocessing, sentiment analysis using FinBERT and RoBERTa models, and predictive modeling with PyTorch.",
    technologies: ["Python", "PyTorch", "Scikit-learn", "Pandas", "Matplotlib", ],
    link: "https://github.com/ompatech/Sentiment-Analysis-and-Stock-Market"
  },
  {
    title: "Quantum Computing Simulations and Qiskit Summer School",
    image: project2,
    description:
      "This project highlights techniques from the Qiskit Summer School, covering quantum circuit transpilation, execution on noisy hardware, and advanced topics like quantum combinatorial optimization and Hamiltonian dynamics. It also explores quantum machine learning, demonstrating how quantum algorithms can enhance traditional ML methods.",
    technologies: ["Python", "Qiskit", "IBM Quantum Platform"],
  },
  {
    title: "Blocky Game",
    image: project3,
    description:
      "Blocky Game is a customizable block-based game where players can create, modify, and explore dynamic environments. It highlights game structure design, including level creation, player interaction, and mechanics, with a focus on user experience and gameplay.",
    technologies: ["Python", "PyGame"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact form using EmailJs.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/ompatech/react-portfolio-om"
  },
];

export const CONTACT = {
  address: "85 Charles Street West, Toronto, Ontario, M5S 1K5",
  phoneNo: "+1 289-828-6792",
  email: "ompatel.patel@mail.utoronto.ca",
};
