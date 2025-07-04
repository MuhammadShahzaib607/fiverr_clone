import React from 'react'
import "./home.scss"
import Featured from '../../components/featured/featured.jsx'
import TrustedBy from '../../components/trustedBy/TrustedBy.jsx'
import Slide from '../../components/slide/Slide.jsx'
import { cards, projects } from '../../data.js'
import CatCard from '../../components/catCard/CatCard.jsx'
import ProjectsCard from '../../components/projectsCard/ProjectsCard.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => {
          return <CatCard item={card} key={card?.id} />
        })}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features_2">
        <div className="container">
          <div className="item">
            <h1>fiverr <i>business</i></h1>
            <h1>a business solution design for <span>terms</span></h1>

            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>

            </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
          </div>
        </div>
      </div>

<Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => {
          return <ProjectsCard item={card} key={card?.id} />
        })}
      </Slide>

    </div>

  )
}

export default Home