import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'


export const getAllMovies = createAsyncThunk(
  'getAllMovies', async () => {
    try{
      const resp = await axios.get('http://192.168.3.18:8001/movies')
      return resp.data
    }catch(e){console.log(e)}
  })

export const gampending = getAllMovies.pending
export const gamfulfilled = getAllMovies.fulfilled
export const gamrejected = getAllMovies.rejected


