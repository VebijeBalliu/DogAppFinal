

'use client';

import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <section
            className="min-h-screen py-8 px-4 flex flex-col justify-center items-center"
            style={{
                backgroundImage: 'url("/paw-print.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-white bg-opacity-80 max-w-4xl text-center p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to our Online Dog Breed Shop! We are dedicated to helping you find the perfect breed to match your lifestyle and family. Our mission is to provide you with detailed information about various dog breeds, their characteristics, and how to care for them.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Whether you’re looking for a playful puppy, a loyal companion, or a specific breed for your lifestyle, we have you covered. Our extensive breed profiles ensure you make informed decisions when choosing the right dog for you.
                </p>
                
                <p className="text-lg text-gray-700">
                    Thank you for trusting us in your journey to find the perfect dog breed. Your satisfaction and your future pup's happiness are our top priorities!
                </p>
                <img
                    src="/desk.jpeg"
                    alt="Various dog breeds"
                    className="my-8 w-full h-auto object-cover rounded-lg shadow-md"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Our mission is to connect dog lovers with the right breed by offering comprehensive guides and resources. We strive to educate prospective dog owners about breed characteristics, care requirements, and the joys of dog ownership.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
