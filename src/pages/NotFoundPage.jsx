import notFoundImg from '../assets/404_not_found.png';

const NotFoundPage = () => {
    return (
        <>
            {loading ? <Spinner /> :
                <>
                    <div className="d-flex flex-column align-items-center">
                        <div className="fs-2">
                            <span>Ops ...</span>
                        </div>
                        <div className="fs-1">
                            <i className="bi bi-exclamation-triangle" style={{ color: '#EEAD2D' }}></i>
                            <span>Página não encontrada</span>
                        </div>
                        <div className="fs-3">Status: 404</div>
                        <div>
                            <img src={notFoundImg} alt="404_not_found.jpg" className="align-center" style={{ width: '50rem' }} />
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default NotFoundPage;