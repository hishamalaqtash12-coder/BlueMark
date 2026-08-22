import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DeviceShowcase from "@/components/DeviceShowcase";
import ResultsPreview from "@/components/ResultsPreview";
import TeamAuthority from "@/components/TeamAuthority";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home.finalCta');

  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="showcase">
        <DeviceShowcase />
      </div>
      <div id="results">
        <ResultsPreview />
      </div>
      <div id="team">
        <TeamAuthority />
      </div>
      <div id="blogs">
        <BlogPreview />
      </div>
      <div id="book">
        <FinalCTA 
          headline={
            <>
              {t('headlinePart1')} {t('headlinePart2') && <><br />{t('headlinePart2')} </>}
              <span className="text-blue">{t('headlineHighlight')}</span>
            </>
          } 
          subheadline={t('badge')}
          buttonText={t('button')}
        />
      </div>
    </>
  );
}
