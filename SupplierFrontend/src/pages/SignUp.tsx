import React, {useState} from "react";
import {Link} from "react-router-dom";
import AxiosInstance from "../config/AxiosInstance";
import Image from "../assets/sea.png";
import Logo from "../assets/RealLogo.png";

export type UserForm = {
    fistName:string|'';
    lastName:string|'';
    phoneNumber:string|'';
    businessName:string|'';
    email:string|'';
    role:"Supplier";
    activeState:boolean | true;
}
export interface AddressForm {
    addressLine:string|'',
    district: string|'',
    city: string|'',
    optional: string|''
}

export type UserForm1 = UserForm & AddressForm & {password:string|''}

const SignUp:React.FC  = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [data,setData] = useState<UserForm1>({
        fistName:'',
        lastName:'',
        phoneNumber:'',
        businessName:'',
        email:'',
        role:"Supplier",
        addressLine:'',
        district:'',
        city: '',
        optional: '',
        password:'',
        activeState: true
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };
    const register = async ()=>{
        try{
            const response = await AxiosInstance.post('/users/register',data);
            if (response.status==201){
                setData({
                    fistName:'',
                    lastName:'',
                    phoneNumber:'',
                    businessName:'',
                    email:'',
                    role:"Supplier",
                    addressLine:'',
                    district:'',
                    city: '',
                    optional: '',
                    password:'',
                    activeState: true
                });
            }
        }catch (e){
            console.log('Incorrect email or password. Please try again.');
            setErrorMessage('Incorrect email or password. Please try again.');
        }
    }

    return(
        <>
            <div className="flex h-screen items-center justify-center"
                 style={{
                     backgroundImage: `url(${Image})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     opacity:'70%'
                 }}
            >
                <form className="w-2/3">
                    <div className="flex justify-center items-center w-full h-3/6">
                        <img src={`${Logo}`} alt="Logo" className='size-1/12'/>
                    </div>
                    <label className="block mb-2 text-5xl font-medium text-gray-900 mx-auto text-center">Sign Up</label>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="first_name"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text"
                                   name="fistName"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="John"
                                   required
                                   onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text"
                                   name="lastName"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Doe"
                                   onChange={handleInputChange}
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="company"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">BusinessName</label>
                            <input type="text"
                                   name="businessName"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="BusinessName"
                                   onChange={handleInputChange}
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel"
                                   name="phoneNumber"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="123-45-678"
                                   onChange={handleInputChange}
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="Address"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Address</label>
                            <input type="text"
                                   name="addressLine"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="No 3 Main Street"
                                   onChange={handleInputChange}
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="District"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">District</label>
                            <input type="text"
                                   name="district"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Colombo"
                                   onChange={handleInputChange}
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="city"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">City</label>
                            <input type="text"
                                   name="city"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ex - Negombo"
                                   onChange={handleInputChange}
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="optional"
                                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Optional</label>
                            <input type="text"
                                   name="optional"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   onChange={handleInputChange}
                                   placeholder="apartments Name Floor Number House Number"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email"
                               name="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="john.doe@company.com"
                               onChange={handleInputChange}
                               required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password"
                               className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password"
                               name="password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="•••••••••"
                               onChange={handleInputChange}
                               required
                        />
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember"
                                   type="checkbox"
                                   value=""
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                   required
                            />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
                    </div>
                    <div className="w-1/3 flex flex-col mx-auto">
                        {errorMessage && <div className="text-red-500 my-2">{errorMessage}</div>}
                        <button
                            type="submit"
                            onClick={register}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            SignUp
                        </button>
                        <Link to="/login" style={{ display: 'none' }}/>
                        <Link
                            to="/login"
                            type="submit"
                            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Al Ready Have An Account
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
export default SignUp;
