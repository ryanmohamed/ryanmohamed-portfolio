import { ProjectType } from "../src/components/Project";

const Projects: Record<string, ProjectType> = {
    AfterSchoolStartup: {
        name: "After School Startup",
        blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
        desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        date: new Date(1692248286),
        images: [
          "/thumbnails/afterschoolstartup.png",
          "/afterschoolstartup/1.png",
          "/afterschoolstartup/2.png"
        ],      
        videos: [
          "/vids/AfterSchoolStartup.mp4",
        ],
        skills: [
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "PayPal",
          "Server-Side Rendering",
          "REST API"
        ],
        additionalSkills: [
          "Software Development Life Cycle",
          "Agile",
          "REST API",
          "GitHub",
          "Version Control",
          "CI/CD",
          "Vercel",
          "React",
          "JavaScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "NoSQL",
          "OpenAI",
          "PayPal",
          "Stripe",
          "RevenueCat",
          "Webhooks",
          "Middleware",
          "Server-Side Rendering",
          "Payment Processing"
        ],
        paradigms: [],
        languages: ["TypeScript"],
        associatedWith: ["i4software"],
        link: "https://www.afterschoolstartup.com",
        github: "sd"
    },

    Fitbyte: {
        name: "Fitbyte",
        blurb: "An AI-powered cross platform web app to generate personally optimized meal and fitness plans. Sign in and generate and save fitness plans at no cost. Pro memberships unlock access to progress statistics, macro information, weigh-ins, goal tracking and optimized fitness plan.",
        desc: "Responsible for system architecture, version control and CI/CD pipeline. Integrated authentication, NoSQL database, streaming OpenAI API responses, payment gateway, webhooks, external and internal API endpoints, and securely server-side rendered pages.",
        images: [
          "/thumbnails/fitbyte.png",
          "/fitbyte/1.png",
          "/fitbyte/2.png",
          "/fitbyte/3.png",
        ],      
        videos: [
          "/vids/Fitbyte.mp4",
        ],
        skills: [
          "JavaScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "NoSQL",
          "OpenAI",
          "PayPal",
          "REST API",
          "Server-Side Rendering",
          "Tailwind CSS"
        ],
        additionalSkills: [
          "Software Development Life Cycle",
          "Agile",
          "GitHub",
          "REST API",
          "Streaming",
          "Version Control",
          "CI/CD",
          "Vercel",
          "React",
          "JavaScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "NoSQL",
          "OpenAI",
          "PayPal",
          "Stripe",
          "RevenueCat",
          "Middleware",
          "Server-Side Rendering",
          "Payment Processing"
        ],
        languages: ["JavaScript"],
        associatedWith: ["i4software"],
        link: "https://www.fitbyte.me"
    },

    RestaurantRodeo: {
        name: "Restaurant Rodeo",
        blurb: "Restaurant Rodeo is a small full-stack project for finding restaurants in your local area or area of preference.",
        desc: "The project is a demonstration of best practices when it comes to consumption of external REST APIs. This involves techniques such as server-side rendering (SSR), caching, proxied API endpoints, and debouncing. The project mainly makes use of the Yelp Fusion API, Distance Matrix API, and the Google Maps for JavaScript API.",
        images: [
          "/thumbnails/restaurantrodeo.png",
          "/restaurantrodeo/6.png",
          "/restaurantrodeo/2.png",
          "/restaurantrodeo/4.png",
          "/restaurantrodeo/5.png",
        ],
        videos: [
          "/vids/RestaurantRodeo.mp4",
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "REST API",
          "Google Cloud Platform (GCP)",
          "Server-Side Rendering",
          "Geocoding",
          "Caching",
        ],
        languages: ["TypeScript"],
        associatedWith: ["i4software"],
        link: "https://restaurantrodeo.netlify.app",
        github: "https://github.com/ryanmohamed/restaurant-roulette"

    },

    Tada: {
        name: "Ta-da",
        blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
        desc: "Responsible for system architecture, version control and CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        images: [
          "/thumbnails/tada.png"
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "Tailwind CSS"
        ],
        additionalSkills: [
          "Software Development Life Cycle",
          "Agile",
          "REST API",
          "GitHub",
          "Version Control",
          "CI/CD",
          "Vercel",
          "React",
          "TypeScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "Tailwind CSS",
          "NoSQL",
          "OpenAI",
          "Server-Side Rendering"
        ],
        languages: ["TypeScript"],
        associatedWith: ["i4software"],
        link: "https://www.afterschoolstartup.com"
    },

    PetmatcherV1: {
      name: "Petmatcher v1",
      blurb: "Petmatcher is a scalable and authenticated full-stack web app, aimed towards family, friends, or couples looking to find their ideal pet in a pleasant interactive pair up.",
      desc: "Responsible for system architecture, JWT authentication, MySQL ORM integration, WebSocket integration, and general UI/UX design. Architected and implemented a pair-up system of rooms, where users synchronously answer prompts, providing keywords for image generation.",
      images: [
        "/thumbnails/petmatcherv1.png",
      ],
      videos: [
        "/vids/Petmatcher_Demo.mp4",
      ],
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "JWT Authentication",
        "MySQL",
        "WebSockets",
        "REST API",
        "CSS"
      ],
      additionalSkills: [
        "Full-stack development",
        "Collaborative Coding",
        "Agile",
        "Requirements Analysis",
        "Unit Testing",
        "Integration Testing",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "JWT Authentication",
        "WebSockets",
        "MySQL",
        "ORM",
        "Sequelize",
        "Event-Driven Development",
        "REST API",
        "CSS"
      ],
      languages: ["JavaScript", "Node.js", "SQL"],
      associatedWith: ["queenscollege"],
      link: "https://petmatcher.netlify.app",
      github: "https://github.com/ryanmohamed/pandagum-client"
    },

    PortfolioV1: {
      name: "Portfolio v1",
      blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
      desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
      images: [
        "/thumbnails/portfoliov1.png",
      ],
      skills: [
        "TypeScript",
        "Next.js",
        "Firebase",
        "Google Cloud Platform (GCP)",
        "PayPal",
        "Server-Side Rendering"
      ],
      languages: ["JavaScript"],
      associatedWith: ["personal"],
      link: "https://ryanmohamed.netlify.app",
      github: "https://github.com/ryanmohamed/next-portfolio"
    },

    Quizitiv: {
        name: "Quizitiv",
        blurb: "Quizitiv is platform for creating and taking quizzes in a knowledge-sharing based community. Taking quizzes created by others and scoring enough can grant you experience points, of which you can use to modify and play games on the site.",
        desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        images: [
          "/thumbnails/quizitiv.png",
        ],      
        videos: [
          "/vids/Quizitiv.mp4",
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "Ruby",
          "Sinatra",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "NoSQL",
          "Tailwind CSS"
        ],
        languages: ["TypeScript", "Ruby"],
        associatedWith: ["thecoderschool"],
        link: "https://quizitiv.netlify.app",
        github: "https://github.com/ryanmohamed/pandagum-client"
    },

    PetmatcherV2: {
      name: "Petmatcher v2",
      blurb: "AI Matcher is a large-scale full-stack project for prompting and sharing team prompted AI generated images in real time.",
      desc: "The project is split into a dual-architecture with social media operations following standard MVC and CRUD principles using Prisma as an ORM and tRPC as the authenticated controller in the back-end. Real-time connections from clients directly to the game pool and game rooms are authenticated and handled by an external socket server written with Express in Node.js. Sensitive middleware operations between web server and socket server are handled via a standard REST API endpoint on the socket server.",
      images: [
        "/thumbnails/petmatcherv2.png",
      ],
      videos: [
        "/vids/StripeOpenAI.mp4",
      ],
      skills: [
        "TypeScript",
        "Next.js",
        "Google Cloud Platform (GCP)",
        "PostgreSQL",
        "ORM",
        "Prisma",
        "Docker",
        "Redis",
        "Stripe",
        "DALLE-2",
        "WebSockets",
        "REST API",
        "RPC",
        "Tailwind CSS",
        "Server-Side Rendering"
      ],
      languages: ["TypeScript", "PostgreSQL"],
      associatedWith: ["personal"],
      link: "https://github.com/ryanmohamed/stripe-openai-socket-generation",
      github: "https://github.com/ryanmohamed/stripe-openai-socket-generation"
  },

    TSQL: {
        name: "Data Migration + JDBC",
        blurb: "A final project for my database course tackled in a team of agile developers.",
        desc: "Responsible for migrating data from BI tool to a normalized database schema through ER diagrams, stored procedures, constraints, and data validation processes. Key tasks included the design and implementation of a robust database structure in Microsoft SQL Server, ensuring data integrity and optimization through normalization techniques. Developed and executed JDBC (Java Database Connectivity) queries for data retrieval and basic visualization to enhance data interpretability.",
        images: [
          "/thumbnails/jdbc.png",
          "/jdbc/1.png",
          "/jdbc/2.png",
          "/jdbc/3.png"
        ],
        videos: [
          '/vids/jdbc.mp4'
        ],
        skills: [
          "Java",
          "SQL",
          "T-SQL",
          "Microsoft SQL Server",
          "Docker",
          "Linux"
        ],
        additionalSkills: [
          "Software Development Life Cycle",
          "Agile",
          "JIRA",
          "Teamwork",
          "Collaborative Code",
          "Version Control",
          "SQL",
          "T-SQL",
          "Java",
          "JDBC",
          "Microsoft SQL Server",
          "Docker",
          "Linux",
          "RDBMS",
          "Entity Relationship Diagrams",
          "Data Normalization",
          "Stored Procedures",
          "Constraints",
          "UDTs",
          "Data Visualization",
        ],
        languages: ["Java", "SQL", "T-SQL"],
        associatedWith: ["queenscollege"],
        github: "https://github.com/JDBC-Class-Library/JDBC-Final"
    },

    UNET: {
        name: "Automatic Tumor Segmentation",
        blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
        desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        images: [
          "/thumbnails/unet.png",
        ],
        skills: [
          "Python",
          "Tensorflow",
          "Keras",
          "Matplotlib",
          "NumPy",
          "Convolutional Neural Network",
          "Deep Learning",
          "U-NET Architecture",
          "Biomedical Image Analysis"
        ],
        languages: ["TypeScript"],
        associatedWith: ["queenscollege"],
        link: "https://www.afterschoolstartup.com"
    },

    StudentPlusPlus: {
        name: "Student++",
        blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
        desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        images: [
          "/afterschoolstartup/1.png",
          "/afterschoolstartup/2.png"
        ],
        videos: [
          "/vids/Student.mp4",
        ],
        skills: [
          "JavaScript",
          "Node.js",
          "React",
          "Express",
          "MySQL",
          "Sequelize",
          "ORM",
          "REST API"
        ],
        languages: ["JavaScript", "SQL"],
        associatedWith: ["queenscollege"],
        link: "https://www.afterschoolstartup.com"
    },

    OAuth: {
        name: "OAuth 2.0",
        blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
        desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        images: [
          "/thumbnails/oauth.png",
        ],
        videos: [
          "/vids/Blogger.mp4",
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "PayPal",
          "Server-Side Rendering"
        ],
        languages: ["TypeScript"],
        associatedWith: ["queenscollege"],
        link: "https://www.afterschoolstartup.com"
    },

    AllergEase: {
      name: "AllergEase",
      blurb: "An application to find food recommendations and recipes based on your allergies.",
      desc: "iOS port of the original Android mobile application. Emphasizes best practice REST API consumption using Swift and SwiftUI. Part of 38 applications delievered within a one-week deadline.",
      date: new Date(1692248286),
      images: [
        "/thumbnails/allergease.png",
        "/allergease/1.png",
        "/allergease/2.png",
        "/allergease/3.png"
      ], 
      skills: [
        "Swift",
        "Swift UI",
        "REST API",
        "Cross-Platform Application",
        "Software Development Life Cycle",
        "Agile",
      ],
      additionalSkills: [
        "Swift",
        "Swift UI",
        "REST API",
        "Cross-Platform Application",
        "Software Development Life Cycle",
        "Agile",
        "Version Control",
        "Git",
        "GitHub",
        "Sprint"
      ],
      paradigms: [],
      languages: ["Swift", "SwiftUI"],
      associatedWith: ["i4software"],
      link: "https://www.afterschoolstartup.com",
      github: "sd"
    },

    MessageQueues: {
        name: "Message Queues w/ C",
        blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
        desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        images: [
          "/afterschoolstartup/1.png",
          "/afterschoolstartup/2.png"
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "PayPal",
          "Server-Side Rendering"
        ],
        languages: ["TypeScript"],
        associatedWith: ["queenscollege"],
        link: "https://www.afterschoolstartup.com"
    },

    Posix: {
        name: "Linux Posix w/ C",
        blurb: "An After School program meant to give middle and high school students the emerging skills of tomorrow, today.",
        desc: "Developed system architecture and handled version control & CI/CD pipeline. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.",
        images: [
          "/afterschoolstartup/1.png",
          "/afterschoolstartup/2.png"
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "Firebase",
          "Google Cloud Platform (GCP)",
          "PayPal",
          "Server-Side Rendering"
        ],
        languages: ["TypeScript"],
        associatedWith: ["queenscollege"],
        link: "https://www.afterschoolstartup.com"
    }

};

export default Projects;