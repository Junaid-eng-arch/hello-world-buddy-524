import { motion } from "framer-motion";
import { Building2, UtensilsCrossed, FlaskConical, Hotel, Stethoscope, Users } from "lucide-react";
import campusView from "@/assets/campus-view.jpg";

const facilities = [
  { icon: Building2, title: "5-Acre Campus", description: "Spacious green campus with modern infrastructure" },
  { icon: Hotel, title: "Hostel Facility", description: "Comfortable accommodation for outstation students" },
  { icon: UtensilsCrossed, title: "15-Hour Canteen", description: "Hygienic food services throughout the day" },
  { icon: Stethoscope, title: "Hospital Association", description: "Direct tie-ups with multi-speciality hospitals" },
  { icon: FlaskConical, title: "Live Lab Study", description: "State-of-the-art laboratories for practical training" },
  { icon: Users, title: "Personality Development", description: "Soft skills, communication, and career training" },
];

const CampusSection = () => {
  return (
    <section id="campus" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Campus & Facilities</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Everything You Need to <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our campus provides a complete ecosystem for learning, living, and growing as a healthcare professional.
          </p>
        </motion.div>

        {/* Campus Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg mb-12"
        >
          <img
            src={campusView}
            alt="Little Flower Institute Campus, Aluva"
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <facility.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{facility.title}</h3>
                <p className="text-muted-foreground text-sm">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
