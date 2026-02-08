import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import "../src/index.css";

// Job positions data
const jobPositions = [
  {
    id: 1,
    position: "Staff",
    department: "Finance & Accounting",
    location: "Kota Tangerang",
  },
  {
    id: 2,
    position: "Supervisor",
    department: "Part",
    location: "Kab. Tangerang",
  },
  {
    id: 3,
    position: "Head of Department",
    department: "Sales",
    location: "Kab. Purwakarta",
  },
  {
    id: 4,
    position: "Specialist",
    department: "Dealer Network Development",
    location: "Free Text",
  },
];

function Career() {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Department");
  const [selectedCity, setSelectedCity] = useState("All city");

  // Filter job positions based on selected department and city
  const filteredJobs = jobPositions.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "All Department" ||
      job.department === selectedDepartment;
    const matchesCity =
      selectedCity === "All city" || job.location === selectedCity;
    return matchesDepartment && matchesCity;
  });

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative  min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/new-bg-for-all.jpg')",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-bold">
          Careers
        </h1>
      </div>

      {/* Filters and Job Listings */}
      <div className=" py-16 px-4">
        <div className="max-w-6xl px-5 mx-auto">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
              >
                <option>All Department</option>
                <option>Finance & Accounting</option>
                <option>Part</option>
                <option>Sales</option>
                <option>Dealer Network Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
              >
                <option>All city</option>
                <option>Kota Tangerang</option>
                <option>Kab. Tangerang</option>
                <option>Kab. Purwakarta</option>
                <option>Free Text</option>
              </select>
            </div>
          </div>

          {/* Available Positions Count */}
          <p className="text-gray-600 mb-6">
            {filteredJobs.length} positions available
          </p>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border p-4 md:p-6 border-neutral-300 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
                    <div className="flex-1">
                      <p className="text-xs text-red-600 font-semibold mb-1">
                        Position
                      </p>
                      <p className="text-base font-bold text-gray-800">
                        {job.position}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-red-600 font-semibold mb-1">
                        Department
                      </p>
                      <p className="text-base font-bold text-gray-800">
                        {job.department}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-red-600 font-semibold mb-1">
                        Location
                      </p>
                      <p className="text-base font-bold text-gray-800">
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <div className="md:flex-shrink-0">
                    <a
                      href="/career/detail.html"
                      className="block px-6 py-3 w-full md:w-auto border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all font-semibold text-center whitespace-nowrap"
                    >
                      See detail
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No positions available matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Career;
