import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      hotelName: "Hotel Example 1",
      img: "https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg",
      customer: "John Smith",
      date: "1 March",
      price: 785,
      paymentMethod: "Credit Card",
      status: "Confirmed",
    },
    {
      id: 2235235,
      hotelName: "Hotel Example 2",
      img: "https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg",
      customer: "Michael Doe",
      date: "1 March",
      price: 900,
      paymentMethod: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      hotelName: "Hotel Example 3",
      img: "https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg",
      customer: "John Smith",
      date: "1 March",
      price: 35,
      paymentMethod: "Cash on Arrival",
      status: "Pending",
    },
    {
      id: 2357741,
      hotelName: "Hotel Example 4",
      img: "https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg",
      customer: "Jane Smith",
      date: "1 March",
      price: 920,
      paymentMethod: "Credit Card",
      status: "Confirmed",
    },
    {
      id: 2342355,
      hotelName: "Hotel Example 5",
      img: "https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg",
      customer: "Harold Carol",
      date: "1 March",
      price: 2000,
      paymentMethod: "Online Payment",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.hotelName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.paymentMethod}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
