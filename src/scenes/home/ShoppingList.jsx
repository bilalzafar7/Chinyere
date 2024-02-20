import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Casuals = items.filter(
    (item) => item.attributes.category === "Casuals"
  );
  const Prints = items.filter(
    (item) => item.attributes.category === "Prints"
  );
  const Formals = items.filter(
    (item) => item.attributes.category === "Formals"
  );
  

  return (
    <Box width="100%" marginTop='80px' >
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab style={{color:'red', fontWeight:'bold',fontSize:'13px',fontFamily:'Open Sans,sans-serif'}} label="Home" value="all" />
        <Tab style={{fontSize:'12px',fontFamily:'Open Sans,sans-serif'}} label="Casuals" value="Casuals" />
        <Tab style={{fontSize:'12px',fontFamily:'Open Sans,sans-serif'}} label="Formals" value="Formals" />
        <Tab style={{fontSize:'12px',fontFamily:'Open Sans,sans-serif'}} label="Prints" value="Prints" />
        <Tab style={{fontSize:'12px',fontFamily:'Open Sans,sans-serif'}} label="Accessories" value="Accessories" />
        <Tab style={{fontSize:'12px',fontFamily:'Open Sans,sans-serif'}} label="Velvet Delux" value="Velvet" />
        <Tab style={{fontSize:'12px',fontFamily:'Open Sans,sans-serif'}} label="Luxury Pret" value="Luxury" />


      </Tabs>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        marginBottom="25px"
        columnGap="5px"
      >
        {value === "Prints" &&
          Prints.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Formals" &&
          Formals.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Casuals" &&
          Casuals.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Accessories" &&
          Casuals.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Velvet" &&
          Formals.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Luxury" &&
          Prints.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
    
  );
};

export default ShoppingList;
