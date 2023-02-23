import ObiPicture from "../static/Obi-wan_headshot.webp"

const Error = (props) => {
    const {error} = props;
    return (
        <>
        <h1 className="text-center">{error}</h1>
        <img src={ObiPicture} alt="Obi-Wan" className="mx-auto d-block"/>
        </>
    )
}

export default Error;