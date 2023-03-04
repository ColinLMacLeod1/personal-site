function Division({ align = "left", background = "" }) {
    const backgroundStyle = background ? { backgroundImage: `url(${background})`} : { backgroundColor: "red" }
    return (
        <div className="h-screen bg-cover bg-center" style={{ width: "50vw", ...backgroundStyle }}>
        </div>
    );
}

export default Division;
