import GradientBar from "../components/GradientBar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    SiVisualstudiocode,
    SiDocker,
    SiGit,
    SiGo,
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiYarn,
    SiSwift,
    SiJavascript,
    SiPython,
    SiPrisma,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Avyansh Ralph  👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
            I'm a 14 year old UI/UX designer. I have a passion for designing and developing user interfaces and experiences. I play Fortnite in my free time :)
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I love to work on new projects & make next gen UI/UX designs. I also love to learn different things but since that Online System has vanished, I'm not working on other projects now. #SedLyfe
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
               I use vast amount of tech softwares/bundles which help me in my day-to-day life. They are actually pretty helpful.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiVisualstudiocode} name="VSCode" />
                <TechItem icon={SiReact} name="React.js" />
                <TechItem icon={SiNodeJs} name="Node.js" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiYarn} name="Yarn" />
                <TechItem icon={SiNextJs} name="Next.js" />
                <TechItem icon={SiTailwindCSS} name="TailwindCSS" />
                <TechItem icon={SiStyledComponents} name="styled-components" />
                <TechItem icon={SiPrisma} name="Prisma" />
                <TechItem icon={SiRedis} name="Redis" />
                <TechItem icon={SiPostgresql} name="Postgres" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiDocker} name="Docker" />
                <TechItem icon={SiGo} name="Golang" />
                <TechItem icon={SiSwift} name="Swift" />
                <TechItem icon={SiPython} name="Python" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    href="https://github.com/Avyansh0001"
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
                earnt me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on
                GitHub, and <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below
                are some of my most popular repositories.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/Avyansh0001`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/Avyansh0001/repos?type=owner&per_page=100`).then(res =>
        res.json()
    );

    const topRepos = repos
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
