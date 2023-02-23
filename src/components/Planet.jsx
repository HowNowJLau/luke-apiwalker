const Planet = (props) => {
    const {climate, terrain, surface_water, population, name} = props.planet;

    return(
        <div className="text-center col-8 mx-auto d-flex card justify-content-center">
            <h1>{name}</h1>
            <p>Climate: {climate}</p>
            <p>Terrain: {terrain}</p>
            <p>Surface Water: {surface_water}</p>
            <p>Population: {population}</p>
        </div>
    )
}

export default Planet;