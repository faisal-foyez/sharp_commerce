/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FishSimple";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNzZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTY4LDc2Wm00Miw3OS4wOGMtMTUuMDgsMjAuODQtMzcuNTMsMzQuODgtNjYuNyw0MS43NC0yMC4wOCw0LjcyLTQzLjU0LDYtNzAuMTIsMy45M3EyLjQsMTcuODIsNi43MiwzNy41NGE4LDgsMCwwLDEtNi4xLDkuNTIsNy44MSw3LjgxLDAsMCwxLTEuNzIuMTksOCw4LDAsMCwxLTcuODEtNi4yOXEtNC44OS0yMi4zNi03LjQxLTQyLjYyLTIwLjIyLTIuNTEtNDIuNTgtNy40MWE4LDgsMCwwLDEsMy40My0xNS42M3ExOS43LDQuMzIsMzcuNSw2LjczYy0yLjA5LTI2LjU2LS43OC01MCwzLjkzLTcwLjA2QzY2LDgzLjU1LDgwLjA1LDYxLjEsMTAwLjg4LDQ2LDExNSwzNS43NiwxNDAuMTUsMjMuNjQsMTc5LjI3LDI0YzIxLjE5LjIxLDQwLjgzLDQuMzMsNDMuODEsNi4wOGE4LDgsMCwwLDEsMi44MywyLjgzYzEuNzUsMyw1Ljg3LDIyLjU5LDYuMDgsNDMuNzhDMjMyLjIxLDk4LjMxLDIyOC41NywxMjkuNDQsMjEwLDE1NS4wOFptLTIzLjc2LDIuOEExMTIuMDcsMTEyLjA3LDAsMCwxLDk4LjEyLDY5Ljc0Qzc1LjY0LDk0LDY2LjcsMTMyLjQ3LDcxLjM2LDE4NC42LDEyMy41MSwxODkuMjgsMTYyLDE4MC4zNSwxODYuMjUsMTU3Ljg4Wk0yMTIuNDQsNDMuNTZhMTc1Ljc1LDE3NS43NSwwLDAsMC0zOS4yMi0zLjUxYy0yNC4zNC42NC00NC43MSw2LjQ5LTYwLjc2LDE3LjM5YTk2LDk2LDAsMCwwLDg2LjA5LDg2LjFjMTAuOTEtMTYsMTYuNzYtMzYuNDIsMTcuNC02MC43NkExNzUuODIsMTc1LjgyLDAsMCwwLDIxMi40NCw0My41NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzZhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTY0LDc2Wm00Mi43Nyw3Ni43M2MtMTQuNSwyMC0zNi4xNywzMy41Ny02NC4zOCw0MC4yLTIwLjkxLDQuOTEtNDUuNjEsNi03My44LDMuNDJxMi40NiwyMC4xOCw3LjQxLDQyLjc5YTQsNCwwLDAsMS0zLDQuNzcsNC4xOSw0LjE5LDAsMCwxLS44Ni4wOSw0LDQsMCwwLDEtMy45LTMuMTQsNDU3LDQ1NywwLDAsMS03LjcyLTQ1LjM2cS0yMS40LTIuNDktNDUuMzMtNy43MkE0LDQsMCwxLDEsMTYuODYsMTgwcTIyLjU5LDQuOTUsNDIuNzYsNy40MWMtMi42Mi0yOC4xNi0xLjQ4LTUyLjg0LDMuNDMtNzMuNzMsNi42My0yOC4yMSwyMC4xNC00OS44OCw0MC4xOC02NC4zOUMxMjcuMzIsMzEuOCwxNTYuNjEsMjgsMTc3LjUzLDI4aDEuNzFjMjIsLjIxLDQwLjEyLDQuNTQsNDEuODEsNS41M0E0LDQsMCwwLDEsMjIyLjQ2LDM1YzEsMS42OCw1LjMxLDE5LjgsNS41Myw0MS43OUMyMjguMiw5Ny43NSwyMjQuNjksMTI4LDIwNi43NywxNTIuNzNabS0xMi4yMywyLjQzYTEwOCwxMDgsMCwwLDEtOTMuNy05My43Yy0yNy45MiwyNS4wOC0zOSw2Ny42Mi0zMy4xNCwxMjYuODFDMTI2LjksMTk0LjE0LDE2OS40NSwxODMuMDcsMTk0LjU0LDE1NS4xNlptMjEuMi0xMTQuOUMyMDQuOSwzNy43MywxNDguNSwyNi42OSwxMDguMyw1NS40NmE5OS45Miw5OS45MiwwLDAsMCw5Mi4yMyw5Mi4yNEMyMjkuMjksMTA3LjUyLDIxOC4yNyw1MS4xMSwyMTUuNzQsNDAuMjZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYsNzZhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTY2LDc2Wm00Mi4zOCw3Ny45Yy0xNC43OSwyMC40NC0zNi44NCwzNC4yMi02NS41Myw0MS0yMC41LDQuODEtNDQuNTgsNi03MiwzLjY4cTIuNDMsMTksNy4wNyw0MC4xNWE2LDYsMCwwLDEtNC41OCw3LjE1LDYuMjksNi4yOSwwLDAsMS0xLjI5LjE0LDYsNiwwLDAsMS01Ljg1LTQuNzJxLTUuMDctMjMuMTMtNy41Ny00NC0yMC44LTIuNTEtNDMuOTQtNy41N0E2LDYsMCwxLDEsMTcuMjksMTc4cTIxLjE0LDQuNjMsNDAuMTIsNy4wN2MtMi4zNS0yNy4zNi0xLjEzLTUxLjQxLDMuNjktNzEuOUM2Ny44NCw4NC40OSw4MS42MSw2Mi40NCwxMDIsNDcuNjRjNDcuNTUtMzQuNDQsMTE2LjMxLTE4LDEyMC0xNS44MWE1LjkzLDUuOTMsMCwwLDEsMi4xMSwyLjExQzIyNi4zNCwzNy42MywyNDIuODEsMTA2LjMzLDIwOC4zNywxNTMuOTFabS0xNy45NCwyLjY5YTExMC4wNiwxMTAuMDYsMCwwLDEtOTEtOTFjLTI1LjEzLDI0LjctMzUuMTIsNjUuMjQtMjkuODcsMTIwLjg5QzEyNS4xOSwxOTEuNzEsMTY1LjcyLDE4MS43MywxOTAuNDMsMTU2LjZaTTIxNC4wNiw0MS45M2MtMTIuNzgtMi44NC02NS40Mi0xMi4xNy0xMDMuNjksMTQuNTJhOTcuOTIsOTcuOTIsMCwwLDAsODkuMTYsODkuMTdDMjI2LjIxLDEwNy4zNywyMTYuODksNTQuNzIsMjE0LjA2LDQxLjkzWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNzZhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTcyLDc2Wm02NCwuNjZjLjMyLDMxLjg1LTcuNTUsNTkuNzctMjIuNzQsODAuNzYtMTUuNjYsMjEuNjUtMzguODksMzYuMjEtNjksNDMuMjktMTkuMiw0LjUyLTQxLjM5LDYtNjYuMzYsNC4zOHEyLjI3LDE1LjQ5LDYsMzIuMzRhMTIsMTIsMCwxLDEtMjMuNDQsNS4xNHEtNC41OC0yMC44NS03LjA4LTM5LjkxLTE5LTIuNS0zOS44Ny03LjA3YTEyLDEyLDAsMCwxLDUuMTQtMjMuNDRxMTYuODMsMy42NywzMi4zMSw2Yy0xLjU4LTI1LS4xMy00Ny4xMiw0LjM4LTY2LjMsNy4wOC0zMC4xNCwyMS42NC01My4zNiw0My4yNy02OSwyMS0xNS4yMSw0OC45Mi0yMy4xLDgwLjc4LTIyLjc3LDIxLjc5LjIxLDQyLDQuNDIsNDUuOCw2LjY0YTEyLDEyLDAsMCwxLDQuMjQsNC4yM0MyMzEuNTcsMzQuNjQsMjM1Ljc4LDU0Ljg3LDIzNiw3Ni42NlptLTU4LjQ2LDgzLjI4QTExNi4wOCwxMTYuMDgsMCwwLDEsOTYuMDYsNzguNDZjLTkuMjEsMTIuMTYtMTUuNTYsMjcuNTctMTguOTMsNDYtMywxNi4zOS0zLjY2LDM1LjI1LTIsNTYuMzksMjEuMTYsMS42NSw0MCwxLDU2LjQyLTJDMTUwLDE3NS40OSwxNjUuMzcsMTY5LjE0LDE3Ny41MywxNTkuOTRaTTIwOSw0N2MtMTUuOS0zLTU5LjMtOC40NS05Mi4yNiwxMi40NGE5Miw5MiwwLDAsMCw3OS44MSw3OS44MkMyMTcuNDMsMTA2LjMyLDIxMiw2Mi45MiwyMDksNDdaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNzZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTY4LDc2Wm00Miw3OS4wOGMtMTUuMDgsMjAuODQtMzcuNTMsMzQuODgtNjYuNyw0MS43NC0yMC4wOCw0LjcyLTQzLjU0LDYtNzAuMTIsMy45M3EyLjQsMTcuODIsNi43MiwzNy41NGE4LDgsMCwwLDEtNi4xLDkuNTIsNy44MSw3LjgxLDAsMCwxLTEuNzIuMTksOCw4LDAsMCwxLTcuODEtNi4yOXEtNC44OS0yMi4zNi03LjQxLTQyLjYyLTIwLjIyLTIuNTEtNDIuNTgtNy40MWE4LDgsMCwwLDEsMy40My0xNS42M3ExOS43LDQuMzIsMzcuNSw2LjczYy0yLjA5LTI2LjU2LS43OC01MCwzLjkzLTcwLjA2QzY2LDgzLjU1LDgwLjA1LDYxLjEsMTAwLjg4LDQ2LDExNSwzNS43NiwxNDAuMTQsMjMuNjQsMTc5LjI3LDI0YzIxLjE5LjIxLDQwLjgzLDQuMzMsNDMuODEsNi4wOGE4LDgsMCwwLDEsMi44MywyLjgzYzEuNzUsMyw1Ljg3LDIyLjU5LDYuMDgsNDMuNzhDMjMyLjIxLDk4LjMxLDIyOC41NywxMjkuNDQsMjEwLDE1NS4wOFptMi40My0xMTEuNTJhMTc1Ljc1LDE3NS43NSwwLDAsMC0zOS4yMi0zLjUxYy0yNC4zNC42NC00NC43MSw2LjQ5LTYwLjc2LDE3LjM5YTk2LDk2LDAsMCwwLDg2LjA5LDg2LjFjMTAuOTEtMTYsMTYuNzYtMzYuNDIsMTcuNC02MC43NkExNzUuODIsMTc1LjgyLDAsMCwwLDIxMi40NCw0My41NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuNDMsMTUxLjg1Yy0yMS4yNiwyOC4xNy02Mi4wOSw0OC4yNC0xMzguMzUsNDBDNTUuODksMTE1LjY0LDc2LDc0LjgyLDEwNC4xNSw1My41N0ExMDQsMTA0LDAsMCwwLDIwMi40MywxNTEuODVaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTY4LDc2YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE2OCw3NlptNDIsNzkuMDhjLTE1LjA4LDIwLjg0LTM3LjUzLDM0Ljg4LTY2LjcsNDEuNzQtMjAuMDgsNC43Mi00My41NCw2LTcwLjEyLDMuOTNxMi40LDE3LjgyLDYuNzIsMzcuNTRhOCw4LDAsMCwxLTYuMSw5LjUyLDcuODEsNy44MSwwLDAsMS0xLjcyLjE5LDgsOCwwLDAsMS03LjgxLTYuMjlxLTQuODktMjIuMzYtNy40MS00Mi42Mi0yMC4yMi0yLjUxLTQyLjU4LTcuNDFhOCw4LDAsMCwxLDMuNDMtMTUuNjNxMTkuNyw0LjMyLDM3LjUsNi43M2MtMi4wOS0yNi41Ni0uNzgtNTAsMy45My03MC4wNkM2Niw4My41NSw4MC4wNSw2MS4xLDEwMC44OCw0NiwxMTUsMzUuNzYsMTQwLjEyLDIzLjY0LDE3OS4yNywyNGMyMS4xOS4yMSw0MC44Myw0LjMzLDQzLjgxLDYuMDhhOCw4LDAsMCwxLDIuODMsMi44M2MxLjc1LDMsNS44NywyMi41OSw2LjA4LDQzLjc4QzIzMi4yMSw5OC4zMSwyMjguNTcsMTI5LjQ0LDIxMCwxNTUuMDhabS0yMy43NiwyLjhBMTEyLjA3LDExMi4wNywwLDAsMSw5OC4xMiw2OS43NEM3NS42NCw5NCw2Ni43LDEzMi40Nyw3MS4zNiwxODQuNiwxMjMuNTEsMTg5LjI4LDE2MiwxODAuMzUsMTg2LjI1LDE1Ny44OFpNMjEyLjQ0LDQzLjU2YTE3NS43NSwxNzUuNzUsMCwwLDAtMzkuMjItMy41MWMtMjQuMzQuNjQtNDQuNzEsNi40OS02MC43NiwxNy4zOWE5Niw5NiwwLDAsMCw4Ni4wOSw4Ni4xYzEwLjkxLTE2LDE2Ljc2LTM2LjQyLDE3LjQtNjAuNzZBMTc1LjgyLDE3NS44MiwwLDAsMCwyMTIuNDQsNDMuNTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FishSimple";
export { I as FishSimple };