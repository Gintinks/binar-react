

const FormComponent = ({ handleSubmit, dataUpdate, handleSubmitUpdate }) => {
    return (
        <form className="test-form" onSubmit={dataUpdate === 0 ? handleSubmit : handleSubmitUpdate}  >
            <label>Name</label>
            <input type="text" id="name" name="name" ></input>
            <label>Age</label>
            <input id="age" name="age" type="number" ></input>
            <label>Status (Active / Inactive)</label>
            <select name="status" id="status" >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            {dataUpdate === 0 ?
                <button type="submit" className='button-container submit' >Submit</button>
                :
                <button type="submit" className='button-container update' >Update</button>}

        </form>
    );
}

export default FormComponent;