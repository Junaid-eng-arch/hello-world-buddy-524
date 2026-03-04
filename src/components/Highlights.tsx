import { motion } from "framer-motion";
import { HeartPulse, Users, BadgeCheck, TreePine } from "lucide-react";

const stats = [
  { icon: HeartPulse, value: "58+", label: "Years of Excellence", desc: "Trusted healthcare education since 1966" },
  { icon: Users, value: "7000+", label: "Students Trained", desc: "Graduates serving across Kerala & beyond" },
  { icon: BadgeCheck, value: "100%", label: "Placement Support", desc: "Every student guided to their career" },
  { icon: TreePine, value: "5 Acre", label: "Green Campus", desc: "Spacious, serene learning environment" },
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
              className="bg-card rounded-2xl shadow-md p-6 text-center border border-border group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <stat.icon className="text-secondary" size={30} strokeWidth={1.5} />
              </div>

              {/* Value */}
              <p className="font-heading text-3xl font-bold text-primary leading-none">{stat.value}</p>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-secondary/40 mx-auto my-2 rounded-full" />

              {/* Label */}
              <p className="text-primary font-semibold text-sm tracking-wide">{stat.label}</p>

              {/* Description */}
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
