import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageSlider, { Slide } from "react-auto-image-slider";

const myStyle2 = {
  width: "100%",
  height: "550px",
  objectFit: "cover",
  backgroundAttachment: "fixed",
};

const myStyle = {
  backgroundImage:
    "url('https://cdn.shopify.com/s/files/1/0510/7535/0693/files/1800x692-_Couture_1_2000x.jpg?v=1614770276')",
  width: "100%",
  height: "550px",
  marginTop: "30px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MainCarousel = () => {
  const navigate = useNavigate();

  return (
    <Box style={{ marginTop: "-25px" }}>
      <Box display="flex" >
        <ImageSlider effectDelay={500} autoPlayDelay={2500}>
          <Slide>
            <img
              style={myStyle2}
              alt="img2"
              src={require("../../assests/1.png")}
            />
          </Slide>
          <Slide>
            <img
              style={myStyle2}
              alt="img2"
              src={require("../../assests/2.png")}
            />
          </Slide>
          <Slide>
            <img
              style={myStyle2}
              alt="img1"
              src={require("../../assests/3.png")}
            />
          </Slide>
          <Slide>
            <img
              style={myStyle2}
              alt="img1"
              src={require("../../assests/4.png")}
            />
          </Slide>
          <Slide>
            <img
              style={myStyle2}
              alt="img1"
              src={require("../../assests/5.png")}
            />
          </Slide>
        </ImageSlider>
      </Box>

      <Box display="flex">
        <Box>
          <img
            style={{ width: "97%", margin: "5px", marginTop: "-70px" }}
            src="//cdn.shopify.com/s/files/1/0510/7535/0693/files/563x789-_Formal_0f9db8de-46ed-43a0-8a29-007ccfd01560_600x.png?v=1663574518"
            alt="example"
          ></img>
        </Box>

        <Box>
          <img
            style={{ width: "97%", margin: "5px", marginTop: "-70px" }}
            src="//cdn.shopify.com/s/files/1/0510/7535/0693/files/563x789-_Casual_19b66cf6-cb51-4109-9fcd-172bc1f72565_600x.png?v=1663574535"
            alt="example"
          ></img>
        </Box>
        <Box>
          <img
            style={{ width: "97%", margin: "5px", marginTop: "-70px" }}
            src="//cdn.shopify.com/s/files/1/0510/7535/0693/files/563x789-_Prints_a7c35ecb-7c88-449c-9ab9-d630c2e40c99_600x.png?v=1663574551"
            alt="example"
          ></img>
        </Box>
      </Box>
      <Box style={myStyle}>
        <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
          <button
            onClick={() => {
              navigate("/appointment");
            }}
            style={{
              border: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginLeft: "42%",
              padding: "15px",
              fontSize: "12px",
              fontFamily: "Open Sans,sans-serif",
              fontWeight: "bold",
              marginTop: "20%",
              color: "white",
              background: "black",
            }}
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
      </Box>
      <Box style={{ marginTop: "30px" }}>
        <video width="100%" loop muted autoPlay>
          <source
            src={require("../../assests/Chinyere.mp4")}
            type="video/mp4"
          />
        </video>
      </Box>
    </Box>
  );
};

export default MainCarousel;
