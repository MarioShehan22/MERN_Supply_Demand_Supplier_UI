import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import AxiosInstance from "../config/AxiosInstance";
import {useStore} from "../store/store";
import Logo from "../assets/RealLogo.png";

const Login:React.FC  = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {setName} = useStore();
    const navigate = useNavigate();

    const login=async ()=>{
        try{
            const response = await AxiosInstance.post('/users/login',{
                email,password
            });
            if(response.status==200){
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate()+2);
                const cookieValue=encodeURIComponent('token')+'=' +encodeURIComponent(response.data)+'; expires='+expirationDate.toUTCString()+'; path=/';
                document.cookie=cookieValue;
                setName(email);

                setEmail('');
                setPassword('');
                navigate('/');
            }

        }catch (e){
            setErrorMessage('Incorrect email or password. Please try again.');
        }
    }

    return(
        <>
            <div className="h-screen flex items-center relative justify-center"
                 style={{
                     backgroundImage: `url(${Image})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     opacity:'70%',
                 }}
            >
                <form className="mx-auto w-1/4 absolute z-10">
                    <div className="mb-5">
                        <div className="flex justify-center items-center w-full h-2/5">
                            <img src={`${Logo}`} alt="Logo" className='size-2/4'/>
                        </div>
                        <div className="text-5xl font-semibold leading-normal text-center">
                            Login
                        </div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900">
                            Your email
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="name@gmail.com"
                            required
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div
                        className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div
                        className="flex items-start mb-5">
                        <div
                            className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Remember me
                        </label>
                    </div>
                    <div className="flex flex-col">
                        {errorMessage && <div className="text-red-500 my-2">{errorMessage}</div>}
                        <button
                            type="button"
                            onClick={login}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Login
                        </button>
                        <Link
                            to="/signup"
                            type="submit"
                            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            SignUp
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
