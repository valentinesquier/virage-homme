import type { ProductData } from "@/lib/products";
import { StripeBuyButton } from "./stripe-buy-button";
import { CheckCircle } from "lucide-react";

interface HeroProductProps {
  product: ProductData;
}

export function HeroProduct({ product }: HeroProductProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-virage-homme-terracotta mb-3">
              PDF Flagship
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-virage-homme-anthracite leading-tight mb-6">
              {product.title}
            </h1>
            <p className="font-serif text-xl text-virage-homme-anthracite/70 mb-4 italic">
              {product.subtitle}
            </p>
            <p className="font-sans text-meta-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-virage-homme-anthracite/80">
                  <CheckCircle size={18} className="text-virage-homme-vert shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Prix + CTA */}
            <div className="bg-virage-homme-anthracite/5 rounded-lg p-6 border border-virage-homme-anthracite/10">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-4xl font-semibold text-virage-homme-anthracite">
                  {product.price} €
                </span>
                <span className="font-sans text-sm text-meta-gray">prix unique</span>
              </div>
              <StripeBuyButton
                priceId={product.stripePriceId}
                productName={product.title.split("—")[0].trim()}
                price={product.price}
              />
              <p className="mt-3 font-sans text-xs text-meta-gray">
                Témoignage personnel, fictionnalisé. Ce guide ne remplace pas un avis médical.
                Pour toute décision concernant votre santé, consultez votre médecin.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="hidden lg:block">
            <div className="aspect-[3/4] bg-virage-homme-anthracite/5 rounded-lg border border-virage-homme-anthracite/10 flex items-center justify-center">
              <p className="font-serif text-virage-homme-anthracite/30 text-lg">Photo Katia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
