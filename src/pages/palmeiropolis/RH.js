import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Confirmacao.module.css'
import NavBar from '@/componetns/palmeiropolis/navBar'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componetns/palmeiropolis/navegar'
import Rodape from '@/componetns/palmeiropolis/rodape';
import FormRH from '@/componetns/formRH';


const inter = Inter({ subsets: ['latin'] })

export default function RH() {
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
      <FormRH/>
      <Rodape/>
      </div>
    </>
  )
}