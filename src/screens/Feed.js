import React, {Component} from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'
import { connect } from 'react-redux'
import {fetchPosts} from '../store/actions/posts'

class Feed extends Component{

    componentDidMount = () => {
        this.props.onFetchPosts()
    }

    render(){
        return(
            <View style={styles.container}>
                <Header />
                <FlatList data={this.props.posts} keyExtractor={item => item.id} renderItem={({item}) => <Post key={item.id} {...item} /> } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

const mapStateToProps = ({post}) => {
    return{
        posts: post.posts
    }
}

const mapDispatchToProps = dispatch => {
    componentDidMount: () => dispatch(fetchPosts())
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed)

//export default Feed