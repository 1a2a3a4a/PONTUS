/**
 * Created by tonyw on 2017-06-03.
 */
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import People from 'material-ui/svg-icons/social/people'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


class CandidateList extends Component{

    generateCandidates(length){
        let candidateArray = [];
        for(let i = 0; i < length; i++){
            candidateArray.push(<ListItem  key={i} leftAvatar={ <Candidate/>}/>)
        }
        return candidateArray;
    }

    render(){
        const candidateListItems = this.generateCandidates(10)

        const scrollBar = {
            overflow: 'scroll',
            height: '30em',
            overflowX:'hidden',
    };

        return(
            <div style={scrollBar}>
                <MuiThemeProvider>
                <List>
                    {candidateListItems}
                </List>
                </MuiThemeProvider>
            </div>
        )
    }
}


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


export default CandidateList