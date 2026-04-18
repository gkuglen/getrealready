'use client';

const MetafiTestimonials = () => {
  return (
    <section id="grr-simplify" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline font-caveat mb-4 text-center text-xl leading-tight font-medium sm:text-2xl">
          How it Starts
        </p>
        <h2 className="text-foreground mx-auto max-w-4xl text-center text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-6xl">
          Start With Clarity
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base font-normal sm:text-lg">
          Before making upgrades or spending money, we help you understand how
          your unit performs—and what&apos;s actually driving higher rents in
          your market.
        </p>

        <ul className="mx-auto mt-8 max-w-xl space-y-3 text-center">
          {[
            'Where your unit stands compared to similar apartments nearby',
            'What higher-performing units are doing differently',
            'How much rent upside may be achievable',
            "Which upgrades are worth it—and which aren't",
          ].map((item) => (
            <li
              key={item}
              className="bg-card text-foreground rounded-[16px] px-6 py-4 text-base font-normal"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mx-auto mt-10 max-w-2xl text-center text-base sm:text-lg">
          Then, if it makes sense, we can help you execute.
        </p>
      </div>
    </section>
  );
};

export default MetafiTestimonials;
