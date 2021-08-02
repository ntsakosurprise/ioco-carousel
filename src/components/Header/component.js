import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{

    render(){

        return(
            <header className="header">
               <section className="header__brand">
                   <Link to='/'  className="header__brand--link">
                    <img src="/img/mtn_logo.png" alt="MTN Logo" className="header__brand--link-logo" />
                   </Link>
               </section>
               <section className="header__primary-nav">
                   <nav className="header__primary-nav--nav">
                        <Link to='/store' className="header__primary-nav--nav-link">Store</Link>
                        <Link to='/products-services' className="header__primary-nav--nav-link">Products & Services</Link>
                        <Link to='/help-support' className="header__primary-nav--nav-link">Help & Support</Link>
                        

                   </nav>
               </section>
               <section className="header__secondary-nav">
                   <nav className="header__secondary-nav--nav">
                        
                        <Link to='/personal' className="header__secondary-nav--nav-link">
                            <span className="header__secondary-nav--nav-link-circle" />
                            <span className="header__secondary-nav--nav-link-text">
                                Personal
                            </span></Link>

                   </nav>
               </section>
               <strong className="clearfix" />
            </header>
        )
    }
}


export default Header