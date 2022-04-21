import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import MiniPalette from "./MiniPalette";
import { withStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import { red, blue } from "@mui/material/colors";
import styles from './Styles/PaletteListStyle';
import {  TransitionGroup } from 'react-transition-group'


function PaletteList({ classes, palettes, deletePalette, direction }) {

    // const  = props;

    const [deleteId, setDeleteId] = useState('');
    const [open, setOpen] = useState(false);
    const openDialog = (id) => {
        setOpen(true);
        setDeleteId(id);
    }
    const closeDialog = () => {
        setOpen(false);
        setDeleteId('');
    }
    const handleDeletePalette = () => {
        deletePalette(deleteId);
        closeDialog();
    }

    console.log(direction)
    const miniPalette = palettes.map(palette => (<MiniPalette key={palette.id} openDialog={openDialog}  {...palette} />));

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.navBar}>
                    <h1 className={classes.title}>React Palette</h1>
                    <Link className={classes.addPaletteLink} to={'/palette/new'} >add new palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {miniPalette}
                </TransitionGroup>
            </div>
            <Dialog open={open} onClose={closeDialog} >
                <DialogTitle>Delete this palette?</DialogTitle>
                <List sx={{ pt: 0 }}>
                    <ListItem button onClick={handleDeletePalette} >
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}
                            ><CheckIcon /></Avatar></ListItemAvatar>
                        <ListItemText primary='Delete' />
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar><Avatar style={{ backgroundColor: red[100], color: red[600] }}
                        ><CloseIcon /></Avatar></ListItemAvatar>
                        <ListItemText primary='Cancel' />
                    </ListItem>
                </List>
            </Dialog>
        </div>)
}

export default withStyles(styles)(PaletteList);