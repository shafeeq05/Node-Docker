import z from 'zod'

const loginFormVal = z.object({
    uname:z.string().min(1,{message:"User name required"}),
    pwd:z.string().min(1,{message:"Password 6 char required"}),
    
})

const signupFormVal = z.object({
    Firstname:z.string().min(1,{message:'Firstname required'}), 
    Lastname:z.string().min(1,{message:'Lastname required'}),
     Phone:z.string().min(1,{message:'phone number required'}), 
     Email:z.string().email(),
     Pwd:z.string().min(6,{message:"Password minimum 6 charactor required"})
})

export {loginFormVal,signupFormVal}