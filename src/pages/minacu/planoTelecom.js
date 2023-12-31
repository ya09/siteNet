import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Plano.module.css'
import NavBar from '@/componetns/minacu/navBar'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componetns/minacu/navegar'
import TablePlan from '@/componetns/minacu/tabelaPlano';
import Rodape from '@/componetns/minacu/rodape';
import BannerTelecom from '@/componetns/bannerTelecom';



const inter = Inter({ subsets: ['latin'] })

export default function Plano() {
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
        <BannerTelecom/>
      <TablePlan/>
      <Rodape/>
      </div>
    </>
  )
}