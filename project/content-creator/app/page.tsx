'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6 bg-cover bg-center" style={{ backgroundImage: "url(image.jpg)" }}>
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900">VyapArI</h1>
        <p className="text-red mt-4 text-lg">
          Create high-quality AI-generated content instantly with ease.
        </p>
        <button 
          onClick={() => router.push('/dashboard')}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </div>
      
      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Fast & Efficient</h3>
          <p className="text-gray-600">Generate AI-powered content in seconds.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Customizable Templates</h3>
          <p className="text-gray-600">Choose from various templates for your needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Seamless Integration</h3>
          <p className="text-gray-600">Easily integrate with your existing workflow.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">"This tool has transformed our content creation process!"</p>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-6 text-gray-600">
        &copy; 2025 AI Generator. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
