const Person = (props) => {
    const {height, mass, hair_color, skin_color, name} = props.person;

    return (
        <div className="text-center col-8 mx-auto d-flex card justify-content-center">
            <h1>{name}</h1>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Skin Color: {skin_color}</p>
        </div>
    )
}

export default Person;