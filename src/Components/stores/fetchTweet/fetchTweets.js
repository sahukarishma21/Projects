import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTweets = createAsyncThunk('tweets/fetchTweets',async()=>{
    try{
        const response = await fetch("../db.json");
        if(!response.ok){
            throw new Error ('failed to fetch Tweets');
        }
        const data = await response.json();
        const tweets = data;
        console.log(tweets)
        return tweets ;
    }catch(error){
        throw new Error('Failed to fetch Tweets')
    }
});