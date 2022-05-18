import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Reg from './reg'
import Navbar from '../Components/navbar'
import Comp from '../Components/c2'
import Com from '../Components/c1'


import Link from 'next/link'

export default function Home() {
  return (
    <>

    <div className="">
      <Navbar />
      <Comp></Comp>
      <Com></Com>

      

      

      Home page
      
    </div>
    </>
  )
}
