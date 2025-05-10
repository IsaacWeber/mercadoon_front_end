import ProductListing from "./ProductListing";
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

const ProductListings = ({ recents = false }) => {
    const username = "t@email.com";
    const password = "b@123";
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = recents ? "http://localhost:8080/api/produto/recentes" : "http://localhost:8080/api/produto";
    
    useEffect(() => {   
        const fetchProducts = async () => {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": "Basic " + btoa(username + ":" + password),
                    "Content-Type": "application/json",
                }
            });
            
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        }
        
        fetchProducts();

    }, []);

    return (
        <>
            {loading ? <Spinner /> :
                products.length > 0 ?
                <>
                    <div className="container-fluid text-center" style={{ margin: '3% 0 15% 0'}}>
                        <div className="row g-4 justify-content-center">
                            {
                                products.map((p) => <ProductListing key={p.id} product={p} />)
                            }
                        </div>
                    </div>
                </>
                :
                <>
                    <p className="fs-1 text-center" style={{color: 'gray', margin: '10% 0 25% 0'}}>Sem produtos cadastrados</p>
          
                </>
            }
        </>

    );
};

export default ProductListings;