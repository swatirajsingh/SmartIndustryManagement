function AIPanel() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full">
      <h2 className="text-xl font-bold mb-4">
        🤖 AI Maintenance Prediction
      </h2>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-red-700">
          ⚠ Machine M-204
        </h3>

        <p className="mt-2 text-gray-700">
          Failure Probability: <strong>89%</strong>
        </p>

        <p className="text-gray-600 mt-2">
          Cause:
        </p>

        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Temperature increasing</li>
          <li>High vibration detected</li>
          <li>Motor efficiency dropping</li>
        </ul>

        <button className="mt-5 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          Schedule Maintenance
        </button>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
        <h3 className="font-semibold text-green-700">
          ✅ Machine M-112
        </h3>

        <p className="text-gray-600 mt-2">
          All systems operating normally.
        </p>
      </div>
    </div>
  );
}

export default AIPanel;