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
          <li htmlFor="my-drawer">
            <label htmlFor="my-drawer">
              <Link href="/token-generator" >
                <a htmlFor="my-drawer" onClick={() => closeDrawer("#my-drawer")}>
                  Generador de token
                </a>
              </Link>
            </label>
          </li>
          <li><a>Sidebar Item 2</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Layout
