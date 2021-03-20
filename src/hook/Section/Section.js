import './Section.scss'

const Produto = ({title, children}) => {

    return (
        <div className="section">
            <p className="white title">{title}</p>
            {children}
        </div>
    )
}

export default Produto