
import { NavLink } from 'react-router-dom';

const SideBar = ({categories}) => {
    return (
        <div>
            <div className="bg-white p-6 rounded-xl shadow-2xl">
                <NavLink to="/" className={({isActive}) => `btn rounded-full my-3 hover:bg-[#9538E2] hover:text-white w-full duration-200 ${isActive ? 'bg-[#9538E2] text-white' : ''}`}>View All</NavLink>
            
            {
                categories.map((category,index) => <NavLink key={index} to={`/Card/${category.category}`} className={({isActive}) => `btn rounded-full hover:bg-[#9538E2] my-3 hover:text-white w-full duration-200 ${isActive ? 'bg-[#9538E2] text-white' : ''}`}>{category.category}</NavLink>)
            }
            </div>
            
        </div>
    );
};

export default SideBar;