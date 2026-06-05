import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="font-serif text-2xl font-semibold text-virage-homme-anthracite tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
}
