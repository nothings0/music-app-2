import React, { useContext } from 'react';

import { SongContext } from '../Contexts/SongContext';
import AlbumRight from './AlbumRight';

const album1 = require("../assets/fv1.jpg")
const album2 = require("../assets/fv2.jpg")
const album3 = require("../assets/fv3.jpg")

const Album = () => {

    const { listRender } = useContext(SongContext)

  return (
      <div className="album">
            <div className="album__left">
                <div className="album__left__heading">Favorite <span>album</span></div>
                <div className="album__left__list">
                    <div className="album__left__list__item">
                        <img src={album1} alt="" />
                    </div>
                    <div className="album__left__list__item">
                        <img src={album2} alt="" />
                    </div>
                    <div className="album__left__list__item">
                        <img src={album3} alt="" />
                    </div>
                </div>
            </div>
            <AlbumRight listRender={listRender}/>
      </div>
  )
};

export default Album;
