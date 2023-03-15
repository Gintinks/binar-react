import DeleteComponent from "./DeleteComponent";
import UpdateComponent from "./UpdateComponent";


const TableComponent = (props) => {


    const displayTable = props.data.map((data) => {
        return (
            <tbody>
                <tr >
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.status}</td>
                    <td>
                        <div className="table-choice">
                            <UpdateComponent data={data }  updateData = {props.UpdateData}/>
                            <DeleteComponent id={data.id} deleteData = {props.deleteData}/>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    })
    // }

    return (
        <table id="myTable">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Pilihan</th>
                </tr>
            </thead>
            {displayTable}
        </table>

    );
}

export default TableComponent;