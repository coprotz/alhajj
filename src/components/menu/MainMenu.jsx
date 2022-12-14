
import React from 'react'
import { useNavigate } from 'react-router-dom'
import bar from '../images/bar.png'
import './menu.css'
import {motion} from 'framer-motion'



const MainMenu = ({setShowMenu}) => {
    const navigate = useNavigate();
  return (
    <div className='main_outer'>
        <motion.div 
             initial={{ x: '100vw'}}
             animate={{x:0}} 
             transition={{ ease: "easeOut", duration: 0.5 }} 
            className="menu_wrapper">
            <div className="menu_barcode">
                <img src={bar} alt="" />
            </div>
            <div 
                className="menu_inner">
                <span onClick={() => {setShowMenu(null); navigate('/')}} className='menu_inner_item'>Home</span>
                <span onClick={() => {setShowMenu(null); navigate('/about')}} className='menu_inner_item'>About</span>
                <span onClick={() => {setShowMenu(null); navigate('/blogs')}} className='menu_inner_item'>Blogs</span>
                <span onClick={() => {setShowMenu(null); navigate('/agents')}} className='menu_inner_item'>Agents</span>
                <span onClick={() => {setShowMenu(null); navigate('/helps')}} className='menu_inner_item'>Helps</span>
                <span onClick={() => {setShowMenu(null); navigate('/teachings')}} className='menu_inner_item'>Teachings</span>
                <span onClick={() => {setShowMenu(null); navigate('/terms')}} className='menu_inner_item'>Terms</span>
                <span onClick={() => {setShowMenu(null); navigate('/privacy')}} className='menu_inner_item'>Privacy</span>
            </div>
            <div className="menu_footer">
                <h4>Powered by BarruTech</h4>
            </div>      

        </motion.div>
      
    </div>
  )
}

export default MainMenu
