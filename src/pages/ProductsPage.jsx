import Card from "../components/Card";

const ProductsPage = () => {
    return (
        <>
            <div className="header">
                <div className="container-fluid my-2 mx-4">
                    <form>
                        <div className="row justify-content-center">
                            <div className="col gx-1">
                                <input className="form-control" type="text" placeholder="Pesquise um produto ..." />
                            </div>
                            <div className="col gx-0">
                                <input className="btn btn-primary" type="submit" value="Pesquisar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container my-4 text-center">
                <div className="row g-4 justify-content-center">
                    <div className="col-sm-3">
                        <Card
                            src="https://picsum.photos/300/200"
                            alt="imagem.png"
                            title="-- Nome do Produto --"
                            text="-- Descrição do produto --"
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductsPage;