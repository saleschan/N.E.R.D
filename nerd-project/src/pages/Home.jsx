import React from 'react'
import nerd from '../assets/img/nerd.png'
import { Layout, Slide } from '../components'
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  const array = [
    <Slide src={nerd} />,
    <Slide src={nerd} />,
    <Slide src={nerd} />,
    <Slide src={nerd} />
  ]


  return (
    <Layout>
      <Carousel
        width={'100%'}
        swipeable={true}
        emulateTouch={true}
        centerMode
      >    
        {array}
      </Carousel>
    </Layout>
  )
}
