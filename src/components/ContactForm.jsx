import React, { useState } from "react";
import { companyEmail, companyPhoneNo } from "../utils/constants";
import { POST_ENQUIRY_FORM } from "../utils/urls";
import { toast } from "react-toastify";
import axios from "axios";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    projectDescription: "",
    services: [],
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormValues((prevValues) => {
      const updatedServices = checked
        ? [...prevValues.services, value]
        : prevValues.services.filter((service) => service !== value);

      return { ...prevValues, services: updatedServices };
    });
  };

  const handleRadioChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      budget: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await toast.promise(
        axios.post(POST_ENQUIRY_FORM, new URLSearchParams({
          ...formValues,
        }).toString()),
        {
          pending: 'Submitting...',
          success: 'Enquiry submitted successfully!',
          error: 'Error submitting form',
        }
      );
      // Optionally, reset form values or close modal after submission
      setFormValues({
        fullName: "",
        email: "",
        companyName: "",
        companyWebsite: "",
        projectDescription: "",
        services: [],
        budget: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission error.");
    }
  };
  

  return (
<div
      className={`min-h-fit flex items-center justify-center p-6 `}
    >
      <div className="w-full max-w-7xlxl mx-auto grid md:grid-cols-2 gap-1 bg-black rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Side - Contact Information */}
        <div className="p-10 flex flex-col justify-center md:items-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">{companyEmail}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">{companyPhoneNo}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">Kochi, Kerala, IN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 bg-black">
          <div className="absolute top-4 right-4">
            <button 
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-black transition"
            >
            </button>
          </div>

          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          
         
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          value={formValues.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring focus:ring-gray-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring focus:ring-gray-500"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="companyName"
          value={formValues.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring focus:ring-gray-500"
          
        />
        <input
          type="url"
          name="companyWebsite"
          value={formValues.companyWebsite}
          onChange={handleChange}
          placeholder="Company Website"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring focus:ring-gray-500"
          
        />
      </div>

      <textarea
        name="projectDescription"
        value={formValues.projectDescription}
        onChange={handleChange}
        placeholder="Tell us about your project..."
        className="w-full p-3 h-32 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring focus:ring-gray-500"
        
      ></textarea>

      <div>
        <p className="text-sm font-semibold mb-3">Services Needed</p>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            "Full site Design + Development",
            "Figma-to-Full Stack",
            "Landing Page Build",
            "Monthly Support",
          ].map((service, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={service}
                checked={formValues.services.includes(service)}
                onChange={handleCheckboxChange}
                className="text-gray-500 bg-gray-800 border-gray-700 rounded focus:ring focus:ring-gray-500"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-3">Project Budget (in Rs)</p>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            { id: "10-20k", label: "10-20k" },
            { id: "20-30k", label: "20-30k" },
            { id: "30-50k", label: "30-50k" },
            { id: ">50", label: ">50" },
          ].map((budget, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input
                type="radio"
                name="budget"
                value={budget.id}
                checked={formValues.budget === budget.id}
                onChange={handleRadioChange}
                className="text-gray-500 bg-gray-800 border-gray-700 focus:ring focus:ring-gray-500"
              />
              <span>{budget.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-white text-black font-bold rounded-md hover:bg-gray-700 transition mt-4 text-xl md:text-4xl"
      >
        Submit Project Inquiry
      </button>
    </form>
        </div>
      </div>
    </div>
    
  );
};

export default ContactForm;
