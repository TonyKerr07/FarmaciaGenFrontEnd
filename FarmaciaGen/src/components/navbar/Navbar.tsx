import React from 'react'
import Perfil from '../../assets/user 1.png'
import Carrinho from '../../assets/shopping-cart 1.png'
import LogoFarm from '../../assets/logo_farmacia 1.png'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'


function Navbar() {
  let navigate = useNavigate()

  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div><Link to='/home'><img src={LogoFarm} alt="" className='LogoFarmacia' /></Link></div>

          <div className=''><label htmlFor="Procurar"><input
                type="text"
                placeholder="Procurar"
                name='procurar'
                className="border-2 border-slate-700 p-2 LabelProcurar"
              /></label>
            </div>

          <div className='flex gap-4 '>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
            <Link to='/login'><img src={Perfil} alt="" className='IconeNavBar' /></Link>
            <div className='hover:underline'><img src={Carrinho} alt="" className='IconeNavBar' /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar