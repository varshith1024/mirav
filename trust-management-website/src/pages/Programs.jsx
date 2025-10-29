import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Farmer Assistance Program",
      description: "Help farmers with essential support like subsidies, equipment, and healthcare.",
      icon: "👨‍🌾",
      you_can_contribute_to: [
        "Subsidies for seeds and fertilizers",
        "Equipment and machinery support",
        "Healthcare coverage",
        "Insurance coverage",
        
      ],
      your_support_benefits: "Farmers with valid agricultural land documents"
    },
    {
      id: 2,
      title: "Student Sponsorships",
      description: "Empower bright students by funding their education and mentorship programs.",
      icon: "🎓",
      you_can_contribute_to: [
        "Tuition fee sponsorship",
        "Book and stationery ",
        "Mentorship programs",
        "Career guidance"
      ],
      your_support_benefits: "Students from economically weaker sections"
    },
    {
      id: 3,
      title: "Family Welfare Scheme",
      description: "Help underprivileged families access essential needs & healthcare.",
      icon: "🏠",
      you_can_contribute_to: [
        "Food and essentials",
        "Healthcare assistance",
        "Educational aid for children",
        "Emergency medical support"
      ],
      your_support_benefits: "Families below poverty line"
    },
    {
      id: 4,
      title: "Healthcare Concessions",
      description: "Support patients who struggle to afford medical care and treatments",
      icon: "🏥",
      you_can_contribute_to: [
        "Subsidized medical consultations",
        "Diagnostic tests and lab support",
        "Medicine and treatment cost coverage",
        "Hospital partnerships for discounted care"
      ],
      your_support_benefits: "Patients from economically weaker and rural backgrounds"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Our Programs</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Discover our comprehensive welfare programs designed to support farmers, students, and families in need.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mb-12">
        {programs.map((program) => (
          <div key={program.id} className="card">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">{program.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-stone-600">You can contribute to:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {program.you_can_contribute_to.map((you_can_contribute_to, index) => (
                  <li key={index}>{you_can_contribute_to}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-stone-600">Your support benefits:</h4>
              <p className="text-gray-600">{program.your_support_benefits}</p>
            </div>
            
            <Link 
              to="/register" 
              className="btn-primary inline-block text-center w-full"
            >
              Support
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-green-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Apply?</h2>
        <p className="text-gray-600 mb-6">
          Register today and get the support you need. Our team will guide you through the application process.
        </p>
        <Link 
          to="/register" 
          className="bg-green-400 hover:bg-green-400 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
        >
          Start Registration
        </Link>
      </div>
    </div>
  );
};

export default Programs;