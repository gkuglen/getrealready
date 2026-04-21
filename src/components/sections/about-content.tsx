'use client';

import Image from 'next/image';

const LOGOS = [
  { src: '/images/about/logos/aarp.svg', alt: 'AARP' },
  { src: '/images/about/logos/amazon.svg', alt: 'Amazon' },
  { src: '/images/about/logos/apple.svg', alt: 'Apple' },
  { src: '/images/about/logos/autodesk.svg', alt: 'Autodesk' },
  { src: '/images/about/logos/bloomingdales.svg', alt: 'Bloomingdales' },
  { src: '/images/about/logos/blueshield.svg', alt: 'Blue Shield' },
  { src: '/images/about/logos/kaiser.svg', alt: 'Kaiser' },
  { src: '/images/about/logos/netgear.svg', alt: 'Netgear' },
  { src: '/images/about/logos/rsa.svg', alt: 'RSA' },
  { src: '/images/about/logos/sap.svg', alt: 'SAP' },
  { src: '/images/about/logos/sony.svg', alt: 'Sony' },
  { src: '/images/about/logos/tibco.svg', alt: 'TIBCO' },
  { src: '/images/about/logos/veritas.svg', alt: 'Veritas' },
  { src: '/images/about/logos/wellsfargo.svg', alt: 'Wells Fargo' },
];

export default function AboutContent() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Get Real Ready focuses on identifying those gaps and turning them into
          measurable improvements in rent and overall asset performance.
        </p>

        {/* Background */}
        <section className="mt-16">
          <h2 className="text-foreground text-2xl font-medium tracking-tight">
            Background
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            I purchased my first property in 2000 and have been an active
            landlord and investor ever since.
          </p>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            Alongside real estate, I&apos;ve spent my career in product design
            and user research, working across multiple industries including
            proptech. That experience shaped how I approach properties—breaking
            down what drives outcomes, comparing options, and focusing on
            decisions that produce measurable results.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-foreground text-xs font-semibold tracking-widest uppercase">
                On the Real Estate Side
              </h3>
              <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-tagline mt-0.5 shrink-0">—</span>
                  Owned and improved multifamily properties
                </li>
                <li className="flex gap-2">
                  <span className="text-tagline mt-0.5 shrink-0">—</span>
                  Completed targeted upgrades across thousands of square feet of
                  rental units
                </li>
                <li className="flex gap-2">
                  <span className="text-tagline mt-0.5 shrink-0">—</span>
                  Focused on practical improvements that support higher rents
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground text-xs font-semibold tracking-widest uppercase">
                On the Product &amp; Data Side
              </h3>
              <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-tagline mt-0.5 shrink-0">—</span>
                  Built systems to evaluate and compare rental units
                </li>
                <li className="flex gap-2">
                  <span className="text-tagline mt-0.5 shrink-0">—</span>
                  Applied structured scoring to unit quality and market
                  positioning
                </li>
                <li className="flex gap-2">
                  <span className="text-tagline mt-0.5 shrink-0">—</span>
                  Connected upgrade decisions directly to financial outcomes
                </li>
              </ul>
            </div>
          </div>

          {/* Company logos */}
          <h3 className="text-foreground mt-10 text-xs font-semibold tracking-widest uppercase">
            Previous Experience
          </h3>
          <div className="mt-4 grid grid-cols-5 gap-4">
            {LOGOS.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={135}
                  height={68}
                  className="h-auto max-h-[68px] w-auto max-w-[135px] opacity-50 grayscale"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing Work */}
        <section className="mt-16">
          <h2 className="text-foreground text-2xl font-medium tracking-tight">
            Ongoing Work
          </h2>
          <div className="mt-4 flex items-start gap-4">
            <Image
              src="/images/about/logos/CCIM.png"
              alt="CCIM"
              width={60}
              height={60}
              className="mt-0.5 shrink-0 object-contain"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Currently pursuing the CCIM (Certified Commercial Investment
              Member) designation to deepen expertise in commercial real estate
              investment and financial analysis.
            </p>
          </div>
        </section>

        {/* Perspective */}
        <section className="mt-16">
          <h2 className="text-foreground text-2xl font-medium tracking-tight">
            Perspective
          </h2>
          <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
            <li className="flex gap-2">
              <span className="text-tagline mt-0.5 shrink-0">—</span>
              Not every upgrade increases rent
            </li>
            <li className="flex gap-2">
              <span className="text-tagline mt-0.5 shrink-0">—</span>
              Over-improving can reduce returns
            </li>
            <li className="flex gap-2">
              <span className="text-tagline mt-0.5 shrink-0">—</span>
              Small details often drive meaningful differences in perceived
              quality
            </li>
            <li className="flex gap-2">
              <span className="text-tagline mt-0.5 shrink-0">—</span>
              Better decisions come from combining data with real-world
              execution
            </li>
          </ul>
        </section>

        {/* Selected Work */}
        <section className="mt-16">
          <h2 className="text-foreground text-2xl font-medium tracking-tight">
            Selected Work
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            If you want to see how this approach translates in practice, a few
            example projects are available below.
          </p>
          <a
            href="/results"
            className="text-tagline mt-3 inline-block text-sm font-medium hover:underline"
          >
            View Example Results →
          </a>
        </section>
      </div>
    </div>
  );
}
