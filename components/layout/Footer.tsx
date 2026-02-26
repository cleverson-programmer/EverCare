"use client"

import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* ================= DESKTOP ================= */}
        <div className="hidden sm:block">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/images/logo.svg"
              alt="EverCare Logo"
              width={120}
              height={120}
            />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-8 mb-10">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-border mb-6" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2026 EverCare. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Novo parágrafo centralizado */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Created by cleverson.github@gmail.com
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="block sm:hidden">

          <div className="flex flex-col items-center gap-6 mb-8">

            <div className="flex flex-col gap-4 items-center">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>

          <div className="border-t border-border mb-6" />

          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-muted-foreground">
              © 2026 EverCare. All Rights Reserved.
            </p>

            <Image
              src="/assets/images/logo.svg"
              alt="EverCare Logo"
              width={56}
              height={56}
            />
          </div>

          {/* Novo parágrafo centralizado */}
          <p className="text-center text-xs text-muted-foreground">
            Created by cleverson.github@gmail.com
          </p>
        </div>

      </div>
    </footer>
  )
}
