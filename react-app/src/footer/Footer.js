import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='App-footer'>
                <div className='right_content'>
                    <p className="content1">Copyright 2019</p>
                    <p className="content2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis.</p>
                </div>
                <div className='left_content'>
                    <p className='left_text'>Contacts: <br />Lviv</p>
                </div>
            </footer>
        )
    }
}

export default Footer;