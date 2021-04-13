import Ring4 from '../../../assets/produto/Arame/Ring4.png';
import Ring4_rock from '../../../assets/produto/Arame/Ring4_pedra.png';
import Ring5 from '../../../assets/produto/Arame/Ring5.png';
import Ring5_rock from '../../../assets/produto/Arame/Ring5_pedra.png'

import './Arame.scss';

import { useEffect, useRef, useState } from 'react';

import clickEffect from '../../../animation/click';
import fade from '../../../animation/fade';

import {ReactComponent as CloseIcon} from '../../../assets/close_icon.svg';

// data
const Products = [
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
    {
        name: "Anel Arame 1",
        price: 7.55,
        rock: Ring4_rock,
        image:Ring4,
    },{
        name: "Anel Arame 2",
        price: 9.55,
        rock: Ring5_rock,
        image:Ring5,
    },
]

// mini product select
const ArameProduct = ({photo, onClick, style}) => {

    return (
        <div className="mini photo" onClick={onClick} style={style}>
            <img alt="ring unfinish" src={photo}></img>
        </div>
    )
}


const Arame = () => {
    const div = useRef()

    const [selectOpen, setSelectOpen] = useState(false);
    useEffect(() => {
        if (selectOpen) fade('in', div.current, true)
        if (!selectOpen) fade('out', div.current, true)
    },[selectOpen])

    const [selectedProduct, setSelectProduct] = useState(0);
    useEffect(() => {
        Products.forEach((product, index) => {
            fade('out', `#arame_image_${index}`, true, true)

        })
        fade('in', `#arame_image_${selectedProduct}`, false, true)
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
        <div id='arame_product' className='fadein'>
            <div id='arame_info'>
                <div className='photo'>
                {Products.map((product, index) => {return(<img key={`arame_image_${index}`} id={`arame_image_${index}`} alt="ring finish" src={Products[index].image} style={{display:'none'}}></img>)})}
                </div>
                <div style={{display:'flex',position:'relative'}} className='container'>
                <div className='box orange'>
                    {widthWindow >= 1000 ? null : 
                    <>
                        <div className='thumbnail'>Materias 100% reutilizados</div>
                        <div className='text'>Com um pouco de trabalho e um pouco de criatividade até um simples arame se torma <span>bonito</span></div>
                    </>
                    }
                    <div className='important'>Nome: <span>{Products[selectedProduct].name}</span></div>
                    <div className='price'>{Products[selectedProduct].price}€</div>
                    <div className='text portes'><span>Portes:</span> CTT <br/>(acrescenta um valor de 2,40€)</div>
                    {widthWindow >= 1000 ? null : <div className='orange button' onClick={(event) => {clickEffect(event.target,'#arame_product'); setSelectOpen(true)}}>Escolha a peça</div>}
                    <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
                </div>
                <div ref={div} className="select box border orange">
                        <div className='title white'><span>Escolha a peça</span> <CloseIcon className='icon_close' onClick={(event) => {clickEffect(event.target);setSelectOpen(false)}}></CloseIcon></div>
                        <div className='important'>Nome: <span>{Products[selectedProduct].name}</span></div>
                        <div className='price'>{Products[selectedProduct].price}€</div>
                        <div className='products'>
                            {Products.map((product, index) => {return (<ArameProduct key={index} onClick={() => {setSelectProduct(index)}} photo={product.rock} style={selectedProduct === index ? {backgroundColor: '#fff'} : null}></ArameProduct>)})}
                        </div>
                        <div className='text note'><span>Nota:</span> Para <span>encomendas</span>, terá que nos <span>contactar</span> através das plataformas, Instagram, Facebook ou E-Mail</div>
                    </div>
                </div>
            </div>
            {widthWindow >= 1000 ? 
            <div id='arame_plus' className='box orange-linear'>
                <div className='thumbnail'>Materias 100% reutilizados</div>
                <div className='text'>Com um pouco de trabalho e um pouco de criatividade até um simples arame se torma <span>bonito</span></div>
            </div> : null}
            {widthWindow >= 1000 ? <div className="select box border orange">
                    <div className='title white'><span>Escolha a peça</span></div>
                    <div className='products'>
                        {Products.map((product, index) => {return (<ArameProduct key={index} onClick={() => {setSelectProduct(index)}} photo={product.rock} style={selectedProduct === index ? {backgroundColor: '#fff'} : null}></ArameProduct>)})}
                    </div>
                </div> : null}
        </div>
    )
}

export default Arame;