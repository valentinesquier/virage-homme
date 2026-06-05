import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="font-serif text-8xl text-virage-homme-or mb-4">404</p>
      <h1 className="font-serif text-3xl font-semibold text-virage-homme-anthracite mb-4">
        Page introuvable
      </h1>
      <p className="font-serif text-lg text-meta-gray mb-8">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/">
        <Button className="font-sans">Retour à l&apos;accueil</Button>
      </Link>
    </div>
  );
}
