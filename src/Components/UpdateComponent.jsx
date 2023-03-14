

const UpdateComponent = ({ id, updateData}) => {
    const handleClick = () => {
        updateData(id)
    }
    return (
        <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V2h10l6 6v3.1l-8 7.975V22Zm10 0v-2.125l5.15-5.175l2.15 2.1l-5.175 5.2Zm8.025-5.9L19.9 13.975l1.425-1.425l2.075 2.175ZM13 9h5l-5-5Z" /></svg>
        </button>
    );
}


export default UpdateComponent;