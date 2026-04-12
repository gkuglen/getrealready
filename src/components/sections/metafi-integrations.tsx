
const MetafiIntegrations = () => {
  return (
    <>
      {/* ── PROCESS: Owning Rental Property Shouldn't Feel Like a Second Job ── */}
      <section id="grr-process" className="bg-background px-6 lg:px-0">
        <div className="container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
          <h2 className="text-foreground mx-auto max-w-3xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            Owning Rental Property Shouldn't Feel Like a Second Job
          </h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base sm:text-lg">
            Managing a few units often turns into more work than expected.
          </p>
          <ul className="text-muted-foreground mx-auto mt-6 max-w-xl space-y-2 text-base sm:text-lg">
            <li>• Coordinating repairs</li>
            <li>• Figuring out what to upgrade (and what not to)</li>
            <li>• Dealing with unreliable contractors</li>
            <li>• Guessing whether improvements will actually increase rent</li>
          </ul>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base sm:text-lg">
            It adds up quickly. Most landlords don't need more complexity—they
            need a simple, reliable way to improve their units and move on.
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section id="grr-what-we-do" className="bg-background px-6 lg:px-0">
        <div className="container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
          <p className="text-tagline mb-4 text-sm leading-tight sm:text-base">
            What We Do
          </p>
          <h2 className="text-foreground mx-auto max-w-3xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            We focus on one thing: helping rental properties perform better.
          </h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base sm:text-lg">
            Most renovations improve appearance. We focus on what actually
            improves rent performance and long-term property value.
          </p>
          <ul className="text-muted-foreground mx-auto mt-6 max-w-xl space-y-2 text-base sm:text-lg">
            <li>• Market-based rent analysis</li>
            <li>• Standardized renovation packages</li>
            <li>• Reliable execution and maintenance</li>
          </ul>
        </div>
      </section>

      {/* ── WHY GET REAL READY + ROI ── */}
      <section id="grr-why" className="bg-background px-6 lg:px-0">
        <div className="container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
          <p className="text-tagline mb-4 text-sm leading-tight sm:text-base">
            Why Get Real Ready
          </p>
          <h2 className="text-foreground mx-auto max-w-3xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            Built for Landlords. Backed by Data.
          </h2>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-6 text-left sm:grid-cols-2">
            {[
              {
                title: 'Built for Landlords',
                desc: 'We understand rent comps, cap rates, and how upgrades translate into value.',
              },
              {
                title: 'Data-Backed Decisions',
                desc: 'Every recommendation is grounded in market data and real rent potential.',
              },
              {
                title: 'Standardized and Efficient',
                desc: 'Faster timelines, predictable costs, and consistent results across units.',
              },
              {
                title: 'One Partner',
                desc: 'From analysis to renovation to maintenance—we handle it end-to-end.',
              },
            ].map((item) => (
              <li key={item.title} className="bg-accent rounded-[16px] p-6">
                <h3 className="text-foreground text-lg font-medium">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-base">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          {/* Example ROI */}
          <div className="mx-auto mt-16 max-w-xl text-left">
            <p className="text-tagline mb-4 text-center text-sm leading-tight sm:text-base">
              Example ROI
            </p>
            <p className="text-muted-foreground mb-6 text-center text-base sm:text-lg">
              A simple way to think about it:
            </p>
            <ul className="bg-accent divide-border divide-y overflow-hidden rounded-[16px]">
              {[
                { label: 'Upgrade Cost', value: '$12,000' },
                { label: 'Rent Improvement', value: '$300/month' },
                { label: 'Annual Increase', value: '$3,600' },
                { label: 'Estimated Value Created (5% cap)', value: '$72,000' },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="text-muted-foreground text-base">
                    {row.label}
                  </span>
                  <span className="text-foreground text-base font-medium">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              The goal isn't just to improve the unit—it's to improve the asset.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetafiIntegrations;
