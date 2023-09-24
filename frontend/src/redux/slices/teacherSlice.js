import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from 'react-toastify'


//createStudent
export const createTeacher = createAsyncThunk("createTeacher",async(data,rejectWithValue)=>{
    const response=await fetch('http://localhost:5000/api/auth/register/teachers',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })

    try {
        const result=await response.json();
        console.log("createTeacher->",result.data);
        if(result.status=="ok"){
            toast.success('Teachers Created', {
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



//GetAllStudents
export const getAllTeachers = createAsyncThunk("getAllTeachers",async(args,{rejectWithValue})=>{
    // console.log("hello")
    const response=await fetch('http://localhost:2000/getAll/user')
    try {
        const result=await response.json();
        console.log("getAllTeachers->",result.data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error)
    }

})




//GetSingleUsers
export const getSingleTeacher = createAsyncThunk("getSingleTeacher",async(args,{rejectWithValue})=>{
    // console.log("hello")
    const token = localStorage.getItem('token');
    console.log("bhayyyyijiiii> ",token);
    if(token){
        try {
            const response=await fetch('http://localhost:2000/get/user',{
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const result=await response.json();
            console.log("getSingleTeacher->",result.data);
            // nav("/")
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }

})



const initialState={
    teachers:[],
    loading:false,
    error:null,
    SingleTeacher:{},
}



const teacherDetail=createSlice({
    name:"teacherDetail",
    initialState,
    extraReducers:{
        [createTeacher.pending]:(state)=>{
            state.loading=true;
        },
        [createTeacher.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("shit is this what ",action.payload)
            state.students.push(action.payload);
        },
        [createTeacher.rejected]:(state,action)=>{
            state.loading=false;
            state.students=action.payload;
        },


        [getAllTeachers.pending]:(state)=>{
            state.loading=true;
        },
        [getAllTeachers.fulfilled]:(state,action)=>{
            state.loading=false;
            state.students=action.payload;
        },
        [getAllTeachers.rejected]:(state,action)=>{
            state.loading=false;
            state.students=action.payload;
        },

        

        [getSingleTeacher.pending]:(state)=>{
            // console.log("chup Mc ?");
            state.loading=true;
        },
        [getSingleTeacher.fulfilled]:(state,action)=>{
            // console.log("Kuchh Huaa Kyya ?");
            state.loading=false;
            state.SingleUser=action.payload;
        },
        [getSingleTeacher.rejected]:(state,action)=>{
            state.loading=false;
            state.SingleUser=action.payload;
        },
        

    }
})

// export const {setEmail,setPassword,setUniqueCode}=userDetail.actions

export default teacherDetail.reducer
