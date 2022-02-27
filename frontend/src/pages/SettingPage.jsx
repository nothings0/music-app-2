import React, { useState, useContext } from "react";
import Searching from "../components/Searching";
import { SongContext } from '../Contexts/SongContext';
import { a } from "react-router-dom";

const SettingPage = () => {
  const { dark, setDark } = useContext(SongContext)
  const [toggle, setToggle] = useState(1)
  const handleMode = () => {
    setDark(!dark)
  }
  
  return (
    <div className="setting__page">
      <Searching />
      <div className="tabs__box">
        <div class="tabs">
          <div class={`tab-item ${toggle === 1 ? 'active' : ''}`} onClick={() => setToggle(1)}>
            <i class="tab-icon fas fa-code"></i>
            Giao diện
          </div>
          <div class={`tab-item ${toggle === 2 ? 'active' : ''}`} onClick={() => setToggle(2)}>
            <i class="tab-icon fas fa-cog"></i>
            Giới thiệu
          </div>
          <div class={`tab-item ${toggle === 3 ? 'active' : ''}`} onClick={() => setToggle(3)}>
            <i class="tab-icon fas fa-plus-circle"></i>
            Liên hệ
          </div>
          <div class={`tab-item ${toggle === 4 ? 'active' : ''}`} onClick={() => setToggle(4)}>
            <i class="tab-icon fas fa-pen-nib"></i>
            Trợ giúp
          </div>
          {/* <div class="line"></div> */}
        </div>

        <div class="tab-content">
          <div class={`tab-pane ${toggle === 1 ? 'active' : ''}`}>
            <h2>Giao diện</h2>
            <div className="dark__mode">
              <span>*</span>
              <input type="checkbox" onChange={handleMode}/>
              <span>)</span>
            </div>
          </div>
          <div class={`tab-pane ${toggle === 2 ? 'active' : ''}`}>
            <h2>Giới thiệu</h2>
            <p>
              Đây là sản phầm phục vụ quá trình học tập của mình, web phi lợi nhuận.
              Trong project sự dụng: <span>Reactjs</span> <span>Nodejs</span> <span>Api: zingmp3Api</span>
            </p>
          </div>
          <div class={`tab-pane ${toggle === 3 ? 'active' : ''}`}>
            <h2>Liên hệ</h2>
            <div className="button-container">
              <div className="button-container__item">
                <a className='ri-facebook-fill' href='https://www.facebook.com/nothings0/'></a>
              </div>
              <div className="button-container__item">
                <a className='ri-github-fill' href='https://github.com/nothings0'></a>
              </div>
              <div className="button-container__item">
                <a className='ri-instagram-fill' href='https://www.instagram.com/nothing0s/'></a>
              </div>
              <div className="button-container__item">
                <a className='ri-linkedin-fill' href='/'></a>
              </div>
            </div>
          </div>
          <div class={`tab-pane ${toggle === 4 ? 'active' : ''}`}>
            <h2>Trợ giúp</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci error quidem atque dicta incidunt dolor cum consectetur quod veritatis nam neque eum at facere, asperiores a, explicabo fugit aperiam architecto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
