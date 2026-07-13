function Features() {
  const features = [
    {
      icon: "🏭",
      title: "Machine Monitoring",
      description:
        "Monitor machine health, performance and status in real time using IoT sensors.",
    },
    {
      icon: "📦",
      title: "Smart Inventory",
      description:
        "Track stock levels, manage supplies and optimize inventory operations.",
    },
    {
      icon: "👷",
      title: "Worker Management",
      description:
        "Manage employee attendance, safety and workforce productivity.",
    },
    {
      icon: "🤖",
      title: "AI Analytics",
      description:
        "Predict machine failures and improve productivity using Artificial Intelligence.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Our Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;