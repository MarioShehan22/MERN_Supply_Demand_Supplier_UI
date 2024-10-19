
const UserDetailsForm = ({addressData,data}) => {
    return(
        <>
            <form>
                <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="UserName">User Name</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="name"
                            defaultValue={data.fistName}
                            disabled
                            placeholder="User Name"
                        />
                    </div>
                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="phone"
                            defaultValue={data.phoneNumber}
                            disabled
                            placeholder="Phone"
                        />
                    </div>
                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="BusinessName">BusinessName</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="BusinessName"
                            defaultValue={data.businessName}
                            disabled
                            placeholder="BusinessName"
                        />
                    </div>
                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="email"
                            defaultValue={data.email}
                            disabled
                            placeholder="email"
                        />
                    </div>


                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="address">Address</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="address"
                            defaultValue={addressData.addressLine}
                            disabled
                            placeholder="Address"
                        />
                    </div>
                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="address">District</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="district"
                            defaultValue={addressData.district}
                            disabled
                            placeholder="District"
                        />
                    </div>
                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="address">city</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="city"
                            disabled
                            defaultValue={addressData.city}
                            placeholder="city"
                        />
                    </div>
                    <div className="min-h-[50px] rounded-lg">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="address">optional</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                            name="optional"
                            defaultValue={addressData?.optional||" "}
                            disabled
                            placeholder="optional"
                        />
                    </div>
                </div>
            </form>
        </>
    );
}
export default UserDetailsForm;
