"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-50 pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-image.png" alt="Hero Background" className="w-full h-full object-cover" />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text--900 mb-4">Jei Akash M A</h2>
          <p className="text-xl md:text-2xl text-green-700 mb-8">Engineering student on a mission to turn ideas into impact</p>
          <Button
            asChild
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium text-lg"
          >
            <a href="#about">About Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
