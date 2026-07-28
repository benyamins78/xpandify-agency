"use client";

import { motion } from "framer-motion";
import Navigation from "../../../components/Navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../../../lib/projects";
import { use } from "react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  // 1. Find the current project based on the URL slug
  const projectIndex = projectsData.findIndex(p => p.slug === resolvedParams.slug);
  const project = projectsData[projectIndex];

  // 2. If the slug doesn't exist in our data file, show a 404 page
  if (!project) return notFound();

  // 3. Figure out the next project (loop back to the first if we are on the last one)
  const nextProjectIndex = (projectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  return (
    <div className="relative bg-xpandify-white min-h-screen selection:bg-xpandify-gold selection:text-xpandify-white">
      <Navigation/>
      
      {/* Project Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
             <Link className="text-[10px] uppercase tracking-[0.3em] text-xpandify-green/50 hover:text-xpandify-gold transition-colors flex items-center gap-2 mb-12" href="/">
               <span className="w-4 h-[1px] bg-current block" /> Back to Home
             </Link>
             
             <span className="text-[10px] uppercase tracking-[0.4em] text-xpandify-gold mb-4 block">
                {project.category}
             </span>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-xpandify-green tracking-tight leading-none mb-12">
               {project.title}
             </h1>
           </motion.div>

           {/* Hero Image - Will use standard HTML img until real Next.js Image component is needed */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1 }}
             className="w-full aspect-video bg-xpandify-green/5 flex items-center justify-center border border-xpandify-green/10 relative overflow-hidden"
           >
              {/* <img src={project.heroImage} alt={project.title} className="object-cover w-full h-full" /> */}
              <span className="text-xpandify-green/20 font-light tracking-widest uppercase relative z-10">
                Replace with &lt;img src=&quot;{project.heroImage}&quot; /&gt;
              </span>
           </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-xpandify-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
           
           <div className="w-full md:w-1/3 flex flex-col gap-8">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-xpandify-green/40 block mb-2">Role</span>
                <p className="text-sm font-medium text-xpandify-green">{project.role}</p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-xpandify-green/40 block mb-2">Tech Stack</span>
                <p className="text-sm font-medium text-xpandify-green">{project.techStack}</p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-xpandify-green/40 block mb-2">Year</span>
                <p className="text-sm font-medium text-xpandify-green">{project.year}</p>
              </div>
              {project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-xpandify-gold hover:text-xpandify-green transition-colors mt-8">
                  Visit Live Site <span className="w-6 h-[1px] bg-current block" />
                </a>
              )}
           </div>

           <div className="w-full md:w-2/3">
              <h3 className="text-2xl md:text-4xl font-light text-xpandify-green mb-8 leading-tight">
                {project.headline}
              </h3>
              <p className="text-base font-light text-xpandify-green/70 leading-relaxed mb-8">
                {project.paragraph1}
              </p>
              <p className="text-base font-light text-xpandify-green/70 leading-relaxed">
                {project.paragraph2}
              </p>
           </div>
        </div>
      </section>

      {/* Dynamic Next Project Teaser */}
      <section className="py-32 flex justify-center items-center bg-xpandify-white border-t border-xpandify-green/10">
         <Link className="group text-center" href={`/work/${nextProject.slug}`}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-xpandify-green/50 block mb-6">
              Next Project — No. {nextProject.id}
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-xpandify-green group-hover:text-xpandify-gold transition-colors duration-500">
               {nextProject.title}
            </h2>
         </Link>
      </section>
    </div>
  );
}