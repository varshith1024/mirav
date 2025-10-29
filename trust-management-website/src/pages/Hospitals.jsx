import React from 'react';

const Hospitals = () => {
  const hospitals = [
    {
      id: 1,
      name: "Hegde Hospital",
      type: "Multi-specialty",
      address: "Madhapur",
      services: ["Artifical Insemination", "Lab tests", "Natural Cycle IVF", "ART Consultant"],
      contact: "04048216790",
      hours: "24/7"
    },
    {
      id: 2,
      name: "Aster Prime Hospital",
      type: "Multi-Speciality",
      address: "Ameerpet",
      services: ["ent", "Otoplasty", "Cysts"],
      contact: "04049172962",
      hours: "24/7"
      
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Partner Hospitals</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Our network of partner hospitals provides quality healthcare services with special concessions for registered beneficiaries.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-stone-800">{hospital.name}</h3>
              <span className="bg-stone-100 text-black px-3 py-1 rounded-full text-sm">
                {hospital.type}
              </span>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Address:</span>
                <p className="text-gray-600">{hospital.address}</p>
              </div>
              
              <div>
                <span className="font-semibold">Services:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {hospital.services.map((service, index) => (
                    <span key={index} className="bg-green-50 text-stone-600 px-2 py-1 rounded text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold">Contact:</span>
                  <p className="text-gray-600">{hospital.contact}</p>
                </div>
                <div>
                  <span className="font-semibold">Hours:</span>
                  <p className="text-gray-600">{hospital.hours}</p>
                </div>
              </div>
              
              <div className="bg-stone-200 p-3 rounded-lg">
                <span className="font-semibold text-black">Concessions:</span>
                <p className="text-stone-600">{hospital.concessions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">How to Avail Hospital Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 text-stone rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Get Registered</h3>
            <p className="text-gray-600">Complete your registration and receive your beneficiary ID</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 text-stone rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Visit Hospital</h3>
            <p className="text-gray-600">Visit any partner hospital with your registration ID</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 text-stone rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Receive Services</h3>
            <p className="text-gray-600">Get quality healthcare with applicable concessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;