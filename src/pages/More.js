import React from 'react';
import '../App.css';
import{ useLocation} from 'react-router-dom'


function More(){
    let clothe=useLocation();
    // console.log(clothe)

    return(
        <div className="more">
            <img  className="MoreImage" src={clothe.state.clothe.image}/>
            <div className="Details">
                <h3>{`category : ${clothe.state.clothe.category}`}</h3>
                <h3>{`title : ${clothe.state.clothe.title}`}</h3>
                <h3>description : <p className="description" >{clothe.state.clothe.description}</p></h3>
                <h3>{`price :  ${clothe.state.clothe.price}`}</h3>
                <h3>{`rate :  ${clothe.state.clothe.rating.rate} , count : ${clothe.state.clothe.rating.count}`}</h3>
                

            </div>

        </div>

    );
}
export default More;