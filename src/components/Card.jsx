const Card = ({
    src,
    alt,
    title,
    text
}) => {
    return (
        <>
            <div className="card" >
                <img src={ src } alt= { alt } className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ text }</p>
                    <a href="" className="btn btn-primary">Detalhes</a>
                </div>
            </div>
        </>
    );
}

export default Card;