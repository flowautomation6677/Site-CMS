
import { siteContent } from "@/content/data";

export default function MethodSection() {
    const { title, description, steps } = siteContent.method;

    return (
        <section id="metodo" className="method-section">
            <div className="container">
                <h2 className="section-title fade-up">
                    {title}
                </h2>
                <div className="method-content">
                    <div className="method-text fade-up">
                        <p className="method-intro">
                            {description}
                        </p>
                        <div className="method-steps">
                            {steps.map((step, index) => (
                                <div key={index} className="step-card">
                                    <span className="step-icon">{step.icon}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="method-mockup fade-up">
                        <div className="mockup-3d">
                            <div className="mockup-card">
                                <div className="mockup-shine"></div>
                                <h3>Autoridade Arquetípica Express</h3>
                                <p>Seu mapa simbólico completo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
