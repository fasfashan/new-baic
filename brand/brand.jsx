import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";
import MilestoneTimeline from "../src/components/MilestoneTimeline";
const timelineData = [
  {
    period: "1958 - 1965",
    items: [
      {
        date: "1958",
        title: "Inception",
        description:
          "BAIC independently develops China's first sedan 'Jinggangshan'",
        side: "left",
      },
    ],
  },
  {
    period: "1966 - 1982",
    items: [
      {
        date: "1966",
        title: "First Production",
        description:
          "The BJ212 China's first off-road vehicle is officially placed into production. The BJ130 successfully passes the trial production.",
        side: "right",
      },
    ],
  },
  {
    period: "1983 - 1995",
    items: [
      {
        date: "1983",
        title: "First Automotive Joint Venture",
        description:
          "Beijing Jeep Corporation is established, China's first automotive JV.",
        side: "left",
      },
    ],
  },
  {
    period: "1996 - 2001",
    items: [
      {
        date: "1996",
        title: "Foton Motor Establishment",
        description: "Foton Motor Co., Ltd. is established.",
        side: "right",
      },
    ],
  },
  {
    period: "2002 - 2008",
    items: [
      {
        date: "2002",
        title: "Beijing Hyundai",
        description:
          "Beijing Hyundai Motor Co., Ltd. is officially established with Hyundai Motor.",
        side: "left",
      },
      {
        date: "2003",
        title: "Beijing Benz",
        description:
          "Beijing Benz Automotive Co., Ltd. is officially established with DaimlerChrysler.",
        side: "right",
      },
    ],
  },
  {
    period: "2009 - 2012",
    items: [
      {
        date: "2009",
        title: "Saab Acquisition",
        description:
          "Acquires Saab intellectual property rights and annual sales revenue exceeds 100 billion yuan.",
        side: "left",
      },
    ],
  },
  {
    period: "2013 - 2017",
    items: [
      {
        date: "2013",
        title: "BAIC International & Fortune 500",
        description:
          "BAIC INTL is officially established. BAIC Group ranked Fortune Global 500.",
        side: "right",
      },
      {
        date: "2016",
        title: "Fujian Benz Acquisition",
        description:
          "BAIC Motor officially acquires 35% shares of Fujian Benz.",
        side: "left",
      },
      {
        date: "2017",
        title: "Presidential Parade Car",
        description:
          "BJ80 off-road vehicle serves as the parade inspection car for the Chinese president.",
        side: "right",
      },
    ],
  },
  {
    period: "2018 - 2020",
    items: [
      {
        date: "2018",
        title: "MAGNA Joint Venture",
        description:
          "Establish a joint venture with MAGNA. Build a high-end BEV R&D and manufacturing base. Ranked 124th in the Fortune Global 500.",
        side: "left",
      },
      {
        date: "2019",
        title: "ARCFOX Debut",
        description:
          "High-end new energy brand ARCFOX of BAIC makes debut at Geneva Motor Show.",
        side: "right",
      },
    ],
  },
  {
    period: "2021 - Present",
    items: [
      {
        date: "2025",
        title: "Fortune Global 500",
        description:
          "Listed in Fortune Global 500 for thirteen consecutive years.",
        side: "left",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative  min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg-book-a-test-drive.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-bold">
          Our Journey Through Time
        </h1>
      </div>

      <MilestoneTimeline data={timelineData} />
      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto md:px-8 px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                9
              </div>
              <p className="text-gray-600">Global KD Factories</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                90+
              </div>
              <p className="text-gray-600">Countries and Areas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                290
              </div>
              <p className="text-gray-600">Sales Networks</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                49+
              </div>
              <p className="text-gray-600">Deeply Layout of ARCFOX</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
