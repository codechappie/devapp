import React, { useContext } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Layout from '../components/layout'
import { THEME } from '../constants'
import Button from '../components/button'

function HomePage() {
  const store = useContext(StoreContext)

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(card => (
            <div key={card} className="tool-card card w-auto bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="icon">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                </div>
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                {
                  card === 2 ? (
                    <p>If a dog chews shoes whose shoes does he choose lorem asdasd sad sadagthy6th erwwfht thwefwe wefwefw efwe fwefwf?</p>
                  ) : (
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>

    </Layout>
  )
}

export default HomePage
