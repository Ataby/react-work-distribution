import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState,useEffect } from "react";



const Home = function(){
    
    const url = "https://659a7537652b843dea539125.mockapi.io/api/v1/tutorial";
    const [tutorials, settutorials] = useState([] );

    const getTutorials = async function(){
        // AXIOS'UN FETCH'DEN FARKI => JSON FORMATINDA CIKTI VERIYOR => YANI KULLANIMA HAZIR VERI
        try {
           const {data} = await axios(url);
           //C,R,U,D ISLEMLERINDEN : READ(GET ISLEMI)
           console.log(data);
           settutorials(data) ;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getTutorials();
    }, [ ])
    
    // API'DEN ALINAN VERIYI CHILD COMPONENT'E(TUTORIAL.LIST) GONDERMEK ICIN GLOBAL DEGISKENE ATAMA YAPARIZ.

    return (
        <>
        <AddTutorial getTutorials={getTutorials}  />
        <TutorialList tutorials={tutorials} getTutorials={getTutorials}/>
        </>
    );
    

};

export default Home;