function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Smart Industry
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              AI & IoT powered platform helping industries
              monitor machines, optimize operations and
              improve productivity.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Home
              </li>
              <li className="hover:text-white cursor-pointer">
                Dashboard
              </li>
              <li className="hover:text-white cursor-pointer">
                Features
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 support@smartindustry.com
            </p>

            <p className="text-gray-400 mt-2">
              📍 Smart Industrial Zone
            </p>
          </div>

        </div>


        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © 2026 Smart Industry Management System. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;