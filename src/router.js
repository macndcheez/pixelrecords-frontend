import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"
import Index from "./components/Index"
import Show from "./components/Show"
import { indexLoader, showLoader } from "./loaders"
import { createAction, deleteAction, updateAction } from "./actions"
import Create from "./components/Create"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="entries/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" action={createAction} element={<Create />}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router