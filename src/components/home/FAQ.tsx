"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do you verify your listings?",
    answer:
      "Every property listed on SeekProp undergoes a multi-step verification process, including physical site visits, document verification, and owner background checks to ensure authenticity and legal compliance.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No. SeekProp is fully transparent with pricing. Any applicable service fees are clearly displayed before you proceed.",
  },
  {
    question: "Can I list my own property?",
    answer:
      "Yes. You can list your property directly through our platform. Our team will guide you through the verification and listing process.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <span className="text-sm font-medium text-primary">
              {faq.question}
            </span>
            {open === index ? (
              <ChevronUp size={16} className="text-muted-foreground shrink-0" />
            ) : (
              <ChevronDown
                size={16}
                className="text-muted-foreground shrink-0"
              />
            )}
          </button>
          {open === index && (
            <div className="px-4 pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
