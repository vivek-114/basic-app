import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {Container, Button , Alert} from 'react-bootstrap';  
// class Alert extends React.Component {

//   alertClass (type) {
//     let classes = {
//       error: 'alert-danger',
//       alert: 'alert-warning',
//       notice: 'alert-info',
//       success: 'alert-success'
//     };
//     return classes[type] || classes.success;
//   }

//   render() {
//     const message = this.props.message;
//     const alertClassName = `alert ${ this.alertClass(message.type) } fade in`;
    
//     return(
//       <div className={ alertClassName }>
//         <button className='close'
//           data-dismiss='alert'> &times; </button>
//         { message.text }
//       </div>
//     );
//   }
// }


function FlashAlert(props){
    // alertClass (type) {
    //     let classes = {
    //       error: 'alert-danger',
    //       alert: 'alert-warning',
    //       notice: 'alert-info',
    //       success: 'alert-success'
    //     };
    //     return classes[type] || classes.success;
    // }
  // const alertClassName = 'span'
  // const message = ''
  // if (this != undefined){
  const message = props.message;
    // const alertClassName = `alert ${ this.alertClass(message.type) } fade in`;
  const alertClassName = 'alert alert-success fade in'
  // }
  
  return(
    <div className={ alertClassName }>
      { message }
      <button className='close'
        data-dismiss='alert'> &times; </button>
      {/* <Container className={ alertClassName }>  
        <Alert variant="success" dismissible >  
        <Alert.Heading>Ooops! an error occured!</Alert.Heading>  
        <p>
          Update your setting and run again</p>  
        </Alert>
      </Container> */}
    </div>
  );
}

export default FlashAlert;