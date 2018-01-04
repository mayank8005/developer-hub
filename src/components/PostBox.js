import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PostCard from './PostCard';
import Dialog from 'material-ui/Dialog';
import AddPost from './AddPost'
import { connect } from 'react-redux'


//Post box class renders posts posted by users
class PostBox extends React.Component{

    state={
        addPostOpen:false,
    }

    handleOpenPost = () => {
        this.setState({addPostOpen: true});
      };
    
    handleClosePost = () => {
        this.setState({addPostOpen: false});
      };

    render(){

        return (
            <section className='PostBox'>
                <div className='AddPostArea'>
                <RaisedButton
                    label="Add Post"
                    labelPosition="after"
                    primary={true}
                    onClick={this.handleOpenPost}
                    icon={<ContentAdd />}
                />
                <Dialog
                    title={<h1>Add Post</h1>}
                    modal={false}
                    open={this.state.addPostOpen}
                    onRequestClose={this.handleClose}
                    bodyClassName='dialog'
                    titleClassName='dialog-title'
                    actionsContainerClassName='dialog-action'
                >
                    <AddPost close={this.handleClosePost} open={this.handleOpenPost}/>
                </Dialog>
                </div>
                <div className='PostsArea'>
                    {this.props.posts.map((post)=>{
                        return (
                        <PostCard post={post} key={post.id} link={true}/>
                    );})}
                
                </div>
            </section>
        );
    }
}

function mapStateToProps(state){
    return{
      posts: state.posts||[]            //it will create a prop property containing all posts stored in store 
    }                                   //in case of error or state.props not defined it will  set a blank array
  }

export default connect(mapStateToProps)(PostBox);