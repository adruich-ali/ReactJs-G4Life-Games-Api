import axios from 'axios';
import {gameDetailesURL, gameScreenURL}from '../api';

export const loadDetail = (id)=> async (dispatch)=>{
    dispatch({
       type :"LOADING_DETAIL",
    });
const detailesData = await axios.get(gameDetailesURL(id));
const screenshotsData = await axios.get(gameScreenURL(id));

dispatch({
    type:"GET_DETAIL",
    payload:{
        game:detailesData.data,
        screen: screenshotsData.data,
    },
});
};
