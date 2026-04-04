import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Foot() {
  const FOOTER_LINKS = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Reports", href: "/reports" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <section className="min-h-max w-full border-y-1 border-white/10">
      <footer className="mx-auto flex min-h-max w-9/10 flex-col justify-between md:flex-row">
        <div>
          <Image src="/logo.svg" alt="Logo" width={150} height={60} priority />
          <p className="leading-reg max-w-[30ch] text-sm text-white/50 lg:text-base">
            the leading policy advisory firm shaping the narrative and strategy
            around West African economic development and youth empowerment.
          </p>
        </div>
        <div className="flex flex-row gap-24">
          <div className="mt-12 flex flex-col">
            <span className="mb-4 font-bold text-white/50">Quick Links</span>
            <div className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link, i) => {
                return (
                  <span key={i * 5} className="text-white/85 hover:text-white">
                    <Link key={i} href={link.href}>
                      {link.label}
                    </Link>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-12 flex flex-col">
            <span className="mb-4 font-bold text-white/50">Contact</span>
            <div className="flex flex-col gap-1">
              <span className="text-white/85 hover:text-white">
                <Link href="https://www.linkedin.com/company/roots-policy-consulting/">
                  LinkedIn
                </Link>
              </span>

              <span className="text-white/85 hover:text-white">
                <Link href="https://www.tiktok.com/@riseandrootsmedia?_r=1&_t=ZN-945BXmMQAuE">
                  Tiktok
                </Link>
              </span>
              <span className="text-white/85 hover:text-white">
                <Link href="https://riserootswestafrica.substack.com/">
                  Substack
                </Link>
              </span>
              <span className="text-white/85 hover:text-white">
                <Link href="mailto:info@riserootsgroup.com">
                  info@rootspolicy.co.uk
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="mt-12 mb-2 text-center text-sm text-white/50">
        All rights reserved - ©2026 Roots Policy
      </div>
    </section>
  );
}
