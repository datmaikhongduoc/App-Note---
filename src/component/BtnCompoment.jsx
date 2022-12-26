import React, { Component } from 'react';
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import StopIcon from "@material-ui/icons/Stop";

function BtnCompoment (props)  {
    return(
        <div>
            {(props.status ==! 0)? 
                 <button className="startwatch-btn stopwatch-btn-red"
                onClick={props.stop}><StopIcon/></button>:<button className="stopwatch-btn stopwatch-btn-gre"
                onClick={props.start}><PlayCircleFilledWhiteIcon/></button>
            }

            {/* {(props.status === 1)? 
                <div>
                 : ""
            } */}
        </div>
    );
} 
export default BtnCompoment;