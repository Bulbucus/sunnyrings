import './Inox.scss'

import Ring from '../../../assets/produto/Inox/Ring1.png';
import RingGarfo1 from '../../../assets/produto/Inox/Ring1_Garfo.png';
import RingGarfo2 from '../../../assets/produto/Inox/Ring2_Garfo.png';
import RingGarfo3 from '../../../assets/produto/Inox/Ring3_Garfo.png';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import {ReactComponent as CloseIcon} from '../../../assets/close_icon.svg';

// data
const Products = [
    {
        name: "Anel Inox 1",
        price: 7.55,
        image: RingGarfo1,
    },
    {
        name: "Anel Inox 2",
        price: 8.55,
        image: RingGarfo2,
    },
    {
        name: "Anel Inox 3",
        price: 6.55,
        image: RingGarfo3,
    },
    {
        name: "Anel Inox 1",
        price: 7.55,
        image: RingGarfo1,
    },
    {
        name: "Anel Inox 2",
        price: 8.55,
        image: RingGarfo2,
    },
    {
        name: "Anel Inox 3",
        price: 6.55,
        image: RingGarfo3,
    },
    {
        name: "Anel Inox 1",
        price: 7.55,
        image: RingGarfo1,
    },
    {
        name: "Anel Inox 2",
        price: 8.55,
        image: RingGarfo2,
    },
    {
        name: "Anel Inox 3",
        price: 6.55,
        image: RingGarfo3,
    },
]

// animation fade
// pass argument: se serve para passar um por cima do outro
const fade = (type, where, pass, shadow) => {
    switch (type) {
        case 'in':
            gsap.to(where, {
                opacity:1,
                filter: shadow && "drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.65))",
                duration:0.5,
                ease:"power1",
                display:'initial',
                position: pass ? 'absolute' : 'initial',
            })
            break;
    
        case 'out':
            gsap.to(where, {
                opacity:0,
                duration:0.5,
                ease:"power1",
                display:'none',
                position: pass ? 'absolute' : 'initial',
                filter: shadow && "drop-shadow(0px 0px 0px)"
            })
            break;
        default:
            break;
    }
}

const clickEffect = (where) => {
    gsap.from(where, {
        scale:0.85,
        ease:"back",
        duration:0.4,
    })

}

// mini product select
const InoxProduct = ({photo, onClick, style}) => {

    return (
        <div className="mini photo" onClick={onClick} style={style}>
            <img alt="ring unfinish" src={photo}></img>
        </div>
    )
}

const InoxRing = () => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [selectedProduct, setSelectProduct] = useState(0);
    const button = useRef([])

    // fade effect when click on "escolher peça"
    useEffect(() => {
        if (selectOpen) fade('in', '.select', true)
        if (!selectOpen) fade('out', '.select', true)
    },[selectOpen])

    // fade effect on change product
    useEffect(() => {
        Products.forEach((product, index) => {
            fade('out', `#inox_image_${index}`, true, true)

        })
        fade('in', `#inox_image_${selectedProduct}`, false, true)
    }, [selectedProduct])

    return (
        <div className='inox'>
            <div className='inox_preinfo fadein'>
                <div className='photo'>
                    <img alt="ring finish" src={Ring}></img>
                </div>
                <div className='box orange-linear'>
                    <div className='thumbnail'>Anel 100% em Inox</div>
                    <div className='text'>Anéis feitos de talheres, totalmente <span>reutilizados</span> e 100% inox.</div>
                </div>
            </div>
            <div className="inox_product fadein">
                <div className="box border orange-linear">
                    <div className='thumbnail'>Anéis feitos de talheres</div>
                    <div className="text">Dentro das <span>opções</span> que temos disponíveis, indique com o respetivo nome, o talher escolhido e <span>criaremos</span> o seu anel.</div>
                    <div className='important'>Nome: <span>{Products[selectedProduct].name}</span></div>
                    <div className='price'>{Products[selectedProduct].price}€</div>
                    <div className='text portes'><span>Portes:</span> CTT <br/>(acrescenta um valor de 2,40€)</div>
                    <div className='orange button' ref={btn => button.current[0] = btn} onClick={() => {clickEffect(button.current[0]); setSelectOpen(true)}}>Escolha a peça</div>
                    <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
                </div>
                <div className="select box border orange">
                    <div className='title white'><span>Escolha a peça</span> <CloseIcon ref={btn => button.current[1] = btn} className='icon_close' onClick={() => {clickEffect(button.current[1]);setSelectOpen(false)}}></CloseIcon></div>
                    <div className='important'>Nome: <span>{Products[selectedProduct].name}</span></div>
                    <div className='price'>{Products[selectedProduct].price}€</div>
                    <div className='products'>
                        {Products.map((product, index) => {return (<InoxProduct key={index} onClick={() => {setSelectProduct(index)}} photo={product.image} style={selectedProduct === index ? {backgroundColor: '#fff'} : null}></InoxProduct>)})}
                    </div>
                    <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
                </div>
                <div className="photo">
                    {Products.map((product, index) => {return(<img key={`inox_image_${index}`} id={`inox_image_${index}`} alt="ring unfinish" src={Products[index].image} style={{display:'none'}}></img>)})}
                </div>
            </div>
        </div>
    )
}

export default InoxRing;