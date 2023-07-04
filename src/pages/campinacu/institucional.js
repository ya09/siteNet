import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Institucional.module.css'
import NavBar from '@/componetns/campinacu/navBar'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componetns/campinacu/navegar'
import Texto from '@/componetns/texto';
import Rodape from '@/componetns/campinacu/rodape';



const inter = Inter({ subsets: ['latin'] })

export default function Institucional() {
  return (
    <>
      <Head>
        <title>Integrato</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <div className= {styles['body']}>
      <Navegacao/>
      <Texto/>
      <Rodape/>
      </div>
      
    </>
  )
}
