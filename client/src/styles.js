import { createTheme, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography: {
    fontFamily: 'Helvetica',
    color: 'rgba(0,183,255, 1)'
  },
  image: {
    marginLeft: '15px',
  },
  mainContainer: {
    justifyContent: 'space-between',
    alignItems:'stretch',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: 'column-reverse',
  }
  }
}));