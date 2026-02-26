import { motion } from "framer-motion";
import { Briefcase, Trophy } from "lucide-react";
import moment from "moment";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { experiences, achievements } from "@/service";

const getDuration = (start: string): string => {
  const startDate = moment(start);
  const now = moment();
  const years = now.diff(startDate, "years");
  const months = now.diff(startDate.clone().add(years, "years"), "months");
  let str = "";
  if (years > 0) str += `${years} yr${years > 1 ? "s" : ""}`;
  if (years > 0 && months > 0) str += " ";
  if (months > 0) str += `${months} mo${months > 1 ? "s" : ""}`;
  return str || "< 1 month";
}

const WorkExperienceSection = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 space-y-16 sm:space-y-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            Work
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            Here's a snapshot of my professional journey — the roles I've held,
            the impact I've made, and what I bring to the table.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
            <Briefcase className="size-5" />
            Work Experience
          </h2>

          <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
            <Timeline size="md">
              {experiences.map((exp, idx) => (
                <TimelineItem
                  key={`${exp.company}-${exp.title}`}
                  title={exp.title}
                  date={
                    exp.isCurrent
                      ? `${moment(exp.period).format("MMM YYYY")} — Present · ${getDuration(exp.period)}`
                      : exp.period
                  }
                  icon={
                    <Briefcase
                      className={`size-4 ${exp.isCurrent ? "text-foreground" : "text-muted-foreground"}`}
                    />
                  }
                  iconColor={exp.isCurrent ? "primary" : "muted"}
                  connectorColor="muted"
                  showConnector={idx !== experiences.length - 1}
                  description={
                    <div className="space-y-2.5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {exp.company}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.description.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="block w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      {exp.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.techStack.map((tech) => (
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
                  }
                />
              ))}
            </Timeline>
          </div>
        </motion.div>

        {achievements.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 pt-4"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
              <Trophy className="size-5" />
              Professional Achievements
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement.title}
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-lg border border-border bg-card p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 min-w-0">
                      <h3 className="text-base font-semibold text-card-foreground">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.metric && (
                      <span className="shrink-0 inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground whitespace-nowrap">
                        {achievement.metric}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default WorkExperienceSection;
