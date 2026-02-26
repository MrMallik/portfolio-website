import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, GraduationCap, MapPin, type LucideIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, socialLinks, quickStats } from "@/service";
import profileImg from "@/assets/profile.jpg";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="size-5" />,
  linkedin: <FaLinkedin className="size-5" />,
};

const statIconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "building-2": Building2,
  calendar: Calendar,
  "graduation-cap": GraduationCap,
  "map-pin": MapPin,
};

const useTypewriter = (words: string[], speed = 80, pause = 2000) => {
  const [display, setDisplay] = useState("");
  const state = useRef({
    wordIdx: 0,
    charIdx: 0,
    deleting: false,
    lastTick: 0,
    pauseUntil: 0,
  });

  useEffect(() => {
    let raf: number;

    const tick = (now: number) => {
      const s = state.current;


      if (now < s.pauseUntil) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const delay = s.deleting ? speed / 2 : speed;
      if (now - s.lastTick < delay) {
        raf = requestAnimationFrame(tick);
        return;
      }

      s.lastTick = now;
      const word = words[s.wordIdx];

      if (!s.deleting) {
        s.charIdx++;
        setDisplay(word.slice(0, s.charIdx));
        if (s.charIdx === word.length) {
          s.deleting = true;
          s.pauseUntil = now + pause;
        }
      } else {
        s.charIdx--;
        setDisplay(word.slice(0, s.charIdx));
        if (s.charIdx === 0) {
          s.deleting = false;
          s.wordIdx = (s.wordIdx + 1) % words.length;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [words, speed, pause]);

  return display;
}

const LandingPage = () => {
  const tagline = useTypewriter(profile.taglines);

  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="flex flex-col items-center text-center gap-5">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={profileImg}
            alt={profile.name}
            className="size-28 sm:size-36 rounded-full object-cover ring-2 ring-border shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground h-7"
        >
          {tagline}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-10 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label={link.name}
            >
              {socialIconMap[link.icon] || link.name}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-xs sm:text-sm text-muted-foreground"
        >
          {quickStats.map((s, i) => {
            const Icon = s.icon ? statIconMap[s.icon] : undefined;
            return (
              <span key={s.name} className="inline-flex items-center gap-1">
                {i > 0 && <span className="mx-2 text-border">|</span>}
                {Icon && <Icon className="size-3 mr-0.5" />}
                {s.value && <span className="font-medium text-foreground">{s.value}</span>}
                {s.name}
              </span>
            );
          })}
        </motion.p>
      </div>
    </section>
  );
};

export default LandingPage;
