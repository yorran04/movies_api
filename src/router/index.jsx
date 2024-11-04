import { Routes, Route } from "react-router-dom"

import { Home } from '../pages/Home'
import { Movies } from '../pages/Movies'
import { Series } from '../pages/Series'
import { DefaultLayout } from "../layout/defaultlayout" 

export function Router (){
    return(
        <>
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/filmes" element={<Movies/>}/>
                <Route path="/series" element={<Series/>}/>
            </Route>            
        </Routes>
        </>
    )
}