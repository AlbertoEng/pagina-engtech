
import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';

export default function Home() {


  const [currImg, setImgCurr] = useState(1);
  const [ kwh, setKwh] = useState(0);
  const [error,setError] = useState(false);
  const [cotizacion, setCotizacion] = useState( 0 );
  const [msgError, setMsgError] = useState('');

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

  const handleChange = ( e )=>{
    if( typeof eval(e.target.value) === 'number'){
      setKwh( e.target.value );
    }else if(e.target.value === ''){
      setError(true);
    }else{
      return 
    }
 
  }

  
  const handleCotizar = ()=>{

      if(!error){
        setCotizacion(  (kwh/60/5)*1.2*1000*22 );
        setError(false)
      }
      
      return;

  }


  return (
    <main className='mainContent'>
      <div className='leftPart'> 
          <div className='leftContainer'>
          <div className='imgContainer'>
              <img onClick={handleLeft} className='leftIcon' src="assets/leftIcon.svg" alt="" />
              <img src={`assets/panel-${currImg}.jpg`} className='imagen' alt="" />
              <img onClick={handleRight} className='rightIcon' src="assets/rightIcon.svg" alt="" />
          </div>
          <div className='itemsContainer'>
              <div  className={ currImg === 1 ? 'itemSelected': 'item'}></div>
              <div className={ currImg === 2 ? 'itemSelected': 'item'}></div>
              <div className={ currImg === 3 ? 'itemSelected': 'item'}></div>
          </div>
          </div>
      </div>
      <div className='rightPart'>
          <div className='infoContainer'>
              <h2 className='tituloPagina'> Cotiza desde Aqui!</h2>
              <h2 className='subtituloPagina'>Escribe tu consumo en kWh al bimestre del recibo</h2>
              <input onChange={handleChange} className='inputConsumo' type="text" name="consumo" id="" placeholder='Por Ej. 1530 kwh' />
              <input onClick={handleCotizar} className='botonCotizar' type="button" value="COTIZAR AHORA!" />
              <p className='infoCotizacion'>Esto es un calculo aprox. ya que se tiene que
              acudir al lugar a revisar superficie, ver si el
              lugar tiene sombras etc. 
              </p>
              
              <h3 className='cotizacion'><CurrencyFormat value={cotizacion.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$ '}/> Pesos</h3>
          </div>
      </div>
    </main>
  )
}



