

const DeleteComponent = ({ id,deleteData }) => {
    const handleClick = () => {
        deleteData(id)
    }
    return (

        <button onClick={handleClick} style={{ marginLeft: "12px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z" /></svg>
        </button>
    );
}


export default DeleteComponent;