import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ tutorials, getTutorials }) => {
  console.log({ tutorials });
  const { titleName, desc } = tutorials;

  //CRUD => D (Delete)
  const deleteTutorial = async function (id) {
    const url =
      "https://659a7537652b843dea539125.mockapi.io/api/v1/tutorial/" + `${id}`;

    try {
      await axios.delete(url);
      getTutorials();
    } catch (error) {
      console.log(error);
    }
  };

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
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">title & name</th>
            <th scope="col">description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { titleName, desc, id } = item;

            return (
              <tr>
                <th>{id}</th>
                <td>{titleName}</td>
                <td>{desc}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    // onClick={()=>handleEdit(id,titleName,desc)}
                    // onClick={()=>handleEdit(item)
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <EditTutorial getTutorials={getTutorials} /> */}
      {/* EDIT TUTORIAL NOT COMPLETED !! */}
    </div>
  );
};

export default TutorialList;
