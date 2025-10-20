import { text } from "stream/consumers";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
];

export const gridItems = [
  {
    id: 1,
    title: "Investing in tomorrow's technology today unlocks boundless potential",
    description: "",
    className: "lg:col-span-4 lg:min-h-60vh md:col-span-2 md:row-span-4 flex cursor-pointer",
    imgClassName: "absolute bottom-3 right-4 w-full",
    titleClassName: "justify-end",
    img: "/about-1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-1 md:row-span-2 cursor-pointer",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  
  {
    id: 3,
    title: "Soft Skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-1 md:row-span-2 cursor-pointer",
    imgClassName: "",
    titleClassName: "justify-center content-between",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Learn All About Me",
    description: "My History",
    className: "md:col-span-2 md:row-span-2 lg:col-span-4 cursor-pointer",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/about-me.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Crystal Clear Solutions",
    des: "Window Cleaning company based in Long Beach California.",
    img: "/ccs.svg",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "framer.svg",],
    link: "crystalclearsolutions.co",
   
  },
  {
    id: 2,
    title: "Cuadconnect",
    des: "Connect with your classmates to share and discuss problems from the class.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/ex.svg", "/mongo.svg", "/redux.svg", "/node.svg"],
    link: "Cuadconnect",
    
  },
  {
    id: 3,
    title: "Cuadocs",
    des: "Google Docs clone with authentication.",
    img: "/cuadocs.svg",
    iconLists: ["/re.svg", "/next.svg", "tail.svg"],
    link: "Cuadocs",
  },
  {
    id: 4,
    title: "My Money Buddy Financial Budgeting",
    des: "Financial Budgeting App that is made to create a system where people can write their expenses and have a system to be able to finance their money",
    img: "/mmb.svg",
    iconLists: ["/flask.svg", "/py.svg", "/html.svg", "/css.svg"],
    link: "MyMoneyBuddy",
    
  },
  {
    id: 5,
    title: "Short Video Language Bot",
    des: "Created a bot to create short-form minute long videos with questions that would challenge people's language learning skills, to be able to learn a new language",
    img: "/p4.svg",
    iconLists: ["/py.svg"],
    link: "ShortFormVideo",
    details: {
      title: "Short-Form Language Bot",
      subTitle: "Created a bot to create short form trivia videos for people on the internet to learn new languages",
      description: "Created a bot using Python libraries such as Pillow, Moviepy, and others to create a self edited video where words are translated, created into multiple choice A, B, C, and D, and then concatinated into a minute long video using artificial speech with Eleven Labs API so that people on social media platforms can find an interest in learning other languages. This project has taught me the best way to be able to problem solve is to always keep trying and that eventually problems will be resolved one way or another, we just have to continue trying and when working in programming there is almost always a solution or a program to fix a problem, it just needs to be created tailored to your own specific needs.",
      img: "/videobot.svg",
      links: [
        { title: "View Github", link: "https://github.com/Diegocuadros1/Social_media_video_bot" },
      ]
    }
  },
];




export const techSkills = [
   "ReactJs",
   "NextJS",
   "ExpressJS",
   "Javascript",
   "MongoDB",
   "Python",
   "C",
   "C++",
   "Rust",
   "Framer Motion",
   "TailwindCSS",
   "OpenCV",
   "CSS",
   "HTML",
   "Flask",
   "SQL",
   "Data Structures",
   "Rest APIs",
   "Git",
   "OpenAI", 
   "Numpy",
]

export const softSkills = [
   "Time Management",
   "Critical Thinking",
   "Problem Solving",
   "Patience",
   "Open Mindedness",
   "Teamwork",
   "Collaboration",
   "Adaptability",
   "Persistence",
   "Self Learning",
   "Motivated",
   "Organized",
   "Coordinated",
]