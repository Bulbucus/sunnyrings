import Ring4 from '../../../assets/produto/Ring4.png';

import './Arame.scss'

const Arame = () => {

    return (
        <div className='arame fadein'>
            <div className='photo'>
                <img src={Ring4} alt='Ring_finish'></img>
            </div>
            <div className='box orange'>
                <div className='thumbnail'>Materias 100% reutilizados</div>
                <div className='text'>Com um pouco de trabalho e um pouco de criatividade até um simples arame se torma <span>bonito</span></div>
                <div className='important'>Nome: <span>Anel Inox 1234</span></div>
                <div className='price'>8,88€</div>
                <div className='text portes'><span>Portes:</span> CTT <br/>(acrescenta um valor de 2,40€)</div>
                <div className='orange button'>Escolha a peça</div>
                <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
            </div>
        </div>
    )
}

export default Arame;