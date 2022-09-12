import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "./Profile.module.css"; 

export default function Profile(){
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBnAqRLJxebyaskgFz1L29jzrndnxEru6k"})

    if(!isLoaded) return <div>Loading ...</div>
    return<Map />
}

function Map(){
    return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName={styles["map-container"]}>
    <MarkerF position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
}