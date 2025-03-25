export default function Navbar() {
    return (
      <nav className="flex items-center justify-between bg-color p-4 shadow-md text">
    
        <div className="text-3xl font-bold text-black flex items-center">
          Quick<span className="bg-orange-500 text-black px-1 ml-1 rounded-sm">bite</span>
        </div>
  
        {/* Navigation Links */}
        <div className="flex space-x-6  text-[20px]">
        
          <a href="#" className="hover:text-orange-500">Browse Menu</a>
          <a href="#" className="hover:text-orange-500">Special Offers</a>
          <a href="#" className="hover:text-orange-500">Restaurants</a>
          <a href="#" className="hover:text-orange-500">Track Order</a>
        </div>
  
        {/* Login Button-SAURABH'S TASK  */}
        <button className="bg-black text-white px-5 py-2 rounded-full flex items-center">
          <span className="text-orange-500 mr-2">🔒</span> Login/Signup
        </button>
      </nav>
    );
  }
  