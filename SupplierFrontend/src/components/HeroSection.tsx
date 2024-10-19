import hero from "../assets/Hero.png";
import {Link} from "react-router-dom";
const HeroSection = () => {
  return(
      <>
          <div className="flex mt-12">
              <div className="xl:pt-9">
                  <div className="xl:text-5xl lg:text-4xl md:text-3xl font-semibold leading-normal">
                      Marcus Fish Only<br/>
                      IF You Want To The Best
                  </div>
                  <p className="xl:mt-4 md:mt-2 text-gray-500 xl:text-base md:text-sm leading-relaxed">
                      Offering a variety of fresh, never frozen fish fillets, shellfish, and crustaceans,
                      Marcus Fish helps create restaurant-quality dishes at home or provides chefs with top-notch ingredients.
                  </p>
                  <div className="xl:mt-8 md:mt-3 flex justify-center border-current">
                      <Link
                          to="/place-supply"
                          type="button"
                          className="rounded-lg bg-[#63E4F2] xl:w-52 md:w-40 px-4 py-2 text-center xl:text-2xl md:text-lg font-medium text-white hover:bg-[#0FA8B8] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         Sell Product
                      </Link>
                  </div>
              </div>
              <div className="ml-12 h-auto w-[1280px] bg-center	bg-no-repeat bg-cover">
                  <img src={hero} alt="Hero Image" height={750} width={1280}/>
              </div>
          </div>
      </>
  );
}
export default HeroSection;
