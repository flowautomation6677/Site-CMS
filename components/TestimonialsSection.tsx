
"use client";
import { siteContent } from "@/content/data";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
    const { title, subtitle, items } = siteContent.testimonials;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % items.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <section id="prova-social" className="testimonials-section">
            <div className="container">
                <h2 className="section-title fade-up">{title}</h2>
                <p className="section-subtitle fade-up">{subtitle}</p>

                <div className="testimonials-carousel">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`testimonial-card ${index === currentSlide ? "active" : ""}`}
                        >
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <strong>{item.author}</strong>
                                <span>{item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-dots">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentSlide ? "active" : ""}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
