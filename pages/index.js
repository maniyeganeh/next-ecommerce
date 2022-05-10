import React, { Fragment } from 'react'
import { client } from "../lib/client"
import { Product, FooterBanner, HeroBanner } from '../components'
const Home = ({ products, bannerData }) => {

  return (
    <Fragment>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>
          Best Selling
        </h2>
        <p>
          Speakers of many variation
        </p>
        <div className='products-container'>
          {
            products?.map((product) => (
              <Product
                key={product._id}
                product={product}
              />
            ))
          }

        </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </Fragment>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}
export default Home