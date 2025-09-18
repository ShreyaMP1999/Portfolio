import React from 'react';
import { skills } from '../data/mock';
import { Code, Database, Cloud, Settings, Cpu, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills["Programming Languages"],
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Web Technologies",
      icon: Settings,
      skills: skills["Web Technologies"],
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      title: "Databases",
      icon: Database,
      skills: skills["Databases"],
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: skills["Cloud & DevOps"],
      color: "bg-orange-50 text-orange-600 border-orange-200"
    },
    {
      title: "Tools & Platforms",
      icon: Cpu,
      skills: skills["Tools & Platforms"],
      color: "bg-gray-50 text-gray-600 border-gray-200"
    },
    {
      title: "AI/ML & Data",
      icon: BarChart3,
      skills: skills["AI/ML & Data"],
      color: "bg-red-50 text-red-600 border-red-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-full font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default border border-gray-200 hover:border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Highlight */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Core Competencies
            </h3>
            <p className="text-gray-600">
              Areas where I excel and continue to grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Full Stack Development</h4>
              <p className="text-sm text-gray-600">End-to-end web application development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI/ML Integration</h4>
              <p className="text-sm text-gray-600">Intelligent systems and data analysis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Database Design</h4>
              <p className="text-sm text-gray-600">Scalable data architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud Deployment</h4>
              <p className="text-sm text-gray-600">AWS and modern DevOps practices</p>
            </div>
          </div>
        </div>

        {/* Learning & Growth */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI/ML techniques, 
              cloud-native architectures, and emerging web technologies to stay at the forefront of innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;