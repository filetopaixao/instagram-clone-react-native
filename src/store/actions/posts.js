import {SET_POSTS} from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            base: 'https://us-central1-lambe-d8fae.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
        .catch(err => console.log(err))
        .then(res => {
            post.image = res.data.imageUrl
            axios.post('/posts.json', {...post})
            .cath(err => console.log(err))
            .then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            })
        })
    }
    /*return {
        type: 'ADD_POST',
        payload: post
    }*/
}

export const addComment = comment => {
    return dispatch => {
        axios.get(`/posts${payload.postId}.json`)
        .catch(err => console.log(err))
        .then(res => {
            const comments = res.data.comments || []
            comments.push(payload.comment)
            axios.patch(`/posts${payload.postId}.json`, {comments})
            .catch(err => console.log(errs))
            .then(res => {
                dispatch(fetchPosts())
            })
        })
    }
    /*return {
        type: 'ADD_COMMENT',
        payload: comment
    }*/
}

export const setPosts = posts => {
    return{
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () =>{
    return dispatch => {
        axios.get('/posts.json')
        .catch(err => console.log(err))
        .then(res => {
            const rawPosts = res.data
            const posts = []
            for(let key in rawPosts){
                posts.push({
                    ...rawPosts[key],
                    id: key
                })
            }

            dispatch(setPosts(posts.reverse()))
        })
    }
}

export const creatingPost = () => {
    return{
        type: 'CREATING_POST',

    }
}

export const postCreated = () => {
    type: 'POST_CREATED'
}