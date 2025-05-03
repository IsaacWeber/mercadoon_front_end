import noImage from '../assets/no_image.jpg';

const Card = ({
    imageBlob,
    alt,
    title,
    text
}) => {
    
    const toSrc = imageBlob ? "data:image/jpg;base64," + imageBlob : noImage;

    return (
        <>
            <div className="card">
                <img src={ toSrc } alt= { alt } className="card-img-top" style={{height: '220px'}}/>
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