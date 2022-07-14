import {Table,TableBody,TableDataCell,TableRow, TableHeadCell, TableHeader} from '@parkmobile/ui/dist/components'
import  React, {useState} from 'react'
// import Collapsible from 'react-collapsible';
import Collapsible from './components/Collapsible';


function App() {


  const [open, setOpen]= useState(false)


  return (
    <div className="App">
    <Table >
      <TableHeader height="55px">
        <TableRow>
          <TableHeadCell>
            Name
          </TableHeadCell>
          <TableHeadCell>
            Status
          </TableHeadCell>
          <TableHeadCell>
          City
          </TableHeadCell>
          <TableHeadCell>
          State
          </TableHeadCell>
          <TableHeadCell>
          Country
          </TableHeadCell>
          <TableHeadCell>
          Account Manager
          </TableHeadCell>
        </TableRow>
      </TableHeader>



  <TableBody>
    <TableRow>
      <TableDataCell >
      <p style={{color: "#0E24C4", fontWeight: "bold"}}> 1101 New York </p>
      </TableDataCell>
      <TableDataCell>
      Opened
      </TableDataCell>
      <TableDataCell>
      Washington
      </TableDataCell>
      <TableDataCell>
      DC
      </TableDataCell>
      <TableDataCell>
      US
      </TableDataCell>
      <TableDataCell>
      Chris Corso
      </TableDataCell>
      <TableDataCell>
        <h4 style={{color: "#0E24C4", cursor: "pointer"}} onClick={()=> setOpen(!open)} >Preview Lots ↓</h4>
      </TableDataCell>
    </TableRow>
  </TableBody>
</Table>

<Collapsible open={open}>

<Table  >
  <TableRow>
  <TableDataCell>
  <h4>Lot Name</h4>
    </TableDataCell>
    <TableDataCell>
    <h4>Facility Name</h4>
    </TableDataCell>
    <TableDataCell>
    <h4> ID</h4>
    </TableDataCell>
    <TableDataCell>
    <h4>  Status</h4>
    </TableDataCell>
    <TableDataCell>
    <h4>  Max Inventory</h4>
    </TableDataCell>
    </TableRow>
    <TableRow>
    <TableDataCell>
    S6 Hereford
    </TableDataCell>
    <TableDataCell>
    University of Virginia Microsite
    </TableDataCell>
    <TableDataCell>
    13608
    </TableDataCell>
    <TableDataCell>
    Opened
    </TableDataCell>
    <TableDataCell>
    68
    </TableDataCell>
    </TableRow>
</Table>
</Collapsible>

    </div>
  );
}

export default App;
