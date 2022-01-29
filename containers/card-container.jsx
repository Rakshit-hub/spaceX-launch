


function CardContainer(props) {
    const { data } = props
    console.log("datawww", data)
    return (
        <>
            <div className="cardContainer">
                <div className="row align-items-center">
                    {data?.map((data, index) => (
                        <div className="col-xl-3 col-md-6 col-sm-12 mb-3" key={index}>
                            <div className="card">
                                <img className="card-img-top cardImage" src={data?.links?.mission_patch} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title text-truncate" title={data?.mission_name}>{data.mission_name}#{index + 1}</h4>
                                    <div className="form-row align-items-center">
                                        <div className="col-6">
                                            <h6 className="font-weight-bold">Mission Id:</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="text-center card-title">{data?.mission_id?.length > 0 ? data?.mission_id : "No Data"}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="font-weight-bold">Launch year:</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="text-center card-title">{data?.launch_year ? data?.launch_year : "No Data"}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="font-weight-bold">Sucessful Launch:</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="text-center card-title">{data.launch_success.toString()}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="font-weight-bold">Sucessful Landing:</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="text-center card-title">{data.launch_success.toString()}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <style jsx>{`
            .cardImage{
                width: 80%;
                object-fit: contain;
                background-color: #f2f2f2;
                margin:1.25rem;
            }
            .card-title{
                color: #494c88;
            }
            .card{
                padding:1.25 rem !important;
            }
            `}</style>
        </>
    );
}

export default CardContainer;