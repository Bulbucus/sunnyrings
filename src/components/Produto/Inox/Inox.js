import './Inox.scss'

import Ring from '../../../assets/produto/Inox/Ring1.png';
import RingGarfo1 from '../../../assets/produto/Inox/Ring1_Garfo.png';
import RingGarfo2 from '../../../assets/produto/Inox/Ring2_Garfo.png';
import RingGarfo3 from '../../../assets/produto/Inox/Ring3_Garfo.png';

import { useEffect, useRef, useState } from 'react';

import clickEffect from '../../../animation/click';
import fade from '../../../animation/fade'

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

// mini product select
const InoxProduct = ({photo, onClick, style}) => {

    return (
        <div className="mini photo" onClick={onClick} style={style}>
            <img alt="ring unfinish" src={photo}></img>
        </div>
    )
}

const InoxRing = () => {
    const div = useRef()

    // fade effect when click on "escolher peça"
    const [selectOpen, setSelectOpen] = useState(false);
    useEffect(() => {
        if (selectOpen) fade('in', div.current, true)
        if (!selectOpen) fade('out', div.current, true)
    },[selectOpen])

    // fade effect on change product
    const [selectedProduct, setSelectProduct] = useState(0);
    useEffect(() => {
        Products.forEach((product, index) => {
            fade('out', `#inox_image_${index}`, true, true)

        })
        fade('in', `#inox_image_${selectedProduct}`, false, true)
    }, [selectedProduct])

    const [widthWindow, setWidthWindow] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidthWindow(window.innerWidth);
            window.innerWidth > 1000 && setSelectOpen(false)
         }
    
        window.addEventListener('resize', handleResize)
      })

    return (
        <div id='inox'>
            <div id='inox_preinfo' className='fadein'>
                <div className='photo'>
                    <img alt="ring finish" src={Ring}></img>
                </div>
                <div className='box orange-linear'>
                    <div className='thumbnail'>Anel 100% em Inox</div>
                    <div className='text'>Anéis feitos de talheres, totalmente <span>reutilizados</span> e 100% inox.</div>
                </div>
            </div>
            {widthWindow >= 1000 ? <div className="select fadein box border orange">
                    <div className='title white'><span>Escolha a peça</span></div>
                    <div className='products'>
                        {Products.map((product, index) => {return (<InoxProduct key={index} onClick={() => {setSelectProduct(index)}} photo={product.image} style={selectedProduct === index ? {backgroundColor: '#fff'} : null}></InoxProduct>)})}
                    </div>
                </div> : null}
            <div id='inox_product' className="fadein">
            <div style={{display:'flex',position:'relative'}}>
                <div className="box border orange-linear">
                    <div className='thumbnail'>Anéis feitos de talheres</div>
                    <div className="text">Dentro das <span>opções</span> que temos disponíveis, indique com o respetivo nome, o talher escolhido e <span>criaremos</span> o seu anel.</div>
                    <div className='important'>Nome: <span>{Products[selectedProduct].name}</span></div>
                    <div className='price'>{Products[selectedProduct].price}€</div>
                    <div className='text portes'><span>Portes:</span> CTT <br/>(acrescenta um valor de 2,40€)</div>
                    {widthWindow >= 1000  ? null : <div className='orange button' onClick={(event) => {clickEffect(event.target,'#inox_product'); setSelectOpen(true)}}>Escolha a peça</div>}
                    <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
                </div>
                <div ref={div} className="select box border orange">
                    <div className='title white'><span>Escolha a peça</span> <CloseIcon className='icon_close' onClick={(event) => {clickEffect(event.target);setSelectOpen(false)}}></CloseIcon></div>
                    <div className='important'>Nome: <span>{Products[selectedProduct].name}</span></div>
                    <div className='price'>{Products[selectedProduct].price}€</div>
                    <div className='products'>
                        {Products.map((product, index) => {return (<InoxProduct key={index} onClick={() => {setSelectProduct(index)}} photo={product.image} style={selectedProduct === index ? {backgroundColor: '#fff'} : null}></InoxProduct>)})}
                    </div>
                    <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
                </div>
            </div>
                <div className="photo">
                    {Products.map((product, index) => {return(<img key={`inox_image_${index}`} id={`inox_image_${index}`} alt="ring unfinish" src={Products[index].image} style={{display:'none'}}></img>)})}
                </div>
            </div>
        </div>
    )
}

export default InoxRing;