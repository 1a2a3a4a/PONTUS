/**
 * Created by tonyw on 2017-06-03.
 */
import React, { Component } from 'react';
import CandidateList from './CandidateList'

/*
* TODO:
*       search bar
*       list of Candidates
*       Ability to post job notices
*       Pending
*       See candidates who submitted an application
 */
class Employer extends Component{

    render(){
        const inputStyle = {
            width: '20em',
            boxSizing: 'border-box',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize:'16px',
            backgroundColor: 'white',
            backgroundRepeat: 'no-repeat',
            padding: '12px 20px 12px 40px',
            webkitTransition: 'width 0.4s ease-in-out',
            transition: 'width 0.4s ease-in-out',
            marginLeft: '10em',
        };


        return(
            <div>
                <form>
                    <input type="text" name="search" placeholder="Search.." style={inputStyle}/>
                </form>
                <CandidateList/>
            </div>
        )
    }
}

export default Employer;