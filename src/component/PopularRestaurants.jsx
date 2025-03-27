import 'bootstrap/dist/css/bootstrap.min.css';
// import Restaurants from '../Database/restaurants/Restaurants';

export default function PopularRestaurants() {
  
  return (
    <div className="container p-4 rounded shadow" style={{background: 'linear-gradient(orange, yellow)'}}>
      <h3 className="mb-3 text-center"><b>Popular Restaurants</b></h3>
      <div className="d-flex flex-row overflow-auto">
        {Restaurants.map((Restaurant, index) => (
          <div key={index} className="text-center mx-5">
            <img src={Restaurant.img} alt={Restaurant.name} 
            className="img-fluid rounded shadow " style={{ width: '100px', height: '100px' }} />
            {/* <p className=" small rounded font-weight-medium  " >{Restaurant.name}</p> */}
            <button className='btn btn-outline-primary'>{Restaurant.name}</button>
      </div>
        ))}
      </div>
    </div>
  );
}