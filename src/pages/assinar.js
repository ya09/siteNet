import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Online.module.css'
import NavBar from '@/componets/navBar'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componets/navegar'
import Rodape from '@/componets/rodape';
import FormCadastro from '@/componets/formOnline';
import TituloOnline from '@/componets/tituloOnline';

const inter = Inter({ subsets: ['latin'] })

export default function Assinar() {
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
      <TituloOnline/>
      <FormCadastro/>
      <Rodape/>
      </div>
    </>
  )
}