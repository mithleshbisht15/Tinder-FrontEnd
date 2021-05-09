import React, {useState , useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercards.css';


function Tindercards() {

    const [people, setPeople] =  useState([
      {
        name: "Shirley Setia",
        imgUrl : "https://i1.wp.com/wikifolder.com/wp-content/uploads/2019/02/Shriley-Setia.jpg?fit=640%2C420&ssl=1"
      },
      {
        name: "Alia Bhatt",
        imgUrl : "https://img.etimg.com/thumb/msid-68391357,width-650,imgsize-2366810,,resizemode-4,quality-100/.jpg"
      },
      {
        name: "Dakota Johnson",
        imgUrl : "https://assets.charmboard.com/images/w_1280,h_720/x_287,y_139,w_781,h_441,c_crop,f_auto,q_auto/h_541/im/lc/400226/dakota-johnson-in-love-me-like-you-do-fifty-shades-of-grey-2015.jpg"
      },
      {
        name: "Emma Watson",
        imgUrl : "https://img.srgcdn.com/e//a3VzaG5nZmY4WnBqN21Jb2pUMEQucG5n.jpg"
      },
    ]);

    // useEffect(() => {
    //     async function fetchData() {
    //       const req = await axios.get("/tinder/cards");

    //       setPeople(req.data);
    //     }
    //     fetchData();
    // }, [])

       const swiped = (direction, nameToDelete) =>{
      console.log("removing: " + nameToDelete);
     };

       const outOfFrame=(name)=>{
      console.log(name+ "left the screen");
     };

    return (
        <>
          <div className="tindercard">
            <div className="tinderCards_cardContainer">
              {people.map((person) =>(

                <TinderCard
                   className="swipe"
                   key={person.name}
                   preventSwipe={["up", "down"]}
                   onSwipe={(dir) => swiped(dir, person.name)}
                   onCardLeftScreen = { () => outOfFrame(person.name)}
                   >

                   <div style={{backgroundImage: `url(${person.imgUrl})`}}
                       className="card" >
                       <h3>{person.name}</h3>
                   </div>

                </TinderCard>
                
                
              ))}
            </div>
          </div>  
        </>
    )
}

export default Tindercards;

