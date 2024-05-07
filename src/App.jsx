import React from 'react'
import './App.css'
import Filter from './components/Filter'

function App() {

  const destinationsList = [
    {
      id: 1,
      text: 'Melaka Mosque',
      img: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
    },
    {
      id: 2,
      text: 'Shrubland',
      img: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
    },
    {
      id: 3,
      text: 'New York',
      img: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
    },
    {
      id: 4,
      text: 'Escarpment',
      img: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
    },
    {
      id: 5,
      text: 'Westminster Abbey',
      img:
        'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
    },
    {
      id: 6,
      text: 'South Downs National Park',
      img:
        'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
    },
    {
      id: 7,
      text: 'National Historic Site',
      img:
        'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
    },
    {
      id: 8,
      text: 'Tower Bridge',
      img: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
    },
    {
      id: 9,
      text: 'Arc Here',
      img: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
    },
    {
      id: 10,
      text: 'Steeple',
      img: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
    },
    {
      id: 11,
      text: 'Glaciokarst',
      img: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
    },
    {
      id: 12,
      text: 'Parco Nazionale delle Cinque Terre',
      img:
        'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
    },
  ]

  return (
    <>
      <Filter destinationsList={destinationsList} />
    </>
  )
}

export default App
