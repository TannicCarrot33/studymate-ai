export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAGjcoe74pD3LlMagi1rCM45K5Cyg2fETQ",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message }]
          }
        ]
      })
    }
  );

  const data = await response.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

  res.status(200).json({ reply });
}
