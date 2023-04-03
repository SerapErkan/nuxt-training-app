 import Vuex from "vuex";

const createStore=()=>{
return new Vuex.Store({

    state:{
        fetchPosts:[]
    },
    mutations:{
        setPost(state,posts){
            state.fetchPosts=posts

        }
    },
    actions:{
     setPosts(vuexContext,posts){
     vuexContext.commit("setPost",posts)
        }

    },
    getters:{
   getPost(state){
    return state.fetchPosts
   }
    }


})
 }

 export default createStore