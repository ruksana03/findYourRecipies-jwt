import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";


const Dashboard = () => {
    return (
        <div>
            <nav>
                <Header></Header>
            </nav>
            <main className="w-11/12 mx-auto ">
                <div className="grid py-5 grid-cols-12 gap-5 min-h-screen">
                    {/* manus */}
                    {/* **1** <div className="bg-red-100 col-span-3 h-full">Manus</div> */}
                    <div className="bg-red-100 col-span-3  h-full flex flex-col  items-center">
                        <NavLink to='/dashboard' className='p-2 my-3 border border-stone-400 w-full'>
                            Home
                            </NavLink>

                        <NavLink to='/dashboard/add-product' className='p-2 my-3 border border-stone-400 w-full'>
                            Add Product
                            </NavLink>

                        <NavLink to='/dashboard/manage-product' className='p-2 my-3 border border-stone-400 w-full'>
                            Manage Product
                            </NavLink>

                        <NavLink to='/dashboard/addCategory' className='p-2 my-3 border border-stone-400 w-full'>
                            Add Category
                            </NavLink>

                        <NavLink to='/dashboard/manageCategory' className='p-2 my-3 border border-stone-400 w-full'>
                            Manage Category
                            </NavLink>

                    </div>


                    {/* **1** <div className="bg-blue-100 col-span-9 h-full">Main</div> */}
                    {/* **2** <div className="bg-blue-100 col-span-9 h-full"> */}
                    <div className="col-span-9 h-full">
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;