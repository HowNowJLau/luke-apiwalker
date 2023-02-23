import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = (props) => {
    const [formData, setFormData] = useState({
        type: "error",
        id: "id number here"
    });
    const navigate = useNavigate();
    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        const {type, id} = formData;
        navigate(`/home/${type}/${id}`);
        setFormData({
            type,
            id
        })
    }
    return (
        <div>
            <h3 className="text-center text-success">Search for:</h3>
            <form className="d-flex justify-content-center" onSubmit={submitHandler}>
                <select name="type" onChange={handleInput}>
                    <option value="error">--Select One--</option>
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                </select>
                <input type="number" name="id" placeholder={formData.id} onChange={handleInput}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;