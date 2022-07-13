import {Table,TableBody,TableDataCell,TableRow, TableHeadCell, TableHeader} from '@parkmobile/ui/dist/components'

function App() {
  return (
    
    <div className="App">
<Table label="A Table Title">
  <TableHeader>
    <TableRow>
      <TableHeadCell>
        Age
      </TableHeadCell>
      <TableHeadCell>
        First Name
      </TableHeadCell>
      <TableHeadCell>
        Last Name
      </TableHeadCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableDataCell>
        20
      </TableDataCell>
      <TableDataCell>
        Billy
      </TableDataCell>
      <TableDataCell>
        Joe
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        25
      </TableDataCell>
      <TableDataCell>
        Silly
      </TableDataCell>
      <TableDataCell>
        Boe
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        40
      </TableDataCell>
      <TableDataCell>
        Dlly
      </TableDataCell>
      <TableDataCell>
        Dough
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        75
      </TableDataCell>
      <TableDataCell>
        Milly
      </TableDataCell>
      <TableDataCell>
        Moe
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        4
      </TableDataCell>
      <TableDataCell>
        Yilly
      </TableDataCell>
      <TableDataCell>
        Foe
      </TableDataCell>
    </TableRow>
  </TableBody>
</Table>
    </div>
  );
}

export default App;
