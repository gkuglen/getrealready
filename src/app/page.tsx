import MetafiCta from '@/components/sections/matafi-cta';
import MetafiFeatureBenefits from '@/components/sections/metafi-feature-benefits';
import MetafiFeaturesIncluded from '@/components/sections/metafi-features-included';
import MetafiAllIntegrations from '@/components/sections/metafi-all-integrations';
import MetafiHero from '@/components/sections/metafi-hero';
import MetafiIntegrations from '@/components/sections/metafi-integrations';
import MetafiJobOpenings from '@/components/sections/metafi-job-openings';
import MetafiTestimonials from '@/components/sections/metafi-testimonials';

export default function Home() {
  return (
    <>
      <MetafiHero />
      <MetafiIntegrations />
      <MetafiTestimonials />
      <MetafiFeatureBenefits />
      <MetafiFeaturesIncluded />
      <MetafiAllIntegrations />
      <MetafiJobOpenings />
      <MetafiCta />
    </>
  );
}
