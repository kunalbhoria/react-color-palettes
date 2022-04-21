import sizeHelper from "./sizeHelper"
export default {
    appBar: {
      display: 'flex',
      flexDirection: 'row !important',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttons: {
      padding: '0 1rem',
      display: 'flex',
  
      '& a': {
        textDecoration: 'none'
      },
      [sizeHelper.down('sm')]:{
        padding:'0 0px',
      }
    },
    btn: {
      margin: '0 1rem !important',
      [sizeHelper.down('sm')]:{
        margin:'0 5px !important',
        fontSize:'12px !important',
        padding:'7px  !important'
        }
    }
  }