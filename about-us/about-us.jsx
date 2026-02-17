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

          PT JIO Distribusi Indonesia (JDI) serves as the official and exclusive distributor of BAIC vehicles in Indonesia. In this role, JDI oversees the end-to-end management of the brand’s operations, including vehicle sales and distribution, comprehensive after-sales services, spare parts supply and logistics, as well as the development and training of certified after-sales service personnel. Through a strong commitment to operational excellence and customer satisfaction, JDI aims to support sustainable growth and strengthen BAIC’s presence in the Indonesian automotive market.

        </p>
      </div>
      <div className="bg-neutral-200 py-10   m-auto ">
        <img src="/LOGO JIO-Hitam.png" className="m-auto mb-4" width={200} alt="" />
        <p className="max-w-6xl m-auto md:px-8 px-5 text-neutral-600 font-light text-justify">

          JHL Internasional Otomotif (JIO) serves as the manufacturing entity for the BAIC brand in Indonesia, with a strategic vision to establish Indonesia as a key manufacturing hub for BAIC within the ASEAN market. The company is committed to supporting regional growth through localized production, advanced manufacturing capabilities, and the development of a strong automotive ecosystem aligned with BAIC’s global standards.
        </p>
      </div>

      {/* JHL Group Logo Slider */}
      <div className="bg-neutral-200 py-10 overflow-hidden ">

        <div className="relative ">
          <div
            className="flex items-center gap-16 w-max"
            style={{
              animation: "scrollLogos 20s linear infinite",
            }}
          >
            {/* First set of logos */}
            {[
              "LOGO DEWACOCO SH(1).png",
              "Logo Esports.ID.png",
              "MP MEDIA LOGO-NEW CO(2).png",
              "Vanilium_Logo_Gradient_Secondary(1).png",
              "logo dewacoco store sq ijo tua (1)(1).png",
              "logo mcm.png",
              "logo side.png",
              "logo-BOLASKOR.png",
              "logo-kabaroto-hires-2 (1).png",
              "logo-kamibijak-h-ori(1).png",
              "logo-rumahwaletindonesia-1.png",
            ].map((file, i) => (
              <img
                key={`logo-a-${i}`}
                src={`/jhl-group/${file}`}
                alt={file.replace(/\.[^.]+$/, "")}
                className="md:h-12 h-8  w-auto object-contain flex-shrink-0"
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              "LOGO DEWACOCO SH(1).png",
              "Logo Esports.ID.png",
              "MP MEDIA LOGO-NEW CO(2).png",
              "Vanilium_Logo_Gradient_Secondary(1).png",
              "logo dewacoco store sq ijo tua (1)(1).png",
              "logo mcm.png",
              "logo side.png",
              "logo-BOLASKOR.png",
              "logo-kabaroto-hires-2 (1).png",
              "logo-kamibijak-h-ori(1).png",
              "logo-rumahwaletindonesia-1.png",
            ].map((file, i) => (
              <img
                key={`logo-b-${i}`}
                src={`/jhl-group/${file}`}
                alt={file.replace(/\.[^.]+$/, "")}
                className="h-14 w-auto object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <Footer />
    </>
  );
}

export default App;
