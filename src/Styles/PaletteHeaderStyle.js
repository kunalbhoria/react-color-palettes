import sizeHelper from "./sizeHelper";
export default {
  paletteHeader: {
    height: '7%',
  },
  paletteNav: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    backgroundColor: '#eceff1',
    height: '100%',
    padding: '0px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      color: 'black',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '20px',
      fontWeight: '500',
      letterSpacing: '0.5px',
      [sizeHelper.down('sm')]:{
        fontSize:'13px',
        fontWeight: '600',
    }
    }
  },
  level: {
    backgroundColor: 'transparent',
    fontSize: '18px',
    fontWeight: '400',
    [sizeHelper.down('sm')]:{
      fontSize:'14px',
  }
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '&  .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-handle , .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px',
    }
  },

  formatSelector: {
    marginLeft: 'auto',
    marginRight: '20px',
    fontSize:'16px',
    [sizeHelper.down('sm')]:{
      fontSize:'12px',
      marginRight: '10px',
  }
  }
};