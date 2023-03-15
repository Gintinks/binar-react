

const FormComponent = ({ handleSubmit, dataUpdate, handleSubmitUpdate, setDataUpdate }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDataUpdate({ ...dataUpdate, [name]: value });
    };
    return (
        <form className="test-form" onSubmit={dataUpdate.id === 0 ? handleSubmit : handleSubmitUpdate}  >
            <label>Name</label>
            <input type="text" id="name" name="name" value={dataUpdate.name} onChange={handleInputChange} ></input>
            <label>Age</label>
            <input id="age" name="age" type="number" value={dataUpdate.age} onChange={handleInputChange}></input>
            <label>Status (Active / Inactive)</label>
            <select name="status" id="status" value={dataUpdate.status} onChange={handleInputChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            {dataUpdate.id === 0 ?
                <button type="submit" className='button-container submit' >Submit</button>
                :
                <button type="submit" className='button-container update' >Update</button>}

        </form>
    );
}

export default FormComponent;