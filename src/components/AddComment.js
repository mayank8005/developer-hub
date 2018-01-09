import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import {addComment, editComment} from '../actions/index'
import uuidv1 from "uuid/v1";
import { uploadComment, editServerComment } from '../utils/API'

//This class provide add comment modal in page
//NOTE:-
//unlike its name it can be also used to Edit model
//if you have passes model object as a prop it will act in edit mode
//else it will act in add comment mode

class AddComment extends React.Component{

    style={
        WhiteFont:{
            color:'#FFFFFF'
        }
    }

    state={
        parentId: this.props.parentID,
        author:'',
        body:'',
        editMode: false
    }

    //this method will  change state to edit mode
    setStateToEditMode = ()=>{
        this.setState({...this.props.comment, editMode: true});
    }


    addComment =()=>{

        console.log('adding comment');
        //extracting data
        const {parentId ,author, body} = this.state;
        
        //genrating unique id
        const id = uuidv1();

        //genrating timestamp
        const timestamp = Date.now();

        //checking entries
        if(parentId && author && body){
            //adding comment
            uploadComment({id, timestamp, body, author, parentId}).then(()=>{
            this.props.addComment(id, parentId, timestamp, body, author);
            this.props.close();
            });
        }
        else{
            return;     //error condition due to insuffiecient data
                        //TODO: handle this
        }
    }


    editComment= ()=>{
        console.log('edit comment started');
        //extracting data
        const {id, author, body} = this.state;

        //genrating new timestamp
        const timestamp=Date.now();

        //checking data
        if( id  && body){
            //editing comment
            editServerComment({timestamp, body}, id).then(()=>{
            this.props.editComment(id, body);
            this.props.close();
            });
        }
    }


    handleAuthorChange = (event, value) => this.setState({author:value});

    handleBodyChange = (event, value) => this.setState({body:value});

    componentWillMount(){
        if(this.props.comment&&!this.state.editMode){
            this.setStateToEditMode();
        }
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <TextField
                    floatingLabelText="Name"
                    inputStyle={this.style.WhiteFont}
                    floatingLabelStyle={this.style.WhiteFont}
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                    disabled={this.state.editMode?true:false}
                /><br />
                <TextField
                    floatingLabelText="Type your comment here..."
                    multiLine={true}
                    textareaStyle={this.style.WhiteFont}
                    fullWidth={true}
                    floatingLabelStyle={this.style.WhiteFont}
                    value={this.state.body}
                    onChange={this.handleBodyChange}
                    rows={3}
                /><br />
                <RaisedButton
                    label="Cancel"
                    backgroundColor='#F44336'
                    onClick={this.props.close}
                    />
                <RaisedButton
                    label="Publish"
                    backgroundColor="#a4c639"
                    keyboardFocused={true}
                    onClick={this.state.editMode?this.editComment:this.addComment} 
                />
            </div>   
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        addComment: (id, parentID, timestamp, body, author)=>{
            dispatch(addComment(
                id,
                parentID,
                timestamp,
                body,
                author
            ));
        },
        editComment:(id, body)=>{
            dispatch(editComment(
                id,
                body
            ));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(AddComment);