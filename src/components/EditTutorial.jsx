import axios from "axios";
import { useState, useEffect } from "react";

const EditTutorial = ({ getTutorials }) => {
  //   const handleSubmit = async function (e) {
  //     // e.preventDefault();
  //     const newTutor = { titleName, desc, id };
  //     // const newTutor = {"titleName":titleName, "desc":desc };
  //     // KEY VE VALUE AYNI ISE TEK KELIME ILE YAZILABILIR.
  //     editTutor(newTutor);
  //     setName("");
  //     setDesc("");
  //   };

  // //CRUD : CREATE (POST REQUEST)
  //   const editTutor = async function (newTutor) {
  //     try {
  //       const url =
  //         "https://659a7537652b843dea539125.mockapi.io/api/v1/tutorial/" +
  //         `${newTutor.id}`;
  //       await axios.put(url, newTutor);
  //       getTutorials();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //CRUD => U (Update = put(komple) veya patch(kısmi))
  // const handleEdit= async function(item){
  //   const url = "https://659a7537652b843dea539125.mockapi.io/api/v1/tutorial/"+`${item.id}`;
  //   const editted = {"titleName":"javascript", "desc":"boot"}

  //   try {
  //     await axios.put(url,editted);
  //     getTutorials();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div>
      <div className="modal fade" id="editModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="editName" className="form-label">
                    title & name
                  </label>
                  <input type="text" className="form-control" id="editName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="editDesc" className="form-label">
                    description
                  </label>
                  <input type="text" className="form-control" id="editDesc" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={()=>handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
