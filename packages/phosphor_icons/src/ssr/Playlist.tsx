/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Playlist";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg0MEE4LDgsMCwwLDEsMzIsNjRabTgsNzJIMTYwYTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2Wm03Miw0OEg0MGE4LDgsMCwwLDAsMCwxNmg3MmE4LDgsMCwwLDAsMC0xNlptMTM1LjY2LTU3LjdhOCw4LDAsMCwxLTEwLDUuMzZMMjA4LDEyMi43NVYxOTJhMzIuMDUsMzIuMDUsMCwxLDEtMTYtMjcuNjlWMTEyYTgsOCwwLDAsMSwxMC4zLTcuNjZsNDAsMTJBOCw4LDAsMCwxLDI0Ny42NiwxMjYuM1pNMTkyLDE5MmExNiwxNiwwLDEsMC0xNiwxNkExNiwxNiwwLDAsMCwxOTIsMTkyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDQwQTQsNCwwLDAsMSwzNiw2NFptNCw2OEgxNjBhNCw0LDAsMCwwLDAtOEg0MGE0LDQsMCwwLDAsMCw4Wm03Miw1Nkg0MGE0LDQsMCwwLDAsMCw4aDcyYTQsNCwwLDAsMCwwLThabTEzMS44My02Mi44NWE0LDQsMCwwLDEtNSwyLjY4TDIwNCwxMTcuMzhWMTkyYTI4LDI4LDAsMSwxLTgtMTkuNTdWMTEyYTQsNCwwLDAsMSw1LjE1LTMuODNsNDAsMTJBNCw0LDAsMCwxLDI0My44MywxMjUuMTVaTTE5NiwxOTJhMjAsMjAsMCwxLDAtMjAsMjBBMjAsMjAsMCwwLDAsMTk2LDE5MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNCw2NGE2LDYsMCwwLDEsNi02SDIxNmE2LDYsMCwwLDEsMCwxMkg0MEE2LDYsMCwwLDEsMzQsNjRabTYsNzBIMTYwYTYsNiwwLDAsMCwwLTEySDQwYTYsNiwwLDAsMCwwLDEyWm03Miw1Mkg0MGE2LDYsMCwwLDAsMCwxMmg3MmE2LDYsMCwwLDAsMC0xMlptMTMzLjc1LTYwLjI4YTYsNiwwLDAsMS03LjQ4LDRMMjA2LDEyMC4wNlYxOTJhMzAsMzAsMCwxLDEtMTItMjRWMTEyYTYsNiwwLDAsMSw3LjcyLTUuNzVsNDAsMTJBNiw2LDAsMCwxLDI0NS43NSwxMjUuNzJaTTE5NCwxOTJhMTgsMTgsMCwxLDAtMTgsMThBMTgsMTgsMCwwLDAsMTk0LDE5MloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yOCw2NEExMiwxMiwwLDAsMSw0MCw1MkgyMTZhMTIsMTIsMCwwLDEsMCwyNEg0MEExMiwxMiwwLDAsMSwyOCw2NFptMTIsNzZIMTU2YTEyLDEyLDAsMCwwLDAtMjRINDBhMTIsMTIsMCwwLDAsMCwyNFptNjgsNDBINDBhMTIsMTIsMCwwLDAsMCwyNGg2OGExMiwxMiwwLDAsMCwwLTI0Wm0xNDMuNDktNTIuNTVhMTIsMTIsMCwwLDEtMTQuOTQsOEwyMTIsMTI4LjEzVjE5MmEzNiwzNiwwLDEsMS0yNC0zMy45NFYxMTJhMTIsMTIsMCwwLDEsMTUuNDUtMTEuNDlsNDAsMTJBMTIsMTIsMCwwLDEsMjUxLjQ5LDEyNy40NVpNMTg4LDE5MmExMiwxMiwwLDEsMC0xMiwxMkExMiwxMiwwLDAsMCwxODgsMTkyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTY0LDcySDE5MmE4LDgsMCwwLDEsMCwxNkg2NGE4LDgsMCwwLDEsMC0xNlptMCw0OGg3MmE4LDgsMCwwLDEsMCwxNkg2NGE4LDgsMCwwLDEsMC0xNlptNDAsNjRINjRhOCw4LDAsMCwxLDAtMTZoNDBhOCw4LDAsMCwxLDAsMTZabTEwMy41OS01My40N2E4LDgsMCwwLDEtMTAuMTIsNS4wNkwxODQsMTMxLjFWMTc2YTI0LDI0LDAsMSwxLTE2LTIyLjYyVjEyMGE4LDgsMCwwLDEsMTAuNTMtNy41OWwyNCw4QTgsOCwwLDAsMSwyMDcuNTksMTMwLjUzWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTkyYTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDIwMCwxOTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMzIsNjRhOCw4LDAsMCwxLDgtOEgyMTZhOCw4LDAsMCwxLDAsMTZINDBBOCw4LDAsMCwxLDMyLDY0Wm04LDcySDE2MGE4LDgsMCwwLDAsMC0xNkg0MGE4LDgsMCwwLDAsMCwxNlptNzIsNDhINDBhOCw4LDAsMCwwLDAsMTZoNzJhOCw4LDAsMCwwLDAtMTZabTEzNS42Ni01Ny43YTgsOCwwLDAsMS0xMCw1LjM2TDIwOCwxMjIuNzVWMTkyYTMyLjA1LDMyLjA1LDAsMSwxLTE2LTI3LjY5VjExMmE4LDgsMCwwLDEsMTAuMy03LjY2bDQwLDEyQTgsOCwwLDAsMSwyNDcuNjYsMTI2LjNaTTE5MiwxOTJhMTYsMTYsMCwxLDAtMTYsMTZBMTYsMTYsMCwwLDAsMTkyLDE5MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Playlist";
export { I as Playlist };