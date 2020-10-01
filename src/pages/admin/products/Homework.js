import React, { Component } from 'react';
import './style.css'


class Homework extends Component {
    
    render() { 
        return ( 
            <div className='challenge'>
                <div className='header'>
                    <div className='first-header'>
                        <div className="first-p">
                            <p>Слелующий урок</p>
                        </div>
                        <div className="second-p">
                            <p>Забронировать</p>
                        </div>
                   
                    </div>
                </div>
                <div className='main-content'>
             
                </div>
                <div className='sidebar'>
                    <div className='sidebar-p'>
                       <p>Не назначён</p> 
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Homework;