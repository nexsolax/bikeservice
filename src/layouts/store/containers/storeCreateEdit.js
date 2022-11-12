import {
  FormControl,
  TextField,
  DialogTitle,
  DialogContentText,
  Autocomplete,
  Grid,
} from "@mui/material";

const StoreCreateEdit = ({ rowData, handleChange, wards }) => {
  return (
    <div>
      <DialogTitle>Create new store</DialogTitle>

      <DialogContentText>
        "To create store, please enter fully all of this content here. We will send updates
        occasionally."
      </DialogContentText>

      <FormControl fullWidth>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              onChange={(e) => handleChange("name", e.target.value)}
              fullWidth
              value={rowData.name}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Phone"
              variant="outlined"
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              fullWidth
              value={rowData.phoneNumber}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              onChange={(e) => handleChange("address", e.target.value)}
              fullWidth
              value={rowData.address}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              autoComplete
              loading
              autoSelect
              filterSelectedOptions
              options={wards}
              onChange={(e, value) => handleChange("wardId", value)}
              disableClearable={true}
              getOptionLabel={(option) => {
                return option.name;
              }}
              renderInput={(params) => (
                <TextField {...params} label="Ward" name="ward" variant="outlined" />
              )}
            />
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};

export default StoreCreateEdit;
