/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Tooth";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEsNzEuNDIsMTQ5LjU0LDgwLDE3MSw4OC41N0E4LDgsMCwxLDEsMTY1LDEwMy40MkwxMjgsODguNjEsOTEsMTAzLjQyQTgsOCwwLDEsMSw4NSw4OC41N0wxMDYuNDYsODAsODUsNzEuNDJBOCw4LDAsMSwxLDkxLDU2LjU3bDM3LDE0LjgxLDM3LTE0LjgxQTgsOCwwLDEsMSwxNzEsNzEuNDJabTUzLDguMzNjMCw0Mi43Mi04LDc1LjQtMTQuNjksOTUuMjgtOC43MywyNS44LTIwLjYzLDQ1LjQ5LTMyLjY1LDU0YTE1LjY5LDE1LjY5LDAsMCwxLTE1Ljk1LDEuNDEsMTYuMDksMTYuMDksMCwwLDEtOS4xOC0xMy4zNkMxNTAuNjgsMjA1LjU4LDE0Ni40OCwxNjgsMTI4LDE2OHMtMjIuNjgsMzcuNTktMjMuNTMsNDkuMTFhMTYuMDksMTYuMDksMCwwLDEtMTYsMTQuOSwxNS42NywxNS42NywwLDAsMS05LjEzLTIuOTVjLTEyLTguNTMtMjMuOTItMjguMjItMzIuNjUtNTRDNDAsMTU1LjE1LDMyLDEyMi40NywzMiw3OS43NUE1Niw1NiwwLDAsMSw4OCwyNGg4MEE1Niw1NiwwLDAsMSwyMjQsNzkuNzVabS0xNiwwQTQwLDQwLDAsMCwwLDE2OCw0MEg4OEE0MCw0MCwwLDAsMCw0OCw3OS43NmMwLDQwLjU1LDcuNTEsNzEuNCwxMy44NSw5MC4xNCwxMS4wNSwzMi42NiwyMyw0My4zNywyNi42MSw0NkM5MS41NywxNzQuNjcsMTA1LjU5LDE1MiwxMjgsMTUyczM2LjQ1LDIyLjcxLDM5LjQ5LDYzLjk0aDBjMy42LTIuNTksMTUuNTctMTMuMjYsMjYuNjYtNDZDMjAwLjQ5LDE1MS4xNiwyMDgsMTIwLjMxLDIwOCw3OS43NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjkuNDksNjcuNzEsMTM4Ljc3LDgwbDMwLjcyLDEyLjI4QTQsNCwwLDAsMSwxNjgsMTAwYTMuOTEsMy45MSwwLDAsMS0xLjQ5LS4yOUwxMjgsODQuMzEsODkuNDksOTkuNzFBMy45MSwzLjkxLDAsMCwxLDg4LDEwMGE0LDQsMCwwLDEtMS40OS03LjcyTDExNy4yMyw4MCw4Ni41MSw2Ny43MWE0LDQsMCwwLDEsMy03LjQzTDEyOCw3NS42OWwzOC41MS0xNS40MWE0LDQsMCwwLDEsMyw3LjQzWm01MC41MSwxMmMuMDcsNzEuMDgtMjMuMTYsMTMwLjA3LTQ1LjY1LDE0Ni4wNWExMS43NCwxMS43NCwwLDAsMS0xMS45MywxLDExLjkxLDExLjkxLDAsMCwxLTYuOS0xMEMxNTQuMzUsMjAwLjkzLDE0OS4zMywxNjQsMTI4LDE2NHMtMjYuMzUsMzYuOTQtMjcuNTIsNTIuODJhMTIuMTEsMTIuMTEsMCwwLDEtMTIsMTEuMTksMTEuNzcsMTEuNzcsMCwwLDEtNi44My0yLjJjLTIyLjQ5LTE2LTQ1LjcyLTc1LTQ1LjY1LTE0NkE1Miw1MiwwLDAsMSw4OCwyOGg4MEE1Miw1MiwwLDAsMSwyMjAsNzkuNzVabS04LDBBNDQsNDQsMCwwLDAsMTY4LDM2SDg4QTQ0LDQ0LDAsMCwwLDQ0LDc5Ljc2Yy0uMDcsNjcuNTgsMjEuOSwxMjUsNDIuMjksMTM5LjUxYTMuNzcsMy43NywwLDAsMCwzLjg5LjMzLDQsNCwwLDAsMCwyLjMyLTMuMzdDOTUuMzYsMTc3LjM5LDEwOCwxNTYsMTI4LDE1NnMzMi42NCwyMS40LDM1LjUsNjAuMjRhNCw0LDAsMCwwLDIuMzIsMy4zNywzLjc3LDMuNzcsMCwwLDAsMy44OS0uMzNDMTkwLjEsMjA0LjgsMjEyLjA3LDE0Ny4zNCwyMTIsNzkuNzZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuMjMsNjkuNTcsMTQ0LjE2LDgwbDI2LjA3LDEwLjQzYTYsNiwwLDEsMS00LjQ2LDExLjE0TDEyOCw4Ni40Niw5MC4yMywxMDEuNTdhNiw2LDAsMCwxLTcuOC0zLjM1LDYsNiwwLDAsMSwzLjM0LTcuNzlMMTExLjg0LDgwLDg1Ljc3LDY5LjU3YTYsNiwwLDAsMSw0LjQ2LTExLjE0TDEyOCw3My41M2wzNy43Ny0xNS4xYTYsNiwwLDEsMSw0LjQ2LDExLjE0Wk0yMjIsNzkuNzVjMCw0Mi40NS03LjkxLDc0LjktMTQuNTksOTQuNjQtOC41OSwyNS40MS0yMC4yMiw0NC43NC0zMS45MSw1M2ExMy43LDEzLjcsMCwwLDEtMTMuOTQsMS4yMywxNC4xLDE0LjEsMCwwLDEtOC0xMS42OWMtMS4xMy0xNS4zMy01Ljg3LTUxLTI1LjUyLTUxcy0yNC4zOSwzNS42NC0yNS41Miw1MWExNC4xLDE0LjEsMCwwLDEtMTQsMTMsMTMuNjksMTMuNjksMCwwLDEtOC0yLjU4Yy0xMS42OS04LjI5LTIzLjMyLTI3LjYyLTMxLjkxLTUzQzQxLjkxLDE1NC42NSwzNCwxMjIuMiwzNCw3OS43NUE1NCw1NCwwLDAsMSw4OCwyNmg4MEE1NCw1NCwwLDAsMSwyMjIsNzkuNzVabS0xMiwwQTQyLDQyLDAsMCwwLDE2OCwzOEg4OEE0Miw0MiwwLDAsMCw0Niw3OS43NmMtLjA3LDczLjkzLDI0LjY5LDEyNiw0MS40NCwxMzcuODhhMS43NywxLjc3LDAsMCwwLDEuODguMTUsMiwyLDAsMCwwLDEuMTktMS43MUM5My40NiwxNzYsMTA2Ljc3LDE1NCwxMjgsMTU0czM0LjU0LDIyLDM3LjQ5LDYyLjA5YTIsMiwwLDAsMCwxLjE5LDEuNzEsMS43NywxLjc3LDAsMCwwLDEuODgtLjE1QzE4NS4zMSwyMDUuNzQsMjEwLjA3LDE1My42OSwyMTAsNzkuNzZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuNDYsODMuMTUsMTYwLjMxLDg4bDEyLjE1LDQuODVhMTIsMTIsMCwxLDEtOC45MiwyMi4yOUwxMjgsMTAwLjkzLDkyLjQ2LDExNS4xNWExMiwxMiwwLDAsMS04LjkyLTIyLjI5TDk1LjY5LDg4LDgzLjU0LDgzLjE1YTEyLDEyLDAsMCwxLDguOTItMjIuMjlMMTI4LDc1LjA4bDM1LjU0LTE0LjIyYTEyLDEyLDAsMCwxLDguOTIsMjIuMjlaTTIyOCw3OS43NWMuMDgsNzYuNDUtMjUuMiwxMzUuNjgtNDksMTUyLjU5YTIwLDIwLDAsMCwxLTMxLjQ0LTE0LjkyYy0uNjctOS4wNi0yLjMzLTIyLTYuNDYtMzIuMjNDMTM1Ljc2LDE3MiwxMjkuOTIsMTcyLDEyOCwxNzJjLTcuNzYsMC0xMS43Nyw5LjkyLTEzLjA4LDEzLjE4LTQuMTMsMTAuMjItNS43OSwyMy4xNy02LjQ2LDMyLjIzQTIwLDIwLDAsMCwxLDg4LjUxLDIzNiwxOS44NiwxOS44NiwwLDAsMSw3NywyMzIuMzRDNTMuMiwyMTUuNDMsMjcuOTIsMTU2LjIsMjgsNzkuNzVBNjAsNjAsMCwwLDEsODgsMjBoODBBNjAsNjAsMCwwLDEsMjI4LDc5Ljc1Wm0tMjQsMEEzNiwzNiwwLDAsMCwxNjgsNDRIODhBMzYsMzYsMCwwLDAsNTIsNzkuNzhjLS4wNiw2MS4wOSwxNy44MywxMDkuNTIsMzMuMywxMjcuNjZDOTEuMjQsMTU2LDExNC4zMiwxNDgsMTI4LDE0OHMzNi43Niw4LDQyLjcsNTkuNDNDMTg2LjE3LDE4OS4zMSwyMDQuMDYsMTQwLjg4LDIwNCw3OS43OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMjRIODhBNTYsNTYsMCwwLDAsMzIsNzkuNzVjMCw0Mi43Miw4LDc1LjQsMTQuNyw5NS4yOCw4LjcyLDI1LjgsMjAuNjIsNDUuNDksMzIuNjQsNTRBMTUuNjcsMTUuNjcsMCwwLDAsODguNDcsMjMyYTE2LjA5LDE2LjA5LDAsMCwwLDE2LTE0LjljLjg1LTExLjUyLDUtNDkuMTEsMjMuNTMtNDkuMTFzMjIuNjgsMzcuNTksMjMuNTMsNDkuMTFhMTYuMDksMTYuMDksMCwwLDAsOS4xOCwxMy4zNiwxNS42OSwxNS42OSwwLDAsMCwxNS45NS0xLjQxYzEyLTguNTMsMjMuOTItMjguMjIsMzIuNjQtNTRDMjE2LDE1NS4xNSwyMjQsMTIyLjQ3LDIyNCw3OS43NUE1Niw1NiwwLDAsMCwxNjgsMjRabTMsNTYuNTdBOCw4LDAsMSwxLDE2NSw5NS40MkwxMjgsODAuNjEsOTEsOTUuNDJBOCw4LDAsMSwxLDg1LDgwLjU3TDEwNi40Niw3Miw4NSw2My40MkE4LDgsMCwxLDEsOTEsNDguNTdsMzcsMTQuODEsMzctMTQuODFBOCw4LDAsMSwxLDE3MSw2My40MkwxNDkuNTQsNzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzkuNzZjLjA3LDcxLjQyLTIzLjQ4LDEyOC4yMy00NCwxNDIuNzhhOCw4LDAsMCwxLTEyLjUyLTZDMTU4LDE5Ni4zMSwxNTIsMTYwLDEyOCwxNjBzLTMwLDM2LjMxLTMxLjUxLDU2LjUzYTgsOCwwLDAsMS0xMi41Miw2QzYzLjQ4LDIwOCwzOS45MywxNTEuMTgsNDAsNzkuNzZBNDcuOTQsNDcuOTQsMCwwLDEsODgsMzJoODBBNDcuOTQsNDcuOTQsMCwwLDEsMjE2LDc5Ljc2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE3MSw3MS40MiwxNDkuNTQsODAsMTcxLDg4LjU3QTgsOCwwLDEsMSwxNjUsMTAzLjQyTDEyOCw4OC42MSw5MSwxMDMuNDJBOCw4LDAsMSwxLDg1LDg4LjU3TDEwNi40Niw4MCw4NSw3MS40MkE4LDgsMCwxLDEsOTEsNTYuNTdsMzcsMTQuODEsMzctMTQuODFBOCw4LDAsMSwxLDE3MSw3MS40MlptNTMsOC4zM2MwLDQyLjcyLTgsNzUuNC0xNC43LDk1LjI4LTguNzIsMjUuOC0yMC42Miw0NS40OS0zMi42NCw1NGExNS42OSwxNS42OSwwLDAsMS0xNS45NSwxLjQxLDE2LjA5LDE2LjA5LDAsMCwxLTkuMTgtMTMuMzZDMTUwLjY4LDIwNS41OCwxNDYuNDgsMTY4LDEyOCwxNjhzLTIyLjY4LDM3LjU5LTIzLjUzLDQ5LjExYTE2LjA5LDE2LjA5LDAsMCwxLTE2LDE0LjksMTUuNjcsMTUuNjcsMCwwLDEtOS4xMy0yLjk1Yy0xMi04LjUzLTIzLjkyLTI4LjIyLTMyLjY0LTU0QzQwLDE1NS4xNSwzMiwxMjIuNDcsMzIsNzkuNzVBNTYsNTYsMCwwLDEsODgsMjRoODBBNTYsNTYsMCwwLDEsMjI0LDc5Ljc1Wm0tMTYsMEE0MCw0MCwwLDAsMCwxNjgsNDBIODhBNDAsNDAsMCwwLDAsNDgsNzkuNzZjMCw0MC41NSw3LjUxLDcxLjQsMTMuODUsOTAuMTQsMTEuMDUsMzIuNjYsMjMsNDMuMzcsMjYuNjEsNDZDOTEuNTcsMTc0LjY3LDEwNS41OSwxNTIsMTI4LDE1MnMzNi40NSwyMi43MSwzOS40OSw2My45NGgwYzMuNi0yLjU5LDE1LjU3LTEzLjI2LDI2LjY2LTQ2QzIwMC40OSwxNTEuMTYsMjA4LDEyMC4zMSwyMDgsNzkuNzZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tooth";
export { I as Tooth };