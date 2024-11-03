
import { NavLink } from 'react-router-dom';

const SideBar = ({categories}) => {
    return (
        <div>
            <div className="bg-white p-6 rounded-xl shadow-2xl">
                <NavLink to="/"><button className='btn block w-full my-2 hover:bg-[#9538E2] hover:text-white duration-200'>View All</button></NavLink>
            
            {
                categories.map((category,index) => <NavLink key={index} to={`Card/${category.category}`}><button className='btn block w-full my-2 hover:bg-[#9538E2] hover:text-white duration-200'>{category.category}</button></NavLink>)
            }
            </div>
            
        </div>
    );
};

export default SideBar;