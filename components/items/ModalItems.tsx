import Modal from "./Modal";
import { softSkills, techSkills } from "@/data/index";
import { InfiniteMovingCardsVertical } from "../ui/InfiniteMovingCardsVertical";
import Image from "next/image";
import Link from "next/link";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  info: {
    title: string;
    subtitle: string;
    image_url: string;
    url: string;
    description: string;
  };
};

export const TechStackModal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title="Tech Stack">
      <h1 className="block sm:hidden text-lg sm:text-xl font-semibold text-white justify-center text-center">
        I have experience with lots of different technologies
      </h1>
      <div className="flex justify-between">
        <InfiniteMovingCardsVertical
          direction="down"
          speed="normal"
          items={techSkills}
          className="sm:block hidden"
        />
        <div className="text-slate-300 space-y-2 md:col-start-3 w-full p-3 sm:p-10">
          <h1 className="sm:block hidden text-lg sm:text-xl font-semibold text-white">
            I have experience with lots of different technologies
          </h1>
          <p className="text-xs sm:text-sm opacity-80 ">
            I’m a full-stack developer with depth across front end, back end,
            and modern web architectures, and I pair that with hands-on systems
            work. On the AI side, I research low-resource language machine
            translation building LLM-assisted, rule-based pipelines that use
            retrieval-augmented generation, dictionaries, and grammar analysis
            with vector databases to boost accuracy work I’ve presented for
            endangered-language revitalization and validated with ablation
            studies showing large accuracy gains. I also build applied AI
            agents: a multi-threaded research assistant that orchestrates async
            scraping and GPT pipelines to produce decision-ready company briefs
            at scale, cutting research time by ~90%+ for sales teams. On the
            systems side, I’ve engineered Linux-first projects involving TCP/UDP
            sockets and device I/O, including a Raspberry Pi infrared-camera
            streaming stack that serializes and transmits thermal frames for
            real-time visualization. In web development, I design and ship
            responsive Next.js/React apps with Node/Mongo/MySQL back ends, CI/CD
            on Vercel/Heroku, and product sensibilities that drive measurable
            outcomes (e.g., a client site that increased inbound service
            inquiries by ~25%). My toolbelt spans Python, TypeScript/JavaScript,
            C/C++, Rust, OpenCV, Bash, and Git from research and client
            projects. I enjoy moving between research prototypes and production
            code, turning messy real-world constraints into clean, scalable
            software.{" "}
          </p>
          <ul className="text-xs sm:text-sm list-disc list-inside opacity-80">
            <li>Next.js, React, Node.js</li>
            <li>Python, Flask, Numpy, OpenCV, OpenAI</li>
            <li>Linux, Bash, C, C++, Rust</li>
          </ul>
        </div>
        <InfiniteMovingCardsVertical
          items={[...techSkills].reverse()}
          direction="up"
          speed="slow"
          className="w-20 sm:w-40"
        />
      </div>
    </Modal>
  );
};

export const SoftSkillsModal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title="Tech Stack">
      <h1 className="block sm:hidden text-lg sm:text-xl font-semibold text-white justify-center text-center">
        I have experience with lots of different technologies
      </h1>
      <div className="flex justify-between">
        <InfiniteMovingCardsVertical
          direction="down"
          speed="normal"
          items={softSkills}
          className="sm:block hidden"
        />
        <div className="text-slate-300 space-y-2 md:col-start-3 w-full p-3 sm:p-10">
          <h1 className="sm:block hidden text-lg sm:text-xl font-semibold text-white">
            All about my soft skills
          </h1>
          <p className="text-xs sm:text-sm opacity-80 ">
            I’m a systems-minded collaborator who keeps complex work moving
            without chaos. Strong time management and coordination come from
            wearing multiple hats at once research, development, and leadership
            so I plan realistically, hit deadlines, and communicate scope
            clearly. As SHPE chapter president, I’ve owned budgeting, event
            planning, and industry outreach, which sharpened my organization,
            stakeholder management, and conflict-resolution skills while
            creating career-ready programming for peers. <br />
            <br />
            My decision-making style is analytical and calm under pressure. I
            break ambiguous problems into testable hypotheses, look for root
            causes, and choose data-driven solutions. In AI/ML research, that
            looks like building and evaluating low-resource translation
            pipelines (RAG + dictionaries + grammar analysis) and running
            ablation studies to quantify what actually works then presenting
            results clearly to non-experts. Patience and open-mindedness are how
            I create psychological safety on teams: I invite feedback, integrate
            diverse perspectives, and keep iterations focused on outcomes rather
            than ego. <br /> <br /> I value ownership and follow-through. As a
            freelance web developer, I scope requirements, set timelines, and
            ship end-to-end. That discipline led to launches like a full-stack
            client site that increased inbound service inquiries by ~25% through
            thoughtful UX, clear copy, and reliable CI/CD. I’ve also built
            internal tools that save teammates time, like a multi-threaded
            research agent that automates company briefs and cuts manual
            research by 90%+, freeing sales to focus on relationships.
            <br />
            <br /> Adaptability and persistence came early: I’ve worked in a
            mail distribution office where reliability, customer service, and
            process thinking are non-negotiable, and I bring that same steady
            execution to engineering projects. Pair that with Linux fluency and
            hands-on systems work (e.g., TCP/UDP sockets, device I/O), and you
            get a teammate who can move between product conversations and
            low-level debugging without losing momentum.
            <br />
            <br /> Bottom line: I’m motivated, self-directed, and continuously
            learning comfortable owning outcomes, coordinating people and
            budgets, and improving the plan as new data arrives. That blend of
            leadership, communication, and technical depth helps teams stay
            aligned, ship faster, and deliver real results.{" "}
          </p>
        </div>
        <InfiniteMovingCardsVertical
          items={[...softSkills].reverse()}
          direction="up"
          speed="slow"
          className="w-20 sm:w-40"
        />
      </div>
    </Modal>
  );
};

export const ProjectsModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  info: { title, subtitle, image_url, url, description },
}: ProjectModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <h1 className="block sm:hidden text-lg sm:text-xl font-semibold text-white justify-center text-center">
        {subtitle}
      </h1>
      <div className="flex items-center flex-col space-y-5">
        <h1 className="sm:block hidden text-lg sm:text-xl font-semibold text-white">
          {subtitle}
        </h1>
        <p className="text-xs sm:text-sm sm:px-20 opacity-80 ">{description}</p>
        <Image src={image_url} alt={title} width={600} height={600} />
        <Link
          href={url}
          target="_blank"
          className="hover:font-bold text-purple"
        >
          View Project
        </Link>
      </div>
    </Modal>
  );
};
