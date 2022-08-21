import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 150,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    type: 'mobile',
    width: 110,
    editable: true,
  },
  {
    field: 'emergencyNo',
    headerName: 'EmergencyNo',
    type: 'mobile',
    width: 110,
    editable: true,
  },
  {
    field: 'pincode',
    headerName: 'Pincode',
    type: 'mobile',
    width: 110,
    editable: true,
  },
  {
    field: 'govID',
    headerName: 'Govt ID',
    type: 'mobile',
    width: 110,
    editable: true,
  },

  {
    field: 'idType',
    headerName: 'Group',
    width: 150,
    editable: true,
  },

  {
    field: 'occupation',
    headerName: 'Occupation',
    width: 150,
    editable: true,
  },

  {
    field: 'relation',
    headerName: 'Relation',
    width: 150,
    editable: true,
  },

  {
    field: 'religion',
    headerName: 'Religion',
    width: 150,
    editable: true,
  },
  {
    field: 'sex',
    headerName: 'Sex',
    width: 150,
    editable: true,
  },

  {
    field: 'status',
    headerName: 'Married Status',
    width: 150,
    editable: true,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 150,
    editable: true,
  },
];



export default function UserData(props) {
  const row = []

    
    props.users &&
    props.users.forEach((item, index) => {
          row.push({id: index+1,
            address: item.address,
              age: item.age,
              city: item.city,
              email: item.email,
              emergencyNo: item.emergencyNo,
              govID: item.govID,
              group: item.group,
              guardianName: item.guardianName,
              idType: item.idType,
              mobile: item.mobile,
              name: item.name,
              status:item.status,
              occupation: item.occupation,
              pincode: item.pincode,
              relation: item.relation,
              religion: item.religion,
              sex: item.sex,
              state: item.state,}
    )
    });
    console.log(row)
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
