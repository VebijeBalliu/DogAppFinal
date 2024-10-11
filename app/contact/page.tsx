'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            try {
                await emailjs.sendForm('service_3dwwusb', 'template_bv14ddb', form.current, '6s6EcYY7A2uQ7SRmk');
                setSuccessMessage('Your message has been sent successfully!');
                setErrorMessage('');
                form.current.reset();
            } catch (error) {
                setErrorMessage('Failed to send your message. Please try again later.');
                setSuccessMessage('');
            }
        }
    };

    return (
        <section className="min-h-screen py-5 flex flex-col justify-center items-center bg-center bg-cover relative text-black" style={{ backgroundImage: 'url("/paw-print.jpeg")' }}>
            <div className="bg-grey-500 bg-opacity-50 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center text-white">Contact Us</h2>
                {successMessage && <p className="text-green-300 text-center mb-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label className="form-label block text-lg text-black font-medium">Name</label>
                        <input type="text" name="user_name" required className="form-input w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="form-label block text-lg text-black font-medium">Email</label>
                        <input type="email" name="user_email" required className="form-input w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="form-label block text-lg text-black font-medium">Message</label>
                        <textarea name="message" required className="form-textarea w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <input type="submit" value="Send" className="submit-button w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
