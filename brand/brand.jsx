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
          "BAIC independently developed its first Chinese sedan 'Jinggangshan'",
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
          "The BJ212 light off-road vehicle officially started mass production",
        side: "right",
      },
    ],
  },
  {
    period: "1983 - 1995",
    items: [
      {
        date: "1983",
        title: "Partnership",
        description:
          "Formed Beijing Jeep Automobile Corporation, partnering with American Motors Corporation",
        side: "left",
      },
    ],
  },
  {
    period: "1996 - 2001",
    items: [
      {
        date: "1996",
        title: "Joint Venture",
        description:
          "Beijing Benz-DaimlerChrysler Automobile Co., Ltd. with Hyundai Motor",
        side: "right",
      },
    ],
  },
  {
    period: "2002 - 2008",
    items: [
      {
        date: "2002",
        title: "Modern Era",
        description:
          "Beijing Hyundai Motor Company Co., Ltd. with Hyundai Motor",
        side: "left",
      },
      {
        date: "2005",
        title: "Partnership",
        description: "Cooperation with Mercedes-Benz",
        side: "right",
      },
    ],
  },
  {
    period: "2009 - 2012",
    items: [
      {
        date: "2009",
        title: "Innovation",
        description:
          "Acquired 100% stake in Saab intellectual property and production licenses",
        side: "left",
      },
      {
        date: "2011",
        title: "Milestone",
        description:
          "Acquired Saab's intellectual property license and the Phoenix platform awarded 100 billion yuan",
        side: "right",
      },
    ],
  },
  {
    period: "2013 - 2017",
    items: [
      {
        date: "2013",
        title: "BAIC International",
        description: "BAIC Intl. was officially established",
        side: "left",
      },
      {
        date: "2016",
        title: "Global Expansion",
        description:
          "BAIC officially launched sales in the Middle East, Latin America through Egyptian branch offices",
        side: "right",
      },
      {
        date: "2017",
        title: "New Manufacturing",
        description: "New off-road vehicle factory established in China",
        side: "left",
      },
    ],
  },
  {
    period: "2018 - 2020",
    items: [
      {
        date: "2018",
        title: "Technology",
        description:
          "Establish a joint venture with MAGNA and build up a R&D HUB and manufacturing",
        side: "right",
      },
    ],
  },
  {
    period: "2021 - Present",
    items: [
      {
        date: "2021",
        title: "Market Leader",
        description:
          "BJ40 awarded the National Off-Road Vehicle of the Year award. BAIC was awarded Top 10 brand for the future",
        side: "left",
      },
      {
        date: "2023",
        title: "Global Reach",
        description:
          "Reached 100,000 units exported overseas. Listed in Fortune Global 500",
        side: "right",
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
        className="relative mt-10 min-h-screen bg-cover bg-center flex items-center justify-center"
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
                65+
              </div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                162
              </div>
              <p className="text-gray-600">Fortune 500 Rank</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                100K+
              </div>
              <p className="text-gray-600">Units Exported</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                Global
              </div>
              <p className="text-gray-600">Market Presence</p>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
