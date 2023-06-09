import TableComponent from "./Components/TableComponent";
import FormComponent from "./Components/FormComponent";
import './style.css';
import React, {
  useState
} from 'react';

function App() {
  const [index, setIndex] = useState(1)
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({
    id: 0,
    name: "",
    age:0,
    status:"Active"
  })

  //handle submit for FormComponent
  const handleSubmit = (event) => {
    event.preventDefault();
    setIndex(index+1)
    const { target } = event;
    const newForm = {
      id: index,
      name: target.name.value,
      age: target.age.value,
      status: target.status.value,
    };
    setData([...data, newForm]);
    setDataUpdate({
      id: 0,
      name: "",
      age:0,
      status:"Active"
    })
    target.reset();
  };

  const handleSubmitUpdate = (event) => {

    event.preventDefault()
    const { target } = event;
    const newItems = [...data];
    const index = newItems.findIndex(item => item.id === dataUpdate.id);
    console.log(index);
    const newItem = {
      ...newItems[index],
      name: target.name.value,
      age: target.age.value,
      status: target.status.value
    };
    newItems.splice(index, 1, newItem);
    setData(newItems);

    setDataUpdate({
      id: 0,
      name: "",
      age:0,
      status:"Active"
    })
    target.reset();
  };

  //delete data for DeleteData
  const deleteData = (dataId) => {
    setData(data.filter((data) => data.id !== dataId));
  }

  const UpdateData = (dataId) => {
    setDataUpdate(dataId)
  }

  return (
    <div className="App">
      <FormComponent handleSubmit={handleSubmit} handleSubmitUpdate={handleSubmitUpdate} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate} />
      <TableComponent data={data} deleteData={deleteData} UpdateData={UpdateData} />
    </div>
  );
}

export default App;
