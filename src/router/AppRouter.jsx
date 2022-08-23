import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/";
import { UserRoutes } from "../users";

export const AppRouter = () => {
  return (
    <>
      <div>
        <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </div>
    </>
  )
}