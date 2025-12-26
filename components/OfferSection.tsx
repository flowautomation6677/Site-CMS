
import { siteContent } from "@/content/data";

export default function OfferSection() {
    const { title, items, total, price, fullPrice, cta, ctaLink, guarantee } = siteContent.offer;

    return (
        <section id="oferta" className="offer-section" style={{ marginTop: "200px" }}>
            <div className="container">
                <h2 className="section-title fade-up">{title}</h2>
                <div className="value-table fade-up">
                    {items.map((item, index) => (
                        <div key={index} className="value-row">
                            <span className="value-item">{item.name}</span>
                            <span className="value-price">{item.price}</span>
                        </div>
                    ))}
                    <div className="value-divider"></div>
                    <div className="value-row total">
                        <span className="value-item">Total:</span>
                        <span className="value-price strikethrough">{total}</span>
                    </div>
                    <div className="value-row highlight-offer">
                        <span className="value-item">💥 Hoje:</span>
                        <span className="value-price-final">{fullPrice} {price}</span>
                    </div>
                </div>
                <div className="offer-cta fade-up">
                    <a href={ctaLink} target="_blank" className="cta-button cta-large">
                        {cta}
                    </a>
                    <p className="offer-note">{guarantee}</p>
                </div>
            </div>
        </section>
    );
}
