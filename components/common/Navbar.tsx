"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles, Heart, Menu as MenuIcon, X } from "lucide-react"
import { usePathname } from "next/navigation"

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

  //Se hover, usa fundo do tema (Branco no Light, Escuro no Dark)
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
            className="absolute right-0 z-50 flex flex-col gap-1 p-1.5 
            bg-card border border-border rounded-xl shadow-xl min-w-[80px]
            bottom-[calc(100%+6px)] lg:bottom-auto
            lg:top-[calc(100%+6px)]">
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

  const pathname = usePathname()

  const isSolidNavbar =
    pathname.startsWith("/services") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/contact")

  // Botão de Tema adaptado para bg-background no modo escuro
  const themeToggleClasses = cn(
  "p-2 rounded-lg transition-all duration-300 border",
  isSolidNavbar
    ? "bg-white text-foreground border-border dark:bg-background dark:text-foreground dark:border-white/10 shadow-sm"
    : !navState.isHovered 
      ? "text-white bg-transparent border-transparent hover:bg-white/10" 
      : "bg-white text-foreground border-border dark:bg-background dark:text-foreground dark:border-white/10 shadow-sm"
  )

  const isNavbarActive = isSolidNavbar || navState.isHovered

  return (
    <header
      onMouseEnter={() => setNavState(prev => ({ ...prev, isHovered: true }))}
      onMouseLeave={() => setNavState(prev => ({ ...prev, isHovered: false, activeMenu: null }))}
      className={cn(
        "w-full fixed top-0 lg:relative z-50 transition-all duration-300",
        isSolidNavbar
          ? "bg-white dark:bg-background shadow-md border-b dark:border-white/5"
          : navState.isHovered
            ? "bg-white dark:bg-background shadow-md border-b dark:border-white/5"
            : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-6 h-16 md:h-18 lg:h-20 max-w-7xl mx-auto relative">
        
        <Link href="/" className="flex items-center">
          <img src="/assets/images/logo.svg" alt="Logo" className="h-28 md:h-30 lg:h-36 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:block">
          <Menu
            setActive={(item) => setNavState(prev => ({ ...prev, activeMenu: item }))}
            isHovered={isNavbarActive}
          >
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
            <Link href="/services">
              <InteractiveHoverButton>
                Get a Quote
              </InteractiveHoverButton>
            </Link>
          </div>

          <div className="hidden  lg:flex items-center gap-3">
            <LanguageDropdown  isNavbarHovered={navState.isHovered} />
            <AnimatedThemeToggler className={themeToggleClasses} />
          </div>

          <button
            onClick={() => setNavState(prev => ({ ...prev, mobileOpen: true }))}
            className={cn(
              "lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
              isSolidNavbar || navState.isHovered
              ? "text-foreground dark:text-foreground"
              : "text-white"
            )}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {navState.mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}
            />
            <motion.nav
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-card border-l border-border flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <span className="font-extrabold text-foreground">Menu</span>
                <button onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent transition">
                  <X size={18} className="text-foreground" />
                </button>
              </div>

              <div className="flex-1 px-4 py-6 flex flex-col gap-4">
                <Link href="/" onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}>Home</Link>
                <button
                  onClick={() => setNavState(prev => ({ ...prev, servicesOpen: !prev.servicesOpen }))}
                  className="flex items-center justify-between w-full text-left font-semibold"
                >
                  Services
                  <ChevronDown size={16} className={cn("transition-transform", navState.servicesOpen && "rotate-180")} />
                </button>

                {/* MOBILE DRAWER */}
                <AnimatePresence>
                  {navState.mobileOpen && (
                    <>
                      {/* OVERLAY (Fundo escurecido) */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-[60]"
                        onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}
                      />

                      {/* PAINEL LATERAL */}
                      <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 z-[70] w-80 bg-card border-l border-border flex flex-col shadow-2xl"
                      >
                        {/* HEADER DO DRAWER */}
                        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                          <span className="font-extrabold text-foreground uppercase tracking-widest text-sm">Menu</span>
                          <button 
                            onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))} 
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                          >
                            <X size={20} className="text-foreground" />
                          </button>
                        </div>

                        {/* LINKS E CONTEÚDO SCROLLÁVEL */}
                        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-4">
                          <Link 
                            href="/" 
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                            onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}
                          >
                            Home
                          </Link>

                          {/* BOTÃO SERVICES (ACCORDION TOGGLE) */}
                          <div>
                            <button
                              onClick={() => setNavState(prev => ({ ...prev, servicesOpen: !prev.servicesOpen }))}
                              className="w-full flex items-center justify-between text-lg font-bold text-foreground hover:text-primary transition-colors"
                            >
                              Services
                              <motion.div
                                animate={{ rotate: navState.servicesOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown size={20} />
                              </motion.div>
                            </button>

                            {/* SUBMENU DE SERVIÇOS */}
                            <AnimatePresence>
                              {navState.servicesOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="flex flex-col gap-6 pl-2 pt-4 overflow-hidden"
                                >
                                  {/* CATEGORIA: CLEANING */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-3 text-cleaning text-xs font-black uppercase tracking-widest">
                                      <Sparkles size={12} />
                                      Cleaning
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      {cleaningServices.map(s => (
                                        <Link
                                          key={s.slug}
                                          href={`/services/${s.slug}`}
                                          onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}
                                          className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors group"
                                        >
                                          <div className="p-2 rounded-lg transition-colors">
                                            <Sparkles size={14} className="text-cleaning " />
                                          </div>
                                          <div>
                                            <p className="text-sm font-bold text-foreground">{s.heroTitle}</p>
                                            <p className="text-[10px] text-muted-foreground line-clamp-1">{s.heroSubtitle}</p>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>

                                  {/* CATEGORIA: HOMECARE */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-3 text-homecare text-xs font-black uppercase tracking-widest">
                                      <Heart size={12} />
                                      Home Care
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      {homecareServices.map(s => (
                                        <Link
                                          key={s.slug}
                                          href={`/services/${s.slug}`}
                                          onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}
                                          className="flex items-center gap-3 px-3 py-2 rounded-xl  transition-colors group"
                                        >
                                          <div className="p-2 bg-homecare/10 rounded-lg transition-colors">
                                            <Heart size={14} className="text-homecare" />
                                          </div>
                                          <div>
                                            <p className="text-sm font-bold text-foreground">{s.heroTitle}</p>
                                            <p className="text-[10px] text-muted-foreground line-clamp-1">{s.heroSubtitle}</p>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <Link 
                            href="/about" 
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                            onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}
                          >
                            About
                          </Link>
                          <Link 
                            href="/contact" 
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                            onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}
                          >
                            Contact
                          </Link>
                        </div>

                        {/* FOOTER DO DRAWER (CONTROLES) */}
                        <div className="p-6 border-t border-border flex items-center justify-between bg-accent/10">
                          <LanguageDropdown isNavbarHovered={true} />
                          <AnimatedThemeToggler className="p-2.5 cursor-pointer text-foreground bg-background rounded-xl border border-border shadow-sm" />
                        </div>
                      </motion.nav>
                    </>
                  )}
                </AnimatePresence>

                <Link href="/about" onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}>About</Link>
                <Link href="/contact" onClick={() => setNavState(prev => ({ ...prev, mobileOpen: false }))}>Contact</Link>
              </div>

              <div className="px-4 py-4 border-t border-border flex items-center justify-between">
                <LanguageDropdown isNavbarHovered={true} />
                <AnimatedThemeToggler className="p-2 text-foreground rounded-lg hover:bg-accent transition-colors" />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}