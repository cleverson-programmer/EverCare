"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles, Heart, Menu as MenuIcon, X } from "lucide-react"

import US from "country-flag-icons/react/3x2/US"
import BR from "country-flag-icons/react/3x2/BR"
import ES from "country-flag-icons/react/3x2/ES"

import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from "@/components/ui/navbar-menu"

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { servicesData } from "@/components/data/services"
import { cn } from "@/lib/utils"

/* ============================
   LANGUAGE DROPDOWN
============================ */

const languages = [
  { code: "US", Flag: US },
  { code: "BR", Flag: BR },
  { code: "ES", Flag: ES },
]

export function LanguageDropdown() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(languages[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-accent transition text-sm font-medium text-foreground/80"
      >
        <selected.Flag className="w-5 h-auto rounded-sm" />
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-[calc(100%+6px)] z-50 flex flex-col gap-1 p-1.5 bg-card border border-border rounded-xl shadow-xl min-w-[80px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setSelected(lang); setOpen(false); }}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors w-full",
                  selected.code === lang.code
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent text-foreground"
                )}
              >
                <lang.Flag className="w-5 h-auto rounded-sm" />
                {lang.code}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ============================
   NAVBAR
============================ */

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const cleaningServices = servicesData.filter(s => s.theme === "cleaning")
  const homecareServices = servicesData.filter(s => s.theme === "homecare")

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto"
  }, [mobileOpen])

  return (
    <header className="w-full sticky top-0 z-50 hover:bg-white dark:bg-black">
      <div className="flex items-center justify-between px-6 h-16 md:h-18 lg:h-20 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
           <img
              src="/assets/images/logo.svg"
              alt="Company Logo"
              className="h-28 md:h-30 lg:h-36 xl:h-40 w-auto"
            />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={null} item="Home" href="/" />
            <MenuItem setActive={setActive} active={active} item="Services" href="/services">
              <div className="grid grid-cols-2 gap-8 w-[600px]">
                <div>
                  <h4 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Home Care
                  </h4>
                  <div className="flex flex-col gap-4">
                    {homecareServices.map(s => (
                      <ProductItem
                        key={s.slug}
                        title={s.heroTitle}
                        description={s.heroSubtitle}
                        href={`/services/${s.slug}`}
                        src="/assets/images/service1.jpg"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Cleaning Services
                  </h4>
                  <div className="flex flex-col gap-4">
                    {cleaningServices.map(s => (
                      <ProductItem
                        key={s.slug}
                        title={s.heroTitle}
                        description={s.heroSubtitle}
                        href={`/services/${s.slug}`}
                        src="/assets/images/service1.jpg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={null} item="About" href="/about" />
            <MenuItem setActive={setActive} active={null} item="Contact" href="/contact" />
          </Menu>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          <InteractiveHoverButton>
            Get Started
          </InteractiveHoverButton>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageDropdown />
            <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-accent transition-colors" />
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-accent transition"
          >
            <MenuIcon size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-card border-l border-border flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <span className="font-extrabold text-foreground">Menu</span>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent transition"
                >
                  <X size={18} className="text-foreground" />
                </button>
              </div>

              <div className="flex-1 px-4 py-6 flex flex-col gap-4">

                <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

                {/* SERVICES EXPANDABLE */}
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left font-semibold"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={cn("transition-transform", servicesOpen && "rotate-180")}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-6 pl-2 pt-2"
                    >
                      {/* CLEANING */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-cleaning text-xs font-bold uppercase">
                          <Sparkles size={12} />
                          Cleaning
                        </div>
                        {cleaningServices.map(s => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-cleaning-light transition"
                          >
                            <Sparkles size={14} className="text-cleaning" />
                            <div>
                              <p className="text-sm font-semibold">{s.heroTitle}</p>
                              <p className="text-xs text-muted-foreground">{s.heroSubtitle}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* HOMECARE */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-homecare text-xs font-bold uppercase">
                          <Heart size={12} />
                          Home Care
                        </div>
                        {homecareServices.map(s => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-homecare-light transition"
                          >
                            <Heart size={14} className="text-homecare" />
                            <div>
                              <p className="text-sm font-semibold">{s.heroTitle}</p>
                              <p className="text-xs text-muted-foreground">{s.heroSubtitle}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
              </div>

              {/* FOOTER CONTROLS */}
              <div className="px-4 py-4 border-t border-border flex items-center justify-between">
                <LanguageDropdown />
                <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-accent transition-colors" />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
