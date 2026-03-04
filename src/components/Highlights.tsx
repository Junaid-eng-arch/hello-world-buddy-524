import { motion } from "framer-motion";
import { Award, Users, GraduationCap, Briefcase } from "lucide-react";

const stats = [
  { icon: Award, value: "58+", label: "Years Legacy" },
  { icon: Users, value: "7000+", label: "Students Trained" },
  { icon: GraduationCap, value: "100%", label: "Placement Support" },
  { icon: Briefcase, value: "5", label: "Acre Campus" },
];

const Highlights = () => {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl shadow-xl p-6 text-center border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                <stat.icon className="text-secondary" size={28} />
              </div>
              <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
              <div className="w-8 h-0.5 bg-secondary/40 mx-auto my-2 rounded-full" />
              <p className="text-muted-foreground text-sm mt-1 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
