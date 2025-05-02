import Card from "./Card";

const ProductListing = ({ product }) => {
    return (
        <>
            <div className="col-sm-3" style={{width: '30%'}}>
                <Card
                    key={ product.id }
                    src="https://picsum.photos/300/200"
                    alt="imagem.png"
                    title={ product.nome }
                    text={ product.descricao.substring(0, 100) + "..." }
                />
            </div>
        </>
    );
};

export default ProductListing;