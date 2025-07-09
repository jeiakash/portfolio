"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Globe, Cloud, Sparkles, Code } from "lucide-react"

export default function Interests() {
  const interests = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building intelligent systems and predictive models using advanced ML algorithms and frameworks.",
      color: "bg-purple-100 text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Database,
      title: "Data Science",
      description:
        "Extracting insights from complex datasets and creating data-driven solutions for real-world problems.",
      color: "bg-blue-100 text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating modern, scalable web applications with cutting-edge technologies and best practices.",
      color: "bg-green-100 text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Designing and deploying scalable cloud solutions with focus on performance and reliability.",
      color: "bg-cyan-100 text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      description: "Exploring the frontiers of AI creativity and automation through generative models and LLMs.",
      color: "bg-yellow-100 text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Passionate about clean code, system design, and building robust software architectures.",
      color: "bg-teal-100 text-teal-600",
      bgColor: "bg-teal-50",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Interests & Passion</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Areas of technology and innovation that drive my curiosity and continuous learning journey
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-0 ${interest.bgColor}`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${interest.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <interest.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{interest.title}</h3>
                <p className="text-gray-600 leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">🏆</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">SIH 2024 Finalist</h4>
                <p className="text-gray-600">Smart India Hackathon - National Level Competition</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Sony Aitrios 2025</h4>
                <p className="text-gray-600">IIT Madras Sony Aitrios Hackathon Participant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
