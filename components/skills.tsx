"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [mounted])

  const skills = [
    { name: "PYTHON", level: 90 },
    { name: "JAVA", level: 85 },
    { name: "C/C++", level: 80 },
    { name: "JAVASCRIPT", level: 95 },
    { name: "FLUTTER", level: 85 },
    { name: "REACT.JS", level: 90 },
    { name: "NODE.JS", level: 88 },
    { name: "EXPRESS.JS", level: 85 },
    { name: "POSTGRESQL", level: 82 },
    { name: "MONGODB", level: 80 },
    { name: "NEXT.JS", level: 87 },
    { name: "DART", level: 83 },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proficient in modern technologies for full-stack development, data science, and mobile app development
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">{skill.name}</span>
                  <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: mounted && isVisible ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Stack Development</h3>
            <p className="text-gray-600 text-sm">React.js, Node.js, Express.js, Next.js</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile Development</h3>
            <p className="text-gray-600 text-sm">Flutter, Dart, Cross-platform apps</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🗄️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Database & Backend</h3>
            <p className="text-gray-600 text-sm">PostgreSQL, MongoDB, Data Science</p>
          </div>
        </div>
      </div>
    </section>
  )
}
