import Head from 'next/head'
import { Inter } from 'next/font/google'

import NavBar from '@/componets/campinacu/navBar'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navegacao from '@/componets/campinacu/navegar'
import TablePlan from '@/componets/campinacu/tabelaPlano';
import Rodape from '@/componets/rodape';
import BannerTelecom from '@/componets/bannerTelecom';
import TableTelecom from '@/componets/campinacu/tabelaTelecom';



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
      <Navegacao/>
        <BannerTelecom/>
      <TableTelecom/>
      <Rodape/>
    </>
  )
}