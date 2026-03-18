import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Uczniów z sukcesem" },
  { value: "100%", label: "Skuteczność na egzaminach CEA" },
  { value: "10–20", label: "Wiek uczniów" },
];

export default function StatsBanner() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-widest text-gray-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
