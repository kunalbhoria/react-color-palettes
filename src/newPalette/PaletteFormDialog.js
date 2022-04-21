import  React ,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';


function PaletteFormDialog({handleSaveNewPalette,palettes}) {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState('FORM');
  const [emoji, setEmoji] = useState('✨');
  const [paletteName,setPaletteName] =useState('');

  const setStageToEmoji=()=>{
    setStage('EMOJI')
  }
  const setStageToForm=()=>{
    setStage('FORM')
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePaletteNameChange = (e) => {
    setPaletteName(e.target.value);
  };
  const handleChangeEmoji=(newEmoji)=>{
    // console.log(newEmoji);
    setEmoji(newEmoji.native);
  }

  const saveNewPalette = ()=>{
    handleSaveNewPalette({paletteName,emoji});
    setStage('')
  }

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
      return palettes.every((palette) => palette.paletteName.toLowerCase() !== paletteName.toLowerCase()
      )
    });
  })

  return (
    <div>
      <Button variant="contained"  color='secondary' onClick={handleClickOpen}>
        Save
      </Button>
      <Dialog open={open && stage == 'EMOJI'} onClose={handleClose}>
      <DialogTitle>Select emoji for your color palette</DialogTitle>
      <Picker  onSelect={handleChangeEmoji} title={emoji} emoji='' />
      <DialogActions>
        {/* <span style={{margin:'0 20px'}}>{emoji}</span> */}
      <Button 
           variant="outlined" 
           color="secondary"
           onClick={setStageToForm}
           >Go Back</Button>
          <Button 
           variant="contained" 
           color="primary"
           onClick={saveNewPalette}
           >Save</Button> 
        </DialogActions>
      </Dialog>
      <Dialog open={open && stage == 'FORM'} onClose={handleClose}>
          <ValidatorForm onSubmit={setStageToEmoji}  >
        <DialogTitle>Add your palette name</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add a name to your beautifull color palette, make sure it is unique. 
          </DialogContentText>
          <TextValidator
                      onChange={handlePaletteNameChange}
                      value={paletteName}
                      fullWidth
                      variant='filled'
                      margin='normal'
                      autoFocus
                      validators={['required','isPaletteNameUnique']}
                      errorMessages={['Pallete Name is required','Name already used']}
                      />
                  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button 
           variant="contained" 
           color="primary"
           type='submit'
           >Save Palette</Button> 
        </DialogActions>
           </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default PaletteFormDialog;