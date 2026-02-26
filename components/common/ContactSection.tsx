"use client";

import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Left - Info */}
        <div
          className="relative flex flex-col justify-center rounded-2xl 
bg-background/100 backdrop-blur-md 
border border-white/30 
p-8"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
            <Mail className="h-6 w-6 text-primary" />
          </div>

          {/* Título segue padrão global de h2 */}
          <h2 className="mb-4 text-4xl md:text-5xl">
            Contact us
          </h2>

          {/* Parágrafo padrão */}
          <p className="mb-8 max-w-md text-base text-muted-foreground">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>

          {/* Contatos padrão */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>homeservicesevercare@gmail.com</span>
            <span>•</span>
            <span>+1 (508) 736-1263</span>
          </div>
        </div>

        {/* Right - Form */}
        <div className="rounded-2xl border border-border bg-card p-8">
          {/* Grid dots decoration */}
          <div className="mb-6 flex justify-end opacity-20">
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border-0 bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border-0 bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full rounded-lg border-0 bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message here"
                className="w-full resize-none rounded-lg border-0 bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <button className="rounded-lg cursor-pointer bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;