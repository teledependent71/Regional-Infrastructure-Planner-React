import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Infrastructure Planner</title>
        <meta property="og:title" content="Regional Infrastructure Planner" />
      </Helmet>
    </div>
  )
}

export default Home
