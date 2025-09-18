import React from 'react';
import { experience } from '../data/mock';
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through impactful roles in technology and consulting
          </p>
        </div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div 
              key={job.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {job.company}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      <Briefcase size={16} />
                      {job.position}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      {job.duration}
                    </div>
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {job.type}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium hover:bg-blue-100 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Master of Science in Computer Science
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Illinois Institute of Technology
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  2023 - May 2025
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  Chicago, IL
                </div>
                <div className="font-semibold text-gray-700">
                  GPA: 3.5/4.0
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Bachelor of Engineering in Computer Science
                  </h4>
                  <p className="text-blue-600 font-medium">
                    N. B. Navale Sinhgad College of Engineering
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  2017 - May 2021
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  India
                </div>
                <div className="font-semibold text-gray-700">
                  GPA: 3.8/4.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;