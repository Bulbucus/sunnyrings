import './InoxRing.scss'

import Ring from '../../assets/produto/Ring1.png';
import RingGarfo from '../../assets/produto/Ring1_Garfo.png';
import {ReactComponent as StickCurve} from '../../assets/stick_with_curve.svg';

const InoxRing = () => {

    return (
        <div className='inoxring'>
            <div className='box orange'>
                <div className='thumbnail'>Anéis feitos apartir de talheres</div>
                <p>Aneis criados apartir de talheres. Tem a opção de escolher entre os talheres que temos disponíveis e partir dai criaremos o seu anel.</p>
            </div>
            <div className="product_finish">
                <StickCurve className="stick"></StickCurve>
                <img alt="product_finish" src={Ring}></img>
            </div>
            <img className="product_unfinish" alt="product_unfinish" src={RingGarfo}></img>
            {/* <div className='box orange'>
                <p className='product_name'>Nome: Anel Inox 1</p>
                <p className='product_price'>9,99€</p>
                <p className='product_info'>*De momento, para fazer uma compra terá que nos contactar via Instagram, Facebook ou E-mail. Por favor escolha a referência que pretende.</p>
                <button>Escolher Peça</button>
            </div> */}
        </div>
    )
}

export default InoxRing;