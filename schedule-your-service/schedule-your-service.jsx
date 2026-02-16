import { useState, useEffect, useRef } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import "../src/index.css";
import {
  getProvinces,
  getCitiesByProvince,
  getDealersByCity,
} from "../src/utils/dealerData";

// Partner inquiry WhatsApp number
const partnerInquiryNumber = "6281234567890";

function App() {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [dealer, setDealer] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Mock API call to save lead
  const saveLead = async (leadData) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock success (90% success rate for demo)
        if (Math.random() > 0.1) {
          console.log("Lead saved:", leadData);
          resolve({ success: true, id: Date.now() });
        } else {
          reject(new Error("Failed to save inquiry. Please try again."));
        }
      }, 1500);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const leadData = {
      fullname,
      phoneNumber,
      email,
      province,
      city,
      dealer,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      // Save lead data
      await saveLead(leadData);

      // Show success message and reset form
      setShowSuccess(true);
      setFullname("");
      setPhoneNumber("");
      setEmail("");
      setProvince("");
      setCity("");
      setDealer("");
      setSubject("");
      setMessage("");
      setIsLoading(false);

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message || "An error occurred. Please try again.");
    }
  };

  // Form validation
  const isFormComplete = () => {
    return (
      fullname.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      province.trim() !== "" &&
      city.trim() !== "" &&
      dealer.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim() !== ""
    );
  };

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4"
        style={{ backgroundImage: "url('/bg-book-a-test-drive.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Form Card */}
        <div className="relative mt-20 z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Schedule your service
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Fill out the form below and our team will get in touch with you
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Your Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                placeholder="e.g. John Doe"
                type="text"
                name="fullname"
                id="fullname"
              />
            </div>

            {/* Phone Number and Email - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Your Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Phone Number
                </label>
                <input
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                  placeholder="e.g. +62 812 3456 7890"
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              {/* Your Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                  placeholder="e.g. johndoe@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Province and City - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Province */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Province
                </label>
                <select
                  value={province}
                  onChange={(e) => {
                    setProvince(e.target.value);
                    setCity("");
                    setDealer("");
                  }}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                  name="province"
                  id="province"
                >
                  <option value="" disabled>
                    Select Province
                  </option>
                  {getProvinces().map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setDealer("");
                  }}
                  disabled={!province}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  name="city"
                  id="city"
                >
                  <option value="" disabled>
                    {province ? "Select City" : "Select Province First"}
                  </option>
                  {province &&
                    getCitiesByProvince(province).map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Dealer */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Dealer
              </label>
              <select
                value={dealer}
                onChange={(e) => setDealer(e.target.value)}
                disabled={!city}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                name="dealer"
                id="dealer"
              >
                <option value="" disabled>
                  {city ? "Select Dealer" : "Select City First"}
                </option>
                {city &&
                  getDealersByCity(city).map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} - {d.serviceCode}
                    </option>
                  ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                placeholder="e.g. Partnership Inquiry"
                type="text"
                name="subject"
                id="subject"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                placeholder="Tell us more about your interest..."
                name="message"
                id="message"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`p-3 w-full bg-transparent border-2 border-black text-black font-semibold rounded-lg transition-all ${!isFormComplete() || isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
                }`}
              disabled={!isFormComplete() || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Loading...
                </div>
              ) : (
                "Send Inquiry"
              )}
            </button>

            {/* Error Message */}
            {errorMessage && (
              <div
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                role="alert"
              >
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Success Message */}
            {showSuccess && (
              <div
                className="p-4 bg-green-50 border border-green-200 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800">
                      Thank you! Your inquiry has been submitted successfully.
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      We will contact you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
