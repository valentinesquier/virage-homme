import { getArticleBySlug, getLatestArticles } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article non trouvé" };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [siteConfig.author],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getLatestArticles(3).filter((a) => a.slug !== slug).slice(0, 2);

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: article.title, href: `/blog/${article.slug}` },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: `https://${siteConfig.domain}/a-propos`,
    },
    publisher: {
      "@type": "Organization",
      name: "esq.group",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${siteConfig.domain}/blog/${article.slug}`,
    },
    ...(article.sources && article.sources.length > 0
      ? { citation: article.sources.map((s) => ({ "@type": "CreativeWork", name: s })) }
      : {}),
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <article className="container mx-auto max-w-3xl px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mt-6 mb-10">
          <p className="font-sans text-xs uppercase tracking-wider text-virage-homme-terracotta mb-2">
            {article.category}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-virage-homme-anthracite leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 font-sans text-sm text-meta-gray">
            <span>{siteConfig.author}</span>
            <span>·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{article.readingTime} min de lecture</span>
          </div>
        </header>

        {/* Article body */}
        <div
          className="prose-virage-homme"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Sources */}
        {article.sources && article.sources.length > 0 && (
          <div className="mt-12 pt-8 border-t border-virage-homme-anthracite/10">
            <h3 className="font-sans font-semibold text-virage-homme-anthracite mb-3 text-sm uppercase tracking-wider">
              Sources
            </h3>
            <ul className="space-y-1">
              {article.sources.map((s, i) => (
                <li key={i} className="font-sans text-xs text-meta-gray">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Medical disclaimer */}
        <div className="mt-8 p-4 bg-virage-homme-anthracite/3 rounded-lg border border-virage-homme-anthracite/10">
          <p className="font-sans text-xs text-meta-gray leading-relaxed">
            <strong>Avertissement :</strong> Témoignage personnel, fictionnalisé pour
            préserver l&apos;anonymat des proches. Ce que je raconte ici ne remplace pas un
            avis médical. Pour toute décision concernant un traitement (notamment hormonal),
            consultez votre médecin traitant ou un gynécologue formé à la ménopause.
          </p>
        </div>

        {/* Lead magnet CTA */}
        <div className="mt-10 bg-virage-homme-vert/10 border border-virage-homme-vert/20 rounded-xl p-6 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-virage-homme-vert mb-2">
            Guide gratuit
          </p>
          <p className="font-serif text-xl font-semibold text-virage-homme-anthracite mb-1">
            Les 12 signes qu&apos;on ne vous dit pas
          </p>
          <p className="font-sans text-sm text-meta-gray mb-4">
            Recevez le PDF gratuit de 25 pages dans votre boîte mail.
          </p>
          <div className="max-w-sm mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 h-10 px-3 rounded-md border border-virage-homme-anthracite/20 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-virage-homme-vert"
                required
              />
              <Button size="sm" className="font-sans shrink-0">
                Recevoir le PDF
              </Button>
            </form>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-virage-homme-anthracite/10">
            <h3 className="font-serif text-2xl font-semibold text-virage-homme-anthracite mb-6">
              À lire aussi
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-virage-homme-creme border border-virage-homme-anthracite/10 rounded-lg p-4 hover:border-virage-homme-vert/30 transition-colors"
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-virage-homme-terracotta mb-1">
                    {r.category}
                  </p>
                  <p className="font-serif font-semibold text-virage-homme-anthracite group-hover:text-virage-homme-vert transition-colors">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
