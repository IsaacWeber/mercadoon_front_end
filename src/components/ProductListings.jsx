import ProductListing from "./ProductListing";
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

const ProductListings = () => {
    const username = "t@email.com";
    const password = "b@123";

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:8080/api/produto", {
                method: "GET",
                headers: {
                    "Authorization": "Basic " + btoa(username + ":" + password),
                    "Content-Type": "application/json",
                }
            });

            const data = await res.json();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);


    return (
        <>
            {loading ? <Spinner /> :
                <>
                    <div className="container my-4 text-center">
                        <div className="row g-4 justify-content-center">
                            {
                                products.map((p) => <ProductListing key={p.id} product={p} />)
                            }
                        </div>
                    </div>
                </>
            }
        </>

    );
};

export default ProductListings;