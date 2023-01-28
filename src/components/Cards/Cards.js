import Container from "../Container/Container";
import card1 from "./../../images/team1.jpeg";
import card2 from "./../../images/team2.jpeg";
import card3 from "./../../images/team3.jpeg";      
import card4 from "./../../images/team4.jpeg";
import "./Cards.css"
const Cards = () => {
    return(
        <Container className="cards">
            <div className="card">
                <img src={card1} alt="Team Member 1"/>
                <h3>John Doe</h3>
                <p className="role">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <a href="/" className="btn">Contact</a>
            </div>
            <div className="card">
                <img src={card2} alt="Team Member 1"/>
                <h3>John Doe</h3>
                <p className="role">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <a href="/" className="btn">Contact</a>
            </div>
            <div className="card">
                <img src={card3} alt="Team Member 1"/>
                <h3>John Doe</h3>
                <p className="role">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <a href="/" className="btn">Contact</a>
            </div>
            <div className="card">
                <img src={card4} alt="Team Member 1"/>
                <h3>John Doe</h3>
                <p className="role">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <a href="/" className="btn">Contact</a>
            </div>
        </Container>
    )
}

export default Cards;