"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// You can move this data array to an external file or CMS if needed.
const faqs = [
  {
    question:
      "What types of commercial construction projects does Charissma Constructions specialize in?",
    answer:
      "Charissma Constructions specializes in a variety of commercial & residential construction projects, including family homes & gated community villas, office buildings, retail spaces, restaurants, and healthcare facilities.",
  },
  {
    question: "What are the cost & charges involved in a construction project?",
    answer:
      "There are various costs involved varying from planning & approval, excavation, foundations, raising columns, roofing, plastering, interior & exterior turnkey projects. We however endeavour to do our best to match the client’s budget without compromising in quality of materials used.",
  },
  {
    question:
      "Does Charissma Constructions have experience with LEED certified construction?",
    answer:
      "Yes, Charissma Constructions has experience with LEED certified construction and can work with clients to achieve their sustainability goals.",
  },
  {
    question:
      "Does Charissma Constructions provide project management services?",
    answer:
      "Yes, Charissma Constructions provides comprehensive project management services to ensure that every project is completed on time and within budget.",
  },
];

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="mt-12">
      <h5 className="text-lg font-bold text-foreground mb-4">FAQs</h5>
      <ul className="flex flex-col gap-2">
        {faqs.map((faq, idx) => {
          const open = openIdx === idx;
          return (
            <li
              key={faq.question}
              className="rounded-lg bg-muted/60 transition-colors"
            >
              <button
                onClick={() => setOpenIdx(open ? null : idx)}
                className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-foreground hover:text-accent-foreground transition"
                aria-expanded={open}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.question}</span>
                {open ? (
                  <ChevronUp className="ml-4 h-5 w-5 text-accent" />
                ) : (
                  <ChevronDown className="ml-4 h-5 w-5 text-muted-foreground" />
                )}
              </button>
              <div
                id={`faq-answer-${idx}`}
                aria-hidden={!open}
                className={`transition-all duration-300 overflow-hidden px-4 ${
                  open ? "max-h-60 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
                } text-muted-foreground`}
              >
                {faq.answer}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
