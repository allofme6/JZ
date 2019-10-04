import axios from 'axios'
import qs from 'querystring'
import { Component } from 'react'

// import 

const Get = (url) => {
                return axios.get(url)
                    .then(function (response) {
                    // handle success
                    console.log(response)
                    })
            }
const Post = (url , params) => {
                return axios.post(url, qs.stringify(params))
                    .then(function (response) {
                        console.log(response)
                    })
            }

Component.prototype.$get = Get
Component.prototype.$post = Post

export default {
    Get,
    Post
}