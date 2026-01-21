import React, { useState } from "react";

function LearningCard({ topic, short, detail }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start bg-fuchsia-400">
        <h3 className="mt-10 bg-cyan-500">{topic}</h3>
        <p>{short}</p>

        <p className="bg-amber-400">{showDetail && detail}</p>

        <button
          onClick={() => setShowDetail(!showDetail)}
          className="bg-emerald-500 p-4"
        >
          {showDetail ? "Hide" : "Show"} Details
        </button>
      </div>
    </>
  );
}

export default LearningCard;
