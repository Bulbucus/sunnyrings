import './Inox.scss'

import Ring from '../../../assets/produto/Ring1.png';
import RingGarfo from '../../../assets/produto/Ring1_Garfo.png';

const InoxRing = () => {

    return (
        <div className='inox'>
            <div className='inox_preinfo'>
                <div className='photo'>
                    <img alt="ring finish" src={Ring}></img>
                </div>
                <div className='box orange-linear'>
                    <div className='thumbnail'>Anel 100% em Inox</div>
                    <div className='text'>Anéis feitos de talheres, totalmente <span>reutilizados</span> e 100% inox.</div>
                </div>
            </div>
            <div className="inox_product">
                <div className="box border orange-linear">
                    <div className='thumbnail'>Anéis feitos de talheres</div>
                    <div className="text">Dentro das <span>opções</span> que temos disponíveis, indique com o respetivo nome, o talher escolhido e <span>criaremos</span> o seu anel.</div>
                    <div className='important'>Nome: <span>Anel Inox 1234</span></div>
                    <div className='price'>7,55€</div>
                    <div className='text portes'><span>Portes:</span> CTT <br/>(acrescenta um valor de 2,40€)</div>
                    <div className='orange button'>Escolha a peça</div>
                    <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
                </div>
                <div className="photo">
                    <img alt="ring unfinish" src={RingGarfo}></img>
                </div>
            </div>
        </div>
    )
}

export default InoxRing;