import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const PublishPage = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState(0);
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [desc, setDesc] = useState("");
    const [techDesc, setTechDesc] = useState("");
    const [price, setPrice] = useState(0.0);
    const [images, setImages] = useState([]);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const username = "t@email.com";
    const password = "b@123";
    const idCliente = 6; // Client has to exist. Use current client id in session

    const submitForm = async () => {
        if (!loading) {
            setLoading(true);

            try {
                const newProduct = {
                    "nome": name,
                    "marca": brand,
                    "categoria": category,
                    "modelo": model,
                    "cor": color,
                    "descricao": desc,
                    "descricaoTecnica": techDesc,
                    "preco": price,
                }

                const res = await fetch("http://localhost:8080/api/produto/" + idCliente, {
                    method: 'POST',
                    headers: {
                        "Authorization": "Basic " + btoa(username + ":" + password),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                });

                if (images.length > 0) {
                    const data = await res.json();

                    const formData = new FormData();
                    formData.append("produtoId", data.id);

                    for (let i = 0; i < images.length; ++i) {
                        formData.append("arquivos", images[i]);
                    }

                    const res2 = await fetch("http://localhost:8080/api/arquivo/upload_imagens_produto", {
                        method: 'POST',
                        headers: {
                            "Authorization": "Basic " + btoa(username + ":" + password),
                        },
                        body: formData
                    });
                }

                toast.success("Produto cadastrado!")
                navigate("/products");
            } catch (error) {
                toast.error("Erro ao cadastrar produto. Contate o administrador.");
                console.log("Erro ao cadastrar produto. ",)
            } finally {
                setLoading(false);
            }
        }
    }

    const handleImages = (e) => {
        let filesTmp = [];
        for (let i = 0; i < e.target.files.length; ++i) {
            filesTmp.push(e.target.files[i]);
        }
        setImages(filesTmp);
    }

    return (
        <>
            <form action={submitForm}>
                <div className="container">
                    <div className="row">
                        <p className="h3">Anuncie seu Produto</p>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_name" className="form-label">Nome</label>
                            <span style={{ color: 'red' }}> *</span>
                            <input
                                id="product_name"
                                type="text" className="form-control"
                                placeholder="Digite o nome do produto"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_brand" className="form-label">Marca</label>
                            <span style={{ color: 'red' }}> *</span>
                            <input
                                id="product_brand"
                                type="text"
                                className="form-control"
                                placeholder="Digite a marca do produto"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_category" className="form-label">Categoria</label>
                            <span style={{ color: 'red' }}> *</span>
                            <select
                                id="product_category"
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="0">ELETRÔNICOS</option>
                                <option value="1">ELETRODOMÉSTICOS</option>
                                <option value="2">VEÍCULOS</option>
                                <option value="3">ALIMENTOS</option>
                                <option value="4">AGRO</option>
                                <option value="5">ACESSÓRIOS</option>
                                <option value="6">ROUPAS</option>
                                <option value="7">CALÇADOS</option>
                                <option value="8">IMÓVEIS</option>
                                <option value="9">ESPORTES</option>
                                <option value="10">FERRAMENTAS</option>
                                <option value="11">INFORMÁTICA</option>
                                <option value="12">SERVIÇOS</option>
                                <option value="13">OUTROS</option>
                            </select>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_model" className="form-label">Modelo</label>
                            <span style={{ color: 'red' }}> *</span>
                            <input
                                id="product_categproduct_modelory"
                                type="text"
                                className="form-control"
                                placeholder="Digite o modelo do produto"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_color" className="form-label">Cor</label>
                            <span style={{ color: 'red' }}> *</span>
                            <input
                                id="product_color"
                                type="text"
                                className="form-control"
                                placeholder="Digite a cor do produto"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_desc" className="form-label">Descrição</label>
                            <span style={{ color: 'red' }}> *</span>
                            <textarea
                                id="product_desc"
                                className="form-control"
                                placeholder="Digite a descrição do produto"
                                rows="5"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_tech_desc" className="form-label">Descrição Técnica</label>
                            <textarea
                                id="product_tech_desc"
                                className="form-control"
                                placeholder="Digite a descrição técnica do produto"
                                rows="8"
                                value={techDesc}
                                onChange={(e) => setTechDesc(e.target.value)}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_price" className="form-label" style={{ margin: '0 10px 0 0' }}>Preço:</label>
                            <span style={{ color: 'red' }}> * </span>
                            <span>R$</span>
                            <input
                                id="product_price"
                                type="number"
                                placeholder="0"
                                className="from-control form-control-md mx-1"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                onClick={(e) => e.target.select()}
                                required
                            />
                            <input className="from-control form-control-md" style={{ width: '4%' }} type="text" value=",00" readOnly />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_images" className="form-label">Imagens</label>
                            <input
                                id="product_images"
                                type="file"
                                accept="image/*"
                                className="form-control"
                                multiple
                                onChange={handleImages}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <input className="btn btn-primary" type="submit" value="Anunciar" />
                        </div>
                    </div>
                </div>
            </form> 

        </>
    );
};

export default PublishPage;