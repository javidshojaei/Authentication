import { useState } from "react";
import * as React from 'react';
import Link from "next/link";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "@/components/Footer";

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2QW1gHO8IbVWNlvQnWOdrdxKjOTO7RbM',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureTokena: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.ok) {
          toast.success('Your Account Has Been Succesfully Created', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          return res.json().then(data => {
            //show an error
            console.log(data)
            toast.error(data.error.message, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          })
        }
      })
      .catch(error => {
        toast.error(data.error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("Error:", error)
      })
  
  }

  //forget password alert
  const forgetPasswordHandler = () => {
    toast.info('This feature will be added soon...', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <div className="bg-white ltr">
      <h1 className="text-black text-4xl  text-center">Home Page</h1>
      <ToastContainer
        style={{ width: '45%' }}
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mx-auto my-9 w-[50%]">
        <form onSubmit={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <p className="text-black mb-6">note : if you are located in Iran ,use VPN</p>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
            <a onClick={forgetPasswordHandler} className="inline-block cursor-pointer align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
      <Footer/>
    </div>
  )
}