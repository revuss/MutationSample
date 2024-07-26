// import FormHeader from "./common/FormHead";
// import BottomDesc from "./common/FormBottom";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { useForm } from "@tanstack/react-form";
// import {
//   confirmPasswordValidator,
//   emailValidator,
//   passwordValidator,
// } from "./validations/validators";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRegisterMutation } from "../Mutations/useRegisterMutation";
// const Register: React.FC = () => {
//   const { mutate } = useRegisterMutation();
//   const form = useForm({
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     onSubmit: async ({ value }) => {
//       // try {
//       //   const response = await register(value);
//       //   console.log(response);
//       //   if (response.message == "Account created") {
//       //     toast.success(response.message);
//       //     await delay(2000);
//       //     navigate("/login");
//       //   } else {
//       //     toast.error(response.message);
//       //   }
//       //   // toast.success(response);
//       // } catch (error: unknown) {
//       //   console.log("Registration error:", error);
//       //   toast.error("Registration failed. Please try again.");
//       // }
//     },
//   });

//   return (
//     <>
//       <ToastContainer />
//       <div className="min-h-[90vh] justify-center flex flex-col align-center">
//         <div className="relative mx-auto w-full max-w-md bg-white dark:bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
//           <div className="w-full">
//             <FormHeader
//               title="Register"
//               description="Register below to create your account"
//             ></FormHeader>
//             <div className="mt-5">
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                 }}
//               >
//                 <Label className="px-1 ">Username</Label>
//                 <div className="my-1 mb-4">
//                   <form.Field
//                     name="username"
//                     validators={{
//                       onChange: ({ value }) => {
//                         if (value.length < 5) return "username too small";
//                       },
//                     }}
//                     children={(field) => (
//                       <>
//                         <Input
//                           className=" px-2 py-5"
//                           type="text"
//                           id="username"
//                           value={field.state.value}
//                           onChange={(e) => field.handleChange(e.target.value)}
//                           name="username"
//                           placeholder="Username"
//                           autoComplete="NA"
//                         />
//                         {field.state.meta.errors && (
//                           <div className="text-red-500 mx-1 my-1 text-sm">
//                             {field.state.meta.errors}
//                           </div>
//                         )}
//                       </>
//                     )}
//                   />
//                 </div>

//                 <Label className="px-1 ">Email</Label>
//                 <div className="my-1 mb-4">
//                   <form.Field
//                     name="email"
//                     validators={{
//                       onChange: emailValidator,
//                     }}
//                     children={(field) => (
//                       <>
//                         <Input
//                           className=" px-2 py-5"
//                           type="email"
//                           id="email"
//                           value={field.state.value}
//                           onChange={(e) => field.handleChange(e.target.value)}
//                           name="email"
//                           placeholder="Email Address"
//                           autoComplete="NA"
//                         />
//                         {field.state.meta.errors && (
//                           <div className="text-red-500 mx-1 my-1 text-sm">
//                             {field.state.meta.errors}
//                           </div>
//                         )}
//                       </>
//                     )}
//                   />
//                 </div>

//                 <Label className="px-1 ">Password</Label>
//                 <div className="my-1 mb-4">
//                   <form.Field
//                     name="password"
//                     validators={{
//                       onChange: passwordValidator,
//                     }}
//                     children={(field) => (
//                       <>
//                         <Input
//                           className=" px-2 py-5"
//                           type="password"
//                           id="password"
//                           value={field.state.value}
//                           onChange={(e) => {
//                             field.handleChange(e.target.value);
//                           }}
//                           name="password"
//                           placeholder="Password"
//                           autoComplete="NA"
//                         />
//                         {field.state.meta.errors && (
//                           <div className="text-sm text-red-500 my-1 mx-1">
//                             {field.state.meta.errors}
//                           </div>
//                         )}
//                       </>
//                     )}
//                   />
//                 </div>

