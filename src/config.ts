export const siteConfig = {
  name: "Lucca Heineck",
  title: "Fullstack Developer",
  description: "Portfolio website of Lucca Heineck",
  accentColor: "#1d4ed8",
  social: {
    email: "luccacheineck@gmail.com",
    linkedin: "https://www.linkedin.com/in/lucca-heineck-7247a8288/",
    github: "https://github.com/LuccaHeineck",
  },
  aboutMe:
    "Software Engineering undergraduate (third year) with practical experience in full-stack development, particularly with Java, Spring Boot, Django, React, and PostgreSQL. Demonstrated adaptability and cross-cultural communication skills through academic exchange programs in Sweden and Canada. Highly motivated to contribute to innovative, scalable, and team-oriented software solutions in global, fast-paced environments.",
  skills: ["Java", "JavaScript", "React", "Python", "SQL", "Spring"],
  projects: [
    {
      name: "Resource Management System",
      description:
        "Full-stack web app for managing university resources with Built user authentication, role-based access, and reservation system.",
      link: "https://github.com/LuccaHeineck/sistema-de-recursos",
      skills: ["Django", "Python", "React", "Tailwind", "PostgreSQL"],
    },
    {
      name: "Multilayer Perceptron",
      description: "This project implements a custom Multilayer Perceptron (MLP) using NumPy to approximate nonlinear functions. It supports various activation functions and is trained using backpropagation and mean squared error. The model was tested on the following functions: exp(x), sin(x) / x, and sin(x) + cos(y). These experiments demonstrate the MLP's ability to learn and generalize complex patterns from data",
      link: "https://colab.research.google.com/drive/1cqaRxbkiRDx5Iyeg3QsEktpoUqVWAERf?authuser=1#scrollTo=xbKkEfj6DUb9",
      skills: ["Python", "Machine Learning", "Neural Networks", "Mathematics"],
    },
    {
      name: "Game List",
      description:
        "A full-stack web application for managing a personal game collection. Built with Spring Boot and React, it allows users to browse, categorize, and organize games into custom lists. The backend provides a RESTful API with pagination and filtering, while the frontend offers an intuitive interface for interacting with the data in real-time.",
      link: "https://github.com/LuccaHeineck/game_list",
      skills: ["React", "Tailwind", "Java", "Spring Boot", "MySQL"],
    },
  ],
  experience: [
    {
      company: "Benoit",
      title: "Software Development Intern",
      dateRange: "Jul 2024 - Dec 2024",
      bullets: [
        "Development of applications: Developed and maintained applications using Java, Spring, JPA/Hibernate, JSF and SQL.",
        "Assisted in the transition from Java 11 to Java 21, ensuring compatibility, testing, and performance optimization.",
        "Code optimization: Refactored legacy code to improve efficiency and maintainability.",
        "Collaborative work: Teamwork, discussed solutions and questions with colleagues in a team.",
      ],
    },
  ],
  education: [
    {
      school: "Univates, Lajeado, Brazil",
      degree: "Bachelor of Software Engineering",
      dateRange: "2023 - 2026",
      achievements: [
        "Academic Merit Scholarship: Awarded for 1st place overall in the Univates entrance exam.",
        "Relevant coursework: Data Structures, Databases, Development of Web Applications.",
        "Developed a Resource Management System for Univates, a full-stack application using Django, React, Tailwind, and PostgreSQL.",
      ],
    },
    {
      school: "Halmstad University, Sweden",
      degree: "Academic Exchange Program",
      dateRange: "Jan 2025 - Jul 2025",
      achievements: [
        "Participation in HighFive’s 24 hour Hackathon.",
        "Relevant coursework: Mathematics for Machine Learning, Web Systems Fundamentals and Databases, Human-Centered Artificial Intelligence.",
      ],
    },
  ],
};
