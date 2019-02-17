import React from "react";
import axios from "axios";

import CanvasJSReact from "./../../CanvasJS/canvasjs.react.js";
//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


class SteamChart extends React.Component {	
    constructor(){
        super();
        this.state = {
            data: [],
        };
    }
    getSteamData(){
        axios.get("/steam",{

        })
            .then((response)=>{
                let games = [];
                for(let [index, game] of response.data.response.games.entries()){
                    games.push({
                        indexLabel: game.name,
                        //img: game.img_icon_url,
                        x: index,
                        y: Math.round(game.playtime_2weeks / 60, 2),
                    });
                }
                this.setState({data: games});
            })
            .catch((err)=>console.log(err));//eslint-disable-line
    }
    componentWillMount(){
        this.setState({data: this.getSteamData()});
    }
    render() {
        if(this.state.data){
            const options = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", //"light1", "dark1", "dark2"
                title: {
                    text: "Steam Activity"
                },
                axisX: {
                    labelFontColor: "white",
                },
                data: [{
                    type: "column", //change type to bar, line, area, pie, etc
                    //indexLabel: "{y}", //Shows y value on all Data Points
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: this.state.data,
                }],
            };
            
            return (
                <div>
                    <CanvasJSChart options = {options} 
                        /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
            );
        }
        else{
            return null;
        }
    }
}

class SpotifyChart extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
        };
    }
    getSpotifyData(){
        axios.get("/spotify",{

        })
            .then((response)=>{
                this.setState({data: response.data});
            })
            .catch((err)=>console.log(err));//eslint-disable-line
    }
    componentWillMount(){
        this.getSpotifyData();
    }
    render() {
        if(this.state.data[0]){
            return (
                <ol className="list-unstyled">
                    {this.state.data.slice(0, 10).map((track)=>{
                        return(
                            <li className="media my-1" key={track.name}>
                                <img height="60em" className="mr-3" src={track.img} alt="No Coverart"/>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1">{track.name}</h5>
                                    {track.artist}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            );
        }
        else{
            return null;
        }
    }	
}
 
export {
    SteamChart, 
    SpotifyChart,
};                              