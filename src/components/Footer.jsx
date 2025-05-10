const Footer = ({ fixed = false }) => {
    const year = new Date().getFullYear();
    const before = "position-relative top-100";
    return (
        <>
            <div className="container-fluid bg-black text-white position-relative mt-5 mb-0 mx-0">
                <div className='d-flex flex-row justify-content-center p-2'>
                    <div>Mercado ON | { year }</div>
                </div>
            </div>
        </>
    );
}

export default Footer;