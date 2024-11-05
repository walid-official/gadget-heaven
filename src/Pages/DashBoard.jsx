import AddCart from "../components/DashBoardCart/AddCart";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

  return (
    <div className="">

      <div className="bg-[#9538E2] pt-8 pb-20">
        <HeaderTitle
          heading="DashBoard"
          title="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></HeaderTitle>
        <div className="flex gap-3 justify-center py-6">
          <NavLink to="cart" className={({isActive}) => `btn bg-transparent px-10 py-2 rounded-full font-bold border border-white ${isActive ? 'bg-white text-[#9538E2]' : 'text-white'}`}>
           
              Cart
        
          </NavLink>
          <NavLink to="wishlist" className={({isActive}) => `btn bg-transparent px-10 py-2 rounded-full font-bold border border-white ${isActive ? 'bg-white text-[#9538E2]' : 'text-white'}`}>
              Wishlist
          </NavLink>
        </div>
      </div>
    <Outlet></Outlet>



    </div>
  );
};

export default DashBoard;
