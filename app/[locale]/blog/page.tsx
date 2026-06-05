import Link from "next/link";
import { getAllArticles, getAllCategories, getAllTags } from "@/lib/blog";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles sur la périménopause : symptômes, gestion sans hormones, sport, alimentation, sommeil et vie professionnelle. Par Katia.",
};

export default function BlogPage() {
  const articles = getAllArticles();
  const categories = getAllCategories();
  const tags = getAllTags();

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-virage-homme-anthracite mt-6 mb-4">
          Blog
        </h1>
        <p className="font-serif text-lg text-meta-gray mb-10 max-w-2xl">
          Témoignages, analyses et protocoles sur la périménopause. Sans hormones,
          sans phyto, sans bullshit. Par Katia, 47 ans.
        </p>

        {articles.length > 0 ? (
          <>
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 rounded-full bg-virage-homme-vert/10 text-virage-homme-vert font-sans text-xs uppercase tracking-wider"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Articles grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-virage-homme-creme border border-virage-homme-anthracite/10 rounded-lg p-6 hover:border-virage-homme-vert/30 transition-colors"
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-virage-homme-terracotta mb-2">
                    {article.category}
                  </p>
                  <h2 className="font-serif text-lg font-semibold text-virage-homme-anthracite mb-2 group-hover:text-virage-homme-vert transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-sans text-sm text-meta-gray leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="font-sans text-xs text-meta-gray">
                      {new Date(article.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <span className="text-meta-gray/40">·</span>
                    <p className="font-sans text-xs text-meta-gray">
                      {article.readingTime} min
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 border border-virage-homme-anthracite/10 rounded-lg bg-virage-homme-anthracite/3">
            <p className="font-serif text-xl text-meta-gray mb-2">
              Aucun article pour le moment
            </p>
            <p className="font-sans text-sm text-meta-gray">
              Le contenu SEO est en cours de rédaction. Revenez bientôt.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
