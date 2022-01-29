import { useContext } from "react";
import { appData } from "../pages";


function FilterContainer(props) {
    const value = useContext(appData)
    const { landArray, launchArray, buttonArray } = value
    const { handleYearClick, handleLaunchClick, handleSucessClick, id } = props
    return (
        <>
            <div className="filterpanel">
                <p className="p-2 font-weight-bold">Filters</p>
                {/* Launch Year Parameters */}
                <h4 className="text-center title mb-3">Launch Year</h4>
                <div className="row align-items-center justify-content-around">
                    {buttonArray.map((data, index) => (
                        <div className="col-6 py-2 text-center" key={data.id}>
                            <button className={`btn year-btn`} onClick={() => handleYearClick(data.year, data.id)}>
                                {data.year}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Sucessful Launch Parameters */}
                <h4 className="text-center title mb-3">Sucessful Launch</h4>
                <div className="row align-items-center justify-content-around">
                    {launchArray.map((launch) => (
                        <div className="col-6 py-2 text-center" key={launch.id}>
                            <button className={`btn year-btn`} onClick={() => handleLaunchClick(launch?.launch)}>
                                {launch?.launch.toString()}
                            </button>
                        </div>
                    ))}
                </div>
                {/* Sucessful Landing parameters */}
                <h4 className="text-center title mb-3">Sucessful Landing</h4>
                <div className="row align-items-center justify-content-around">
                    {landArray.map((land) => (
                        <div className="col-6 py-2 text-center" key={land.id}>
                            <button className="btn year-btn" onClick={() => handleSucessClick(land?.land)}>
                                {land?.land.toString()}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>
                {`
                .filterpanel{
                    display: flex;
                    background-color: #fff;
                    width: 100%;
                    flex-direction: column;
                    border-radius: 2%;
                    padding-bottom: 30px;
                }
                .title {
                    text-decoration: underline; 
                    text-decoration-color: rgba(0,0,0,.322);
                }
                .year-btn{
                    background-color: #c5df9d;
                    color: #000;
                    border-radius: 4px;
                    margin-bottom: 10%;
                }
                `}
            </style>
        </>
    );
}

export default FilterContainer;