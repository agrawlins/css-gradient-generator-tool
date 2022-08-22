import React, { useState } from "react";
import BlockPicker from "react-color";

const App = () => {
  const [angle, setAngle] = useState("0")
  const [color1, setColor1] = useState("#000000")
  const [color2, setColor2] = useState("#000000")

  const Header = () => {
    return(
        <header className="header-contents"
          style={{background: `linear-gradient(${angle}deg, ${color1}, ${color2})`}}
        >
            <h1 className="header-text">CSS GRADIENT CODE GENERATOR</h1>
        </header>
    )
  }

  const handleChange = (event) =>{
    setAngle(event.target.value)
  }

  const AngleSelect = () => {
    return(
        <div>
            <h2 className="angle">
                Angle: <input name="angle" type="number" max="180" min="0" placeholder="0" value={angle} onChange={handleChange}/>°
            </h2>
        </div>
    )
  }

  const ColorSelect1 = () => {
    const [edit, setEdit] = useState(true)
    return(
        <div className="colorSelect" >
            <h2>Color 1</h2>
            Click to Change
            <div className="colorPreview"
                onClick={() => {setEdit(!edit)}}
                style={{ background: color1}}
            />
            <div style={{display: edit ? "none" : "block"}}>
                <BlockPicker
                    width={250}
                    height={150}
                    onChange={(color1) => {
                        setColor1(color1.hex)
                    }}
                    color={color1}
                />
            </div>
        </div>
    )
  }

  const ColorSelect2 = () => {
    const [edit, setEdit] = useState(true)
    return(
        <div className="colorSelect" >
            <h2>Color 2</h2>
            Click to Change
            <div className="colorPreview"
                onClick={() => {setEdit(!edit)}}
                style={{ background: color2}}
            />
            <div style={{display: edit ? "none" : "block"}}>
                <BlockPicker
                    width={250}
                    height={150}
                    onChange={(color2) => {
                        setColor2(color2.hex)
                    }}
                    color={color2}
                />
            </div>
        </div>
    )
  }

  const ColorDisplay = () => {
    return(
        <div className="colorDisplay"
            style={{background: `linear-gradient(${angle}deg, ${color1}, ${color2})`}}
        >  
        </div>
    )
  } 

  const CSSDisplay = (props) => {
    return(
        <textarea
            className="codeDisplay"
            value={
                `CSS for what you see above:
                \nbackground: linear-gradient(${angle}deg, ${color1}, ${color2});
                \n-moz-background: linear-gradient(${angle}deg, ${color1}, ${color2});
                \n-webkit: linear-gradient(${angle}deg, ${color1}, ${color2});`
            }
        >
        </textarea>
    )
  }

  const Footer = () => {
    return(
        <footer className="footer"
          style={{background: `linear-gradient(${angle}deg, ${color1}, ${color2})`}}
        >
            Copyright © 2022 Adam G. Rawlins. All Other Rights Reserved.
        </footer>
    )
}

  return (
    <div className="App">
      <Header/>
        <div className="main">
          <div >
            <div className="displayWindow">
              <ColorDisplay/>
              <CSSDisplay/>
            </div>
          </div>
          <div>
            <div className="selectWindow">
              <ColorSelect1/>
              <ColorSelect2/>
              <AngleSelect/>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;