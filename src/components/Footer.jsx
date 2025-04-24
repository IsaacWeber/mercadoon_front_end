const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="container-fluid bg-black text-white position-relative top-100">
                <div className='d-flex flex-row justify-content-center p-2'>
                    <div>Mercado ON | { year }</div>
                </div>
            </div>
        </>
    );
}

export default Footer;