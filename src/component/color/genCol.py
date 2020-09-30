import os
import json

# cN: colorName cC:colorCode
colStr = """
//{cN}
$base-{cN}: {cC};
$dark-{cN}: darken($base-{cN}, 10%);
$darker-{cN}: darken($base-{cN}, 20%);
$darkest-{cN}: darken($base-{cN}, 30%);
$light-{cN}: lighten($base-{cN}, 10%);
$lighter-{cN}: lighten($base-{cN}, 20%);
$lightest-{cN}: lighten($base-{cN}, 30%);
"""

paletteScssStrPre = """
@import "color.scss";
.palette {{
    width: 100%;
}}
.box {{
  width: 300px;
  font-size: xx-large;
  margin: auto;
}}
{classes}
"""

paletteScssStr = """
.base-{cN} {{
  background-color: $base-{cN};
}}
.dark-{cN} {{
  background-color: $dark-{cN};
  color: white;
}}
.darker-{cN} {{
  background-color: $darker-{cN};
  color: white;
}}
.darkest-{cN} {{
  background-color: $darkest-{cN};
  color: white;
}}
.light-{cN} {{
  background-color: $light-{cN};
  color: black;
}}
.lighter-{cN} {{
  background-color: $lighter-{cN};
  color: black;
}}
.lightest-{cN} {{
  background-color: $lightest-{cN};
  color: black;
}}
"""

paletteTsx = """
import React from "react";
import "./Palette.scss";

function Palette() {{
  return (
    <div className="palette">
        {divs}
    </div>
  );
}}

export default Palette;
"""

paletteTsxDivs = """
      <hr></hr>
      <h2>{cN}</h2>
      <div className={{"box lightest-{cN}"}}>lightest</div>
      <div className={{"box lighter-{cN}"}}>lighter</div>
      <div className={{"box light-{cN}"}}>light</div>
      <div className={{"box base-{cN}"}}>{cN}</div>
      <div className={{"box dark-{cN}"}}>dark</div>
      <div className={{"box darker-{cN}"}}>darker</div>
      <div className={{"box darkest-{cN}"}}>darkest</div>
"""

# read
dp = os.path.dirname(os.path.abspath(__file__))
fpJson = os.path.join(dp, "baseColor.json")
colors = ""
palette = ""
tsx = ""
with open(fpJson, mode='r') as f:
    j = json.load(f)
    for key in j:
        colors += colStr.format(cN=key, cC=j[key])
        palette += paletteScssStr.format(cN=key)
        tsx += paletteTsxDivs.format(cN=key)

# write
fpSaas = os.path.join(dp, "color.scss")
with open(fpSaas, mode='w') as f:
    f.write(colors)

fpPaletteSaas = os.path.join(dp, "Palette.scss")
with open(fpPaletteSaas, mode='w') as f:
    f.write(paletteScssStrPre.format(classes=palette))

fpPaletteTsx = os.path.join(dp, "Palette.tsx")
with open(fpPaletteTsx, mode='w') as f:
    f.write(paletteTsx.format(divs=tsx))
