"use client"

export default function About() {
  const personalInfo = [
    { label: "Birthday:", value: "2 July 2005" },
    { label: "Website:", value: "www.example.com" },
    { label: "Phone:", value: "+917010438493" },
    { label: "City:", value: "Coimabtore,Tamil Nadu" },
    { label: "Age:", value: "20" },
    { label: "Degree:", value: "B.Tech CSE" },
    { label: "Email:", value: "jxiakash@outlook.com" },
    { label: "Freelance:  ", value: " Available" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Currently in my 3rd year of B.Tech, I'm on a journey of learning and creating. From writing code to building projects, I enjoy turning ideas into impactful solutions. Always exploring what’s next in tech.


          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-pink-200 rounded-lg overflow-hidden">
              <img src="/about-image.png" alt="Kelly Adams" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">B.Tech Student & Aspiring Full Stack Developer.</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
            I love exploring new technologies, building real-world projects, and continuously improving my skills in Full Stack Development, Machine Learning, and Data Science. I thrive on learning, creating, and solving meaningful problems.
            </p>

            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex">
                  <span className="font-semibold text-gray-700 w-20 flex-shrink-0">{info.label}</span>
                  <span className="text-gray-600">{info.value}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">
            Driven by curiosity and creativity, I love turning ideas into reality through code. Whether it's a personal project or a team effort, I aim to create user-friendly and impactful solutions that help people and businesses grow.


            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
