import {Link, NavLink} from "react-router-dom";


const NavigationBar = () => {

  return(
    <>
        <nav className="bg-[#2D83A6]">
            <div className="mx-auto flex xl:max-w-screen-xl md:max-w-screen-md flex-wrap items-center justify-between md:h-20 ">
                <div className="flex items-center justify-center rtl:space-x-reverse">
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700:cursor-pointer">Marcus Fish</span>
                </div>
                <div className="hidden w-full items-center justify-center md:order-1 md:flex md:w-auto " id="navbar-sticky">
                    <ul className="flex flex-col rounded-lg font-medium md:flex-row md:space-x-6 md:border-0 md:p-0 rtl:space-x-reverse">
                        <li>
                            <NavLink to="/"
                                  className="no-underline block rounded px-3 py-3 text-white hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 ">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/place-supply"
                               className="no-underline block rounded px-3 py-3 text-white hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Place Supply</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us"
                               className="no-underline block rounded px-3 py-3 text-white hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/supply"
                               className="no-underline block rounded px-3 py-3 text-white hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Supply Details</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse gap-x-2">
                    <Link
                        to="/login"
                        type="button"
                        className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        type="button"
                        className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        SignUp
                    </Link>
                </div>
            </div>
        </nav>
    </>
  );
}

export default NavigationBar;

