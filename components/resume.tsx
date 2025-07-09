"use client"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Resume</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enthusiastic and solution-oriented Computer Science undergraduate with hands-on experience in full-stack
            development and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Summary */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Summary</h3>
            <div className="relative pl-8 border-l-2 border-teal-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">JEI AKASH</h4>
              <p className="text-gray-600 mb-4 italic">
                Software Developer Intern @ Ninjacart | Software Design, Web Engineering
              </p>
              <p className="text-gray-600 mb-4">
                Enthusiastic and solution-oriented Computer Science undergraduate at Amrita Vishwa Vidyapeetham with
                hands-on experience in full-stack development and data science. Proficient in building scalable web
                applications using React.js, Node.js, Express.js, and PostgreSQL, with additional exposure to Dart and
                MongoDB.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Coimbatore South</li>
                <li>• jxiakash@outlook.com</li>
                <li>• linkedin.com/in/jei-akash-5b6532291/</li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="text-2xl font-bold text-gray-800 mb-8 mt-12">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">B.TECH COMPUTER SCIENCE ENGINEERING</h4>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm inline-block mb-2">2023 - 2027</div>
                <p className="text-gray-600 mb-2 italic">Amrita Vishwa Vidyapeetham</p>
                <p className="text-gray-600">
                  Currently pursuing Bachelor of Technology in Computer Science Engineering with focus on full-stack
                  development, data science, and software engineering principles.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">HIGH SCHOOL DIPLOMA</h4>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm inline-block mb-2">2009 - 2023</div>
                <p className="text-gray-600 mb-2 italic">CS Academy</p>
                <p className="text-gray-600">
                  Completed high school education with strong foundation in mathematics and computer science.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold text-gray-800 mb-8 mt-12">Certifications</h3>
            <div className="space-y-4">
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800">Introduction to Machine Learning</h4>
              </div>
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800">Web Development</h4>
              </div>
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800">Git/GitHub & Version Control</h4>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">SOFTWARE DEVELOPER INTERN</h4>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm inline-block mb-2">
                  May 2025 - Present
                </div>
                <p className="text-gray-600 mb-4 italic">Ninjacart, Bengaluru, India</p>
                <p className="text-gray-600 mb-4">
                  Software Developer Intern at Ninjacart, building impactful and scalable tech solutions that support
                  real-world supply chain innovation.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Building scalable web applications using modern technologies</li>
                  <li>• Working on data science projects to optimize supply chain operations</li>
                  <li>• Collaborating with cross-functional teams to deliver innovative solutions</li>
                  <li>• Contributing to real-world supply chain innovation through technology</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <h3 className="text-2xl font-bold text-gray-800 mb-8 mt-12">Key Projects</h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">TICKET RESERVATION WEBSITE</h4>
                <p className="text-gray-600">
                  A ticket reservation system that allows users to search, book, and manage tickets efficiently,
                  leveraging modern web technologies like Next.js for performance and scalability.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">FREELANCING WEBSITE</h4>
                <p className="text-gray-600">
                  Developed a platform that connects freelancers with clients, enabling seamless project posting,
                  bidding, and collaboration.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">ERP PLATFORM</h4>
                <p className="text-gray-600">
                  Modern ERP is a blockchain-based system that enhances security, transparency, and automation in
                  business operations.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">E-COMMERCE PLATFORM</h4>
                <p className="text-gray-600">
                  An e-commerce platform which is used to transport food from hotels to customers with efficient
                  delivery management.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <h3 className="text-2xl font-bold text-gray-800 mb-8 mt-12">Achievements</h3>
            <div className="space-y-4">
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800">SIH 2024 Finalist</h4>
                <p className="text-gray-600">Smart India Hackathon 2024</p>
              </div>
              <div className="relative pl-8 border-l-2 border-teal-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-800">Sony Aitrios Hackathon 2025</h4>
                <p className="text-gray-600">IIT Madras Sony Aitrios Hackathon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
