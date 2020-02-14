import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();
const SearchUser = (data, callback, errorCallback) => {
    let searchKeyword = new FormData()
    searchKeyword.append('keyword', data.keyword)

    console.log("여기서보낼거야~!"+searchKeyword);

    axios.post(`${process.env.VUE_APP_IP}/articles/search/`, searchKeyword)
        .then(res => {
            console.log(res)
            console.log('검색쿠성공')
            callback(res)
        })
        .catch(err => {
            console.log(err)
            errorCallback('search-error')
        })
}
const SearchKeyword = (data, callback, errorCallback) => {
    let searchKeyword = new FormData()
    searchKeyword.append('keyword', data.keyword)

    console.log("여기서보낼거야~!"+searchKeyword);

    axios.post(`${process.env.VUE_APP_IP}/articles/keyword/`, searchKeyword)
        .then(res => {
            console.log('검색쿠성공(keyword)')
            callback(res)
        })
        .catch(err => {
            console.log(err)
            errorCallback('search-error(keyword)')
        })
}


const SearchApi = {
    SearchUser: (data, callback, errorCallback) => SearchUser(data, callback, errorCallback),
    SearchKeyword: (data, callback, errorCallback) => SearchKeyword(data, callback, errorCallback),
}
export default SearchApi