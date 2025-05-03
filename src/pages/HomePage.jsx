import Hero from '../components/Hero';
import ProductListings from "../components/ProductListings";

const HomePage = () => {

    return (
        <>
            <>
                <Hero />
                <ProductListings recents={ true }/>
            </>
        </>
    )
}

export default HomePage;