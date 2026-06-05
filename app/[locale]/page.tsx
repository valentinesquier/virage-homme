import Link from "next/link";
import { getLatestArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Moon, Apple, Dumbbell, Brain } from "lucide-react";

export default function HomePage() {
  const latestArticles = getLatestArticles(3);

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="font-sans text-sm uppercase tracking-widest text-virage-brun mb-4">
              Andropause & Vitalité masculine 40-55 ans
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-virage-anthracite leading-tight mb-6">
              Reprenez le contrôle<br />après 40 ans
            </h1>
            <p className="font-serif text-xl text-virage-anthracite/70 mb-8 leading-relaxed max-w-2xl">
              Je m&apos;appelle Antoine. J&apos;ai 45 ans. À 42 ans, je dormais 5 heures,
              j&apos;avais pris 6 kilos sur le ventre, et ma libido était au point mort.
              Mon généraliste m&apos;a dit « c&apos;est la quarantaine ». Voici ce que
              j&apos;ai appris — sans compléments miracles, sans gourous YouTube.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/guide">
                <Button size="lg" className="font-sans">
                  Lire le guide complet
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="font-sans">
                  Explorer le blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Piliers */}
      <section className="py-16 bg-virage-anthracite/3">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-center text-virage-anthracite mb-12">
            Les 4 piliers de mon protocole
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Moon,
                title: "Sommeil",
                desc: "Couvre-feu écrans 22h, chambre 18°C, magnésium. 7h de sommeil profond, sans somnifères.",
              },
              {
                icon: Apple,
                title: "Alimentation",
                desc: "1,6 g de protéines par kilo. Zéro régime restrictif. Juste du carburant adapté.",
              },
              {
                icon: Dumbbell,
                title: "Force",
                desc: "3 séances par semaine, charges lourdes. Pas de cardio qui fond la masse musculaire.",
              },
              {
                icon: Brain,
                title: "Stress",
                desc: "Cortisol sous contrôle. Respiration, cold exposure, coupure digitale. Le stress tue la testostérone.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-virage-creme p-6 rounded-lg border border-virage-anthracite/10"
              >
                <p.icon size={28} className="text-virage-bleu mb-4" />
                <h3 className="font-sans font-semibold text-virage-anthracite mb-2">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-meta-gray leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-virage-bleu/10 border border-virage-bleu/20 rounded-xl p-8 lg:p-12 text-center">
            <p className="font-sans text-sm uppercase tracking-widest text-virage-bleu mb-3">
              Téléchargement gratuit
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-virage-anthracite mb-4">
              Andropause : les 8 signes qu&apos;on ne vous dit pas
            </h2>
            <p className="font-serif text-lg text-virage-anthracite/70 mb-6 max-w-2xl mx-auto">
              Un PDF de 20 pages qui liste les signaux précoces que j&apos;aurais aimé
              connaître à 42 ans. Pas de jargon médical. Juste ce que j&apos;ai vu.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 h-12 px-4 rounded-md border border-virage-anthracite/20 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-virage-bleu"
                  required
                />
                <Button size="lg" className="font-sans shrink-0">
                  Recevoir le PDF gratuit
                </Button>
              </form>
              <p className="mt-3 font-sans text-xs text-meta-gray">
                Pas de spam. Désabonnement en un clic. Conforme RGPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-semibold text-virage-anthracite">
              Derniers articles
            </h2>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="font-sans">
                Voir tout le blog <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          {latestArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-virage-creme border border-virage-anthracite/10 rounded-lg p-6 hover:border-virage-bleu/30 transition-colors"
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-virage-brun mb-2">
                    {article.category}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-virage-anthracite mb-2 group-hover:text-virage-bleu transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-meta-gray leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <p className="mt-3 font-sans text-xs text-meta-gray">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {article.readingTime} min
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-virage-anthracite/10 rounded-lg bg-virage-anthracite/3">
              <p className="font-serif text-lg text-meta-gray mb-2">
                Les premiers articles arrivent bientôt
              </p>
              <p className="font-sans text-sm text-meta-gray">
                Le contenu SEO est en cours de rédaction. Restez connecté.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
