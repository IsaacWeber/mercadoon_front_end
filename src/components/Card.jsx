import noImage from '../assets/no_image.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({
    imageBlob,
    alt,
    title,
    text,
    productPrice,
    productId,
}) => {
    
    const toSrc = imageBlob ? "data:image/jpg;base64," + imageBlob : noImage;
    const navigate = useNavigate();

    return (
        <>
            <div className="card" onClick={() => navigate(`/product_details/${productId}`) }>
                <img src={ toSrc } alt= { alt } className="card-img-top" style={{height: '220px'}}/>
                <div className="card-body">
                    <h5 className="card-title" style={{ height: '3rem'}}>{ title }</h5>
                    <p className="card-text" style={{ height: '3rem'}}>{ text }</p>
                    <p className="fs-4" style={{color: '#504d4d'}}>{`R$ ${productPrice},00`}</p>
                    <Link to="/product_details" className="btn btn-primary">Detalhes</Link>
                </div>  
            </div>
        </>
    );
}

export default Card;