//                 <Label className="px-1 ">Confirm Password</Label>
//                 <div className="my-1 mb-4">
//                   <form.Field
//                     name="confirmPassword"
//                     validators={{
//                       onChangeListenTo: ["password"],
//                       onChange: confirmPasswordValidator,
//                     }}
//                     children={(field) => (
//                       <>
//                         <Input
//                           className="px-2 py-5"
//                           type="password"
//                           id="confirmpassword"
//                           value={field.state.value}
//                           onChange={(e) => field.handleChange(e.target.value)}
//                           name="confrimpassword"
//                           placeholder="Password"
//                           autoComplete="NA"
//                         />
//                         {field.state.meta.errors && (
//                           <div className="my-1 mx-1 text-sm text-red-500">
//                             {field.state.meta.errors}
//                           </div>
//                         )}
//                       </>
//                     )}
//                   />
//                 </div>

//                 <Button
//                   onClick={form.handleSubmit}
//                   className="my-6 w-full rounded-md bg-black px-3 py-5 text-white focus:bg-gray-600 focus:outline-none"
//                 >
//                   Register
//                 </Button>
//                 <BottomDesc
//                   title="Login"
//                   description="Registered already?, "
//                   link="/login"
//                 ></BottomDesc>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// export default Register;

import React from "react";
import FormHeader from "./common/FormHead";
import BottomDesc from "./common/FormBottom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "@tanstack/react-form";
import {
  confirmPasswordValidator,
  emailValidator,
  passwordValidator,
} from "./validations/validators";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterMutation } from "@/Mutations/useRegisterMutation";

const Register: React.FC = () => {
  const { mutate } = useRegisterMutation();

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ value }: { value: any }) => {
      // console.log(`one time :::: ${value}`);
      mutate(value);
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="min-h-[90vh] justify-center flex flex-col align-center">
        <div className="relative mx-auto w-full max-w-md bg-white dark:bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <FormHeader
              title="Register"
              description="Register below to create your account"
            ></FormHeader>
            <div className="mt-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // form.handleSubmit();
                }}
              >
                <Label className="px-1">Username</Label>
                <div className="my-1 mb-4">
                  <form.Field
                    name="username"
                    validators={{
                      onChange: ({ value }) => {
                        if (value.length < 5) return "Username too short";
                      },
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className="px-2 py-5"
                          type="text"
                          id="username"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="username"
                          placeholder="Username"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="text-red-500 mx-1 my-1 text-sm">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Label className="px-1">Email</Label>
                <div className="my-1 mb-4">
                  <form.Field
                    name="email"
                    validators={{
                      onChange: emailValidator,
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className="px-2 py-5"
                          type="text"
                          id="email"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="email"
                          placeholder="Email Address"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="text-red-500 mx-1 my-1 text-sm">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Label className="px-1">Password</Label>
                <div className="my-1 mb-4">
                  <form.Field
                    name="password"
                    validators={{
                      onChange: passwordValidator,
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className="px-2 py-5"
                          type="password"
                          id="password"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="password"
                          placeholder="Password"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="text-sm text-red-500 my-1 mx-1">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Label className="px-1">Confirm Password</Label>
                <div className="my-1 mb-4">
                  <form.Field
                    name="confirmPassword"
                    validators={{
                      onChangeListenTo: ["password"],
                      onChange: confirmPasswordValidator,
                    }}
                    children={(field) => (
                      <>
                        <Input
                          className="px-2 py-5"
                          type="password"
                          id="confirmpassword"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          name="confirmPassword"
                          placeholder="Password"
                          autoComplete="NA"
                        />
                        {field.state.meta.errors && (
                          <div className="my-1 mx-1 text-sm text-red-500">
                            {field.state.meta.errors}
                          </div>
                        )}
                      </>
                    )}
                  />
                </div>

                <Button
                  onClick={form.handleSubmit}
                  className="my-6 w-full rounded-md bg-black px-3 py-5 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Register
                </Button>
                <BottomDesc
                  title="Login"
                  description="Registered already?, "
                  link="/login"
                ></BottomDesc>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
