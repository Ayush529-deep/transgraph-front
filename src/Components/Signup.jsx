import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Home/Footer";
import bgImage from "../assets/Images/stock-market.jpg"; // 👈 local image import

function Signup() {
  let [signupdata, setsignupdata] = useState({});
  let [already, setalready] = useState([]);
  let go = useNavigate();

  let inputvalue = (e) => {
    setsignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    allusers();
  }, []);

  let allusers = () => {
    axios
      .get("https://transgraph-back.vercel.app/allusers")
      .then((res) => {
        if (res.data.status) {
          setalready(res.data.ourusers);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let signup = () => {
    let filterdata = already.filter((data) => data.email === signupdata.email);
    let existuser = filterdata[0];

    if (!signupdata.username || !signupdata.email || !signupdata.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are mandatory!",
      });
    } else if (existuser) {
      Swal.fire({
        icon: "warning",
        title: "Already Signed Up",
        text: "Please login instead!",
      });
      go("/");
    } else {
      axios
        .post("https://transgraph-back.vercel.app/signup", { signupdata })
        .then((res) => {
          if (res.data.status) {
            Swal.fire({
              title: res.data.msg,
              icon: "success",
            });
            go("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Background with Signup form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover bg-center px-4 py-16"
        style={{
          backgroundImage: `url(${bgImage})`, // 👈 local image applied
        }}
      >
        <div className="bg-white/90 shadow-2xl rounded-xl p-8 md:p-10 w-full max-w-md mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Sign up to your account
          </h2>

          <div className="space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                onChange={inputvalue}
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                onChange={inputvalue}
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={inputvalue}
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Button */}
            <div>
              <button
                onClick={signup}
                type="submit"
                className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Signup;






























// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Swal from "sweetalert2";
// import { useNavigate } from 'react-router-dom'

// function Signup() {

//   let [signupdata, setsignupdata] = useState([])

//   let go = useNavigate()

//   let inputvalue = (e) => {
//     setsignupdata(
//       { ...signupdata, [e.target.name]: e.target.value }
//     )
//   }


//   //allusers-------------------
//   let [already, setalready] = useState([])
//   // console.log(already)
//   useEffect(() => {
//     allusers()
//   }, [])

//   let allusers = () => {
//     axios.get("https://transgraph-back.vercel.app/allusers").then((res) => {
//       if (res.data.status) {
//         setalready(res.data.ourusers)
//       }
//     }).catch((err) => {
//       console.log(err)
//     })

//   }


//   let signup = () => {

//     let filterdata = already.filter(data => data.email == signupdata.email);

//     let existuser = filterdata[0]
//     // console.log(existuser)

//     if (!signupdata.username || !signupdata.email || !signupdata.password) {
//       // alert("All fields are mandatory!")
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "All fields are mandatory!",
//       });
//     } else  if (existuser) {
//       alert("already signup");

//       go("/")

//     }
//     // else if(!already.password){
//     //   document.getElementById("email").style.border = "2px solid red"
//     //   document.getElementById("email-valid").innerHTML = "Fill the form"

//     // }
//      else {

//       axios.post("https://transgraph-back.vercel.app/signup", { signupdata }).then((res) => {
//         if (res.data.status) {
//           // alert(res.data.msg)
//           Swal.fire({
//             title: res.data.msg,
      
//             icon: "success"
//           });
//           go("/")
//         }
//       }).catch((err) => {
//         console.log(err)
//       })

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
//             Sign up to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">

//             <div>
//               <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                 Username
//               </label>
//               <div className="mt-2">
//                 <input onChange={inputvalue}
//                   id="email"
//                   name="username"
//                   type="text"
//                   required
//                   autoComplete="username"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

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
//               <button onClick={signup}
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign up
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>

//     </>
//   )
// }

// export default Signup