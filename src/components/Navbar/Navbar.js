import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

class Navbar extends Component{
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render (){
        return (
            <nav className="NavbarItems">
                {/*<h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>*/}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <motion.ul 
                className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness:120}}
                >
                    {MenuItems.map((item, index) =>{
                        
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url} onClick={this.handleClick}>
                                {item.title}
                                </Link>
                            </li>
                        )
                        
                    })}
                    
                </motion.ul>
                
            </nav>

        )
    }
}

export default Navbar