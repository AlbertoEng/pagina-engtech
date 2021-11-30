import React from 'react';
import { useState, useEffect } from 'react'
import Head from 'next/head';
import {useRouter} from 'next/router'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

const Layout = ( props )=>{
    const router = useRouter();
    const [entrada, setEntrada] = useState(false);
    const [currPage, setCurrPage] = useState('paneles');

    const body = (
        <>
            <Head>
                <title>Engtech</title>
                <meta property="og:title" content="Sitio Web oficial de Engtech" key="Engtech paneles solares automatizacion camaras de seguridad cctv alarmas " />
            </Head>
            <div className='home'>
                <div className='capaTransparente'>
                <Navbar />
                    {props.children}
                <Footer />
                </div>
            </div>
        </>
    );

    useEffect(()=>{
        setTimeout(()=>{
          setEntrada(true);
        },1500)
    })

    return (
        <>
            { router.pathname === '/' && !entrada ? (
                <>
                    <Head>
                        <title>Engtech</title>
                        <meta property="og:title" content="Sitio Web oficial de Engtech" key="Engtech" />
                    </Head>
                    <div className={styles.container}>
                        <img className='logo' src="/logo2.svg" alt=""  />
                    </div>
                </>
                ) : body
                
            }
        </>
    );
}

export default Layout;