import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import noImage from '../assets/no_image.jpg';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const username = "t@email.com";
    const password = "b@123";
    const url = `http://localhost:8080/api/produto/${id}`;

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    "Authorization": "Basic " + btoa(username + ":" + password),
                    "Content-Type": "application/json",
                }
            });

            const data = await res.json();
            setProduct(data)
            setLoading(false);
        }

        fetchProduct();
    }, []);

    const toSrc = product && product.imagens[0] && product.imagens[0].data ? "data:image/jpg;base64," + product.imagens[0].data : noImage

    const getFormattedDate = (date) => {
        // From yyyy-mm-dd to dd/mm/yyyy
        const elements = date.split('-');
        return `${elements[2]}/${elements[1]}/${elements[0]}`;
    }

    return (
        <>
            {loading ? <Spinner /> :
                <>
                    <div className="container my-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <img className="img-fluid img-responsive" src={toSrc} alt="" style={{ width: '80%', height: '25rem' }} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 fs-2 fw-bold my-3">
                                {product.nome}
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-xl-6">
                                <div className="d-flex flex-column fs-5">
                                    <div className="mb-2">
                                        <span className="fw-bold">Preço:</span>
                                        <span>{` R$ ${Math.round(product.preco)},00`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col">
                                <div className="fw-bold mb-2">
                                    Descrição
                                </div>
                                <div style={{ textAlign: "justify" }}>
                                    {product.descricao}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col">
                                <div className="fw-bold mb-2">
                                    Marca
                                </div>
                                <div style={{ textAlign: "justify" }}>
                                    {product.marca}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col">
                                <div className="fw-bold mb-2" style={{ textAlign: "justify" }}>
                                    Categoria
                                </div>
                                <div>
                                    {product.categoria}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col">
                                <div className="fw-bold mb-2" style={{ textAlign: "justify" }}>
                                    Modelo
                                </div>
                                <div>
                                    {product.modelo}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col">
                                <div className="fw-bold mb-2" style={{ textAlign: "justify" }}>
                                    Cor
                                </div>
                                <div>
                                    {product.cor}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col">
                                <div className="fw-bold mb-2" style={{ textAlign: "justify" }}>
                                    Data de Publicação
                                </div>
                                <div>
                                    {getFormattedDate(product.dataCriacao)}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col">
                                <div className="fw-bold mb-2" style={{ textAlign: "justify" }}>
                                    Descrição Técnica
                                </div>
                                <div>
                                    {product.descricaoTecnica}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-7">
                                <div className="fw-bold mb-2" style={{ textAlign: "justify" }}>
                                    Dados do Publicador
                                </div>
                                <div className="border p-2">
                                    <span className="fw-bold">Nome:</span>
                                    {` ${product.cliente.nome + product.cliente.sobrenome}`}
                                </div>
                                {product.cliente.email ?
                                    <div>
                                        <span className="fw-bold">Email: </span> {product.cliente.email}
                                    </div>
                                    :
                                    <></>}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default ProductDetailsPage;