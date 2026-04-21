import MetafiCta from '@/components/sections/matafi-cta';
import AboutContent from '@/components/sections/about-content';
import AboutPhotoGrid from '@/components/sections/about-photo-grid';
import MetafiAboutHero from '@/components/sections/metafi-about-hero';

export default function AboutPage() {
  return (
    <>
      <MetafiAboutHero
        overline="About"
        title="Why I Built This"
        subtitle="I help rental property owners make better investment decisions—so every upgrade drives cash flow and long-term value."
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
