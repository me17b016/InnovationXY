import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', align : "center", minWidth: 80 },
  { id: 'email', label: 'Email', align : "center", minWidth: 90 },
  {
    id: 'sex',
    label: 'Sex',
    minWidth: 30,
    align : "center",
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'age',
    label: 'Age',
    minWidth: 30,
    align : "center",
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id : 'bloodgroup',
    label : "Blood Type",
    minWidth : 30,
    align : "center"
  },
  {
    id: 'phonenumber',
    label: 'Phone No.',
    minWidth: 50,
    align : "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: 'state',
    label : 'State',
    minWidth: 40
  }
];

function createData(name, email, sex, age, bloodgroup, phonenumber, state) {
  return { name, email, sex, age, bloodgroup, phonenumber, state };
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 540
  },
});

export default function TableWithPagination(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const data = props.data;
    //console.log("table data", data);
    let temRows = [];
    for (let i = 0; i < data.length; i++) {
      temRows.push(createData(data[i].name, data[i].email, data[i].sex, data[i].age, data[i].bloodgroup,
        data[i].phonenumber, data[i].state))
    }
    setRows(temRows);
  }, [props])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize : 14 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{fontSize : 13}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
