
import { siteContent } from "@/content/data";

export default function PainSection() {
    const { title, items, highlight } = siteContent.pain;

    return (
        <section id="dor" className="pain-section">
            <div className="container">
                <h2 className="section-title fade-up">
                    {title}
                </h2>
                <div className="pain-content fade-up">
                    {items.map((item, index) => (
                        <p key={index} className="pain-text">{item}</p>
                    ))}
                    <div className="mini-cta">
                        <p>{highlight}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
