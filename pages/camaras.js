import React from 'react';
import Head from 'next/head';
import { useState } from 'react';

const Camaras = ()=> {


    const [currImg, setImgCurr] = useState(1);

    const handleLeft = ()=>{
        if(currImg > 1){
        setImgCurr( currImg - 1 );
        }
        if(currImg === 0){
        setImgCurr( 1 );
        }
    }

    const handleRight = ()=>{
        if( currImg < 3){
        setImgCurr( currImg + 1 );
        }
        if(currImg === 3){
        setImgCurr( 3 );
        }
    }
    
    return (
    <>
        <main className='mainContent'>
            <div className='leftPart'> 
                <div className='leftContainer'>
                <div className='imgContainer'>
                    <img onClick={handleLeft} className='leftIcon' src="assets/leftIcon.svg" alt="" />
                    <img src={`assets/camara-${currImg}.jpg`} className='imagen' alt="" />
                    <img onClick={handleRight} className='rightIcon' src="assets/rightIcon.svg" alt="" />
                </div>
                <div className='itemsContainer'>
                    <div className={ currImg === 1 ? 'itemSelected': 'item'}></div>
                    <div className={ currImg === 2 ? 'itemSelected': 'item'}></div>
                    <div className={ currImg === 3 ? 'itemSelected': 'item'}></div>
                </div>
                </div>
            </div>
            <div className='rightPart'>
                <div className='infoContainer'>
                    <h1 className='tituloPagina'>Sistemas CCTV y Alarmas</h1>
                    <h2 className='subtituloPagina'> Obten mas seguridad para tu hogar u oficina</h2>
                    <ul className='listaKits'>
                        <li className='itemPagina'>Kit 2 Camaras bala con DVR ya instalado en  <span className='precioCamara'>$6,000</span> </li>
                        <li className='itemPagina'>Kit 4 Camaras bala con DVR ya instalado en <span className='precioCamara'>$8,000</span> </li>
                        <li className='itemPagina'>Kit 6 Camaras bala con DVR ya instalado en <span className='precioCamara'>$10,000</span> </li>
                        <li className='itemPagina'>Kit 8 Camaras bala con DVR ya instalado en <span className='precioCamara'>$12,000</span> </li>
                    </ul>
                </div>
            </div>
        </main>
    </>
    
  )
}
 
export default Camaras;