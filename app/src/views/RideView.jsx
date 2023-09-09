import { useEffect } from "react";
import BackButton from "../components/BackButton";
import MapDirections from "../components/ride/MapDirections";
import SectionBottom from "../components/ride/SectionBottom";


export default function RideView() {

    return (
        <>
            <div className="flex flex-column items-center" id="container-ride">
                <BackButton />

                <MapDirections />
            </div>

            <SectionBottom />
        </>
    )
}