import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from 'react-toastify'


//CreateUser
export const createUser = createAsyncThunk("createUser",async(data,rejectWithValue)=>{
    // console.log(typeof(data));
    console.log("dataaaaaa ", data);
    const response=await fetch('http://localhost:5000/api/auth/signup',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })

    try {
        const result=await response.json();
        console.log("createUser->",result);
        if(result.status=="ok"){
            toast.success('You Are Registered Successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }else{
            toast.error((result.msg || result.message), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        return result.data;
    } catch (error) {
        toast.error((result.msg || result.message), {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        return rejectWithValue(error.response)
    }

})





//LoginUser
export const loginUser = createAsyncThunk("loginUser",async(data,rejectWithValue)=>{
    const response=await fetch('http://localhost:2000/login/user',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
        // body: data
    })

    try {
        const result=await response.json();
        console.log("LoginUser->",result.token);
        if(result.status==="ok"){
            console.log("Token Arha-> ",result.token)
            localStorage.setItem('token', result.token)
                toast.success('Login Successful', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
             return result.token;
        }else{
            console.log("What Happened ?")
            toast.error((result.msg || result.message), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        } 
    } catch (error) {
        console.log("Nothng happened ")
        toast.error((result.msg || result.message), {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        return rejectWithValue(error.response)
    }

})






const initialState={
    users:[],
    loading:false,
    error:null,
}



const userAuthentication=createSlice({
    name:"userAuthentication",
    initialState,
    extraReducers:{
        [createUser.pending]:(state)=>{
            state.loading=true;
        },
        [createUser.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("shit is this what ",action.payload)
            // state.users.push(action.payload);
        },
        [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },



        [loginUser.pending]:(state)=>{
            state.loading=true;
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.token=action.payload; 
            // state.users.push(action.payload);
        },
        [loginUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },

    }
})

// export const {setEmail,setPassword,setUniqueCode}=userDetail.actions

export default userAuthentication.reducer