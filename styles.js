import { StyleSheet,Dimensions } from 'react-native';
//import Dimensions from 'Dimensions';



const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
     // flex:0.3,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: 'white',
    width:DEVICE_WIDTH/2,
  top:DEVICE_WIDTH/8
    
  },
  documentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
 
  textInputStyle: {
    width: 10,
    color:'#072018',
    fontSize:10,
    
  },
  viewHeight: {
    height: DEVICE_HEIGHT / 0.5
  }
});

export default styles;
