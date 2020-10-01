import React, { Component } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Graph from './Graph'
import { BsArrowUpRight } from 'react-icons/bs'
import { BsArrowDownRight } from 'react-icons/bs'
import Homework from '../products/Homework'

library.add(faHeartbeat)

class StarterLevel extends Component {
    
    render() { 
        return ( 
          <div className='body'> 
            <div className='main'>
              <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">Starter Level</span>
                      <span class="card-title2">6/40 уроков пройдено</span>
                        <div className='two'>
                          <div className='bottom'>
                            <FontAwesomeIcon className="heartbeat" icon='heartbeat' />
                            <h2 className='percent'><span className='span'>15</span>%</h2>
                          
                            <div className='para'>
                              <p>Уровня</p>
                              <p>Пройдено</p>
                            </div>
                          </div>
                        <div className='bottom'>
                          <h2><span className='span'>15</span>%</h2>
                          <div className='para'>
                              <p>Uroven</p>
                              <p>Proyden</p>
                          </div>
                        </div>
                      </div>
                        
                    </div>  
                  </div>
                </div>
              </div>
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                      <div class="card-content">
                        <span class="card-title">Баланс уроков</span>
                      <div className='two'>
                        <div className='bottom'>
                          <h2><span className='span'>15</span>%</h2>
                          <div className='para'>
                              <p>Uroven</p>
                              <p>Proyden</p>
                          </div>
                        </div>
                        <div className='bottom'>
                          <h2><span className='span'>15</span>%</h2>
                          <div className='para'>
                            <p>Uroven</p>
                            <p>Proyden</p>
                            </div>
                          
                        </div>
                      </div>
                  </div>
                      
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                      <div class="card-content white-text">
                        <span class="card-title">Моя оценка</span>
                        <div className='two'>
                        <div className='bottom'>
                          <h2><span className='span'>15</span>%</h2>
                          <div className='para'>
                              <p>Uroven</p>
                              <p>Proyden</p>
                          </div>
                        </div>
                        <div className='bottom'>
                          <h2><span className='span'>15</span>%</h2>
                          <div className='para'>
                              <p>Uroven</p>
                              <p>Proyden</p>
                          </div>
                          
                        </div>
                      </div>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                </div>
                <div className='chart'>
                  
                </div>
                <div className='container'>
                  <div className='item--1'>
                    <Homework />
                  </div>
                  <div className='item--2'>1: Orange</div>
                  <div className='item--3'>
                    <Graph className='graph'/>
                    <div className='statistics'>
                      <div className='stat-icons'>
                        <h4 className='stat-title'><BsArrowUpRight color='blue' size="13px"/>Reading</h4>
                        <h1 className='stat-num'>84</h1>
                      </div>
                      <div className='stat-icons'>
                        <h4 className="stat-title"><BsArrowUpRight color='blue' size="13px"/>Listening</h4>
                        <h1 className='stat-num'>84</h1>
                      </div>
                      <div className='stat-icons'>
                        <h4 className="stat-title"><BsArrowUpRight color='blue' size="13px"/>Speaking</h4>
                        <h1 className='stat-num'>84</h1>
                      </div>
                      <div className='stat-icons'>
                        <h4 className="stat-title"><BsArrowDownRight color='red' size="13px"/>Grammar</h4>
                        <h1 className='stat-num'>84</h1>
                      </div>
                      <div className='stat-icons'>
                        <h4 className="stat-title"><BsArrowUpRight color='gray' size="13px"/>Reading</h4>
                        <h1 className='stat-num'>84</h1>
                      </div>
                      <div className='stat-icons'>
                        <h4 className='stat-title'><BsArrowUpRight color='gray' size="13px"/>Reading</h4>
                        <h1 className='stat-num'>84</h1>
                      </div>               
                    </div>
                    </div>
                  
                </div>
                
              </div>       
         );
    }
}
 
export default StarterLevel;