import React from 'react'

import styles from './index.module.scss'

import Nav from '../nav'

function Layout({ children }) {
  return (

    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content z-50">
        <div className={styles.layout}>
          <Nav />
          <main className=''>{children}</main>
        </div>
      </div>
      <div class="drawer-side">

        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Layout
