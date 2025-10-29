import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Farmer Support Program",
      description: "Distribution of agricultural equipment to farmers",
      date: "2024-01-15",
      image: "🌾",
      category: "Farmer Assistance"
    },
    {
      id: 2,
      title: "Student Scholarship Ceremony",
      description: "Awarding scholarships to deserving students",
      date: "2024-01-10",
      image: "🎓",
      category: "Education"
    },
    {
      id: 3,
      title: "Medical Health Camp",
      description: "Free health check-up camp in rural area",
      date: "2024-01-05",
      image: "🏥",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Community Food Distribution",
      description: "Essential goods distribution to families in need",
      date: "2023-12-20",
      image: "🛒",
      category: "Welfare"
    },
    {
      id: 5,
      title: "Hospital Partnership Signing",
      description: "New hospital partnership agreement",
      date: "2023-12-15",
      image: "📝",
      category: "Partnership"
    },
    {
      id: 6,
      title: "Educational Workshop",
      description: "Career guidance workshop for students",
      date: "2023-12-10",
      image: "📚",
      category: "Education"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Explore our activities and events through photos and stories from the field.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="bg-green-100 hover:bg-amber-100 text-stone px-4 py-2 rounded-lg font-semibold">All</button>
        <button className="bg-stone-200 hover:bg-stone-300 px-4 py-2 rounded-lg font-semibold transition">Farmer Assistance</button>
        <button className="bg-stone-200 hover:bg-stone-300 px-4 py-2 rounded-lg font-semibold transition">Education</button>
        <button className="bg-stone-200 hover:bg-stone-300 px-4 py-2 rounded-lg font-semibold transition">Healthcare</button>
        <button className="bg-stone-200 hover:bg-stone-300 px-4 py-2 rounded-lg font-semibold transition">Welfare</button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="card hover:shadow-xl transition duration-300">
            <div className="text-6xl text-center mb-4">{item.image}</div>
            <div className="text-center">
              <span className="bg-green-100 text-stone-800 px-2 py-1 rounded text-sm mb-2 inline-block">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-stone-200 hover:bg-stone-300 text-black px-8 py-3 rounded-lg font-semibold text-lg transition">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Gallery;