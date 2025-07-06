"use client";

import CountUp from "react-countup";

const stats = [
  { id: 1, title: "Projects Completed", value: 10 },
  { id: 2, title: "Years of Experience", value: 1 },
  { id: 3, title: "Code Commits", value: 500 },
  { id: 4, title: "Technologies Mastered", value: 8 },
];

const Stats = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((stat) => (
            <div key={stat.id} className="flex-1 flex gap-4 items-center justify-center">
              <h3 className="text-4xl font-extrabold text-[#ffc917]">
                <CountUp end={stat.value} duration={3} delay={2} />
              </h3>
              <p className={`${stat.title.length > 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/80`}>
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;