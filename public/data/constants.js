export const constants = {
  GITHUB_LINK: "https://github.com/Rajdaoui-Zouhair",
  LINKEDIN_LINK: "https://www.linkedin.com/in/rajdaouizouhir",
  INSTAGRAME_LINK: "https://web.facebook.com/zouhir.rajdaoui",
};

export const hero = {
  name: "Zouhir RAJDAOUI",
  age: 25,
  job: "ANDROID ENGINEER",
  image: "/static/my_image.jpeg",
  summary:
    "Energetic and curiosity-driven Android Engineer with 2+ years of experience writing top-quality clean code. Passion about IT and especially mobile development. Uses the Passion to achieve an expert knowledge on Android development. Creatively solves problems and applies time managementskills.",
  resumeLink:"https://drive.google.com/file/d/1sMRrlfRAgjqncIUPi_Z-70QdP6vj-m-Z/view?usp=sharing" 
};

export const experiences = [
  {
    title: "Principal Android Engineer at @INYAD",
    startDate: "aug 17 2020",
    endDate: "avr 04 2022",
    description:
      "Worked as the Principal android develper of the Mahaal application, which has mor than 50k installs on play store. With the team we were delivering new features weekly to give our users the best experience using our application. And to make our users hapier, we take their feedbacks in consideration during new features Brainstorming.",
    activities: [
      "- @Mahaal Android application from scratch.",
      "- Integrated Android modern APIs, code refactoring and Multi-Module architecture.",
      "- Architect and Develop rich features such as: Off-line/On-line Synchronisation, Receipts Printing with ESC/POS thermal printers (Network , Bluetooth and USB connections) using RxJava, Design Patterns And Custom Templates",
      "- Own responsibility for the @Mahaal project release process.",
      "- Onboirding for new employees and interns.",
    ],
  },
  {
    title: "Android Engineer Intern at @INYAD",
    startDate: "feb 02 2020",
    endDate: "jul 02 2020",
    description:
      "The internship of my Master degree graduation, it was my first professional experience. In this internship I took my first steps on Android developement, which i finished by developing two Android application, one of them (@konnash) was deployed to play store.",
    activities: [
      "- Developed and deployed my first Andrdoi application from scratch (@Konnash).",
      "- Setup multi-module architecture and MVVM design pattern.",
      "- Work with Androidx and Jetpack Libraries.",
      "- Use Jenkins CI/CD.",
    ],
  },
];

export const educations = [
  {
    image: "/static/ensias.png",
    school: "National School of Computer Science and Systems Analysis(ENSIAS)",
    where: "Rabat, Morocco",
    degree: "Master",
    field: "Internet of Things and Mobile Services ",
    startDate: "Septembre 2018",
    endDate: "July 2020",
    grade: "",
    activities: [],
  },
  {
    image: "/static/fst.png",
    school: "Faculty of Science and Technologies(FST)",
    where: "Errachidia, Morocco",
    degree: "Bachelor",
    field: "Software Engineering",
    startDate: "Septembre 2014",
    endDate: "July 2018",
    grade: "",
    activities: ["School football team player"],
  },
];

