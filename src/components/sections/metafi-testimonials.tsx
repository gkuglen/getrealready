'use client';

const MetafiTestimonials = () => {
  return (
    <section id="grr-simplify" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm leading-tight font-normal sm:text-base">
          Our Approach
        </p>
        <h2 className="text-foreground mx-auto max-w-4xl text-center text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
          We Simplify the Process
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base font-normal sm:text-lg">
          We handle the evaluation, upgrades, and ongoing maintenance—so you don't have to piece it together yourself.
        </p>

        <p className="text-foreground mx-auto mt-10 max-w-2xl text-center text-base font-medium sm:text-lg">
          You get:
        </p>
        <ul className="mx-auto mt-4 max-w-xl space-y-3 text-center">
          {[
            'Clear recommendations based on your market',
            'Reliable execution without chasing contractors',
            'Upgrades tied to real rent outcomes',
          ].map((item) => (
            <li key={item} className="bg-card text-foreground rounded-[16px] px-6 py-4 text-base font-normal">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mx-auto mt-10 max-w-2xl text-center text-base sm:text-lg">
          Less guesswork. Less back-and-forth. Better outcomes.
        </p>
      </div>
    </section>
  );
};

export default MetafiTestimonials;
