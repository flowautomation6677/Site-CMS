
import { siteContent } from "@/content/data";

export default function GuaranteeSection() {
    return (
        <section id="garantia" className="guarantee-section">
            <div className="container">
                <div className="guarantee-content fade-up">
                    <div className="guarantee-seal">
                        <div className="seal-circle">
                            <span>7 DIAS</span>
                            <span className="seal-subtitle">Garantia Total</span>
                        </div>
                    </div>
                    <div className="guarantee-text">
                        <h2>Teste o Autoridade Arquetípica Express por 7 dias</h2>
                        <p>
                            Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu investimento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
