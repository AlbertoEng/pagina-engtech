import React, { useEffect } from 'react';
import { useState } from 'react';

const Automatizacion = () => {


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
        <main className='mainContent'>
            <div className='leftPart'> 
                <div className='leftContainer'>
                <div className='imgContainer'>
                    <img onClick={handleLeft} width={100} height={100}  className='leftIcon' src="assets/leftIcon.svg" alt="" />
                    <img src={`assets/auto-${currImg}.jpg`} className='imagen' alt="" />
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
                    <h1 className='tituloPagina'>Automatizacion</h1>
                    <h2 className='subtituloPagina'>Hacemos realidad tu idea de automatizacion!</h2>
                    <ul className='listaCaracteristicasAuto'>
                        <li className='itemPagina'> PROGRAMACION DE PLC PARA PROCESOS.</li>
                        <li className='itemPagina'> PROGRAMACION DE MICROCONTROLADORES </li>
                        <li className='itemPagina'> PROYECTOS DE AUTOMATIZACION DEL HOGAR, FOCOS, BOMBAS, MOTORES  </li>
                        <li className='itemPagina'> CONTROLE SU HOGAR DESDE CELULAR, TABLE O PC  </li>
                        <li className='itemPagina'> CONTROLE PORTONES DE FRACCIONAMIENTOS  </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
 
export default Automatizacion;