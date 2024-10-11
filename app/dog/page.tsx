// DogList.tsx

'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Dog {
    id: number;
    name: string;
    image?: {
        url: string;
    };
    bred_for?: string;
}

const DogList: React.FC = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const res = await fetch("https://api.thedogapi.com/v1/breeds");
                const data = await res.json();
                setDogs(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDogData();
    }, []);

    const limitedDogs = dogs.slice(0, 3);

    return (
        <section
            className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center relative text-white"
            style={{
                backgroundImage: 'url("/paw-print.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}
        >
           <h1 className="text-center text-white">List of dogs</h1>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-4">
                {limitedDogs.map((dog) => (
                    <div className="col mb-4" key={dog.id}>
                        
                            <div className="card bg-dark text-white h-100">
                                <img
                                    src={dog.image?.url || "doog.jpeg"}
                                    alt={dog.name}
                                    className="card-img-top"
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{dog.name}</h3>
                                    <p className="card-text">Bred For: {dog.bred_for || "Unknown"}</p>
                                </div>
                            </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DogList;
