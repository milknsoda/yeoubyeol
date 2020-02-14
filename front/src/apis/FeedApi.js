//follow 친구 맺기 /끊기 
import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();
const requestFollow = (data, callback, errorCallback) => {
    console.log(data);
    let form = new FormData()
    form.append('my_nickname', data.loginedNickname)
    form.append('your_nickname', data.shownNickname)
    axios.post(`${process.env.VUE_APP_IP}/articles/follower/`, form)
        .then((response) => {
            console.log(response)
            callback(response)
        
        })
        .catch((response) => {
            console.log(response)
            console.log('catch ' + response)
            errorCallback('error')
        })
}

//새 글 작성하기
const newPost = (form, callback, errorCallback) => {
     axios.post(`${process.env.VUE_APP_IP}/articles/`, form,{
        headers: {
            'Content-Type': 'multipart/form-data',
        }
     })
        .then((response) => {
            console.log('글작성 :',response)
            callback(response)
        
        })
        .catch((response) => {
            console.log(response)
            console.log('글작성 오류'  + response)
            errorCallback('error')
        }) 
}

//해시태그 추천받기
const requestHashTags = (form, callback, errorCallback) => {
    

     axios.post(`${process.env.VUE_APP_IP}/articles/recommend/`, form,{
     })
        .then((response) => {
            console.log('해시태그 받기 성공 :',response)
            callback(response)
        
        })
        .catch((response) => {
            console.log(response)
            console.log('해시태그 받기 오류'  + response)
            errorCallback('error')
        }) 
}

//게시글 가져오기
const getArticles = (data, callback, errorCallback) => {
    let form = new FormData()
    form.append('nickname', data)
    axios.post(`${process.env.VUE_APP_IP}/articles/mainfeed/`, form,{
    })
       .then((response) => {
           console.log('게시글 받기 성공 :',response)
           callback(response)
       
       })
       .catch((response) => {
           console.log(response)
           console.log('게시글 받기 오류'  + response)
           errorCallback('error')
       }) 
}

    
//게시글 가져오기 : 아이디로 조회하기
const getArticleById = (data, callback, errorCallback) => {
    axios.get(`${process.env.VUE_APP_IP}/articles/${data}/`,{
    })
       .then((response) => {
           console.log('게시글 받기 성공 :',response)
           callback(response)
       
       })
       .catch((response) => {
           console.log(response)
           console.log('게시글 받기 오류'  + response)
           errorCallback('error')
       }) 
}

// 사용자 프로필에서 게시피드와 좋아한 피드 받아오기
const getPostLikedArticles = (data, callback, errorCallback) => {
    let form = new FormData()
    form.append('nickname', data)
    axios.post(`${process.env.VUE_APP_IP}/articles/myarticle/`, form,{
    })
       .then((response) => {
           console.log('내 게시글 받기 성공 :',response)
           callback(response)
       
       })
       .catch((response) => {
           console.log(response)
           console.log('내 게시글 받기 오류'  + response)
           errorCallback('error')
       }) 
}


// 게시글에 좋아요 누르기 
const userLikesPost = (form, callback, errorCallback) => {
    axios.post(`${process.env.VUE_APP_IP}/articles/like/`, form,{
    })
       .then((response) => {
           console.log('게시글 좋아요 성공 :',response)
           callback(response)
       
       })
       .catch((response) => {
           console.log(response)
           console.log('게시글 좋아요 오류'  + response)
           errorCallback('error')
       }) 
}

// 게시글 삭제
const deletePost = (id, callback, errorCallback) => {
    axios.delete(`${process.env.VUE_APP_IP}/articles/${id}`,{
    })
       .then((response) => {
           console.log('게시글 삭제 성공 :',response)
           callback(response)
       
       })
       .catch((response) => {
           console.log(response)
           console.log('게시글 삭제 오류'  + response)
           errorCallback('error')
       }) 
}

// 게시글 수정
const editPost = (form, callback, errorCallback) => {
    axios.post(`${process.env.VUE_APP_IP}/articles/update/`,form,{
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
       .then((response) => {
           console.log('게시글 수정 성공 :',response)
           callback(response)
       
       })
       .catch((response) => {
           console.log('게시글 수정 오류'  + response)
           errorCallback(response)
       }) 
}

const requestFeedOfFame = (callback, errorCallback) => {
    axios.get(`${process.env.VUE_APP_IP}/articles/honor/`)
        .then(response => {
            callback(response)
        })
        .catch(error => {
            errorCallback(error)
        })
}


const FeedApi = {
    requestFollow: (data, callback, errorCallback) => requestFollow(data, callback, errorCallback),
    newPost: (data, callback, errorCallback) => newPost(data, callback, errorCallback),
    requestHashTags: (data, callback, errorCallback) => requestHashTags(data, callback, errorCallback),
    getArticles: (data, callback, errorCallback) => getArticles(data, callback, errorCallback),
    getPostLikedArticles: (data, callback, errorCallback) => getPostLikedArticles(data, callback, errorCallback),
    getArticleById: (data, callback, errorCallback) => getArticleById(data, callback, errorCallback),
    userLikesPost: (data, callback, errorCallback) => userLikesPost(data, callback, errorCallback),
    editPost: (callback, errorCallback) => editPost(callback, errorCallback),
    deletePost: (data, callback, errorCallback) => deletePost(data, callback, errorCallback),
    requestFeedOfFame: (callback, errorCallback) => requestFeedOfFame(callback, errorCallback),
}
export default FeedApi