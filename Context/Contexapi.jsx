import { createContext, useEffect, useState } from "react";
import { food_list } from "../src/assets/assets";
export const Contexapi = createContext(null)

const Contex = (props) => {
    const [calitem, setcalitem] = useState({});

    const additemcart = (id) => {
        if (!calitem[id]) {
            setcalitem((prev) => ({ ...prev, [id]: 1 }))
        }
        else {
            setcalitem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
        }
    }
    const removeitemcart = (id) => {
        setcalitem((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }
    const contexval = {
        food_list,
        calitem,
        setcalitem,
        additemcart,
        removeitemcart,
        gettotalval
    }
    function gettotalval() {
        let totalamount=0;
        for(const item in calitem){
            if(calitem[item]>0){
                let foodinfo=food_list.find((product)=>product._id==item);
                totalamount +=foodinfo.price * calitem[item]
            }
        }
        return totalamount;
    }
    console.log(calitem[1])
    //  useEffect(()=>{
    //     console.log(calitem)
    //  },[calitem])
    return (<Contexapi.Provider value={contexval}>
        {props.children}
    </Contexapi.Provider>)
}
export default Contex