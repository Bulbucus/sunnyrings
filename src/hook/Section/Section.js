import './Section.scss'

const Produto = ({title, children, style}) => {

    return (
        <div className="section" style={style}>
            <p className="white title"><span>{title}</span></p>
            {children}
        </div>
    )
}

export default Produto