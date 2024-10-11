'use client';

import React from 'react';
import Link from 'next/link';
import './globals.css';

const HomePage: React.FC = () => {
  return (
    <section
      className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center relative text-white"
      style={{
        backgroundImage: 'url("/paw-print.jpeg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        

      }}
    >
      

      <div className="hero-content z-10 text-center space-y-8">
        <h1 className="text-6xl font-bold  text-black tracking-wide animate-fadeInUp">
          Welcome to Dog Paradise
        </h1>
        <p className="text-xl max-w-lg mx-auto leading-relaxed animate-fadeInUp delay-100">
          Discover the best dog breeds and all the information you need for your canine companions.!
        </p>
        <div className="flex justify-center space-x-6 mt-6 animate-fadeInUp delay-200">
          <Link href="/dog" className="btn-primary">
            Explore Breeds
          </Link>
          <Link href="/search" className="btn-secondary">
            Look it Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
