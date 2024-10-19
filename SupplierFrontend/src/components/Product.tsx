
const Product = () => {

  return(
      <>
          <div
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
              <a href="#">
                  <img className="p-8 rounded-t-lg group-hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq00uXqOWNZb9Hcc-i0DPZk7MRQRyzxNV-3g&s" alt="product image"/>
              </a>
              <div className="px-5 pb-5">
                  <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                      </h5>
                  </a>
                  <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                      <a href="#"
                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Add to cart
                      </a>
                  </div>
              </div>
          </div>
      </>
  );
}
export default Product;
