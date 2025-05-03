import { useState } from "react";

const PublishPage = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState(-1);
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [desc, setDesc] = useState("");
    const [techDesc, setTechDesc] = useState("");
    const [price, setPrice] = useState(0.0);
    const [images, setImages] = useState([]);

    const username = "t@email.com";
    const password = "b@123";
    const idCliente = 6; // Client has to exist. Use current client id in session

    const submitForm = async () => {
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

        alert('success!')
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

                            <input
                                id="product_name"
                                type="text" className="form-control"
                                placeholder="Digite o nome do produto"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_brand" className="form-label">Marca</label>
                            <input
                                id="product_brand"
                                type="text"
                                className="form-control"
                                placeholder="Digite a marca do produto"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_category" className="form-label">Categoria</label>
                            <select
                                name=""
                                id="product_category"
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option defaultValue={-1}>Escolha a categoria do produto</option>
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
                            <input
                                id="product_categproduct_modelory"
                                type="text"
                                className="form-control"
                                placeholder="Digite o modelo do produto"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_color" className="form-label">Cor</label>
                            <input
                                id="product_color"
                                type="text"
                                className="form-control"
                                placeholder="Digite a cor do produto"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="product_desc" className="form-label">Descrição</label>
                            <textarea
                                id="product_desc"
                                className="form-control"
                                placeholder="Digite a descrição do produto"
                                rows="5"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
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
                            <label htmlFor="product_price" className="form-label">Preço</label>
                            <input
                                id="product_price"
                                type="text"
                                className="form-control"
                                placeholder="R$ 0,00"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
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