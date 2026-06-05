"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ShieldCheck } from "lucide-react";

interface StripeBuyButtonProps {
  priceId: string;
  productName: string;
  price: number;
  variant?: "default" | "secondary";
}

export function StripeBuyButton({
  priceId,
  productName,
  price,
  variant = "default",
}: StripeBuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de la création de la session");
      }

      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      } else {
        throw new Error("URL de checkout non reçue");
      }
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button
        onClick={handleBuy}
        disabled={loading}
        variant={variant}
        size="xl"
        className="w-full sm:w-auto font-sans"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            Redirection vers le paiement…
          </>
        ) : (
          `Acheter ${productName} — ${price} €`
        )}
      </Button>
      {error && (
        <p className="mt-2 text-sm text-red-600 font-sans">{error}</p>
      )}
      <div className="flex items-center gap-1.5 mt-3 text-xs text-meta-gray font-sans">
        <ShieldCheck size={14} className="text-virage-homme-vert" />
        Paiement sécurisé Stripe · Satisfait ou remboursé 14 jours
      </div>
    </div>
  );
}
