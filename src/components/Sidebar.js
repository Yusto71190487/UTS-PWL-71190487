import { Col, Button } from "react-bootstrap";
const Sidebar = () => {
    return (
      <div className="mySidebar">
      <Col md={2} mt="2">
      <h6 className="text-white">
      <Button variant="outline-light mb-4">Home</Button>
      <tr/>
      <Button variant="outline-light mb-4">Tsirt</Button>
      <tr/>
      <Button variant="outline-light mb-4">Levist</Button>
        
      </h6>
      <hr />
    </Col>
    </div>
    )
}

export default Sidebar;