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
    nuxtServerInit(vuexContext,contex){
if(process.client){
    console.log("server üzerinde çalışma yapalım")
}
    
},

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