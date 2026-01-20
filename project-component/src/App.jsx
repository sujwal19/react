import React, { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { title: "Section 1", content: "This is section 1 content." },
    { title: "Section 2", content: "This is section 2 content." },
    { title: "Section 3", content: "This is section 3 content." },
  ];

  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx} className="text-2xl">
          <h2
            className="border-2 bg-cyan-500"
            onClick={() => setOpenIndex(openIndex == idx ? null : idx)}
          >
            {item.title}
          </h2>
          {openIndex == idx && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
