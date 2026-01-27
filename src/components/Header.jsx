import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import BigMenu from "./BigMenu";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [isBigMenuOpen, setIsBigMenuOpen] = useState(false);
  const [isCustomerCareOpen, setIsCustomerCareOpen] = useState(false);
  const [isPartsAccessoriesOpen, setIsPartsAccessoriesOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleVehicleMouseEnter = () => {
    // Clear any existing timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }

    setIsBigMenuOpen(true);
    setIsCustomerCareOpen(false);
    setIsPartsAccessoriesOpen(false);
    setIsDealerOpen(false);
    setIsAboutUsOpen(false);
  };

  const handleVehicleMouseLeave = () => {
    // Set a delay before closing
    const timeout = setTimeout(() => {
      setIsBigMenuOpen(false);
    }, 150);
    setCloseTimeout(timeout);
  };

  const handleBigMenuMouseEnter = () => {
    // Clear timeout when entering BigMenu
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleBigMenuMouseLeave = () => {
    // Close immediately when leaving BigMenu
    setIsBigMenuOpen(false);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  // Handle scroll behavior - Show/hide header and change background
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Set scrolled state based on scroll position
        setIsScrolled(currentScrollY > 50);

        // Show header when scrolling up, hide when scrolling down
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header and close all menus
          setIsVisible(false);
          setIsBigMenuOpen(false);
          setIsCustomerCareOpen(false);
          setIsPartsAccessoriesOpen(false);
          setIsDealerOpen(false);
          setIsAboutUsOpen(false);
          if (closeTimeout) {
            clearTimeout(closeTimeout);
            setCloseTimeout(null);
          }
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setIsVisible(true);
        }

        // Always show header at the top
        if (currentScrollY < 50) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, closeTimeout]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 items-center py-4 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-6xl md:px-6 px-5 m-auto flex justify-between items-center">
          {/* Logo & Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-5 ${isScrolled ? "text-black" : "text-white"}`}
          >
            <a href="/">
              <img className="h-6" src={logo} alt="Logo" />
            </a>
            <ul className="flex gap-4 tracking-wide items-center text-sm">
              {/* Vehicle Menu */}
              <li
                className="relative"
                onMouseEnter={handleVehicleMouseEnter}
                onMouseLeave={handleVehicleMouseLeave}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  Model
                  {isBigMenuOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </li>

              {/* Customer Care Menu */}
              <li
                className="relative group"
                onMouseEnter={() => setIsCustomerCareOpen(true)}
                onMouseLeave={() => setIsCustomerCareOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  Customer Care
                  {isCustomerCareOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isCustomerCareOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/schedule-your-service/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Schedule your service
                      </a>
                      <a
                        href="/aftersales/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        After Sales Program
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* Accessories */}
              <li className="relative group">
                <a
                  href="/genuine-accessories/index.html"
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2"
                >
                  Accessories
                </a>
              </li>
              {/* Dealer */}
              <li className="relative group">
                <a
                  href="/contact/index.html"
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2"
                >
                  Dealer
                </a>
              </li>
              {/* About Us Menu */}
              <li
                className="relative group"
                onMouseEnter={() => setIsAboutUsOpen(true)}
                onMouseLeave={() => setIsAboutUsOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  About Us
                  {isAboutUsOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isAboutUsOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/about-us/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Corporate
                      </a>
                      <a
                        href="/brand/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Brand
                      </a>
                      <a
                        href="/news/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Publication (News & Event)
                      </a>
                      <a
                        href="/career/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Career
                      </a>

                      {/* Contact Us with Sub-menu */}
                      <div className="relative group/contact">
                        <div className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                          Contact Us
                        </div>
                        <div className="hidden group-hover/contact:block absolute left-full top-0 -ml-2">
                          <div className="w-64 bg-white text-black rounded-lg shadow-lg py-2 ml-2">
                            <a
                              href="/"
                              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            >
                              Customer Relationship
                            </a>
                            <a
                              href="/social-media"
                              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            >
                              Social Media
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden">
            <a href="/">
              <img className="h-6" src={logo} alt="Logo" />
            </a>
          </div>

          {/* CTA Buttons & Language Selector */}
          <div className="hidden md:flex items-center gap-3">
            <a
              className={`py-2.5 px-4 font-medium text-sm text-center border-2 rounded-xl whitespace-nowrap transition-colors ${
                isScrolled
                  ? "text-black border-black hover:bg-black hover:text-white"
                  : "text-white border-white hover:bg-white hover:text-black"
              }`}
              href="/book-a-test-drive/index.html"
            >
              Book a Test Drive
            </a>
            <a
              className={`py-2.5 px-4 font-medium text-sm text-center border-2 rounded-xl whitespace-nowrap transition-colors ${
                isScrolled
                  ? "text-black border-black hover:bg-black hover:text-white"
                  : "text-white border-white hover:bg-white hover:text-black"
              }`}
              href="/request-price-list/index.html"
            >
              Request Price List
            </a>
            <button
              className={`flex items-center gap-1 transition-colors ${
                isScrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              EN
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={handleMobileMenuClick}
              className="text-black transition-all"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isBigMenuOpen && (
        <div
          onMouseEnter={handleBigMenuMouseEnter}
          onMouseLeave={handleBigMenuMouseLeave}
        >
          <BigMenu />
        </div>
      )}
      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
}
