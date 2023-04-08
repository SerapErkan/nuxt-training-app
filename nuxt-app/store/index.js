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
     vuexContext.commit("setPost", [
    {
      id: 1,
      title: "kötü kara kedi köfte ",
      subTitle: "Patile",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "SerapErkan",
    },
    {
      id: 2,
      title: "küçük kar kedi köfte ",
      subTitle: "Patile",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "SerapErkan",
    },
    {
      id: 3,
      title: "kötü kedi köfte ",
      subTitle: "Patile",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "SerapErkan",
    },
  ],
  )
    
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