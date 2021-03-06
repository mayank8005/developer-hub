// ACTIONS RELATED TO POST
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UP_POST_RATE = 'UP_POST_RATE'
export const DOWN_POST_RATE = 'DOWN_POST_RATE'
export const EDIT_POST = 'EDIT_POST'
export const UPDATE_POSTS = 'UPDATE_POSTS'
export const SET_POST = 'SET_POST'
export const INCREASE_NO_OF_COMMENTS = 'INCREASE_NO_OF_COMMENTS'
export const DECREASE_NO_OF_COMMENTS = 'DECREASE_NO_OF_COMMENTS'

//ACTION RELATED TO COMMENTS
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UP_COMMENT_RATE = 'UP_COMMENT_RATE'
export const DOWN_COMMENT_RATE = 'DOWN_COMMENT_RATE'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS'

//ACTIONS RELATED TO CATEGORY
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
export const ADD_CATEGORIES = 'ADD_CATEGORIES' 

//ACTION RELATED TO SORTING
export const SET_SORT = 'SET_SORT' 

//POST ACTION CREATERS
export function addPost(id, timestamp, title, author, body, category){
    return{
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category
    }
}

export function editPost(id, title, body ){
    return{
        type: EDIT_POST,
        id,
        title,
        body
    }
}

export function deletePost(id){
    return{
        type: DELETE_POST,
        id
    }
}

export function upPostRate(id){
    return{
        type: UP_POST_RATE,
        id
    }
}

export function downPostRate(id){
    return{
        type: DOWN_POST_RATE,
        id
    }
}

export function updatePosts(posts){
    return{
        type: UPDATE_POSTS,
        posts
    }
}

export function setPost(post){
    return{
        type: SET_POST,
        post
    }
}

export function increaseNoOfComments(id){
    return{
        type: INCREASE_NO_OF_COMMENTS,
        id
    }
}

export function decreaseNoOfComments(id){
    return{
        type: DECREASE_NO_OF_COMMENTS,
        id       
    }
}

//COMMENT ACTION CREATERS
export function addComment(id, parentId, timestamp, body, author){
    return{
        type: ADD_COMMENT,
        id,
        timestamp,
        body,
        author,
        parentId
    }
}

export function editComment(id, body){
    return{
        type: EDIT_COMMENT,
        id,
        body
    }
}

export function deleteComment(id){
    return{
        type: DELETE_COMMENT,
        id
    }
}

export function upCommentRate(id){
    return{
        type: UP_COMMENT_RATE,
        id
    }
}

export function downCommentRate(id){
    return{
        type: DOWN_COMMENT_RATE,
        id
    }
}

export function updateComments(comments){
    return{
        type: UPDATE_COMMENTS,
        comments
    }
}

//CATEGORY ACTION CREATOR
export function addCategories(categories){
    return{
        type: ADD_CATEGORIES,
        categories
    }
}

export function setActiveCategory(category){
    return{
        type: SET_ACTIVE_CATEGORY,
        category
    }
}

//SORTING ACTION CREATOR
export function setSort(sort){
    return{
        type: SET_SORT,
        sort
    }
}