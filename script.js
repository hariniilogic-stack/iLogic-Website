(function() {
  const app = document.getElementById("app");
  if (!app) return;
  const page = document.body.dataset.page;
  let currentCountry = "SG";
  const logo = "src/assets/logo.png";
  const heroImage = "src/assets/Systems.png";
  const aboutImage = "about2.jpg";
  const aboutPartnerImage = "src/assets/languagecert/languagecert-7.jpg";
  const aboutExpertiseImage = "src/assets/expertise-hero.png";
  const aboutTrainingImage = "src/assets/products/product-9.png";
  const aboutInfrastructureImage = "src/assets/Networking.png";
  const languageCertLogo = "src/assets/languagecert/language-cert1.png";
  const celpipPartnerLogo = "src/assets/partners/celpip-partner.jpeg";
  const academicPartnerLogo = "src/assets/partners/partneddr5 - Copy.jpg";
  const globalCertificateLogo = "src/assets/partners/global.png";
  const examBannerImage = "Indian_banner_C.webp";
  const hrEmail = "hr@ilogic.com.sg";
  const countryOptions = [{
    code: "SG",
    label: "Singapore",
    flag: "https://GlobalArtInc.github.io/round-flags/flags/sg.svg"
  }, {
    code: "IN",
    label: "India",
    flag: "https://GlobalArtInc.github.io/round-flags/flags/in.svg"
  }];
  const navLinks = [{
    label: "About",
    href: "index.html#about",
    countries: ["SG"]
  }, {
    label: "Services",
    href: "index.html#services",
    submenu: [
      ["Software Development", "service.html?slug=software-development"],
      ["Web Applications", "service.html?slug=web-applications"],
      ["Mobile Apps", "service.html?slug=mobile-apps"],
      ["AI / ML", "service.html?slug=ai-ml"],
      ["Networking", "service.html?slug=networking"],
      ["Cybersecurity", "service.html?slug=cybersecurity"],
      ["CCTV Surveillance", "service.html?slug=cctv-surveillance"],
      ["Internship Program", "internship.html"],
      ["Language Training", "languagecert.html"]
    ],
    countries: ["SG"]
  }, {
    label: "Solutions",
    href: "index.html#solutions",
    submenu: [
      ["Web POS", "solution.html?slug=ilogic-web-pos"],
      ["Dine Application", "solution.html?slug=ilogic-dine"],
      ["ERP Management", "solution.html?slug=ilogic-cloud-erp"],
      ["AI POS", "solution.html?slug=ilogic-ai-pos"],
      ["CMS System", "solution.html?slug=ilogic-cms"],
      ["CRM System", "solution.html?slug=ilogic-crm"]
    ],
    countries: ["SG"]
  }, {
    label: "Products",
    href: "index.html#products",
    submenu: [
      ["AI POS Scale", "project.html?slug=ai-pos-scale"],
      ["POS Terminal", "project.html?slug=pos-terminal"],
      ["F&B POS Kiosk", "project.html?slug=fnb-pos-kiosk"],
      ["Cash Management", "project.html?slug=cash-management"],
      ["Barcode Scanner", "project.html?slug=barcode-scanner"],
      ["Thermal Printer", "project.html?slug=thermal-printer"]
    ],
    countries: ["SG", "IN"]
  }, {
    label: "Portfolio",
    href: "index.html#clients",
    submenu: [
      ["Our Clients", "index.html#clients"],
      ["Partners", "index.html#partners"],
      ["Gallery", "index.html#gallery"],
      ["Reviews", "index.html#reviews"]
    ],
    countries: ["SG"]
  }, {
    label: "Career",
    href: "#",
    submenu: [
      ["Internship", "internship.html"],
      ["Job Opportunities", "jobs.html"],
      ["Final Year Projects", "projects.html"]
    ],
    countries: ["SG", "IN"]
  }, {
    label: "Examination",
    href: "exam.html",
    submenu: [
      ["LanguageCert Exams", "exam.html#exam-languagecert"],
      ["CELPIP Exams", "exam.html#exam-celpip"],
      ["Academic Partner (BeingCert)", "exam.html#exam-academic-partner"],
      ["Global Certification Programs", "exam.html#exam-global-certifications"],
      ["Exam Enquiry", "exam.html#exam-enquiry"],
      ["Feedback", "exam.html#exam-feedback"]
    ],
    countries: ["IN"]
  }, {
    label: "Contact",
    href: "index.html#contact",
    countries: ["SG", "IN"]
  }];
  const examCategories = [
    ["LanguageCert Exams", "Global English certification pathways for study, work, and migration goals.", "languagecert"],
    ["CELPIP Exams", "Canadian English proficiency testing support for immigration, professional, and career goals.", "celpip"],
    ["Academic Partner", "Official BeingCert-aligned academic partnership support with guided counselling.", "academic"],
    ["Global Certifications", "Industry-recognized exam tracks in cloud, networking, security, and administration.", "global"]
  ];
  const certificationPrograms = [
    ["AWS", "Cloud Practitioner, Solutions Architect, Developer, and operations-focused certification tracks."],
    ["Cisco", "CCNA, enterprise networking, security, routing, switching, and infrastructure pathways."],
    ["Azure", "Microsoft Azure fundamentals, administration, architecture, security, and DevOps certifications."],
    ["CompTIA", "A+, Network+, Security+, and core IT certifications for foundational career growth."],
    ["Google Cloud", "Cloud engineering, architecture, Kubernetes, data, and modern infrastructure programs."],
    ["Red Hat", "Linux administration, RHCSA, RHCE, automation, and enterprise platform credentials."]
  ];
  const examDomainDetails = {
    languagecert: {
      title: "LanguageCert Academic English Exam",
      eyebrow: "English Language Training",
      summary: "LanguageCert Academic is presented in the PPT as a globally recognized English proficiency pathway for students who need to prove their communication skills for higher education, study-abroad plans, and international academic environments.",
      intro: "This dedicated exam page keeps the same iLogic experience while organizing the LanguageCert information from the PPT into a clearer, slightly detailed format. It highlights recognition, exam structure, practical benefits, and the kind of students this pathway is designed for.",
      levels: ["Academic-purpose English certification", "Four-skill assessment model", "Multi-level test structure", "Suitable for higher education admission", "Designed for real-world academic communication"],
      benefits: ["Recognized by universities and institutions in the UK, Australia, New Zealand, Canada, the USA, Ireland, and many other countries worldwide.", "Helps students demonstrate the English proficiency needed for admission where English is the language of instruction.", "Supports not only assessment but also development of real-world academic English skills.", "Strengthens readiness for studying, presenting, writing, reading, and communicating in international academic environments."],
      extras: ["The PPT describes it as a four-skill, multi-level test of English communicative ability for academic purposes.", "It is intended for students planning to enter higher education institutions and needing a recognized proof of language proficiency.", "The presentation highlights global reach using figures such as 100+ countries, 200+ countries and territories, and 3300+ institutions.", "The exam focus is practical communication, not only theory, so learners build language confidence that is useful inside real academic settings."],
      rounds: [
        ["Listening", "Measures how effectively a student can understand spoken English in academic and practical communication contexts."],
        ["Reading", "Evaluates the ability to understand written English, identify meaning, and work with information from academic-style texts."],
        ["Writing", "Assesses how clearly and accurately a candidate can produce structured written English for academic use."],
        ["Speaking", "Checks spoken communication ability, fluency, clarity, and confidence in English interaction."],
        ["Academic Readiness Outcome", "Together, these four parts are positioned in the PPT as preparation for surviving, thriving, and flourishing in an English-medium academic environment."]
      ],
      overviewTitle: "LanguageCert Overview",
      overviewIntro: "The information below is organized from the PPT into clear sections while keeping your app's design language.",
      roundsTitle: "Exam Structure",
      roundsIntro: "The PPT emphasizes a four-skill model, so this page presents those exam components as the core structure of the assessment.",
      backHref: "exam.html#exam-languagecert"
    },
    aws: {
      title: "AWS Certification Programs",
      eyebrow: "Cloud Certification Domain",
      summary: "Structured AWS certification guidance for foundational, associate, and professional-level candidates preparing for cloud operations, architecture, and deployment roles.",
      intro: "Our AWS exam support page keeps the same iLogic experience while organizing the exam journey into a dedicated flow for learners who need clarity before they register.",
      levels: ["Cloud Practitioner", "Solutions Architect", "Developer", "SysOps Administrator", "Security and Specialty tracks"],
      rounds: [
        ["Profile Counselling", "Discuss your current experience, target role, and the AWS certification path that best fits your background."],
        ["Eligibility and Registration Guidance", "Get help with account setup, exam selection, preferred slot planning, and documentation review before booking."],
        ["Preparation and Revision", "Receive syllabus-level guidance, preparation priorities, revision checkpoints, and support around key AWS services."],
        ["Mock Assessment Review", "Run through practice questions, scenario-based discussion, and last-mile correction before the final exam."],
        ["Final Exam Support", "Complete the certification attempt with timing guidance, exam-day readiness tips, and post-exam next-step advice."]
      ],
      benefits: ["Improves visibility for cloud and DevOps roles", "Builds confidence in AWS services, architecture, and governance", "Supports migration, operations, and solution design careers", "Creates a stronger profile for global project opportunities"],
      extras: ["Recommended for freshers, cloud engineers, support teams, and solution architects", "Useful for organizations standardizing cloud skills across teams", "Can be aligned with role-based upskilling and interview preparation"]
    },
    cisco: {
      title: "Cisco Certification Programs",
      eyebrow: "Networking Certification Domain",
      summary: "Cisco certification support for candidates building careers in networking, enterprise infrastructure, routing, switching, and security operations.",
      intro: "This page organizes the Cisco journey separately so candidates can understand the stages, support model, and benefits before they enquire.",
      levels: ["CCNA", "CCNP Enterprise", "Security tracks", "Collaboration tracks", "Specialist certifications"],
      rounds: [
        ["Course and Domain Mapping", "Identify whether you should begin with associate-level networking or move into a more specialized Cisco track."],
        ["Exam Planning", "Review exam code, syllabus scope, expected knowledge level, and recommended preparation sequence."],
        ["Technical Preparation", "Focus on routing, switching, wireless, troubleshooting, and network security concepts relevant to the selected exam."],
        ["Scenario and Lab Review", "Practice configuration logic, diagnostic reasoning, and exam-style problem solving."],
        ["Exam Completion and Progression", "Finalize the attempt and map the next certification or job role progression step after the result."]
      ],
      benefits: ["Strengthens networking fundamentals and troubleshooting confidence", "Supports infrastructure, NOC, and enterprise admin careers", "Helps candidates build credibility in routing and switching roles", "Improves employability in MSP, telecom, and enterprise environments"],
      extras: ["Strong fit for network support engineers and aspiring system administrators", "Useful for candidates targeting enterprise infrastructure roles", "Can be paired with security or cloud pathways for broader growth"]
    },
    azure: {
      title: "Microsoft Azure Certification Programs",
      eyebrow: "Microsoft Cloud Domain",
      summary: "Azure exam guidance for candidates preparing for administration, cloud operations, architecture, and Microsoft ecosystem roles.",
      intro: "The Azure page groups the complete exam flow into a dedicated experience so learners can review rounds, benefits, and support without leaving the app design.",
      levels: ["AZ-900 Fundamentals", "Administrator", "Developer", "Solutions Architect", "Security and Data roles"],
      rounds: [
        ["Goal Assessment", "Choose the right Azure exam based on prior experience, current job profile, and expected cloud responsibilities."],
        ["Registration Support", "Understand the right exam code, scheduling path, and platform steps before booking."],
        ["Preparation Roadmap", "Review core Azure services, identity, governance, virtual networking, and cost-management topics."],
        ["Practice and Readiness Check", "Validate readiness using mock questions, concept revision, and weak-area tracking."],
        ["Exam and Next Certification Planning", "Complete the exam with support around final preparation and identify the next Microsoft pathway after the result."]
      ],
      benefits: ["Builds cloud confidence inside the Microsoft ecosystem", "Supports admin, infra, and architect career paths", "Improves readiness for enterprise cloud transformation projects", "Adds value for hybrid cloud and Windows-based environments"],
      extras: ["Recommended for system admins, freshers, and cloud transition candidates", "Useful for organizations adopting Microsoft cloud services", "Pairs well with security, DevOps, and data-focused learning plans"]
    },
    comptia: {
      title: "CompTIA Certification Programs",
      eyebrow: "Core IT Domain",
      summary: "CompTIA exam support for candidates who need a strong base in hardware, networking, security, and entry-level IT problem solving.",
      intro: "This dedicated page gives each CompTIA pathway its own structure while preserving your current visual system and exam UI style.",
      levels: ["IT Fundamentals", "A+", "Network+", "Security+", "Server+ and related tracks"],
      rounds: [
        ["Foundation Review", "Decide whether you need a beginner-friendly track or a role-specific certification based on your current level."],
        ["Exam Selection and Planning", "Review the best-fit CompTIA exam, sequence, and preparation timeline."],
        ["Concept Preparation", "Cover the objective domains including devices, networking, operating systems, troubleshooting, and security basics."],
        ["Mock Review and Gap Fixing", "Use practice-led revision to identify weak areas and improve exam confidence."],
        ["Certification Attempt", "Proceed with the final exam and plan your next step into networking, support, cybersecurity, or systems roles."]
      ],
      benefits: ["Builds a practical entry point into IT and support careers", "Improves confidence in troubleshooting and system fundamentals", "Creates a stronger base before advanced certifications", "Helps freshers present validated technical knowledge to employers"],
      extras: ["Best suited for beginners, service desk aspirants, and junior engineers", "Commonly used as a first certification before cloud or security specializations", "Supports interview preparation for foundational technical roles"]
    },
    "google-cloud": {
      title: "Google Cloud Certification Programs",
      eyebrow: "Modern Cloud Domain",
      summary: "Google Cloud certification guidance for candidates interested in cloud engineering, data platforms, architecture, and modern infrastructure delivery.",
      intro: "This page separates Google Cloud exams into their own destination so users can browse the path, benefits, and enquiry form with the same app theme.",
      levels: ["Cloud Digital Leader", "Associate Cloud Engineer", "Professional Cloud Architect", "Data and Security tracks"],
      rounds: [
        ["Role Alignment", "Map the correct Google Cloud certification to your job goal, cloud experience, and technical depth."],
        ["Scheduling Guidance", "Support candidates in understanding exam flow, account setup, and booking preparation."],
        ["Technical Readiness", "Cover services related to compute, storage, IAM, networking, Kubernetes, and data workflows."],
        ["Practice Validation", "Use review checkpoints and mock discussion to improve readiness before the real test."],
        ["Exam Attempt and Growth Plan", "Finish the exam process and decide the next certification or specialization path."]
      ],
      benefits: ["Supports roles in cloud engineering and platform operations", "Improves familiarity with modern cloud-native tooling", "Adds value for infrastructure, data, and container-focused careers", "Demonstrates readiness for scalable cloud environments"],
      extras: ["Relevant for engineers working with modern application stacks", "Helpful for candidates moving toward DevOps, SRE, or cloud ops roles", "Can be aligned with data and analytics learning paths"]
    },
    "red-hat": {
      title: "Red Hat Certification Programs",
      eyebrow: "Linux and Automation Domain",
      summary: "Red Hat certification support for learners building expertise in Linux administration, automation, enterprise operations, and platform reliability.",
      intro: "The Red Hat page keeps the same design language while giving this exam domain a dedicated structure for rounds, benefits, and enquiry handling.",
      levels: ["RHCSA", "RHCE", "Automation and Ansible tracks", "Enterprise platform pathways"],
      rounds: [
        ["Track Consultation", "Identify whether the candidate should begin with administration fundamentals or move into advanced automation roles."],
        ["Exam and Lab Planning", "Review the practical nature of the certification, expected skill depth, and best timeline for preparation."],
        ["Hands-on Preparation", "Focus on Linux administration, services, permissions, networking, shell work, and automation workflows."],
        ["Performance Validation", "Practice task-based execution and exam-style time management before the final attempt."],
        ["Final Attempt and Advancement", "Take the certification with better readiness and plan the next enterprise Linux or automation milestone."]
      ],
      benefits: ["Builds strong Linux administration credibility", "Supports infrastructure, DevOps, and platform engineering careers", "Improves practical task execution in enterprise environments", "Adds value for automation and server management roles"],
      extras: ["Strong match for administrators, DevOps learners, and support engineers", "Useful in enterprise and data-center aligned environments", "Well suited for candidates who prefer practical, hands-on assessments"]
    }
  };
  const examFeedbackSocials = [
    ["Instagram", "https://www.instagram.com/ilogictech_madurai/?hl=en", "instagram"],
    ["Facebook", "https://www.facebook.com/azeemul.safeeq", "facebook"],
    ["LinkedIn", "https://www.linkedin.com/feed/", "linkedin"]
  ];
  const enquiryNumbers = [{
    label: "+65 90175062",
    whatsapp: "6590175062"
  }, {
    label: "+91 72000 05541",
    whatsapp: "917200005541"
  }];
  const socialPlatforms = [
    ["instagram", "https://www.instagram.com/"],
    ["x", "https://x.com/"],
    ["linkedin", "https://www.linkedin.com/"],
    ["facebook", "https://www.facebook.com/"],
    ["youtube", "https://www.youtube.com/"]
  ];
  const internshipTracks = [{
    id: "full-stack-development",
    title: "Full Stack Development",
    summary: "React, Node.js, databases, APIs, and deployment pipelines.",
    keywords: ["full stack", "frontend", "backend", "react", "node", "api", "database", "web development"]
  }, {
    id: "ai-and-machine-learning",
    title: "AI and Machine Learning",
    summary: "Python, NLP, computer vision, and data science workflows.",
    keywords: ["ai", "machine learning", "python", "nlp", "computer vision", "data science"]
  }, {
    id: "cloud-computing",
    title: "Cloud Computing",
    summary: "AWS, Azure, DevOps, containerization, and microservices.",
    keywords: ["cloud", "aws", "azure", "devops", "containers", "microservices"]
  }, {
    id: "cybersecurity",
    title: "Cybersecurity",
    summary: "Ethical hacking, network security, compliance, and auditing.",
    keywords: ["cybersecurity", "security", "ethical hacking", "compliance", "audit", "network security"]
  }, {
    id: "ui-and-ux-design",
    title: "UI and UX Design",
    summary: "Figma, user research, prototyping, and design systems.",
    keywords: ["ui", "ux", "design", "figma", "prototype", "research", "design systems"]
  }, {
    id: "data-engineering",
    title: "Data Engineering",
    summary: "ETL pipelines, SQL and NoSQL, data platforms, and analytics.",
    keywords: ["data engineering", "etl", "sql", "nosql", "analytics", "data platform"]
  }];
  const internshipJourney = ["1. Apply: Submit your application online.", "2. Assessment: Technical screening and interview.", "3. Training: Hands-on project-based learning.", "4. Project: Real-world client project work.", "5. Certification: Receive your completion certificate.", "6. Career: Job placement assistance."];
  const internshipRequirements = ["Basic programming knowledge", "English proficiency", "Laptop with internet", "Passion to learn", "18+ years old"];
  const products = [
    ["ai-pos-scale", "AI POS Scale", "src/assets/products/product-9.png", "Smart weighing with AI-powered POS integration for retail and supermarkets.", ["AI recognition", "Auto pricing", "Touch display"]],
    ["pos-terminal", "POS Terminal", "src/assets/products/product-15.png", "All-in-one point of sale system for seamless business operations.", ["Fast checkout", "Inventory sync", "Multi-payment"]],
    ["fnb-pos-kiosk", "F&B POS Kiosk", "src/assets/products/product-10.png", "Self-service kiosk for food and beverage operations with intuitive ordering.", ["Self-ordering", "Menu display", "Queue management"]],
    ["cash-management", "Cash Management System", "src/assets/products/product-11.png", "Advanced cash management system for secure and efficient handling.", ["Bill counting", "Counterfeit detection", "Auto sorting"]],
    ["cash-drawer", "Cash Drawer", "src/assets/products/product-12.png", "Durable cash storage solution for retail environments.", ["Heavy duty", "Auto open", "Multi-slot"]],
    ["barcode-scanner", "Barcode Scanner", "src/assets/products/product-14.png", "High-speed barcode reading for efficient operations.", ["1D/2D scan", "Wireless", "Fast decode"]],
    ["thermal-printer", "Thermal Printer", "src/assets/products/product-13.png", "High-speed thermal receipt printer for business needs.", ["High speed", "Auto cutter", "USB/WiFi"]]
  ];
  const productDetailPoints = {
    "ai-pos-scale": {
      highlights: ["AI-based weighing support for modern retail counters", "Automatic pricing linked with product weight", "Fast touchscreen workflow for staff convenience", "Improves billing accuracy during checkout", "Suitable for supermarkets and grocery stores"],
      overview: ["AI-powered product recognition for faster weighing workflows", "Automatic price calculation linked with POS operations", "Responsive touch display for quick cashier interaction", "Suitable for retail counters and supermarket environments"],
      benefits: ["Fast and accurate weighing performance", "Seamless POS integration for billing", "User-friendly touch interface", "Reduced manual pricing errors", "Reliable support for busy stores"]
    }
  };
  const services = [
    ["software-development", "Software Development Application", "Enterprise software solutions for business automation, productivity, and digital transformation.", ["AI-Powered Development", "Enterprise Software Solutions", "Cloud-Native Architecture", "API Integration Services"],
      ["We craft modern software applications with scalable architecture, resilient engineering practices, and business-focused delivery.", "Our solutions are designed for long-term growth, seamless integrations, and high performance across evolving digital environments.", "From discovery to deployment, we build systems that accelerate transformation and support measurable business outcomes."]
    ],
    ["web-applications", "Web Application", "Scalable, high-performance web applications engineered with modern frameworks, cloud-native technologies, and user-centric design to deliver seamless digital experiences and robust business solutions.", ["Responsive Web Development", "Frontend & Backend Solutions", "API Integration", "Performance Optimization"],
      ["We build web applications with modern frontend experiences, scalable backend systems, and cloud-ready delivery models.", "Every solution is optimized for speed, usability, security, and long-term maintainability across business-critical workflows.", "Our engineering approach combines user-centric design with robust architecture to deliver dependable digital products."]
    ],
    ["mobile-apps", "Mobile Application", "High-performance mobile applications built with cutting-edge technologies, delivering seamless user experiences, scalable architectures, and near-native performance across all devices and platforms.", ["Android & iOS Development", "Cross-Platform Solutions", "AI-Integrated Applications", "Security & Performance Optimization"],
      ["We develop mobile applications that combine polished user experiences with scalable engineering and high runtime performance.", "Our team delivers native and cross-platform solutions tailored for business growth, reliability, and evolving customer expectations.", "From architecture to launch, we focus on secure, intelligent, and future-ready mobile ecosystems."]
    ],
    ["ai-ml", "AI/ML", "Applied artificial intelligence and machine learning solutions that automate decisions, uncover insights, and improve customer experiences with production-ready models.", ["Predictive Analytics", "Computer Vision", "AI Chatbots & NLP", "MLOps & Model Deployment"],
      ["We design AI/ML systems that move beyond prototypes into practical business workflows with measurable impact.", "Our team supports data preparation, model development, integration, and operationalization for real-world use cases.", "Each solution is aligned to accuracy, scalability, governance, and day-to-day usability across business teams."]
    ],
    ["networking", "Network Infrastructure & Connectivity", "Next-generation networking solutions engineered for high availability, ultra-fast performance, and secure data transmission empowering businesses with scalable, resilient, and future-ready digital connectivity.", ["Network Design & Planning", "Router & Switch Configuration", "SDN & Hybrid Infrastructure", "Network Monitoring"],
      ["We design and implement resilient networking environments built for speed, uptime, scalability, and secure connectivity.", "Our infrastructure services cover enterprise routing, switching, hybrid environments, and intelligent monitoring across modern operations.", "Each deployment is aligned to performance goals, security standards, and the demands of future-ready digital growth."]
    ],
    ["cybersecurity", "Cybersecurity", "Comprehensive, intelligence-driven cybersecurity solutions designed to safeguard digital ecosystems, mitigate advanced threats, and ensure resilient, compliant, and secure business operations in an evolving threat landscape.", ["Threat Detection", "Vulnerability Assessmen", "Endpoint Security", "Risk & Compliance Management"],
      ["We provide proactive cybersecurity services that help organizations defend infrastructure, users, applications, and sensitive data.", "Our strategy blends threat intelligence, prevention, detection, and response to reduce risk across complex digital environments.", "We also support compliance, governance, and long-term resilience through structured security programs and continuous assessment."]
    ],
    ["cctv-surveillance", "CCTV", "Next-generation surveillance solutions combining intelligent video analytics, real-time monitoring, and advanced security integration to deliver proactive threat detection and 24/7 situational awareness.", ["IP Camera Installation", "Remote Monitoring", "AI Video Analytics", "Access Control Systems"],
      ["We deliver surveillance systems that combine smart camera deployment, remote visibility, and integrated physical security workflows.", "Our solutions use intelligent analytics and real-time monitoring to strengthen situational awareness and proactive threat response.", "From design to deployment, we build secure, scalable CCTV ecosystems for modern commercial and enterprise environments."]
    ],
    ["internship-program", "Internship", "Industry-oriented internship experiences that blend mentorship, hands-on delivery, and project-based learning to prepare students for real technology roles.", ["LanguageCert Preparation", "Communication Skills", "Interview Training", "Global Career Support"],
      ["We create internship journeys that connect classroom learning to practical product and service delivery environments.", "Participants learn by building, collaborating, and presenting work shaped by real business expectations.", "The program strengthens confidence, technical skill, communication, and career readiness for entry-level opportunities."]
    ],
    ["language-training", "Language Training", "Career-focused English language training designed to improve communication, certification readiness, and global employability for students and professionals.", ["LanguageCert Certification Training", "Speaking, Reading, Writing & Listening Skills", "Interview & Professional Communication", "International Career Support"],
      ["We support learners with structured language training built around measurable improvement and certification readiness.", "Programs combine communication practice, expert guidance, and progression support for academic and professional goals.", "Each batch is designed to improve confidence, clarity, and readiness for international opportunities."]
    ]
  ];
  const serviceDetails = {
    "software-development": {
      deliverables: ["Business Web Applications", "API Integration & Automation", "Secure Scalable Architecture", "Deployment & Ongoing Support"],
      process: ["Requirement Analysis", "Architecture Planning", "Agile Development", "Testing & Continuous Improvement"],
      outcomes: ["Faster Business Operations", "Scalable Business Systems", "Seamless System Integration", "Maintainable Software Solutions"],
      idealFor: "Organizations that need custom platforms, automation tools, customer portals, or internal business applications tailored to their workflow."
    },
    "web-applications": {
      deliverables: ["Responsive web experiences optimized for desktop and mobile", "Frontend applications built with modern SPA and PWA patterns", "Backend services, APIs, and admin control panels", "Performance tuning, security hardening, and analytics setup"],
      process: ["Product planning focused on user journeys and core actions", "Interface design aligned to brand and usability goals", "Full-stack development with modular, testable components", "Launch readiness, optimization, and support handover"],
      outcomes: ["Fast, consistent experiences across browsers and devices", "Improved conversion, usability, and operational efficiency", "Reliable performance under growing traffic and usage", "A future-ready platform that supports new features easily"],
      idealFor: "Businesses launching customer-facing portals, dashboards, booking systems, ecommerce workflows, or internal web tools."
    },
    "mobile-apps": {
      deliverables: ["Native and cross-platform mobile applications", "Secure login, notifications, offline-ready flows, and API connectivity", "Admin dashboards and backend services for app operations", "Store submission support and release management"],
      process: ["Requirement mapping for core user journeys and device needs", "UX planning for simple, intuitive app interactions", "Iterative builds with testing across screen sizes and platforms", "Publishing, monitoring, and update planning after launch"],
      outcomes: ["Consistent mobile experiences with strong runtime performance", "Faster adoption through polished design and smooth navigation", "Reliable sync between mobile apps and backend systems", "A scalable foundation for future features and integrations"],
      idealFor: "Brands building customer apps, field-service tools, staff apps, delivery platforms, booking apps, or mobile extensions of existing systems."
    },
    "ai-ml": {
      deliverables: ["Use-case discovery, data strategy, and model design", "Predictive models, recommendation engines, and automation workflows", "NLP, chatbot, and computer-vision solution integration", "Deployment pipelines, monitoring, and continuous optimization"],
      process: ["Identify the highest-value business use cases and available data sources", "Prepare datasets, validate quality, and define measurable performance goals", "Develop, test, and integrate models into real operational workflows", "Monitor outcomes and improve accuracy, speed, and business impact over time"],
      outcomes: ["Smarter decision-making with faster access to business insights", "Reduced manual effort through automation and intelligent assistance", "Improved customer experience via personalization and predictive support", "Scalable AI capabilities aligned with governance and production reliability"],
      idealFor: "Organizations exploring automation, predictive analytics, intelligent customer support, vision systems, or AI-enabled decision workflows."
    },
    cybersecurity: {
      deliverables: ["Risk assessments, vulnerability scans, and security reviews", "Incident response planning and remediation guidance", "Endpoint, network, and access-control hardening", "Compliance-aligned documentation and security governance support"],
      process: ["Assess current infrastructure, applications, and exposure points", "Prioritize risks based on business impact and likelihood", "Implement controls for prevention, detection, and response", "Review continuously with reporting and improvement actions"],
      outcomes: ["Reduced attack surface across users, systems, and applications", "Faster response to incidents and security events", "Stronger compliance posture and internal security discipline", "Higher confidence in business continuity and digital resilience"],
      idealFor: "Organizations that need practical protection for infrastructure, cloud systems, remote teams, business applications, and regulated operations."
    },
    networking: {
      deliverables: ["Network design for offices, branches, and hybrid environments", "Router, switch, VLAN, firewall, and wireless configuration", "Monitoring, redundancy, and failover planning", "Structured documentation and support for ongoing operations"],
      process: ["Assess current connectivity, performance, and growth requirements", "Design topology and security policies around business usage", "Deploy and test routing, segmentation, and device performance", "Monitor, optimize, and support the live environment"],
      outcomes: ["Stable connectivity with improved speed and availability", "Secure and segmented network access across teams and locations", "Reduced downtime through monitoring and redundancy planning", "Infrastructure that supports long-term digital growth"],
      idealFor: "Retail chains, offices, warehouses, hospitality sites, and growing businesses that depend on dependable, secure connectivity."
    },
    "cctv-surveillance": {
      deliverables: ["Smart CCTV deployment with camera planning and placement", "Remote monitoring, storage, and centralized visibility setup", "AI-enabled analytics, alerts, and event tracking", "Integration with access control and physical security workflows"],
      process: ["Survey the site and identify key coverage zones", "Plan camera types, storage, and monitoring requirements", "Install, configure, and test analytics and access integrations", "Train teams and support the system after go-live"],
      outcomes: ["Improved visibility across facilities, entrances, and operations", "Faster identification of incidents and unusual activity", "Better coordination between surveillance and access control", "A scalable physical security platform for future expansion"],
      idealFor: "Commercial spaces, offices, campuses, retail locations, warehouses, and facilities that need always-on visibility and smarter physical security."
    }
  };
  const serviceExperienceDetails = {
    "software-development": {
      heroTitle: "Software Development Excellence",
      heroText: "Custom software solutions that streamline business operations and accelerate digital transformation.",
      stats: [
        ["300", "Software Projects"],
        ["99", "Client Satisfaction"],
        ["24", "Hour Support"]
      ],
      capabilityTitle: "Enterprise Software Solutions",
      capabilities: [
        ["Desktop Applications", "High-performance desktop applications with modern UI and seamless integration.", ["Cross-Platform Development", "Native Performance", "Modern UI/UX Design", "System Integration"]],
        ["Enterprise Software", "Scalable enterprise solutions for secure and efficient business operations.", ["Microservices Architecture", "Enterprise Security", "Scalable Infrastructure", "API Integration"]],
        ["Custom Development", "Tailored software solutions designed for your unique business requirements.", ["Requirements Analysis", "Custom Architecture", "Agile Development", "Quality Assurance"]],
        ["Database Solutions", "Secure and scalable database solutions for high-performance applications.", ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"]],
        ["API Development", "Secure API solutions for seamless connectivity and system integration.", ["RESTful APIs", "GraphQL Implementation", "API Documentation", "Security & Authentication"]],
        ["Software Maintenance", "Reliable software support, updates, and performance optimization.", ["Bug Fixes & Updates", "Performance Monitoring", "Security Patches", "Feature Enhancements"]]
      ],
      stacks: [
        ["Programming Languages", ["JavaScript", "Python", "Java", "C#", "PHP", "TypeScript"]],
        ["Frameworks & Libraries", ["React", "Angular", "Vue.js", "Node.js", "Spring Boot", "Laravel"]],
        ["Databases & Tools", ["PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Git", "Redis"]]
      ],
      journeyTitle: "End-to-End Software Development",
      journey: [
        ["Requirements Analysis", "Comprehensive analysis of business requirementsBusiness requirement analysis and solution planning., user needs, and technical specifications."],
        ["System Design", "Scalable system architecture and database design."],
        ["Development", "Agile software development using modern technologies."],
        ["Testing & QA", "Quality assurance through comprehensive testing and validation."],
        ["Deployment", "Secure deployment, monitoring, and ongoing technical support."]
      ],
      ctaTitle: "Build Your Next Software Solution",
      ctaText: "Custom software development designed for business growth and innovation.",
      primaryCta: "Start Development",
      secondaryCta: "Consultation",
      primaryHref: "index.html#contact",
      secondaryHref: "index.html#contact"
    },
    "web-applications": {
      heroTitle: "Web Application Development",
      heroText: "Custom web application development using modern frameworks, secure architecture, and responsive design.",
      stats: [
        ["200", "Web Projects"],
        ["98", "Client Satisfaction"],
        ["50", "Technologies"]
      ],
      capabilityTitle: "Comprehensive Web Solutions",
      capabilities: [
        ["Frontend Development", "Creating stunning, responsive user interfaces with modern frameworks and cutting-edge design principles.", ["Responsive Design", "Progressive Web Apps", "Single Page Applications", "Cross-browser Compatibility"]],
        ["Backend Development", "Building robust, scalable server-side applications with secure APIs and efficient database management.", ["RESTful APIs", "GraphQL Integration", "Microservices Architecture", "Database Optimization"]],
        ["E-commerce Solutions", "Developing powerful online stores with secure payment processing and inventory management systems.", ["Payment Gateway Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"]],
        ["Performance Optimization", "Enhancing website speed, SEO, and user experience through advanced optimization techniques.", ["Core Web Vitals", "SEO Optimization", "Code Splitting", "CDN Integration"]]
      ],
      stacks: [
        ["Frontend Technologies", ["React", "Vue.js", "Angular", "TypeScript"]],
        ["Backend Technologies", ["Node.js", "Python", "PHP", "Databases"]],
        ["Platform Focus", ["Modern UI Systems", "Cloud APIs", "Security Layers", "Performance Engineering"]]
      ],
      journeyTitle: "Our Development Process",
      journey: [
        ["01 Discovery & Planning", "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap."],
        ["02 Design & Prototyping", "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development."],
        ["03 Development & Testing", "Building your application with clean, maintainable code and rigorous testing throughout the development cycle."],
        ["04 Deployment & Support", "Launching your application with proper monitoring, maintenance, and ongoing support for optimal performance."]
      ],
      ctaTitle: "Ready to Build Your Next Web Application?",
      ctaText: "Let's discuss your project and create something amazing together",
      primaryCta: "Start Your Project",
      secondaryCta: "View Portfolio",
      primaryHref: "index.html#contact",
      secondaryHref: "index.html#solutions"
    },
    "mobile-apps": {
      heroTitle: "Mobile App Development",
      heroText: "Building high-performance iOS, Android, and cross-platform apps for startups, SMEs, and enterprises across Madurai, Pondicherry, Tamil Nadu, and Singapore.",
      stats: [
        ["24/7", "Support"],
        ["100%", "Client Satisfaction"],
        ["3", "Countries Served"],
        ["10+", "Technologies"]
      ],
      capabilityTitle: "Multi-Platform Excellence",
      capabilities: [
        ["iOS Development", "Native iOS apps using Swift and Objective-C with seamless integration into the Apple ecosystem.", ["Swift & SwiftUI", "App Store Optimization", "Core Data Integration", "Push Notifications"]],
        ["Android Development", "High-performance Android applications using Kotlin and Java with Material Design principles.", ["Kotlin & Java", "Material Design", "Google Play Services", "Firebase Integration"]],
        ["Cross-Platform", "Efficient cross-platform solutions using React Native and Flutter for faster development cycles.", ["React Native", "Flutter Development", "Code Reusability", "Native Performance"]],
        ["Specialized App Solutions", "Business, commerce, healthcare, education, and social applications built around real user workflows.", ["E-commerce Apps", "Healthcare Apps", "Education Apps", "Business Apps"]]
      ],
      stacks: [
        ["Platform Delivery", ["iOS", "Android", "React Native", "Flutter"]],
        ["Core Features", ["Push Notifications", "Offline Mode", "API Integration", "Secure Auth"]],
        ["Growth Support", ["Store Submission", "Analytics", "Performance Tuning", "Release Management"]]
      ],
      journeyTitle: "Mobile App Development Journey",
      journey: [
        ["Ideation & Strategy", "Market research, competitor analysis, and feature planning to define your app's unique value proposition."],
        ["UI/UX Design", "Creating intuitive user interfaces and seamless user experiences with wireframes and interactive prototypes."],
        ["Development", "Building your app with clean, scalable code, implementing features, and integrating third-party services."],
        ["Testing & QA", "Comprehensive testing across devices, performance optimization, and quality assurance protocols."],
        ["Launch & Support", "App store submission, marketing support, and ongoing maintenance with regular updates."]
      ],
      ctaTitle: "Ready to Build Your Mobile App?",
      ctaText: "Transform your idea into a powerful mobile application that users love",
      primaryCta: "Start Your App",
      secondaryCta: "View App Portfolio",
      primaryHref: "index.html#contact",
      secondaryHref: "index.html#solutions"
    },
    "ai-ml": {
      heroTitle: "AI/ML Solutions",
      heroText: "Practical artificial intelligence and machine learning solutions designed to automate workflows, elevate customer experiences, and unlock better business decisions.",
      stats: [
        ["40", "AI Use Cases"],
        ["96", "Model Accuracy"],
        ["24", "Hour Monitoring"]
      ],
      capabilityTitle: "Applied Intelligence Services",
      capabilities: [
        ["Predictive Analytics", "Forecast demand, identify trends, and improve planning with data-driven predictive models.", ["Demand Forecasting", "Risk Scoring", "Sales Predictions", "Trend Modeling"]],
        ["Intelligent Automation", "Automate repetitive tasks and decision workflows using machine learning and business rules.", ["Workflow Automation", "Document Processing", "Classification", "Recommendation Logic"]],
        ["Computer Vision", "Deploy visual intelligence for monitoring, quality checks, recognition, and operational visibility.", ["Object Detection", "Image Classification", "Visual Inspection", "Smart Surveillance Integration"]],
        ["NLP & Conversational AI", "Build chatbots, assistants, and language processing systems that improve support and engagement.", ["Chatbots", "Sentiment Analysis", "Knowledge Search", "Voice & Text Automation"]]
      ],
      stacks: [
        ["Core Technologies", ["Python", "TensorFlow", "PyTorch", "Scikit-Learn"]],
        ["Data & Deployment", ["Pandas", "MLOps", "APIs", "Cloud Inference"]],
        ["Business Focus", ["Automation", "Forecasting", "Vision Systems", "Conversational AI"]]
      ],
      journeyTitle: "AI Delivery Roadmap",
      journey: [
        ["Discover", "Identify high-value use cases, data readiness, and measurable business goals."],
        ["Prepare", "Clean, structure, and validate datasets while defining model success criteria."],
        ["Build", "Train, test, and refine models using the right algorithms and evaluation methods."],
        ["Deploy", "Integrate models into production systems, dashboards, or user-facing workflows."],
        ["Optimize", "Monitor outcomes continuously and improve performance, accuracy, and operational fit."]
      ],
      ctaTitle: "Ready to Put AI to Work?",
      ctaText: "Turn your data and workflows into intelligent systems with practical, scalable AI delivery.",
      primaryCta: "Discuss AI Use Cases",
      secondaryCta: "View Solutions",
      primaryHref: "index.html#contact",
      secondaryHref: "index.html#solutions"
    },
    cybersecurity: {
      heroTitle: "Cyber Security",
      heroText: "Comprehensive cybersecurity solutions to protect your digital assets, ensure compliance, and defend against evolving cyber threats.",
      stats: [
        ["99.9", "Threat Detection"],
        ["24", "Hour Monitoring"],
        ["0", "Security Breaches"]
      ],
      capabilityTitle: "Comprehensive Security Solutions",
      capabilities: [
        ["Penetration Testing", "Comprehensive security assessments to identify vulnerabilities before attackers do.", ["Network Penetration Testing", "Web Application Testing", "Social Engineering Tests", "Detailed Remediation Reports"]],
        ["Security Monitoring", "24/7 security operations center services with real-time threat detection and response.", ["SIEM Implementation", "Real-time Monitoring", "Incident Response", "Threat Intelligence"]],
        ["Identity & Access Management", "Secure identity solutions with multi-factor authentication and privileged access management.", ["Multi-Factor Authentication", "Single Sign-On", "Privileged Access Management", "Identity Governance"]],
        ["Data Protection", "Advanced encryption and data loss prevention solutions to protect sensitive information.", ["Data Encryption", "Data Loss Prevention", "Backup & Recovery", "Privacy Compliance"]],
        ["Security Training", "Comprehensive security awareness training to educate employees about cyber threats.", ["Phishing Simulations", "Security Awareness Training", "Compliance Training", "Security Culture Development"]],
        ["Compliance Management", "Ensure regulatory compliance with industry standards and frameworks.", ["GDPR Compliance", "HIPAA Compliance", "SOX Compliance", "ISO 27001 Implementation"]]
      ],
      stacks: [
        ["Current Threat Landscape", ["Malware & Ransomware", "Phishing Attacks", "Insider Threats", "Cloud Security Risks"]],
        ["Protection Areas", ["Endpoints", "Applications", "Networks", "Identity"]],
        ["Operating Model", ["Assess", "Protect", "Detect", "Respond", "Recover"]]
      ],
      journeyTitle: "Our Security Framework",
      journey: [
        ["01 Assess", "Comprehensive security assessment to identify current vulnerabilities and risks."],
        ["02 Protect", "Implement robust security controls and protective measures across all systems."],
        ["03 Detect", "Deploy advanced monitoring and detection systems for real-time threat identification."],
        ["04 Respond", "Rapid incident response and containment to minimize impact and damage."],
        ["05 Recover", "Business continuity planning and recovery procedures to restore normal operations."]
      ],
      ctaTitle: "Secure Your Digital Future",
      ctaText: "Protect your business with enterprise-grade cybersecurity solutions",
      primaryCta: "Security Assessment",
      secondaryCta: "Contact Security Expert",
      primaryHref: "index.html#contact",
      secondaryHref: "index.html#contact"
    },
    networking: {
      heroTitle: "Network Infrastructure",
      heroText: "End-to-end LAN, WAN, wireless, firewall, cloud, and monitoring solutions engineered for scalability, redundancy, and high availability.",
      stats: [
        ["99", "Network Uptime"],
        ["10", "Gbps Capacity"],
        ["500", "Devices Managed"]
      ],
      capabilityTitle: "Comprehensive Network Solutions",
      capabilities: [
        ["Network Design & Architecture", "Custom network topology design with scalable architecture for optimal performance and future growth.", ["Network Topology Design", "Capacity Planning", "Performance Optimization", "Scalability Assessment"]],
        ["Wireless Solutions", "Enterprise-grade wireless networks with seamless coverage, high-speed connectivity, and advanced security.", ["Wi-Fi 6/6E Implementation", "Site Survey & Planning", "Guest Network Setup", "Wireless Security"]],
        ["Network Security", "Multi-layered security solutions including firewalls, intrusion detection, and access control systems.", ["Firewall Configuration", "VPN Solutions", "Intrusion Detection", "Access Control"]],
        ["Network Monitoring", "24/7 network monitoring with real-time alerts, performance analytics, and proactive maintenance.", ["Real-time Monitoring", "Performance Analytics", "Alert Management", "Predictive Maintenance"]],
        ["Data Center Networking", "High-performance data center networks with redundancy, load balancing, and disaster recovery.", ["Core Infrastructure", "Load Balancing", "Redundancy Planning", "Disaster Recovery"]],
        ["Network Maintenance", "Comprehensive maintenance services including updates, troubleshooting, and performance optimization.", ["Regular Updates", "Troubleshooting", "Performance Tuning", "Documentation"]]
      ],
      stacks: [
        ["Network Equipment", ["Cisco", "Juniper", "Aruba", "Fortinet"]],
        ["Protocols & Standards", ["BGP/OSPF", "IPSec", "802.11ax", "Ethernet"]],
        ["Support Coverage", ["On-site Support", "Remote Support", "RCA", "Disaster Recovery"]]
      ],
      journeyTitle: "Network Delivery Roadmap",
      journey: [
        ["Assess", "Evaluate topology, bottlenecks, device health, and expansion needs across the environment."],
        ["Design", "Define secure architecture, segmentation, redundancy, and performance targets."],
        ["Deploy", "Configure routers, switches, wireless systems, firewalls, and hybrid connectivity."],
        ["Monitor", "Track performance, alerts, and uptime with proactive analytics and reporting."],
        ["Optimize", "Tune the network continuously for growth, resilience, and business continuity."]
      ],
      ctaTitle: "Ready to Upgrade Your Network?",
      ctaText: "Build a robust, secure, and scalable network infrastructure for your business",
      primaryCta: "Network Assessment",
      secondaryCta: "Contact Network Expert",
      primaryHref: "index.html#contact",
      secondaryHref: "index.html#contact"
    },
    "cctv-surveillance": {
      heroTitle: "CCTV Surveillance",
      heroText: "Advanced surveillance systems with AI-powered analytics, real-time monitoring, and comprehensive security solutions to protect your assets and ensure safety.",
      stats: [
        ["4", "K Resolution"],
        ["24", "Hour Monitoring"],
        ["99", "Detection Accuracy"]
      ],
      capabilityTitle: "Advanced Surveillance Solutions",
      capabilities: [
        ["IP Camera Systems", "High-definition IP cameras with night vision, motion detection, and remote access.", ["4K Ultra HD", "Night Vision", "Motion Detection", "Remote Access"]],
        ["AI-Powered Analytics", "Facial recognition, behavior analysis, and real-time alerts powered by AI.", ["Facial Recognition", "Behavior Analysis", "Object Detection", "Automated Alerts"]],
        ["Mobile Monitoring", "24/7 mobile app access with real-time notifications and cloud backup.", ["Mobile Access", "Instant Alerts", "Cloud Storage", "Multi-device Support"]],
        ["Professional Camera Solutions", "Specialized camera formats for indoor, outdoor, perimeter, and intelligent tracking requirements.", ["Dome Cameras", "Bullet Cameras", "PTZ Cameras", "Thermal Cameras"]]
      ],
      stacks: [
        ["Camera Types", ["Dome", "Bullet", "PTZ", "Thermal"]],
        ["Core Capabilities", ["Remote Viewing", "Cloud Backup", "Smart Alerts", "Access Integration"]],
        ["Deployment Focus", ["Commercial Sites", "Retail Spaces", "Warehouses", "Campuses"]]
      ],
      journeyTitle: "Surveillance Deployment Journey",
      journey: [
        ["Assessment", "Review site layout, blind spots, storage needs, and operational risk points."],
        ["Design", "Map camera coverage, analytics zones, control access, and monitoring workflows."],
        ["Installation", "Deploy cameras, storage, connectivity, and app access with full system testing."],
        ["Monitoring", "Enable continuous alerts, analytics, and operational visibility across devices."],
        ["Support", "Maintain footage retention, system health, and future-ready security expansion."]
      ],
      ctaTitle: "Secure Your Property Today",
      ctaText: "Implement advanced surveillance systems with AI-powered monitoring and analytics",
      primaryCta: "Security Assessment",
      secondaryCta: "Contact Security Expert",
      primaryHref: "index.html#contact",
      secondaryHref: "index.html#contact"
    }
  };
  const solutions = [
    ["ilogic-web-pos", "Web POS", "Browser-based POS system accessible from any device with real-time cloud sync.", ["Cloud-based", "Multi-device", "Real-time sync"], "iLogic Web POS works across desktops, tablets, and smartphones with real-time inventory sync, analytics, and multi-location management.", "src/assets/Our Solutions/Web POS.png"],
    ["ilogic-dine", "Dine Application", "Complete restaurant management with table ordering, kitchen display, and delivery.", ["Table management", "KDS integration", "Delivery tracking"], "iLogic Dine covers dine-in, takeaway, and delivery with menu management, split billing, order tracking, and QR self-ordering.", "src/assets/Our Solutions/Hotel Dine App.png"],
    ["ilogic-cloud-erp", "ERP Management", "Enterprise resource planning with finance, HR, inventory, and procurement modules.", ["Finance and HR", "Inventory", "Multi-branch"], "iLogic Cloud ERP integrates finance, HR, inventory, procurement, project management, and CRM into one scalable platform.", "src/assets/Our Solutions/ERP.png"],
    ["ilogic-ai-pos", "AI POS", "AI-powered POS with smart product recognition and predictive analytics.", ["AI recognition", "Predictive analytics", "Smart pricing"], "iLogic AI POS uses artificial intelligence for product recognition, inventory forecasting, dynamic pricing, and personalized promotions.", "src/assets/Our Solutions/AI POS.png"],
    ["ilogic-cms", "CMS System", "Content management system for businesses to manage digital content and communications.", ["Page builder", "Multi-language", "SEO tools"], "iLogic CMS lets businesses manage websites, signage, and content from one platform.", "src/assets/Our Solutions/CMS.png"],
    ["ilogic-transportation", "Transportation Application", "Fleet management and logistics tracking for transportation companies.", ["GPS tracking", "Route optimization", "Fleet management"], "iLogic Transportation App provides vehicle tracking, dispatch, fuel monitoring, maintenance scheduling, and reporting.", "src/assets/Our Solutions/Transporation App.png"],
    ["ilogic-hospital-management", "Hospital Management", "Complete hospital management with patient records, billing, and appointment scheduling.", ["EMR", "Appointments", "Pharmacy"], "iLogic Hospital Management covers registration, medical records, billing, pharmacy, telemedicine, and inventory workflows.", "src/assets/Our Solutions/Hospital Management.png"],
    ["ilogic-crm", "CRM System", "Customer relationship management for sales pipeline and customer engagement.", ["Lead management", "Email automation", "Analytics"], "iLogic CRM System helps businesses manage sales pipelines, automations, tasks, and analytics in one platform.", "src/assets/Our Solutions/CRM.png"],
    ["ilogic-tailor", "Tailor Application", "Custom tailoring management with measurements, orders, and delivery tracking.", ["Measurements", "Order tracking", "Fabric inventory"], "iLogic Tailor Application supports tailoring businesses with measurement templates, inventory, reminders, and business analytics.", "src/assets/Our Solutions/Tailor App.png"],
    ["ilogic-hotel-management", "Hotel Management", "Hotel property management with reservations, housekeeping, and guest services.", ["Reservations", "Housekeeping", "Guest services"], "iLogic Hotel Management covers reservations, housekeeping, check-in and check-out, and revenue analytics.", "src/assets/Our Solutions/Hotel Management.png"]
  ];
  const solutionExperienceDetails = {
    "ilogic-web-pos": {
      eyebrow: "Cloud POS Platform",
      headline: "Web POS System for Small Businesses",
      intro: "A browser-based POS platform that lets businesses manage billing, inventory, sales, and customer data from anywhere without installing software.",
      stats: [
        ["Any", "Device Access"],
        ["Real-time", "Inventory"],
        ["Cloud", "Backup"]
      ],
      video: {
        src: "Video/pos.mp4",
        cues: ["Cloud-based POS for retail and F&B businesses.", "Manage billing, inventory, and customer data from any device.", "Get real-time analytics, offline sync, and secure staff access.", "Scale from one outlet to multiple locations with ease."]
      },
      sections: [{
        title: "Why Choose iLogic Tech's Web POS?",
        body: ["Our Web POS is designed for small and medium businesses that need a practical, affordable, and flexible cloud-based system.", "From user-friendly billing screens to secure cloud storage and live syncing, the platform adapts to your business without adding unnecessary complexity."]
      }, {
        title: "Key Features",
        items: ["Cloud-based access", "Multiple payment methods including UPI, card, cash, and wallets", "Real-time inventory tracking", "Advanced sales reports and analytics", "Quick billing and digital receipts", "Role-based staff access", "Offline mode with auto sync"]
      }, {
        title: "Industries We Serve",
        items: ["Retail shops", "Supermarkets", "Salons", "Restaurants", "Cafes", "Footwear stores", "Garment stores", "Mobile shops", "Electronics shops", "Jewellery stores", "Hardware shops"]
      }, {
        title: "Benefits of a Cloud-Based POS",
        items: ["No installation required", "Access from any device", "Automatic updates", "Data backup and security", "Access data from anywhere, anytime", "Lower hardware costs", "Real-time syncing across devices or branches"]
      }, {
        title: "How It Empowers Small Businesses",
        items: ["Simple, intuitive design with minimal training", "Affordable pricing with no hidden charges", "Insights for smarter decisions", "Easy setup and 24/7 support", "Reduced manual errors", "Better customer experience", "Simplified daily operations"]
      }, {
        title: "Real-Time Sales, Inventory and Billing",
        items: ["Track stock levels instantly", "Generate invoices with one click", "Monitor sales trends across branches", "Identify best-selling products quickly"]
      }, {
        title: "Built to Grow",
        items: ["Multi-location support", "Centralized inventory management", "Multiple user logins with access control", "Integrations with eCommerce or delivery partners"]
      }, {
        title: "FAQs",
        faqs: [
          ["Do I need internet to use Web POS?", "Internet is required for cloud access and real-time data, but offline billing is available for uninterrupted sales."],
          ["Can I integrate Web POS with my existing system?", "Yes. iLogic Web POS supports API-based integration with ERP, CRM, and accounting systems."],
          ["Is it suitable for multiple branches?", "Yes. It supports centralized control and real-time tracking across multiple locations."],
          ["How secure is my business data?", "Data is encrypted, stored securely in the cloud, backed up regularly, and protected with role-based access."]
        ]
      }],
      ctaTitle: "Get Started with iLogic Web POS Today",
      ctaText: "Contact iLogic Tech for a free demo or consultation and launch a faster, smarter, cloud-ready POS setup."
    },
    "ilogic-dine": {
      eyebrow: "Restaurant POS",
      headline: "iLogic Dine - Restaurant POS System",
      intro: "A complete F&B POS platform for dine-in restaurants, cafes, food courts, QSRs, and cloud kitchens with ordering, kitchen workflows, and payment control in one place.",
      stats: [
        ["200", "Restaurants"],
        ["4", "Rating Star"],
        ["50", "Orders / Hour"]
      ],
      sections: [{
        title: "Smart Dining Starts with Smart Technology",
        body: ["Running a restaurant today is about speed, accuracy, guest experience, and operational efficiency. iLogic Dine helps restaurants manage tables, orders, payments, kitchen communication, and delivery channels from one system.", "It is built to support front-of-house service, back-of-kitchen coordination, and real-time management insight."]
      }, {
        title: "Solving Real Challenges for F&B Businesses",
        items: ["Reduce slow table turnover and order mistakes with table management and QR ordering", "Get real-time sales analytics, stock tracking, and low inventory alerts", "Accept contactless payments, split bills, and digital wallets", "Consolidate online orders from multiple delivery platforms", "Automate receipts, tax calculations, and revenue tracking across dine-in, takeaway, and online sales"]
      }, {
        title: "Why iLogic Dine Stands Out",
        items: ["Cloud-based and mobile-ready access", "Kitchen display system for streamlined order fulfillment", "Digital menu and QR code ordering", "Customer and table management", "Built for both single outlets and multi-outlet chains"]
      }, {
        title: "Who It's Built For",
        items: ["Restaurants and cafes", "Cloud kitchens", "Food courts", "Quick-service restaurants", "Chains and franchises"]
      }, {
        title: "The iLogic Advantage",
        items: ["Real-time reports and sales dashboards", "Reduced order errors and manual work", "Faster billing and better customer experience", "Lower operational costs and reduced waste", "A platform designed for growth and expansion"]
      }],
      ctaTitle: "Ready to Transform Your Restaurant?",
      ctaText: "Power your restaurant with faster service, smarter insights, and total control from front-of-house to back-of-kitchen."
    },
    "ilogic-cloud-erp": {
      eyebrow: "Enterprise Platform",
      headline: "Web Based ERP Solutions for Small Businesses in 2025",
      intro: "A modern cloud ERP platform that centralizes finance, inventory, HR, sales, and operations into one scalable system for growth-focused businesses.",
      stats: [
        ["100", "Enterprises"],
        ["50", "Cost Savings %"],
        ["15", "Modules"]
      ],
      sections: [{
        title: "What Is Cloud ERP?",
        body: ["Cloud ERP is an internet-based system that automates and connects core business processes from finance and inventory to HR and customer support through one platform.", "Because it runs in the cloud, teams get secure, real-time access from anywhere without maintaining heavy on-premise infrastructure."]
      }, {
        title: "Why It Matters in 2025",
        items: ["Growing demand for automation", "Need for real-time analytics", "Remote and hybrid work models", "Stronger focus on security and compliance", "Integration with AI, IoT, and third-party tools"]
      }, {
        title: "Key Trends",
        items: ["AI-powered decision support", "Mobile-first interfaces", "Modular and scalable deployment", "Seamless integration with business tools", "Real-time collaboration", "Affordable SaaS pricing"]
      }, {
        title: "Who Can Benefit?",
        items: ["Retailers and wholesalers", "Manufacturers", "Restaurants and cafes", "Service-based businesses", "Startups and tech firms", "Multi-branch enterprises"]
      }, {
        title: "Core Features",
        items: ["Centralized dashboard for all departments", "Automated billing and invoicing", "Smart inventory management", "Integrated CRM and lead tracking", "Real-time financial reports", "Role-based access and data encryption", "Mobile-friendly access", "Custom integrations"]
      }, {
        title: "How It Helps You Grow",
        items: ["Streamline operations and reduce manual work", "Gain real-time business insights", "Save costs with cloud infrastructure", "Collaborate better across departments", "Work remotely with secure mobile access"]
      }],
      ctaTitle: "Ready to Future-Proof Your Business?",
      ctaText: "Let iLogic Cloud ERP help you unify operations, improve decision-making, and scale with confidence."
    },
    "ilogic-ai-pos": {
      eyebrow: "AI-Powered Retail",
      headline: "AI POS (Object Detection)",
      intro: "A next-generation retail POS system combining intelligent billing, live stock visibility, predictive analytics, and centralized multi-store control.",
      stats: [
        ["95", "AI Accuracy %"],
        ["30", "Sales Boost %"],
        ["24", "Hour Learning"]
      ],
      sections: [{
        title: "Solving Real Retail Challenges",
        items: ["Reduce long queues and manual billing errors with automated lookup and discounts", "Improve stock visibility with live tracking and AI-based demand forecasting", "See real-time performance across top products, peak hours, and staff output", "Control multiple outlets with centralized pricing, promotions, and reporting", "Accept cash, cards, QR, e-wallets, and split billing from one checkout flow"]
      }, {
        title: "The iLogic AI POS Advantage",
        items: ["AI-driven billing and product intelligence", "Cloud-based POS access from anywhere", "Retail analytics dashboard", "Multi-store management", "Customizable and scalable deployment"]
      }, {
        title: "Trusted by Retailers",
        items: ["Faster checkout times", "Fewer stock mismanagement issues", "Higher customer satisfaction", "More store-wide visibility and control", "Consistent performance across locations"]
      }, {
        title: "More Than POS",
        body: ["iLogic AI POS is designed to bring AI into daily retail operations so businesses can run smarter, sell faster, and scale with confidence.", "It supports both standalone stores and expanding retail groups with a practical, high-visibility operating model."]
      }],
      ctaTitle: "Ready to Sell Smarter, Faster and Better?",
      ctaText: "Bring AI-powered retail intelligence into your checkout, stock planning, and store operations."
    },
    "ilogic-cms": {
      eyebrow: "Cash Management",
      headline: "iLogic CMS",
      intro: "A smart Cash Management System plus POS platform for retail, supermarkets, multi-outlet stores, and category-driven businesses that need tighter control over transactions.",
      stats: [
        ["99", "Transaction Accuracy %"],
        ["24", "Secure Access"],
        ["500", "Branch Integrations +"]
      ],
      sections: [{
        title: "What Is a Cash Management System?",
        body: ["A Cash Management System helps businesses monitor, secure, and reconcile cash transactions with greater speed and accuracy.", "iLogic CMS combines this capability with POS workflows to support businesses that need strong transaction control at scale."]
      }, {
        title: "Where It Is Used",
        items: ["Retail stores and supermarkets", "Restaurants and F&B outlets", "Electronics and mobile stores", "Hotels, salons, and service centers", "Multi-outlet or franchise businesses"]
      }, {
        title: "What We Offer",
        items: ["Faster billing", "Reduced cash mishandling", "Real-time business insights", "Lower operational costs", "A future-ready, scalable setup"]
      }, {
        title: "Business Benefits",
        items: ["Real-time cash tracking", "Reduced theft and human error", "Faster reconciliation", "Smarter decision-making", "Improved operational efficiency"]
      }, {
        title: "Why It Matters More in 2025",
        items: ["Tighter control over manual cash handling", "Centralized visibility across locations", "Better regulatory and tax compliance", "Faster reconciliation and fewer discrepancies", "Real-time alerts for unusual activity"]
      }],
      ctaTitle: "Ready to Upgrade?",
      ctaText: "Switch to iLogic CMS for stronger cash flow visibility, better control, and smarter retail operations."
    },
    "ilogic-transportation": {
      eyebrow: "Logistics Platform",
      headline: "iLogic Transportation",
      intro: "A transportation management solution for logistics providers, distributors, and delivery teams that need route optimization, GPS visibility, and dispatch control.",
      stats: [
        ["5000", "Vehicles"],
        ["25", "Fuel Savings %"],
        ["99", "GPS Accuracy %"]
      ],
      sections: [{
        title: "Why Choose iLogic Transportation Software?",
        items: ["Real-time vehicle tracking", "AI-powered route optimization", "Centralized order and dispatch management", "Advanced reports and analytics", "Cloud-based and mobile-ready access"]
      }, {
        title: "Who It Is For",
        items: ["3PL companies", "E-commerce and last-mile delivery providers", "Distributors and wholesalers", "Cold chain and food delivery operators", "Freight and cargo companies"]
      }, {
        title: "How It Improves Operations",
        body: ["From automatic driver alerts to intelligent load planning and compliance workflows, iLogic Transportation reduces manual effort while improving operational efficiency.", "It can also integrate with ERP, CRM, and inventory systems for more connected logistics execution."]
      }],
      ctaTitle: "Book a Free Demo Today",
      ctaText: "See how iLogic Transportation can save planning time, improve visibility, and reduce fuel waste."
    },
    "ilogic-hospital-management": {
      eyebrow: "Healthcare Platform",
      headline: "Healthcare Management System",
      intro: "A modern hospital and clinic management system that reduces admin load, secures patient data, and supports better care delivery through connected workflows.",
      stats: [
        ["50", "Hospitals"],
        ["100", "HIPAA Compliant"],
        ["10000", "Patients / Month"]
      ],
      sections: [{
        title: "Digitizing Healthcare for Better Outcomes",
        body: ["Healthcare organizations need more than records and billing tools. They need integrated scheduling, staff coordination, patient communication, and compliance support.", "iLogic Tech's Healthcare Management System helps facilities improve efficiency while keeping care at the center of operations."]
      }, {
        title: "Addressing Real Healthcare Challenges",
        items: ["Reduce administrative overload", "Improve appointment scheduling and patient flow", "Protect sensitive patient data with strong security controls", "Automate billing and claim-related workflows", "Support remote consultations with telemedicine-ready capabilities"]
      }, {
        title: "Why Providers Trust iLogic Tech",
        items: ["Focus on care instead of admin work", "Get visibility into clinical and financial performance", "Scale from a single clinic to a hospital network", "Use workflows shaped by real healthcare professionals"]
      }, {
        title: "Business Impact",
        items: ["Lower administrative workload", "Improved patient satisfaction", "Faster financial closing", "Smoother alignment with existing processes"]
      }],
      ctaTitle: "Let's Transform Healthcare Together",
      ctaText: "Modernize patient operations, scheduling, billing, and reporting with a healthcare platform built for real-world teams."
    },
    "ilogic-crm": {
      eyebrow: "Customer Growth",
      headline: "CRM",
      intro: "A cloud-based customer relationship management platform that centralizes leads, follow-ups, campaigns, and sales visibility for high-growth teams.",
      stats: [
        ["10000", "Customers"],
        ["40", "Sales Increase %"],
        ["95", "Lead Conversion %"]
      ],
      sections: [{
        title: "Build Better Relationships with Smarter CRM",
        body: ["iLogic CRM helps businesses manage leads, automate follow-ups, strengthen customer engagement, and accelerate revenue without relying on disconnected spreadsheets or tools.", "It is suited for SMEs and scaling enterprises that want cleaner sales and marketing execution."]
      }, {
        title: "Solving Real CRM Challenges",
        items: ["Centralize scattered lead and contact data", "Automate reminders and follow-ups", "Track pipeline performance in real time", "Run targeted marketing campaigns", "Enable secure collaboration across sales, support, and marketing teams"]
      }, {
        title: "The iLogic CRM Advantage",
        items: ["Lead management and sales funnel tracking", "Marketing automation and campaigns", "Cloud access from desktop, tablet, and mobile", "Custom reports and dashboards", "Integrated communications", "Scalable workflows from SME to enterprise"]
      }, {
        title: "Trusted CRM Software in Singapore",
        items: ["Faster lead response times", "Higher deal closure rates", "More visibility across teams", "Lower manual admin work", "Better retention and engagement"]
      }, {
        title: "FAQs",
        faqs: [
          ["Who should use iLogic CRM?", "Any business that wants better lead management, follow-up automation, and customer visibility."],
          ["Can I access the CRM remotely?", "Yes. The cloud-based platform is securely available on desktop, tablet, and mobile."],
          ["Does it support multi-user collaboration?", "Yes. Teams can assign roles, tasks, and collaborate in real time."],
          ["How secure is iLogic CRM?", "It uses encrypted cloud hosting, strong data protection measures, and compliance-focused access controls."]
        ]
      }],
      ctaTitle: "Ready to Close More Deals and Keep Customers Happy?",
      ctaText: "Use iLogic CRM as your sales partner, support manager, and marketing engine in one platform."
    },
    "ilogic-tailor": {
      eyebrow: "Tailoring Software",
      headline: "Smart Tailoring Software for Modern Boutiques",
      intro: "A boutique-focused tailoring platform for measurements, trial dates, order tracking, invoicing, and delivery scheduling in one organized workflow.",
      stats: [
        ["Live", "Order Tracking"],
        ["Multi", "Branch Ready"],
        ["Cloud", "Access"]
      ],
    image: {
    src: "tailor.jpeg"
},

      sections: [{
        title: "Why Choose iLogic Tech's Tailoring Software?",
        body: ["Built for tailors and boutiques, this system keeps every measurement, fitting, and delivery date organized in one clean workflow.", "It reduces rework, improves turnaround time, and helps teams deliver a more professional customer experience."]
      }, {
        title: "Key Features",
        items: ["Measurement profiles", "Order and trial tracking", "Invoicing and payments", "Style and fabric catalog", "Delivery reminders", "Customer history", "Role-based access"]
      }, {
        title: "Perfect For",
        items: ["Tailoring boutiques", "Bridal studios", "Alteration shops", "Uniform stitching", "Designer studios", "Chain tailoring", "Fashion academies", "Corporate tailors", "Event wear specialists", "Ethnic wear stores", "Fabric and stitching units"]
      }, {
        title: "Benefits of Workflow Automation",
        items: ["Reduce measurement errors", "Faster turnaround time", "Centralized customer history", "Better delivery tracking", "Easy re-ordering", "Clear trial schedules", "Improved staff coordination", "Secure data backup", "Multi-branch visibility"]
      }, {
        title: "Real-Time Orders, Trials and Deliveries",
        items: ["See pending trials and due dates", "Generate receipts in seconds", "Monitor order volume by day or week", "Find any customer instantly"]
      }, {
        title: "FAQs",
        faqs: [
          ["Can I store multiple measurements per customer?", "Yes. You can save and reuse multiple measurement profiles for different garment types and occasions."],
          ["How do I track trials and delivery dates?", "Each order includes milestones and reminders for trials and delivery."],
          ["Is it suitable for multiple branches?", "Yes. Multi-branch management supports orders and customers across locations."],
          ["How secure is my business data?", "Data is encrypted, backed up in the cloud, and protected with role-based access."]
        ]
      }],
      ctaTitle: "Get Started with iLogic Tailoring Software",
      ctaText: "Book a free demo to simplify measurements, fittings, invoicing, and delivery tracking."
    },
    "ilogic-hotel-management": {
      eyebrow: "Hotel Operations",
      headline: "Hotel Management Software Solutions",
      intro: "A hotel operations platform that centralizes reservations, room inventory, housekeeping, guest billing, and occupancy visibility in one dashboard.",
      stats: [
        ["Live", "Occupancy"],
        ["Multi", "Property"],
        ["Guest", "Billing"]
      ],
      video: {
        src: "Video/hotel-management.mp4",
        cues: ["Manage reservations, rooms, housekeeping, and billing from one dashboard.", "Reduce overbooking, speed up check-ins, and improve guest service.", "Track occupancy, guest operations, and property performance in real time.", "Scale from a single hotel to multiple properties with ease."]
      },
      sections: [{
        title: "Why Choose iLogic Tech's Hotel Management Software?",
        body: ["Centralize reservations, room inventory, housekeeping, and billing in one modern system.", "The platform helps reduce overbooking, speed up front-desk workflows, and deliver a smoother guest experience."]
      }, {
        title: "Key Features for Hotel Operations",
        items: ["Reservation calendar", "Room inventory control", "Housekeeping status", "Billing and invoices", "Guest profiles", "Occupancy reports", "Role-based access"]
      }, {
        title: "Perfect for Every Stay Type",
        items: ["Hotels", "Resorts", "Business hotels", "Serviced apartments", "Hostels", "Homestays", "Boutique hotels", "Luxury properties", "Airport hotels", "Event venues", "Multi-property chains"]
      }, {
        title: "Benefits of a Unified Hotel System",
        items: ["Reduced overbooking risk", "Faster check-in and check-out", "Better room utilization", "Clean housekeeping coordination", "Accurate billing and folios", "Real-time occupancy insights", "Multi-property visibility", "Secure guest data storage", "Improved guest satisfaction"]
      }, {
        title: "Real-Time Occupancy and Guest Operations",
        items: ["See occupied versus available rooms", "Generate guest folios instantly", "Track revenue and booking trends", "Find guest details fast"]
      }, {
        title: "FAQs",
        faqs: [
          ["Can I manage multiple properties?", "Yes. The system supports multi-property management with centralized reporting."],
          ["Does it handle housekeeping status?", "Yes. Rooms can be marked clean, dirty, or in service with live updates."],
          ["Is guest data secure?", "Yes. Guest information is encrypted and protected with role-based access."],
          ["Can I connect with OTAs?", "Yes. OTA and channel integrations can be supported for smoother booking management."]
        ]
      }],
      ctaTitle: "Get Started with iLogic Hotel Management Software",
      ctaText: "Book a free demo to simplify reservations, room operations, billing, and guest service."
    }
  };
  const clientLogos = ["src/assets/clients/client1.webp", "src/assets/clients/client2.webp", "src/assets/clients/client3.webp", "src/assets/clients/client4.webp", "src/assets/clients/client5.webp", "src/assets/clients/client6.webp", "src/assets/clients/client7.webp", "src/assets/clients/client8.webp", "src/assets/clients/client9.webp", "src/assets/clients/client11.webp", "src/assets/clients/client12.webp", "src/assets/clients/client13.webp", "src/assets/clients/client14.webp", "src/assets/clients/client15.webp", "src/assets/clients/client16.webp", "src/assets/clients/client17.webp", "src/assets/clients/client18.webp", "src/assets/clients/client19.webp", "src/assets/clients/client-20.webp"];
  const partners = ["src/assets/partners/partnet-1.webp", "src/assets/partners/partner-2.webp", "src/assets/partners/partner-3.webp", "src/assets/partners/partner-4.webp", "src/assets/partners/partneddr5.webp", languageCertLogo];
  const team = [{
    role: "Founder",
    title: "Founder and CEO",
    name: "Mr. Abdul Rahim",
    image: "src/assets/owners/Founder.jpeg"
  }, {
    role: "Director",
    title: "Managing Director",
    name: "Mr. Abdul Rajak",
    image: "src/assets/owners/Director.jpeg"
  }];
  const reviews = [
    ["Sathyanarayana Nalam", "Business Owner", "I am very pleased with the technical skills and service of iLogic Tech staff. From placing the order to installation and training of the POS system, the entire process was smooth and timely."],
    ["Velu Govindaraj", "Retail Manager", "I am extremely satisfied with the POS system provided by iLogic Tech. The setup and go-live process were smooth and the staff were friendly and responsive."],
    ["Habi Singapore", "Store Owner", "Excellent service and smooth installation. The team explained everything clearly and trained our staff well."],
    ["Riswan Jaman", "Business Owner", "Great experience with iLogic Tech. Their team is professional, and the POS solution perfectly fits our business needs."],
    ["AZIM's Fashion", "Business Owner", "iLogic Tech provided excellent service, reliable software, and strong after-sales support."]
  ];
  const defaultTestimonials = reviews.map(item => ({
    name: item[0],
    role: item[1],
    rating: 5,
    message: item[2]
  }));
  const branches = [{
    title: "Singapore",
    address: "10 Ubi Crescent #05-41 (Unit A), Ubi TechPark, Lobby C, Singapore - 408564",
    phone: "+65 9017 5062, +65 8177 5062",
    map: "https://www.google.com/maps/search/?api=1&query=10+Ubi+Crescent+%2305-41+Unit+A%2C+Ubi+TechPark%2C+Lobby+C%2C+Singapore+408564",
    tz: "Asia/Singapore",
    whatsapp: "6590175062",
    flag: "🇸🇬"
  }, {
    title: "India (Madurai)",
    address: "93/3 Pattukottai Sundara Street, Arul Nagar, Bypass Road, Opp PRC, Madurai - 625016",
    phone: "+91 72000 05541, +65 8177 5062",
    map: "https://www.google.com/maps/place/iLOGIC+TECH,+Madurai/@9.9139841,78.0945502,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00cf002c400a23:0x84be009f3dfe1f5f!8m2!3d9.9139841!4d78.0971251!16s%2Fg%2F11yqbyskc8?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D",
    tz: "Asia/Kolkata",
    whatsapp: "917200005541",
    flag: "🇮🇳"
  }, {
    title: "India (Pondicherry)",
    address: "15(3), Ignacy Maistry Street, MG Road Area, Pondicherry - 605001",
    phone: "+91 91766 09303",
    map: "https://www.google.com/maps/place/iLogic+Tech,+Puducherry/@11.9290166,79.8247117,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3a536180e4aaea81:0x77def1b76c661b67!2s15,+Ignace+Mestry+St,+Chinnakadai,+MG+Road+Area,+Puducherry,+605001!3b1!8m2!3d11.9290166!4d79.8272866!16s%2Fg%2F11jkwdn1g8!3m5!1s0x3a53610021c0e9b7:0x6550dd8bf2e92fc1!8m2!3d11.9290166!4d79.8272866!16s%2Fg%2F11n4fkjhl6?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D",
    tz: "Asia/Kolkata",
    whatsapp: "917200005541",
    flag: "🇮🇳"
  }, {
    title: "Kuwait",
    address: "Office No. 39, Wala Complex, Hawalli, Kuwait",
    phone: "+965 66598721",
    map: "https://www.google.com/maps/search/?api=1&query=Office+No.+39%2C+Wala+Complex%2C+Hawalli%2C+Kuwait",
    tz: "Asia/Kuwait",
    whatsapp: "6590175062",
    flag: "🇰🇼"
  }, {
    title: "Ireland",
    address: "15, Orwell Woods, Datry Rathgar, Dublin - 6, Ireland",
    phone: "+353 877057694",
    map: "https://www.google.com/maps/search/?api=1&query=15+Orwell+Woods%2C+Datry+Rathgar%2C+Dublin+6%2C+Ireland",
    tz: "Europe/Dublin",
    whatsapp: "6590175062",
    flag: "🇮🇪"
  }];
  const galleryCollections = [{
    key: "placements",
    label: "Placement & Career Guidance - 2026",
    title: "Placement & Career Guidance - 2026",
    subtitle: "Placement and career guidance sessions delivered for students preparing for industry opportunities.",
    location: "Latha Mathavan College, Madurai",
    images: ["src/assets/placements/placement-1.webp", "src/assets/placements/placement-2.webp", "src/assets/placements/placement-3.webp", "src/assets/placements/placement-4.webp", "src/assets/placements/placement-5.webp", "src/assets/placements/placement-6.webp"]
  }, {
    key: "internship",
    label: "Advanced Software Development & Programming Training",
    title: "Advanced Software Development & Programming Training",
    subtitle: "Hands-on internship sessions focused on practical software development, coding, and project execution.",
    location: "AJK Institute of College, Madurai",
    images: ["src/assets/internship/intern-1.webp", "src/assets/internship/intern-2.webp", "src/assets/internship/intern-3.webp", "src/assets/internship/intern-4.webp", "src/assets/internship/intern-5.webp", "src/assets/internship/intern-6.webp", "src/assets/internship/intern-7.webp"]
  }, {
    key: "presentations",
    label: "Technical Training",
    title: "Technical Training",
    subtitle: "Technical training workshops designed to build confidence with real-world tools and presentation skills.",
    location: "Selvam School of Technology, Madurai",
    images: ["src/assets/presentation/sit-1.webp", "src/assets/presentation/sit-2.webp", "src/assets/presentation/sit-3.webp", "src/assets/presentation/sit-4.webp"]
  }, {
    key: "languagecert",
    label: "LanguageCert",
    title: "LanguageCert",
    subtitle: "Official LanguageCert partner sessions supporting students and professionals with certification readiness.",
    location: "Certification Events and Training Sessions",
    images: ["src/assets/languagecert/languagecert-1.webp", "src/assets/languagecert/languagecert-2.webp", "src/assets/languagecert/languagecert-3.webp", "src/assets/languagecert/languagecert-4.webp", "src/assets/languagecert/languagecert-5.webp", "src/assets/languagecert/languagecert-6.webp"]
  }, {
    key: "office",
    label: "Pondicherry Office",
    title: "Pondicherry Office",
    subtitle: "Snapshots from our Pondicherry workspace, day-to-day environment, and team setup.",
    location: "iLogic Tech Pondicherry Office",
    images: ["src/assets/office/pondicherry-office-3.webp", "src/assets/office/pondicherry-office-4.webp", "src/assets/office/pondicherry-office-5.webp", "src/assets/office/pondicherry-office-6.webp", "src/assets/office/pondicherry-office-7.webp", "src/assets/office/pondicherry-office-8.webp", "src/assets/office/pondicherry-office-9.webp", "src/assets/office/pondicherry-office-10.webp"]
  }, {
    key: "expo",
    label: "MADURAI EXPO-2025",
    title: "Madurai Expo-2025",
    subtitle: "Live demos for customers and gathering their requirements on the spot.",
    location: "Madurai Expo 2025",
    images: ["src/assets/expo/expo-1.webp", "src/assets/expo/expo-2.webp", "src/assets/expo/expo-3.webp", "src/assets/expo/expo-4.webp", "src/assets/expo/expo-5.webp", "src/assets/expo/expo-6.webp", "src/assets/expo/expo-7.webp", "src/assets/expo/expo-8.webp", "src/assets/expo/expo-9.webp", "src/assets/expo/expo-10.webp"]
  }];
  const galleryImages = Object.fromEntries(galleryCollections.map(item => [item.key, item.images]));
  const languageCertPhotos = ["src/assets/languagecert/languagecert-1.webp", "src/assets/languagecert/languagecert-2.webp", "src/assets/languagecert/languagecert-3.webp", "src/assets/languagecert/languagecert-4.webp", "src/assets/languagecert/languagecert-5.webp", "src/assets/languagecert/languagecert-6.webp", "src/assets/languagecert/languagecert-7(1).webp"];

  function list(items) {
    return '<div class="list">' + items.map(item => '<div class="list-item"><span class="check" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M8 8.5h7.5V16"/><path d="M8.5 15.5 15.5 8.5"/><path d="M12 3.8c4.5 0 8.2 3.7 8.2 8.2s-3.7 8.2-8.2 8.2-8.2-3.7-8.2-8.2 3.7-8.2 8.2-8.2Z"/></svg></span><span>' + item + '</span></div>').join("") + "</div>";
  }

  function galleryGrid(items) {
    return items.map(item => '<div class="gallery-image reveal"><img src="' + item + '" alt="Gallery image" loading="lazy" /></div>').join("");
  }

  function galleryCards(items) {
    return items.map((item, index) => '<article class="gallery-folder-card reveal">' +
      '<div class="gallery-folder-media">' +
      '<img src="' + item.images[0] + '" alt="' + item.title + '" loading="lazy" />' +
      '<div class="gallery-folder-overlay"></div>' +
      '<div class="gallery-folder-top">' +
      '<span class="gallery-folder-label">' + item.label + '</span>' +
      '<button class="gallery-folder-view" type="button" data-gallery-open="' + item.key + '" aria-label="View ' + item.title + ' gallery">View</button>' +
      '</div>' +
      '<div class="gallery-folder-body">' +
      '<h3>' + item.title + '</h3>' +
      '<p>' + item.subtitle + '</p>' +
      '<span class="gallery-folder-location">' + item.location + '</span>' +
      '</div>' +
      '</div>' +
      '</article>').join("");
  }

  function galleryModal() {
    return '<div class="gallery-modal" id="galleryModal" aria-hidden="true">' +
      '<div class="gallery-modal-backdrop" data-gallery-close></div>' +
      '<div class="gallery-modal-dialog" role="dialog" aria-modal="true" aria-label="Gallery viewer">' +
      '<button class="gallery-modal-close" type="button" data-gallery-close aria-label="Close gallery">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
      '</button>' +
      '<button class="gallery-modal-nav gallery-modal-prev" type="button" data-gallery-prev aria-label="Previous image">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7"/></svg>' +
      '</button>' +
      '<button class="gallery-modal-nav gallery-modal-next" type="button" data-gallery-next aria-label="Next image">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>' +
      '</button>' +
      '<div class="gallery-modal-media">' +
      '<img id="galleryModalImage" src="" alt="" />' +
      '</div>' +
      '<div class="gallery-modal-panel">' +
      '<div class="gallery-modal-header">' +
      '<p class="gallery-modal-kicker" id="galleryModalLabel"></p>' +
      '<h3 id="galleryModalTitle"></h3>' +
      '<p class="gallery-modal-subtitle" id="galleryModalSubtitle"></p>' +
      '<p class="gallery-modal-location" id="galleryModalLocation"></p>' +
      '</div>' +
      '<div class="gallery-modal-status">' +
      '<span id="galleryModalIndex">1 / 1</span>' +
      '</div>' +
      '<div class="gallery-modal-actions">' +
      '<button class="gallery-action-btn" type="button" data-gallery-like aria-pressed="false">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.4 5.8 14.7a4.4 4.4 0 0 1 6.2-6.2l.1.1.1-.1a4.4 4.4 0 0 1 6.2 6.2L12 20.4Z"/></svg>' +
      '<span id="galleryLikeLabel">Like</span>' +
      '<span class="gallery-action-count" id="galleryLikeCount">0</span>' +
      '</button>' +
      '<button class="gallery-action-btn" type="button" data-gallery-toggle-share>' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 8 9 12l6 4"/><circle cx="18" cy="6" r="2.2"/><circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="18" r="2.2"/></svg>' +
      '<span>Share</span>' +
      '<span class="gallery-action-count" id="galleryShareCount">0</span>' +
      '</button>' +
      '<button class="gallery-action-btn" type="button" data-gallery-focus-comment>' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18.2V6.8A1.8 1.8 0 0 1 6.8 5h10.4A1.8 1.8 0 0 1 19 6.8v7.4a1.8 1.8 0 0 1-1.8 1.8H9.5L5 18.2Z"/></svg>' +
      '<span>Comment</span>' +
      '<span class="gallery-action-count" id="galleryActionCommentCount">0</span>' +
      '</button>' +
      '</div>' +
      '<div class="gallery-share-panel" id="gallerySharePanel" hidden>' +
      '<a data-share-network="whatsapp" href="#" target="_blank" rel="noreferrer" aria-label="Share on WhatsApp" title="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.6 20.1 8.5 16.9a7.7 7.7 0 1 1 3.6 1c-1.1 0-2.2-.2-3.2-.7l-1.3.6Z"/><path d="M9.8 8.9c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3 0 .6.2.3.8 1.3 1.8 2 .3.3.6.4.8.2l.6-.7c.2-.2.4-.2.6-.1l1.8.8c.2.1.4.2.4.5s-.1 1.5-.9 2a3.8 3.8 0 0 1-2.6.4c-.7-.2-1.6-.5-2.9-1.6a11 11 0 0 1-2.3-2.9c-.6-1-.9-2-.9-2.7 0-.7.3-1.2.6-1.5Z"/></svg><span class="gallery-share-item-count" id="galleryWhatsappCount">0</span></a>' +
      '<a data-share-network="facebook" href="#" target="_blank" rel="noreferrer" aria-label="Share on Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 19v-6h2.1l.4-2.5h-2.5V8.9c0-.8.4-1.4 1.5-1.4H16V5.3c-.4-.1-1.2-.2-2.1-.2-2.1 0-3.4 1.3-3.4 3.6v1.8H8.3V13h2.2v6"/></svg><span class="gallery-share-item-count" id="galleryFacebookCount">0</span></a>' +
      '<a data-share-network="instagram" href="#" target="_blank" rel="noreferrer" aria-label="Open Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="4.5" width="15" height="15" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg><span class="gallery-share-item-count" id="galleryInstagramCount">0</span></a>' +
      '<a data-share-network="linkedin" href="#" target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5V18M6.99 5.5a1.25 1.25 0 1 1-.01 2.5 1.25 1.25 0 0 1 .01-2.5ZM11 18v-5.25c0-1.4 1.1-2.25 2.2-2.25 1.1 0 1.8.68 1.8 2.17V18M11 12c.52-.93 1.54-1.5 2.83-1.5 2.16 0 3.67 1.42 3.67 4.27V18"/></svg><span class="gallery-share-item-count" id="galleryLinkedinCount">0</span></a>' +
      '<a data-share-network="x" href="#" target="_blank" rel="noreferrer" aria-label="Share on X" title="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5 19 19"/><path d="M19 5 5 19"/></svg><span class="gallery-share-item-count" id="galleryXCount">0</span></a>' +
      '<a data-share-network="email" href="#" aria-label="Share by email" title="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="m5 8 7 5 7-5"/></svg><span class="gallery-share-item-count" id="galleryEmailCount">0</span></a>' +
      '<a id="galleryDownloadAction" href="#" download aria-label="Download image" title="Download"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 18h14"/></svg><span class="gallery-share-item-count" id="galleryDownloadCount">0</span></a>' +
      '</div>' +
      '<div class="gallery-comments">' +
      '<div class="gallery-comments-header">' +
      '<strong>Comments</strong>' +
      '<span id="galleryCommentCount">0 comments</span>' +
      '</div>' +
      '<form class="gallery-comment-form" id="galleryCommentForm">' +
      '<input id="galleryCommentName" type="text" placeholder="Your name" maxlength="40" required />' +
      '<input id="galleryCommentInput" type="text" placeholder="Write a comment..." maxlength="180" required />' +
      '<button type="submit">Post</button>' +
      '</form>' +
      '<div class="gallery-comment-list" id="galleryCommentList"></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function sectionHeader(eyebrow, title, text) {
    return '<div class="section-heading reveal"><span class="eyebrow">' + eyebrow + '</span><h2 class="gradient-text">' + title + '</h2>' + (text ? '<p class="lead">' + text + '</p>' : "") + '</div>';
  }

  function metricCards(items) {
    return '<div class="service-metric-grid">' + items.map(item => '<article class="glass service-metric-card reveal"><strong>' + item[0] + '</strong><span>' + item[1] + '</span></article>').join("") + "</div>";
  }

  function serviceFeatureCards(items) {
    return '<div class="service-feature-grid">' + items.map(item => '<article class="glass service-feature-card reveal"><div class="icon-badge service-icon-badge">' + serviceFeatureIcon(item[0]) + '</div><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p><ul class="service-points">' + item[2].map(point => '<li>' + point + '</li>').join("") + '</ul></article>').join("") + "</div>";
  }

  function serviceStackRows(items) {
    return '<div class="service-stack-list">' + items.map(item => '<article class="glass service-stack-card reveal"><h3>' + item[0] + '</h3><div class="tag-list">' + item[1].map(tag => '<span>' + tag + '</span>').join("") + '</div></article>').join("") + "</div>";
  }

  function serviceJourney(items) {
    return '<div class="service-journey-list">' + items.map(item => '<article class="glass service-journey-card reveal"><div class="service-journey-badge">' + serviceJourneyIcon(item[0]) + '</div><div><h3>' + item[0].replace(/^\\d+\\s+/, "") + '</h3><p class="muted">' + item[1] + '</p></div></article>').join("") + "</div>";
  }

  function serviceIcon(slug) {
    const icons = {
      "software-development": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="12" rx="2.4"/><path d="M7 19.5h10"/><path d="M8.2 10 6.4 11.8 8.2 13.6"/><path d="m15.8 10 1.8 1.8-1.8 1.8"/><path d="m13.1 8.7-2.2 6.2"/></svg>',
      "web-applications": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5"/><path d="M4.5 12h15"/><path d="M12 4.5a12 12 0 0 1 0 15"/><path d="M12 4.5a12 12 0 0 0 0 15"/></svg>',
      "mobile-apps": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7.2" y="2.8" width="9.6" height="18.4" rx="2.2"/><path d="M10.2 6h3.6"/><circle cx="12" cy="17.6" r="1"/><path d="M10 12.2h4"/></svg>',
      "ai-ml": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="2.2"/><circle cx="16" cy="8" r="2.2"/><circle cx="8" cy="16" r="2.2"/><circle cx="16" cy="16" r="2.2"/><path d="M10.2 8h3.6M8 10.2v3.6M16 10.2v3.6M10.2 16h3.6"/></svg>',
      "cybersecurity": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 6.5 5.8v5.1c0 3.8 2.3 6.7 5.5 8.8 3.2-2.1 5.5-5 5.5-8.8V5.8L12 3.5Z"/><path d="M9.8 12.1 11.5 13.8 14.6 10.4"/></svg>',
      "networking": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 9.6A10.6 10.6 0 0 1 12 7a10.6 10.6 0 0 1 6.8 2.6"/><path d="M8.2 12.7A6.7 6.7 0 0 1 12 11.5a6.7 6.7 0 0 1 3.8 1.2"/><path d="M10.8 15.8a2.7 2.7 0 0 1 2.4 0"/><circle cx="12" cy="18.2" r="1.1"/></svg>',
      "cctv-surveillance": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9.2h9.5l4-3.2H9.1L5 9.2Z"/><path d="m8 9.5 1.7 4.6"/><path d="M9.7 14.1H7"/><path d="M15.3 12.7a4.5 4.5 0 0 1 4.4 0"/><path d="M16.4 14.9a2.3 2.3 0 0 1 2.2 0"/></svg>',
      "internship-program": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5 12 4l7 3.5-7 3.5L5 7.5Z"/><path d="M8 10v4.2c0 1.5 1.8 2.8 4 2.8s4-1.3 4-2.8V10"/><path d="M19 8v4"/></svg>',
      "language-training": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5h9.5a3.5 3.5 0 0 1 3.5 3.5v7.5H8.5A3.5 3.5 0 0 0 5 21V6.5Z"/><path d="M8.2 10h6.2M8.2 13h5.1"/><path d="M18.5 7.8 20 6.5v9"/></svg>'
    };
    return icons[slug] || '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"/></svg>';
  }

  function serviceCardHref(slug) {
    const customRoutes = {
      "internship-program": "internship.html",
      "language-training": "languagecert.html"
    };
    return customRoutes[slug] || ("service.html?slug=" + slug);
  }

  function serviceFeatureIcon(title) {
    const icons = {
      "Desktop Applications": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="11.5" rx="2.2"/><path d="M9 19h6"/><path d="M12 16.5V19"/></svg>',
      "Enterprise Software": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4.5" width="16" height="4.5" rx="1.2"/><rect x="4" y="10" width="16" height="4.5" rx="1.2"/><rect x="4" y="15.5" width="16" height="4" rx="1.2"/><path d="M8 7h.01M8 12.3h.01M8 17.4h.01"/></svg>',
      "Custom Development": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 8.8 5.4 12l2.8 3.2"/><path d="m15.8 8.8 2.8 3.2-2.8 3.2"/><path d="m13.4 6.8-2.8 10.4"/></svg>',
      "Database Solutions": '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6.5" rx="6.5" ry="2.8"/><path d="M5.5 6.5v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5"/><path d="M5.5 11.5v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5"/></svg>',
      "API Development": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.3 8.8 5.5 12l2.8 3.2"/><path d="m15.7 8.8 2.8 3.2-2.8 3.2"/><rect x="9.6" y="9.2" width="4.8" height="5.6" rx="1.3"/></svg>',
      "Software Maintenance": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.8a4.6 4.6 0 0 1 3.4 5.9l-4.1 4.1a2.2 2.2 0 0 1-3.1 0l-2.8-2.8a2.2 2.2 0 0 1 0-3.1l4.1-4.1a4.6 4.6 0 0 1 2.5-1.2Z"/><path d="m9.1 14.9-3.6 3.6"/><path d="M6.2 17.8 4.8 19.2"/></svg>',
      "Frontend Development": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 8.8 5.4 12l2.8 3.2"/><path d="m15.8 8.8 2.8 3.2-2.8 3.2"/><path d="M9.6 6.5h4.8"/><path d="M9.6 17.5h4.8"/></svg>',
      "Backend Development": '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="7" rx="5.8" ry="2.4"/><path d="M6.2 7v4.5c0 1.3 2.6 2.4 5.8 2.4s5.8-1.1 5.8-2.4V7"/><path d="M6.2 11.5V16c0 1.3 2.6 2.4 5.8 2.4s5.8-1.1 5.8-2.4v-4.5"/></svg>',
      "E-commerce Solutions": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="18" r="1.4"/><circle cx="17" cy="18" r="1.4"/><path d="M4.5 6h2l1.6 7.2h8.8l1.8-5.2H7.4"/><path d="M10 6V4.5h4V6"/><path d="M12 10.4v2.4"/><path d="M10.8 11.6h2.4"/></svg>',
      "Performance Optimization": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16.5a7 7 0 1 1 12 0"/><path d="M12 12l3.5-3.5"/><path d="M12 18.5h.01"/></svg>',
      "iOS Development": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 7.1c-.6.7-1.6 1.2-2.5 1.1-.1-.9.3-1.8.8-2.4.6-.7 1.6-1.2 2.4-1.2.1.9-.2 1.8-.7 2.5Z"/><path d="M12.1 9.4c1.3 0 1.9-.9 3.3-.9 1.1 0 1.9.5 2.5 1.3-2.2 1.2-1.8 4.4.5 5.4-.6 1.3-1.4 2.6-2.7 2.6-1.2 0-1.6-.8-3-.8s-1.8.8-3 .8c-1.2 0-2.1-1.2-2.7-2.5-1.6-3-.7-6.1 1.1-7.1 1.1-.6 2.2-.6 3 .1.5.4.9 1.1 1 1.1Z"/></svg>',
      "Android Development": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9.5h8a2 2 0 0 1 2 2v4.6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4.6a2 2 0 0 1 2-2Z"/><path d="m9.2 6.8-1-1.6"/><path d="m14.8 6.8 1-1.6"/><path d="M9.5 9.5V7.8A2.5 2.5 0 0 1 12 5.3a2.5 2.5 0 0 1 2.5 2.5v1.7"/><circle cx="10" cy="13.2" r=".4"/><circle cx="14" cy="13.2" r=".4"/></svg>',
      "Cross-Platform": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.8" y="5" width="7.8" height="5.7" rx="1.3"/><rect x="12.4" y="13.3" width="7.8" height="5.7" rx="1.3"/><path d="M11.6 8h1.8v2.1h-2.1v1.7"/><path d="M12.4 16.1h-1.8V14h2.1v-1.7"/></svg>',
      "Specialized App Solutions": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z"/><path d="M6.5 18.4a5.8 5.8 0 0 1 11 0"/><path d="M5.2 9.3h2.2"/><path d="M16.6 9.3h2.2"/><path d="M4.4 13.4h2"/><path d="M17.6 13.4h2"/></svg>',
      "Penetration Testing": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5 7 6.7v4.9c0 3 1.8 5.4 5 7.4 3.2-2 5-4.4 5-7.4V6.7L12 4.5Z"/><path d="m9.4 12 1.7 1.7 3.5-4"/><path d="m15.8 15.8 2.7 2.7"/></svg>',
      "Security Monitoring": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h2.8l1.6-3.1 2.4 6.2 1.8-4h6.4"/><path d="M12 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"/></svg>',
      "Identity & Access Management": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.2a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Z"/><path d="M6.8 18.5a5.6 5.6 0 0 1 10.4 0"/><rect x="15.2" y="10.8" width="4.6" height="3.7" rx="1"/><path d="M16.2 10.8V9.9a1.3 1.3 0 0 1 2.6 0v.9"/></svg>',
      "Data Protection": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5 7 6.5v5.2c0 3.1 1.9 5.6 5 7.5 3.1-1.9 5-4.4 5-7.5V6.5L12 4.5Z"/><rect x="10.1" y="10.1" width="3.8" height="3.2" rx=".7"/><path d="M10.8 10.1V9.3a1.2 1.2 0 1 1 2.4 0v.8"/></svg>',
      "Security Training": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.2 12 4l7 3.2-7 3.2L5 7.2Z"/><path d="M8 10.1v4.2c0 1.5 1.8 2.7 4 2.7s4-1.2 4-2.7v-4.2"/><path d="M19 8.2v4"/><path d="M12 12.2v2.1"/></svg>',
      "Compliance Management": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.2" y="4.5" width="11.6" height="15" rx="1.6"/><path d="M9.2 9.2h5.6"/><path d="M9.2 12.2h5.6"/><path d="m9.2 15.2 1.2 1.2 2.4-2.8"/></svg>',
      "Network Design & Architecture": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.8" y="5" width="4.6" height="4.6" rx="1"/><rect x="15.6" y="5" width="4.6" height="4.6" rx="1"/><rect x="9.7" y="14.4" width="4.6" height="4.6" rx="1"/><path d="M8.4 7.3h7.2"/><path d="M12 9.6v4.8"/></svg>',
      "Wireless Solutions": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 10.4A10.3 10.3 0 0 1 12 8a10.3 10.3 0 0 1 6.8 2.4"/><path d="M8.1 13.2A6.6 6.6 0 0 1 12 12a6.6 6.6 0 0 1 3.9 1.2"/><path d="M10.7 16a2.7 2.7 0 0 1 2.6 0"/><circle cx="12" cy="18.4" r="1"/></svg>',
      "Network Security": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5 7 6.8v4.9c0 3 1.8 5.4 5 7.3 3.2-1.9 5-4.3 5-7.3V6.8L12 4.5Z"/><path d="m9.8 12.1 1.6 1.6 2.8-3.3"/></svg>',
      "Network Monitoring": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h3l1.3-2.8 2.6 5.6 1.8-3.8h6.3"/><path d="M4.5 18.2h15"/></svg>',
      "Data Center Networking": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.2" y="4.5" width="11.6" height="4" rx="1"/><rect x="6.2" y="10" width="11.6" height="4" rx="1"/><rect x="6.2" y="15.5" width="11.6" height="4" rx="1"/><path d="M9 6.5h.01M9 12h.01M9 17.5h.01"/></svg>',
      "Network Maintenance": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.9 6.1a4.4 4.4 0 0 1 2.9 5.8l-4 4a2.1 2.1 0 0 1-3 0l-2.7-2.7a2.1 2.1 0 0 1 0-3l4-4a4.4 4.4 0 0 1 2.8-1.1Z"/><path d="m8.9 15.1-3.4 3.4"/><path d="M6.1 17.9 4.8 19.2"/></svg>',
      "IP Camera Systems": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.8 9.4h8.9l4.3-3.2H9.2L4.8 9.4Z"/><path d="m7.8 9.7 1.8 4.6"/><path d="M9.6 14.3H6.8"/><circle cx="17.4" cy="12.7" r="1.4"/><path d="M14.9 12.7a2.5 2.5 0 0 1 5 0"/></svg>',
      "AI-Powered Analytics": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.2a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4Z"/><path d="M7.2 18.2a5.4 5.4 0 0 1 9.6 0"/><path d="M5.3 12h1.9"/><path d="M16.8 12h1.9"/><path d="m8.3 8.2-1.4-1.4"/><path d="m15.7 8.2 1.4-1.4"/></svg>',
      "Mobile Monitoring": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7.3" y="2.8" width="9.4" height="18.4" rx="2.2"/><path d="M10.1 5.8h3.8"/><path d="M9.8 12h4.4"/><path d="M10.3 15.1h3.4"/><circle cx="12" cy="17.9" r=".9"/></svg>',
      "Professional Camera Solutions": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 9.4h10l4.5-3.2H9.4L4.5 9.4Z"/><path d="m8 9.7 1.5 4.2"/><path d="M9.5 13.9H6.8"/><path d="M15.2 11.5a3.8 3.8 0 0 1 3.8 0"/><path d="M14.4 14a5.5 5.5 0 0 1 5.2 0"/></svg>'
    };
    return icons[title] || '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"/></svg>';
  }

  function serviceJourneyIcon(title) {
    const cleanTitle = title.replace(/^\d+\s+/, "");
    const icons = {
      "Discovery & Planning": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="5.5"/><path d="m15.2 15.2 3.3 3.3"/><path d="M11 8.5v2.8l1.9 1.2"/></svg>',
      "Design & Prototyping": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 16.8-.8 3.2 3.2-.8L18 8.6 15.4 6 5 16.8Z"/><path d="m13.8 7.6 2.6 2.6"/><path d="M8.8 18.2h6.7"/></svg>',
      "Development & Testing": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 8.8 5.4 12l2.8 3.2"/><path d="m15.8 8.8 2.8 3.2-2.8 3.2"/><path d="m13.3 6.8-2.6 10.4"/><path d="m9.8 15.8 1.4 1.4 3-3.4"/></svg>',
      "Deployment & Support": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5 6.8 7.1v4.8c0 3.2 1.9 5.7 5.2 7.6 3.3-1.9 5.2-4.4 5.2-7.6V7.1L12 4.5Z"/><path d="m9.8 12.1 1.7 1.7 2.9-3.3"/></svg>',
      "Ideation & Strategy": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.6 14.8a4.7 4.7 0 1 1 6.8 0L12 19.1l-2.4-2.4Z"/><path d="M12 8.5v2.7"/><path d="M12 14.4h.01"/></svg>',
      "UI/UX Design": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 16.8-.8 3.2 3.2-.8L18 8.6 15.4 6 5 16.8Z"/><path d="m13.8 7.6 2.6 2.6"/><path d="M8.6 18.4h6.8"/></svg>',
      "Development": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 8.8 5.4 12l2.8 3.2"/><path d="m15.8 8.8 2.8 3.2-2.8 3.2"/><path d="m13.4 6.8-2.8 10.4"/></svg>',
      "Testing & QA": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="4.8"/><path d="m14.1 14.1 4 4"/><path d="m9.2 10.6 1.1 1.1 2.1-2.4"/></svg>',
      "Launch & Support": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.8c3.5 2 5.6 5.3 5.6 9.3 0 1.7-.5 3.3-1.4 4.7l-4.2-1.8-4.2 1.8a8.9 8.9 0 0 1-1.4-4.7c0-4 2.1-7.3 5.6-9.3Z"/><path d="M12 9.3v4.8"/><path d="m10.2 11.1 1.8-1.8 1.8 1.8"/></svg>',
      "Assess": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="5.5"/><path d="m15.2 15.2 3.3 3.3"/><path d="M11 8.4v2.9l1.8 1.1"/></svg>',
      "Protect": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5 7 6.7v5c0 3 1.8 5.4 5 7.3 3.2-1.9 5-4.3 5-7.3v-5L12 4.5Z"/><path d="m9.8 12.1 1.6 1.6 2.8-3.3"/></svg>',
      "Detect": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h2.8l1.6-3.1 2.4 6.2 1.8-4h6.4"/><path d="M12 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"/></svg>',
      "Respond": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5a7.5 7.5 0 1 1-7.5 7.5"/><path d="M4.5 7.5V4.5H7.5"/><path d="M12 8.5v3.1l2.2 1.5"/></svg>',
      "Recover": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 12a6.8 6.8 0 1 0 2-4.8"/><path d="M4.5 7.2v3.3h3.3"/><path d="m10.2 12.4 1.4 1.4 2.6-2.8"/></svg>',
      "Design": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 16.8-.8 3.2 3.2-.8L18 8.6 15.4 6 5 16.8Z"/><path d="m13.8 7.6 2.6 2.6"/></svg>',
      "Deploy": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v10.2"/><path d="m8.5 11.7 3.5 3.5 3.5-3.5"/><rect x="5.5" y="17.2" width="13" height="2.8" rx="1.1"/></svg>',
      "Monitor": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h3l1.3-2.8 2.6 5.6 1.8-3.8h6.3"/><path d="M4.5 18.2h15"/></svg>',
      "Optimize": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16.5a7 7 0 1 1 12 0"/><path d="M12 12l3.5-3.5"/><path d="M12 18.5h.01"/></svg>',
      "Assessment": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="5.5"/><path d="m15.2 15.2 3.3 3.3"/><path d="M11 8.4v2.9l1.8 1.1"/></svg>',
      "Installation": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v10.2"/><path d="m8.5 11.7 3.5 3.5 3.5-3.5"/><rect x="5.5" y="17.2" width="13" height="2.8" rx="1.1"/></svg>',
      "Monitoring": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h3l1.3-2.8 2.6 5.6 1.8-3.8h6.3"/><path d="M4.5 18.2h15"/></svg>',
      "Support": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.8 18.2v-1.5a3.2 3.2 0 0 1 6.4 0v1.5"/><circle cx="12" cy="9.2" r="2.6"/><path d="M5.8 11.4a6.2 6.2 0 1 1 12.4 0v3.3a1.7 1.7 0 0 1-1.7 1.7h-1.3"/></svg>'
    };
    return icons[cleanTitle] || '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"/></svg>';
  }

  function serviceThemeStyle(slug) {
    const themes = {
      "software-development": "--service-accent:#7c3aed;--service-accent-soft:rgba(124,58,237,0.14);--service-accent-2:#ec4899;--service-surface:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,241,255,0.98));",
      "web-applications": "--service-accent:#2563eb;--service-accent-soft:rgba(37,99,235,0.14);--service-accent-2:#06b6d4;--service-surface:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(239,248,255,0.98));",
      "mobile-apps": "--service-accent:#db2777;--service-accent-soft:rgba(219,39,119,0.14);--service-accent-2:#f59e0b;--service-surface:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,243,248,0.98));",
      cybersecurity: "--service-accent:#059669;--service-accent-soft:rgba(5,150,105,0.14);--service-accent-2:#14b8a6;--service-surface:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(239,253,248,0.98));",
      networking: "--service-accent:#0f766e;--service-accent-soft:rgba(15,118,110,0.14);--service-accent-2:#3b82f6;--service-surface:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(239,251,251,0.98));",
      "cctv-surveillance": "--service-accent:#ea580c;--service-accent-soft:rgba(234,88,12,0.14);--service-accent-2:#ef4444;--service-surface:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,247,237,0.98));"
    };
    return themes[slug] || "--service-accent:var(--primary);--service-accent-soft:rgba(139,92,246,0.14);--service-accent-2:var(--accent);--service-surface:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,241,255,0.98));";
  }

  function aboutIcon(title) {
    const icons = {
      "Client-Centric": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><path d="M6.8 18.2a5.7 5.7 0 0 1 10.4 0"/><path d="M18.3 7.8h1.7M19.1 7v1.7"/></svg>',
      "Scalable and Secure": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 6.5 5.5v5c0 3.8 2.3 6.6 5.5 8.7 3.2-2.1 5.5-4.9 5.5-8.7v-5L12 3Z"/><path d="M9.8 11.2 11.4 13l3-3.4"/></svg>',
      "R&D Innovation": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 14.8a4.8 4.8 0 1 1 6.8 0L12 19.3l-2.5-2.5Z"/><path d="M12 8.6v3.2"/><path d="M12 15.6h.01"/></svg>',
      "Quick Deployment": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.8 4.5 7.4 12h4.3l-1 7.5 6.8-8H13l.8-7Z"/></svg>',
      "POS Solutions": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4.5" width="14" height="10" rx="2"/><path d="M8 8.3h8"/><path d="M9 19.5h6"/><path d="M12 14.5v5"/></svg>',
      "IT Infrastructure": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v3.2"/><path d="M6.5 18.5v-2.3h11v2.3"/><rect x="4" y="9.2" width="4.2" height="4" rx="1"/><rect x="9.9" y="9.2" width="4.2" height="4" rx="1"/><rect x="15.8" y="9.2" width="4.2" height="4" rx="1"/></svg>',
      "Training Programs": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5 12 4l7 3.5-7 3.5L5 7.5Z"/><path d="M8 10v4.2c0 1.5 1.8 2.8 4 2.8s4-1.3 4-2.8V10"/><path d="M19 8v4"/></svg>',
      "LanguageCert Partner": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5 7 6.2v5.1c0 3.1 1.9 5.6 5 7.7 3.1-2.1 5-4.6 5-7.7V6.2L12 4.5Z"/><path d="m9.8 12 1.6 1.6 2.8-3.2"/></svg>'
    };
    return icons[title] || '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"/></svg>';
  }

  function countryToggle(className) {
    return '<div class="country-toggle ' + className + '" role="group" aria-label="Select country">' + countryOptions.map(option => '<button class="country-chip" type="button" data-country="' + option.code + '" aria-pressed="false" title="' + option.label + '"><img src="' + option.flag + '" alt="' + option.label + ' flag" loading="lazy" /></button>').join("") + '</div>';
  }

  function socialIcon(network) {
    const icons = {
      instagram: '<img class="social-img-icon" src="src/assets/Social%20media/instagram.png" alt="Instagram" loading="lazy" />',
      x: '<img class="social-img-icon" src="src/assets/Social%20media/X.png" alt="X" loading="lazy" />',
      linkedin: '<img class="social-img-icon" src="src/assets/Social%20media/Linkedin.jpg" alt="LinkedIn" loading="lazy" />',
      facebook: '<img class="social-img-icon" src="src/assets/Social%20media/Fb.jpg" alt="Facebook" loading="lazy" />',
      youtube: '<img class="social-img-icon" src="src/assets/Social%20media/Youtube.png" alt="YouTube" loading="lazy" />'
    };
    return icons[network] || icons.instagram;
  }

  function socialLinks(className) {
    return '<div class="' + className + '" aria-label="Social media links">' + socialPlatforms.map(item => '<a href="' + item[1] + '" target="_blank" rel="noreferrer noopener" aria-label="' + item[0].charAt(0).toUpperCase() + item[0].slice(1) + '" title="' + item[0].charAt(0).toUpperCase() + item[0].slice(1) + '">' + socialIcon(item[0]) + '</a>').join("") + '</div>';
  }

  function examModuleIcon(kind) {
    const icons = {
      languagecert: '<img src="' + languageCertLogo + '" alt="LanguageCert logo" />',
      celpip: '<img src="' + celpipPartnerLogo + '" alt="CELPIP logo" />',
      academic: '<img src="' + academicPartnerLogo + '" alt="Academic Partner logo" />',
      global: '<img src="' + globalCertificateLogo + '" alt="Global Certifications logo" />',
      enquiry: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 6.2h13a1.8 1.8 0 0 1 1.8 1.8v8a1.8 1.8 0 0 1-1.8 1.8h-13A1.8 1.8 0 0 1 3.7 16V8a1.8 1.8 0 0 1 1.8-1.8Z"/><path d="m5 7 7 5 7-5"/></svg>',
      feedback: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18.2 4.5 20v-4.5A6.5 6.5 0 0 1 11 9h4a6.5 6.5 0 0 1 0 13H11a6.4 6.4 0 0 1-4-1.4"/><path d="m12 6.2 1.3 2.6 2.8.4-2 2 .5 2.8-2.6-1.4-2.6 1.4.5-2.8-2-2 2.8-.4L12 6.2Z"/></svg>'
    };
    return icons[kind] || icons.global;
  }

  function certificationProgramIcon(name) {
    const icons = {
      AWS: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 15.8h9.6"/><path d="M8.4 15.8 12 7.2l3.6 8.6"/><path d="M5.2 18.4c3 1.4 6 2.1 9 2.1s5.3-.5 6.6-1.5"/></svg>',
      Cisco: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15.5h14"/><path d="M8 12.5V9.8M10.5 12.5V7.8M13 12.5V6.5M15.5 12.5V7.8M18 12.5V9.8"/></svg>',
      Azure: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.2 4 6 18.5h3.7l1.4-3.5h4.3l1.4 3.5H20L13.5 4Z"/><path d="M12.8 8.2 14.6 13h-3.7Z"/></svg>',
      CompTIA: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5 6.8 6.7v5c0 3 1.8 5.4 5.2 7.3 3.4-1.9 5.2-4.3 5.2-7.3v-5L12 4.5Z"/><path d="M9.6 11.8h4.8M9.6 14.2h3.2"/></svg>',
      "Google Cloud": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 17.5h7.4a3.6 3.6 0 0 0 .3-7.1 4.9 4.9 0 0 0-9.5 1.2A3.2 3.2 0 0 0 8.5 17.5Z"/><path d="M9.4 11.4a3.3 3.3 0 0 1 5.7-1.8"/></svg>',
      "Red Hat": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 13.2c1.1-2.8 4-4.6 6.9-4.6 2.7 0 4.7 1.4 4.7 3.4 0 2.4-2.6 4.1-6.1 4.1-2.7 0-4.9-1-5.5-2.9Z"/><path d="M8.6 8.8c.8-1.9 2.8-3.3 4.9-3.3 1.9 0 3.2.9 3.2 2.3 0 1.7-1.8 2.8-4.4 2.8-1.8 0-3.2-.6-3.7-1.8Z"/></svg>'
    };
    return icons[name] || examModuleIcon("global");
  }

  function enquiryForm(formId, examType, buttonLabel) {
    return '<form class="exam-form" id="' + formId + '" data-enquiry-form data-exam-type="' + examType + '">' +
      '<div class="exam-form-grid">' +
      '<label><span>Name</span><input type="text" name="name" placeholder="Enter your name" required /></label>' +
      '<label><span>Email</span><input type="email" name="email" placeholder="Enter your email" required /></label>' +
      '<label><span>Phone</span><input type="tel" name="phone" placeholder="Enter your phone number" required /></label>' +
      '<label><span>Exam Type</span><input type="text" name="examType" value="' + examType + '" readonly /></label>' +
      '</div>' +
      '<article class="glass exam-social-confirmation">' +
      '<div class="exam-form-card-header"><div><span class="eyebrow">Social Media</span><h3>Follow Confirmation</h3><p class="muted">Visit our social channels, then confirm before submitting this form.</p></div><div class="exam-icon-badge"><svg viewBox="0 0 24 24" aria-hidden="true" style="width:1.8rem;height:1.8rem;stroke:#fff;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round"><circle cx="18" cy="5" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="19" r="2"/><path d="m8 10.7 8-4.4M8 13.3l8 4.4"/></svg></div></div>' +
      '<div class="exam-social-links">' +
      examFeedbackSocials.map(item => '<a class="exam-social-link" href="' + item[1] + '" target="_blank" rel="noreferrer noopener" aria-label="' + item[0] + '"><span class="exam-social-icon">' + socialIcon(item[2]) + '</span><span>' + item[0] + '</span></a>').join("") +
      '</div>' +
      '<label class="exam-checkbox-row"><input type="checkbox" name="followConfirmed" data-follow-confirm required /><span>I confirm that I visited the social media section and followed your page</span></label>' +
      '</article>' +
      '<label><span>Message</span><textarea name="message" placeholder="Tell us which exam, batch, or support you need." required></textarea></label>' +
      '<div class="exam-form-actions"><button class="btn btn-primary" type="submit">' + buttonLabel + '</button></div>' +
      '</form>';
  }

  function examSeoHeroSection() {
    return '<section class="section hero"><div class="container" style="text-align:center;max-width:64rem;">' +
      '<span class="eyebrow" style="justify-content:center;">International Exams &amp; Certifications</span>' +
      '<h1 class="gradient-text" style="font-size:clamp(2.2rem,5vw,4.1rem);margin:0.75rem 0 1rem;">Authorized LanguageCert & International Certification Exam Center</h1>' +
      '<p class="lead" style="max-width:60rem;margin:0 auto;">Authorized international certification center providing LanguageCert, CELPIP, and BeingCert exams for students, professionals, and migration candidates in Madurai, Pondicherry, and Tamil Nadu.</p>' +
      '<p class="lead" style="max-width:60rem;margin:1rem auto 0;">Secure examination services for English language certification, professional certification exams, and global qualification opportunities in South India.</p>' +
      '</div></section>';
  }

  function examSeoWhyChooseSection() {
    return '<section class="section exam-shell section-muted" id="exam-why-choose"><div class="container">' +
      sectionHeader("Why Choose iLogic Tech", "Professional &amp; Authorized Exam Support", "Key advantages for international exams and certification services in South India.") +
      '<article class="glass card reveal">' +
      list(["Authorized examination support", "International certification services", "LanguageCert examination assistance", "CELPIP examination support", "Prometric partner support", "BeingCert certification services", "Professional candidate assistance", "Secure examination process", "Convenient registration guidance", "Support for international certification requirements"]) +
      '</article>' +
      '</div></section>';
  }

  function examSeoLocationsSection() {
    const locations = ["Madurai", "Pondicherry", "Chennai", "Coimbatore", "Trichy", "Salem", "Tirunelveli", "Tamil Nadu", "South India"];
    return '<section class="section exam-shell" id="exam-locations"><div class="container">' +
      sectionHeader("Locations We Serve", "Madurai, Pondicherry &amp; Nearby Regions", "Candidates from surrounding areas can connect with iLogic Tech for authorized exam services.") +
      '<article class="glass card reveal"><div class="tag-list exam-location-tags" style="justify-content:center;">' +
      locations.map(item => '<span>' + item + '</span>').join("") +
      '</div></article>' +
      '</div></section>';
  }

  function examSeoFaqSection() {
    const faqs = [
      ["What exams are available at iLogic Tech?", "We provide authorized support for LanguageCert, CELPIP, and BeingCert examinations and certification services."],
      ["Is iLogic Tech an authorized LanguageCert partner?", "Yes, iLogic Tech supports LanguageCert examination services in Pondicherry."],
      ["Do you support CELPIP examinations?", "Yes, we provide CELPIP examination support in Pondicherry through Prometric partner services."],
      ["Who can register for international certification exams?", "Students, professionals, migration candidates, and job seekers can register for international certification examinations."]
    ];
    return '<section class="section exam-shell" id="exam-faq"><div class="container">' +
      sectionHeader("FAQ", "Frequently Asked Questions", "Quick answers for candidates planning to register for international exams and certifications.") +
      '<div class="grid-2 reveal">' +
      faqs.map(item => '<article class="glass card"><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p></article>').join("") +
      '</div>' +
      '</div></section>';
  }

  function examSeoConclusionSection() {
    return '<section class="section exam-shell section-muted" id="exam-conclusion"><div class="container">' +
      sectionHeader("Get Started", "Trusted Exam Support in Tamil Nadu", "") +
      '<article class="glass card reveal"><p class="lead" style="max-width:62rem;margin:0 auto;text-align:justify;">iLogic Tech is a trusted provider of authorized international examination and certification services in Pondicherry, Tamil Nadu and surrounding areas. Through LanguageCert examinations, CELPIP Prometric partner services, and BeingCert certification support, we enable candidates to access internationally recognized certifications for higher education, professional development, career advancement, immigration, and global opportunities.</p>' +
      '<p class="lead" style="max-width:62rem;margin:1rem auto 0;text-align:justify;">LanguageCert exam center in Pondicherry, CELPIP exam support near Pondicherry, Prometric partner services, or BeingCert certification assistance can contact iLogic Tech for reliable and authorized examination support. Our team offers expert guidance for exam registration, certification preparation, language proficiency testing, professional certifications, and internationally recognized qualifications to support education, immigration, and career advancement goals.</p></article>' +
      '</div></section>';
  }

  function examHubSection() {
    const examSectionId = (kind) => {
      if (kind === "global") return "global-certifications";
      if (kind === "academic") return "academic-partner";
      if (kind === "celpip") return "celpip";
      return "languagecert";
    };
    return '<section class="section exam-shell section-muted" id="exam"><div class="container">' +
      sectionHeader("Exam", "International Exam &amp; Certification Services", "Explore LanguageCert, CELPIP, and BeingCert certification programs, exam registration, partnership opportunities, and support services.") +
      '<div class="exam-grid exam-grid-3">' +
      examCategories.map(item => '<article class="glass card reveal exam-feature-card"><div class="exam-icon-badge' + (item[2] === "academic" || item[2] === "languagecert" || item[2] === "global" || item[2] === "celpip" ? ' exam-logo-badge' : '') + '">' + examModuleIcon(item[2]) + '</div><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p><a class="btn btn-secondary" href="#exam-' + examSectionId(item[2]) + '">View Details</a></article>').join("") +
      '</div>' +
      '</div></section>';
  }

  function celpipExamSection() {
    return '<section class="section exam-shell" id="exam-celpip"><div class="container">' +
      '<div class="exam-panel glass reveal">' +
      '<div class="exam-panel-copy">' +
      '<span class="eyebrow">CELPIP Exams</span>' +
      '<h2 class="gradient-text">Authorized CELPIP Exam Support in Pondicherry (Prometric Partner)</h2>' +
      '<p class="lead">iLogic Tech supports candidates preparing for CELPIP examinations in Pondicherry through authorized Prometric partner examination support, registration assistance, and expert certification guidance. CELPIP is one of the leading English language proficiency examinations recognized for Canadian immigration, permanent residency (PR), work permits, citizenship applications, study abroad opportunities, and international career advancement.</p>' +
      '<div class="exam-chip-row"><span>CELPIP-General</span><span>CELPIP-General LS</span><span>Canada PR &amp; Work</span></div>' +
      '<div class="detail-actions"><a class="btn btn-primary" href="https://www.celpip.ca/india" target="_blank" rel="noreferrer noopener">Official Website</a><button class="btn btn-secondary" type="button" data-exam-toggle-form="celpipForm">Enquire Now</button></div>' +
      '</div>' +
      '<div class="exam-panel-art"><div class="exam-hero-mark exam-logo-badge">' + examModuleIcon("celpip") + '</div><p>Prometric partner assistance for exam selection, registration, and exam-day readiness.</p></div>' +
      '</div>' +
      '<article class="glass card reveal" style="margin-top:1.25rem;"><h3>Support available for candidates</h3>' +
      '<p class="muted">Candidates reach out to iLogic Tech for CELPIP registration assistance in Pondicherry, Prometric partner examination support, and expert guidance on choosing the appropriate CELPIP test for Canada PR, work permits, citizenship, study, and professional opportunities. If you are searching for CELPIP exam registration, English proficiency certification, or Canada immigration test support in Tamil Nadu, our team can help you through every step of the process.</p>' +
      '</article>' +
      '<div class="glass card reveal exam-form-card is-hidden" id="celpipFormWrap">' + enquiryForm("celpipForm", "CELPIP", "Submit Enquiry") + '</div>' +
      '</div></section>';
  }

  function languageCertExamSection() {
    return '<section class="section exam-shell" id="exam-languagecert"><div class="container">' +
      '<div class="exam-panel glass reveal">' +
      '<div class="exam-panel-copy">' +
      '<span class="eyebrow">LanguageCert Exams</span>' +
      '<h2 class="gradient-text">Authorized LanguageCert Exam Center in Madurai &amp; Pondicherry</h2>' +
      '<p class="lead">Authorized LanguageCert examination and certification services for international education, career development, and global opportunities in Pondicherry.</p>' +
      '<div class="exam-chip-row"><span>Registration Support</span><span>English Certification</span><span>International Exam Access</span></div>' +
      '<div class="detail-actions"><a class="btn btn-primary" href="exam.html?slug=languagecert">View Full Exam Page</a><button class="btn btn-secondary" type="button" data-exam-toggle-form="languagecertForm">Enquire Now</button></div>' +
      '</div>' +
      '<div class="exam-panel-art"><div class="exam-hero-mark exam-logo-badge">' + examModuleIcon("languagecert") + '</div><p>Guidance for internationally trusted English proficiency and certification pathways.</p></div>' +
      '</div>' +
      '<div class="exam-grid exam-grid-2" style="margin-top:1.25rem;">' +
      '<article class="glass card reveal"><h3>Authorized LanguageCert Exam Center in Madurai</h3><p class="muted" style=text-align:left; >LanguageCert registration, exam booking, and certification support for study, work, and migration opportunities in Pondicherry. Providing expert guidance for internationally recognized English language certifications and global career advancement.</p></article>' +
      '<article class="glass card reveal"><h3>Authorized LanguageCert Exam Center in Pondicherry</h3><p class="muted" style=text-align:left; >Authorized LanguageCert exam registration and English proficiency certification support in Pondicherry. Helping students, professionals, and migration candidates achieve internationally recognized language certifications.</p></article>' +
      '</div>' +
      '<div class="glass card reveal exam-form-card is-hidden" id="languagecertFormWrap">' + enquiryForm("languagecertForm", "LanguageCert", "Submit Enquiry") + '</div>' +
      '</div></section>';
  }

  function academicPartnerSection() {
    return '<section class="section exam-shell section-muted" id="exam-academic-partner"><div class="container">' +
      '<div class="exam-grid exam-grid-2">' +
      '<article class="glass card reveal exam-partner-card"><div class="exam-badge">Authorized Partner Support</div><div class="exam-partner-logos"><div class="exam-partner-logo-frame"><img src="' + languageCertLogo + '" alt="LanguageCert logo" /></div><div class="exam-partner-logo-frame"><img src="' + academicPartnerLogo + '" alt="Academic Partner logo" /></div></div><h3>Authorized BeingCert Certification Support in Pondicherry</h3><p class="muted">iLogic Tech provides authorized BeingCert certification support for candidates and professionals seeking international certification recognition and professional qualification opportunities.</p><button class="btn btn-primary" type="button" data-exam-toggle-form="academicPartnerForm">Enquire Now</button></article>' +
      '<article class="glass card reveal exam-equal-card"><h3>Who this is for</h3><p class="muted" style=text-align:justify;>This support is ideal for candidates searching for BeingCert certification in Pondicherry, professionals exploring internationally recognized certification programs, and educational institutions seeking a trusted certification partner in Tamil Nadu. Our services include certification guidance, examination coordination, professional development support, and structured certification pathways aligned with global industry standards.</p></article>' +
      '</div>' +
      '<div class="glass card reveal exam-form-card is-hidden" id="academicPartnerFormWrap">' + enquiryForm("academicPartnerForm", "Academic Partner (BeingCert)", "Send Enquiry") + '</div>' +
      '</div></section>';
  }

  function globalCertificationSection() {
    return '<section class="section exam-shell" id="exam-global-certifications"><div class="container">' +
      sectionHeader("Global Certification Programs", "Industry Certifications for Career Growth", "Choose from in-demand certification tracks and connect with our team for registration, counselling, and preparation support.") +
      '<div class="exam-grid exam-grid-3">' +
      certificationPrograms.map(item => {
        const slug = item[0].toLowerCase().replace(/\+/g, "plus").replace(/\s+/g, "-");
        return '<article class="glass card reveal exam-cert-card"><div class="exam-icon-badge exam-cert-icon-badge">' + certificationProgramIcon(item[0]) + '</div><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p><a class="btn btn-secondary" href="exam.html?slug=' + slug + '">View Separate Page</a></article>';
      }).join("") +
      '</div>' +
      '<article class="glass card reveal exam-form-card exam-form-card-inline" id="exam-enquiry"><div class="exam-form-card-header"><div><span class="eyebrow">Exam Enquiry</span><h3>Enquire Now</h3><p class="muted">Share your preferred certification and our team will help you with the next steps.</p></div><div class="exam-icon-badge">' + examModuleIcon("enquiry") + '</div></div>' + enquiryForm("globalCertificationForm", "Global Certification Program", "Submit Enquiry") + '</article>' +
      '</div></section>';
  }

  function sendEnquiryMail(data) {
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const examType = String(data.get("examType") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = ["Exam Enquiry", "", "Name: " + name, "Email: " + email, "Phone: " + phone, "Exam: " + examType, "", "Message:", message].join("\n");
    window.location.href = "mailto:" + hrEmail + "?cc=" + encodeURIComponent(email) + "&subject=" + encodeURIComponent("Exam Enquiry - " + examType) + "&body=" + encodeURIComponent(body);
  }

  function examDomainPage() {
    const slug = new URLSearchParams(window.location.search).get("slug") || "languagecert";
    const detail = examDomainDetails[slug];
    if (!detail) {
      app.innerHTML = header(false) + '<main class="empty-state"><div><h1 class="gradient-text">Exam page not found</h1><p class="lead">The requested exam page could not be found.</p><a class="btn btn-primary" href="exam.html">Back to Exams</a></div></main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
      return;
    }
    app.innerHTML = header(false) +
      '<main class="exam-detail-page">' +
      '<section class="section exam-shell exam-detail-hero"><div class="container">' +
      '<div class="exam-panel glass reveal">' +
      '<div class="exam-panel-copy">' +
      '<span class="eyebrow">' + detail.eyebrow + '</span>' +
      '<h1 class="gradient-text">' + detail.title + '</h1>' +
      '<p class="lead">' + detail.summary + '</p>' +
      '<div class="exam-chip-row">' + detail.levels.map(function(level) {
        return '<span>' + level + '</span>';
      }).join("") + '</div>' +
      '<div class="detail-actions"><a class="btn btn-primary" href="#exam-detail-form">Apply for This Exam</a><a class="btn btn-secondary" href="' + (detail.backHref || 'exam.html') + '">Back to Exam Hub</a></div>' +
      '</div>' +
      '<div class="exam-panel-art exam-panel-art-banner"><img src="' + examBannerImage + '" alt="Indian certification banner" /><p>' + detail.intro + '</p></div>' +
      '</div>' +
      '</div></section>' +
      '<section class="section exam-shell section-muted"><div class="container">' +
      sectionHeader("Exam Overview", detail.overviewTitle || "Detailed Listing", detail.overviewIntro || "Each exam domain is now separated into its own page while keeping the same application UI and color language.") +
      '<div class="exam-grid exam-grid-3">' +
      '<article class="glass card reveal exam-cert-card"><h3>Exam Levels</h3><div class="exam-points-list">' + detail.levels.map(function(level) {
        return '<div><strong>' + level + '</strong><p class="muted">Available pathway supported through our exam guidance flow.</p></div>';
      }).join("") + '</div></article>' +
      '<article class="glass card reveal exam-cert-card"><h3>Benefits Provided</h3><div class="exam-points-list">' + detail.benefits.map(function(item) {
        return '<div><p class="muted">' + item + '</p></div>';
      }).join("") + '</div></article>' +
      '<article class="glass card reveal exam-cert-card"><h3>Additional Details</h3><div class="exam-points-list">' + detail.extras.map(function(item) {
        return '<div><p class="muted">' + item + '</p></div>';
      }).join("") + '</div></article>' +
      '</div>' +
      '</div></section>' +
      '<section class="section exam-shell"><div class="container">' +
      sectionHeader("Different Rounds", detail.roundsTitle || "How the Journey Is Organized", detail.roundsIntro || "The flow below separates the typical stages involved before the final certification attempt.") +
      '<div class="exam-grid exam-grid-2">' + detail.rounds.map(function(round, index) {
        return '<article class="glass card reveal exam-partner-card"><div class="exam-badge">Round ' + (index + 1) + '</div><h3>' + round[0] + '</h3><p class="muted">' + round[1] + '</p></article>';
      }).join("") + '</div>' +
      '</div></section>' +
      '<section class="section exam-shell section-muted" id="exam-detail-form"><div class="container">' +
      '<article class="glass card reveal exam-form-card exam-form-card-inline"><div class="exam-form-card-header"><div><span class="eyebrow">Apply Now</span><h3>' + detail.title + '</h3><p class="muted">Submit your details to prepare an enquiry email to both you and our HR team.</p></div><div class="exam-icon-badge' + (slug === "languagecert" ? ' exam-logo-badge' : '') + '">' + (slug === "languagecert" ? examModuleIcon("languagecert") : examModuleIcon("enquiry")) + '</div></div>' +
      enquiryForm("examDetailEnquiryForm", detail.title, "Submit Enquiry") +
      '</article>' +
      '</div></section>' +
      '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal() + examNotification();
  }

  function examFeedbackSection() {
    return '<section class="section exam-shell section-muted" id="exam-feedback"><div class="container">' +
      sectionHeader("Feedback", "Stay Connected and Share Your Experience", "Follow iLogic Tech on social media, then send us your feedback through a simple verified form.") +
      '<div class="exam-grid exam-grid-2 exam-feedback-layout">' +
      '<article class="glass card reveal exam-social-card"><h3>Social Media Follow</h3><div class="exam-social-links">' +
      examFeedbackSocials.map(item => '<a class="exam-social-link" href="' + item[1] + '" target="_blank" rel="noreferrer noopener" aria-label="' + item[0] + '"><span class="exam-social-icon">' + socialIcon(item[2]) + '</span><span>' + item[0] + '</span></a>').join("") +
      '</div></article>' +
      '<article class="glass card reveal exam-feedback-card"><div class="exam-form-card-header"><div><h3>Feedback Form</h3><p class="muted">Rate your experience and let us know how we can improve.</p></div><div class="exam-icon-badge"><svg viewBox="0 0 24 24" aria-hidden="true" style="width:1.8rem;height:1.8rem;stroke:#fff;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round"><path d="M12 17.5l-5 2.5 1-5.5-4-4 5.5-.8L12 4.5l2.5 5.2 5.5.8-4 4 1 5.5z"/></svg></div></div>' +
      '<form class="exam-form exam-feedback-form" id="examFeedbackForm">' +
      '<div class="exam-form-grid">' +
      '<label><span>Name</span><input type="text" name="name" placeholder="Enter your name" required /></label>' +
      '<label><span>Email</span><input type="email" name="email" placeholder="Enter your email" required /></label>' +
      '</div>' +
      '<div class="exam-rating-block"><span class="exam-rating-label">Rating</span><div class="exam-feedback-stars" role="radiogroup" aria-label="Rate your experience">' + [1, 2, 3, 4, 5].map(value => '<button class="exam-feedback-star" type="button" data-exam-feedback-rating="' + value + '" role="radio" aria-checked="false" aria-label="' + value + ' star' + (value > 1 ? 's' : '') + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.8 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3.8Z"/></svg></button>').join("") + '</div><input type="hidden" id="examFeedbackRating" value="" /></div>' +
      '<label><span>Message</span><textarea name="message" placeholder="Share your feedback with us." required></textarea></label>' +
      '<label class="exam-checkbox-row"><input type="checkbox" id="examFollowConfirm" /><span>I confirm that I have followed your social media accounts</span></label>' +
      '<div class="exam-form-actions"><button class="btn btn-primary" id="examFeedbackSubmit" type="submit" disabled>Submit Feedback</button></div>' +
      '</form>' +
      '</article>' +
      '</div>' +
      '</div></section>';
  }

  function examNotification() {
    return '<div class="exam-toast" id="examToast" role="status" aria-live="polite" aria-atomic="true"></div>';
  }

  function buildWhatsAppPrefill(name) {
    const trimmedName = String(name || "").trim();
    return trimmedName ? "Hi Sir, I'm " + trimmedName + "." : "Hi Sir, I'm ";
  }

  function buildWhatsAppUrl(phone, name) {
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(buildWhatsAppPrefill(name));
  }

  function topbarWhatsAppIcon() {
    return '<svg viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#25D366"/><path fill="#fff" d="M24 10C16.27 10 10 16.27 10 24c0 2.52.68 4.88 1.86 6.92L10 38l7.32-1.82A13.94 13.94 0 0 0 24 38c7.73 0 14-6.27 14-14S31.73 10 24 10Zm0 2c6.62 0 12 5.38 12 12s-5.38 12-12 12c-2.2 0-4.26-.6-6.03-1.64l-.43-.26-4.34 1.08 1.1-4.2-.28-.45A11.93 11.93 0 0 1 12 24c0-6.62 5.38-12 12-12Zm-4.1 5.5c-.26 0-.67.1-.97.43-.3.33-1.16 1.14-1.16 2.78 0 1.64 1.19 3.22 1.35 3.44.17.22 2.3 3.66 5.67 4.99 2.8 1.1 3.37.88 3.97.83.6-.06 1.94-.8 2.21-1.57.28-.77.28-1.43.2-1.57-.09-.13-.32-.2-.66-.37-.35-.17-2.06-1.02-2.38-1.13-.32-.12-.56-.17-.79.17-.23.33-.9 1.13-1.1 1.36-.2.23-.4.26-.74.09-.34-.18-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.56.12-.23.06-.43-.02-.6-.09-.17-.76-1.84-1.06-2.52-.27-.64-.56-.56-.77-.57l-.66-.01Z"/></svg>';
  }

  function topContactBar() {
    return '<div class="header-topbar"><div class="container"><div class="header-topbar-inner"><div class="topbar-enquiry"><span class="topbar-icon topbar-whatsapp-icon" aria-hidden="true">' + topbarWhatsAppIcon() + '</span><span class="topbar-enquiry-label">Enquiry Now:</span><div class="topbar-phone-links">' + enquiryNumbers.map(function(item, index) {
      return '<a class="topbar-phone" href="' + buildWhatsAppUrl(item.whatsapp, "") + '" data-whatsapp-link data-phone="' + item.whatsapp + '" aria-label="Open WhatsApp chat with ' + item.label + '">' + item.label + '</a>' + (index < enquiryNumbers.length - 1 ? '<span class="topbar-separator">/</span>' : '');
    }).join("") + '</div></div>' + socialLinks("topbar-social") + '</div></div></div>';
  }

  function mapEmbedUrl(mapUrl) {
    if (!mapUrl) return "";
    const match = String(mapUrl).match(/[?&]query=([^&]+)/);
    if (match && match[1]) return "https://www.google.com/maps?q=" + match[1] + "&z=15&output=embed";
    const placeMatch = String(mapUrl).match(/\/maps\/place\/([^/@?]+)/);
    if (placeMatch && placeMatch[1]) return "https://www.google.com/maps?q=" + encodeURIComponent(decodeURIComponent(placeMatch[1]).replace(/\+/g, " ")) + "&z=15&output=embed";
    return "";
  }

  function header(isHome) {
    return '<header class="site-header">' + topContactBar() + '<div class="container"><div class="site-header-inner"><a class="brand" href="index.html#home"><img src="' + logo + '" alt="iLogic Tech" /></a><nav class="nav">' + navLinks.map(item => '<div class="nav-item" data-nav-countries="' + (item.countries || ["SG", "IN"]).join(",") + '"><a class="nav-link" href="' + item.href + '">' + item.label + (item.submenu ? '<span class="caret" aria-hidden="true"></span>' : '') + '</a>' + (item.submenu ? '<div class="submenu glass">' + item.submenu.map(sub => '<a class="submenu-link" href="' + sub[1] + '">' + sub[0] + '</a>').join("") + '</div>' : '') + '</div>').join("") + '</nav><div class="desktop-actions header-actions">' + countryToggle("country-toggle-desktop") + '</div><button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav"><span></span><span></span><span></span></button></div><div class="mobile-nav" id="mobileNav">' + countryToggle("country-toggle-mobile") + navLinks.map(item => '<div class="mobile-item" data-nav-countries="' + (item.countries || ["SG", "IN"]).join(",") + '">' + (item.submenu ? '<button class="mobile-link" type="button" aria-expanded="false"><span>' + item.label + '</span><span class="caret" aria-hidden="true"></span></button><div class="mobile-submenu">' + item.submenu.map(sub => '<a href="' + sub[1] + '">' + sub[0] + '</a>').join("") + '</div>' : '<a class="mobile-link" href="' + item.href + '">' + item.label + '</a>') + '</div>').join("") + '</div></div></header>';
  }

  function footer() {
    return '<footer class="footer"><div class="container"><div class="footer-grid"><div><img src="' + logo + '" alt="iLogic Tech" style="height:3rem;margin-bottom:1rem;" /><p class="muted" style="color:rgba(255,245,239,0.72);max-width:22rem;">Smarter business for a smarter tomorrow. Driving digital transformation across Singapore, India, Kuwait, and Ireland.</p>' + socialLinks("footer-social") + '</div><div><h4>Services</h4><ul><li><a href="index.html#services">Software Development</a></li><li><a href="index.html#services">Mobile and Web Apps</a></li><li><a href="index.html#services">Cybersecurity</a></li><li><a href="index.html#services">Networking and CCTV</a></li></ul></div><div><h4>Programs & Careers</h4><ul><li><a href="internship.html">Internship Program</a></li><li><a href="jobs.html">Job Opportunities</a></li><li><a href="projects.html">Final Year Projects</a></li><li><a href="languagecert.html">LanguageCert Courses</a></li></ul></div><div><h4>Contact</h4><ul><li>+65 90175062</li><li>+91 72000 05541</li><li>info@ilogic.com.sg</li><li>www.ilogic.com.sg</li></ul></div></div><div class="footer-bottom">Copyright ' + new Date().getFullYear() + ' iLogic Tech Pte Ltd. All rights reserved.</div></div></footer>';
  }

  function whatsappFloat() {
    return '';
  }

  function googleFeedbackFloat() {
    return '<button class="google-feedback-float" id="googleFeedbackOpen" type="button" aria-label="Open feedback form" title="Leave feedback"><span class="google-mark" aria-hidden="true"><svg viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5Z"/><path fill="#FF3D00" d="M6.3 14.7 12.9 19.5C14.7 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44Z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-2.9 5.1-5.4 6.7l.1-.1 6.3 5.3C35.9 40.2 44 34 44 24c0-1.2-.1-2.3-.4-3.5Z"/></svg></span></button>';
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function(character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      } [character] || character;
    });
  }

  function avatarInitials(name) {
    return String(name || "User").split(/\s+/).filter(Boolean).map(part => part[0]).join("").slice(0, 2).toUpperCase() || "U";
  }

  function testimonialCardMarkup(item) {
    return '<article class="glass card reveal is-visible">' +
      '<div class="review-header"><div class="avatar-badge">' + avatarInitials(item.name) + '</div><div><h3 style="margin:0;">' + escapeHtml(item.name) + '</h3><p class="muted" style="margin:0.2rem 0 0;">' + escapeHtml(item.company) + ' | ' + escapeHtml(item.role) + '</p></div></div>' +
      '<p class="stars">' + Array((item.rating || 0) + 1).join("★") + '</p><p class="muted">' + escapeHtml(item.message) + '</p></article>';
  }

  function feedbackModal() {
    return '<div class="feedback-modal" id="feedbackModal" aria-hidden="true">' +
      '<div class="feedback-modal-backdrop" data-feedback-close></div>' +
      '<div class="feedback-modal-dialog" role="dialog" aria-modal="true" aria-label="Leave feedback">' +
      '<button class="feedback-modal-close" type="button" data-feedback-close aria-label="Close feedback form">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
      '</button>' +
      '<div class="feedback-modal-header">' +
      '<div class="feedback-modal-brand"><img class="feedback-modal-logo" src="iLogo_logo.webp" alt="iLogic Tech logo" loading="lazy" /></div>' +
      '<div><p class="feedback-modal-kicker">Google-style Feedback</p><h3>Share your Feedback</h3><p class="feedback-modal-subtitle">Leave a rating and feedback for iLogic Tech.</p></div>' +
      '</div>' +
      '<form class="feedback-form" id="feedbackForm">' +
      '<div class="feedback-fields-grid">' +
      '<label class="feedback-field"><span>User Name</span><input id="feedbackUserName" type="text" maxlength="80" placeholder="Enter your name" required /></label>' +
      '<label class="feedback-field"><span>User Company Name</span><input id="feedbackCompanyName" type="text" maxlength="100" placeholder="Enter your company name" required /></label>' +
      '<label class="feedback-field feedback-field-full"><span>User Role</span><input id="feedbackUserRole" type="text" maxlength="80" placeholder="Enter your role" required /></label>' +
      '</div>' +
      '<div class="feedback-stars" id="feedbackStars" role="radiogroup" aria-label="Rate your experience">' + [1, 2, 3, 4, 5].map(value => '<button class="feedback-star" type="button" data-feedback-rating="' + value + '" role="radio" aria-checked="false" aria-label="' + value + ' star' + (value > 1 ? 's' : '') + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.8 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3.8Z"/></svg></button>').join("") +
      '</div>' +
      '<input type="hidden" id="feedbackRating" value="" />' +
      '<label class="feedback-label" for="feedbackMessage">Your feedback</label>' +
      '<textarea id="feedbackMessage" maxlength="500" placeholder="Share details of your experience with our services..." required></textarea>' +
      '<p class="feedback-note">Format: User Name, User Company Name, User Role, Rating, Feedback.</p>' +
      '<p class="feedback-warning" id="feedbackWarning" hidden>Negative or abusive comments are not allowed. Words like bad, poor, not satisfied, wrong, fake, and abusive terms will disable posting.</p>' +
      '<div class="feedback-form-actions"><button class="btn btn-secondary" type="button" data-feedback-close>Cancel</button><button class="btn btn-primary" id="feedbackPostButton" type="submit" disabled>Post</button></div>' +
      '<p class="feedback-success" id="feedbackSuccess" hidden>Your feedback was submitted successfully.</p>' +
      '</form>' +
      '</div>' +
      '</div>';
  }

  function walkInPosterModal() {
    return '';
  }

  function hiringWidget() {
    return '<div class="hiring-widget-wrap" id="hiringWidgetWrap">' +
      '<button class="hiring-widget" id="hiringWidget" type="button" aria-label="Open internship program chatbot">' +
      '<span class="hiring-widget-icon" aria-hidden="true">' +
      '<svg class="hiring-widget-ring" viewBox="0 0 140 140">' +
      '<defs><path id="hiringWidgetCircleText" d="M24,74 A46,46 0 0,1 116,74"/></defs>' +
      '<text><textPath href="#hiringWidgetCircleText" startOffset="50%">Join Internship</textPath></text>' +
      '</svg>' +
      '<span class="hiring-widget-core">' +
      '<img src="src/assets/chatbot.webp" alt="Chatbot assistant" loading="lazy" />' +
      '</span>' +
      '</span>' +
      '</button>' +
      '<div class="hiring-widget-notice" id="hiringWidgetNotice" aria-live="polite">Join Internship</div>' +
      '</div>';
  }

  function internshipChatbotModal() {
    return '<div class="hiring-chatbot" id="hiringChatbot" aria-hidden="true">' +
      '<div class="hiring-chatbot-backdrop" data-hiring-close></div>' +
      '<div class="hiring-chatbot-dialog glass" role="dialog" aria-modal="true" aria-label="Internship program chatbot">' +
      '<div class="hiring-chatbot-header">' +
      '<div><p class="hiring-chatbot-kicker">Career & Exam Support</p><h3>Ask about internships or exam enquiries</h3></div>' +
      '<div class="hiring-chatbot-actions">' +
      '<button class="hiring-chatbot-refresh" type="button" data-hiring-refresh aria-label="Restart chat">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3v6h-6"/><path d="M20.49 15A9 9 0 1 1 21 9"/></svg>' +
      '</button>' +
      '<button class="hiring-chatbot-close" type="button" data-hiring-close aria-label="Close internship chatbot">' +
      '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '<div class="hiring-chatbot-body">' +
      '<div class="hiring-chatbot-messages" id="hiringMessages" aria-live="polite"></div>' +
      '<div class="hiring-apply-panel" id="hiringApplyPanel" hidden>' +
      '<div class="hiring-apply-head">' +
      '<div><p class="hiring-chatbot-kicker">Quick Apply</p><h4>Apply within chat</h4></div>' +
      '<button type="button" class="btn btn-secondary" data-hiring-apply-close>Close</button>' +
      '</div>' +
      '<div class="hiring-role-selector" id="hiringRoleSelector">' +
      '<p>Select the role first</p>' +
      internshipTracks.map(track => '<button type="button" data-hiring-role="' + track.title + '">' + track.title + '</button>').join("") +
      '</div>' +
      '<form class="hiring-apply-form" id="hiringApplyForm" hidden>' +
      '<label>Full Name<input name="name" required /></label>' +
      '<label>Email Address<input type="email" name="email" required /></label>' +
      '<label>Phone Number<input name="phone" required /></label>' +
      '<label>Internship Track<input name="track" id="hiringSelectedTrack" readonly required /></label>' +
      '<label>Why should we select you?<textarea name="message" required></textarea></label>' +
      '<button class="btn btn-primary" type="submit">Submit Application</button>' +
      '<p class="hiring-apply-note">Applications are prepared for <strong>hr@ilogic.com.sg</strong> in your default email app.</p>' +
      '</form>' +
      '</div>' +
      '<div class="hiring-quick-actions" id="hiringQuickActions">' +
      '<button type="button" data-hiring-question="Show internship tracks">Tracks</button>' +
      '<button type="button" data-hiring-question="What are the requirements?">Requirements</button>' +
      '<button type="button" data-hiring-question="How does the internship process work?">Process</button>' +
      '<button type="button" data-hiring-apply-open>Apply for Internship</button>' +
      '<button type="button" data-hiring-question="Enquire about exams">Exam Enquiry</button>' +
      '<button type="button" data-hiring-question="Apply for an exam">Apply for Exam</button>' +
      '</div>' +
      '<form class="hiring-chat-input" id="hiringChatForm">' +
      '<input id="hiringChatInput" type="text" placeholder="Ask about internships, tracks, or exam enquiries" autocomplete="off" />' +
      '<button class="btn btn-primary" type="submit">Send</button>' +
      '</form>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function contactIcon(type) {
    const icons = {
      location: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0"/></svg>',
      phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 5.8h2.4l1.2 3.1-1.5 1.6a13.7 13.7 0 0 0 3.9 3.9l1.6-1.5 3.1 1.2v2.4c0 .7-.5 1.2-1.2 1.2A11.7 11.7 0 0 1 6.3 7c0-.7.5-1.2 1.2-1.2Z"/></svg>',
      email: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="m5 8 7 5 7-5"/></svg>',
      web: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16"/></svg>',
      hours: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2"/><path d="M12 7.5V12l3.2 2"/></svg>',
      copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8.5" y="8.5" width="10.5" height="10.5" rx="2"/><path d="M15 8.5V6.5A2 2 0 0 0 13 4.5H6.5a2 2 0 0 0-2 2V13a2 2 0 0 0 2 2H8.5"/></svg>',
      vcard: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><circle cx="9" cy="11" r="1.8"/><path d="M6 16.2c.5-1.6 1.7-2.4 3-2.4s2.5.8 3 2.4"/><path d="M14.2 10h4M14.2 13h4"/></svg>',
      whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 17.4 5 19l1.65-.44A7.9 7.9 0 1 0 4.1 12a7.9 7.9 0 0 0 1.15 4.1Z"/><path d="M9 9.6c0-.5.4-1 .9-1h.6c.3 0 .6.2.7.5l.6 1.5c.1.3 0 .6-.2.8l-.6.6a5.6 5.6 0 0 0 2.5 2.5l.6-.6c.2-.2.5-.3.8-.2l1.5.6c.3.1.5.4.5.7v.6c0 .5-.5.9-1 .9-3.5 0-6.9-3.4-6.9-6.9Z"/></svg>'
    };
    return icons[type] || icons.phone;
  }

  function branchPhoneMarkup(phone) {
    const phones = String(phone || "").split(",").map(item => item.trim()).filter(Boolean);
    return '<p class="branch-phone"><strong class="branch-phone-label">Phone:</strong> <span class="branch-phone-list">' +
      phones.map((item, index) => '<span class="branch-phone-number">' + item + '</span>' + (index < phones.length - 1 ? '<span class="branch-phone-separator" aria-hidden="true">,</span>' : "")).join("") +
      '</span></p>';
  }

  function branchSection() {
    return '<section class="section section-muted" id="branches" data-country-display="SG,IN"><div class="container">' +
      sectionHeader("Our Branches", "Our Branches", "Explore our offices across Singapore, India, Kuwait, and Ireland.") +
      '<div class="branch-row">' +
      branches.map(item => '<article class="glass branch-card reveal">' +
        (item.map ? '<a class="branch-map-preview" href="' + item.map + '" target="_blank" rel="noreferrer noopener" aria-label="Open live map for ' + item.title + '" title="Open live map for ' + item.title + '">' +
          '<iframe src="' + mapEmbedUrl(item.map) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-hidden="true" tabindex="-1"></iframe>' +
          '<span class="branch-map-overlay"><span class="branch-map-badge">' + contactIcon("location") + '<span>Open Live Map</span></span></span>' +
          '</a>' : '') +
        '<div class="branch-card-head">' +
        '<div><h3>' + item.title + '</h3></div>' +
        (item.map ? '<a class="branch-map-link" href="' + item.map + '" target="_blank" rel="noreferrer noopener" aria-label="Open live map for ' + item.title + '" title="Open map">' + contactIcon("location") + '</a>' : '') +
        '</div>' +
        '<p class="muted branch-address">' + item.address + '</p>' +
        branchPhoneMarkup(item.phone) +
        '</article>').join("") +
      '</div>' +
      '</div></section>';
  }

  function officeStatusMarkup() {
    return '<ul class="office-status-list" id="officeStatusList">' + branches.map(function(item) {
      return '<li class="office-status-row" data-office-tz="' + item.tz + '" data-office-title="' + item.title + '"><span class="office-status-flag" aria-hidden="true">' + item.flag + '</span><span class="office-status-name">' + item.title + '</span><span class="office-status-dot" data-office-dot></span><span class="office-status-text muted" data-office-text>Checking…</span></li>';
    }).join("") + '</ul>';
  }

  function contactQuickActions(kind, value, label) {
    if (kind === "phone") {
      const digits = String(value).replace(/[^\d+]/g, "");
      return '<div class="quick-actions" role="group" aria-label="Quick actions for ' + label + '">' +
        '<button type="button" class="quick-action" data-copy-value="' + value + '" title="Copy number">' + contactIcon("copy") + '<span>Copy</span></button>' +
        '<a class="quick-action" href="tel:' + digits + '" title="Call">' + contactIcon("phone") + '<span>Call</span></a>' +
        '<a class="quick-action" href="#" data-office-whatsapp="' + digits.replace("+", "") + '" title="WhatsApp">' + contactIcon("whatsapp") + '<span>Chat</span></a>' +
        '<button type="button" class="quick-action" data-vcard-phone="' + value + '" title="Save contact">' + contactIcon("vcard") + '<span>Save</span></button>' +
        '</div>';
    }
    return '<div class="quick-actions" role="group" aria-label="Quick actions for ' + label + '">' +
      '<button type="button" class="quick-action" data-copy-value="' + value + '" title="Copy email">' + contactIcon("copy") + '<span>Copy</span></button>' +
      '<a class="quick-action" href="mailto:' + value + '" title="Email">' + contactIcon("email") + '<span>Email</span></a>' +
      '</div>';
  }

  function contactSection() {
    return '<section class="section" id="contact"><div class="container">' + sectionHeader("Contact Us", "Get In Touch", "Ready to transform your business with cutting-edge technology? Let us talk about how we can help.") +
      '<div class="contact-grid">' +
      '<div class="contact-stack">' +
        '<div class="glass card reveal smart-routing-card" id="smartRoutingCard"><div class="contact-item"><div class="contact-icon" aria-hidden="true">' + contactIcon("location") + '</div><div><strong>Nearest Office</strong><p class="muted" id="smartRoutingText">Detecting your location to route you to the right team…</p></div></div></div>' +
        '<div class="glass card reveal"><div class="contact-item"><div class="contact-icon" aria-hidden="true">' + contactIcon("hours") + '</div><div><strong>Live Office Status</strong><p class="muted" style="margin-bottom:.6rem;">Real-time hours across all our offices</p>' + officeStatusMarkup() + '</div></div></div>' +
        '<div class="glass card reveal"><div class="contact-item"><div class="contact-icon" aria-hidden="true">' + contactIcon("phone") + '</div><div><strong>Phone</strong><p class="muted">+65 90175062 / +91 72000 05541</p>' + contactQuickActions("phone", "+6590175062", "Singapore office") + '</div></div></div>' +
        '<div class="glass card reveal"><div class="contact-item"><div class="contact-icon" aria-hidden="true">' + contactIcon("email") + '</div><div><strong>Email</strong><p class="muted">info@ilogic.com.sg<br>hr@ilogic.com.sg</p>' + contactQuickActions("email", "info@ilogic.com.sg", "iLogic Tech") + '</div></div></div>' +
        '<div class="glass card reveal"><div class="contact-item"><div class="contact-icon" aria-hidden="true">' + contactIcon("web") + '</div><div><strong>Website</strong><p class="muted">www.ilogic.com.sg</p></div></div></div>' +
      '</div>' +
      '<div class="glass card reveal">' +
        '<div class="draft-banner" id="draftBanner" hidden><span>You have an unsent message from earlier.</span><div class="draft-banner-actions"><button type="button" class="btn btn-secondary" id="draftRestoreBtn">Restore</button><button type="button" class="btn btn-ghost" id="draftDiscardBtn">Discard</button></div></div>' +
        '<form class="contact-form" id="contactForm" novalidate>' +
          '<h3 class="gradient-text" style="font-family:Space Grotesk, sans-serif; margin:0;">Send us a message</h3>' +
          '<div class="form-grid"><label>Full Name<input name="name" required /></label><label>Email<input type="email" name="email" required /></label></div>' +
          '<div class="form-grid"><label>Phone<input name="phone" required /></label><label>Subject<input name="subject" value="New enquiry" required /></label></div>' +
          '<label>Message<textarea name="message" required></textarea></label>' +
          '<p class="draft-save-indicator" id="draftSaveIndicator" aria-live="polite"></p>' +
          '<p class="contact-form-status" id="contactFormStatus" role="status" aria-live="polite"></p>' +
          '<div class="contact-form-actions"><button class="btn btn-primary" type="submit">Send Message</button><a class="btn btn-secondary contact-whatsapp-bridge" id="contactWhatsappBridge" href="#" target="_blank" rel="noopener">' + contactIcon("whatsapp") + '<span>Message us on WhatsApp instead</span></a></div>' +
        '</form>' +
      '</div>' +
      '</div></div></section>';
  }

  function resolveSolutionStats(stats, slug) {
    const generatedRanges = {
      "ilogic-web-pos": [
        [120, 220],
        [260, 420],
        [480, 760]
      ],
      "ilogic-tailor": [
        [80, 160],
        [220, 360],
        [420, 620]
      ],
      "ilogic-hotel-management": [
        [60, 140],
        [180, 320],
        [360, 540]
      ]
    };
    const usedValues = {};
    return stats.map(function(item, index) {
      const numericValue = String(item[0]).replace(/[^\d]/g, "");
      if (numericValue) return {
        value: Number(numericValue),
        label: item[1]
      };
      const ranges = generatedRanges[slug] || [
        [50, 120],
        [140, 260],
        [280, 420]
      ];
      const range = ranges[index] || [100 + index * 50, 180 + index * 80];
      let value = Math.floor(range[0] + Math.random() * (range[1] - range[0] + 1));
      while (usedValues[value]) value += 1;
      usedValues[value] = true;
      return {
        value: value,
        label: item[1]
      };
    });
  }

  function solutionStats(stats, slug) {
    const resolved = resolveSolutionStats(stats, slug);
    return '<div class="solution-metric-grid">' + resolved.map(item => '<article class="glass solution-metric-card reveal"><strong><span data-solution-stat="' + item.value + '">0</span></strong><span>' + item.label + '</span></article>').join("") + '</div>';
  }

  function solutionFeatureList(items) {
    return '<ul class="solution-bullet-list">' + items.map(item => '<li>' + item + '</li>').join("") + '</ul>';
  }

  function solutionFaqs(items) {
    return '<div class="solution-faq-list">' + items.map(item => '<article class="glass detail-card reveal solution-faq-card"><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p></article>').join("") + '</div>';
  }

  function solutionSections(detail) {
    return detail.sections.map(section => {
      const content = section.items ? solutionFeatureList(section.items) : section.faqs ? solutionFaqs(section.faqs) : section.body.map(text => '<p class="lead">' + text + '</p>').join("");
      return '<section class="section ' + (section.faqs ? '' : 'section-muted') + '"><div class="container"><div class="solution-section-block reveal"><div class="solution-section-header"><span class="eyebrow">' + detail.eyebrow + '</span><h2 class="gradient-text">' + section.title + '</h2></div><div class="solution-section-content">' + content + '</div></div></div></section>';
    }).join("");
  }

 function solutionVideoPlayer(item, detail) {
  // We removed the "!detail.video" check so the component renders even without a video file
  const imageSource = detail.image ? detail.image.src : (detail.video ? detail.video.src : null);
  const hasImage = Boolean(imageSource);
  
  return '<article class="glass solution-video-card reveal" data-solution-player>' +
    '<div class="solution-video-header">' +
      '<div><p class="solution-video-kicker">Product Walkthrough</p><h3>' + detail.headline + '</h3></div>' +
    '</div>' +
    '<div class="solution-video-stage">' +
      (hasImage ? '<img class="solution-image" src="' + imageSource + '" alt="' + detail.headline + '" style="width:100%; height:auto; cursor:pointer;">' : '') +
    '</div>' +
  '</article>';
}
  function solutionSummaryCard(item, detail) {
    const firstItems = detail.sections.find(section => section.items && section.items.length);
    const quickPoints = firstItems ? firstItems.items.slice(0, 5) : item[3];
    return '<article class="glass detail-card reveal solution-summary-card"><p class="solution-summary-kicker">Solution Snapshot</p><h3>' + item[1] + '</h3><p class="muted">' + item[4] + '</p><div class="tag-list">' + item[3].map(tag => '<span>' + tag + '</span>').join("") + '</div>' + solutionFeatureList(quickPoints) + '</article>';
  }

  function solutionPageContent(item, detail) {
    const hasMedia = Boolean((detail.video && detail.video.src) || (detail.image && detail.image.src));
    return header(false) +
      '<main class="solution-detail-page' + (hasMedia ? ' has-video' : ' no-video') + '">' +
      '<section class="detail-hero solution-hero-shell"><div class="container">' +
      '<div class="solution-page-header reveal"><span class="eyebrow">' + detail.eyebrow + '</span><h1 class="gradient-text">' + detail.headline + '</h1><p class="lead">' + detail.intro + '</p><div class="tag-list">' + item[3].map(tag => '<span>' + tag + '</span>').join("") + '</div><div class="detail-actions" style="margin-top:1.5rem;"><a class="btn btn-primary" href="index.html#contact">Request a Demo</a><a class="btn btn-secondary" href="index.html#solutions">Back to Solutions</a></div></div>' +
      (hasMedia ? '<div class="solution-hero-grid">' + solutionVideoPlayer(item, detail) + solutionSummaryCard(item, detail) + '</div>' : '<div class="solution-content-hero">' + solutionSummaryCard(item, detail) + '</div>') +
      solutionStats(detail.stats || [], item[0]) +
      '</div></section>' +
      solutionSections(detail) +
      '<section class="section"><div class="container"><article class="glass detail-card reveal solution-cta-panel"><span class="eyebrow">Get Started</span><h2 class="gradient-text">' + detail.ctaTitle + '</h2><p class="lead">' + detail.ctaText + '</p><div class="detail-actions"><a class="btn btn-primary" href="index.html#contact">Contact Our Team</a><a class="btn btn-secondary" href="mailto:info@ilogic.com.sg">info@ilogic.com.sg</a></div></article></div></section>' +
      '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
  }

  function homePage() {
    app.innerHTML = header(true) + '<main><section class="hero" id="home" data-country-display="SG"><div class="container hero-grid"><div class="hero-copy reveal is-visible"><span class="eyebrow"><span class="eyebrow-dot"></span>Integrated Technology Solutions</span><h1><span class="gradient-text">Integrated POS Systems & IT Solutions for Businesses in Singapore and India</span><span class="subline"><h1>Technology Solutions for Business Growth</h1></span></h1><p class="lead" style= "text-align:justify; font-family:timesnewroman;">iLogic Tech Pte Ltd is a Singapore-headquartered global technology and consulting company is delivering end-to-end digital transformation, testing infrastructure, and international education solutions.</p> <p class="lead" style="margin-top:0.5rem;text-align:justify; font-family:timesnewroman;">The organization operates through a multi-vertical ecosystem, integrating: <br><ul><li> Advanced Software Development </li><li>IT Infrastructure & Cybersecurity</li><li>Global Test Centre Operations</li><li> International Education & Certification Services </li></ul></p>  <p class="lead" style="margin-top:0.5rem;text-align:justify; font-family:timesnewroman;">With a strong presence across Singapore, India, Kuwait, and Ireland. iLogic Tech combines technology innovation with operational excellence to deliver scalable and future-ready solutions.</p>   <p class="lead" style="margin-top:0.5rem;text-align:justify; font-family:timesnewroman;">We specialize in developing customized platforms that streamline business operations & we are official partner of LanguageCert, Celpip(Prometric) & BeingCert. In addition, we offer industry-focused internship training programs that provide hands-on experience through real-time projects, equipping candidates with practical skills aligned with current market demands.</p><div class="hero-actions"><a class="btn btn-primary" href="#products">Explore Products</a><a class="btn btn-secondary" href="#about">Learn More</a></div><div class="partner-lockup"><p>Official Partner</p><div class="partner-lockup-row"><a class="partner-lockup-frame" href="exam.html#exam-celpip"><img src="' + celpipPartnerLogo + '" alt="CELPIP Partner" /></a><a class="partner-lockup-frame" href="languagecert.html"><img src="' + languageCertLogo + '" alt="LanguageCert" /></a><a class="partner-lockup-frame" href="exam.html#exam-academic-partner"><img src="' + academicPartnerLogo + '" alt="Academic Partner" /></a></div></div><div class="hero-stats"><div class="stat"><strong>4+</strong><span>Countries</span></div><div class="stat"><strong>50+</strong><span>Projects</span></div><div class="stat"><strong>300+</strong><span>Services</span></div><div class="stat"><strong>24/7</strong><span>Support</span></div></div></div><div class="hero-art reveal is-visible"><div class="hero-art-shell glass"><img src="' + heroImage + '" alt="POS system preview" /></div></div></div></section>' + '<section class="section section-muted" id="about" data-country-display="SG"><div class="container">' + sectionHeader("About Us", '<span class="about-heading-line">Driving Business Growth Through Innovative</span>', 'smart technology solutions for business growth and digital transformation <br /><span class="about-heading-line">IT infrastructure and professional training.</span>') + '<div class="split-grid" style="grid-template-columns:1.1fr 0.9fr;"><div class="reveal"><h3 class="gradient-text">Intelligent Technology for Business Growth</h3><p class="lead">iLogic Tech is a forward-thinking technology company dedicated to delivering smart systems that simplify operations, increase productivity, and improve profitability across retail, restaurants, healthcare, and logistics.</p><p class="lead">We specialize in POS solutions, implementation, and support while also delivering networking, cybersecurity, and enterprise system services.</p><h3 class="gradient-text">Official LanguageCert Partner</h3>' + list(["Enable students to achieve international language qualifications.", "Support professionals in enhancing their global career opportunities.", "Provide a reliable and accessible certification platform."]) + '<h3 class="gradient-text">Our Commitment</h3>' + list(["POS software sales and deployment", "On-site and remote implementation", "System customization based on business requirements", "Ongoing technical support and maintenance", "Staff training for smooth system adoption"]) + '</div><div class="grid-2 reveal">' + [
      ["Client-Centric", "Tailored solutions designed around your business needs."],
      ["Scalable and Secure", "Enterprise-grade security with room to grow."],
      ["R&D Innovation", "A dedicated research mindset that keeps solutions modern."],
      ["Quick Deployment", "Fast go-live timelines backed by dependable support."],
      ["POS Solutions", "Smart point-of-sale systems for retail and food businesses."],
      ["IT Infrastructure", "Networking, CCTV, and cybersecurity services."],
      ["Training Programs", "Internships, certifications"],
      ["LanguageCert Partner", "Official LanguageCert examination support."]
    ].map(item => '<article class="glass card"><div class="icon-badge">' + aboutIcon(item[0]) + '</div><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p></article>').join("") + '</div></div></div></section>' + '<section class="section" id="products" data-country-display="SG"><div class="container">' + sectionHeader("Our Products", "Product Lineup", "") + '<div class="grid-4">' + products.map(item => '<article class="glass card reveal"><div class="product-media"><img src="' + item[2] + '" alt="' + item[1] + '" /></div><div class="product-card-body"><h3>' + item[1] + '</h3><p class="muted card-summary">' + item[3] + '</p><div class="card-details"><div class="tag-list">' + item[4].map(feature => '<span>' + feature + '</span>').join("") + '</div>' + (item[5] ? '<p class="muted card-description">' + item[5] + '</p>' : '') + '<a class="btn btn-secondary" href="project.html?slug=' + item[0] + '">View More Details</a></div></div></article>').join("") + '</div></div></section>' + '<section class="section section-muted" id="services" data-country-display="SG"><div class="container">' + sectionHeader("Our Services", "Comprehensive Services", "Technology solutions tailored to your industry needs.") + '<div class="grid-3">' + services.map(item => '<article class="glass card reveal service-card"><div class="icon-badge service-icon-badge">' + serviceIcon(item[0]) + '</div><h3>' + item[1] + '</h3><p class="muted">' + item[2] + '</p><ul class="service-points">' + item[3].map(feature => '<li>' + feature + '</li>').join("") + '</ul><a class="btn btn-secondary" href="' + serviceCardHref(item[0]) + '">View More Details</a></article>').join("") + '</div></div></section>' + '<section class="section" id="solutions" data-country-display="SG"><div class="container">' + sectionHeader("Our Solutions", "Business Applications", "Explore our innovative applications and industry-focused software.") + '<div class="grid-4">' + solutions.map(item => '<article class="glass card reveal solution-card"><div class="solution-media"><img src="' + item[5] + '" alt="' + item[1] + '" loading="lazy" /></div><div class="solution-title"><div class="solution-title-pane"><h3>' + item[1] + '</h3></div></div><div class="solution-overlay"><div class="solution-overlay-pane"><h3>' + item[1] + '</h3><p class="muted">' + item[2] + '</p><div class="tag-list">' + item[3].map(feature => '<span>' + feature + '</span>').join("") + '</div><a class="btn btn-secondary" href="solution.html?slug=' + item[0] + '">View Project</a></div></div></article>').join("") + '</div></div></section>' + '<section class="section section-muted" id="clients" data-country-display="SG"><div class="container">' + sectionHeader("Our Clients", "Trusted by Leading Brands", "Proud to partner with businesses across the globe.") + [clientLogos.slice(0, 7), clientLogos.slice(7, 13), clientLogos.slice(13)].map((row, idx) => '<div class="marquee ' + (idx === 1 ? 'reverse' : '') + '"><div class="marquee-track">' + row.concat(row, row).map(path => '<div class="logo-card glass"><img src="' + path + '" alt="Client logo" /></div>').join("") + '</div></div>').join("") + '</div></section>' + '<section class="section" id="partners" data-country-display="SG"><div class="container">' + sectionHeader("Our Partners", "Strategic Partners", "Collaborating with industry leaders to deliver world-class solutions.") + '<div class="partner-grid">' + partners.map(item => '<div class="glass card reveal logo-card"><img src="' + item + '" alt="Partner logo" /></div>').join("") + '</div></div></section>' + '<section class="section section-muted" id="team" data-country-display="IN"><div class="container">' + sectionHeader("Leadership", "Our Leadership", "Visionary leaders driving innovation and excellence.") + '<div class="grid-2" style="max-width:38rem;margin:0 auto;">' + team.map(item => '<article class="glass card reveal team-card"><div class="team-photo"><img src="' + item.image + '" alt="' + item.name + '" /></div><p class="team-role">' + item.role + '</p><h3 class="team-signature">' + item.name + '</h3><p class="muted team-title">' + item.title + '</p></article>').join("") + '</div></div></section>' + '<section class="section" id="gallery" data-country-display="IN"><div class="container">' + sectionHeader("Moments", "Life at iLogic Tech", "A glimpse into our workspace, events, and achievements.") + '<div class="gallery-folder-grid">' + galleryCards(galleryCollections) + '</div></div></section>' + '<section class="section section-muted" id="reviews"><div class="container">' + sectionHeader("Testimonials", "What Our Clients Say", "Top reviews from businesses we have supported.") + '<div class="grid-3" id="testimonialsGrid">' + defaultTestimonials.map(testimonialCardMarkup).join("") + '</div></div></section>' + branchSection() + contactSection() + '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + walkInPosterModal() + feedbackModal() + galleryModal() + hiringWidget() + internshipChatbotModal() + examNotification();
  }

  function refineHomeHero() {
    const hero = app.querySelector(".hero");
    if (!hero) return;
    const heroHeading = hero.querySelector(".hero-copy h1");
    const embeddedSubline = heroHeading ? heroHeading.querySelector(".subline") : null;
    if (heroHeading) {
      heroHeading.innerHTML = '<span class="gradient-text">Integrated POS Systems & IT Solutions for Businesses in Singapore and India</span>';
    }
    if (heroHeading && embeddedSubline && !hero.querySelector(".hero-copy > .subline")) {
      const subline = document.createElement("p");
      subline.className = "subline";
      subline.textContent = embeddedSubline.textContent || "";
      heroHeading.after(subline);
      embeddedSubline.remove();
    }
    const heroVisual = hero.querySelector(".hero-art-shell img");
    if (heroVisual) {
      heroVisual.src = heroImage;
    }
  }

  function refineHomeGallery() {
    const gallerySection = app.querySelector("#gallery");
    if (!gallerySection) return;

    gallerySection.setAttribute("data-country-display", "SG,IN");

    const heading = gallerySection.querySelector(".section-heading");
    if (heading) {
      const eyebrow = heading.querySelector(".eyebrow");
      const title = heading.querySelector("h2");
      const description = heading.querySelector(".lead");
      if (eyebrow) eyebrow.textContent = "Corporate Gallery";
      if (title) title.textContent = "Company Spaces & Partner Events";
      if (description) description.textContent = "Explore our workplaces, training venues, and client collaboration locations across Singapore, India, and our partner sites.";
    }

    const galleryGrid = gallerySection.querySelector(".gallery-folder-grid");
    if (galleryGrid && !gallerySection.querySelector(".portfolio-summary")) {
      const summary = document.createElement("div");
      summary.className = "portfolio-summary reveal";
      summary.innerHTML = '<p class="lead">Our gallery highlights company spaces, training locations, and engagement events, showcasing how iLogic Tech connects people, partners, and customers at every stage of our work.</p>';
      galleryGrid.before(summary);
    }
  }

  function refineAboutContent() {
    const aboutSection = app.querySelector("#about .split-grid");
    if (!aboutSection) return;
    const aboutColumn = aboutSection.querySelector(".reveal");
    if (!aboutColumn) return;
    const aboutVisual = aboutSection.querySelector(".grid-2");
    aboutColumn.innerHTML = '<article class="glass about-feature-panel">' +
      '<div class="about-feature-copy">' +
      '<span class="eyebrow"><span class="eyebrow-dot"></span>Business Consulting</span>' +
      '<div class="about-feature-index" aria-hidden="true">01</div>' +
      '<h3><span class="about-heading-line">Smart Technology Solutions</span></h3>' +
      '<p class="lead" style="text-align:justify; font-family:timesnewroman;">iLogic Tech is your trusted technology partner, delivering end-to-end POS solutions, enterprise software development, Artificial Intelligence (AI) solutions, cybersecurity services, networking infrastructure, specialized IT training, and internationally recognized certification programs. We are a trusted partner for LanguageCert, CELPIP (Prometric), and BeingCert, providing globally recognized English proficiency tests, professional certification examinations, and skill validation programs. With a strong presence across Singapore, India, Kuwait, and Ireland, we empower businesses and individuals with innovative technology, industry-focused training, and internationally accredited certification and assessment solutions.</p>' +
      '<div class="tag-list about-feature-tags">' +
      '<span>Strategy Planning</span>' +
      '<span>Process Optimization</span>' +
      '<span>POS Solutions</span>' +
      '<span>Growth Roadmap</span>' +
      '</div>' +
      '</div>' +
      '<div class="about-feature-media">' +
      '<div class="about-feature-image-frame">' +
      '<img src="' + aboutImage + '" alt="Empowering businesses with intelligent technology" loading="lazy" />' +
      '</div>' +
      '</div>' +
      '</article>' +
      '<article class="glass about-feature-panel">' +
      '<div class="about-feature-copy">' +
      '<h3><span class="about-heading-line">Our Expertise</span></h3>' +
      '<p class="lead" style= "text-align: justify; font-family:timesnewroman;">End-to-end POS, software development, AI integration & IT support services designed to help businesses operate efficiently, scale confidently, innovate continuously, and embrace digital transformation..</p>' +
      list(["Streamline your business operations with reliable POS system implementation, deployment, integration and ongoing support tailored to your industry requirements.", "Ensure seamless technology adoption through expert planning, installation, configuration, data migration and system optimization services.", "Develop scalable web, mobile and enterprise applications that automate processes, improve productivity and support long-term business growth.", "Keep your systems running smoothly with proactive monitoring, troubleshooting, software updates, cybersecurity support and dedicated technical assistance."]) +
      '</div><div class="about-detail-media"><img src="' + aboutExpertiseImage + '" alt="Our Expertise" loading="lazy" /></div></article>' +
      '<div class="about-detail-grid">' +
      '<article class="glass about-feature-panel">' +
      '<div class="about-feature-copy">' +
      '<h3><span class="about-heading-line">POS Implementation & Support</span></h3>' +
      '<p class="lead" style= "text-align: justify; font-family:timesnewroman;">Our experienced team manages the complete POS lifecycle, from consultation and deployment to integration process, training and ongoing support. We ensure a seamless implementation process that minimizes disruption, optimizes operations, and supports long-term business growth.</p>' +
      list(["Identify the right POS strategy and technology solutions to meet your operational goals and business requirements.", "Professional installation, configuration, and integration of POS systems for reliable and efficient performance.", "Securely transfer business data, inventory records, customer information, and transaction history with minimal downtime.", "Comprehensive user training and onboarding programs to help your team maximize productivity and confidently use the POS system."]) +
      '</div><div class="about-detail-media"><img src="' + aboutTrainingImage + '" alt="POS Implementation and Support" loading="lazy" /></div></article>' +
      '<div class="about-detail-grid">' +
      '<article class="glass about-feature-panel">'+
      '<div class="about-feature-copy">'+
      '<h3><span class="about-heading-line">Official LanguageCert Partner</span></h3>'+
      '<p class="lead" style="text-align:justify; font-family:timesnewroman;">Empowering students, professionals, and organizations with globally recognized and career-enhancing English language certifications. As an official LanguageCert partner, we provide globally accepted certification programs that support academic success, career advancement, and international opportunities.</p>'+
      list(["Earn internationally recognized English language qualifications trusted by educational institutions, employers, and organizations worldwide.", "Enhance your communication skills and strengthen your career prospects with certifications that demonstrate English proficiency in professional environments.", "Benefit from flexible, convenient, and learner-focused certification pathways designed to meet the needs of students, job seekers, and working professionals."])  +
      '</div><div class="about-detail-media"><img src="' + aboutPartnerImage + '" alt="Official LanguageCert Partner" loading="lazy" /></div></article>' +
      '<article class="glass about-feature-panel">'+
      '<div class="about-feature-copy">'+
      '<h3><span class="about-heading-line">Networking, Infrastructure & Training</span></h3>'+
      '<p class="lead" style="text-align:justify; font-family:timesnewroman;">Build a secure, scalable and future-ready IT environment with our networking solutions, infrastructure and cybersecurity solutions are designed to enhance security, optimize performance, and support long-term business growth and operational resilience.</p>' +      
      list(["Design, implement, and manage secure network infrastructures with advanced security measures to protect business-critical data and ensure reliable connectivity.", "Optimize IT performance through strategic infrastructure planning, system monitoring, disaster recovery, and business continuity solutions that minimize downtime and maximize efficiency.", "Gain practical industry experience through hands-on technical training programs and internship opportunities designed to bridge the gap between learning and real-world application.", "Equip students and professionals with in-demand technology skills, certifications, and career-focused training aligned with current industry standards and emerging technologies."]) +
      '</div><div class="about-detail-media"><img src="' + aboutInfrastructureImage + '" alt="Networking, Infrastructure and Training" loading="lazy" /></div>' +
      '</div></article>' +
      '</div>';
    if (!aboutVisual) return;
    aboutVisual.innerHTML = '';
  }

  function detailPage(kind) {
    const slug = new URLSearchParams(window.location.search).get("slug");
    const source = kind === "service" ? services : kind === "solution" ? solutions : products;
    const item = source.find(entry => entry[0] === slug);
    if (!item) {
      app.innerHTML = header(false) + '<main class="empty-state"><div><h1 class="gradient-text">' + kind + ' not found</h1><p class="lead">The requested page could not be found.</p><a class="btn btn-primary" href="index.html">Back to Home</a></div></main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
      return;
    }
    const intro = kind === "service" ? item[2] : item[3];
    const tags = kind === "service" ? item[3] : item[4];
    const body = kind === "service" ? item[4] : [item[5]];
    const media = kind === "project" ? '<div class="detail-media detail-media-plain reveal"><img src="' + item[2] + '" alt="' + item[1] + '" /></div>' : "";
    if (kind === "service") {
      const detail = serviceDetails[item[0]];
      const experience = serviceExperienceDetails[item[0]];
      app.innerHTML = header(false) +
        '<main class="service-detail-page">' +
        '<section class="detail-hero service-detail-shell"><div class="container">' +
        '<div class="detail-grid service-detail-hero">' +
        '<div class="detail-copy reveal"><span class="eyebrow">Our Services</span><h1 class="gradient-text">' + experience.heroTitle + '</h1><p class="lead">' + experience.heroText + '</p><div class="tag-list">' + tags.map(tag => '<span>' + tag + '</span>').join("") + '</div><div class="detail-actions" style="margin-top:1.5rem;"><a class="btn btn-primary" href="' + experience.primaryHref + '">' + experience.primaryCta + '</a><a class="btn btn-ghost" href="index.html#services">Back to Services</a></div></div>' +
        '<article class="glass detail-card reveal service-summary-card"><div class="icon-badge service-icon-badge">' + serviceIcon(item[0]) + '</div><h3 class="gradient-text">Service Snapshot</h3><p class="muted">' + body[0] + '</p><div class="service-detail-meta"><strong>Best Fit</strong><p class="muted">' + detail.idealFor + '</p></div></article>' +
        '</div>' +
        metricCards(experience.stats) +
        '</div></section>' +
        '<section class="section section-muted"><div class="container">' +
        sectionHeader("Capabilities", experience.capabilityTitle, intro) +
        serviceFeatureCards(experience.capabilities) +
        '</div></section>' +
        '<section class="section"><div class="container">' +
        sectionHeader("Technology & Focus", "Modern Software Development Technologies", "") +
        serviceStackRows(experience.stacks) +
        '</div></section>' +
        '<section class="section section-muted"><div class="container">' +
        sectionHeader("Delivery Journey", experience.journeyTitle, "") +
        serviceJourney(experience.journey) +
        '</div></section>' +
        '<section class="section"><div class="container"><article class="glass detail-card reveal service-cta-card"><span class="eyebrow">Start Now</span><h2 class="gradient-text">' + experience.ctaTitle + '</h2><p class="lead">' + experience.ctaText + '</p><div class="detail-actions"><a class="btn btn-primary" href="' + experience.primaryHref + '">' + experience.primaryCta + '</a><a class="btn btn-secondary" href="' + experience.secondaryHref + '">' + experience.secondaryCta + '</a></div><div class="service-detail-grid"><article class="glass detail-card reveal"><h3 class="gradient-text">What We Deliver</h3>' + list(detail.deliverables) + '</article><article class="glass detail-card reveal"><h3 class="gradient-text">Delivery Approach</h3>' + list(detail.process) + '</article><article class="glass detail-card reveal"><h3 class="gradient-text">Business Outcomes</h3>' + list(detail.outcomes) + '</article></div></article></div></section>' +
        '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
      return;
    }
    if (kind === "solution") {
      const detail = solutionExperienceDetails[item[0]] || {
        eyebrow: "Our Solutions",
        headline: item[1],
        intro: intro,
        stats: [
          ["Scalable", "Platform"],
          ["Business", "Focused"],
          ["Cloud", "Ready"]
        ],
        sections: [{
          title: "Overview",
          body: [body[0] || intro]
        }],
        ctaTitle: "Explore This Solution with iLogic Tech",
        ctaText: "Talk to our team to see how this solution can be tailored to your operations."
      };
      app.innerHTML = solutionPageContent(item, detail);
      return;
    }
    const productDetail = kind === "project" ? (productDetailPoints[item[0]] || {
      highlights: ["Designed for smooth day-to-day business usage", "Supports faster service and staff efficiency", "Built for dependable business operations", "Easy to use within modern retail workflows", "Helps improve consistency and service quality"],
      overview: ["Built for reliable day-to-day business operations", "Supports efficient transaction processing", "Designed for smooth user interaction", "Suitable for modern retail and service environments"],
      benefits: ["Reliable performance for regular use", "Easy integration with business systems", "Reduced manual work for staff", "Improved speed and operational accuracy", "Consistent support for business growth"]
    }) : null;
    app.innerHTML = header(false) + '<main class="detail-hero"><div class="container"><div class="detail-grid">' + media + '<div class="detail-copy reveal"><span class="eyebrow">' + (kind === "project" ? "Product Details" : kind === "service" ? "Our Services" : "Our Solutions") + '</span><h1 class="gradient-text">' + item[1] + '</h1><p class="lead">' + intro + '</p>' + (kind === "project" ? '<div class="detail-highlight-list">' + list(productDetail.highlights.slice(0, 5)) + '</div>' : '') + '<div class="tag-list">' + tags.map(tag => '<span>' + tag + '</span>').join("") + '</div><div class="detail-actions" style="margin-top:1.5rem;"><a class="btn btn-primary" href="index.html#contact">Contact</a><a class="btn btn-ghost" href="index.html">Back</a></div></div></div><div class="detail-layout"><article class="glass detail-card reveal"><h3 class="gradient-text">Overview</h3>' + (kind === "project" ? list(productDetail.overview.slice(0, 4)) : body.map(text => '<p class="muted">' + text + '</p>').join("")) + '</article><article class="glass detail-card reveal"><h3 class="gradient-text">Key Benefits</h3>' + (kind === "project" ? list(productDetail.benefits.slice(0, 5)) : list(["High reliability and scalability", "24/7 technical support", "Easy integration with existing systems", "Regular updates and improvements"])) + '</article></div></div></main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
  }

  function careerPage() {
    app.innerHTML = header(false) + '<main>' +
      '<section class="section hero"><div class="container"><div class="hero-copy reveal is-visible"><span class="eyebrow">Join Our Team</span><h1 class="gradient-text">Build your career with innovative projects, cutting-edge technologies, and a team that values creativity, growth, and excellence.</h1><p class="lead">iLogic Tech is a Singapore-based technology solutions company empowering digital transformation through smart, scalable, and user-centric software.</p></div><div class="grid-3 stats-grid reveal"><article class="glass card"><strong>25</strong><span>Team Members</span></article><article class="glass card"><strong>25</strong><span>Open Positions</span></article><article class="glass card"><strong>95</strong><span>Employee Satisfaction</span></article></div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("Why Choose iLogic?", "Company Overview", "iLogic Tech is a Singapore-based technology solutions company empowering digital transformation through smart, scalable, and user-centric software.") + '<div class="grid-2 content-grid reveal"><article class="glass card"><h3>Industry-Specific Solutions</h3><p class="muted">We develop customized platforms that solve business inefficiencies and drive growth across retail, healthcare, logistics, and hospitality sectors.</p></article><article class="glass card"><h3>Key Offerings</h3><p class="muted">Our solutions include POS systems, healthcare software, cloud-based ERP, and bespoke mobile and web applications tailored to client needs.</p></article></div><div class="grid-2 content-grid reveal"><article class="glass card"><h3>Our Expertise</h3><p class="muted">Backed by a multidisciplinary team, we combine deep industry knowledge with modern technology to deliver impactful, reliable software solutions.</p></article><article class="glass card"><h3>Why Choose Us</h3><p class="muted">We focus on quality, innovation, and long-term value—making us a trusted digital partner for businesses aiming to scale efficiently.</p></article></div></div></section>' +
      '<section class="section"><div class="container">' + sectionHeader("Network Support & Implementation", "Cloud Integration & Security", "Resilience & Efficiency") + '<div class="grid-3 reveal">' +
      '<article class="glass card"><h3>Network Support & Implementation</h3><p class="muted">We offer end-to-end network solutions—from setup to optimization—tailored to meet the evolving infrastructure needs of modern enterprises.</p></article>' +
      '<article class="glass card"><h3>Cloud Integration & Security</h3><p class="muted">Our services include cloud computing integration for scalability and cybersecurity frameworks to protect business data and ensure compliance.</p></article>' +
      '<article class="glass card"><h3>Resilience & Efficiency</h3><p class="muted">We help businesses achieve seamless connectivity, operational efficiency, and digital resilience through secure and high-performance IT environments.</p></article>' +
      '</div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("Current Job Openings", "Explore the opportunities and find the role that's right for you.", "") + '<div class="grid-3 jobs-grid reveal">' +
      '<article class="glass card"><h3>Python Developer</h3><p class="muted">Strong knowledge of Python and Django/Flask. Experience with REST APIs. Familiarity with front-end tech (HTML, CSS, JS).</p><div class="tag-list"><span>Python</span><span>Django</span><span>Flask</span></div><a class="btn btn-secondary" href="index.html#contact">Apply Now</a></article>' +
      '<article class="glass card"><h3>.NET Developer</h3><p class="muted">Proficient in C#, ASP.NET. Knowledge of SQL Server. Good understanding of MVC architecture.</p><div class="tag-list"><span>C#</span><span>ASP.NET</span><span>SQL</span></div><a class="btn btn-secondary" href="index.html#contact">Apply Now</a></article>' +
      '<article class="glass card"><h3>Marketing Executive</h3><p class="muted">Strong verbal and written communication skills. Digital marketing knowledge is a plus. Good organizational skills.</p><div class="tag-list"><span>Marketing</span><span>Communication</span><span>Digital Media</span></div><a class="btn btn-secondary" href="index.html#contact">Apply Now</a></article>' +
      '</div></div></section>' +
      '<section class="section"><div class="container">' + sectionHeader("Application Process", "Submit Application", "Initial Review") + '<div class="journey-grid reveal">' +
      '<article class="glass card"><div class="step-badge">1</div><h3>Submit Application</h3><p class="muted">Send us your resume, portfolio, and cover letter through our online application system.</p></article>' +
      '<article class="glass card"><div class="step-badge">2</div><h3>Initial Review</h3><p class="muted">Our HR team reviews your application and assesses your qualifications and experience.</p></article>' +
      '<article class="glass card"><div class="step-badge">3</div><h3>Phone Screening</h3><p class="muted">Brief phone interview to discuss your background, interests, and role expectations.</p></article>' +
      '<article class="glass card"><div class="step-badge">4</div><h3>Technical Assessment</h3><p class="muted">Complete a technical challenge or coding assessment relevant to the position.</p></article>' +
      '<article class="glass card"><div class="step-badge">5</div><h3>Team Interview</h3><p class="muted">Meet with team members and hiring managers to discuss your fit and potential contributions.</p></article>' +
      '<article class="glass card"><div class="step-badge">6</div><h3>Offer & Onboarding</h3><p class="muted">Receive your offer and begin the onboarding process to join our amazing team.</p></article>' +
      '</div></div></section></main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
  }

  function examHubPage() {
    const slug = new URLSearchParams(window.location.search).get("slug");
    if (slug) {
      examDomainPage();
    } else {
      app.innerHTML = header(false) + '<main>' +
        examSeoHeroSection() +
        examHubSection() +
        languageCertExamSection() +
        celpipExamSection() +
        academicPartnerSection() +
        examSeoWhyChooseSection() +
        examSeoLocationsSection() +
        examSeoFaqSection() +
        examSeoConclusionSection() +
        globalCertificationSection() +
        examFeedbackSection() +
        '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal() + examNotification();
    }
  }

  function languageCertPage() {
    app.innerHTML = header(false) + '<main class="language-training-page"><section class="section hero"><div class="container" style="text-align:center;"><img src="' + languageCertLogo + '" alt="LanguageCert" style="height:4.4rem;margin:0 auto 1rem;" /><span class="eyebrow">Official Partner</span><h1 class="gradient-text" style="font-size:clamp(2.5rem,6vw,4.8rem);margin-bottom:1rem;">LanguageCert Training</h1><p class="lead" style="max-width:52rem;margin:0 auto;">Structured preparation for globally recognized English language certification across academic, professional, and personal communication goals.</p></div></section><section class="section"><div class="container"><div class="skills-grid language-training-skills">' + [
      ["Listening", "Comprehend spoken English in various real-world contexts"],
      ["Reading", "Understand written texts and extract key information"],
      ["Writing", "Produce clear, well-structured written English"],
      ["Speaking", "Communicate effectively and fluently in spoken English"]
    ].map(item => '<article class="glass card reveal"><div class="icon-badge">' + item[0].slice(0, 2).toUpperCase() + '</div><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p></article>').join("") + '</div></div></section><section class="section section-muted"><div class="container"><div class="highlight-grid language-training-highlights">' + [
      ["Reliable", "Internationally recognized certification trusted worldwide"],
      ["Fast Results", "Quick turnaround and results in days, not weeks"],
      ["Global Recognition", "Accepted by institutions and employers worldwide"]
    ].map(item => '<article class="glass card reveal"><div class="icon-badge">' + item[0].slice(0, 2).toUpperCase() + '</div><h3>' + item[0] + '</h3><p class="muted">' + item[1] + '</p></article>').join("") + '</div></div></section><section class="section"><div class="container"><article class="glass card reveal" style="text-align:center;"><h2 class="gradient-text" style="font-size:2.3rem;">Get Started with LanguageCert</h2><p class="lead">Contact our India support team to enroll in LanguageCert training and examinations.</p><div class="detail-actions" style="justify-content:center;"><a class="btn btn-primary" href="tel:+917200005541">+91 72000 05541</a><a class="btn btn-secondary" target="_blank" rel="noreferrer" href="https://www.languagecert.org">languagecert.org</a></div></article></div></section></main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
  }

  function internshipPage() {
    app.innerHTML = header(false) + '<main>' +
      '<section class="section hero"><div class="container"><div class="hero-copy reveal is-visible career-hero-copy" style="max-width:56rem;margin:3rem auto 0;text-align:center;"><span class="eyebrow" style="justify-content:center;">Internship Program</span><h1 class="gradient-text career-single-line" style="text-align:center;">Launch Your IT Career with Real-World Experience</h1></div><div class="grid-3 stats-grid reveal"><article class="glass card"><center><strong>200</strong><br><span>Interns Trained</span></center></article><article class="glass card"><center><strong>90 %</strong><br><span>Placement Rate </span></center></article><article class="glass card"><center><strong>4</strong><br><span>Week Program</span></article></div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("Program Overview", "Launch Your IT Career with Industry-Focused Internships", "") + '<div class="grid-2 content-grid reveal"><article class="glass card"><h3>Hands-on Learning</h3><p class="muted">Work on live projects using modern technologies and industry tools.</p></article><article class="glass card"><h3>Expert Mentorship</h3><p class="muted">Learn from experienced professionals with personalized guidance.</p></article></div><div class="grid-2 content-grid reveal" style="margin-top:2rem;"><article class="glass card"><h3>Industry Certification</h3><p class="muted">Earn recognized certifications and strengthen your professional portfolio.</p></article><article class="glass card"><h3>Job Placement</h3><p class="muted">Build job-ready skills and explore career growth opportunities.</p></article></div></div></section>' +
      '<section class="section"><div class="container">' + sectionHeader("Internship Tracks", "Choose Your Tech Specialization", "") + '<div class="grid-3 reveal">' +
      '<article class="glass card"><h3>Full Stack Development</h3><p class="muted">Master frontend and backend development using modern frameworks and technologies.</p><ul style="margin:1rem 0;color:var(--text-muted);padding-left:1.5rem;font-family:timesnewroman;"><li>React, Vue.js, Angular</li><li>Node.js, Python, .NET</li><li>Database Design & Management</li><li>API Development & Integration</li><li>DevOps & Cloud Deployment</li></ul><p class="muted" style="margin-top:1rem;font-weight:600;font-family:timesnewroman;">12 Weeks Program (Intensive training with real projects)</p><a class="btn btn-secondary" href="index.html#contact" style="margin-top:auto;">Apply Now</a></article>' +
      '<article class="glass card"><h3>Mobile App Development</h3><p class="muted">Build scalable mobile applications for Android and iOS platforms.</p><ul style="margin:1rem 0;color:var(--text-muted);padding-left:1.5rem;font-family:timesnewroman;"><li>React Native & Flutter</li><li>iOS Development (Swift)</li><li>Android Development (Kotlin)</li><li>UI/UX Design Principles</li><li>App Store Deployment</li></ul><p class="muted" style="margin-top:1rem;font-weight:600;font-family:timesnewroman">10 Weeks Program (Mobile-first development approach)</p><a class="btn btn-secondary" href="index.html#contact" style="margin-top:auto;">Apply Now</a></article>' +
      '<article class="glass card"><h3>AI & Machine Learning</h3><p class="muted">Develop intelligent solutions using AI, machine learning, and data analytics.</p><ul style="margin:1rem 0;color:var(--text-muted);padding-left:1.5rem;font-family:timesnewroman;"><li>Python & TensorFlow</li><li>Data Science & Analytics</li><li>Computer Vision & NLP</li><li>Model Training & Deployment</li><li>AI Ethics & Best Practices</li></ul><p class="muted" style="margin-top:1rem;font-weight:600;font-family:timesnewroman">14 Weeks Program (Advanced AI concepts and applications)</p><a class="btn btn-secondary" href="index.html#contact" style="margin-top:auto;">Apply Now</a></article>' +
      '<article class="glass card"><h3>Cloud & DevOps</h3><p class="muted">Learn cloud platforms, DevOps practices, and deployment automation.</p><ul style="margin:1rem 0;color:var(--text-muted);padding-left:1.5rem;font-family:timesnewroman;"><li>AWS, Azure, Google Cloud</li><li>Docker & Kubernetes</li><li>CI/CD Pipelines</li><li>Infrastructure as Code</li><li>Monitoring & Security</li></ul><p class="muted" style="margin-top:1rem;font-weight:600;font-family:timesnewroman">10 Weeks Program (Cloud-native development focus)</p><a class="btn btn-secondary" href="index.html#contact" style="margin-top:auto;">Apply Now</a></article>' +
      '<article class="glass card"><h3>Cybersecurity</h3><p class="muted">Protect digital systems through cybersecurity and network security practices.</p><ul style="margin:1rem 0;color:var(--text-muted);padding-left:1.5rem;font-family:tisnemewroman;"><li>Ethical Hacking & Penetration Testing</li><li>Network Security</li><li>Incident Response</li><li>Security Compliance</li><li>Risk Assessment</li></ul><p class="muted" style="margin-top:1rem;font-weight:600;font-family:timesnewroman">12 Weeks Program (Security-first mindset development)</p><a class="btn btn-secondary" href="index.html#contact" style="margin-top:auto;">Apply Now</a></article>' +
      '<article class="glass card"><h3>UI/UX Design</h3><p class="muted">Create intuitive, user-friendly interfaces with modern design principles.</p><ul style="margin:1rem 0;color:var(--text-muted);padding-left:1.5rem;font-family:tisnemewroman;"><li>Design Thinking Process</li><li>Figma & Adobe Creative Suite</li><li>User Research & Testing</li><li>Prototyping & Wireframing</li><li>Design Systems</li></ul><p class="muted" style="margin-top:1rem;font-weight:600;font-family:timesnewroman">8 Weeks Program (Design-focused creative training)</p><a class="btn btn-secondary" href="index.html#contact" style="margin-top:auto;">Apply Now</a></article>' +
      '</div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("Learning Journey", "Structured learning path designed for maximum skill development", "") + '<div class="journey-grid reveal">' +
      '<article class="glass card"><div class="step-badge">1</div><h3>Foundation & Orientation</h3><p class="muted">Introduction to company culture, tools, and technology fundamentals.</p><ul class="muted" style="padding-left:1.2rem;margin-top:0.5rem;font-size:0.9rem;font-family:timesnewroman;"><li>Company Orientation</li><li>Development Environment Setup</li><li>Agile Fundamentals</li></ul></article>' +
      '<article class="glass card"><div class="step-badge">2</div><h3>Core Technology Training</h3><p class="muted">Hands-on training in software development and modern technologies.</p><ul class="muted" style="padding-left:1.2rem;margin-top:0.5rem;font-size:0.9rem;font-family:timesnewroman;"><li>Programming Languages</li><li>Frameworks</li><li>Best Practices</li></ul></article>' +
      '<article class="glass card"><div class="step-badge">3</div><h3>Project Development</h3><p class="muted">Build real-world projects and gain practical industry experience.</p><ul class="muted" style="padding-left:1.2rem;margin-top:0.5rem;font-size:0.9rem;font-family:timesnewroman;"><li>Team Collaboration</li><li>Project Management</li><li>Code Review</li></ul></article>' +
      '<article class="glass card"><div class="step-badge">4</div><h3>Specialization & Portfolio</h3><p class="muted">Develop advanced skills and build a professional portfolio.</p><ul class="muted" style="padding-left:1.2rem;margin-top:0.5rem;font-size:0.9rem;font-family:timesnewroman;"><li>Advanced Concepts</li><li>Portfolio Development</li><li>Industry Standards</li></ul></article>' +
      '</div></div></section>' +
      '<section class="section"><div class="container">' + sectionHeader("Internship Benefits", "Career Support That Moves You Forward", "") + '<div class="grid-3 reveal">' +
      '<article class="glass card"><h3>Competitive Stipend</h3><p class="muted">Monthly stipend to support your internship and learning experience.</p></article>' +
      '<article class="glass card"><h3>Equipment Provided</h3><p class="muted">Access to modern development tools, software, and resources.</p></article>' +
      '<article class="glass card"><h3>Networking Opportunities</h3><p class="muted">Connect with industry professionals and expand your network.</p></article>' +
      '<article class="glass card"><h3>Certification & Credits</h3><p class="muted">Earn recognized certifications and enhance your professional profile.</p></article>' +
      '<article class="glass card"><h3>Job Placement Support</h3><p class="muted">Job placement assistance, interview preparation, and career guidance.</p></article>' +
      '<article class="glass card"><h3>Flexible Schedule</h3><p class="muted">Part-time and full-time internship options for students.</p></article>' +
      '</div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("Program Requirements", "What We Look for in Future Interns", "") + '<div class="grid-2 reveal">' +
      '<article class="glass card"><h3>Educational Background</h3><p class="muted">Currently pursuing or recently completed degree in Computer Science, Engineering, or related field.</p></article>' +
      '<article class="glass card"><h3>Programming Knowledge</h3><p class="muted">Basic understanding of at least one programming language and eagerness to learn new technologies.</p></article>' +
      '<article class="glass card"><h3>Problem-Solving Skills</h3><p class="muted">Strong analytical thinking and problem-solving abilities with attention to detail.</p></article>' +
      '<article class="glass card"><h3>Communication Skills</h3><p class="muted">Good verbal and written communication skills for effective team collaboration.</p></article>' +
      '</div></div></section>' +
      '<section class="section"><div class="container">' + sectionHeader("Success Stories", "Intern Success Stories That Inspire Growth", "") + '<div class="grid-1 reveal" style="max-width:40rem;margin:0 auto;">' +
      '<article class="glass card"><p class="lead" style="font-style:italic;">"My time at iLogic Tech helped me grow professionally and personally. Thank you to the team for the guidance and hands-on learning!"</p><div style="margin-top:1.5rem;"><strong>Wafiya Banu. A</strong><p class="muted">Mobile Developer</p></div></article>' +
      '</div></div></section>' +
      '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
  }

function jobsPage() {
    app.innerHTML = header(false) + '<main>' +
      '<section class="section hero" style="padding-top: 3rem;"><div class="container"><div class="hero-copy reveal is-visible" style="text-align: center; max-width: 800px; margin-left: auto; margin-right: auto;"><span class="eyebrow" style="justify-content: center;">Job Opportunities</span><h1 class="gradient-text career-single-line" style="text-align: center;">Discover Your Next Role at iLogic Tech</h1><p class="lead" style="text-align: center;">Build your career with innovative projects, cutting-edge technologies, and a team that values creativity, growth, and excellence.</p></div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("Current Job Openings", "Open Roles for Your Next Career Move", "") + '<div class="grid-3 jobs-grid reveal">' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3>Python Developer</h3><p class="muted" style="margin-bottom: 0.75rem;">Strong Python Developer with expertise in Django and Flask frameworks, REST API development, and front-end technologies including HTML, CSS, and JavaScript.</p><div class="tag-list" style="margin-bottom: 1.5rem;"><span>Python</span><span>Django</span><span>Flask</span></div><div style="margin-top: auto;"></div><a class="btn btn-secondary" href="index.html#contact" style="align-self: flex-start;">Apply Now</a></article>' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3>.NET Developer</h3><p class="muted" style="margin-bottom: 0.75rem;">Proficient in C#, ASP.NET, and .NET Core with hands-on experience in SQL Server, Entity Framework, RESTful API development, dependency injection, unit testing, and Git version control.</p><div class="tag-list" style="margin-bottom: 1.5rem;"><span>C#</span><span>ASP.NET</span><span>SQL</span></div><div style="margin-top: auto;"></div><a class="btn btn-secondary" href="index.html#contact" style="align-self: flex-start;">Apply Now</a></article>' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3>Marketing Executive</h3><p class="muted" style="margin-bottom: 0.75rem;">Strong marketing professional with excellent verbal and written communication skills, digital marketing expertise, and exceptional organizational abilities for campaign management and brand growth.</p><div class="tag-list" style="margin-bottom: 1.5rem;"><span>Marketing</span><span>Communication</span><span>Digital Media</span></div><div style="margin-top: auto;"></div><a class="btn btn-secondary" href="index.html#contact" style="align-self: flex-start;">Apply Now</a></article>' +
      '</div></div></section>' +
      '<section class="section"><div class="container">' + sectionHeader("Application Process", "Submit Application", "Initial Review") + '<div class="journey-grid reveal">' +
      '<article class="glass card"><div class="step-badge">1</div><h3>Submit Application</h3><p class="muted">Send us your resume, portfolio, and cover letter through our online application system.</p></article>' +
      '<article class="glass card"><div class="step-badge">2</div><h3>Initial Review</h3><p class="muted">Our HR team reviews your application and assesses your qualifications and experience.</p></article>' +
      '<article class="glass card"><div class="step-badge">3</div><h3>Phone Screening</h3><p class="muted">Brief phone interview to discuss your background, interests, and role expectations.</p></article>' +
      '<article class="glass card"><div class="step-badge">4</div><h3>Technical Assessment</h3><p class="muted">Complete a technical challenge or coding assessment relevant to the position.</p></article>' +
      '<article class="glass card"><div class="step-badge">5</div><h3>Team Interview</h3><p class="muted">Meet with team members and hiring managers to discuss your fit and potential contributions.</p></article>' +
      '<article class="glass card"><div class="step-badge">6</div><h3>Offer & Onboarding</h3><p class="muted">Receive your offer and begin the onboarding process to join our amazing team.</p></article>' +
      '</div></div></section>' +
      '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
}

function projectsPage() {
    app.innerHTML = header(false) + '<main>' +
      '<section class="section hero" style="padding-top: 3rem;"><div class="container"><div class="hero-copy reveal is-visible" style="text-align: center; max-width: 800px; margin-left: auto; margin-right: auto;"><span class="eyebrow" style="justify-content: center;">Final Year Projects</span><h1 class="gradient-text career-single-line" style="text-align: center;">Industry-Ready Final Year Project Ideas</h1><p class="lead" style="text-align: center;">Kickstart your portfolio or academic final year with these advanced project topics spanning Web, Mobile, AI, and Networking.</p></div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("Web & Mobile Applications", "Practical Web and Mobile Project Ideas", "Stand out with a fully responsive and robust application project.") + '<div class="grid-3 reveal">' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">Cloud-based POS System</h3><p class="muted" style="margin-bottom: 1rem;">Design a lightweight Point of Sale application using React and Node.js. Integrate real-time inventory synchronization and a modern dashboard for daily sales tracking.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>React</span><span>Node.js</span><span>WebSockets</span></div></article>' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">Dine-In Management App</h3><p class="muted" style="margin-bottom: 1rem;">A Flutter-based mobile application that allows restaurant patrons to scan QR codes, view digital menus, and place orders directly to the kitchen display system.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>Flutter</span><span>Firebase</span><span>QR Code</span></div></article>' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">Academic Certification Portal</h3><p class="muted" style="margin-bottom: 1rem;">A secure portal where students can register for exams (like LanguageCert), track their progress, and download digital certificates verified via cryptography.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>Vue.js</span><span>Python</span><span>Cryptography</span></div></article>' +
      '</div></div></section>' +
      '<section class="section"><div class="container">' + sectionHeader("AI & Machine Learning", "Intelligent systems with predictive analytics", "Bring artificial intelligence into practical business scenarios.") + '<div class="grid-3 reveal">' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">Customer Behavior Tracker</h3><p class="muted" style="margin-bottom: 1rem;">A computer vision model that analyzes retail store camera feeds to determine high-traffic zones (heatmaps) and optimize product placements.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>OpenCV</span><span>Python</span><span>TensorFlow</span></div></article>' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">POS Predictive Restocking</h3><p class="muted" style="margin-bottom: 1rem;">An AI model that predicts inventory shortages using historical sales data and seasonal trends, integrating directly with an ERP backend.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>Scikit-Learn</span><span>Pandas</span><span>API</span></div></article>' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">Automated FAQ Chatbot</h3><p class="muted" style="margin-bottom: 1rem;">An NLP-driven chatbot for internship and exam enquiries, utilizing modern LLMs to provide context-aware responses and capture leads.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>NLP</span><span>OpenAI API</span><span>React</span></div></article>' +
      '</div></div></section>' +
      '<section class="section section-muted"><div class="container">' + sectionHeader("IoT & Networking", "Hardware integration and secure infrastructure", "Develop robust network systems connected to physical devices.") + '<div class="grid-2 reveal">' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">Smart Surveillance System</h3><p class="muted" style="margin-bottom: 1rem;">An IoT solution using Raspberry Pi and camera modules to detect unauthorized access in secure zones, triggering instant alerts to an administrator portal.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>IoT</span><span>Raspberry Pi</span><span>Networking</span></div></article>' +
      '<article class="glass card" style="display: flex; flex-direction: column; height: 100%;"><h3 style="margin-bottom: 0.75rem;">Enterprise Network Simulation</h3><p class="muted" style="margin-bottom: 1rem;">A simulated enterprise network topology incorporating VLAN segmentation, secure routing (OSPF), and integrated firewalls, complete with performance tests.</p><div class="tag-list" style="margin-bottom: 0; gap: 0.65rem;"><span>Cisco Packet Tracer</span><span>Routing</span><span>Firewall</span></div></article>' +
      '</div></div></section>' +
      '</main>' + footer() + whatsappFloat() + googleFeedbackFloat() + feedbackModal() + hiringWidget() + internshipChatbotModal();
}
  if (page === "home") {
    homePage();
    refineHomeHero();
    refineHomeGallery();
    refineAboutContent();

  }

  function updateServiceMeta(slug) {
    var metaMap = {
      "mobile-apps": {
        title: "Mobile App Development Company in Madurai, Pondicherry & Singapore | iLogic Tech",
        desc: "iLogic Tech offers custom iOS, Android, and cross-platform mobile app development for businesses in Madurai, Pondicherry, Tamil Nadu, South India, and Singapore.",
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Mobile App Development",
          "provider": {
            "@type": "Organization",
            "name": "iLogic Tech",
            "url": "https://www.ilogic.com.sg"
          },
          "description": "Custom iOS, Android, Flutter and React Native mobile app development for businesses across Madurai, Pondicherry, Tamil Nadu and Singapore.",
          "areaServed": ["Madurai", "Pondicherry", "Coimbatore", "Tamil Nadu", "Singapore"],
          "serviceType": ["iOS App Development", "Android App Development", "Flutter Development", "React Native Development", "Enterprise Mobile Apps"]
        }
      },
      "software-development": {
        title: "Software Development Company in Singapore & India | iLogic Tech",
        desc: "iLogic Tech delivers enterprise-grade software development services including AI-driven applications, microservices, and cloud-native architectures for businesses in Singapore and India.",
        schema: null
      },
      "web-applications": {
        title: "Web Application Development Company in Singapore & India | iLogic Tech",
        desc: "iLogic Tech builds scalable, high-performance web applications using modern frameworks for businesses across Singapore, Madurai, Pondicherry, and Tamil Nadu.",
        schema: null
      },
      "ai-ml": {
        title: "AI & Machine Learning Solutions in Singapore & India | iLogic Tech",
        desc: "iLogic Tech provides applied AI and ML solutions including predictive analytics, computer vision, NLP, and MLOps for businesses in Singapore and South India.",
        schema: null
      },
      "networking": {
        title: "IT Networking Solutions in Singapore & India | iLogic Tech",
        desc: "iLogic Tech offers enterprise networking, infrastructure setup, and support services for businesses across Singapore and South India.",
        schema: null
      },
      "cybersecurity": {
        title: "Cybersecurity Services in Singapore & India | iLogic Tech",
        desc: "iLogic Tech provides comprehensive cybersecurity services including threat detection, penetration testing, and compliance for organizations in Singapore and India.",
        schema: null
      },
      "cctv-surveillance": {
        title: "CCTV Surveillance & Security Solutions in Singapore & India | iLogic Tech",
        desc: "iLogic Tech installs and manages CCTV surveillance systems for businesses across Singapore and South India.",
        schema: null
      }
    };
    var m = metaMap[slug];
    if (!m) return;
    document.title = m.title;
    var descEl = document.querySelector("meta[name=\"description\"]");
    if (descEl) descEl.setAttribute("content", m.desc);
    var ogTitle = document.querySelector("meta[property=\"og:title\"]");
    if (ogTitle) ogTitle.setAttribute("content", m.title);
    var ogDesc = document.querySelector("meta[property=\"og:description\"]");
    if (ogDesc) ogDesc.setAttribute("content", m.desc);
    var ogUrl = document.querySelector("meta[property=\"og:url\"]");
    if (ogUrl) ogUrl.setAttribute("content", "https://www.ilogic.com.sg/service.html?slug=" + slug);
    if (m.schema) {
      var schemaEl = document.getElementById("page-schema");
      if (schemaEl) schemaEl.textContent = JSON.stringify(m.schema);
    }
  }
  if (page === "service") {
    var _svcSlug = new URLSearchParams(window.location.search).get("slug");
    updateServiceMeta(_svcSlug);
    detailPage("service");
    if (_svcSlug === "mobile-apps") {
      var _seoSection = document.createElement("section");
      _seoSection.className = "section section-muted mobile-seo-section";
      _seoSection.innerHTML = '<div class="container">' +
        '<div class="mobile-seo-intro reveal">' +
        '<div style="display:flex;justify-content:center;"><span class="eyebrow"><span class="eyebrow-dot"></span>Mobile App Development</span></div>' +
        '<h2 class="gradient-text" style="text-align:center;">Custom Mobile App Development Company in Madurai, Pondicherry &amp; Singapore</h2>' +
        '<p class="lead">iLogic Tech is a professional mobile application development company delivering custom iOS, Android, and cross-platform mobile solutions for businesses across Madurai, Pondicherry, Coimbatore, Trichy, Salem, Tirunelveli, Tamil Nadu, South India, and Singapore. We help startups, SMEs, and enterprises build powerful, scalable, and user-friendly mobile applications tailored to their specific business needs.</p>' +
        '</div>' +
        '<div class="grid-3 reveal" style="margin-top:1.25rem;">' +
        '<article class="glass card"><h3 class="gradient-text">Mobile App Development in Madurai</h3><p class="muted">iLogic Tech provides professional mobile app development services in Madurai for businesses across retail, healthcare, logistics, education, and hospitality sectors.</p><div class="tag-list" style="margin-top:1rem;"><span>iOS App Development Madurai</span><span>Android App Development Madurai</span><span>Flutter App Development Madurai</span><span>Custom App Madurai</span></div></article>' +
        '<article class="glass card"><h3 class="gradient-text">Mobile App Development in Pondicherry</h3><p class="muted">iLogic Tech provides mobile application development services in Pondicherry for businesses looking to build iOS, Android, and cross-platform apps.</p><div class="tag-list" style="margin-top:1rem;"><span>iOS Developer Pondicherry</span><span>Android App Pondicherry</span><span>React Native Pondicherry</span><span>Flutter Developer Pondicherry</span></div></article>' +
        '<article class="glass card"><h3 class="gradient-text">Mobile App Development in Singapore</h3><p class="muted">iLogic Tech provides mobile application development services in Singapore for businesses seeking high-quality, scalable mobile solutions aligned with international standards.</p><div class="tag-list" style="margin-top:1rem;"><span>iOS App Developer Singapore</span><span>Android App Singapore</span><span>Flutter Singapore</span><span>Enterprise App Singapore</span></div></article>' +
        '</div>' +
        '<div style="margin-top:1.5rem;">' +
        sectionHeader("Technology Stack", "Technologies We Use", "") +
        '<div class="grid-4 reveal">' +
        '<article class="glass card" style="text-align:center;"><div class="icon-badge" style="margin:0 auto 0.75rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg></div><h3>iOS</h3><p class="muted">Swift &amp; Objective-C</p></article>' +
        '<article class="glass card" style="text-align:center;"><div class="icon-badge" style="margin:0 auto 0.75rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></svg></div><h3>Android</h3><p class="muted">Kotlin &amp; Java</p></article>' +
        '<article class="glass card" style="text-align:center;"><div class="icon-badge" style="margin:0 auto 0.75rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><h3>Flutter</h3><p class="muted">Cross-Platform</p></article>' +
        '<article class="glass card" style="text-align:center;"><div class="icon-badge" style="margin:0 auto 0.75rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg></div><h3>React Native</h3><p class="muted">Cross-Platform</p></article>' +
        '</div>' +
        '</div>' +
        '<div style="margin-top:1.5rem;">' +
        sectionHeader("FAQ", "Frequently Asked Questions", "") +
        '<div class="grid-2 reveal">' +
        '<article class="glass card"><h3>What mobile app services does iLogic Tech offer?</h3><p class="muted">iLogic Tech offers iOS app development, Android app development, cross-platform app development using Flutter and React Native, enterprise mobile solutions, and UI/UX design for mobile applications.</p></article>' +
        '<article class="glass card"><h3>Does iLogic Tech develop apps for both iOS and Android?</h3><p class="muted">Yes. iLogic Tech develops native iOS and Android apps as well as cross-platform applications that work seamlessly on both platforms from a single codebase.</p></article>' +
        '<article class="glass card"><h3>Which locations does iLogic Tech serve for mobile app development?</h3><p class="muted">iLogic Tech provides mobile app development services in Madurai, Pondicherry, Coimbatore, Trichy, Salem, Tirunelveli, across Tamil Nadu, South India, and Singapore.</p></article>' +
        '<article class="glass card"><h3>Can iLogic Tech integrate mobile apps with existing business systems?</h3><p class="muted">Yes. iLogic Tech integrates mobile applications with ERP, CRM, POS, and other enterprise systems to create connected and efficient business workflows.</p></article>' +
        '<article class="glass card"><h3>How long does it take to develop a mobile app?</h3><p class="muted">Development timelines depend on the complexity and features of the application. iLogic Tech provides a project timeline after reviewing requirements during the initial consultation.</p></article>' +
        '<article class="glass card"><h3>Does iLogic Tech provide post-launch app support?</h3><p class="muted">Yes. iLogic Tech provides post-launch support and maintenance services to ensure the app continues to perform well and stays updated with platform changes.</p></article>' +
        '</div>' +
        '</div>' +
        '<div class="glass detail-card reveal" style="margin-top:1.5rem;padding:2rem;">' +
        '<h3 class="gradient-text" style="margin-bottom:1rem;">Mobile App Development Company in Madurai, Pondicherry &amp; Singapore</h3>' +
        '<p class="muted">iLogic Tech is committed to delivering professional and high-quality mobile application development services for businesses across Madurai, Pondicherry, Tamil Nadu, South India, and Singapore. Whether you need a native iOS app, an Android application, or a cross-platform mobile solution, iLogic Tech provides end-to-end development support aligned with your business goals.</p>' +
        '<p class="muted" style="margin-top:1rem;">Businesses searching for mobile app development company in Madurai, mobile app development company in Pondicherry, iOS and Android app developer in Tamil Nadu, cross-platform app development in Singapore, and custom mobile application development in South India can contact iLogic Tech for professional and reliable development services.</p>' +
        '<div class="detail-actions" style="margin-top:1.5rem;"><a class="btn btn-primary" href="index.html#contact">Get a Free Consultation</a><a class="btn btn-secondary" href="index.html#services">View All Services</a></div>' +
        '</div>' +
        '</div>';
      var _main = document.querySelector("main");
      if (_main) _main.appendChild(_seoSection);
    }
  }
  if (page === "solution") detailPage("solution");
  if (page === "project") detailPage("project");
  if (page === "exam") examHubPage();
  if (page === "career") careerPage();
  if (page === "internship") internshipPage();
  if (page === "jobs") jobsPage();
  if (page === "projects") projectsPage();
  if (page === "languagecert") languageCertPage();
  if (page === "exam-detail") examDomainPage();
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
  document.querySelectorAll(".mobile-item").forEach(item => {
    const trigger = item.querySelector("button.mobile-link");
    if (trigger) {
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(isOpen));
      });
    }
  });
  document.querySelectorAll(".mobile-nav a.mobile-link, .mobile-submenu a").forEach(link => {
    link.addEventListener("click", () => {
      if (!mobileNav || !menuToggle) return;
      mobileNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.querySelectorAll(".mobile-item.is-open").forEach(item => item.classList.remove("is-open"));
      document.querySelectorAll(".mobile-item button.mobile-link[aria-expanded=\"true\"]").forEach(button => {
        button.setAttribute("aria-expanded", "false");
      });
    });
  });
  const desktopNav = document.querySelector(".nav");
  const desktopNavItems = Array.from(document.querySelectorAll(".nav-item"));
  const desktopNavItemsWithSubmenu = desktopNavItems.filter(item => item.querySelector(".submenu"));
  const closeDesktopSubmenus = () => {
    desktopNavItemsWithSubmenu.forEach(item => {
      item.classList.remove("is-open");
      item.classList.remove("is-pinned");
    });
  };
  if (desktopNavItemsWithSubmenu.length) {
    desktopNavItemsWithSubmenu.forEach(item => {
      const trigger = item.querySelector(".nav-link");
      if (!trigger) return;
      item.addEventListener("mouseenter", () => {
        if (window.innerWidth <= 1100) return;
        desktopNavItemsWithSubmenu.forEach(entry => {
          if (!entry.classList.contains("is-pinned")) entry.classList.remove("is-open");
        });
        item.classList.add("is-open");
      });
      trigger.addEventListener("click", event => {
        if (window.innerWidth <= 1100) return;
        event.preventDefault();
        const shouldOpen = !item.classList.contains("is-pinned");
        closeDesktopSubmenus();
        if (shouldOpen) {
          item.classList.add("is-open");
          item.classList.add("is-pinned");
        }
      });
    });
    if (desktopNav) {
      desktopNav.addEventListener("mouseleave", () => {
        if (window.innerWidth <= 1100) return;
        desktopNavItemsWithSubmenu.forEach(item => {
          if (!item.classList.contains("is-pinned")) item.classList.remove("is-open");
        });
      });
    }
    document.addEventListener("click", event => {
      if (window.innerWidth <= 1100) return;
      if (desktopNav && desktopNav.contains(event.target)) return;
      closeDesktopSubmenus();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeDesktopSubmenus();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1100) closeDesktopSubmenus();
    });
  }
  const scrollTop = document.getElementById("scrollTop");
  if (scrollTop) {
    const updateScrollTop = () => scrollTop.classList.toggle("is-visible", window.scrollY > 450);
    window.addEventListener("scroll", updateScrollTop);
    updateScrollTop();
    scrollTop.addEventListener("click", () => {
      if (scrollTop.classList.contains("is-launching")) return;
      scrollTop.classList.add("is-launching");
      window.setTimeout(() => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }), 160);
      window.setTimeout(() => scrollTop.classList.remove("is-launching"), 1100);
    });
  }
  document.querySelectorAll(".reveal").forEach(item => item.classList.add("is-visible"));

  (function() {
  var hash = window.location.hash;
  if (!hash) return;
  var target = document.querySelector(hash);
  if (!target) return;
  var header = document.querySelector(".site-header");
  var headerHeight = header ? header.offsetHeight : 130;
  var targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
  window.scrollTo({ top: targetTop, behavior: "auto" });
})();

  const applyCountryDisplay = function(countryCode) {
    currentCountry = countryCode;
    document.querySelectorAll("[data-nav-countries]").forEach(item => {
      const countries = String(item.getAttribute("data-nav-countries") || "SG,IN").split(",").map(code => code.trim());
      item.style.display = countries.includes(countryCode) ? "" : "none";
    });
    document.querySelectorAll("[data-country-display]").forEach(section => {
      const countries = String(section.getAttribute("data-country-display") || "SG,IN").split(",").map(code => code.trim());
      section.style.display = countries.includes(countryCode) ? "" : "none";
    });
  };
  const countryButtons = Array.from(document.querySelectorAll("[data-country]"));
  if (countryButtons.length) {
    const storageKey = "ilogic-country";
    const setActiveCountry = function(countryCode) {
      countryButtons.forEach(button => {
        const isActive = button.getAttribute("data-country") === countryCode;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      applyCountryDisplay(countryCode);
    };
    let activeCountry = "SG";
    try {
      const savedCountry = window.localStorage.getItem(storageKey);
      if (savedCountry && countryOptions.some(option => option.code === savedCountry)) activeCountry = savedCountry;
    } catch (error) {}
    setActiveCountry(activeCountry);
    countryButtons.forEach(button => {
      button.addEventListener("click", function() {
        const nextCountry = button.getAttribute("data-country");
        if (!nextCountry) return;
        setActiveCountry(nextCountry);
        try {
          window.localStorage.setItem(storageKey, nextCountry);
        } catch (error) {}
      });
    });
  }
  const contactSectionEl = document.getElementById("contact");
  if (contactSectionEl) {
    const form = document.getElementById("contactForm");
    const statusEl = document.getElementById("contactFormStatus");
    const setStatus = function(message, isError) {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.classList.toggle("is-error", Boolean(isError));
      statusEl.classList.toggle("is-success", !isError && Boolean(message));
    };

    // ---- Shared timezone helpers ----
    const getTzParts = function(tz, date) {
      const fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour12: false, weekday: "short", hour: "2-digit", minute: "2-digit" });
      const map = {};
      fmt.formatToParts(date).forEach(function(p) { map[p.type] = p.value; });
      return { hour: Number(map.hour), minute: Number(map.minute), weekday: map.weekday };
    };
    const getTzOffsetMinutes = function(tz, date) {
      const fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const map = {};
      fmt.formatToParts(date).forEach(function(p) { map[p.type] = p.value; });
      const asUtc = Date.UTC(Number(map.year), Number(map.month) - 1, Number(map.day), 
      map.hour === "24" ? 0 : Number(map.hour), Number(map.minute), Number(map.second));
      return Math.round((asUtc - date.getTime()) / 60000);
    };
    const isBranchOpen = function(tz, date) {
      const parts = getTzParts(tz, date);
      if (parts.weekday === "Sun") return false;
      const minutes = parts.hour * 60 + parts.minute;
      return minutes >= 9 * 60 + 30 && minutes < 18 * 60 + 30;
    };
    const formatLocalTime = function(tz, date) {
      return new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit", hour12: true }).format(date);
    };

    // ---- 1. Live office status ----
    const refreshOfficeStatus = function() {
      const now = new Date();
      document.querySelectorAll("#officeStatusList .office-status-row").forEach(function(row) {
        const tz = row.getAttribute("data-office-tz");
        if (!tz) return;
        const dot = row.querySelector("[data-office-dot]");
        const text = row.querySelector("[data-office-text]");
        const open = isBranchOpen(tz, now);
        if (dot) dot.classList.toggle("is-open", open);
        if (dot) dot.classList.toggle("is-closed", !open);
        if (text) text.textContent = formatLocalTime(tz, now) + " · " + (open ? "Open now" : "Closed");
      });
    };

    // ---- 2. Smart routing ----
    let routedBranch = branches[0];
    const runSmartRouting = function() {
      const now = new Date();
      let visitorOffset = -now.getTimezoneOffset();
      try {
        const visitorTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (visitorTz) visitorOffset = getTzOffsetMinutes(visitorTz, now);
      } catch (error) {}
      let nearest = branches[0];
      let smallestDiff = Infinity;
      branches.forEach(function(branch) {
        const diff = Math.abs(getTzOffsetMinutes(branch.tz, now) - visitorOffset);
        if (diff < smallestDiff) {
          smallestDiff = diff;
          nearest = branch;
        }
      });
      let target = nearest;
      let fallbackNote = "";
      if (!isBranchOpen(nearest.tz, now)) {
        const sg = branches[0];
        if (isBranchOpen(sg.tz, now) && sg.title !== nearest.title) {
          target = sg;
          fallbackNote = " (our " + nearest.title + " team is closed right now, so we have routed you to " + sg.title + ")";
        }
      }
      routedBranch = target;
      const routingText = document.getElementById("smartRoutingText");
      if (routingText) {
        const open = isBranchOpen(target.tz, now);
        routingText.innerHTML = "Based on your location, the best team to reach is <strong>" + target.title + "</strong> — " +
          target.phone.split(",")[0] + (open ? ", open now." : ", currently closed — we usually reply within a few hours.") + fallbackNote;
      }
      updateWhatsappBridge();
    };

    // ---- 5 & 7. Draft autosave + WhatsApp continuity bridge ----
    const draftKey = "ilogicContactDraft";
    const draftBanner = document.getElementById("draftBanner");
    const draftIndicator = document.getElementById("draftSaveIndicator");
    let draftSaveTimer = null;

    const getFormValues = function() {
      if (!form) return {};
      const data = new FormData(form);
      return {
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        subject: String(data.get("subject") || ""),
        message: String(data.get("message") || "")
      };
    };

    const updateWhatsappBridge = function() {
      const bridge = document.getElementById("contactWhatsappBridge");
      if (!bridge) return;
      const values = getFormValues();
      const parts = [];
      if (values.name) parts.push("Hi, I am " + values.name + ".");
      else parts.push("Hi,");
      if (values.subject && values.subject !== "New enquiry") parts.push("Regarding: " + values.subject + ".");
      if (values.message) parts.push(values.message);
      const text = parts.join(" ");
      bridge.href = "https://wa.me/" + routedBranch.whatsapp + "?text=" + encodeURIComponent(text);
    };

    const saveDraft = function() {
      if (!form) return;
      const values = getFormValues();
      const hasContent = values.name || values.email || values.phone || (values.message && values.message.trim());
      try {
        if (hasContent) {
          window.localStorage.setItem(draftKey, JSON.stringify({ values: values, ts: Date.now() }));
          if (draftIndicator) draftIndicator.textContent = "Draft saved";
        } else {
          window.localStorage.removeItem(draftKey);
          if (draftIndicator) draftIndicator.textContent = "";
        }
      } catch (error) {}
      updateWhatsappBridge();
    };

    const clearDraft = function() {
      try { window.localStorage.removeItem(draftKey); } catch (error) {}
      if (draftIndicator) draftIndicator.textContent = "";
    };

    const applyDraftToForm = function(values) {
      if (!form || !values) return;
      Object.keys(values).forEach(function(key) {
        const field = form.elements[key];
        if (field && values[key]) field.value = values[key];
      });
      updateWhatsappBridge();
    };

    const checkForSavedDraft = function() {
      if (!form || !draftBanner) return;
      let saved = null;
      try {
        const raw = window.localStorage.getItem(draftKey);
        if (raw) saved = JSON.parse(raw);
      } catch (error) {}
      if (!saved || !saved.values) return;
      const ageHours = (Date.now() - (saved.ts || 0)) / 3600000;
      if (ageHours > 24) {
        clearDraft();
        return;
      }
      draftBanner.hidden = false;
      const restoreBtn = document.getElementById("draftRestoreBtn");
      const discardBtn = document.getElementById("draftDiscardBtn");
      if (restoreBtn) restoreBtn.addEventListener("click", function() {
        applyDraftToForm(saved.values);
        draftBanner.hidden = true;
        setStatus("Draft restored — pick up where you left off.", false);
      });
      if (discardBtn) discardBtn.addEventListener("click", function() {
        clearDraft();
        draftBanner.hidden = true;
      });
    };

    if (form) {
      form.addEventListener("input", function() {
        if (draftIndicator) draftIndicator.textContent = "Saving…";
        window.clearTimeout(draftSaveTimer);
        draftSaveTimer = window.setTimeout(saveDraft, 500);
      });

      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const values = getFormValues();
        const name = values.name.trim();
        const email = values.email.trim();
        const phone = values.phone.trim();
        const message = values.message.trim();
        const subject = values.subject.trim() || "New enquiry";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneDigits = phone.replace(/\D/g, "");

        if (!name || !email || !phone || !message) {
          setStatus("Please fill in all fields before sending.", true);
          return;
        }
        if (!emailPattern.test(email)) {
          setStatus("Please enter a valid email address.", true);
          return;
        }
        if (phoneDigits.length < 8) {
          setStatus("Please enter a valid phone number.", true);
          return;
        }

        setStatus("Thanks, " + name.split(" ")[0] + "! Opening your email client to send the message...", false);

        const body = ["Name: " + name, "Email: " + email, "Phone: " + phone, "", message].join("\n");
        window.location.href = "mailto:info@ilogic.com.sg?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        window.setTimeout(function() {
          form.reset();
          clearDraft();
          updateWhatsappBridge();
          setStatus("Message ready — check your email app to hit send. We'll get back to you soon!", false);
        }, 600);
      });
    }

    // ---- 6. Quick actions: copy / call / whatsapp / save contact ----
    document.querySelectorAll("#contact [data-copy-value]").forEach(function(button) {
      button.addEventListener("click", function() {
        const value = button.getAttribute("data-copy-value") || "";
        const originalLabel = button.querySelector("span") ? button.querySelector("span").textContent : "";
        const restoreLabel = function() {
          window.setTimeout(function() {
            const span = button.querySelector("span");
            if (span) span.textContent = originalLabel;
          }, 1500);
        };
        const showCopied = function() {
          const span = button.querySelector("span");
          if (span) span.textContent = "Copied!";
          restoreLabel();
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(showCopied).catch(function() {});
        } else {
          try {
            const temp = document.createElement("textarea");
            temp.value = value;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand("copy");
            document.body.removeChild(temp);
            showCopied();
          } catch (error) {}
        }
      });
    });

    document.querySelectorAll("#contact [data-office-whatsapp]").forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const digits = (link.getAttribute("data-office-whatsapp") || "").replace(/\D/g, "");
        const text = "Hi, I would like to know more about iLogic Tech services.";
        window.open("https://wa.me/" + digits + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      });
    });

    document.querySelectorAll("#contact [data-vcard-phone]").forEach(function(button) {
      button.addEventListener("click", function() {
        const phone = button.getAttribute("data-vcard-phone") || "";
        const vcard = ["BEGIN:VCARD", "VERSION:3.0", "N:Tech;iLogic;;;", "ORG:iLogic Tech Pte Ltd", "TEL;TYPE=WORK,VOICE:" + phone, "EMAIL:info@ilogic.com.sg", "URL:https://www.ilogic.com.sg", "END:VCARD"].join("\n");
        const blob = new Blob([vcard], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "iLogic-Tech.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    });

    refreshOfficeStatus();
    window.setInterval(refreshOfficeStatus, 30000);
    runSmartRouting();
    window.setInterval(runSmartRouting, 60000);
    checkForSavedDraft();
    updateWhatsappBridge();
  }

  // Add click handler for tailor image
  const tailorImage = document.querySelector(".solution-image");
  if (tailorImage) {
    tailorImage.addEventListener("click", function() {
      // Show alert for enquiry
      alert("Check for Enquiry - Please fill out the contact form to proceed");
      // Redirect to contact page
      window.location.href = "index.html#contact";
    });
  }

  const hiringWidgetEl = document.getElementById("hiringWidget");
  const hiringChatbotEl = document.getElementById("hiringChatbot");
  const hiringMessagesEl = document.getElementById("hiringMessages");
  const hiringChatForm = document.getElementById("hiringChatForm");
  const hiringChatInput = document.getElementById("hiringChatInput");
  const hiringApplyPanel = document.getElementById("hiringApplyPanel");
  const hiringApplyForm = document.getElementById("hiringApplyForm");
  const hiringSelectedTrack = document.getElementById("hiringSelectedTrack");
  const hiringWidgetNotice = document.getElementById("hiringWidgetNotice");
  const hiringQuickActions = document.getElementById("hiringQuickActions");
  const hiringRefresh = hiringChatbotEl ? hiringChatbotEl.querySelector("[data-hiring-refresh]") : null;
  const hiringRoleSelector = document.getElementById("hiringRoleSelector");
  if (hiringWidgetEl && hiringChatbotEl && hiringMessagesEl && hiringChatForm && hiringChatInput && hiringApplyPanel && hiringApplyForm && hiringSelectedTrack && hiringQuickActions && hiringRoleSelector) {
    let hiringBooted = false;
    const internshipKnowledge = {
      overview: "iLogic Tech offers an Internship Program for students and freshers who want industry-focused learning with hands-on project work.",
      tracks: internshipTracks.map(track => track.title + ": " + track.summary).join(" "),
      requirements: "Eligibility requirements are: " + internshipRequirements.join(", ") + ".",
      process: "The internship journey follows these steps: " + internshipJourney.join(" "),
      apply: "To apply, choose a role in the chat, complete the Quick Apply form, and submit it. The application is addressed to hr@ilogic.com.sg."
    };
    const appendHiringMessage = function(role, html) {
      const item = document.createElement("div");
      item.className = "hiring-message " + (role === "user" ? "is-user" : "is-bot");
      item.innerHTML = '<div class="hiring-message-bubble">' + html + '</div>';
      hiringMessagesEl.appendChild(item);
      hiringMessagesEl.scrollTop = hiringMessagesEl.scrollHeight;
    };
    const examKnowledge = {
      overview: "We support exam-related enquiries for LanguageCert, academic partner certifications, and global certification programs.",
      guidance: "Tell us the exam or certification you need help with and we will guide you through registration, scheduling, and enquiry submission.",
      apply: "To submit an exam-related application, choose your exam type below and send your details in the chat or use the email link.",
      email: function(subject) {
        return 'mailto:' + hrEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('Hi,\n\nI would like to enquire about the following exam or certification:\n\n');
      }
    };
    const answerInternshipQuestion = function(question) {
      const normalized = question.toLowerCase();
      const matchedTrack = internshipTracks.find(track => track.keywords.some(keyword => normalized.includes(keyword)));
      if (normalized.includes("exam") || normalized.includes("certification") || normalized.includes("enquiry") || normalized.includes("inquiry")) {
        return '<strong>Exam Enquiry</strong><br>' + examKnowledge.overview + '<br><br>' + examKnowledge.guidance + '<br><br><a class="btn btn-secondary" href="' + examKnowledge.email("Exam Enquiry") + '" target="_blank" rel="noreferrer noopener">Email Exam Enquiry</a>';
      }
      if ((normalized.includes("apply") && normalized.includes("exam")) || normalized.includes("apply for an exam")) {
        return '<strong>Exam Application</strong><br>' + examKnowledge.apply + '<br><br><a class="btn btn-secondary" href="' + examKnowledge.email("Exam Application") + '" target="_blank" rel="noreferrer noopener">Start Exam Application</a>';
      }
      if (normalized.includes("apply") || normalized.includes("job") || normalized.includes("role")) {
        openApplyPanel();
        return "You can apply directly here. First select a role, then complete the Quick Apply form. Your application will be prepared for hr@ilogic.com.sg.";
      }
      if (matchedTrack) {
        return "<strong>" + matchedTrack.title + "</strong><br>" + matchedTrack.summary + "<br>If you want this role, click Apply and choose <strong>" + matchedTrack.title + "</strong>.";
      }
      if (normalized.includes("requirement") || normalized.includes("eligible") || normalized.includes("qualification")) {
        return internshipKnowledge.requirements;
      }
      if (normalized.includes("process") || normalized.includes("path") || normalized.includes("journey") || normalized.includes("steps")) {
        return internshipKnowledge.process;
      }
      if (normalized.includes("track") || normalized.includes("program") || normalized.includes("internship")) {
        return internshipKnowledge.overview + "<br><br><strong>Available tracks:</strong><br>" + internshipTracks.map(track => "• " + track.title + " - " + track.summary).join("<br>");
      }
      return "I can help with internship tracks, eligibility, process, and applications.<br><br><strong>Available tracks:</strong><br>" + internshipTracks.map(track => "• " + track.title).join("<br>");
    };
    const resetHiringChat = function() {
      hiringMessagesEl.innerHTML = "";
      hiringQuickActions.hidden = false;
      hiringQuickActions.style.display = "";
      hiringQuickActions.querySelectorAll("button").forEach(button => {
        button.hidden = false;
        button.style.display = "";
      });
      hiringApplyPanel.hidden = true;
      hiringApplyForm.hidden = true;
      hiringSelectedTrack.value = "";
      hiringRoleSelector.querySelectorAll("[data-hiring-role]").forEach(button => button.classList.remove("is-active"));
      hiringChatInput.value = "";
      appendHiringMessage("bot", "Hi, Welcome to iLogic Team");
      hiringChatInput.focus();
    };
    const hideHiringQuickActions = function() {
      hiringQuickActions.hidden = true;
      hiringQuickActions.style.display = "none";
      hiringQuickActions.querySelectorAll("button").forEach(button => {
        button.hidden = true;
        button.style.display = "none";
      });
    };
    const showExamActionOnly = function(question) {
      if (question === "Enquire about exams") {
        window.location.href = "index.html#contact";
        return true;
      }
      if (question === "Apply for an exam") {
        window.location.href = "index.html#contact";
        return true;
      }
      return false;
    };
    const openApplyPanel = function() {
      hideHiringQuickActions();
      hiringApplyPanel.hidden = false;
      hiringApplyForm.hidden = !hiringSelectedTrack.value;
      if (hiringSelectedTrack.value) {
        hiringApplyForm.querySelector("input[name='name']")?.focus();
      }
    };
    const setSelectedRole = function(role) {
      hideHiringQuickActions();
      hiringSelectedTrack.value = role;
      hiringRoleSelector.querySelectorAll("[data-hiring-role]").forEach(button => {
        button.classList.toggle("is-active", button.getAttribute("data-hiring-role") === role);
      });
      hiringApplyPanel.hidden = false;
      hiringApplyForm.hidden = false;
      const trackInput = hiringApplyForm.querySelector("#hiringSelectedTrack");
      if (trackInput) trackInput.value = role;
      hiringApplyForm.querySelector("input[name='name']")?.focus();
    };
    const openHiringChat = function() {
      if (hiringWidgetNotice) hiringWidgetNotice.classList.remove("is-visible");
      if (!hiringBooted) {
        hiringBooted = true;
        resetHiringChat();
      }
      hiringChatbotEl.classList.add("is-open");
      hiringChatbotEl.setAttribute("aria-hidden", "false");
      document.body.classList.add("hiring-chatbot-open");
      window.setTimeout(function() {
        hiringChatInput.focus();
      }, 40);
    };
    const closeHiringChat = function() {
      hiringChatbotEl.classList.remove("is-open");
      hiringChatbotEl.setAttribute("aria-hidden", "true");
      document.body.classList.remove("hiring-chatbot-open");
    };
    const handleOptionSelection = function(question) {
      hideHiringQuickActions();
      if (showExamActionOnly(question)) {
        return;
      }
      if (question === "apply") {
        appendHiringMessage("bot", internshipKnowledge.apply);
        openApplyPanel();
        return;
      }
      appendHiringMessage("user", question);
      appendHiringMessage("bot", answerInternshipQuestion(question));
    };
    hiringWidgetEl.addEventListener("click", openHiringChat);
    hiringChatbotEl.querySelectorAll("[data-hiring-close]").forEach(control => {
      control.addEventListener("click", closeHiringChat);
    });
    hiringChatbotEl.querySelectorAll("[data-hiring-question]").forEach(button => {
      button.addEventListener("click", function() {
        const question = button.getAttribute("data-hiring-question") || "";
        handleOptionSelection(question);
      });
    });
    hiringChatbotEl.querySelectorAll("[data-hiring-apply-open]").forEach(button => {
      button.addEventListener("click", function() {
        handleOptionSelection("apply");
      });
    });
    hiringChatbotEl.querySelectorAll("[data-hiring-apply-close]").forEach(button => {
      button.addEventListener("click", function() {
        hiringApplyPanel.hidden = true;
        hideHiringQuickActions();
      });
    });
    hiringChatbotEl.querySelectorAll("[data-hiring-role]").forEach(button => {
      button.addEventListener("click", function() {
        const role = button.getAttribute("data-hiring-role");
        if (!role) return;
        setSelectedRole(role);
      });
    });
    if (hiringRefresh) {
      hiringRefresh.addEventListener("click", function() {
        resetHiringChat();
      });
    }
    hiringChatForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const question = hiringChatInput.value.trim();
      if (!question) return;
      hiringQuickActions.hidden = true;
      appendHiringMessage("user", question);
      appendHiringMessage("bot", answerInternshipQuestion(question));
      hiringChatInput.value = "";
    });
    if (hiringWidgetNotice) {
      window.setTimeout(function() {
        hiringWidgetNotice.classList.add("is-visible");
      }, 350);
      window.setTimeout(function() {
        hiringWidgetNotice.classList.remove("is-visible");
      }, 5350);
    }
    hiringChatForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const question = hiringChatInput.value.trim();
      if (!question) return;
      appendHiringMessage("user", question);
      appendHiringMessage("bot", answerInternshipQuestion(question));
      hiringChatInput.value = "";
    });
    hiringApplyForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const data = new FormData(hiringApplyForm);
      const role = String(data.get("track") || "");
      const body = ["Internship Application", "", "Full Name: " + data.get("name"), "Email Address: " + data.get("email"), "Phone Number: " + data.get("phone"), "Internship Track: " + role, "", "Why should we select you?", String(data.get("message") || "")].join("\n");
      appendHiringMessage("user", "I have completed my application for " + role + ".");
      appendHiringMessage("bot", "Your application is ready to send to <strong>hr@ilogic.com.sg</strong>. We have opened your email app with the completed details.");
      window.location.href = "mailto:hr@ilogic.com.sg?subject=" + encodeURIComponent("Internship Application - " + role) + "&body=" + encodeURIComponent(body);
      hiringApplyForm.reset();
      hiringSelectedTrack.value = "";
      hiringApplyForm.hidden = true;
      hiringApplyPanel.hidden = true;
      hiringChatInput.focus();
    });
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && hiringChatbotEl.classList.contains("is-open")) {
        closeHiringChat();
      }
    });
  }
  const solutionPlayerEl = document.querySelector("[data-solution-player]");
  const solutionVideo = document.getElementById("solutionVideo");
  const solutionStatEls = Array.from(document.querySelectorAll("[data-solution-stat]"));
  if (solutionStatEls.length) {
    solutionStatEls.forEach(function(statEl, index) {
      const target = Number(statEl.getAttribute("data-solution-stat") || "0");
      const duration = 1200 + index * 180;
      const startTime = performance.now();
      const tick = function(now) {
        const progress = Math.min(1, (now - startTime) / duration);
        statEl.textContent = String(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    });
  }
  if (solutionPlayerEl && solutionVideo) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug") || "";
    const detail = solutionExperienceDetails[slug];
    const captionEl = document.getElementById("solutionVideoCaption");
    const timeEl = document.getElementById("solutionVideoTime");
    const toggleButtons = Array.from(solutionPlayerEl.querySelectorAll("[data-video-toggle]"));
    const progressInput = solutionPlayerEl.querySelector("[data-video-progress]");
    const volumeInput = solutionPlayerEl.querySelector("[data-video-volume]");
    const muteButton = solutionPlayerEl.querySelector("[data-video-mute]");
    const captionButton = solutionPlayerEl.querySelector("[data-video-captions]");
    const minimizeButton = solutionPlayerEl.querySelector("[data-video-minimize]");
    const floatButton = solutionPlayerEl.querySelector("[data-video-float]");
    const fullscreenButton = solutionPlayerEl.querySelector("[data-video-fullscreen]");
    const dragHandle = solutionPlayerEl.querySelector("[data-video-drag-handle]");
    let captionsEnabled = true;
    let isFloating = false;
    let dragState = null;
    let orientationLocked = false;
    const formatTime = function(seconds) {
      const safe = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
      const mins = Math.floor(safe / 60);
      const secs = Math.floor(safe % 60);
      return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
    };
    const setToggleLabels = function() {
      const label = solutionVideo.paused ? "Play" : "Pause";
      toggleButtons.forEach(button => {
        if (button.classList.contains("solution-video-overlay")) {
          button.innerHTML = solutionVideo.paused ? "&#9654;" : "&#10074;&#10074;";
        } else {
          button.textContent = label;
        }
      });
    };
    const updateCaptions = function() {
      if (!captionEl || !detail || !detail.video || !detail.video.cues || !detail.video.cues.length) return;
      if (!captionsEnabled) {
        captionEl.hidden = true;
        return;
      }
      const duration = solutionVideo.duration || detail.video.cues.length;
      const segment = duration / detail.video.cues.length || 1;
      const index = Math.min(detail.video.cues.length - 1, Math.floor(solutionVideo.currentTime / segment));
      captionEl.textContent = detail.video.cues[index] || "";
      captionEl.hidden = false;
    };
    const updateProgress = function() {
      if (progressInput) {
        const percent = solutionVideo.duration ? (solutionVideo.currentTime / solutionVideo.duration) * 100 : 0;
        progressInput.value = String(percent);
      }
      if (timeEl) timeEl.textContent = formatTime(solutionVideo.currentTime) + " / " + formatTime(solutionVideo.duration);
      setToggleLabels();
      updateCaptions();
    };
    const resetFloatingPosition = function() {
      solutionPlayerEl.style.left = "";
      solutionPlayerEl.style.top = "";
    };
    setToggleLabels();
    updateProgress();
    toggleButtons.forEach(button => {
      button.addEventListener("click", function() {
        if (solutionVideo.paused) solutionVideo.play();
        else solutionVideo.pause();
      });
    });
    solutionVideo.addEventListener("timeupdate", updateProgress);
    solutionVideo.addEventListener("loadedmetadata", updateProgress);
    solutionVideo.addEventListener("play", setToggleLabels);
    solutionVideo.addEventListener("pause", setToggleLabels);
    if (progressInput) {
      progressInput.addEventListener("input", function() {
        if (!solutionVideo.duration) return;
        solutionVideo.currentTime = (Number(progressInput.value) / 100) * solutionVideo.duration;
        updateProgress();
      });
    }
    if (volumeInput) {
      volumeInput.addEventListener("input", function() {
        solutionVideo.volume = Number(volumeInput.value);
        solutionVideo.muted = Number(volumeInput.value) === 0;
      });
    }
    if (muteButton) {
      muteButton.addEventListener("click", function() {
        solutionVideo.muted = !solutionVideo.muted;
        muteButton.innerHTML = solutionVideo.muted ? "&#128263;" : "&#128266;";
      });
    }
    if (captionButton) {
      captionButton.addEventListener("click", function() {
        captionsEnabled = !captionsEnabled;
        captionButton.setAttribute("aria-pressed", String(captionsEnabled));
        captionButton.classList.toggle("is-active", captionsEnabled);
        updateCaptions();
      });
      captionButton.classList.add("is-active");
    }
    if (minimizeButton) {
      minimizeButton.addEventListener("click", function() {
        const nextState = !solutionPlayerEl.classList.contains("is-minimized");
        solutionPlayerEl.classList.toggle("is-minimized", nextState);
        minimizeButton.textContent = nextState ? "+" : "-";
      });
    }
    if (floatButton) {
      floatButton.addEventListener("click", function() {
        isFloating = !isFloating;
        solutionPlayerEl.classList.toggle("is-floating", isFloating);
        floatButton.classList.toggle("is-active", isFloating);
        if (!isFloating) resetFloatingPosition();
      });
    }
    if (fullscreenButton) {
      fullscreenButton.addEventListener("click", async function() {
        try {
          if (document.fullscreenElement) {
            await document.exitFullscreen();
          } else {
            await solutionPlayerEl.requestFullscreen();
            if (window.matchMedia("(max-width: 760px)").matches && screen.orientation && typeof screen.orientation.lock === "function") {
              try {
                await screen.orientation.lock("landscape");
                orientationLocked = true;
              } catch (error) {}
            }
          }
        } catch (error) {}
      });
    }
    document.addEventListener("fullscreenchange", async function() {
      if (!document.fullscreenElement && orientationLocked && screen.orientation && typeof screen.orientation.unlock === "function") {
        try {
          screen.orientation.unlock();
        } catch (error) {}
        orientationLocked = false;
      }
    });
    if (dragHandle) {
      dragHandle.addEventListener("pointerdown", function(event) {
        if (!solutionPlayerEl.classList.contains("is-floating")) return;
        dragState = {
          startX: event.clientX,
          startY: event.clientY,
          rect: solutionPlayerEl.getBoundingClientRect()
        };
        dragHandle.setPointerCapture(event.pointerId);
      });
      dragHandle.addEventListener("pointermove", function(event) {
        if (!dragState || !solutionPlayerEl.classList.contains("is-floating")) return;
        const nextLeft = dragState.rect.left + (event.clientX - dragState.startX);
        const nextTop = dragState.rect.top + (event.clientY - dragState.startY);
        solutionPlayerEl.style.left = Math.max(8, Math.min(window.innerWidth - dragState.rect.width - 8, nextLeft)) + "px";
        solutionPlayerEl.style.top = Math.max(8, Math.min(window.innerHeight - dragState.rect.height - 8, nextTop)) + "px";
      });
      dragHandle.addEventListener("pointerup", function(event) {
        if (dragState) dragHandle.releasePointerCapture(event.pointerId);
        dragState = null;
      });
    }
  }
  const feedbackStorageKey = "ilogic-feedback-posts";
  const feedbackStorageVersionKey = "ilogic-feedback-posts-version";
  const feedbackStorageVersion = "2";
  const whatsappNameStorageKey = "ilogic-whatsapp-name";
  const googleFeedbackOpen = document.getElementById("googleFeedbackOpen");
  const feedbackModalEl = document.getElementById("feedbackModal");
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackUserName = document.getElementById("feedbackUserName");
  const feedbackCompanyName = document.getElementById("feedbackCompanyName");
  const feedbackUserRole = document.getElementById("feedbackUserRole");
  const feedbackMessage = document.getElementById("feedbackMessage");
  const feedbackRating = document.getElementById("feedbackRating");
  const feedbackSuccess = document.getElementById("feedbackSuccess");
  const feedbackWarning = document.getElementById("feedbackWarning");
  const feedbackPostButton = document.getElementById("feedbackPostButton");
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  const feedbackStars = Array.from(document.querySelectorAll("[data-feedback-rating]"));
  document.querySelectorAll("[data-whatsapp-link]").forEach(function(link) {
    link.addEventListener("click", function(event) {
      const phone = link.getAttribute("data-phone") || "";
      if (!phone) return;
      event.preventDefault();
      let savedName = "";
      try {
        savedName = window.localStorage.getItem(whatsappNameStorageKey) || "";
      } catch (error) {}
      if (!savedName) {
        const enteredName = window.prompt("Enter your name for the WhatsApp message:", "");
        if (enteredName === null) return;
        savedName = enteredName.trim();
        if (savedName) {
          try {
            window.localStorage.setItem(whatsappNameStorageKey, savedName);
          } catch (error) {}
        }
      }
      window.open(buildWhatsAppUrl(phone, savedName), "_blank", "noopener,noreferrer");
    });
  });
  if (feedbackModalEl && feedbackForm && feedbackUserName && feedbackCompanyName && feedbackUserRole && feedbackMessage && feedbackRating) {
    const blockedFeedbackPatterns = [/\bbad\b/i, /\bpoor\b/i, /\bvery poor\b/i, /\bnot satisfied\b/i, /\bunsatisfied\b/i, /\bwrong\b/i, /\bfake\b/i, /\bworst\b/i, /\bawful\b/i, /\bterrible\b/i, /\bdisappoint(?:ed|ing)?\b/i, /\bunhappy\b/i, /\bnot happy\b/i, /\bfrustrat(?:ed|ing)\b/i, /\bfraud\b/i, /\bcheat(?:ed|ing)?\b/i, /\bscam\b/i, /\bfuck(?:er|ing)?\b/i, /\bshit(?:ty)?\b/i, /\basshole\b/i, /\bbitch(?:es)?\b/i, /\bbastard\b/i, /\bdamn\b/i, /\bcrap\b/i, /\bidiot\b/i, /\bstupid\b/i, /\bmoron\b/i, /\bslut\b/i, /\bwhore\b/i, /\bnigga\b/i, /\bnigger\b/i, /\bchutiya\b/i, /\bmadarchod\b/i, /\bbhenchod\b/i, /\bharami\b/i, /\bgaand\b/i];
    const loadFeedbackPosts = function() {
      try {
        const stored = window.localStorage.getItem(feedbackStorageKey);
        const parsed = stored ? JSON.parse(stored) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return [];
      }
    };
    const saveFeedbackPosts = function(posts) {
      window.localStorage.setItem(feedbackStorageKey, JSON.stringify(posts));
    };
    const migrateFeedbackStorage = function() {
      try {
        const storedVersion = window.localStorage.getItem(feedbackStorageVersionKey);
        if (storedVersion !== feedbackStorageVersion) {
          window.localStorage.removeItem(feedbackStorageKey);
          window.localStorage.setItem(feedbackStorageVersionKey, feedbackStorageVersion);
        }
      } catch (error) {}
    };
    const containsBlockedLanguage = function(post) {
      const combinedText = [post.name, post.company, post.role, post.message].join(" ");
      return blockedFeedbackPatterns.some(pattern => pattern.test(combinedText));
    };
    const getAllTestimonials = function() {
      return loadFeedbackPosts().concat(defaultTestimonials);
    };
    const renderTestimonials = function() {
      if (!testimonialsGrid) return;
      testimonialsGrid.innerHTML = getAllTestimonials().map(testimonialCardMarkup).join("");
    };
    const showTestimonialsSection = function() {
      if (testimonialsGrid) {
        const testimonialsSection = document.getElementById("reviews");
        if (testimonialsSection && typeof testimonialsSection.scrollIntoView === "function") {
          testimonialsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
        return;
      }
      window.location.href = "index.html#reviews";
    };
    const resetFeedbackForm = function() {
      feedbackForm.reset();
      setFeedbackRating(0);
      if (feedbackWarning) feedbackWarning.hidden = true;
      if (feedbackPostButton) feedbackPostButton.disabled = true;
    };
    const updatePostButtonState = function() {
      const post = {
        name: feedbackUserName.value.trim(),
        company: feedbackCompanyName.value.trim(),
        role: feedbackUserRole.value.trim(),
        rating: Number(feedbackRating.value || "0"),
        message: feedbackMessage.value.trim()
      };
      const isComplete = Boolean(post.name && post.company && post.role && post.rating && post.message);
      const hasBlockedLanguage = isComplete && containsBlockedLanguage(post);
      if (feedbackWarning) feedbackWarning.hidden = !hasBlockedLanguage;
      if (feedbackPostButton) feedbackPostButton.disabled = !isComplete || hasBlockedLanguage;
    };
    const setFeedbackRating = function(value) {
      feedbackRating.value = String(value);
      feedbackStars.forEach(star => {
        const starValue = Number(star.getAttribute("data-feedback-rating"));
        const isActive = starValue <= value;
        star.classList.toggle("is-active", isActive);
        star.setAttribute("aria-checked", String(starValue === value));
      });
      updatePostButtonState();
    };
    const openFeedbackModal = function() {
      feedbackModalEl.classList.add("is-open");
      feedbackModalEl.setAttribute("aria-hidden", "false");
      document.body.classList.add("feedback-modal-open");
      if (feedbackSuccess) feedbackSuccess.hidden = true;
      window.setTimeout(function() {
        feedbackUserName.focus();
      }, 40);
    };
    const closeFeedbackModal = function() {
      feedbackModalEl.classList.remove("is-open");
      feedbackModalEl.setAttribute("aria-hidden", "true");
      document.body.classList.remove("feedback-modal-open");
    };
    migrateFeedbackStorage();
    renderTestimonials();
    resetFeedbackForm();
    if (googleFeedbackOpen) {
      googleFeedbackOpen.addEventListener("click", openFeedbackModal);
    }
    feedbackModalEl.querySelectorAll("[data-feedback-close]").forEach(control => {
      control.addEventListener("click", closeFeedbackModal);
    });
    feedbackStars.forEach(star => {
      star.addEventListener("click", function() {
        setFeedbackRating(Number(star.getAttribute("data-feedback-rating")));
      });
    });
    [feedbackUserName, feedbackCompanyName, feedbackUserRole, feedbackMessage].forEach(field => {
      field.addEventListener("input", updatePostButtonState);
    });
    feedbackForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const post = {
        name: feedbackUserName.value.trim(),
        company: feedbackCompanyName.value.trim(),
        role: feedbackUserRole.value.trim(),
        rating: Number(feedbackRating.value || "0"),
        message: feedbackMessage.value.trim(),
        date: new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })
      };
      if (!post.name || !post.company || !post.role || !post.message || !post.rating || containsBlockedLanguage(post)) {
        updatePostButtonState();
        return;
      }
      const posts = loadFeedbackPosts();
      posts.unshift(post);
      saveFeedbackPosts(posts);
      resetFeedbackForm();
      renderTestimonials();
      closeFeedbackModal();
      if (feedbackSuccess) feedbackSuccess.hidden = false;
      showTestimonialsSection();
    });
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && feedbackModalEl.classList.contains("is-open")) {
        closeFeedbackModal();
      }
    });
  }
  const examToast = document.getElementById("examToast");
  const examToastTimer = {
    id: 0
  };

  function showExamToast(message) {
    if (!examToast) return;
    examToast.innerHTML = message;
    examToast.classList.remove("is-visible");
    void examToast.offsetWidth;
    examToast.classList.add("is-visible");
    if (examToastTimer.id) window.clearTimeout(examToastTimer.id);
    examToastTimer.id = window.setTimeout(function() {
      examToast.classList.remove("is-visible");
    }, 3000);
  }
  Array.from(document.querySelectorAll("[data-exam-toggle-form]")).forEach(function(button) {
    button.addEventListener("click", function() {
      const formId = button.getAttribute("data-exam-toggle-form");
      const form = formId ? document.getElementById(formId) : null;
      const wrap = form ? form.closest(".exam-form-card") : null;
      if (!wrap || !form) return;
      wrap.classList.remove("is-hidden");
      form.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      const firstInput = form.querySelector('input[name="name"]');
      if (firstInput) window.setTimeout(function() {
        firstInput.focus();
      }, 220);
    });
  });
  Array.from(document.querySelectorAll("[data-enquiry-form]")).forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const followConfirm = form.querySelector("[data-follow-confirm]");
      if (followConfirm && !followConfirm.checked) {
        showExamToast("&#9888;&#65039; Please follow our social media and confirm before submitting.");
        followConfirm.focus();
        return;
      }
      const data = new FormData(form);
      sendEnquiryMail(data);
      form.reset();
      const examTypeInput = form.querySelector('input[name="examType"]');
      if (examTypeInput) examTypeInput.value = form.getAttribute("data-exam-type") || "";
      showExamToast("&#9989; Thank you! Our team will contact you soon.");
    });
  });
  const examFeedbackForm = document.getElementById("examFeedbackForm");
  const examFeedbackRating = document.getElementById("examFeedbackRating");
  const examFollowConfirm = document.getElementById("examFollowConfirm");
  const examFeedbackSubmit = document.getElementById("examFeedbackSubmit");
  const examFeedbackStars = Array.from(document.querySelectorAll("[data-exam-feedback-rating]"));
  if (examFeedbackForm && examFeedbackRating && examFollowConfirm && examFeedbackSubmit && examFeedbackStars.length) {
    const syncExamFeedbackSubmit = function() {
      examFeedbackSubmit.disabled = !examFollowConfirm.checked;
    };
    const setExamFeedbackRating = function(value) {
      examFeedbackRating.value = String(value);
      examFeedbackStars.forEach(function(star) {
        const starValue = Number(star.getAttribute("data-exam-feedback-rating"));
        const active = starValue <= value;
        star.classList.toggle("is-active", active);
        star.setAttribute("aria-checked", String(starValue === value));
      });
    };
    examFeedbackStars.forEach(function(star) {
      star.addEventListener("click", function() {
        setExamFeedbackRating(Number(star.getAttribute("data-exam-feedback-rating") || "0"));
      });
    });
    examFollowConfirm.addEventListener("change", syncExamFeedbackSubmit);
    syncExamFeedbackSubmit();
    setExamFeedbackRating(0);
    examFeedbackForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(examFeedbackForm);
      if (!formData.get("name") || !formData.get("email") || !formData.get("message") || !Number(examFeedbackRating.value || "0") || !examFollowConfirm.checked) return;
      examFeedbackForm.reset();
      setExamFeedbackRating(0);
      syncExamFeedbackSubmit();
      showExamToast("&#9989; Thank you! Your feedback has been submitted.");
    });
  }
  const galleryState = {
    activeKey: "",
    activeIndex: 0,
    likes: {},
    interactions: {},
    comments: {}
  };
  const galleryMap = Object.fromEntries(galleryCollections.map(item => [item.key, item]));
  const galleryModalEl = document.getElementById("galleryModal");
  const galleryModalImage = document.getElementById("galleryModalImage");
  const galleryModalLabel = document.getElementById("galleryModalLabel");
  const galleryModalTitle = document.getElementById("galleryModalTitle");
  const galleryModalSubtitle = document.getElementById("galleryModalSubtitle");
  const galleryModalLocation = document.getElementById("galleryModalLocation");
  const galleryModalIndex = document.getElementById("galleryModalIndex");
  const galleryCommentList = document.getElementById("galleryCommentList");
  const galleryCommentName = document.getElementById("galleryCommentName");
  const galleryCommentInput = document.getElementById("galleryCommentInput");
  const galleryCommentForm = document.getElementById("galleryCommentForm");
  const galleryLikeButton = document.querySelector("[data-gallery-like]");
  const galleryLikeLabel = document.getElementById("galleryLikeLabel");
  const galleryLikeCount = document.getElementById("galleryLikeCount");
  const galleryShareCount = document.getElementById("galleryShareCount");
  const galleryActionCommentCount = document.getElementById("galleryActionCommentCount");
  const galleryCommentCount = document.getElementById("galleryCommentCount");
  const gallerySharePanel = document.getElementById("gallerySharePanel");
  const galleryShareToggle = document.querySelector("[data-gallery-toggle-share]");
  const galleryDownloadAction = document.getElementById("galleryDownloadAction");
  const galleryInteractionCountEls = {
    whatsapp: document.getElementById("galleryWhatsappCount"),
    facebook: document.getElementById("galleryFacebookCount"),
    instagram: document.getElementById("galleryInstagramCount"),
    linkedin: document.getElementById("galleryLinkedinCount"),
    x: document.getElementById("galleryXCount"),
    email: document.getElementById("galleryEmailCount"),
    download: document.getElementById("galleryDownloadCount")
  };
  if (galleryModalEl && galleryModalImage && galleryCommentForm && galleryLikeButton) {
    const galleryStorageKey = "ilogic-gallery-engagement-v2";
    const galleryPhoneMediaQuery = window.matchMedia("(max-width: 560px)");
    const getActiveCollection = function() {
      return galleryMap[galleryState.activeKey] || null;
    };
    const saveGalleryState = function() {
      try {
        window.localStorage.setItem(galleryStorageKey, JSON.stringify({
          likes: galleryState.likes,
          interactions: galleryState.interactions,
          comments: galleryState.comments
        }));
      } catch (error) {}
    };
    const loadGalleryState = function() {
      try {
        const stored = JSON.parse(window.localStorage.getItem(galleryStorageKey) || "{}");
        if (stored && typeof stored === "object") {
          galleryState.likes = stored.likes && typeof stored.likes === "object" ? stored.likes : {};
          galleryState.interactions = stored.interactions && typeof stored.interactions === "object" ? stored.interactions : {};
          galleryState.comments = stored.comments && typeof stored.comments === "object" ? stored.comments : {};
        }
      } catch (error) {}
    };
    const ensureCollectionState = function(collectionKey) {
      if (!(collectionKey in galleryState.likes)) galleryState.likes[collectionKey] = false;
      const defaultCounts = {
        like: 0,
        whatsapp: 0,
        facebook: 0,
        instagram: 0,
        linkedin: 0,
        x: 0,
        email: 0,
        download: 0
      };
      galleryState.interactions[collectionKey] = Object.assign({}, defaultCounts, galleryState.interactions[collectionKey] || {});
      if (!(collectionKey in galleryState.comments)) {
        galleryState.comments[collectionKey] = [];
      } else {
        galleryState.comments[collectionKey] = (galleryState.comments[collectionKey] || []).map(function(item) {
          if (typeof item === "string") return {
            name: "Guest",
            text: item
          };
          return {
            name: String(item && item.name || "Guest"),
            text: String(item && item.text || "")
          };
        });
      }
    };
    const incrementInteraction = function(collectionKey, type) {
      ensureCollectionState(collectionKey);
      if (!(type in galleryState.interactions[collectionKey])) galleryState.interactions[collectionKey][type] = 0;
      galleryState.interactions[collectionKey][type] += 1;
      saveGalleryState();
    };
    const totalShareCount = function(collectionKey) {
      ensureCollectionState(collectionKey);
      const counts = galleryState.interactions[collectionKey];
      return ["whatsapp", "facebook", "instagram", "linkedin", "x", "email", "download"].reduce((sum, key) => sum + Number(counts[key] || 0), 0);
    };
    const buildShareLinks = function(collection) {
      const shareUrl = encodeURIComponent(window.location.href.split("#")[0] + "#gallery");
      const shareText = encodeURIComponent(collection.title + " - " + collection.subtitle);
      const links = {
        whatsapp: "https://wa.me/?text=" + shareText + "%20" + shareUrl,
        facebook: "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=" + shareUrl,
        x: "https://twitter.com/intent/tweet?text=" + shareText + "&url=" + shareUrl,
        email: "mailto:?subject=" + encodeURIComponent(collection.title) + "&body=" + shareText + "%0A%0A" + shareUrl
      };
      gallerySharePanel.querySelectorAll("[data-share-network]").forEach(link => {
        const network = link.getAttribute("data-share-network");
        if (network && links[network]) link.href = links[network];
      });
      if (galleryDownloadAction) {
        galleryDownloadAction.href = collection.images[galleryState.activeIndex];
        galleryDownloadAction.setAttribute("download", collection.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + (galleryState.activeIndex + 1) + ".webp");
      }
    };
    const renderInteractionCounts = function() {
      const key = galleryState.activeKey;
      ensureCollectionState(key);
      const counts = galleryState.interactions[key];
      const shareTotal = totalShareCount(key);
      const commentTotal = (galleryState.comments[key] || []).length;
      if (galleryLikeCount) {
        galleryLikeCount.textContent = String(counts.like || 0);
        galleryLikeCount.hidden = !counts.like;
      }
      if (galleryShareCount) {
        galleryShareCount.textContent = String(shareTotal);
        galleryShareCount.hidden = !shareTotal;
      }
      if (galleryActionCommentCount) {
        galleryActionCommentCount.textContent = String(commentTotal);
        galleryActionCommentCount.hidden = !commentTotal;
      }
      Object.keys(galleryInteractionCountEls).forEach(function(name) {
        if (galleryInteractionCountEls[name]) {
          galleryInteractionCountEls[name].textContent = String(counts[name] || 0);
          galleryInteractionCountEls[name].hidden = !counts[name];
        }
      });
    };
    const renderComments = function() {
      const activeComments = galleryState.comments[galleryState.activeKey] || [];
      galleryCommentCount.textContent = activeComments.length + (activeComments.length === 1 ? " comment" : " comments");
      galleryCommentCount.hidden = !activeComments.length;
      if (galleryActionCommentCount) {
        galleryActionCommentCount.textContent = String(activeComments.length);
        galleryActionCommentCount.hidden = !activeComments.length;
      }
      galleryCommentList.innerHTML = activeComments.length ? activeComments.map(comment => '<div class="gallery-comment-item"><strong>' + escapeHtml(comment.name || "Guest") + '</strong><p>' + escapeHtml(comment.text || "") + '</p></div>').join("") : "";
    };
    const renderGalleryModal = function() {
      const collection = getActiveCollection();
      if (!collection) return;
      const imagePath = collection.images[galleryState.activeIndex];
      galleryModalImage.src = imagePath;
      galleryModalImage.alt = collection.title + " image " + (galleryState.activeIndex + 1);
      galleryModalLabel.textContent = collection.label;
      galleryModalTitle.textContent = collection.title;
      galleryModalSubtitle.textContent = collection.subtitle;
      galleryModalLocation.textContent = collection.location;
      galleryModalIndex.textContent = (galleryState.activeIndex + 1) + " / " + collection.images.length;
      galleryLikeButton.classList.toggle("is-active", Boolean(galleryState.likes[galleryState.activeKey]));
      galleryLikeButton.setAttribute("aria-pressed", String(Boolean(galleryState.likes[galleryState.activeKey])));
      galleryLikeLabel.textContent = galleryState.likes[galleryState.activeKey] ? "Liked" : "Like";
      buildShareLinks(collection);
      renderInteractionCounts();
      renderComments();
    };
    const openGalleryModal = function(collectionKey) {
      if (!galleryMap[collectionKey]) return;
      ensureCollectionState(collectionKey);
      galleryState.activeKey = collectionKey;
      galleryState.activeIndex = 0;
      renderGalleryModal();
      gallerySharePanel.hidden = !galleryPhoneMediaQuery.matches;
      galleryModalEl.classList.add("is-open");
      galleryModalEl.setAttribute("aria-hidden", "false");
      document.body.classList.add("gallery-modal-open");
    };
    const closeGalleryModal = function() {
      galleryModalEl.classList.remove("is-open");
      galleryModalEl.setAttribute("aria-hidden", "true");
      document.body.classList.remove("gallery-modal-open");
      gallerySharePanel.hidden = true;
    };
    const stepGalleryModal = function(direction) {
      const collection = getActiveCollection();
      if (!collection) return;
      galleryState.activeIndex = (galleryState.activeIndex + direction + collection.images.length) % collection.images.length;
      renderGalleryModal();
    };
    document.querySelectorAll("[data-gallery-open]").forEach(button => {
      button.addEventListener("click", function() {
        const key = button.getAttribute("data-gallery-open");
        if (!key) return;
        openGalleryModal(key);
      });
    });
    galleryModalEl.querySelectorAll("[data-gallery-close]").forEach(button => {
      button.addEventListener("click", closeGalleryModal);
    });
    const galleryPrev = galleryModalEl.querySelector("[data-gallery-prev]");
    const galleryNext = galleryModalEl.querySelector("[data-gallery-next]");
    if (galleryPrev) galleryPrev.addEventListener("click", () => stepGalleryModal(-1));
    if (galleryNext) galleryNext.addEventListener("click", () => stepGalleryModal(1));
    galleryLikeButton.addEventListener("click", function() {
      const key = galleryState.activeKey;
      if (!key) return;
      ensureCollectionState(key);
      galleryState.likes[key] = !galleryState.likes[key];
      galleryState.interactions[key].like = Math.max(0, Number(galleryState.interactions[key].like || 0) + (galleryState.likes[key] ? 1 : -1));
      saveGalleryState();
      renderGalleryModal();
    });
    galleryShareToggle.addEventListener("click", function() {
      gallerySharePanel.hidden = !gallerySharePanel.hidden;
    });
    gallerySharePanel.querySelectorAll("[data-share-network]").forEach(link => {
      link.addEventListener("click", function() {
        const key = galleryState.activeKey;
        const network = link.getAttribute("data-share-network");
        if (!key || !network) return;
        incrementInteraction(key, network);
        renderInteractionCounts();
      });
    });
    if (galleryDownloadAction) {
      galleryDownloadAction.addEventListener("click", function() {
        const key = galleryState.activeKey;
        if (!key) return;
        incrementInteraction(key, "download");
        renderInteractionCounts();
      });
    }
    const commentFocusButton = document.querySelector("[data-gallery-focus-comment]");
    if (commentFocusButton) {
      commentFocusButton.addEventListener("click", function() {
        if (galleryCommentName && !galleryCommentName.value.trim()) galleryCommentName.focus();
        else galleryCommentInput.focus();
      });
    }
    galleryCommentForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const key = galleryState.activeKey;
      const name = galleryCommentName ? galleryCommentName.value.trim() : "";
      const value = galleryCommentInput.value.trim();
      if (!key || !name || !value) return;
      ensureCollectionState(key);
      galleryState.comments[key].unshift({
        name: name,
        text: value
      });
      saveGalleryState();
      if (galleryCommentName) galleryCommentName.value = "";
      galleryCommentInput.value = "";
      renderGalleryModal();
    });
    document.addEventListener("keydown", function(event) {
      if (!galleryModalEl.classList.contains("is-open")) return;
      if (event.key === "Escape") closeGalleryModal();
      if (event.key === "ArrowLeft") stepGalleryModal(-1);
      if (event.key === "ArrowRight") stepGalleryModal(1);
    });
    loadGalleryState();
    galleryCollections.forEach(item => ensureCollectionState(item.key));
    saveGalleryState();
  }
})();


