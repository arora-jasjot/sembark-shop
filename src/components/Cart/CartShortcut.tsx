import { Drawer } from "@mui/material";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useLocation } from "react-router";
import Button from "../Common/Button";
import carticon from '@/assets/icons/cart.svg'
import SidebarItem from "./SidebarItem";

const CartShortcut = () => {
    const location = useLocation();
    const { pathname } = location;

    const [isSidebarOpen, setSideBarOpen] = useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => {
        setSideBarOpen(newOpen);
    };

    return (
        <>
            {pathname !== "/cart" && <div className="fixed bottom-10 right-10 w-10 h-10 rounded-full bg-primary z-50 flex justify-center items-center cursor-pointer" onClick={() => toggleDrawer(true)}>
                <IoCartOutline size={16} color="#FFFFFF" />
            </div>}
            <Drawer open={isSidebarOpen && pathname !== "/cart"} onClose={() => toggleDrawer(false)} anchor={'right'} ModalProps={{
                keepMounted: false
            }}>
                <div className="w-[400px] h-full flex flex-col justify-center items-center font-poppins">
                    <div className="w-full h-full shrink overflow-y-auto relative">
                        <div className="p-6 border-b border-dark flex justify-between items-center sticky top-0 left-0 bg-white">
                            <h1 className="text-2xl font-semibold font-montserrat text-black">Shopping Cart</h1>
                            <img src={carticon} onClick={() => toggleDrawer(false)} className="w-5 h-5 cursor-pointer" alt="" />
                        </div>
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                        <SidebarItem />
                    </div>
                    <div className="w-full h-fit shrink-0 px-10 py-6 border-t border-dark space-y-5">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-1 text-black font-medium text-lg">Sub total:</div>
                            <div className="col-span-1 text-grey font-normal text-lg text-end">Rs. 10000</div>
                        </div>
                        <Button text="Go to Cart" style="dark" customClassName="border-2 border-primary rounded-sm" />
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default CartShortcut