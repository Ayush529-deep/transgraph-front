
import React, { useEffect, useState } from 'react'
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import bgImage from "../assets/Images/stock-market.jpg";
import Navbar from '../Pages/Home/Navbar';
import Footer from "../Pages/Home/Footer";


function Login() {
  let [logindata, setlogindata] = useState([])
  let [already, setalready] = useState([])
  let go = useNavigate()

  let inputvalue = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    allusers()
  }, [])

  let allusers = () => {
    axios.get("http://localhost:5000/allusers").then((res) => {
      if (res.data.status) {
        setalready(res.data.ourusers)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  let login = () => {
    let existuser = already.filter(data => data.email === logindata.email)
    let ouruser = existuser[0]

    if (!ouruser) {
      alert("not a user")
    }
    else if (ouruser.email === logindata.email && ouruser.password === logindata.password) {
      alert("login")
      go("/")
    } else {
      alert("invalid user")
    }
  }

  return (
    <>

    <Navbar/>
      {/* Background with image */}
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}  // <-- apni image ka path lagao
      >
        {/* Glassmorphism Card */}
        <div className="bg-white/70 backdrop-blur-md p-10  rounded-2xl shadow-lg w-full max-w-md">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 tracking-wide">
            INVESTOR LOGIN
          </h2>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                Email Address
              </label>
              <input
                onChange={inputvalue}
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-800 text-gray-900"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
                  Password
                </label>
                <Link to={"/password"} className="text-sm text-blue-700 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                onChange={inputvalue}
                id="password"
                name="password"
                type="password"
                required
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-800 text-gray-900"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" />
              <p>
                I accept all{" "}
                <a href="#" className="text-blue-700 underline">
                  Terms & Conditions
                </a>
              </p>
            </div>

            {/* Login Button */}
            <div>
              <button
                onClick={login}
                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Login
              </button>
            </div>
          </div>

          {/* Signup */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Not a member?{" "}
            <Link to={"/signup"} className="font-semibold text-blue-700 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Login




























// import React, { useEffect, useState } from 'react'
// import '../css/Login.css'
// import { data, Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'


// function Login() {

//   let [logindata, setlogindata] = useState([])

//   let go = useNavigate()

//   let inputvalue = (e) => {
//     setlogindata(
//       { ...logindata, [e.target.name]: e.target.value }
//     )
//   }

//   // console.log(logindata)


//   //allusers-------------------
//   let [already, setalready] = useState([])
//   // console.log(already)
//   useEffect(() => {
//     allusers()
//   }, [])


//   let allusers = () => {
//     axios.get("http://localhost:5000/allusers").then((res) => {
//       if (res.data.status) {
//         setalready(res.data.ourusers)
//       }
//     }).catch((err) => {
//       console.log(err)
//     })

//   }

//   // console.log(already)

//   let login = () => {
//     let existuser = already.filter(data => data.email == logindata.email)
//     let ouruser = existuser[0]
//     // console.log(ouruser)

//     if (!ouruser) {
//       alert("not a user")
//     }
//     else if (ouruser.email == logindata.email && ouruser.password == logindata.password) {
//       alert("login")
//       go("/")
//     } else {
//       alert("invalid user")
//     }
//   }


//   return (
//     <>

//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8   login">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             alt="Your Company"
//             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           />
//           <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">

//             <div>
//               <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input onChange={inputvalue}
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <Link to={"/password"} className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </Link>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input onChange={inputvalue}
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 onClick={login}
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>

//           <p className="mt-10 text-center text-sm/6 text-gray-500">
//             Not a member?{' '}
//             <Link to={"/signup"} className="font-semibold text-indigo-600 hover:text-indigo-500">
//               Signup
//             </Link>
//           </p>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Login