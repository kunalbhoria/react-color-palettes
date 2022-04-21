import React, { useState } from "react";
import ColorBox from "./ColorBox";
import PaletteHeader from "./PaletteHeader";
import PaletteFooter from "./PaletteFooter";
import SnackBar from "./SnackBar";

import { Link, useParams } from "react-router-dom";
import { selectPalette } from "./hooks/selectPalette";

import { withStyles } from "@mui/styles";
import styles from './Styles/PaletteStyle';

function SingleColorPalette({ palettes, classes }) {

    let params = useParams();
    const { name, id, emoji, colors } = selectPalette({ task: 'COLOR', ...params ,allPalette:palettes });

    const [colorFormat, setColorFormat] = useState('rgba');
    const [snackBar, setSnackBar] = useState({ open: false });

    const changeFormat = (e) => {
        setSnackBar({ open: true });
        setColorFormat(e.target.value);
    }

    const handleSnackBarClose = () => {
        setSnackBar({ open: false });
    }

    return (<div className={classes.palette}>
        <PaletteHeader
            colorFormat={colorFormat}
            changeFormat={changeFormat}
            showSlider={false}
        />
        <div className={classes.paletteColors}>
            {colors.map(color => <ColorBox
                key={color.name}
                color={color[colorFormat]}
                name={color.name}
                id={color.name}
                showMore={false}
            />)}

            <div className={classes.goBackBox}><Link to={`/palette/${id}`}><span
                className="go-backBtn">Go Back</span></Link></div>
        </div>

        <SnackBar
            snackBar={snackBar}
            handleSnackBarClose={handleSnackBarClose}
            colorFormat={colorFormat}
        />
        <PaletteFooter name={name} emoji={emoji} />
    </div>)
};


export default withStyles(styles)(SingleColorPalette);