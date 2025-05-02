import ProductListings from "../components/ProductListings";

const ProductsPage = () => {


    return (
        <>

            <div className="header">
                <div className="container-fluid my-2 mx-4">
                    <form>
                        <div className="row justify-content-center">
                            <div className="col gx-1">
                                <input className="form-control" type="text" placeholder="Pesquise um produto" />
                            </div>
                            <div className="col gx-0">
                                <input className="btn btn-primary" type="submit" value="Pesquisar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content">
                <ProductListings />
            </div>
        </>
    );
};

export default ProductsPage;