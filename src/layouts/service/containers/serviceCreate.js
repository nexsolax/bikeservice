import {
  FormControl,
  TextField,
  Button,
  DialogTitle,
  DialogContentText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ServiceCreate = ({rowData,handleChange,handleCloseDialog }) => {
  
  const [err, setErr] = useState(false);

  function handleCreate() {
    fetch(`https://nmrp3a0bjc.execute-api.us-east-1.amazonaws.com/Prod/api/Product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rowData),
    }).then((res) => {
      if (res !== 200) {
        setErr(true);
      } else {
        handleCloseDialog()
        //window.location.reload();
      }
    })
  }

  return (
    <div style={{width:'500px'}}>
      <DialogTitle>Create rowData</DialogTitle>

      {err ? (
        <Typography sx={{ color: "red", fontWeight: "bold" , textAlign:'center'}}>
          Fail to create new rowData
        </Typography>
      ) : (
        <DialogContentText>
          "To create rowData, please enter fully all of this content here. We will send updates
          occasionally."
        </DialogContentText>
      )}
      <FormControl fullWidth>
        <TextField
          name="name"
          label="Name"
          variant="standard"
          onChange={(e) => handleChange(e)}
          fullWidth
          value={rowData.name}
          required
        />
        <TextField
          name="price"
          label="Price"
          variant="standard"
          type="number"
          onChange={(e) => handleChange(e)}
          fullWidth
          value={rowData.price}
          required
        />
        <TextField
          name="quantity"
          label="Quantity"
          variant="standard"
          type="number"
          onChange={(e) => handleChange(e)}
          fullWidth
          value={rowData.quantity}
          required
        />
        <TextField
          name="manufacturerId"
          label="Manufacturer Id"
          variant="standard"
          type="number"
          onChange={(e) => handleChange(e)}
          fullWidth
          value={rowData.manufacturerId}
          required
        />
        <TextField
          name="categoryId"
          label="Category Id"
          variant="standard"
          type="number"
          onChange={(e) => handleChange(e)}
          fullWidth
          value={rowData.categoryId}
          required
        />
        <TextField
          name="storeId"
          label="Store Id"
          variant="standard"
          onChange={(e) => handleChange(e)}
          fullWidth
          value={rowData.storeId}
          required
        />
        <Button onClick={handleCreate}>Create new rowData</Button>
      </FormControl>
    </div>
  );
};

export default ServiceCreate;
