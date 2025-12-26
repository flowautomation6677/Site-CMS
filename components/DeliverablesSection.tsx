
import { siteContent } from "@/content/data";

export default function DeliverablesSection() {
    const { title, subtitle, items } = siteContent.deliverables;

    return (
        <section id="entregaveis" className="deliverables-section">
            <div className="container">
                <h2 className="section-title fade-up">
                    {title}
                </h2>
                <p className="section-subtitle fade-up">
                    {subtitle}
                </p>
                <div className="deliverables-grid">
                    {items.map((item, index) => (
                        <div key={index} className="deliverable-card stagger-fade">
                            <div className="card-image">
                                <img src={item.image} alt={`Mockup ${item.title}`} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
