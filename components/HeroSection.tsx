
"use client";
import { siteContent } from "@/content/data";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const { title, subtitle, cta, ctaLink } = siteContent.hero;

    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title fade-in" style={{ animationDelay: "0.5s" }}>
                        <span className="highlight-gold">{title.highlight}</span>
                        {title.rest}
                    </h1>
                    <p className="hero-subtitle fade-in" style={{ animationDelay: "1s" }}>
                        {subtitle}
                    </p>
                    <a href={ctaLink} target="_blank" className="cta-button cta-glow">
                        {cta}
                    </a>
                </div>
            </div>
        </section>
    );
}
