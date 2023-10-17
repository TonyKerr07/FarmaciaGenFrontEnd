import React from 'react';
import homeLogo from '../../assets/Home.png'
import imagem1 from '../../assets/imagem1.png'
import imagem2 from '../../assets/imagem2.png'
import imagem3 from '../../assets/imagem3.png'
import imagem4 from '../../assets/imagem4.png'
import imagem5 from '../../assets/imagem5.png'

import './Home.css';

function Home() {
  return (
    <>
      <div className="bg-blue-farm flex justify-center">
        <div className='container grid grid-cols-2'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
            <p className='text-xl'>Aqui você enconta Medicamentos e Cosméticos!</p>

            <div className="flex justify-around gap-4">

              <button className='rounded bg-indigo-800 text-white py-2 px-4'>Cadastrar produtos</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />

          </div>
        </div>
      </div>

      <div className='flex justify-center fundoProdutos'>

        <div className="flex flex-col max-w-sm border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden justify-between cardInteiro">
          <div className='cardImagemFinal'>
            <img className="rounded-t-lg" src={imagem1} alt="" />

          </div>
          <div className="cardTexto">

            <h5 className="tracking-tight text-gray-900 dark:text-white CardNome">Vitamina D3</h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white CardPreco">R$ 50,00</h5>

          </div>

          <div>
            <h5 className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">Comprar</h5>

          </div>
        </div>

        <div className="flex flex-col max-w-sm border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden justify-between cardInteiro">
          <div className='cardImagemFinal'>
            <img className="rounded-t-lg" src={imagem2} alt="" />

          </div>
          <div className="cardTexto">

            <h5 className="tracking-tight text-gray-900 dark:text-white CardNome">Lenços Umidecidos</h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white CardPreco">R$ 90,00</h5>

          </div>

          <div>
            <h5 className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">Comprar</h5>

          </div>
        </div>

        <div className="flex flex-col max-w-sm border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden justify-between cardInteiro">
          <div className='cardImagemFinal'>
            <img className="rounded-t-lg" src={imagem3} alt="" />

          </div>
          <div className="cardTexto">

            <h5 className="tracking-tight text-gray-900 dark:text-white CardNome">Creme hidratante</h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white CardPreco">R$ 30,00</h5>

          </div>

          <div>
            <h5 className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">Comprar</h5>

          </div>
        </div>

        <div className="flex flex-col max-w-sm border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden justify-between cardInteiro">
          <div className='cardImagemFinalDiferente'>
            <img className="rounded-t-lg" src={imagem4} alt="" />

          </div>
          <div className="cardTexto">

            <h5 className="tracking-tight text-gray-900 dark:text-white CardNome">Paracetamol</h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white CardPreco">R$ 25,00</h5>

          </div>

          <div>
            <h5 className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">Comprar</h5>

          </div>
        </div>

        <div className="flex flex-col max-w-sm border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden justify-between cardInteiro">
          <div className='cardImagemFinalBox'>
            <img className="rounded-t-lg" src={imagem5} alt="" />

          </div>
          <div className="cardTexto">

            <h5 className="tracking-tight text-gray-900 dark:text-white">Xarope</h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">R$ 85,00</h5>

          </div>

          <div>
            <h5 className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">Comprar</h5>

          </div>
        </div>

      </div>

    </>
  );
}

export default Home;