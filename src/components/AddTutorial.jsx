import axios from "axios";
import { useState,useEffect } from "react"; 

const AddTutorial = ({getTutorials}) => {
  const [titleName, setName] = useState("");
  const [desc, setDesc] = useState("");
  // BIR COMPONENT SU DURUMLARDA RENDER EDILIR : STATE GUNCELLENMESI VEYA PROPS DEGISIMI
 const handleSubmit = async function (e) {
    e.preventDefault();
    const newTutor = {titleName,desc};
    // const newTutor = {"titleName":titleName, "desc":desc };
    // KEY VE VALUE AYNI ISE TEK SEFER YAZILABILIR.
    addTutor(newTutor);
    setName("");
    setDesc("");
 }
  // //CRUD : CREATE (POST REQUEST)
  const addTutor = async function(newTutor){
    try {
    const url = "https://659a7537652b843dea539125.mockapi.io/api/v1/tutorial";
    await axios.post(url,newTutor);
    getTutorials();
  } catch (error) {
    console.log(error)
  }
  }
 

  // } API'YE POST ISLEMI YAPILDI. FAKAT ISTEDIGIMIZIN DOM'DA GOZUKMESI ICIN RE-RENDER ETTIRMEK GEREKIR. BU YUZDEN YENI VERI GIRILDIKTEN HEMEN SONRA TEKRAR API'YE ISTEK ATARSAK(GET) AYNI ZAMANDA LISTE'DE GUNCELLENMIS OLUR.
 
  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add name & title</h1>
      <form onSubmit={handleSubmit}>
        {/* FORM ICINDE BUTTON OLDUGU ICIN SUBMIT GOREVI YAPIYOR. */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name & Title
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Add name & title"
            value={titleName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
