import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
*{
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
}

body{
    font-family: "NotoSans";
    color : #484848;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  cursor : pointer;
}

input:focus,
button:focus,
select:focus {
  outline: none;
}

button{
  cursor : pointer;
}
`;
export default GlobalStyle;