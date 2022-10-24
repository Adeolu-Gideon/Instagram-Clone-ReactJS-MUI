import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import PrimarySearchAppBar from './components/AppBar'
//import NavBar from './components/NavBar'
//import ScrollableTabsButtonAuto from './components/Tabs'
//import IconLabelTabs from './components/MobileTabs'
//import RecipeReviewCard from './components/Movies'
//import ResponsiveAppBar from './components/AppBar'
//import SimpleBottomNavigation from './components/BottomNav'
//import SimplePaper from './components/MovieSection'
//import CategoriesSlider from './components/CategorieSlider'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile'


const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<* />} exact /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/" element={<Profile/>}/>
      </Routes>
      {/* <ResponsiveAppBar /><br /> */}
      
      {/* <ScrollableTabsButtonAuto />
      <IconLabelTabs /> */}
      {/* <GetMovies/> */}
      {/* <CategoriesSlider/> */}
      {/* <RecipeReviewCard/><br /> */}
      {/* <SignIn />
      <SignUp/> */}
      {/* <SimpleBottomNavigation/> */}
    </div>
  )
}

export default App