import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AlbumPage from '../pages/AlbumPage'
import ChartPage from '../pages/ChartPage'
import FavoritePage from '../pages/FavoritePage'
import HomePage from '../pages/HomePage'
import MyMusicPage from '../pages/MyMusicPage'
import SettingPage from '../pages/SettingPage'
import Auth from '../components/Auth'
import Register from '../components/Register'
import User from '../pages/User'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/mymusic' element={<MyMusicPage/>}/>
      <Route path='/album/:slug' element={<AlbumPage/>}/>
      <Route path='/chart' element={<ChartPage/>}/>
      <Route path='/setting' element={<SettingPage/>}/>
      <Route path='/favorite' element={<FavoritePage/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
  )
}

export default MainRouter