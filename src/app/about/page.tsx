import MetafiCta from '@/components/sections/matafi-cta';
import AboutContent from '@/components/sections/about-content';
import AboutPhotoGrid from '@/components/sections/about-photo-grid';
import MetafiAboutHero from '@/components/sections/metafi-about-hero';

export default function AboutPage() {
  return (
    <>
      <MetafiAboutHero
        overline="About"
        title="Why This Exists"
        subtitle="Many rental units leave rent on the table—not because of location, but because of how they compare to other units in the same market."
        showCta={false}
        showImage={false}
      />
      <AboutPhotoGrid />
      <AboutContent />
      <MetafiCta
        title="Let's Take a Look"
        subtitle="If you're evaluating your property and want a clear view of where it stands and what could be improved, we can take a look."
      />
    </>
  );
}
