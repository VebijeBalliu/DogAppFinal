'use client';

import React, { useState, useEffect } from "react";

interface Dog {
    id: number;
    name: string;
    image?: {
        url: string;
    };
    bred_for?: string;
    life_span?: string;
    temperament?: string;
}

const SearchPage: React.FC = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const res = await fetch("https://api.thedogapi.com/v1/breeds");
                if (!res.ok) throw new Error("Failed to fetch data");
                const data = await res.json();
                setDogs(data);
            } catch (error) {
                setError("Failed to load dog breeds. Please try again later.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (searchTerm !== "") {
            setLoading(true);
            fetchDogData();
        }
    }, [searchTerm]);

    const filteredDogs = dogs.filter((dog) =>
        dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = (dog: Dog) => {
        setSelectedDog(dog);
    };

    const closeModal = () => {
        setSelectedDog(null);
    };

    return (
        <section className="min-h-screen py-5 flex flex-col justify-center items-center bg-center bg-cover relative text-black" style={{ backgroundImage: 'url("/paw-print.jpeg")' }}>
            <h1 className="text-center text-white">Search for a dog breed</h1>
            <div className="text-center z-10 mb-4">
                <input
                    type="text"
                    className=""
                    placeholder="Enter dog breed"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        border: '2px solid #ccc',
                        transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#FFD700')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
                />
            </div>

            {loading ? (
                <p className="text-center text-white">Loading dog breeds...</p>
            ) : error ? (
                <p className="text-center text-red-600">{error}</p>
            ) : searchTerm && filteredDogs.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 z-10">
                    {filteredDogs.map((dog) => (
                        <div className="col mb-4" key={dog.id}>
                            <div className="card bg-dark text-white h-100" onClick={() => openModal(dog)}>
                                <img
                                    src={dog.image?.url || "doog.jpeg"}
                                    alt={dog.name}
                                    className="card-img-top"
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <h3 className="card-title text-xl font-semibold">{dog.name}</h3>
                                    <p className="card-text">Bred For: {dog.bred_for || "Unknown"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                searchTerm ? (
                    <p className="text-center text-white">No dog breed found. Start typing to search.</p>
                ) : (
                    <p className="text-center text-white">Please enter a dog breed to start the search.</p>
                )
            )}

            {selectedDog && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4 text-black">{selectedDog.name}</h2>
                        <img
                            src={selectedDog.image?.url || "doog.jpeg" }
                            alt={selectedDog.name}
                            className="w-full h-auto mb-4"
                        />
                        <div className="text-black">
                            <p className="text-lg text-black mb-2"><strong>Bred For:</strong> {selectedDog.bred_for || "Unknown"}</p>
                            <p className="text-lg  text-black mb-2"><strong>Life Span:</strong> {selectedDog.life_span || "Unknown"}</p>
                            <p className="text-lg text-black"><strong>Temperament:</strong> {selectedDog.temperament || "Unknown"}</p>
                        </div>
                        <button
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>

            )}
        </section>
    );
};

export default SearchPage;
