import React from 'react';

import {
    Map,
    TileLayer
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import{
    Link
} from 'react-router-dom';

import {  
    FiPlus
} from "react-icons/fi";

import mapMarkerImg from '../images/map_marker.svg';

import '../styles/pages/orphanages-map.css'

const OrphanagesMap = () => {

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Vitória</strong>
                    <span>Espírito Santo</span>
                </footer>
            </aside>

            <Map 
                center={[-20.2821776,-40.3557441]}
                zoom={15}
                style={{
                    width: '100%', 
                    height:'100%'
                }}
            > 
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
};

export default OrphanagesMap;