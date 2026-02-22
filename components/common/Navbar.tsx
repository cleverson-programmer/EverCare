"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react"

import US from "country-flag-icons/react/3x2/US"
import BR from "country-flag-icons/react/3x2/BR"
import ES from "country-flag-icons/react/3x2/ES"

import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { servicesData } from "@/components/data/services"
import { cn } from "@/lib/utils"

const languages = [
  { code: "US", Flag: US },
  { code: "BR", Flag: BR },
  { code: "ES", Flag: ES },
]

function LanguageDropdown({ isNavbarHovered }: { isNavbarHovered: boolean }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(languages[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Adaptado: Se hover, usa fundo do tema (Branco no Light, Escuro no Dark)
  const colorClasses = !isNavbarHovered 
    ? "text-white bg-transparent hover:bg-white/10" 
    : "bg-white text-foreground dark:bg-background dark:text-foreground border border-border dark:border-white/10 shadow-sm"

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 text-sm font-bold", colorClasses)}
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
            className="absolute right-0 top-[calc(100%+6px)] z-50 flex flex-col gap-1 p-1.5 bg-card border border-border rounded-xl shadow-xl min-w-[80px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setSelected(lang); setOpen(false); }}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors w-full",
                  selected.code === lang.code ? "bg-primary text-primary-foreground" : "hover:bg-accent text-foreground"
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

export default function Navbar() {
  const [navState, setNavState] = useState({
    activeMenu: null as string | null,
    isHovered: false,
    mobileOpen: false,
    servicesOpen: false
  })

  const cleaningServices = servicesData.filter(s => s.theme === "cleaning")
  const homecareServices = servicesData.filter(s => s.theme === "homecare")

  // Botão de Tema adaptado para bg-background no modo escuro
  const themeToggleClasses = cn(
    "p-2 rounded-lg transition-all duration-300 border",
    !navState.isHovered 
      ? "text-white bg-transparent border-transparent hover:bg-white/10" 
      : "bg-white text-foreground border-border dark:bg-background dark:text-foreground dark:border-white/10 shadow-sm"
  )

  return (
    <header
      onMouseEnter={() => setNavState(prev => ({ ...prev, isHovered: true }))}
      onMouseLeave={() => setNavState(prev => ({ ...prev, isHovered: false, activeMenu: null }))}
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300",
        // CORREÇÃO AQUI: Agora usa bg-background no Dark
        navState.isHovered ? "bg-white dark:bg-background shadow-md border-b dark:border-white/5" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-6 h-16 md:h-18 lg:h-20 max-w-7xl mx-auto relative">
        
        <Link href="/" className="flex items-center">
          <img src="/assets/images/logo.svg" alt="Logo" className="h-28 md:h-30 lg:h-36 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:block">
          <Menu setActive={(item) => setNavState(prev => ({ ...prev, activeMenu: item }))} isHovered={navState.isHovered}>
            {["Home", "Services", "About", "Contact"].map((item) => (
              <div key={item} className="relative group">
                <MenuItem setActive={(val) => setNavState(prev => ({ ...prev, activeMenu: val }))} active={navState.activeMenu} item={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  {item === "Services" && (
                    <div className="grid grid-cols-2 gap-8 w-[600px]">
                      <div>
                        <h4 className="mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Cleaning</h4>
                        <div className="flex flex-col gap-2">
                          {cleaningServices.map(s => (
                            <ProductItem key={s.slug} title={s.heroTitle} description={s.heroSubtitle} href={`/services/${s.slug}`} src="/assets/images/service1.jpg" />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Home Care</h4>
                        <div className="flex flex-col gap-2">
                          {homecareServices.map(s => (
                            <ProductItem key={s.slug} title={s.heroTitle} description={s.heroSubtitle} href={`/services/${s.slug}`} src="/assets/images/service1.jpg" />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </MenuItem>
                <span className="absolute left-0 bottom-[-10px] h-[2px] w-full bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </Menu>
        </div>

        {/* CONTROLES DIREITA */}
        <div className="flex items-center gap-3">
          {/* O InteractiveHoverButton costuma ter cores próprias, mas ele se destacará bem no bg-background escuro */}
          <div className="hidden sm:block">
            <InteractiveHoverButton>Get Started</InteractiveHoverButton>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageDropdown isNavbarHovered={navState.isHovered} />
            <AnimatedThemeToggler className={themeToggleClasses} />
          </div>

          <button
            onClick={() => setNavState(prev => ({ ...prev, mobileOpen: true }))}
            className={cn(
              "lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
              navState.isHovered ? "text-foreground dark:text-foreground" : "text-white"
            )}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}