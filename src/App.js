import React, { useState } from "react";
import "./App.css";

const ARTICLES = [
  {
    id: 1,
    title: "React Introduction",
    content: "React is a popular JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "Learning Angular",
    content: "Angular is a TypeScript-based framework maintained by Google."
  },
  {
    id: 3,
    title: "Getting Started with Vue",
    content: "Vue.js is a progressive framework for building UIs and SPAs."
  },
  {
    id: 4,
    title: "Modern JavaScript",
    content: "JavaScript (ES6+) introduced features like arrow functions, async/await, and modules."
  }
];

function highlightText(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i}>{part}</mark>
    ) : (
      part
    )
  );
}

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = ARTICLES.filter(
    art =>
      art.title.toLowerCase().includes(query.toLowerCase()) ||
      art.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Article Search</h1>
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="results">
        {filtered.map(article => (
          <div key={article.id} className="card">
            <h2>{highlightText(article.title, query)}</h2>
            <p>{highlightText(article.content, query)}</p>
          </div>
        ))}

        {filtered.length === 0 && <p>No results found.</p>}
      </div>
    </div>
  );
}
