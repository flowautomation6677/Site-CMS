
"use client";
import { siteContent } from "@/content/data";
import { useState } from "react";

export default function FAQSection() {
    const { title, items } = siteContent.faq;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <h2 className="section-title fade-up">{title}</h2>
                <div className="faq-accordion">
                    {items.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                <span>{item.question}</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="faq-cta fade-up">
                    <a href="https://pay.hotmart.com/M101451681V?off=9z3dmva1" target="_blank" className="cta-button cta-large">
                        SIM, QUERO ATRAIR CLIENTES PREMIUM
                    </a>
                </div>
            </div>
        </section>
    );
}
