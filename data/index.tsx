export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
];
export const projects = [
  {
    id: 0,
    title: "Crystal Clear Solutions",
    des: "Window Cleaning company based in Long Beach California.",
    img: "/ccs.svg",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "framer.svg"],
    link: "crystalclearsolutions.co",
  },
  {
    id: 1,
    title: "Cuadconnect",
    des: "Connect with your classmates to share and discuss problems from the class.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/ex.svg", "/mongo.svg", "/redux.svg", "/node.svg"],
    link: "Cuadconnect",
  },
  {
    id: 2,
    title: "Cuadocs",
    des: "Google Docs clone with authentication.",
    img: "/cuadocs.svg",
    iconLists: ["/re.svg", "/next.svg", "tail.svg"],
    link: "Cuadocs",
  },
  {
    id: 3,
    title: "Spot Share",
    des: "A way to monetize your parking spot and save yourself from being late",
    img: "/spot_share.png",
    iconLists: ["/next.svg", "/re.svg", "/html.svg", "/css.svg"],
    link: "MyMoneyBuddy",
  },
];

interface projectDescription {
  title: string;
  subtitle: string;
  image_url: string;
  url: string;
  description: React.ReactNode;
}

export const projectDescriptions: projectDescription[] = [
  {
    title: "Crystal Clear Solutions",
    subtitle: "Window Cleaning Company Based in Long Beach California",
    image_url: "/crystalclear.svg",
    url: "crystalclearsolutions.co",
    description: (
      <>
        Crystal Clear Solutions is a collaborative business initiative I
        co-founded with a partner, aimed at providing innovative web development
        solutions. As my expertise in Web Development has expanded, so has the
        website. This project has been instrumental in advancing my knowledge of
        deployment, domain management, and the creation of business-oriented
        websites.
        <br />
        <br />
        The website initially launched using React and Redux, but has since
        evolved into a Next.js application, significantly improving loading
        times and image optimization. Leveraging Framer Motion, I introduced
        smooth, fluid animations, further enhancing the user experience. I also
        transitioned to TailwindCSS for styling, resulting in a more efficient
        and modern design workflow.
        <br />
        <br />
        As the business grows, I continue to refine my skills and contribute to
        the development of dynamic, high-performance web applications.
      </>
    ),
  },
  {
    title: "Cuadconnect",
    subtitle: "A Social Media For Computer Science Students",
    image_url: "/cuadconnect.svg",
    url: "https://fathomless-journey-67027-44ee55a2e001.herokuapp.com/",
    description: (
      <>
        his web application was designed to support Computer Science students by
        fostering a sense of community and providing a platform for
        collaboration. It is a social networking site tailored specifically to
        help students connect with peers who may face similar academic
        challenges. The platform serves as a gateway to form friendships and
        share strategies for success in programming courses, especially as
        academic pressures mount.
        <br />
        <br />
        Developing this platform enhanced my expertise in the MERN stack,
        utilizing MongoDB for database management, React for front-end
        development, Express for backend services, and Node.js to tie it all
        together. I also deepened my understanding of RESTful APIs and how to
        integrate them into dynamic web applications. Throughout this process, I
        refined my problem-solving skills, tackling bugs and deployment
        challenges as I built my first social media platform.
      </>
    ),
  },
  {
    title: "Cuadocs",
    subtitle: "Google Docs Clone",
    image_url: "/cuadocspics.png",
    url: "https://cuadocs.vercel.app/",
    description: (
      <>
        Cuadocs is a project designed to emulate the collaborative features of
        Google Docs while providing a user-friendly interface. The primary focus
        was to deepen my understanding of real-time collaboration between users
        on web platforms. Though a challenging area, leveraging open-source
        tools like Liveblocks and Clerk accelerated my grasp of live interaction
        and streamlined the implementation of user authentication. <br />
        <br /> Through this project, I enhanced my proficiency in building
        full-stack applications using Next.js. It also significantly expanded my
        skill set, enabling me to create robust web solutions and equipping me
        with the knowledge to build personal applications and websites.
      </>
    ),
  },
  {
    title: "Spot Share",
    subtitle:
      "A way to monetize your parking spot and save yourself from being late",
    image_url: "/spot_share.svg",
    url: "https://youtu.be/JYMhRTB2yJo",
    description: (
      <>
        SpotShare is a peer-to-peer parking marketplace built for the LMU
        Hackathon (4th place). It uses the Google Maps API to let drivers who
        are leaving a spot list it in real time, and nearby drivers can claim
        the handoff for a small fee—so both sides benefit. I built the app with
        Next.js and TailwindCSS on the front end and integrated Stripe for
        secure payments and receipts. Core flows include live map discovery,
        spot listing/claiming, and a timed handoff workflow to prevent
        double-booking. Working in a small team, I led the Maps and payments
        integration, coordinated component design, and shipped a clean, UI that
        makes finding—and monetizing—hard-to-get parking fast and reliable.
      </>
    ),
  },
];

export const techSkills = [
  { text: "ReactJs" },
  { text: "NextJS" },
  { text: "ExpressJS" },
  { text: "Javascript" },
  { text: "MongoDB" },
  { text: "Python" },
  { text: "C" },
  { text: "C++" },
  { text: "Rust" },
  { text: "Framer Motion" },
  { text: "TailwindCSS" },
  { text: "OpenCV" },
  { text: "CSS" },
  { text: "HTML" },
  { text: "Flask" },
  { text: "SQL" },
  { text: "Data Structures" },
  { text: "Rest APIs" },
  { text: "Git" },
  { text: "OpenAI" },
  { text: "Numpy" },
];

export const softSkills = [
  { text: "Critical Thinking" },
  { text: "Time Management" },
  { text: "Problem Solving" },
  { text: "Patience" },
  { text: "Open Mindedness" },
  { text: "Teamwork" },
  { text: "Collaboration" },
  { text: "Adaptability" },
  { text: "Persistence" },
  { text: "Motivated" },
  { text: "Organized" },
  { text: "Coordinated" },
  { text: "Leadership" },
  { text: "Organization" },
  { text: "coordination" },
  { text: "Project Management" },
  { text: "Communication" },
  { text: "Leadership" },
  { text: "Analytical Thinking" },
  { text: "Proactive Ownership" },
  { text: "Self-Directed Learning" },
  { text: "Conflict Resolution" },
  { text: "Prioritization" },
];
