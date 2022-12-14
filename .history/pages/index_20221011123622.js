import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Minter from '../components/Minter'
import NavBar from '../components/NavBar'
import { Footer } from '../components/Footer';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Super! Mint Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">

     
        <NavBar />
        <Minter  />
        </div>
    <div className='moving-background'></div>
    <Footer/>
    </div>

     
  
    
  )
}
