/**
 * Created by tonyw on 2017-06-03.
 */
import React, { Component } from 'react';
import 'employerCSS.css';
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
        return(
            <div>
                <form>
                    <input type="text" name="search" placeholder="Search.."/>
                </form>
                <CandidateList/>
            </div>
        )
    }
}


export default Employer;