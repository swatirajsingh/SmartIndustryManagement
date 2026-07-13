function Hero() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Smart Industry <br />
            Management System
          </h1>

          <p className="mt-6 text-xl text-gray-700">
            AI & IoT Powered Platform for Modern Industries
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            Monitor machines, manage inventory, track workers,
            optimize energy consumption and predict maintenance
            using Artificial Intelligence.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Started
            </button>

            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition">
              Live Demo
            </button>
          </div>
        </div>


        {/* Right Side Dashboard */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Industry Dashboard
          </h2>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-green-100 rounded-xl p-5 text-center">
              <h3 className="text-3xl">🟢</h3>
              <p className="font-bold mt-2">245</p>
              <p className="text-gray-600 text-sm">Machines Online</p>
            </div>

            <div className="bg-red-100 rounded-xl p-5 text-center">
              <h3 className="text-3xl">🌡️</h3>
              <p className="font-bold mt-2">72°C</p>
              <p className="text-gray-600 text-sm">Temperature</p>
            </div>

            <div className="bg-yellow-100 rounded-xl p-5 text-center">
              <h3 className="text-3xl">⚡</h3>
              <p className="font-bold mt-2">94%</p>
              <p className="text-gray-600 text-sm">Efficiency</p>
            </div>

            <div className="bg-blue-100 rounded-xl p-5 text-center">
              <h3 className="text-3xl">🤖</h3>
              <p className="font-bold mt-2">Healthy</p>
              <p className="text-gray-600 text-sm">AI Status</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;