import ReactLoading from "react-loading";
const Loading = () => {
    return (
        <div className="container my-5">
        <div className="row">
            <div className="col text-center">
            <div className="spinner-grow text-warning" role="status">
                <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center">
                    <ReactLoading
                    type="spokes"
                    color="rgb(33, 53, 85, 1)"
                    height={400}
                    width={250}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Loading;