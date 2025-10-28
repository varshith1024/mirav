import React from 'react';

const News = () => {
  const newsItems = [
    
    {
      id: 1,
      title: "Partnership with 10 New Hospitals",
      date: "2025-10-20",
      category: "Partnership",
      excerpt: "Expanding our healthcare network with 10 new partner hospitals across the region.",
      image: "🏥"
    },
    {
      id: 2,
      title: "Student Scholarship Distribution",
      date: "2025-10-05",
      category: "Event",
      excerpt: "Successfully distributed scholarships to 200 deserving students for the academic year.",
      image: "🎓"
    },
    {
      id: 3,
      title: "Medical Camp in Rural Area",
      date: "2025-10-15",
      category: "Health Camp",
      excerpt: "Free medical camp organized in rural areas benefiting over 500 community members.",
      image: "❤️"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">News & Updates</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Stay updated with our latest activities, program launches, and community initiatives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((news) => (
          <div key={news.id} className="card hover:shadow-xl transition duration-300">
            <div className="flex items-start mb-4">
              <div className="text-4xl mr-4">{news.image}</div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-amber-50 text-stone-600 px-2 py-1 rounded text-sm">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm">{news.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <button className="text-stone-600 hover:text-stone-800 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-lg p-8 text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Updates</h2>
        <p className="text-gray-600 mb-6">
          Get the latest news and updates directly in your inbox.
        </p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-stone-400 hover:bg-stone-500 text-white px-5 py-3 rounded-r-lg font-semibold transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;