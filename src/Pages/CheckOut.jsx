import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const CheckOut=()=>{
    const   navigate = useNavigate();
    const CartData = useSelector(state=>state.mycart.cart);  
    let products;
    let totalAmount=0;
     const ans=CartData.map((key)=>{
             products+=",  "+key.name;
             totalAmount+=key.price*key.qnty;
     })

     const handleSubmit=(e)=>{
        e.preventDefault();
       navigate("/paydone");
     }

    return(
        <>
           <h1> CheckOut</h1>
           <h6 align="center"> Products : {products} </h6>
           <h3 align="center"> Net Payble Amount : {totalAmount} </h3>
            <Form style={{margin:"auto", width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Address</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact No.</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin Code</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default CheckOut;