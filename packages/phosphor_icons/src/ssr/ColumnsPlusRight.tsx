/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ColumnsPlusRight";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwzMkg1NkExNiwxNiwwLDAsMCw0MCw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIODBhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsODAsMzJabTAsMTc2SDU2VjQ4SDgwWk0xNTIsMzJIMTI4YTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmgyNGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwxNTIsMzJabTAsMTc2SDEyOFY0OGgyNFptOTYtODBhOCw4LDAsMCwxLTgsOEgyMjR2MTZhOCw4LDAsMCwxLTE2LDBWMTM2SDE5MmE4LDgsMCwwLDEsMC0xNmgxNlYxMDRhOCw4LDAsMCwxLDE2LDB2MTZoMTZBOCw4LDAsMCwxLDI0OCwxMjhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwzNkg1NkExMiwxMiwwLDAsMCw0NCw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIODBhMTIsMTIsMCwwLDAsMTItMTJWNDhBMTIsMTIsMCwwLDAsODAsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDgwYTQsNCwwLDAsMSw0LDRaTTE1MiwzNkgxMjhhMTIsMTIsMCwwLDAtMTIsMTJWMjA4YTEyLDEyLDAsMCwwLDEyLDEyaDI0YTEyLDEyLDAsMCwwLDEyLTEyVjQ4QTEyLDEyLDAsMCwwLDE1MiwzNlptNCwxNzJhNCw0LDAsMCwxLTQsNEgxMjhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00aDI0YTQsNCwwLDAsMSw0LDRabTg4LTgwYTQsNCwwLDAsMS00LDRIMjIwdjIwYTQsNCwwLDAsMS04LDBWMTMySDE5MmE0LDQsMCwwLDEsMC04aDIwVjEwNGE0LDQsMCwwLDEsOCwwdjIwaDIwQTQsNCwwLDAsMSwyNDQsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwzNEg1NkExNCwxNCwwLDAsMCw0Miw0OFYyMDhhMTQsMTQsMCwwLDAsMTQsMTRIODBhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsODAsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINTZhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDgwYTIsMiwwLDAsMSwyLDJaTTE1MiwzNEgxMjhhMTQsMTQsMCwwLDAtMTQsMTRWMjA4YTE0LDE0LDAsMCwwLDE0LDE0aDI0YTE0LDE0LDAsMCwwLDE0LTE0VjQ4QTE0LDE0LDAsMCwwLDE1MiwzNFptMiwxNzRhMiwyLDAsMCwxLTIsMkgxMjhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0yaDI0YTIsMiwwLDAsMSwyLDJabTkyLTgwYTYsNiwwLDAsMS02LDZIMjIydjE4YTYsNiwwLDAsMS0xMiwwVjEzNEgxOTJhNiw2LDAsMCwxLDAtMTJoMThWMTA0YTYsNiwwLDAsMSwxMiwwdjE4aDE4QTYsNiwwLDAsMSwyNDYsMTI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwyOEg1NkEyMCwyMCwwLDAsMCwzNiw0OFYyMDhhMjAsMjAsMCwwLDAsMjAsMjBIODBhMjAsMjAsMCwwLDAsMjAtMjBWNDhBMjAsMjAsMCwwLDAsODAsMjhaTTc2LDIwNEg2MFY1Mkg3NlpNMTU2LDI4SDEzMmEyMCwyMCwwLDAsMC0yMCwyMFYyMDhhMjAsMjAsMCwwLDAsMjAsMjBoMjRhMjAsMjAsMCwwLDAsMjAtMjBWNDhBMjAsMjAsMCwwLDAsMTU2LDI4Wm0tNCwxNzZIMTM2VjUyaDE2Wm0xMDAtNzZhMTIsMTIsMCwwLDEtMTIsMTJoLTh2OGExMiwxMiwwLDAsMS0yNCwwdi04aC04YTEyLDEyLDAsMCwxLDAtMjRoOHYtOGExMiwxMiwwLDAsMSwyNCwwdjhoOEExMiwxMiwwLDAsMSwyNTIsMTI4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Niw0OFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNTYsMzJIODBBMTYsMTYsMCwwLDEsOTYsNDhabTU2LTE2SDEyOGExNiwxNiwwLDAsMC0xNiwxNlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMTUyLDMyWm04OCw4OEgyMjRWMTA0YTgsOCwwLDAsMC0xNiwwdjE2SDE5MmE4LDgsMCwwLDAsMCwxNmgxNnYxNmE4LDgsMCwwLDAsMTYsMFYxMzZoMTZhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw0OFYyMDhhOCw4LDAsMCwxLTgsOEg1NmE4LDgsMCwwLDEtOC04VjQ4YTgsOCwwLDAsMSw4LThIODBBOCw4LDAsMCwxLDg4LDQ4Wm02NC04SDEyOGE4LDgsMCwwLDAtOCw4VjIwOGE4LDgsMCwwLDAsOCw4aDI0YTgsOCwwLDAsMCw4LThWNDhBOCw4LDAsMCwwLDE1Miw0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik04MCwzMkg1NkExNiwxNiwwLDAsMCw0MCw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIODBhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsODAsMzJabTAsMTc2SDU2VjQ4SDgwWk0xNTIsMzJIMTI4YTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmgyNGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwxNTIsMzJabTAsMTc2SDEyOFY0OGgyNFptOTYtODBhOCw4LDAsMCwxLTgsOEgyMjR2MTZhOCw4LDAsMCwxLTE2LDBWMTM2SDE5MmE4LDgsMCwwLDEsMC0xNmgxNlYxMDRhOCw4LDAsMCwxLDE2LDB2MTZoMTZBOCw4LDAsMCwxLDI0OCwxMjhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ColumnsPlusRight";
export { I as ColumnsPlusRight };