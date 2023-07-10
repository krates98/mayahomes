import React, { useEffect, useState } from "react";

function Delivered() {
  const [totalProjectsDone, setTotalProjectsDone] = useState(0);
  const [totalProjectsUnderConstruction, setTotalProjectsUnderConstruction] =
    useState(0);
  const [happyClients, setHappyClients] = useState(0);

  useEffect(() => {
    const incrementValues = setInterval(() => {
      setTotalProjectsDone((prevValue) =>
        prevValue < 20 ? prevValue + 1 : prevValue
      );
      setTotalProjectsUnderConstruction((prevValue) =>
        prevValue < 10 ? prevValue + 1 : prevValue
      );
      setHappyClients((prevValue) =>
        prevValue < 300 ? prevValue + 1 : prevValue
      );
    }, 100);

    return () => clearInterval(incrementValues);
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Total Projects Done</h5>
              <p className="card-text display-4">{totalProjectsDone}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Total Projects Under Construction</h5>
              <p className="card-text display-4">
                {totalProjectsUnderConstruction}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card bg-info text-white mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Happy Clients</h5>
              <p className="card-text display-4">{happyClients}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivered;
