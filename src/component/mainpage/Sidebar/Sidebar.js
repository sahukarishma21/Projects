import React from 'react'
import './Sidebar.css';
import { AiFillAppstore, AiOutlineLogout  } from "react-icons/ai";
import {  RiPlantFill } from "react-icons/ri";
import {  FaPuzzlePiece } from "react-icons/fa";
import {  FcFaq } from "react-icons/fc";
import {   MdSupportAgent } from "react-icons/md";
import logo from '../../../assest/img.jpeg';
function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <ul>
                    <li>
                <div className='imgcreate'>
                    <img src={logo} alt='image name' />
                </div>
                </li>
                <li>
                <a>
                    <div className='image'>
                        <img src='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div><br/>
                    <div>
                    <h3 className='hh'>Engin Akyurt</h3><br/>
                    <p className='para'>Eakyurt234@gmail.com</p>
                    </div>
                </a>
                </li>
                <li>
                <a>
                < AiFillAppstore className='dash' />
              Dashbord
                </a>
                </li>
                <li>
                <a>
                < RiPlantFill className='per' />
              Perk
                </a>
                </li>
                <li>
                <a>
                <FaPuzzlePiece className='puz' />
              Addons
                </a>
                </li>
                <li>
                <a>
                < FcFaq className='faq' />
              FAQ
                </a>
                </li>
                <li>
                <a>
                < MdSupportAgent className='support' />
              Support
                </a>
                </li>
                <li>
                <a>
                <AiOutlineLogout className='log' />
              Logout
                </a>
                </li>
                </ul>
        </div >
        </>

    )
}

export default Sidebar;