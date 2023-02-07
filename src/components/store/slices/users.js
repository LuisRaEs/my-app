import { createSlice } from "@reduxjs/toolkit";

const usersSlice  = createSlice(
{
    name:"users",
    initialState: {users:[],active:{},logged:false},
    reducers:{
        addUser: (state,action)=>{
            if(state.users.length===0)
                return {...state,users:[{...action.payload,favorites:[]}]}
            else{
                const loccated=[...state.users].find(el=>el.email===action.payload.email)
                console.log(`loccated: ${loccated}`)
                if(loccated===undefined)
                    return {...state,users:[...state.users,{...action.payload,favorites:[]}]}
                else
                    return {...state}
            }
        },
        getUser:(state,action)=>{
            const loccated = [...state.users].find(el=>el.email===action.payload.email && el.password===action.payload.password)

            if(!(loccated===undefined))
                return{...state,active:{...loccated},logged:true}
            else
                return {...state}
        },
        updateUser:(state,action)=>{
            const allUsers = [...state.users].filter(el=>el.email!=action.payload.email)

            return {...state,users:[...allUsers,{...action.payload}]}
        },
        quitUser:(state)=>{
            return {...state,active:{}, logged:false}
        },
        addFavotie:(state,action)=>{
            if([...state.active.favorites].includes(action.payload))
                return {...state}
            else
            {
                const allUsers = [...state.users].filter(el=>el.email!=state.active.email)
                return {...state,users:[...allUsers,{...state.active,favorites:[...state.active.favorites,action.payload]}],active:{...state.active,favorites:[...state.active.favorites,action.payload]}}
            }
        },
        removeFavorite:(state,action)=>{
            const allUsers = [...state.users].filter(el=>el.email!=state.active.email)
            const filter = [...state.active.favorites].filter((el)=> el!==action.payload)
            return {...state,users:[...allUsers,{...state.active,favorites:filter}],active:{...state.active,favorites:filter}}
        }
    }
}
)

export const {addUser, getUser, addFavotie, removeFavorite, updateUser ,quitUser} = usersSlice.actions
export const usersReducer = usersSlice.reducer