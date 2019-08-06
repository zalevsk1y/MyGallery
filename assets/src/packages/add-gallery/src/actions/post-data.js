import {types} from './index';
import config from '@my-gallery/config';
import {oldServerData,newServerData, hashCode} from '@my-gallery/helpers';
import {requestDataFromServer,errorFetching,showMessage,receiveDataFromServer} from "./main";


const post=types;


export function receivePostData(postData,postId){
    return {
        type:post.RECEIVE_POST_DATA,
        postData,
        postId
    }
}


export function createNewShortcode(post_id){
    return {
        type:post.CREATE_NEW_SHORTCODE,
    }
}

export function selectShortcode(shortcodeId){
    return {
        type:post.SELECT_SHORTCODE,
        shortcodeId
    }
}
export function unselectShortcode(shortcodeId){
    return {
        type:post.UNSELECT_SHORTCODE,
        shortcodeId
    }
}

export function receiveShortcodeHash (hash,shortcodeId){
    return {
        type:post.RECEIVE_SHORTCODE_HASH,
        hash,
        shortcodeId
    }
}
export function deleteUnsavedShortcode(shortcodeId){
    return {
        type:post.DELETE_UNSAVED_SHORTCODE,
        shortcodeId
    }
}
export function setNewImagesOrder(newOrder,shortcodeId){
    return {
        type:post.SET_NEW_IMAGES_ORDER,
        newOrder,
        shortcodeId
    }
}
export function updateConfig(config,shortcodeId){
    return {
        type:post.UPDATE_CONFIG,
        config,
        shortcodeId
    }
}
export function updateMisc(misc,shortcodeId){
    return {
        type:post.UPDATE_MISC,
        misc,
        shortcodeId
    }
}
export function updateShortcodeImages(images,shortcodeId){
    return {
        type:post.UPDATE_SHORTCODE_IMAGES,
        images,
        shortcodeId
    }
}
export function stopEditingShortcode(shortcodeId,shortcode){
    return {
        type:post.STOP_EDITING_SHORTCODE,
        shortcode,
        shortcodeId
    }
}
export function deleteShortcode(shortcodeId){
    return {
        type:post.DELETE_SHORTCODE,
        shortcodeId
    }
}
export function postWasUpdated(){
    return {
        type:post.POST_WAS_UPDATED,

    }
}


export function getPostDataFromServer ({dispatch,nonce,postId}){
    dispatch(requestDataFromServer());
    return dispatch=>{ 
        return fetch(config.api.getPostData+ postId+"/",{
            method:"GET",
            headers:{
                'X-WP-Nonce':nonce
            }
        })
       .then(response=>response.json())
       .then((json)=>{
           if(json){
            dispatch(receivePostData(JSON.parse(json),postId));
           }
       })
       .catch(error=>{
        dispatch(errorFetching(error))
    })
    }
}

export function updatePostData ({dispatch,nonce,postId,shortcodes}){
    const body='shortcodes='+encodeURIComponent(JSON.stringify(shortcodes))
    dispatch(requestDataFromServer());
    return dispatch=>{ 
        return fetch(config.api.updatePostDataApi+ postId+"/",{
            method:"PATCH",
            headers:{
                'X-WP-Nonce':nonce,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body
        })
       .then(response=>response.json())
       .then((json)=>{
           if(json){
            dispatch(postWasUpdated());
            dispatch(showMessage({status:'success',text:'Post was saved successfully.'}))
           }
       })
       .catch(error=>{
        dispatch(errorFetching(error))
    })
    }
}
