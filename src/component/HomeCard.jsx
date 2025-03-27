export default function HomeCard() {
    return (
      <section className="bg-white p-6 ">
        <div className="flex flex-col items-start space-y-4">
          {/* Heading */}
          <p className="text-gray-600 text-[20px]">Order Restaurant food, takeaway..</p>
          <h1 className="text-4xl font-bold ">
            Feast Your Senses, <br />
            <span className="text-orange-500">Fast and Fresh</span>
          </h1>
          <p className="text-gray-500 text-[19px]">Enter a postcode to see what we deliver</p>
  
        
          <div className="flex items-center space-x-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Expore New Food"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <button className="bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold">
              Search
            </button>
            <div>
                
            </div>
          </div>
        </div>
      </section>
    );
  }
  