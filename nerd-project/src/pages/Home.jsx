import React from 'react'
import nerd from '../assets/img/nerd.png'
import { Layout, Slide } from '../components'
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  return (
    <Layout>
      <Carousel>  
          <div>
            <Slide src={nerd} />
          </div>
          <div>
            <Slide src={nerd} />
          </div>
      </Carousel>
    </Layout>
  )
}
