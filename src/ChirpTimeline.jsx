import React from 'react';

const ChirpTimeline = (props) => {
    return(
       <div className="row mt-2">
           {props.chirps.map(chirp => {
               return(
                   <div className="card m-1 p-2 col-md-12">
                       <h1>{chirp.chirp}</h1>
                   </div>
               )
           })}
       </div>
    );
};

export default ChirpTimeline;
