import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import { useDispatch } from "react-redux";

const Body =()=>{
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>,
        },
        {
            path:"/browse",
            element: <Browse/>,
        },
    ]);

    
    
    return(
        <>
        <RouterProvider  router={appRouter}/>
        </>
    )
}

export default Body;