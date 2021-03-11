import './Produto.scss'

const Produto = ({title, children}) => {

    return (
        <div className="produto">
            <p className="orange title">{title}</p>
            {children}
        </div>
    )
}

export default Produto