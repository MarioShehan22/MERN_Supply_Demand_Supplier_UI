import Image from "../assets/aboutUs.png";
import NavigationBar from "../components/NavigationBar";
import React from "react";
import FooterSection from "../components/FooterSection";
const AboutUsPage = () => {
    return(
        <>
            <NavigationBar/>
            <div className="w-4/5 mx-auto">
                <h1 className="text-3xl mt-3">About Us Page</h1>
                <img src={Image} alt="AboutUsPage" className="mx-auto my-10"/>
                <div className="text-2xl text-slate-950">
                    Marcus Fish Product Company is a thriving seafood supplier based in Negombo, Sri Lanka. We specialize in
                    providing fresh and high-quality fish and seafood products to customers across the region. With a commitment
                    to sustainability and customer satisfaction, we have built a strong reputation in the industry. Our extensive
                    product range includes a variety of fresh fish, shrimp, crab, lobster, squid, and other seafood delicacies.
                    We source our products from local fishermen and sustainable aquaculture farms, ensuring the highest quality
                    and freshness. Our dedicated team is committed to delivering exceptional service and meeting the diverse needs of our customers.
                </div>
            </div>
            <FooterSection/>
        </>
    );
}
export default AboutUsPage;
