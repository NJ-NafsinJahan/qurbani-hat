"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Congrats Booking Successful!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="max-w-xl w-full p-6 bg-base-100 shadow-md rounded-2xl my-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Book This Livestock
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          required
        />

        <button
          type="submit"
          className="btn bg-[#4D833D] btn-block rounded-2xl text-amber-50 text-xl m-3"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
