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
    <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded bg-homecare flex items-center justify-center">
                  <span className="text-homecare-foreground font-bold text-xs">E</span>
                </div>
                <span className="font-extrabold text-background">
                  <Image
                    src="/assets/images/logo.svg"
                    alt="EverCare Logo"
                    width={160}
                    height={160}
                  />
                </span>
              </div>
              <p className="text-background/60 text-xs leading-relaxed">
                Compassionate, certified, and personalized in-home care built on safety, dignity, and respect throughout Massachusetts.
              </p>
            </div>
            <div>
              <p className="font-semibold text-background mb-3 text-sm">Services</p>
              <ul className="flex flex-col gap-1.5">
                {["Personal Care", "Alzheimer's Care", "Post-Surgery Recovery", "Companionship"].map((s) => (
                  <li key={s}>
                    <a href="#" className="text-background/60 text-xs hover:text-background transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-background mb-3 text-sm">Contact</p>
              <ul className="flex flex-col gap-1.5 text-xs text-background/60">
                <li>Boston, MA 02101</li>
                <li>Serving Greater Massachusetts</li>
                <li>(617) 123-4567</li>
                <li>care@evercare.com</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-background mb-3 text-sm">Stay Informed</p>
              <p className="text-xs text-background/60 mb-3">Subscribe for care resources and updates.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-background/10 border border-background/20 rounded-lg px-3 py-2 text-xs text-background placeholder:text-background/40 outline-none focus:border-homecare"
                />
                <button className="px-3 py-2 rounded-lg bg-homecare text-homecare-foreground text-xs font-semibold hover:bg-homecare-dark transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/40">
            © 2025 EverCare Home Care Services. All rights reserved.
          </div>
        </div>
      </footer>
  )
}
