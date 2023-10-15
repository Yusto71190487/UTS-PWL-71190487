import { Pagination } from "react-bootstrap";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const PaginationCounter = () => {
    return (
      <div className="myPagination">
      <Pagination>{items}</Pagination>
      <br />
    </div>
     
    )
}

export default PaginationCounter;