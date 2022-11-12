import { Dialog, Button} from "@mui/material";
import { Typography } from "antd";
import MDBox from "components/MDBox";


const MDModalDialog = (
    {
        // Props:
        open,
        handleCloseDialog,
        confirmDisable,
        handleSubmit,
        children
    }
    ) => {
   
    return (
        <Dialog 
            open={open} 
            sx={{
                textAlign:'center',
            }}
            >
                {children}
                <MDBox
                    mt={3}
                    sx={{display:'flex',justifyContent:'center',alignItem:'center'}}
                >
                    <Button 
                        onClick={handleSubmit}
                        variant="contained"
                        disabled={confirmDisable}
                        sx={{mr:'10px',color:'#000'}}
                    >
                        <Typography sx={{color:'#000'}}>
                            Submit
                        </Typography>
                    </Button>
                    <Button 
                        onClick={handleCloseDialog}
                        variant="contained"
                        sx={{color:'#000'}}
                    >
                        <Typography sx={{color:'#000'}}> 
                            Cancel
                        </Typography>
                    </Button>
                </MDBox>
            
        </Dialog>
      );
}
 
export default MDModalDialog;