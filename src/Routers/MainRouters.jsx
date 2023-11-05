import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Recipies from "../Pages/Recipies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Kitchen from "../Pages/Kitchen";
import Dashboard from "../Layouts/Dashboard";
import Title from "../components/Title";
import AddProduct from "../Pages/dashboard/AddProduct";
import ManageProduct from "../Pages/dashboard/ManageProduct";
import Update from "../Pages/dashboard/Update";


const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/recipies',
                element: <Recipies></Recipies>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },

            {
                path: '/kitchen',
                element: <Kitchen></Kitchen>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <Title>Dashboard</Title>
            },
            {
                path: '/dashboard/add-product',
                // element:<Title>Add Product</Title>
                // element:(<privateRoute><AddProduct></AddProduct></privateRoute>),
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/manage-product',
                // element:(<privateRoute><AddProduct></AddProduct></privateRoute>),
                element: <ManageProduct></ManageProduct>,
                loader: () => fetch("http://localhost:5000/recipies")

            },
            {
                path: '/dashboard/update-product/:id',
                // element:(<privateRoute><AddProduct></AddProduct></privateRoute>),
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/recipie/${params.id}`)


            },
            {
                path: '/dashboard/addCategory',
                element: <Title>Dashboard</Title>
            },
            {
                path: '/dashboard/manageCategory',
                element: <Title>Dashboard</Title>
            },
        ]
    }
])

export default MainRouter;