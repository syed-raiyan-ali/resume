import React, { useState } from "react";
import { useTheme } from "./ThemeProvider"; // Dark mode support
import "./FAQs.css";

const faqData = [
  {
    question: "What technologies do you use?",
    answer: "I use React, JavaScript, HTML, CSS, and Bootstrap to build beautiful web interfaces.",
  },
  {
    question: "Do you offer freelance work?",
    answer: "Yes, I take on select freelance projects. You can contact me for more details.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me via email or my LinkedIn profile, linked on my contact page.",
  },
];

export const FAQs = () => {
  const { isDarkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleButtonClick = () => {
    console.log("FAQ Button Clicked!");
    const dialog = document.getElementById("faq-popover");
    console.log(dialog); // Check if dialog is being selected
    dialog.showModal(); // Explicitly show the dialog
  };

  const handleCloseClick = () => {
    console.log("Close button clicked!");
    const dialog = document.getElementById("faq-popover");
    dialog.close(); // Explicitly close the dialog
  };

  return (
    <div>
      {/* Button to open the FAQ popover */}
      <button onClick={handleButtonClick} className="faq-button formal">
        FAQs
      </button>

      {/* Popover FAQ Section (No `popover` attribute here) */}
      <dialog id="faq-popover" className={`FAQs ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9662;</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}

        {/* Close button */}
        <button onClick={handleCloseClick} className="close-btn formal">Close</button>
      </dialog>
    </div>
  );
};



