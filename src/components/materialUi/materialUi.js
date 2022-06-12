import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import photo from "../../img/photo.jpg.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    url: "/photo.jpg",
    title: "Breakfast",
    width: "33.33%",
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Burgers",
    width: "33.33%",
  },
  {
    url: "/static/images/buttons/photo.jpg",
    title: "Cameras",
    width: "33.33%",
  },
];

const MaterialUi = () => {
  const purple = "#8e44ad";
  const [bg, setbg] = useState(purple);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const [calculation, setCalculation] = useState();
  const [count2, setCount2] = useState(1);
  const [divide, setdivide] = useState();

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 250,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        // border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    let newBg = "yellow";
    setbg(newBg);
    setName("Oh Clicked");

    // console.log("You clicked submit.");
    // alert("hi");
  };

  const bgBack = () => {
    setbg(purple);
    setName("Areyy Second Clicked");
  };

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, []);

  useEffect(() => {
    setCount(() => count);
  }, []);

  useEffect(() => {
    setCalculation(() => count1);
  }, [count1]);

  useEffect(() => {
    setdivide(() => count2);
  }, [count2]);

  return (
    <>
      <h3 className="testing" style={{ textAlign: "center" }}>
        OnClick using useState
      </h3>
      <div style={{ backgroundColor: bg }}>
        {name}
        <Box
          onClick={handleSubmit}
          onDoubleClick={bgBack}
          // onMouseEnter={handleSubmit}
          // onMouseLeave={bgBack}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
        >
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <img src={photo} />
              <ImageBackdrop className="MuiImageBackdrop-root" />

              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 22,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  {/* <ImageMarked className="MuiImageMarked-root" /> */}
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </div>
      <h3 className="testing" style={{ textAlign: "center" }}>
        OnClick using useEffect
      </h3>
      <div>
        <p>Count: {count} </p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>Multiply: {calculation}</p>
        <button onClick={() => setCount1(count1 * 2)}>Click me</button>
        <p>Divide: {divide}</p>
        <button onClick={() => setCount2(count2 / 2)}>Click me</button>
      </div>
      <div>
        {/* <Link
          to={{
            pathname: "/testing",
          }}
        > */}
        <button>Please Click here to see image</button>
        {/* </Link> */}
      </div>
    </>
  );
};
export default MaterialUi;
