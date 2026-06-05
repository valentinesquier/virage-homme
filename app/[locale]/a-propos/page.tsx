import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { JsonLd } from "@/components/shared/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: `Rencontrez ${siteConfig.author}, le fondateur de Virage Homme. Architecte de 45 ans, il partage ce qu'il a appris sur l'andropause.`,
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
  ];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    description: siteConfig.authorBio,
    url: `https://${siteConfig.domain}/a-propos`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-virage-anthracite mt-6 mb-8">
          À propos de {siteConfig.author}
        </h1>

        <div className="float-right ml-8 mb-6 w-48 h-64 bg-virage-anthracite/5 rounded-lg border border-virage-anthracite/10 hidden sm:flex items-center justify-center">
          <p className="font-serif text-virage-anthracite/30 text-sm">Photo Antoine</p>
        </div>

        <div className="prose-virage">
          <p>
            Je m&apos;appelle Antoine. J&apos;ai 45 ans. Architecte indépendant depuis huit
            ans dans une grande métropole française. Marié, deux enfants — 13 et 10 ans.
            Sportif depuis toujours : course à pied, vélo, un peu de musculation.
          </p>

          <h2>Le mur des 42 ans</h2>

          <p>
            Jusqu&apos;à 40 ans, tout roulait. Je dormais 7 heures sans me réveiller. Je
            pesais 78 kg pour 1,82 m. Je courais trois fois par semaine. Ma libido était
            un non-sujet. Et puis vers 42 ans, le sol s&apos;est dérobé.
          </p>

          <p>
            D&apos;abord le sommeil. Réveils à 3h du matin, impossible de me rendormir.
            Puis le poids : 6 kilos en douze mois, tous sur le ventre, sans rien changer
            à mon assiette ni à mon activité. Puis l&apos;énergie — cette fatigue de fond
            qui ne partait jamais, même après un week-end entier à dormir. La libido qui
            baisse. L&apos;irritabilité. Le cerveau dans le brouillard certains matins.
          </p>

          <p>
            Mon généraliste m&apos;a dit : « Vous avez 43 ans, c&apos;est normal. Faites
            du sport, mangez équilibré. » Merci. J&apos;ai payé 25 € pour ça.
          </p>

          <h2>Le mot que personne n&apos;avait prononcé</h2>

          <p>
            J&apos;ai fini par consulter un urologue, sur l&apos;insistance de ma femme
            qui me trouvait changé. Il m&apos;a écouté pendant vingt minutes — ce que
            personne n&apos;avait fait. Il a prononcé le mot : <strong>andropause</strong>.
            La baisse progressive de la testostérone liée à l&apos;âge. Il m&apos;a parlé
            du TRT — traitement de remplacement de la testostérone — avec ses bénéfices
            et ses risques. Il m&apos;a dit : « Vous avez plusieurs leviers. Le TRT en est
            un. Le sommeil, l&apos;alimentation, le sport et la gestion du stress en sont
            d&apos;autres. Vous décidez. »
          </p>

          <p>
            J&apos;ai choisi de ne pas prendre d&apos;hormones. Pas par principe — par
            envie de comprendre ce que mon corps pouvait faire par lui-même avant
            d&apos;envisager une intervention médicale.
          </p>

          <h2>Ce que j&apos;ai construit</h2>

          <p>
            Pendant 24 mois, j&apos;ai lu. PubMed, les recommandations de l&apos;HAS,
            les études sur le sommeil, la nutrition, la musculation après 40 ans. J&apos;ai
            testé des choses. Certaines ont marché. D&apos;autres pas. J&apos;ai construit
            mon protocole en quatre piliers : sommeil, alimentation, force, gestion du
            stress.
          </p>

          <p>
            Aujourd&apos;hui, à 45 ans, je dors 7 heures. Je pèse 80 kg mais ma
            composition corporelle n&apos;a rien à voir avec celle d&apos;il y a trois
            ans. Je soulève plus lourd qu&apos;à 30 ans. Ma libido est revenue. Ma
            concentration aussi. Je ne suis pas « guéri » — l&apos;andropause n&apos;est
            pas une maladie. Mais j&apos;ai repris le contrôle.
          </p>

          <h2>Pourquoi Virage Homme</h2>

          <p>
            Virage Homme est né de cette colère et de ce protocole. Pas une marque de
            coaching. Pas une marque de compléments. Un site qui dit ce que personne ne
            m&apos;a dit en 2023, aux hommes comme moi, qui n&apos;ont pas envie de subir.
          </p>

          <div className="mt-8 p-6 bg-virage-anthracite/3 rounded-lg border border-virage-anthracite/10">
            <p className="font-sans text-sm text-meta-gray leading-relaxed">
              <strong>Note :</strong> Les noms, dates et détails ont été fictionnalisés
              pour préserver l&apos;anonymat des proches et des médecins. Ce témoignage
              ne remplace pas un avis médical. Je ne suis pas médecin. Pour toute
              question concernant un traitement hormonal (TRT), consultez un urologue
              ou un endocrinologue.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
