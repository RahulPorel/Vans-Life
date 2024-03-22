import { redirect } from "react-router-dom";

export function requireAuth() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    throw redirect("/login?message=You must log in first.");
  }
}
