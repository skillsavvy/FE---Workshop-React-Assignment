import "./Container.css"
const Container = (props) => {
    const classes = `container ${props.className ? props.className : ''}`;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Container;