export const projects = [
  {
    id:1,
    name: "Konnash",
    associatedWith: "Internship @INYAD ",
    type: "",
    startDate: "feb 2020",
    endDate: "july 2020",
    features: [
      "100% free and secure cash book.",
      "allows merchants to record and manage all credit and debit transactions of their customers and suppliers",
      "Replace traditional tracking methods like pens, papers and calculators with the phone.",
    ],
    topFeautres: [
      "First version from scratch.",
      "Setup multi-module architecture.",
      "Setup Navigation component.",
      "Intergate Back-End API (REST).",
    ],
    utils: [
      {
        type: "Front-End",
        items: [
          "Java",
          "Google material design",
          "Android Jetpack",
          "RxJava",
          "Retrofit & OkHttp",
          "Google APIs (Update, Review, Analytics, ...)",
          "etc...",
        ],
      },
      {
        type: "Back-End",
        items: ["REST", "Java"],
      },
      {
        type: "Database",
        items: ["SQLite, Room"],
      },
    ],
    images: [
      {
        src: "/static/konnash_1.webp",
        description: "Digital cash book, 100% free and secure.",
      },
      {
        src: "/static/konnash_2.webp",
        description:
          "Collect, track and manage customer debts. \n Share reminders via SMS or WhatsApp.",
      },
      {
        src: "/static/konnash_3.webp",
        description: "Free Automatic Data Backup.",
      },
      {
        src: "/static/konnash_4.webp",
        description: "Get your PDF reports instantly.",
      },
    ],
  },
  {
    id:2,
    name: "Mahaal",
    associatedWith: "Principal Android Engineer at @INYAD",
    type: "",
    startDate: "Aug 2020",
    endDate: "Present",
    features: [
      "Mobile aplication that allows merchants to create their e-catalog and manage their online business easily.",
      "It Turns smartphones or tablets into a mobile point of sale (POS).",
      "It Provides all POS features such as Take orders, organize inventory and monitor sales margins, all in just a few clicks",
    ],
    topFeautres: [
      "Create the app from scratch.",
      "Print Receipt on Thermal printers (Bluetooth, USB and Network).",
      "Manage Release process(Code review, Prerod Testing, etc...).",
    ],
    utils: [
      {
        type: "Front-End",
        items: [
          "Java",
          "RxJava2",
          "Retrofit",
          "Design system",
          "Android Jetpack",
          "Google material design",
          "etc...",
        ],
      },
      {
        type: "Back-End",
        items: ["REST API"],
      },
      {
        type: "Database",
        items: ["backend: SQL, frontend: SQLite (Room)"],
      },
    ],
    images: [
      {
        src: "/static/tempsnip.png",
        description: " 1st ledger app in Morocco",
      },
      {
        src: "/static/tempsnip.png",
        description: " 1st ledger app in Morocco",
      },
      {
        src: "/static/tempsnip.png",
        description: " 1st ledger app in Morocco",
      },
    ],
  },
  {
    id:3,
    name: "RealAnime",
    associatedWith: "Contribution",
    type: "",
    startDate: "Semptember 2021",
    endDate: "Present",
    features: [
      "Mobile aplication that provides a large collection of Anime and Manga characters in the REEL world.",
      "RealAnime users can also You can also download and set wallpapers to home screen or lock screen to customize their device and make it unique..",
    ],
    topFeautres: [
      "Participate in the developement of the version 2.",
      "Migrate from Java to Kotlin.",
      "Implement new Design following Material Design Guidelines.",
      "Migrate Back-End API to NodeJs.",
    ],
    utils: [
      {
        type: "Front-End",
        items: [
          "Kotlin",
          "Coroutines",
          "Retrofit/OkHttp",
          "Design system",
          "Android Jetpack",
          "Google material design",
          "etc...",
        ],
      },
      {
        type: "Back-End",
        items: ["REST, NodeJs"],
      },
    ],
    images: [
      {
        src: "/static/realanime1.webp",
        description: "Easy to use application",
      },
      {
        src: "/static/realanime2.webp",
        description: "Dark mode for brain and eyes rest",
      },
      {
        src: "/static/realanime3.webp",
        description: "Various new wallpapers will be added constantly",
      },
      {
        src: "/static/realanime4.webp",
        description: "Customize home or lock screen ",
      },
    ],
  },
  {
    id:4,
    name: "Portfolio",
    associatedWith: "Personal Projects",
    type: "",
    startDate: "Feb 2022",
    endDate: "Present",
    features: [
      "The current project You're viewing right now .",
      "Because i am a React Lover and i like Single page responsive applications, i decided to develop my personal Portfolio website as a Signle page application using ReactJs and NextJs.",
      "This project is open source and can be anyone's Portfolio in just few minutes (follow README instruction)."
    ],
    topFeautres: [
      "Designed following Material Design guidlines.",
      "Developed using NextJs, Material Ui and Styled Components.",
      "Deployed to Vercel with CI/CD.",
    ],
    utils: [
      {
        type: "Front-End",
        items: [
          "Reacr.js",
          "Next.js",
          "Material Ui",
          "Styled Components",
          "etc...",
        ],
      },
    ],
    images: [
      {
        src: "/static/ic_current_project.webp",
        description: "",
      }
    ],
  },
];

export const skills = [
  {
    name: "JAVA",
    icon: "/static/skills/ic_java.svg",
    level: "Expert",
  },
  {
    name: "Android",
    icon: "/static/skills/ic_android.svg",
    level: "Expert",
  },
  {
    name: "OOP",
    icon: "/static/skills/ic_oop.svg",
    level: "Expert",
  },
  {
    name: "UI",
    icon: "/static/skills/ic_ui.svg",
    level: "Expert",
  },
  {
    name: "Material Design",
    icon: "/static/skills/ic_material_ui.svg",
    level: "Expert",
  },
  {
    name: "JETPACK COMPOSE",
    icon: "/static/skills/ic_compose.svg",
    level: "Familiar",
  },
  {
    name: "SCRUM",
    icon: "/static/skills/ic_scrum.svg",
    level: "Proficient",
  },
  {
    name: "KOTLIN",
    icon: "/static/skills/ic_kotlin.svg",
    level: "Proficient",
  },
  {
    name: "GIT (Github, GitLab)",
    icon: "/static/skills/ic_git.svg",
    level: "Proficient",
  },
  {
    name: "MVVM",
    icon: "/static/skills/ic_mvvm.svg",
    level: "Proficient",
  },
  {
    name: "RXJAVA",
    icon: "/static/skills/ic_rxjava.svg",
    level: "Proficient",
  },
  {
    name: "DAGGER/HILT",
    icon: "/static/skills/ic_dagger.svg",
    level: "Proficient",
  },
  {
    name: "SQLITE/ROOM",
    icon: "/static/skills/ic_mysql.svg",
    level: "Expert",
  },
  {
    name: "MongoDb & REALM",
    icon: "/static/skills/ic_mongodb.svg",
    level: "Familiar",
  },
  {
    name: "REST APIs",
    icon: "/static/skills/ic_rest.svg",
    level: "Proficient",
  },
  {
    name: "RETROFIT/OkHTTP",
    icon: "/static/skills/ic_retrofit.svg",
    level: "Proficient",
  },
  {
    name: "JSON",
    icon: "/static/skills/ic_json.svg",
    level: "Proficient",
  },
  {
    name: "NODE.JS",
    icon: "/static/skills/ic_node.svg",
    level: "Proficient",
  },
  {
    name: "REACT.JS",
    icon: "/static/skills/ic_react.svg",
    level: "Proficient",
  },
  {
    name: "NEXT.JS",
    icon: "/static/skills/ic_next.svg",
    level: "Familiar",
  },
  {
    name: "CI/CD",
    icon: "/static/skills/ic_cicd.svg",
    level: "Familiar",
  },
  {
    name: "DOCKER & DOCKER COMPOSE",
    icon: "/static/skills/ic_docker.svg",
    level: "Familiar",
  },
];
