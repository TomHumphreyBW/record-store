import React from 'react';
import './Record.css';
import PropTypes from 'prop-types';
import { Card, CardImage, CardCaption, List, ListItem, CardContent } from '@brandwatch/axiom-components';
import { useHistory } from "react-router-dom";

const Record = (props) => {

    let history = useHistory();

    function handleClick() {
        history.push(`/records/${props.id}`);
    }
    return (
        <Card className="Card" onClick={handleClick} shadow>
            <CardImage className="CardImage" src={`/assets/coverArt/${props.coverArt}`}>
                <CardCaption>
                    <List style="none" align="center">
                        <ListItem>
                            {props.albumTitle}
                        </ListItem>
                    </List>
                </CardCaption>
            </CardImage>
            <CardContent size="large" className="RecordCardContent">
                <List style="none" align="center">
                    <ListItem textSize="headtitle" textStrong className="ArtistItem">
                        {props.artist}
                    </ListItem>
                    <ListItem textSize="body">
                        {props.year}
                    </ListItem>
                    <ListItem textSize="label">
                        {props.genre}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

Record.propTypes = {
    coverArt: PropTypes.string.isRequired
}

Record.defaultProps = {
    coverArt: "default.jpeg"
}

export default Record;