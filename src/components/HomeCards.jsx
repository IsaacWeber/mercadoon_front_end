import Card from './Card';

const HomeCards = () => {
    const colClass = "col-sm-3";
    return (
        <>
            <p className="h3 my-3 text-center">Produtos Recentes</p>
            <div className="container my-4 text-center">
                <div className="row g-4 justify-content-center">
                    <div className={ colClass }>
                        <Card
                            src="https://picsum.photos/300/200"
                            alt="imagem.png"
                            title="-- Nome do Produto --"
                            text="-- Descrição do produto --"
                        />
                    </div>
                    <div className={ colClass }>
                        
                        <Card
                            src="https://picsum.photos/300/200"
                            alt="imagem.png"
                            title="-- Nome do Produto --"
                            text="-- Descrição do produto --"
                        />
                    </div>
                    <div className={ colClass }>
                        
                        <Card
                            src="https://picsum.photos/300/200  "
                            alt="imagem.png"
                            title="-- Nome do Produto --"
                            text="-- Descrição do produto --"
                        />
                    </div>
                    <div className={ colClass }>
                        
                        <Card
                            src="https://picsum.photos/300/200  "
                            alt="imagem.png"
                            title="-- Nome do Produto --"
                            text="-- Descrição do produto --"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCards;