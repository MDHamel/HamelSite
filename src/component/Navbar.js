import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component{
    render() {
        return(
            <div className='outter'>
                <a id="special">secret</a>
                <nav>
                    <Navi link="/">Home</Navi>
                    <Navi link="/code">code</Navi>
                    <Navi link="/exp">experience</Navi>
                    <Navi link="/aboutme">about me</Navi>
                </nav>
            </div>
            
        );
    }
}

class Navi extends React.Component{
    render(){
        return(
            <Link  to={this.props.link}>{this.props.children}</Link>
        )
    }
}

export default Navbar;