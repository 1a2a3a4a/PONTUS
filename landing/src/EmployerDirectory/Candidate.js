/**
 * Created by tonyw on 2017-06-03.
 */
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import People from 'material-ui/svg-icons/social/people'

class Candidate extends Component{

    render(){
    const style = {margin: 5};
        return(
            <div>
                <MuiThemeProvider>
                    <Avatar icon={<People/>}
                            size={45}
                            style={style}
                    />
                </MuiThemeProvider>
                <CandidateInformation/>
            </div>
        )
    }
}


class CandidateInformation extends Component{

    render(){
        const styles ={
            display: 'inline-block',
            margin: '0.6em',
            position: 'absolute',
            float: 'right',
        };
        return(

            <div style={styles}>
                <span>Lorum Ipsum etc.</span>
                <br/>
                <span>More latin words etc.</span>
            </div>
        )
    }
}


export default Candidate