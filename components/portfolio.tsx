"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web App", "Dashboard", "E-commerce", "Mobile"]

  const projects = [
    {
      id: 1,
      title: "Manufacturer Dashboard",
      category: "Dashboard",
      image: "/erp.jpeg",
      description:
        "A comprehensive dashboard for manufacturers with analytics, order management, and real-time data visualization.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Chart.js"],
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Online Ticket Reservation System",
      category: "Web App",
      image: "/ticket.png",
      description:
        "A modern ticket booking platform with search, booking, and management features using Next.js for optimal performance.",
      technologies: ["Next.js", "React.js", "Express.js", "MongoDB"],
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Spacelance - Freelancing Platform",
      category: "Web App",
      image: "/freelancing.png",
      description:
        "A platform connecting freelancers with clients, featuring project posting, bidding system, and seamless collaboration tools.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Clutchin - Food Delivery Platform",
      category: "E-commerce",
      image: "/clutchin.png",
      description:
        "An e-commerce platform for food delivery from restaurants to customers with efficient order management and delivery tracking.",
      technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway"],
      githubUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Showcasing my recent projects in full-stack development, data science, and modern web technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full ${
                  activeFilter === filter
                    ? "bg-teal-500 hover:bg-teal-600 text-white"
                    : "border-teal-500 text-teal-500 hover:bg-teal-50"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-teal-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex justify-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 text-sm rounded-full">{project.category}</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Interested in working together?</p>
          <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
