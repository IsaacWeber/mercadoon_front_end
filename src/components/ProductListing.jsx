import Card from "./Card";

const ProductListing = ({ product }) => {
    return (
        <>
            <div className="col-sm-3" style={{width: '30%'}}>
                <Card
                    key={ product.id }
                    imageBlob={ product && product.imagens.length > 0 ? product.imagens[0].data : null }
                    alt="imagem.png"
                    title={ product.nome }
                    text={ product.descricao.substring(0, 100) + "..." }
                />
            </div>
        </>
    );
};

export default ProductListing;