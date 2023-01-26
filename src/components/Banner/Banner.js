import Container from "../Container/Container";
import bannerImage from "./../../images/architect.jpeg"
const Banner = () => {
    return(
        <Container>
            <img src={bannerImage} alt="Banner" />
        </Container>
    )
}

export default Banner;