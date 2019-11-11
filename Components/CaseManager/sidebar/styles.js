const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  newChatBtn: {
    borderRadius: '0px'
  },
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '5px'
  },
  newNoteBtn: {
    width: '100%',
    height: '35px',
    borderBottom: '1px solid black',
    borderRadius: '0px',
    backgroundColor: '#29487d',
    color: 'white',
    '&:hover': {
      backgroundColor: '#88a2ce'
    }
  },
  sidebarContainer: {
    marginTop: '0px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',

  },
  newNoteInput: {
    width: '100%',
    margin: '0px',
    height: '35px',
    outline: 'none',
    border: 'none',
    paddingLeft: '5px',
    '&:focus': {
      outline: '2px solid rgba(81, 203, 238, 1)'
    }
  },
  itemText:{
    padding: '5px',
   
  },
   textSection: {
    display: 'flex',
    flex: '1',
    color: '#1506A5'
  },
  newNoteSubmitBtn: {
    width: '100%',
    backgroundColor: '#1b1091',
    borderRadius: '0px',
    color: 'white'
  },
  card:{
    marginBottom: '12px'

  },
  button: {
    margin: theme.spacing(1),
  }
});

export default styles;