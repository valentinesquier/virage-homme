import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
};

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "CGV", href: "/legal/cgv" },
];

export default function CGVPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-serif text-4xl font-semibold text-virage-homme-anthracite mt-6 mb-8">
        Conditions générales de vente
      </h1>
      <div className="prose-virage-homme">
        <h2>1. Objet</h2>
        <p>
          Les présentes CGV régissent la vente des produits numériques (PDF) proposés sur le
          site virage-homme.com.
        </p>
        <h2>2. Produits</h2>
        <p>
          Les produits vendus sont des contenus numériques au format PDF. Aucun produit
          physique, complément alimentaire, médicament ou dispositif médical n&apos;est
          vendu sur ce site.
        </p>
        <h2>3. Prix et paiement</h2>
        <p>
          Les prix sont indiqués en euros, toutes taxes comprises (TVA non applicable, article
          293 B du CGI). Le paiement est sécurisé via Stripe.
        </p>
        <h2>4. Livraison</h2>
        <p>
          Après confirmation du paiement, l&apos;acheteur reçoit un email contenant le lien de
          téléchargement du PDF.
        </p>
        <h2>5. Droit de rétractation</h2>
        <p>
          Conformément à l&apos;article L221-28 du Code de la consommation, le droit de
          rétractation ne s&apos;applique pas aux contenus numériques fournis immédiatement.
          Cependant, nous offrons une garantie satisfait ou remboursé de 14 jours.
        </p>
        <h2>6. Litiges</h2>
        <p>
          En cas de litige, le tribunal compétent est celui du siège social d&apos;esq.group
          (Lyon, France). Droit applicable : droit français.
        </p>
      </div>
    </div>
  );
}
