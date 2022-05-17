import React from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import closeDrawer from '../../utils/index'
import Nav from '../nav'

function Layout({ children }) {

  return (

    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content z-50">
        <Nav />
        <div className="w-11/12 m-auto mt-5">
          <main className=''>{children}</main>
        </div>
      </div>
      <div className="drawer-side">

        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <h1 className='text-2xl p-3'>DevApp</h1>
          <div class="form-control w-full max-w-xs mb-2 pr-2 pl-2">
            <label class="label">
              <span class="label-text">¿Qué estas buscando?</span>
            </label>
            <input type="text" placeholder="Busca una herramienta" class="input input-bordered w-full max-w-xs" />
          </div>
          <span class="label-text text-gray-500 mb-2 mt-2 ml-4">Criptografía</span>
          <li htmlFor="my-drawer">

            <Link href="/token-generator" >
              <a htmlFor="my-drawer" onClick={() => closeDrawer("#my-drawer")}>
                <label htmlFor="my-drawer">
                  Generador de token
                </label>
              </a>
            </Link>
          </li>
          <li htmlFor="my-drawer">
            <Link href="/token-generator" >
              <a htmlFor="my-drawer" onClick={() => closeDrawer("#my-drawer")}>
                <label htmlFor="my-drawer">
                  Otro item
                </label>
              </a>
            </Link>

          </li>
          <span class="label-text text-gray-500 mb-2 mt-2 ml-4">Hojas de trucos</span>
          <li>
            <Link href="/html-to-jsx" onClick={() => closeDrawer("#my-drawer")}>

              <a htmlFor="my-drawer" >
                <label htmlFor="my-drawer">
                  HTML a JSX
                </label>
              </a>

            </Link>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Layout
