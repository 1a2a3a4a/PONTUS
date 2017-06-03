/**
 * Created by tonyw on 2017-06-03.
 */
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
    blue300,
    indigo900,

} from 'material-ui/styles/colors';

class Candidate extends Component{
    render(){

        const style = {margin: 5};

        return(
            <div>
                <MuiThemeProvider>
                    <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail"/>}
                            color={blue300}
                            backgroundColor={indigo900}
                            size={45}
                            style={style}
                    />
                </MuiThemeProvider>
            </div>
        )
    }

}


export default Candidate