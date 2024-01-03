import { useEffect } from "react";
import { useState } from "react";
function useResDetails(id){
    console.log(id)
    useEffect(() => {
        fetchDetails();
      }, [])
    //console.log(params)
    const [details,setdetails]=useState({})
    const [categories,setcategories]=useState([])
    
    const  fetchDetails= async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId='+id.Resid);
       // console.log(id);
        // console.log(params.Resid)
        const json=await data.json();
        const details = json.data.cards[0].card.card.info
        const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
        setdetails(details)
        const filteredcategories=categories.filter((item)=>{
          return item.card.card["@type"]=== 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
        setcategories(filteredcategories)
        // console.log(details)
        console.log(filteredcategories)
        

    }

    return [details,categories]
}
export default useResDetails