
"use client";
import { useEffect } from "react";

export function useScrollReveal() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        // Stagger Animation
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.parentElement?.querySelectorAll('.stagger-fade');
                    cards?.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        const deliverableSection = document.querySelector('.deliverables-grid');
        if (deliverableSection) {
            staggerObserver.observe(deliverableSection);
        }

        return () => {
            observer.disconnect();
            staggerObserver.disconnect();
        };
    }, []);
}
