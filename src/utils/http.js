import axios from 'axios'
import qs from 'querystring'
import React,{ Component } from 'react'

// import 
const get = ({url}) => {
                return  fetch(url)
                .then(response => response.json())
                .then(result => {
                    return result
                })
            }

const Get = (options) => {
                return axios(options)
                .then(function (response) {
                    return response
                })
            }
const Post = (url , params) => {
                return axios.post(url, qs.stringify(params))
                    .then(function (response) {
                       return response
                    })
            }

Component.prototype.$get = Get
Component.prototype.$post = Post
React.Component.prototype.$wx = window.wx
export default {
    Get,
    Post,
    get
}