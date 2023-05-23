import React, { useState } from 'react'
import "./styles/Navigation.scss"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import {GeneralModal} from './GeneralModal'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

const Navigation = () => {

    const [showLinks, setShowLinks] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const showLoginModal = () => {
      setIsLoginModalOpen(true);
    };

  return (
   <>
    <header>
    <h3>FlowrSpot</h3>
    <nav className={showLinks?'mobile-nav': ""}>
        <a href="/#">Flowers</a>
        <a href="/#">Latest Sightings</a>
        <a href="/#">Favorites</a>
        <a href="/#" id='login'onClick={showLoginModal}>Login</a>
        <button className='new-account-btn' onClick={showModal}>New Account</button>
    </nav>


   {showLinks? 
        <button className="close-btn" onClick={() =>setShowLinks(false)}>
         <CloseOutlined style={{ fontSize: '150%'}}/>
        </button>  
        :
        <button className="open-btn" onClick={() =>setShowLinks(true)}>
         <MenuOutlined style={{ fontSize: '150%'}} />
        </button>
   }   
  </header>

   <GeneralModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
   formComponent={<SignUpForm/>}
   buttonName={"Create Account"}
   title="Create an Account"/>

   <GeneralModal isModalOpen={isLoginModalOpen} setIsModalOpen={setIsLoginModalOpen}
   formComponent={<LogInForm/>}
   buttonName={"Login to your Account"}
   title="Welcome Back!"/>   
 </>
  )
}

export default Navigation