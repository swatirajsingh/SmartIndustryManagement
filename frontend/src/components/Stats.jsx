function Stats() {
  const stats = [
    {
      number: "250+",
      title: "Machines",
      icon: "🏭",
    },
    {
      number: "1200+",
      title: "Employees",
      icon: "👷",
    },
    {
      number: "99%",
      title: "Efficiency",
      icon: "⚡",
    },
    {
      number: "24/7",
      title: "Monitoring",
      icon: "📡",
    },
  ];

  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Industry Performance
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl mb-4">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-blue-900">
                {stat.number}
              </h3>

              <p className="text-gray-600 mt-2 text-lg">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;