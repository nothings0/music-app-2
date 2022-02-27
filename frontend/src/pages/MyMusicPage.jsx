import React from 'react'
import Searching from '../components/Searching'

const ava = require("../assets/ava1.png");

const MyMusicPage = () => {
  return (
    <div className="my_music__page">
      <Searching/>
      <div className="my_music__page__container">
        <div className="my_music__page__container__info">
          <div className="my_music__page__container__info__img">
            <img src={ava} alt="" />
          </div>
          <h3>Nhân</h3>
        </div>
      </div>
    </div>
  )
}

export default MyMusicPage