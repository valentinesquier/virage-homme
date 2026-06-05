import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide complet de l'andropause",
  description:
    "Tout ce que j'aurais voulu savoir à 42 ans sur l'andropause. Symptômes, diagnostic, gestion naturelle. Par Antoine, 45 ans.",
};

export default function GuidePage() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Guide andropause", href: "/guide" },
  ];

  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Guide complet de l'andropause — Virage Homme",
    description:
      "Guide sur l'andropause pour les hommes de 40-55 ans : symptômes, diagnostic, gestion naturelle, sport, alimentation, sommeil.",
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: `https://${siteConfig.domain}/a-propos`,
    },
    publisher: {
      "@type": "Organization",
      name: "esq.group",
    },
    about: {
      "@type": "MedicalCondition",
      name: "Andropause",
    },
    datePublished: "2026-06-01",
  };

  return (
    <>
      <JsonLd data={medicalWebPageJsonLd} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-6">
            <p className="font-sans text-sm uppercase tracking-widest text-virage-bleu mb-4">
              Guide complet
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-virage-anthracite leading-tight mb-6">
              Andropause : le guide complet pour les hommes 40-55 ans
            </h1>
            <p className="font-serif text-xl text-virage-anthracite/70 mb-6 leading-relaxed">
              Symptômes, diagnostic, options de traitement. Ce que la science dit, ce que
              j&apos;ai vécu, ce que j&apos;aurais aimé savoir à 42 ans.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 pb-20">
        <div className="prose-virage">
          <h2>Qu&apos;est-ce que l&apos;andropause ?</h2>
          <p>
            L&apos;andropause désigne la baisse progressive de la testostérone liée à
            l&apos;âge chez l&apos;homme. Contrairement à la ménopause féminine, ce n&apos;est
            pas un arrêt brutal mais un déclin lent : environ 1 % par an à partir de
            30-35 ans. À 50 ans, un homme peut avoir perdu 20 à 30 % de sa testostérone
            par rapport à ses 25 ans.
          </p>
          <p>
            Tout le monde ne ressent pas de symptômes. Mais pour environ 20 % des hommes
            de plus de 40 ans, cette baisse devient symptomatique : fatigue, prise de
            poids, baisse de libido, troubles de l&apos;humeur.
          </p>
          <p>
            <strong>Sources :</strong> HAS, Recommandations sur le déficit androgénique
            lié à l&apos;âge ; Inserm, Dossier Hormones.
          </p>

          <h2>Les 8 signes de l&apos;andropause</h2>
          <ul>
            <li><strong>Fatigue persistante</strong> : même après une bonne nuit.</li>
            <li><strong>Baisse de la libido</strong> : le signe le plus fréquent.</li>
            <li><strong>Prise de poids abdominale</strong> : le ventre qui gonfle malgré le sport.</li>
            <li><strong>Perte de masse musculaire</strong> : sarcopénie accélérée.</li>
            <li><strong>Troubles du sommeil</strong> : réveils nocturnes, insomnies.</li>
            <li><strong>Irritabilité, humeur changeante</strong> : le « mood » qui part en vrille.</li>
            <li><strong>Brouillard mental</strong> : difficultés de concentration.</li>
            <li><strong>Douleurs articulaires</strong> : raideurs matinales.</li>
          </ul>

          <h2>Quand consulter ?</h2>
          <p>
            Si vous avez plus de 40 ans et que vous reconnaissez au moins 3 de ces signes,
            parlez-en à votre médecin. Demandez un bilan hormonal : testostérone totale,
            testostérone biodisponible, SHBG. Le diagnostic se fait sur plusieurs dosages,
            pas sur un seul.
          </p>

          <h2>TRT ou pas TRT ?</h2>
          <p>
            Le traitement de remplacement de la testostérone est une option médicale valide
            pour les déficits avérés. Il a des bénéfices documentés mais aussi des risques
            (prostate, polyglobulie). C&apos;est une décision entre vous et votre urologue
            ou endocrinologue. Sur ce site, je raconte ce que j&apos;ai fait sans TRT.
            Ce n&apos;est pas une recommandation, c&apos;est un témoignage.
          </p>

          <h2>Les 4 leviers que j&apos;ai actionnés</h2>
          <ul>
            <li><strong>Sommeil</strong> : couvre-feu écrans 22h, chambre 18°C, magnésium glycinate.</li>
            <li><strong>Alimentation</strong> : 1,6 g protéines/kg, gras sains, zéro restriction.</li>
            <li><strong>Force</strong> : 3 séances musculation/semaine, charges lourdes, pas de cardio long.</li>
            <li><strong>Stress</strong> : cortisol maîtrisé via respiration, cold exposure, coupure digitale.</li>
          </ul>

          <div className="mt-12 p-6 bg-virage-anthracite/3 rounded-lg border border-virage-anthracite/10">
            <p className="font-sans text-sm text-meta-gray leading-relaxed">
              <strong>Avertissement :</strong> Ce guide est un témoignage personnel,
              fictionnalisé pour préserver l&apos;anonymat. Il ne remplace pas un avis
              médical. Pour toute décision concernant un traitement (notamment hormonal),
              consultez votre médecin traitant ou un urologue.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Protocole */}
      <section className="py-16 bg-virage-bleu/10">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold text-virage-anthracite mb-4">
            Prêt à passer à l&apos;action ?
          </h2>
          <p className="font-serif text-lg text-meta-gray mb-6">
            Mon Protocole 12 Semaines structure ces 4 piliers en un programme semaine
            par semaine. 27 €. 75 pages. Satisfait ou remboursé 14 jours.
          </p>
          <Link href="/protocole-12-semaines">
            <Button size="lg" className="font-sans">
              Voir le Protocole 12 Semaines <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
