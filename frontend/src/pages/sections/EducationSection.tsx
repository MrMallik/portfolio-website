import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { education, certifications } from "@/service";

const EducationSection = () => {
  return (
    <section
      id="more"
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
          Education
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-card p-5 sm:p-6 space-y-8"
        >
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="size-4" />
              Education
            </h3>
            <Timeline size="sm">
              {education.map((ed, idx) => (
                <TimelineItem
                  key={`${ed.school}-${ed.degree}`}
                  title={ed.degree}
                  date={ed.period}
                  connectorColor="muted"
                  showConnector={idx !== education.length - 1}
                  description={
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">
                        {ed.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {ed.description}
                      </p>
                    </div>
                  }
                />
              ))}
            </Timeline>
          </div>

          {certifications.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="size-4" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start justify-between gap-3 rounded-md border border-border p-3 sm:p-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-foreground hover:underline underline-offset-4 shrink-0"
                      >
                        View
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
