import Image from 'next/image';

const MetafiHero = () => {
  return (
    <section
      id="grr-hero"
      className="bg-background border-b-border relative overflow-hidden border-b px-6 lg:px-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-[530px] md:h-[686px]">
          <Image
            src="/images/homepage/hero/Gradient.webp"
            alt="background gradient"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[size:16px_16px] [color:#F76F8E] opacity-20" />
          <div className="from-background to-background/0 absolute inset-x-0 top-0 h-40 bg-gradient-to-b" />
        </div>
      </div>

      <div className="relative container px-0 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 py-14 text-center sm:py-16 md:gap-8 md:pt-24 md:pb-20">
          <h1 className="text-foreground text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-6xl">
            See how your unit compares to higher-rent apartments nearby
          </h1>
          <p className="text-muted-foreground md:text-md mx-auto max-w-2xl text-base sm:text-lg">
            Compare your unit to the market, identify rent upside, and see
            what&apos;s driving higher rents—before investing in upgrades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetafiHero;
