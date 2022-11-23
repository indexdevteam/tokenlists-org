import React, { useEffect } from 'react'
import Header from '../components/header'

import '../index.css'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="home-content">
        <div>
          <section className="hero">
            <small style={{ marginTop: '4rem', marginBottom: '1rem' }}>Maintained by Index Dev Team</small>
            <p className="title">Why tokens lists?</p>

            <p className="description" id="why-lists">
              Token Lists aim to solve the problem of the ERC-20 community creating, discovering and maintaining lists
              of reputable tokens in a way that is inclusive, transparent, decentralized and open source.
            </p>
            <h2>Enter Token lists</h2>
            <p>
              The goal of Token Lists is to enable trust to emerge around reputable tokens in a way that is aligned with
              the values of decentralization.
            </p>
            <p>
              Token Lists is a json schema standard that enables exactly this. Projects can encode lists of
              reputable tokens in a machine readable way. Anyone can make a list. These lists can then be imported into
              a swap interface.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
