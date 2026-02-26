import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/service";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-10 sm:mb-14"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col h-full rounded-lg border border-border bg-card p-5 sm:p-6 transition-colors hover:border-foreground/20 no-underline"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  {project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ) : (
                <div className="flex flex-col h-full rounded-lg border border-border bg-card p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  {project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            Projects coming soon 🚀
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
