import React, { useContext } from 'react'
import Link from 'next/link'

import styles from './index.module.scss'
import StoreContext from '../../store'
import { RiMenu2Line } from 'react-icons/ri'
function Nav() {
  const store = useContext(StoreContext);
  return (
    <div className="navbar sticky bg-slate-900 top-0 left-0 z-40 w-full transition-colors duration-900">
      <div className="flex-none">
        <label for="my-drawer" className="btn bg-transparent border-none hover:bg-transparent normal-case text-xl">
          <RiMenu2Line />
        </label>
      </div>
      <div className="flex-1">
        <a className="btn bg-transparent  border-none hover:bg-transparent normal-case text-xl">DevApp</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Buscar" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <div class="form-control">
                <label class="label cursor-pointer justify-between w-full" onClick={() =>
                  store.changeTheme(
                    store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
                  )
                }>
                  <span class="label-text">Tema</span>
                  <input type="checkbox" class="toggle toggle-secondary" />
                </label>
              </div>
            </li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

    // <nav className={styles.nav}>
    //   {Object.keys(PAGES).map((key) => {
    //     const PAGE = PAGES[key]
    //     return (
    //       <Link href={PAGE.path} key={`link-${key}`}>
    //         <a>{PAGE.name}</a>
    //       </Link>
    //     )
    //   })}
    //   <Button
    //     onClick={() =>
    //       store.changeTheme(
    //         store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    //       )
    //     }
    //   >
    //     {store.theme === THEME.LIGHT ? 'Dark' : 'Light'}
    //   </Button>
    // </nav>
  )
}

export default Nav
