import React from 'react';
import './Aside.css';

class Aside extends React.Component {
    render() {
        return (
            <aside className='App-aside'>
                <div className='news'>
                    <h2 className="aside_title">This is the first news on blog</h2>
                    <p className="aside_text">Lorem ipsum dolor sit amet, conse ctetuer. Duis autem vemeu
                      iriure dolor
                      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat wisi
                      enim.</p>
                </div>
                <div className='news'>
                    <h2 className="aside_title">This is the first news on blog</h2>
                    <p className="aside_text">Lorem ipsum dolor sit amet, conse ctetuer. Duis autem vemeu
                      iriure dolor
                      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat wisi
                      enim.</p>
                </div>
            </aside>
        )
    }
}

export default Aside;