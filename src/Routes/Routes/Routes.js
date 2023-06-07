import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,

        children: [
            {
                path:'/news',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/categories/:id',
                element:<Category></Category>,
                loader:({params})=>(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])