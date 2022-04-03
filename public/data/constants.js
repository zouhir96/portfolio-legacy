export const constants = {
  GITHUB_LINK: "https://github.com/Rajdaoui-Zouhair",
  LINKEDIN_LINK: "https://www.linkedin.com/in/rajdaouizouhir",
  INSTAGRAME_LINK: "https://web.facebook.com/zouhir.rajdaoui",
};

export const experiences = [
  {
    title: "Internship at @INYAD",
    startDate: "feb 02 2020",
    endDate: "jul 02 2020",
    description:"Currently working as the Principal android develper of the Mahaal application, which has mor than 50k installs on play store. With my team we are delivering new features weekly to give our users the best experience using our application. And to make our users hapier, we take their feedbacks in consideration during new features Brainstorming.",
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
    description:"The internship of my Master degree graduation, it was my first professional experience. In this internship I took my first steps on Android developement, which i finished by developing two Android application, one of them (@konnash) was deployed to play store.",
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
        description: "Collect, track and manage customer debts. \n Share reminders via SMS or WhatsApp.",
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
  }  ,
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
        type:"Front-End",
        items:["Java", "RxJava2","Retrofit","Design system", "Android Jetpack", "Google material design", "etc..."]
      },
      {
        type:"Back-End",
        items:["REST API"]
      },
      {
        type:"Database",
        items:["backend: SQL, frontend: SQLite (Room)"]
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
