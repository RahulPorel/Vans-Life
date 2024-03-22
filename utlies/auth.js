import { redirect } from "react-router-dom";

export function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    throw redirect("/login?message=You must log in first.");
  }
}

// export const requireAuth = () => {
//   const isLoggedIn = false;
//   console.log(UserEmailDb);
//   const UserEmailDb = localStorage.getItem("confirmEmail");

//   // if (UserEmailDb === )
//   if (!isLoggedIn) {
//     throw redirect("/login?message=You must log in first.");
//   }

//   return <div>sdfsdf</div>;
// };
