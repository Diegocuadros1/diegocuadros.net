import Modal from "./Modal";
import { AutoScrollList } from "../ui/ScrollableItems";
import { softSkills, techSkills } from "@/data/index";
import { BiDirections } from "react-icons/bi";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export const TechStackModal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title="Tech Stack">
      <div className="flex justify-between">
        <AutoScrollList items={techSkills} />
        <div className="text-slate-300 space-y-2 md:col-start-3 w-1/2">
          <h1 className="text-xl font-semibold text-white">
            I have experience with lots of different technologies
          </h1>
          <p className="text-sm opacity-80 ">
            I’m a full-stack developer with depth across front-end, back-end,
            and modern web architectures. My work includes Python and
            LLMs—particularly low-resource language machine translation and
            building AI agents—alongside systems experience in networking
            (TCP/UDP socket programming, infrared camera communication). I’m
            also proficient in Linux environments and Bash scripting.{" "}
          </p>
          <ul className="text-sm list-disc list-inside opacity-80">
            <li>Next.js, React, Node.js</li>
            <li>Python, Flask, Numpy, OpenCV, OpenAI</li>
            <li>Linux, Bash, C, C++, Rust</li>
          </ul>
        </div>
        <AutoScrollList items={[...techSkills].reverse()} direction="up" />
      </div>
    </Modal>
  );
};

export const SoftSkillsModal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title="Soft Skills">
      <div className="flex justify-between">
        <AutoScrollList items={softSkills} />
        <div className="text-slate-300 space-y-2 md:col-start-3 w-1/2">
          <h1 className="text-xl font-semibold text-white">Different</h1>
          <p className="text-sm opacity-80 ">
            My blend of time management, organization, and coordination helps me
            plan work realistically, hit deadlines, and keep complex tasks
            moving without chaos. Critical thinking and problem solving let me
            break down ambiguous challenges, spot root causes, and choose smart,
            data-driven solutions. Patience and open-mindedness create
            psychological safety for teammates, helping me absorb feedback,
            consider diverse perspectives, and improve ideas. Teamwork and
            collaboration make me an effective communicator who lifts group
            performance, while adaptability and persistence keep me steady
            through shifting priorities and setbacks. Finally, my self-learning
            mindset and motivation ensure me keep up with new tools,
            continuously upskill, and proactively take ownership—exactly what
            employers need in fast-moving environments.
          </p>
        </div>
        <div className="hidden sm:block">
          <AutoScrollList items={[...softSkills].reverse()} direction="up" />
        </div>
      </div>
    </Modal>
  );
};

export const AboutMeModal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose} title="About Me">
      <div>Hello!</div>
    </Modal>
  );
};
