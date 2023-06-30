let x = 180000;
let y = 648000;

$(document).ready(function ()
{
    govmap.createMap('map', 
        {
            token: '5a4b8472-b95b-4687-8179-0ccb621c7990',
            layers: ["GASSTATIONS","PARCEL_HOKS", "KSHTANN_ASSETS", "bus_stops", "PARCEL_ALL"],
            showXY: true,
            identifyOnClick: true,
            isEmbeddedToggle: false,
            background: "3",
            layersMode: 1,
            zoomButtons:false
        });
});


const input = document.querySelector("#input");

const storeJson = async ()=>{
    let query = input.value;
    console.log("Query::", query);
}

let dataDisplay = payload.filter((eventData)=>{
    if(query === ""){return eventData}
    else if (eventData.name.toLowerCase().include(query.toLowerCase())){return eventData}
}).map((object) =>{
    const {name,conrdinates} = object;
})









function showExample(){
    // govmap.showMeasure();  
    // govmap.draw(drawType); 
    // govmap.draw(govmap.drawType.Circle).progress(function (response)  
    // {  
    
    // });   
    // govmap.zoomToXY(
    //     {x: x ,y:y ,level:5,marker: true}
    //     );  
    // govmap.geocode({keyword: 'הרוקמים', type: govmap.geocodeType.AccuracyOnly}
    // ).then(function(response){
    //     console.log(response)
    // });  
    var params = {
        LayerName: 'bus_stops',
        Point: {x: x, y: y},
        Radius:30
    };
   govmap.getLayerData(params).then(function(response){
       console.log(response);
   });  
    }

    function zoomToConrdinate(){
            govmap.zoomToXY(
        {x: x ,y:y ,level:5,marker: true}
        );  
    }
    function clearMarker(){
        govmap.clearMapMarker();  
    }