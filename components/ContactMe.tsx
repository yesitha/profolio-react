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
window.location.href=`mailto:yesithasathsaraa@gmail.com?subject=${formData.subject}&body=Hi,My Name is ${formData.name}.${formData.message}(${formData.email})`

    }
  return (
    <div 
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly  mx-auto items-center'>
        <h3 className='absolute top-20 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10 '>CONTACT</h3>

        <div className='flex flex-col space-y-10 items-center'>
        <h3 className='absolute top-32 uppercase tracking-[2.5px] text-gray-500 xl:text-xl md:text-lg text-sm '>Thanks for stopping by - <span className='decoration-[#f7AB0A]/50 underline'>Let's talk!</span></h3>
           
        <div className='space-y-10 pt-36 xl:pt-0 md:pt-5  '>
<div className='flex items-center space-x-5   xl:pl-0'>
    <PhoneIcon className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
    <p>+94788754809</p>
</div>
<div className='flex items-center space-x-5  xl:pl-0 md:pl-0'>
    <EnvelopeIcon className='text-[#f7AB0A] h-7 w-7 animate-pulse'/>
    <p>yesithasathsaraa@gmail.com</p>
</div>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2  xl:mx-auto md:mx-auto'>
    <div className='flex flex-col xl:flex-row xl:space-x-2 space-y-2 xl:space-y-0 md:space-y-0 md:flex-row md:space-x-2 ' >
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