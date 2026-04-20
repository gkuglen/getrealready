'use client';

import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function MetafiTeam({
  overline = 'Our Team',
  title = 'It’s All About The People',
  subtitle = 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris. Auctor vitae neque urna nam nunc pellentesque.',
  members = DEFAULT_MEMBERS,
}: {
  overline?: string;
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}) {
  return (
    <section id="metafi-team" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="text-center">
          <p className="text-tagline text-sm sm:text-base">{overline}</p>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <li key={m.name}>
              <article className="bg-card border-border-light shadow-light rounded-[12px] border p-4 pb-5">
                <div className="relative h-[250px] w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={m.imageSrc}
                    alt={m.imageAlt ?? m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>

                {/* Meta */}
                <div className="mt-3 sm:mt-4">
                  <h3 className="text-foreground text-xl font-medium">
                    {m.name}
                  </h3>
                  <p className="text-muted-foreground text-md mt-2">{m.role}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    name: 'Gray Kuglen',
    role: 'Working the job',
    imageSrc: '/images/team/gray-1.webp',
  },
  {
    name: 'Gray Kuglen',
    role: 'Cabinet installation',
    imageSrc: '/images/team/gray-2.webp',
  },
  {
    name: 'Gray Kuglen',
    role: 'Framing work',
    imageSrc: '/images/team/gray-3.webp',
  },
  {
    name: 'Gray Kuglen',
    role: 'Unit walkthroughs',
    imageSrc: '/images/team/gray-4.webp',
  },
  {
    name: 'Gray Kuglen',
    role: 'On site',
    imageSrc: '/images/team/gray-5.webp',
  },
  {
    name: 'Gray Kuglen',
    role: 'Exterior repairs',
    imageSrc: '/images/team/gray-6.webp',
  },
];
