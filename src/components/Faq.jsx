const Faq = ({ question, id, handleClick }) => {
  return (
    <>
      <div className="question" onClick={handleClick}>
        {question}
      </div>
      <div className="answer" id={id}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </>
  );
};

export default Faq;
