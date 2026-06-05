import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci pour votre achat",
  description: "Votre achat a bien été confirmé.",
  robots: "noindex, nofollow",
};

export default function MerciPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
      <CheckCircle size={64} className="mx-auto text-virage-homme-vert mb-6" />
      <h1 className="font-serif text-4xl font-semibold text-virage-homme-anthracite mb-4">
        Merci pour votre achat !
      </h1>
      <p className="font-serif text-lg text-meta-gray mb-6 leading-relaxed">
        Votre Protocole 12 Semaines arrive dans votre boîte mail d&apos;ici quelques minutes.
        Pensez à vérifier vos spams si vous ne le voyez pas.
      </p>
      <p className="font-sans text-sm text-meta-gray mb-8">
        Si vous avez la moindre question, écrivez à bonjour@virage-homme.com
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/blog">
          <Button variant="outline" className="font-sans">
            Lire le blog
          </Button>
        </Link>
        <Link href="/">
          <Button className="font-sans">
            Retour à l&apos;accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
