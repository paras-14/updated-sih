import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from 'react-toastify'


//createStudent
export const createStudent = createAsyncThunk("createStudent",async(data,rejectWithValue)=>{
    const response=await fetch('http://localhost:5000/api/auth/register/students',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })

    try {
        const result=await response.json();
        console.log("createStudent->",result.data);
        if(result.status=="ok"){
            toast.success('Students Created', {
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
export const getAllStudents = createAsyncThunk("getAllStudents",async(args,{rejectWithValue})=>{
    // console.log("hello")
    const response=await fetch('http://localhost:2000/getAll/user')
    try {
        const result=await response.json();
        console.log("getAllStudents->",result.data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error)
    }

})




//GetSingleUsers
export const getSingleStudents = createAsyncThunk("getSingleStudents",async(args,{rejectWithValue})=>{
    // console.log("hello")
    const token = localStorage.getItem('token');
    console.log("bhayyyy> ",token);
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
            console.log("getSingleStudents->",result.data);
            // nav("/")
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }

})



const initialState={
    students:[],
    loading:false,
    error:null,
    SingleUser:{},
}



const studentDetail=createSlice({
    name:"studentDetail",
    initialState,
    extraReducers:{
        [createStudent.pending]:(state)=>{
            state.loading=true;
        },
        [createStudent.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("shit is this what ",action.payload)
            state.students.push(action.payload);
        },
        [createStudent.rejected]:(state,action)=>{
            state.loading=false;
            state.students=action.payload;
        },


        [getAllStudents.pending]:(state)=>{
            state.loading=true;
        },
        [getAllStudents.fulfilled]:(state,action)=>{
            state.loading=false;
            state.students=action.payload;
        },
        [getAllStudents.rejected]:(state,action)=>{
            state.loading=false;
            state.students=action.payload;
        },

        

        [getSingleStudents.pending]:(state)=>{
            // console.log("chup Mc ?");
            state.loading=true;
        },
        [getSingleStudents.fulfilled]:(state,action)=>{
            // console.log("Kuchh Huaa Kyya ?");
            state.loading=false;
            state.SingleUser=action.payload;
        },
        [getSingleStudents.rejected]:(state,action)=>{
            state.loading=false;
            state.SingleUser=action.payload;
        },
        

    }
})

// export const {setEmail,setPassword,setUniqueCode}=userDetail.actions

export default studentDetail.reducer
