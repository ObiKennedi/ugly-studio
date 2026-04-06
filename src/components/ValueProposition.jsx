import { Shield, Sparkles, Clock, MessageCircle } from "lucide-react"
import "../styles/ValueProposition.scss"

const ValueProps = [
    {
        icon: <Sparkles />,
        title: "Premium Quality",
        description: "Expect nothing less than the best practices the industry has to offer."
    },
    {
        icon: <Clock />,
        title: "Timely Delivery",
        description: "From simple designs to complex systems, you can always count on us to deliver on time."
    },
    {
        icon: <Shield />,
        title: "Secure & Reliable",
        description: "You don't have to worry about data breaches or security vulnerabilities. We take security seriously."
    },
    {
        icon: <MessageCircle />,
        title: "24/7 Support",
        description: "You can always count on us to be there when you need us."
    }
]

export default function ValueProposition() {
    return (
        <section className="value-proposition">
            <div className="value-proposition__container">
                <div className="value-proposition__grid">
                    {ValueProps.map((valueProp, index) => (
                        <div key={index} className="value-proposition__item">
                            <div className="value-proposition__icon">
                                {valueProp.icon}
                            </div>
                            <h3 className="value-proposition__title">{valueProp.title}</h3>
                            <p className="value-proposition__description">{valueProp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
