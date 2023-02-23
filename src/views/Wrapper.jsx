import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Person from "../components/Person";
import Planet from "../components/Planet";
import Error from "../components/Error";


const Wrapper = () => {
    const {type, id} = useParams();
    const [person, setPerson] = useState(null);
    const [planet, setPlanet] = useState(null);
    const [error, setError] = useState(null);

    useEffect (() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
        .then(res => {
            console.log(res);
            if (type == "people") {
                setPerson(res.data);
                setPlanet(null);
                setError(null);
            }
            else if (type == "planets") {
                setPlanet(res.data);
                setPerson(null);
                setError(null);
            }
        }).catch(err => {
            setError("These are not the drones you are looking for")
            setPerson(null);
            setPlanet(null);
        })
    }, [type, id])
    return (
    <div>
        <SearchBar/>
        {
            person && <Person person={person}/>
        }
        {
            planet && <Planet planet={planet}/>
        }
        {
            error && <Error error={error}/>
        }
    </div>
    )
};

export default Wrapper;