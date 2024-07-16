import { useState } from "react";
const FaqColumn = ({ coln }) => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const toggleAnswer = (id) => {
    setVisibleAnswer((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="faq-column">
      {coln.map((faq) => (
        <div key={faq.id}>
          <div
            className={`question ${visibleAnswer === faq.id ? "rotate" : ""}`}
            onClick={() => toggleAnswer(faq.id)}
          >
            {faq.question}
          </div>
          <div className={`answer ${visibleAnswer === faq.id ? "show" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqColumn;
