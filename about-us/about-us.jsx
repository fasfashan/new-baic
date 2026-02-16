/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import logo from "../src/assets/logo.svg";
import logoJDI from "../src/assets/logo-jdi-black.png";
import Footer from "../src/components/Footer";
import CTA from "../src/components/cta";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";

function App() {
  return (
    <>
      <Header />
      <ButtonChat />
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4"
        style={{
          backgroundImage: "url('/new-bg-for-all.jpg')",
          backgroundPosition: "center 20%",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl text-center text-white px-4">
          <p className="text-sm font-semibold tracking-widest mb-3">ABOUT US</p>
          <h1 className="md:text-3xl text-2xl font-bold mb-4">
            Driving Innovation, Building Trust
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Learn more about BAIC and our partners in Indonesia — our heritage,
            our mission, and our commitment to delivering world-class vehicles
            and customer experiences.
          </p>
        </div>
      </div>
      <div className="bg-neutral-200 py-10   m-auto ">
        <img src="/JHL-Group-logo.png" className="m-auto mb-4" width={200} alt="" />
        <p className="max-w-6xl m-auto md:px-8 px-5 text-neutral-600 font-light text-justify">
          <span className="text-black font-medium">JHL Group</span>
          <br />
          JHL Group is a national company with an international standard
          quality. We are a company that provide the best properties and
          satisfying services to improve the quality of life. JHL Group is a
          proud parent company to various business lines from property
          development, hospitality, mining, lifestyle, wellness, automotive and
          media. Our vision and people are the key ingredients for JHL Group’s
          track record of success.
        </p>
      </div>
      <div className="bg-neutral-200 py-10   m-auto ">
        <img src={logoJDI} className="m-auto mb-4" width={200} alt="" />
        <p className="max-w-6xl m-auto md:px-8 px-5 text-neutral-600 font-light text-justify">
          <span className="text-black font-medium">JDI</span>
          <br />
          PT JIO Distribusi Indonesia (JDI) serves as the official and exclusive distributor of BAIC vehicles in Indonesia. In this role, JDI oversees the end-to-end management of the brand’s operations, including vehicle sales and distribution, comprehensive after-sales services, spare parts supply and logistics, as well as the development and training of certified after-sales service personnel. Through a strong commitment to operational excellence and customer satisfaction, JDI aims to support sustainable growth and strengthen BAIC’s presence in the Indonesian automotive market.
          <br />
          <br />
          <span className="text-black font-medium">JIO</span>
          <br />
          JHL Internasional Otomotif (JIO) serves as the manufacturing entity for the BAIC brand in Indonesia, with a strategic vision to establish Indonesia as a key manufacturing hub for BAIC within the ASEAN market. The company is committed to supporting regional growth through localized production, advanced manufacturing capabilities, and the development of a strong automotive ecosystem aligned with BAIC’s global standards.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default App;
