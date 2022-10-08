import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, SearchPage, HeroePage} from '../pages'


export const RouterHeroes = () => {
  return (
    <>
        <Navbar/>
          <div className="container">
            <Routes>
                <Route path="/" element = { <Navigate to = "/marvel" />}/>
                <Route path="marvel" element = { <MarvelPage/> }/>
                <Route path="dc" element = { <DcPage/> }/>
                <Route path="search" element = { <SearchPage/> }/>
                <Route path="hero/:id" element = { <HeroePage/> }/>
              
            </Routes>
          </div>
    </>
  )
}
