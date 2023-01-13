import React from 'react'
import{PhoneIcon,EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";



type Inputs = {
    name: string,
   email: string,
   subject: string,
   message: string,
  };
type props = {};

function ContactMe({}: props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
window.location.href=`mailto:yesithaathukorala@gmail.com?subject=${formData.subject}&body=Hi,My Name is ${formData.name}.${formData.message}(${formData.email})`

    }
  return (
    <div 
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly  mx-auto items-center'>
        <h3 className='absolute top-20 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10 '>CONTACT</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>Thanks for stopping by - <span className='decoration-[#f7AB0A]/50 underline'>Let's talk!</span></h4>
        <div className='space-y-10'>
<div className='flex items-center space-x-5'>
    <PhoneIcon className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
    <p>+94788754809</p>
</div>
<div className='flex items-center space-x-5'>
    <EnvelopeIcon className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
    <p>yesithaathukorala@gmail.com</p>
</div>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
    <div className='flex space-x-2'>
        <input {...register('name')}placeholder='Name' className="contactInput" type="text"/>
        <input {...register('email')}placeholder='Email'className="contactInput" type="email"/>
    </div>
    <input {...register('subject')}placeholder='Subject' className="contactInput" type="text"/>
    <textarea {...register('message')} placeholder='Message' className="contactInput" />
    <button  type='submit' className='bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
</form>
        </div>
        </div>
        </div>

  )
}

export default ContactMe