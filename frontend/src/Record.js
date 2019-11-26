import React from 'react';
import './Record.css';
import PropTypes from 'prop-types';
import Details from './Details.js';

 const Record = (props) => {
     return <div className="Record">
         <CoverArt image={props.coverArt}/>
         <Details 
            artist={props.artist}
            albumTitle={props.albumTitle}
            year={props.year}
            genre={props.genre}
         />
     </div>
 }

 Record.propTypes = {
     coverArt: PropTypes.string.isRequired
 }

 Record.defaultProps = {
     coverArt: "default.jpeg"
 }

 const CoverArt = ({image}) => {
    return <div className="CoverArt">
        <img src={`/assets/coverArt/${image}`} alt='coverArt' className="CoverArt__image center" /> 
    </div>
}

 export default Record;