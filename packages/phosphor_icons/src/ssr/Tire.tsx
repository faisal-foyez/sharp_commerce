/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Tire";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDkuMjYsMTU5LjI2QzE1NS4wOSwxNzMuODIsMTYzLjUsMTc2LDE2OCwxNzZzMTIuOTEtMi4xOCwxOC43NC0xNi43NGMzLjM5LTguNDgsNS4yNi0xOS41OCw1LjI2LTMxLjI2cy0xLjg3LTIyLjc4LTUuMjYtMzEuMjZDMTgwLjkxLDgyLjE4LDE3Mi41LDgwLDE2OCw4MHMtMTIuOTEsMi4xOC0xOC43NCwxNi43NEMxNDUuODcsMTA1LjIyLDE0NCwxMTYuMzIsMTQ0LDEyOFMxNDUuODcsMTUwLjc4LDE0OS4yNiwxNTkuMjZaTTE2OCw5Ni4yYzIuNjIsMi4wNiw4LDEzLDgsMzEuOHMtNS4zOCwyOS43NC04LDMxLjhjLTIuNjItMi4wNi04LTEzLTgtMzEuOFMxNjUuMzgsOTguMjYsMTY4LDk2LjJaTTIzMiwyMTZIMTk2LjQxQzIxMy4xMiwxOTcuNzMsMjI0LDE2NS40NywyMjQsMTI4YzAtNTguMzItMjYuMzUtMTA0LTYwLTEwNEg5MkM1OC4zNSwyNCwzMiw2OS42OCwzMiwxMjhTNTguMzUsMjMyLDkyLDIzMkgyMzJhOCw4LDAsMCwwLDAtMTZaTTE5My43NCw2My45M0MyMDIuOTMsODAuOTEsMjA4LDEwMy42NywyMDgsMTI4cy01LjA3LDQ3LjA5LTE0LjI2LDY0LjA3QzE4NS4zOCwyMDcuNSwxNzQuODIsMjE2LDE2NCwyMTZzLTIxLjM4LTguNS0yOS43NC0yMy45M0MxMjUuMDcsMTc1LjA5LDEyMCwxNTIuMzMsMTIwLDEyOHM1LjA3LTQ3LjA5LDE0LjI2LTY0LjA3QzE0Mi42Miw0OC41LDE1My4xOCw0MCwxNjQsNDBTMTg1LjM4LDQ4LjUsMTkzLjc0LDYzLjkzWk00OCwxMjhjMC0yLjUuMDctNSwuMTctNy40NEw4MCw5Ny44M2wyNC40MywxNy40NWMtLjI4LDQuMTYtLjQzLDguNDEtLjQzLDEyLjcyYTE3OS44OSwxNzkuODksMCwwLDAsMy4wNywzMy41bC0yMi40Mi0xNmE4LDgsMCwwLDAtOS4zLDBsLTIzLjc0LDE3QTE2MSwxNjEsMCwwLDEsNDgsMTI4Wk02Mi4yNiw2My45M0M3MC42Miw0OC41LDgxLjE4LDQwLDkyLDQwaDM5LjU5Yy0xMS45LDEzLTIwLjg0LDMzLjEyLTI1LDU3LjE2TDg0LjY1LDgxLjQ5YTgsOCwwLDAsMC05LjMsMEw1MC40OSw5OS4yNUM1Mi44NSw4Niw1Ni44Myw3NCw2Mi4yNiw2My45M1ptMCwxMjguMTRhMTAwLjA4LDEwMC4wOCwwLDAsMS01Ljk0LTEzLjMyTDgwLDE2MS44M2wzMy45NCwyNC4yNGM0LjYsMTIsMTAuNiwyMi4yMiwxNy42NSwyOS45M0g5MkM4MS4xOCwyMTYsNzAuNjIsMjA3LjUsNjIuMjYsMTkyLjA3WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTcyYzEzLDAsMjAtMjIuNjcsMjAtNDRzLTctNDQtMjAtNDQtMjAsMjIuNjctMjAsNDRTMTU1LDE3MiwxNjgsMTcyWm0wLTgwYzQuODksMCwxMiwxNCwxMiwzNnMtNy4xMSwzNi0xMiwzNi0xMi0xNC0xMi0zNlMxNjMuMTEsOTIsMTY4LDkyWm02NCwxMjhIMTg2LjIzYzYuNzItNS4xMSwxMi44NS0xMi41OSwxOC4wNi0yMi4yMUMyMTQuNDIsMTc5LjA4LDIyMCwxNTQuMywyMjAsMTI4cy01LjU4LTUxLjA4LTE1LjcxLTY5Ljc5QzE5My43MywzOC43MywxNzkuNDMsMjgsMTY0LDI4SDkyQzc2LjU3LDI4LDYyLjI3LDM4LjczLDUxLjcxLDU4LjIxLDQxLjU4LDc2LjkyLDM2LDEwMS43LDM2LDEyOHM1LjU4LDUxLjA4LDE1LjcxLDY5Ljc5QzYyLjI3LDIxNy4yNyw3Ni41NywyMjgsOTIsMjI4SDIzMmE0LDQsMCwwLDAsMC04Wk0xOTcuMjUsNjJDMjA2Ljc2LDc5LjU4LDIxMiwxMDMsMjEyLDEyOHMtNS4yNCw0OC40Mi0xNC43NSw2NmMtOS4wOSwxNi43OC0yMC45LDI2LTMzLjI1LDI2cy0yNC4xNi05LjI0LTMzLjI1LTI2QzEyMS4yNCwxNzYuNDIsMTE2LDE1MywxMTYsMTI4czUuMjQtNDguNDIsMTQuNzUtNjZjOS4wOS0xNi43OCwyMC45LTI2LDMzLjI1LTI2UzE4OC4xNiw0NS4yNCwxOTcuMjUsNjJaTTU4Ljc1LDYyQzY3Ljg0LDQ1LjI0LDc5LjY1LDM2LDkyLDM2aDQ5Ljc3Yy02LjcyLDUuMTEtMTIuODUsMTIuNTktMTguMDYsMjIuMjEtNywxMi45My0xMS44MywyOC43Ny0xNC4xNCw0Nkw4Mi4zMyw4NC43NWE0LDQsMCwwLDAtNC42NiwwTDQ1LjE3LDEwOEM0Ny4xOSw5MC42Niw1MS44NCw3NC43OCw1OC43NSw2MlpNNDQuMjYsMTE4LjQ0LDgwLDkyLjkybDI4LjU5LDIwLjQyYy0uMzksNC44MS0uNTksOS43MS0uNTksMTQuNjZhMTY5LjcyLDE2OS43MiwwLDAsMCw1LjMyLDQyLjg5bC0zMS0yMi4xNGE0LDQsMCwwLDAtNC42NiwwTDQ5LjEzLDE2OS4xM0ExNjEuNDQsMTYxLjQ0LDAsMCwxLDQ0LDEyOFE0NCwxMjMuMTksNDQuMjYsMTE4LjQ0Wk05MiwyMjBjLTEyLjM1LDAtMjQuMTYtOS4yNC0zMy4yNS0yNmExMDYuNjEsMTA2LjYxLDAsMCwxLTcuMTktMTYuNzVMODAsMTU2LjkybDM3LjMyLDI2LjY1YTExMS4zMiwxMTEuMzIsMCwwLDAsNi4zOSwxNC4yMmM1LjIxLDkuNjIsMTEuMzQsMTcuMSwxOC4wNiwyMi4yMVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTc0YzE0LjQ0LDAsMjItMjMuMTQsMjItNDZzLTcuNTYtNDYtMjItNDYtMjIsMjMuMTQtMjIsNDZTMTUzLjU2LDE3NCwxNjgsMTc0Wm0wLTgwYzIuNTcsMCwxMCwxMS42OSwxMCwzNHMtNy40MywzNC0xMCwzNC0xMC0xMS42OS0xMC0zNFMxNjUuNDMsOTQsMTY4LDk0Wm02NCwxMjRIMTkxLjcxQzIwOS44OSwyMDEsMjIyLDE2Ny40MywyMjIsMTI4YzAtNTcuMi0yNS40OC0xMDItNTgtMTAySDkyQzU5LjQ4LDI2LDM0LDcwLjgsMzQsMTI4UzU5LjQ4LDIzMCw5MiwyMzBIMjMyYTYsNiwwLDAsMCwwLTEyWm0tMjItOTBjMCw0OC43OS0yMS4wNyw5MC00Niw5MHMtNDYtNDEuMjEtNDYtOTAsMjEuMDctOTAsNDYtOTBTMjEwLDc5LjIxLDIxMCwxMjhaTTQ2LDEyOGMwLTIuODYuMDgtNS42OS4yMi04LjVMODAsOTUuMzdsMjYuNSwxOC45M2MtLjMzLDQuNDctLjUsOS0uNSwxMy43YTE3NS43MiwxNzUuNzIsMCwwLDAsNCwzOC4wOGwtMjYuNTUtMTlhNiw2LDAsMCwwLTcsMGwtMjYuMSwxOC42NEExNjAuMjQsMTYwLjI0LDAsMCwxLDQ2LDEyOFpNOTIsMzhoNDQuMjlDMTIyLjQ5LDUwLjkyLDExMi4yLDczLjM1LDEwOCwxMDAuNjVMODMuNDksODMuMTJhNiw2LDAsMCwwLTcsMEw0Ny43OSwxMDMuNjNDNTMuMzcsNjYuMjQsNzEuMzYsMzgsOTIsMzhabTAsMTgwQzc2LjQyLDIxOCw2Mi4zNiwyMDEuOTIsNTQsMTc4bDI2LTE4LjU4LDM1LjUzLDI1LjM5YzUuMjIsMTMuOTIsMTIuMzQsMjUuMzUsMjAuNzYsMzMuMjRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTI4YzAtMjIuMDksNy4xNi00MCwxNi00MHMxNiwxNy45MSwxNiw0MC03LjE2LDQwLTE2LDQwUzE1MiwxNTAuMDksMTUyLDEyOFptOTIsOTZhMTIsMTIsMCwwLDEtMTIsMTJIOTJjLTE4LjUsMC0zNS4zLTEyLjIyLTQ3LjMyLTM0LjRDMzMuOTIsMTgxLjc0LDI4LDE1NS42LDI4LDEyOHM1LjkyLTUzLjc0LDE2LjY4LTczLjZDNTYuNywzMi4yMiw3My41LDIwLDkyLDIwaDcyYzE4LjUsMCwzNS4zLDEyLjIyLDQ3LjMyLDM0LjRDMjIyLjA4LDc0LjI2LDIyOCwxMDAuNCwyMjgsMTI4cy01LjkyLDUzLjc0LTE2LjY4LDczLjZhOTUuMDcsOTUuMDcsMCwwLDEtNi41MSwxMC40SDIzMkExMiwxMiwwLDAsMSwyNDQsMjI0Wk0xNjQsNDRjLTE4LjkyLDAtNDAsMzQuNS00MCw4NHMyMS4wOCw4NCw0MCw4NCw0MC0zNC41LDQwLTg0UzE4Mi45Miw0NCwxNjQsNDRaTTU0LjMzLDE1NS41OSw3MywxNDIuMjRhMTIsMTIsMCwwLDEsMTMuOTQsMGwxNC42NiwxMC40NkExODYuNzcsMTg2Ljc3LDAsMCwxLDEwMCwxMjhjMC0zLjYxLjExLTcuMi4zMS0xMC43NUw4MCwxMDIuNzUsNTIuMDksMTIyLjY4QzUyLDEyNC40NCw1MiwxMjYuMjEsNTIsMTI4QTE2MC4xLDE2MC4xLDAsMCwwLDU0LjMzLDE1NS41OVpNNTYuNTQsOTAsNzMsNzguMjRhMTIsMTIsMCwwLDEsMTMuOTQsMGwxNi45MSwxMi4wN2ExMzQuNzksMTM0Ljc5LDAsMCwxLDEyLjgtMzUuOTFBOTUuMDcsOTUuMDcsMCwwLDEsMTIzLjE5LDQ0SDkyQzc4LjQ0LDQ0LDYzLjc3LDYxLjczLDU2LjU0LDkwWk05MiwyMTJoMzEuMTlhOTUuMDcsOTUuMDcsMCwwLDEtNi41MS0xMC40LDExNS43OSwxMTUuNzksMCwwLDEtNi0xMi45MUw4MCwxNjYuNzUsNjEuMTQsMTgwLjIyQzY5LDIwMC4wOCw4MC44OCwyMTIsOTIsMjEyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTI4YzAsMjIuMDktNy4xNiw0MC0xNiw0MHMtMTYtMTcuOTEtMTYtNDAsNy4xNi00MCwxNi00MFMxODQsMTA1LjkxLDE4NCwxMjhabTU2LDk2YTgsOCwwLDAsMS04LDhIOTJjLTMzLjY0LDAtNjAtNDUuNjgtNjAtMTA0UzU4LjM2LDI0LDkyLDI0aDcyYzMzLjY0LDAsNjAsNDUuNjgsNjAsMTA0LDAsMzcuNDctMTAuODgsNjkuNzMtMjcuNTksODhIMjMyQTgsOCwwLDAsMSwyNDAsMjI0Wk01Ny44NywxMTEuODFhNy45Myw3LjkzLDAsMCwwLDQuNjQtMS40OUw4MCw5Ny44M2wxMy4yOCw5LjQ5YTgsOCwwLDAsMCw5LjMtMTNMODQuNjUsODEuNDlhOCw4LDAsMCwwLTkuMywwTDUzLjIxLDk3LjNhOCw4LDAsMCwwLDQuNjYsMTQuNTFabTQ2LjY3LDQ3Ljg5TDg0LjY1LDE0NS40OWE4LDgsMCwwLDAtOS4zLDBMNTYsMTU5LjI5YTgsOCwwLDEsMCw5LjMsMTNMODAsMTYxLjgzbDE1LjI0LDEwLjg4YTgsOCwwLDEsMCw5LjMtMTNabTg5LjIsMzIuMzdjOS4xOS0xNywxNC4yNi0zOS43NCwxNC4yNi02NC4wN3MtNS4wNy00Ny4wOS0xNC4yNi02NC4wN0MxODUuMzgsNDguNSwxNzQuODIsNDAsMTY0LDQwcy0yMS4zOCw4LjUtMjkuNzQsMjMuOTNDMTI1LjA3LDgwLjkxLDEyMCwxMDMuNjcsMTIwLDEyOHM1LjA3LDQ3LjA5LDE0LjI2LDY0LjA3QzE0Mi42MiwyMDcuNSwxNTMuMTgsMjE2LDE2NCwyMTZTMTg1LjM4LDIwNy41LDE5My43NCwxOTIuMDdaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMjI0SDkyYy0yOC43MiwwLTUyLTQzLTUyLTk2UzYzLjI4LDMyLDkyLDMyaDcyYy0yOC43MiwwLTUyLDQzLTUyLDk2UzEzNS4yOCwyMjQsMTY0LDIyNFptNC0xMzZjLTguODQsMC0xNiwxNy45MS0xNiw0MHM3LjE2LDQwLDE2LDQwLDE2LTE3LjkxLDE2LTQwUzE3Ni44NCw4OCwxNjgsODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTQ5LjI2LDE1OS4yNkMxNTUuMDksMTczLjgyLDE2My41LDE3NiwxNjgsMTc2czEyLjkxLTIuMTgsMTguNzQtMTYuNzRjMy4zOS04LjQ4LDUuMjYtMTkuNTgsNS4yNi0zMS4yNnMtMS44Ny0yMi43OC01LjI2LTMxLjI2QzE4MC45MSw4Mi4xOCwxNzIuNSw4MCwxNjgsODBzLTEyLjkxLDIuMTgtMTguNzQsMTYuNzRDMTQ1Ljg3LDEwNS4yMiwxNDQsMTE2LjMyLDE0NCwxMjhTMTQ1Ljg3LDE1MC43OCwxNDkuMjYsMTU5LjI2Wk0xNjgsOTYuMmMyLjYyLDIuMDYsOCwxMyw4LDMxLjhzLTUuMzgsMjkuNzQtOCwzMS44Yy0yLjYyLTIuMDYtOC0xMy04LTMxLjhTMTY1LjM4LDk4LjI2LDE2OCw5Ni4yWk0yMzIsMjE2SDE5Ni40MUMyMTMuMTIsMTk3LjczLDIyNCwxNjUuNDcsMjI0LDEyOGMwLTU4LjMyLTI2LjM1LTEwNC02MC0xMDRIOTJDNTguMzUsMjQsMzIsNjkuNjgsMzIsMTI4UzU4LjM1LDIzMiw5MiwyMzJIMjMyYTgsOCwwLDAsMCwwLTE2Wk0xOTMuNzQsNjMuOTNDMjAyLjkzLDgwLjkxLDIwOCwxMDMuNjcsMjA4LDEyOHMtNS4wNyw0Ny4wOS0xNC4yNiw2NC4wN0MxODUuMzgsMjA3LjUsMTc0LjgyLDIxNiwxNjQsMjE2cy0yMS4zOC04LjUtMjkuNzQtMjMuOTNDMTI1LjA3LDE3NS4wOSwxMjAsMTUyLjMzLDEyMCwxMjhzNS4wNy00Ny4wOSwxNC4yNi02NC4wN0MxNDIuNjIsNDguNSwxNTMuMTgsNDAsMTY0LDQwUzE4NS4zOCw0OC41LDE5My43NCw2My45M1pNNDgsMTI4YzAtMi41LjA3LTUsLjE3LTcuNDRMODAsOTcuODNsMjQuNDMsMTcuNDVjLS4yOCw0LjE2LS40Myw4LjQxLS40MywxMi43MmExNzkuODksMTc5Ljg5LDAsMCwwLDMuMDcsMzMuNWwtMjIuNDItMTZhOCw4LDAsMCwwLTkuMywwbC0yMy43NCwxN0ExNjEsMTYxLDAsMCwxLDQ4LDEyOFpNNjIuMjYsNjMuOTNDNzAuNjIsNDguNSw4MS4xOCw0MCw5Miw0MGgzOS41OWMtMTEuOSwxMy0yMC44NCwzMy4xMi0yNSw1Ny4xNkw4NC42NSw4MS40OWE4LDgsMCwwLDAtOS4zLDBMNTAuNDksOTkuMjVDNTIuODUsODYsNTYuODMsNzQsNjIuMjYsNjMuOTNabTAsMTI4LjE0YTEwMC4wOCwxMDAuMDgsMCwwLDEtNS45NC0xMy4zMkw4MCwxNjEuODNsMzMuOTQsMjQuMjRjNC42LDEyLDEwLjYsMjIuMjIsMTcuNjUsMjkuOTNIOTJDODEuMTgsMjE2LDcwLjYyLDIwNy41LDYyLjI2LDE5Mi4wN1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tire";
export { I as Tire };