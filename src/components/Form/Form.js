import Container from "../Container/Container"
import "./Form.css"
const Form = () => {
    return(
        <Container>
            <h2>Contact</h2>
            <p>Lets get in touch and talk about your next project.</p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Comment" />
                <button>Send Message</button>
            </form>
        </Container>
    )
}

export default Form;