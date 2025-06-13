"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowForm(false); // hide after submit (optional)
  };

  return (
    <div className="p-4">
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Open Form
        </button>
      )}

      {showForm && (
        <div className="relative mt-4 w-full max-w-sm rounded-lg border border-gray-300 bg-white p-6 shadow-md">
          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute right-3 top-3 text-gray-600 hover:text-red-500"
          >
            X
          </button>

        
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
