import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Metadata } from "next";

interface LegalPageProps {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Mentions légales",
};

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Mentions légales", href: "/legal/mentions-legales" },
];

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-serif text-4xl font-semibold text-virage-homme-anthracite mt-6 mb-8">
        Mentions légales
      </h1>
      <div className="prose-virage-homme">
        <p>
          <strong>Éditeur du site</strong><br />
          Le site virage-homme.com est édité par esq.group, EI au capital de 1 000 €, immatriculée
          au RCS de Lyon sous le numéro 948 042 080.
        </p>
        <p>
          <strong>Directeur de la publication</strong><br />
          Valentin Esquier
        </p>
        <p>
          <strong>Hébergeur</strong><br />
          Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
        </p>
        <p>
          <strong>Propriété intellectuelle</strong><br />
          L&apos;ensemble des contenus (textes, images, structure) est protégé par le droit
          d&apos;auteur. Toute reproduction sans autorisation est interdite.
        </p>
        <p>
          <strong>Avertissement</strong><br />
          Les informations diffusées sur Virage Homme constituent un témoignage personnel
          fictionnalisé et ne remplacent en aucun cas un avis médical professionnel. Pour toute
          question relative à votre santé, consultez votre médecin.
        </p>
      </div>
    </div>
  );
}
