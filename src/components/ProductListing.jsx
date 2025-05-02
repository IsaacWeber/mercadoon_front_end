import Card from "./Card";

const ProductListing = ({ product }) => {
    return (
        <>
            <div className="col-sm-3">
                <Card
                    key={ product.id }
                    src="https://picsum.photos/300/200"
                    alt="imagem.png"
                    title={ product.nome }
                    text={ product.descricao }
                />
            </div>
        </>
    );
};

export default ProductListing;