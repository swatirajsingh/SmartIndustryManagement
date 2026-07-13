import { useState } from "react";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
  if (!question.trim()) return;

  const res = await fetch("http://localhost:5000/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  const data = await res.json();
  setAnswer(data.answer);
};

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">🤖 AI Factory Assistant</h2>

      <input
        type="text"
        placeholder="Ask something..."
        className="border w-full p-3 rounded-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askAI}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          {answer}
        </div>
      )}
    </div>
  );
}

export default AIChat;