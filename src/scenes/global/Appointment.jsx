import { Box, Button, Typography } from "@mui/material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Appointment = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        position="fixed"
        backgroundColor="white"
        width="max(100%)"
        height="100%"
      >
        <Typography marginLeft="27px" marginTop="3%" variant="h5">
          Booking An Appointment
        </Typography>

        <Box
          padding="30px"
          display="grid"
          gap="35px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
          <TextField
            fullWidth
            type="text"
            label="First Name"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Middle Name"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Last Name"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Address"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Contact Number"
            sx={{ gridColumn: "span 2" }}
          />
        </Box>
        <Box
          m="20px 0"
          position="fixed"
          backgroundColor="white"
          width="max(400px, 30%)"
          height="100%"
        >
          <Button
            sx={{
              backgroundColor: shades.primary[400],
              color: "white",
              fontSize: "15px",
              borderRadius: 0,
              minWidth: "100%",
              padding: "13px",
              m: "20px 0",
              marginLeft: "124%",
            }}
            onClick={() => navigate("/")}
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
