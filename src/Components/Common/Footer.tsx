import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Youtube,

} from 'lucide-react';
import { Link } from 'react-router-dom';



const Footer = () => {


  return (


    <footer className="relative overflow-hidden bg-white dark:bg-black">


      {/* Enhanced Arc design with glow effect for both modes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] rounded-[100%]  dark:bg-black border-t-2 border-green-500/30 dark:border-green-500/30"></div>

      {/* Multi-layered glowing curve effect - light & dark modes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] rounded-[100%] bg-gradient-to-t from-gray-50/10 to-transparent dark:from-green-500/20 dark:to-transparent blur-xl"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[180px] rounded-[100%] bg-gradient-to-b from-gray-50/10 to-transparent dark:from-green-500/15 dark:to-transparent blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[180%] h-[100px] rounded-[100%] bg-gradient-to-b from-gray-50/10 to-transparent dark:from-green-500/10 dark:to-transparent blur-3xl animate-pulse"></div>



      {/* Main footer content */}
      <div className="relative container mx-auto px-4 pt-32 pb-10 z-10">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-0 sm:px-5">


          {/* Column 1: Logo and description */}
          <div className="space-y-4">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ex Bot</h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Empowering businesses with AI-driven WhatsApp automation solutions that transform customer interactions and drive growth.
            </p>

            <div className="flex items-center space-x-4 pt-2">

              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/exbotai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full p-2 bg-blue-100 dark:bg-green-900/20 text-green-600 dark:text-gray-400 hover:bg-green-200 dark:hover:bg-green-500/20 hover:text-gray-700 dark:hover:text-green-400 transition-all hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://x.com/exbotai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="rounded-full p-2 bg-blue-100 dark:bg-green-900/20 text-green-600 dark:text-gray-400 hover:bg-green-200 dark:hover:bg-green-500/20 hover:text-gray-700 dark:hover:text-green-400 transition-all hover:scale-110"
                >
                  <i className="fa-brands fa-x-twitter h-4 w-4"></i>
                </a>

                <a
                  href="https://www.instagram.com/exbotai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full p-2 bg-blue-100 dark:bg-green-900/20 text-green-600 dark:text-gray-400 hover:bg-green-200 dark:hover:bg-green-500/20 hover:text-gray-700 dark:hover:text-green-400 transition-all hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/company/exbotai/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-2 bg-blue-100 dark:bg-green-900/20 text-green-600 dark:text-gray-400 hover:bg-green-200 dark:hover:bg-green-500/20 hover:text-gray-700 dark:hover:text-green-400 transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://www.youtube.com/@exbotai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="rounded-full p-2 bg-blue-100 dark:bg-green-900/20 text-green-600 dark:text-gray-400 hover:bg-green-200 dark:hover:bg-green-500/20 hover:text-gray-700 dark:hover:text-green-400 transition-all hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                </a>


                <a
                  href="https://in.pinterest.com/exbotai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="rounded-full p-2 bg-blue-100 dark:bg-green-900/20 text-green-600 dark:text-gray-400 hover:bg-green-200 dark:hover:bg-green-500/20 hover:text-gray-700 dark:hover:text-green-400 transition-all hover:scale-110"
                >
                  <i className="fa-brands fa-pinterest h-5 w-5"></i>
                </a>


              </div>


            </div>

          </div>



          {/* Column 2: Quick Links */}
          <div className="space-y-4">

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>

            <ul className="space-y-2">

              <li>
                <a href="https://app.exapi.in/login" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 flex items-center group transition-colors duration-300">
                  <span className="inline-block w-0 group-hover:w-2 overflow-hidden transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-green-500 dark:text-green-500" />
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">My Account</span>
                </a>
              </li>


              <li>
                <Link to={'/'} className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 flex items-center group transition-colors duration-300">
                  <span className="inline-block w-0 group-hover:w-2 overflow-hidden transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-green-500 dark:text-green-500" />
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Home</span>
                </Link>
              </li>


              <li>
                <Link to={'/pricing'} className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 flex items-center group transition-colors duration-300">
                  <span className="inline-block w-0 group-hover:w-2 overflow-hidden transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-green-500 dark:text-green-500" />
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Pricing</span>
                </Link>
              </li>


              <li>
                <a href="https://app.exapi.in/login" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 flex items-center group transition-colors duration-300">
                  <span className="inline-block w-0 group-hover:w-2 overflow-hidden transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-green-500 dark:text-green-500" />
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Login</span>
                </a>
              </li>


            </ul>

          </div>



          {/* Column 3: Contact Information */}
          <div className="space-y-4">

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Us</h3>

            <div className="space-y-3">


              <div className="flex items-center">
                <div className="mt-1 mr-3 p-2 rounded-full bg-blue-100 dark:bg-green-900/20">
                  <MapPin className="h-4 w-4 text-green-500 dark:text-green-500" />
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">12/550, CALICUT, KERALA 673633 India</span>
              </div>


              <div className="flex items-center">
                <a href="tel:+918606123466" target='_blank' className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-blue-100 dark:bg-green-900/20">
                    <Phone className="h-4 w-4 text-green-500 dark:text-green-500" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">+91 8606123466</span>
                </a>
              </div>

              <div className="flex items-center">
                <a href="mailto:care@exbot.in" target='_blank' className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-blue-100 dark:bg-green-900/20">
                    <Mail className="h-4 w-4 text-green-500 dark:text-green-500" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">care@exbot.in</span>
                </a>
              </div>


            </div>

          </div>




          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="relative mt-2 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-green-500/50 via-green-500/10 to-blue-500/50 dark:from-green-500/50 dark:via-green-500/10 dark:to-green-500/50 group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white dark:bg-black rounded-full py-2 pl-4 pr-12 text-gray-800 dark:text-white text-sm border-none focus:outline-none focus:ring-0"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-green-500 dark:bg-green-500 p-1.5 text-white transition-all group-hover:bg-green-400 dark:group-hover:bg-green-400">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>



        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-4">

          <div className="flex flex-col md:flex-row justify-between items-center">


            <div className='flex flex-col'>

              <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 Exbot. All rights reserved.
              </p>

              <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 md:mb-0">
                Our parent company is exmedia affiliated by <a href="http://wcapi.io" target='_blank' className='hover:text-green-400 dark:hover:text-green-400 transition-colors duration-300'>wcapi.io</a>
              </p>

            </div>




            <div className="flex flex-wrap justify-center gap-4">


              <Link
                to={'/privacypolicy'}
                className="text-gray-500 dark:text-gray-500 text-xs hover:text-green-400 dark:hover:text-green-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>


              <Link
                to={'/termsconditions'}
                className="text-gray-500 dark:text-gray-500 text-xs hover:text-green-400 dark:hover:text-green-400 transition-colors duration-300"
              >
                Terms and Conditions
              </Link>


              <Link
                to={'/refundpolicy'}
                className="text-gray-500 dark:text-gray-500 text-xs hover:text-green-400 dark:hover:text-green-400 transition-colors duration-300"
              >
                Refund Policy
              </Link>


              <Link
                to={'/customerpolicychoice'}
                className="text-gray-500 dark:text-gray-500 text-xs hover:text-green-400 dark:hover:text-green-400 transition-colors duration-300"
              >
                Customer Policy Choice
              </Link>



              <Link
                to={'/disclaimer'}
                className="text-gray-500 dark:text-gray-500 text-xs hover:text-green-400 dark:hover:text-green-400 transition-colors duration-300"
              >
                Disclaimer
              </Link>


            </div>
          </div>
        </div>



      </div>


    </footer>
  );
};

export default Footer;