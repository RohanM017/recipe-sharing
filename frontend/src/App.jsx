import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Header */}
      <header className="text-4xl font-bold text-blue-600 mb-6">Recipe Sharing Platform</header>
      
      {/* Hero Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Welcome to the Recipe Sharing Platform!</h2>
        <p className="text-gray-600 mt-2">
          A web-based application designed to enhance your cooking experience. Create, view, edit, and share recipes with others in real time.
        </p>
      </section>

      {/* Features Section */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Feature title="Efficient Recipe Management" description="Create, update, and delete recipes seamlessly." />
        <Feature title="Secure User Access" description="User authentication for secure access." />
        <Feature title="Real-Time Collaboration" description="Edit and update recipes with others in real time." />
        <Feature title="User-Friendly Interface" description="Intuitive design using React and Bootstrap for easy navigation." />
        <Feature title="Robust Backend" description="Secure operations with Node.js and MongoDB." />
      </section>

      {/* Footer */}
      <footer className="mt-10 text-gray-500">&copy; 2025 Recipe Sharing Platform</footer>
    </div>
  );
};

const Feature = ({ title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <h3 className="text-xl font-semibold text-blue-500">{title}</h3>
    <p className="text-gray-600 mt-1">{description}</p>
  </div>
);

export default App;
