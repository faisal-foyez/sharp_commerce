/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Cylinder";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTZDODcuNjMsMTYsNTYsMzUuMzMsNTYsNjBWMTk2YzAsMjQuNjcsMzEuNjMsNDQsNzIsNDRzNzItMTkuMzMsNzItNDRWNjBDMjAwLDM1LjMzLDE2OC4zNywxNiwxMjgsMTZabTAsMTZjMjYuNDksMCw1NiwxMS41LDU2LDI4cy0yOS41MSwyOC01NiwyOFM3Miw3Ni41LDcyLDYwLDEwMS41MSwzMiwxMjgsMzJabTAsMTkyYy0yOS44MywwLTU2LTEzLjA4LTU2LTI4Vjg4YzEzLjEsOS44NSwzMy4xNCwxNiw1NiwxNnM0Mi45LTYuMiw1Ni0xNlYxOTZDMTg0LDIxMC45MiwxNTcuODMsMjI0LDEyOCwyMjRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBDODkuODcsMjAsNjAsMzcuNTcsNjAsNjBWMTk2YzAsMjIuNDMsMjkuODcsNDAsNjgsNDBzNjgtMTcuNTcsNjgtNDBWNjBDMTk2LDM3LjU3LDE2Ni4xMywyMCwxMjgsMjBabTAsOGMzMi41MiwwLDYwLDE0LjY1LDYwLDMycy0yNy40OCwzMi02MCwzMlM2OCw3Ny4zNSw2OCw2MCw5NS40OCwyOCwxMjgsMjhabTYwLDE2OGMwLDE3LjM1LTI3LjQ4LDMyLTYwLDMycy02MC0xNC42NS02MC0zMlY3OS4xMUM3OS4zNSw5MS42NSwxMDEuNzEsMTAwLDEyOCwxMDBzNDguNjUtOC4zNSw2MC0yMC44OVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMThDODguNzUsMTgsNTgsMzYuNDUsNTgsNjBWMTk2YzAsMjMuNTUsMzAuNzUsNDIsNzAsNDJzNzAtMTguNDUsNzAtNDJWNjBDMTk4LDM2LjQ1LDE2Ny4yNSwxOCwxMjgsMThabTAsMTJjMzEuNDQsMCw1OCwxMy43NCw1OCwzMHMtMjYuNTYsMzAtNTgsMzBTNzAsNzYuMjYsNzAsNjAsOTYuNTYsMzAsMTI4LDMwWm0wLDE5NmMtMzEuNDQsMC01OC0xMy43NC01OC0zMFY4My44MUM4Mi40OCw5NC44NywxMDMuNTksMTAyLDEyOCwxMDJzNDUuNTItNy4xMyw1OC0xOC4xOVYxOTZDMTg2LDIxMi4yNiwxNTkuNDQsMjI2LDEyOCwyMjZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzkuMTQsMjQuMDhDMTY1LjI4LDE2LjI5LDE0Ny4xMiwxMiwxMjgsMTJTOTAuNzIsMTYuMjksNzYuODYsMjQuMDhDNjAuODMsMzMuMSw1Miw0NS44Niw1Miw2MFYxOTZjMCwxNC4xNCw4LjgzLDI2LjksMjQuODYsMzUuOTJDOTAuNzIsMjM5LjcxLDEwOC44OCwyNDQsMTI4LDI0NHMzNy4yOC00LjI5LDUxLjE0LTEyLjA4YzE2LTksMjQuODYtMjEuNzgsMjQuODYtMzUuOTJWNjBDMjA0LDQ1Ljg2LDE5NS4xNywzMy4xLDE3OS4xNCwyNC4wOFpNODguNjMsNDVjMTAuMTctNS43MiwyNC41Mi05LDM5LjM3LTlzMjkuMiwzLjI4LDM5LjM3LDljOCw0LjUyLDEyLjYzLDEwLDEyLjYzLDE1cy00LjYsMTAuNDgtMTIuNjMsMTVjLTEwLjE3LDUuNzItMjQuNTIsOS0zOS4zNyw5cy0yOS4yLTMuMjgtMzkuMzctOUM4MC42LDcwLjQ4LDc2LDY1LDc2LDYwUzgwLjYsNDkuNTIsODguNjMsNDVabTc4Ljc0LDE2NmMtMTAuMTcsNS43Mi0yNC41Miw5LTM5LjM3LDlzLTI5LjItMy4yOC0zOS4zNy05QzgwLjYsMjA2LjQ4LDc2LDIwMSw3NiwxOTZWOTUuNGwuODYuNTJDOTAuNzIsMTAzLjcxLDEwOC44OCwxMDgsMTI4LDEwOHMzNy4yOC00LjI5LDUxLjE0LTEyLjA4bC44Ni0uNTJWMTk2QzE4MCwyMDEsMTc1LjQsMjA2LjQ4LDE2Ny4zNywyMTFaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTZDODcuNjMsMTYsNTYsMzUuMzMsNTYsNjBWMTk2YzAsMjQuNjcsMzEuNjMsNDQsNzIsNDRzNzItMTkuMzMsNzItNDRWNjBDMjAwLDM1LjMzLDE2OC4zNywxNiwxMjgsMTZabTAsMjA4Yy0yOS44MywwLTU2LTEzLjA4LTU2LTI4Vjc3LjQzQzgyLjkyLDg4LjUsMTAzLjksOTYsMTI4LDk2czQ1LjA4LTcuNSw1Ni0xOC41N1YxOTZDMTg0LDIxMC45MiwxNTcuODMsMjI0LDEyOCwyMjRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNjBjMCwxOS44OC0yOC42NSwzNi02NCwzNlM2NCw3OS44OCw2NCw2MHMyOC42NS0zNiw2NC0zNlMxOTIsNDAuMTIsMTkyLDYwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwxNkM4Ny42MywxNiw1NiwzNS4zMyw1Niw2MFYxOTZjMCwyNC42NywzMS42Myw0NCw3Miw0NHM3Mi0xOS4zMyw3Mi00NFY2MEMyMDAsMzUuMzMsMTY4LjM3LDE2LDEyOCwxNlptMCwxNmMyNi40OSwwLDU2LDExLjUsNTYsMjhzLTI5LjUxLDI4LTU2LDI4UzcyLDc2LjUsNzIsNjAsMTAxLjUxLDMyLDEyOCwzMlptMCwxOTJjLTI5LjgzLDAtNTYtMTMuMDgtNTYtMjhWODhjMTMuMSw5Ljg1LDMzLjE0LDE2LDU2LDE2czQyLjktNi4yLDU2LTE2VjE5NkMxODQsMjEwLjkyLDE1Ny44MywyMjQsMTI4LDIyNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Cylinder";
export { I as Cylinder };