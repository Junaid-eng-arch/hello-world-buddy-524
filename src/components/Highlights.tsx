import { motion } from "framer-motion";
import { HeartPulse, Users, BadgeCheck, TreePine } from "lucide-react";

const stats = [
  { icon: HeartPulse, value: "58+", label: "Years of Excellence" },
  { icon: Users, value: "7000+", label: "Students Trained" },
  { icon: BadgeCheck, value: "100%", label: "Placement Support" },
  { icon: TreePine, value: "5 Acre", label: "Green Campus" },
];

const Highlights = () => {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="container mx-auto">
        <div className="bg-card border border-border shadow-xl rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex flex-col items-center justify-center py-8 px-6 text-center
                  ${i !== stats.length - 1 ? "border-r border-border" : ""}
                  ${i < 2 ? "border-b md:border-b-0 border-border" : ""}
                `}
              >
                <stat.icon className="text-secondary mb-3" size={28} strokeWidth={1.5} />
                <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-2 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
