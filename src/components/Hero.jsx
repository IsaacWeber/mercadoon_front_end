const Hero = () => {
    
    const title = 'Bem-Vindo ao Mercado ON';
    const subtitle = 'Faça compras online de onde quiser, quando quiser';
    return (
        <>
            <div className="container-fluid text-center text-bg-dark py-5">
                <div className="row">
                    <div className="col">
                        <span className="fs-1">{ title }</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="fs-6">{ subtitle }</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;