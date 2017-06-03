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
            </div>
        )
    }
}


export default Candidate