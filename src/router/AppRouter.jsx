import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { RouterHeroes } from "../heroes/routes/RouterHeroes"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element= { <LoginPage/> } />  
            <Route path="/*" element= { <RouterHeroes/> } />  
        </Routes>
    </>
  )
}
