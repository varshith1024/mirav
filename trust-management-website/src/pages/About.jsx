import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Sri Ekadanta Charitable Trust</h1>
      <div className="card">
        <p className="text-lg mb-4">
          Sri Ekadanta Charitable Trust is a non-profit organization dedicated to empowering communities through various welfare programs.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          To provide comprehensive support to farmers, students, and underprivileged families through transparent and efficient welfare programs.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          A society where every individual has access to education, healthcare, and opportunities for growth.
        </p>
      </div>
    </div>
  );
};

export default About;