import Header from "./Header"
import ResCard from "./ResCard"
import {useEffect, useState} from "react"

const ResContainer = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchText,setSearchText]= useState('')
    const [list,setList] = useState([]) // temporary for updating current ones
  
  
    const fetchData = async () => {
      const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0237524&lng=76.9452173&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await res.json()
      console.log(json)
      const informations = json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
      const details = informations.map((data) => data.info)
      console.log(informations[0].info)
      setRestaurants(details)
      console.log(details)
      setList(details)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    if(restaurants.length ==0) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      )
    }
    const sortrestaurants = () => {
       const result= [...restaurants].sort((a, b) => b.avgRating - a.avgRating)
       setList(result)
    }
  
    const filterbyratings =() => {
      const result = restaurants.filter((res)=> {
        return res.avgRating > 4.3
      })
      setList(result);
    }
    const filterbyfastdelivery =() => {
      const result= [...restaurants].sort((a, b) => a.sla.deliveryTime - b.sla.deliveryTime)
       setList(result)
    }
    const updateSearchText = (e) => {
      setSearchText(e.target.value)
     /*  console.log(e.target.value); */
      searchRestaurants()   
    }
    const searchRestaurants = () => {
      const result = restaurants.filter((res)=> {
        return res.name.toLowerCase().includes(searchText.toLowerCase())
      })
      setList(result);
    }
    const filterbypureveg =() => {
      const result = restaurants.filter((res)=> {
        return res.veg===true;
      })
      setList(result);
    }
    
    return (
      <>
        <div>
        <div class="title-container">
            <h2 class="title">Restaurants with online food delivery in Coimbatore</h2>
            <div></div>
        <div className="search-container">
  <input value={searchText} onChange={updateSearchText} placeholder="Search for restaurants" />
  <span className="search-logo">
  <svg

    viewBox="5 -1 12 25"
    height="17"
    width="17"
    fill="#F15700"
  >
    <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
  </svg>
</span>
  <button className="button" onClick={sortrestaurants}>TOP RESTAURANTS</button>
  <button className="button" onClick={filterbyratings}>RATINGS 4.2+</button>
  <button className="button" onClick={filterbyfastdelivery}>FAST DELIVERY</button>
  <button className="button" onClick={filterbypureveg}>PURE VEG</button>
</div>

        </div>
          <div className="body-container">
          <div className="restaurant-container">
            {list.map((res) => (
              <ResCard key={res.id} a={res} />
            ))}
          </div>
        </div>
        </div>
      </> 
    )
  }
  
export default ResContainer