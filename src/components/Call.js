import { useMemo } from "react";
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function Call(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });
    if(!isLoaded) return <div>Loading...</div>
    return <Map />
}

function Map(){
    const center=useMemo(()=>({lat:44,lng:-84}),[])

return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
    </GoogleMap>
);
}
export default Call;