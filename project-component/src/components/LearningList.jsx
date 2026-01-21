import { useState } from "react";
import LearningCard from "./LearningCard.jsx";

const topics = [
  {
    topic: "React State",
    short: "State is data that changes.",
    detail:
      "Use useState() to create state and update it. It makes UI update automatically.",
  },
  {
    topic: "React Props",
    short: "Props pass data to components.",
    detail:
      "Props are read-only. You can send data from parent to child components.",
  },
  {
    topic: "useEffect",
    short: "useEffect runs code when something changes.",
    detail: "You can use it to fetch data or update DOM after rendering.",
  },
];

function LearningList() {
  const [search, setSearch] = useState("");

  const filteredList = topics.filter((item) =>
    item.topic.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>Learning Topics</h2>

      <input
        type="text"
        placeholder="Search topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredList.map((item, idx) => (
        <LearningCard
          key={idx}
          topic={item.topic}
          short={item.short}
          detail={item.detail}
        />
      ))}
    </div>
  );
}

export default LearningList;
