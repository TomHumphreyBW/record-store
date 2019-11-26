import React from 'react';
import './Record.css';
import PropTypes from 'prop-types';
import Details from './Details.js';
import {Card, CardImage, CardCaption, List, ListItem, CardContent} from '@brandwatch/axiom-components';

 const Record = (props) => {
     return (
        <Card className="Card" onClick={function(){}} shadow>
            <CardImage className="CardImage" src={`/assets/coverArt/${props.coverArt}`}>
                <CardCaption textStrong>
                    <List style="inline">
                        <ListItem>
                            {props.albumTitle}
                        </ListItem>
                    </List>
                </CardCaption>
            </CardImage>
            <CardContent size="large">
                <List style="none">
                    <ListItem>
                        {props.artist}
                    </ListItem>
                    <ListItem>
                        {props.year}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
     )
 }
    //  return <div className="Record">
    //      <CoverArt image={props.coverArt}/>
    //      <Details 
    //         artist={props.artist}
    //         albumTitle={props.albumTitle}
    //         year={props.year}
    //         genre={props.genre}
    //      />
    //  </div>

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