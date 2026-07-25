/**
 * Portfolio Central Configuration & Data File
 * 
 * Source of Truth: Pavani Jadhav Resume
 * All content in the portfolio website is dynamically loaded from this single file.
 */

export const portfolioData = {
  // 1. Personal & Hero Section Details
  personalInfo: {
    name: "Pavani Jadhav",
    firstName: "Pavani",
    lastName: "Jadhav",
    role: "Computer Engineering Student & Full-Stack Developer",
    typingRoles: [
      "Computer Engineering Student",
      "Full-Stack Developer",
      "Java & React Developer",
      "Data Analyst & Power BI Enthusiast",
      "Android Application Developer"
    ],
    shortIntro: "Computer Engineering Student with hands-on experience in Full-Stack Development, Data Analytics, and Java-based application development.",
    bio: "I am a Computer Engineering Student with hands-on experience in Full-Stack Development, Data Analytics, and Java-based application development. Experienced in building responsive web applications, Android solutions, interactive dashboards, and database-driven systems using Java, SQL, Power BI, React, and MySQL. Looking for an opportunity to apply my technical expertise, analytical thinking, and collaborative mindset to develop innovative and scalable software solutions while growing as a technology professional.",
    careerObjective: "Computer Engineering Student looking for an opportunity to apply my technical expertise, analytical thinking, and collaborative mindset to develop innovative and scalable software solutions while growing as a technology professional.",
    avatar: "/pavani-home.jpg",
    aboutImage: "/pavani-about.jpg",
    resumeUrl: "/Pavani_Jadhav_Resume.pdf",
    availability: "Seeking Software Engineering Roles & Internships",
    location: "Washim, Maharashtra, India",
    email: "pavanijadhav08@gmail.com",
    phone: "+91 8799981644",
  },

  // Social Links
  socialLinks: [
    { name: "GitHub", url: "https://github.com/pavanijadhav08", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pavanijadhav?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "Linkedin" },
    { name: "Mail", url: "mailto:pavanijadhav08@gmail.com", icon: "Mail" }
  ],

  // 2. About Me Quick Stats & Facts
  aboutStats: [
    { label: "B.Tech CGPA", value: "7.05" },
    { label: "Diploma Score", value: "84%" },
    { label: "Projects Completed", value: "5+" },
    { label: "Certifications", value: "6+" }
  ],

  aboutDetails: {
    degree: "B.Tech in Computer Engineering",
    university: "Cummins College of Engineering, Nagpur",
    place: "Washim, Maharashtra, India",
    experienceYears: "2024 - 2027",
    relocation: "Open to Software Engineering & Tech Roles",
  },

  // 3. Skills Section (Organized into exact requested categories)
  skills: {
    categories: [
      "All",
      "Programming Languages",
      "Frontend",
      "Backend",
      "Databases",
      "Data Analytics",
      "Tools",
      "Version Control",
      "Concepts"
    ],
    technical: [
      // Programming Languages
      { name: "C++", category: "Programming Languages", level: 85, icon: "FileCode" },
      { name: "Java", category: "Programming Languages", level: 90, icon: "Code" },
      { name: "SQL", category: "Programming Languages", level: 88, icon: "Database" },
      { name: "JavaScript", category: "Programming Languages", level: 85, icon: "FileCode2" },
      { name: "HTML/CSS", category: "Programming Languages", level: 90, icon: "Layout" },

      // Frontend
      { name: "React.js", category: "Frontend", level: 85, icon: "Atom" },
      { name: "HTML5 & CSS3", category: "Frontend", level: 90, icon: "Layout" },
      { name: "JavaScript (ES6+)", category: "Frontend", level: 85, icon: "FileCode" },

      // Backend
      { name: "Java & Spring Boot", category: "Backend", level: 82, icon: "Server" },
      { name: "Node.js Basics", category: "Backend", level: 75, icon: "Cpu" },

      // Databases
      { name: "MySQL", category: "Databases", level: 88, icon: "Database" },
      { name: "PostgreSQL", category: "Databases", level: 80, icon: "DatabaseBackup" },

      // Data Analytics
      { name: "Power BI", category: "Data Analytics", level: 88, icon: "Network" },
      { name: "Microsoft Excel", category: "Data Analytics", level: 85, icon: "Globe" },

      // Tools
      { name: "VS Code", category: "Tools", level: 92, icon: "Box" },
      { name: "Android Studio", category: "Tools", level: 85, icon: "Laptop" },

      // Version Control & Collaboration
      { name: "Git & GitHub", category: "Version Control", level: 88, icon: "GitBranch" },
      { name: "Jira & Plaky", category: "Version Control", level: 80, icon: "CheckCircle2" },

      // Core Concepts (From Resume)
      { name: "Object Oriented Programming (OOP)", category: "Concepts", level: 90, icon: "Code" },
      { name: "Data Structures & Algorithms (DSA)", category: "Concepts", level: 88, icon: "Cpu" },
      { name: "AI/ML Fundamentals", category: "Concepts", level: 82, icon: "Sparkles" },
      { name: "Data Analytics & Visualization", category: "Concepts", level: 88, icon: "Network" },
    ],
    softSkills: [
      { name: "Object Oriented Programming (OOP)", description: "Strong foundation in Java & C++ class structures and modular system design." },
      { name: "Data Structures & Algorithms (DSA)", description: "Analytical problem-solving mindset for efficient algorithm development." },
      { name: "AI/ML Fundamentals", description: "Configuring ML models for expense prediction and personalized recommendation logic." },
      { name: "Data Analytics & Visualization", description: "Transforming raw records into Power Query DAX models, KPI cards, and trend analytics." },
      { name: "Collaborative Development", description: "Teamwork and agile communication skills strengthened through scholarship development programs." }
    ]
  },

  // 4. Work Experience Timeline (Internships & Training from Resume)
  experience: [
    {
      id: 1,
      role: "Full-Stack Developer Intern",
      company: "Aavrajan.pvt.ltd",
      location: "Nagpur, India",
      period: "Feb 2026 – Present",
      type: "Internship",
      description: "Developing and maintaining frontend and backend features for the MoneyKauf fintech platform.",
      highlights: [
        "Developing and maintaining frontend and backend features for the MoneyKauf fintech platform.",
        "Building responsive user interfaces and implementing secure backend APIs with database integration using MySQL.",
        "Collaborating with the development team to improve application performance, fix bugs, and deliver new features."
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "MySQL", "Java", "Backend APIs"]
    },
    {
      id: 2,
      role: "Technical Skill Development Program",
      company: "Persistent Systems",
      location: "Hinjewadi, Pune, India",
      period: "Jul 2025",
      type: "Scholar Training Program",
      description: "Completed an intensive technical training program covering web development, programming, and software engineering concepts.",
      highlights: [
        "Completed an intensive technical training program covering web development, programming, and software engineering concepts.",
        "Strengthened problem-solving, communication, and professional development skills as a Kiran Scholar."
      ],
      technologies: ["Web Development", "Software Engineering", "Programming", "Problem Solving"]
    },
    {
      id: 3,
      role: "Full-Stack Developer Intern",
      company: "Microspectra.pvt.ltd",
      location: "Shegaon, India",
      period: "May 2023 - Jun 2023",
      type: "Internship",
      description: "Executed the implementation of a responsive landing page to support website promotion and enhance user engagement through social media marketing.",
      highlights: [
        "Executed the implementation of a responsive landing page to support website promotion and enhance user engagement through social media marketing.",
        "Created user-friendly web pages using HTML, CSS, and JavaScript."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design"]
    }
  ],

  // 5. Featured Projects (From Resume)
  projects: [
    {
      id: 1,
      title: "MoneyKauf – Cross Platform Currency Exchange Website and Android Application",
      category: "Full Stack",
      duration: "Feb 2026 – Present",
      shortDescription: "Cross-platform fintech currency exchange website and Android application with secure real-time conversions.",
      description: "Developed MoneyKauf cross-platform currency exchange website and Android application with secure real-time conversions. Implemented multi-country support including India, Nepal, UAE, Sri Lanka, USA with fixed transaction fee system. Built using React, HTML, CSS, JavaScript, MySQL, and Java, XML ensuring scalable user experience.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "HTML", "CSS", "JavaScript", "MySQL", "Java", "XML"],
      github: "https://github.com/pavanijadhav08/MoneyKauf--Subadmin-panel",
      liveDemo: null,
      featured: true,
      highlights: [
        "Secure real-time currency conversion engine",
        "Multi-country support including India, Nepal, UAE, Sri Lanka, USA",
        "Fixed transaction fee management system",
        "Built using React, HTML, CSS, JavaScript, MySQL, Java, and XML"
      ]
    },
    {
      id: 2,
      title: "WalletWise AI – AI Powered Personal Finance Tracker",
      category: "Full Stack",
      duration: "2026 – Present",
      shortDescription: "AI-powered personal finance tracker with machine learning spending models and Chart.js dashboards.",
      description: "Programmed AI-powered personal finance tracker using React, Spring Boot, and MySQL for expense management. Configured machine learning models for expense prediction, spending analysis, and personalized savings recommendations. Built interactive dashboards with Chart.js featuring budget tracking, financial reports, and expense visualization.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Spring Boot", "MySQL", "Chart.js", "AI/ML"],
      github: "https://github.com/pavanijadhav08/Ai-Finance-Tracker",
      liveDemo: null,
      featured: true,
      highlights: [
        "Configured machine learning models for expense prediction and spending analysis",
        "Personalized savings recommendations system",
        "Interactive dashboards with Chart.js for budget tracking and financial reports",
        "Expense management architecture using React, Spring Boot, and MySQL"
      ]
    },
    {
      id: 3,
      title: "Hospital Patient Waitlist Analysis Dashboard",
      category: "Data Analytics",
      duration: "March 2026",
      shortDescription: "Power BI dashboard analyzing 25M+ hospital patient waitlist records with Power Query & DAX.",
      description: "Enhanced a Power BI dashboard to analyze 25M+ hospital patient waitlist records, tracking Inpatient, Outpatient. Built an optimized data model using Power Query and DAX, performing data cleaning, transformation, measures. Created KPI cards, donut, line, and bar charts to track waitlists, waiting times, specialty performance, and monthly trends.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      technologies: ["Power BI", "Power Query", "DAX", "Data Analytics"],
      github: "https://github.com/pavanijadhav08/Hospital-Waitlist-Analysis-Dashboard",
      liveDemo: null,
      featured: true,
      highlights: [
        "Analyzed 25M+ hospital patient waitlist records tracking Inpatient & Outpatient metrics",
        "Optimized data model using Power Query and DAX for cleaning, transformation, and measures",
        "Created KPI cards, donut, line, and bar charts for wait times and specialty performance"
      ]
    },
    {
      id: 4,
      title: "Smart Health Monitoring System using Raspberry Pi",
      category: "IoT / Hardware",
      duration: "Dec 2025",
      shortDescription: "Raspberry Pi-based patient vital sign tracking system with sensor monitoring and emergency alerts.",
      description: "Engineered a Raspberry Pi-based health monitoring system for real-time patient vital sign tracking. Integrated temperature and pulse sensors for real-time vital monitoring and emergency alert generation. Automated digital health record management with sensor data processing and patient monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      technologies: ["Raspberry Pi", "Sensors", "Python", "IoT"],
      github: "https://github.com/pavanijadhav08/IOT-Based-Health-Monitor-System/blob/main/README.md",
      liveDemo: null,
      featured: false,
      highlights: [
        "Raspberry Pi-based health monitoring system for vital sign tracking",
        "Integrated temperature and pulse sensors for emergency alert generation",
        "Automated digital health record management with sensor data processing"
      ]
    },
    {
      id: 5,
      title: "Mobile Based Single Window Application for Student",
      category: "Mobile App",
      duration: "Aug 2023 – Apr 2024",
      shortDescription: "Centralized Android mobile application giving students access to academic services.",
      description: "Developed a centralized mobile application providing students easy access to essential academic services. Integrated modules including notes, previous year papers, faculty details, and company information. Modeled an intuitive user interface ensuring smooth navigation and enhanced overall student experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
      technologies: ["Java", "Android Studio", "XML", "Android SDK"],
      github: "https://github.com/pavanijadhav08",
      liveDemo: null,
      featured: false,
      highlights: [
        "Centralized mobile application providing access to academic services",
        "Integrated modules for notes, previous year papers, faculty & company details",
        "Intuitive user interface ensuring smooth navigation"
      ]
    }
  ],

  // 6. Certifications (Populated from Resume)
  certifications: [
    {
      id: 1,
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      date: "Completed",
      link: "https://drive.google.com/file/d/1_wAu6patFSp6vIcdPMkf0T0K0pCahtbS/view?usp=drivesdk",
      badge: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Introduction To Generative AI",
      issuer: "LinkedIn Learning & Simplilearn",
      date: "Completed",
      link: "https://drive.google.com/file/d/1u5Kg7i39NLYmx-Fbo2XfssZw3VS9ex2k/view?usp=drivesdk",
      badge: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Data Analytics Certification",
      issuer: "Cisco",
      date: "Completed",
      link: "https://drive.google.com/file/d/1qHkYaOnKyDOC7uhb2bmdcHIpRk3J0iP0/view?usp=drivesdk",
      badge: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Completed",
      link: "https://drive.google.com/file/d/1zW3AkvrSC1b2DTu2LboGJsDWnH-zoF4b/view?usp=drivesdk",
      badge: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      title: "SQL Analytics Certification",
      issuer: "Simplilearn",
      date: "Completed",
      link: "https://drive.google.com/file/d/1ybVlm0qLJqxrZAgp7ww7J_Be6zJhrueG/view?usp=drivesdk",
      badge: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 6,
      title: "Advanced Database Management System",
      issuer: "YashIndustries",
      date: "Completed",
      link: "https://drive.google.com/file/d/1uJCgWfmiloSXI-PWkidND5-r_yWrtUmV/view?usp=drivesdk",
      badge: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80"
    }
  ],

  // 7. Achievements (Populated from Resume)
  achievements: [
    {
      id: 1,
      title: "Scholarship | Persistent Foundation",
      organization: "Persistent System",
      date: "Jul 2025",
      description: "Awarded by Persistent Foundation as Kiran Scholar for 40/1500 applicants.",
      icon: "Trophy"
    },
    {
      id: 2,
      title: "Scholarship | Lila Poonawalla Foundation",
      organization: "Lila Poonawalla Foundation",
      date: "Merit-Cum-Need Award",
      description: "Awarded the LPF a merit-cum-need based scholarship supporting academically talented girls in higher education.",
      icon: "Award"
    }
  ],

  // 8. Education Timeline (Populated from Resume)
  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Engineering",
      institution: "Cummins College of Engineering, Nagpur",
      location: "Nagpur, Maharashtra, India",
      period: "2024 - 2027",
      grade: "CGPA: 7.05",
      details: "Pursuing B.Tech in Computer Engineering with specialized coursework in Data Structures, Algorithms, Object Oriented Programming, DBMS, and Web Application Architecture.",
      activities: ["Kiran Scholar - Persistent Foundation", "Lila Poonawalla Foundation Scholar"]
    },
    {
      id: 2,
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic, Washim",
      location: "Washim, Maharashtra, India",
      period: "2021 – 2024",
      grade: "Percentage: 84%",
      details: "Completed Diploma in Information Technology with 84% score, building hands-on programming, database design, and web development skills.",
      activities: ["First Class Distinction", "Academic Project Developer"]
    }
  ],

  // 9. Contact Section Details
  contact: {
    heading: "Get in Touch",
    subheading: "Looking for an opportunity to apply my technical expertise in Full-Stack Development and Data Analytics. Feel free to contact me!",
    email: "pavanijadhav08@gmail.com",
    phone: "+91 8799981644",
    location: "Washim, Maharashtra, India",
    responseTime: "Open for Software Engineering Opportunities"
  },

  // 10. Footer Section Details
  footer: {
    brandText: "Pavani Jadhav",
    quote: "Thank you for visiting my portfolio! Let's connect and build scalable software solutions together. 🚀",
    copyright: "Designed & Developed with Passion. All rights reserved.",
    year: "2026"
  }
};
