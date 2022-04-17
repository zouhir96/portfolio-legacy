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
};

export const experiences = [
  {
    title: "Internship at @INYAD",
    startDate: "feb 02 2020",
    endDate: "jul 02 2020",
    description:
      "Currently working as the Principal android develper of the Mahaal application, which has mor than 50k installs on play store. With my team we are delivering new features weekly to give our users the best experience using our application. And to make our users hapier, we take their feedbacks in consideration during new features Brainstorming.",
    activities: [
      "- @Mahaal Android application from scratch.",
      "- Integrated Android modern APIs, code refactoring and Multi-Module architecture.",
      "- Own responsibility for the @Mahaal project release process.",
      "- Coordinate @Mahaal project and progress reviews for team.",
    ],
  },
  {
    title: "Internship at @INYAD",
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
    activities: ["School football team player"],
  },
  {
    image: "/static/fst.png",
    school: "Faculty of Ccience and Technology(FST)",
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
    name: "Konnash",
    associatedWith: "Internship @INYAD ",
    type: "",
    startDate: "feb 2020",
    endDate: "july 2020",
    features: [
      "Creator of the first version from scratch.",
      "Developed the Front-end of the app.",
      "Worked with the technical manager to integrate the Back-end API.",
      "Participated in the deployment of the application to GooglePlay.",
    ],
    topFeautres: [
      "Setup multi-module architecture.",
      "MVVM design pattern",
      "Deploy the application to play store",
    ],
    utils: [
      {
        type: "Front-End",
        items: [
          "Java",
          "RxJava2",
          "Retrofit",
          "Android Jetpack",
          "Google material design",
        ],
      },
      {
        type: "Back-End",
        items: ["REST", "Java"],
      },
      {
        type: "Database",
        items: ["SQL, SQLite"],
      },
    ],
    images: [
      {
        src: "/static/konnash_1.png",
        description: "Digital cash book, 100% free and secure.",
      },
      {
        src: "/static/konnash_2.png",
        description:
          "Collect, track and manage customer debts. \n Share reminders via SMS or WhatsApp.",
      },
      {
        src: "/static/konnash_3.png",
        description: "Free Automatic Data Backup.",
      },
      {
        src: "/static/konnash_4.png",
        description: "Get your PDF reports instantly.",
      },
    ],
  },
  {
    name: "Mahaal",
    associatedWith: "Software Engineer @INYAD ",
    type: "",
    startDate: "Aug 2020",
    endDate: "Present",
    features: [
      "Creator of the first version from scratch.",
      "New releases Delivery manager.",
      "Working the product team to develop new features.",
      "Support for new mobile developers.",
    ],
    topFeautres: [
      "Create the app from scratch.",
      "Setup Multi-Module architecture.",
      "Print Receipt on Thermal printers (Bluetooth, USB and Network).",
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
  }
];
