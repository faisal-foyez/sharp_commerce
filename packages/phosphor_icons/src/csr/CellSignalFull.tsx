/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/CellSignalFull";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNzJWMjAwYTgsOCwwLDAsMS0xNiwwVjcyYTgsOCwwLDAsMSwxNiwwWm0zMi00OGE4LDgsMCwwLDAtOCw4VjIwMGE4LDgsMCwwLDAsMTYsMFYzMkE4LDgsMCwwLDAsMjAwLDI0Wm0tODAsODBhOCw4LDAsMCwwLTgsOHY4OGE4LDgsMCwwLDAsMTYsMFYxMTJBOCw4LDAsMCwwLDEyMCwxMDRaTTgwLDE0NGE4LDgsMCwwLDAtOCw4djQ4YTgsOCwwLDAsMCwxNiwwVjE1MkE4LDgsMCwwLDAsODAsMTQ0Wk00MCwxODRhOCw4LDAsMCwwLTgsOHY4YTgsOCwwLDAsMCwxNiwwdi04QTgsOCwwLDAsMCw0MCwxODRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzJWMjAwYTQsNCwwLDAsMS04LDBWNzJhNCw0LDAsMCwxLDgsMFptMzYtNDRhNCw0LDAsMCwwLTQsNFYyMDBhNCw0LDAsMCwwLDgsMFYzMkE0LDQsMCwwLDAsMjAwLDI4Wm0tODAsODBhNCw0LDAsMCwwLTQsNHY4OGE0LDQsMCwwLDAsOCwwVjExMkE0LDQsMCwwLDAsMTIwLDEwOFpNODAsMTQ4YTQsNCwwLDAsMC00LDR2NDhhNCw0LDAsMCwwLDgsMFYxNTJBNCw0LDAsMCwwLDgwLDE0OFpNNDAsMTg4YTQsNCwwLDAsMC00LDR2OGE0LDQsMCwwLDAsOCwwdi04QTQsNCwwLDAsMCw0MCwxODhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYsNzJWMjAwYTYsNiwwLDAsMS0xMiwwVjcyYTYsNiwwLDAsMSwxMiwwWm0zNC00NmE2LDYsMCwwLDAtNiw2VjIwMGE2LDYsMCwwLDAsMTIsMFYzMkE2LDYsMCwwLDAsMjAwLDI2Wm0tODAsODBhNiw2LDAsMCwwLTYsNnY4OGE2LDYsMCwwLDAsMTIsMFYxMTJBNiw2LDAsMCwwLDEyMCwxMDZaTTgwLDE0NmE2LDYsMCwwLDAtNiw2djQ4YTYsNiwwLDAsMCwxMiwwVjE1MkE2LDYsMCwwLDAsODAsMTQ2Wk00MCwxODZhNiw2LDAsMCwwLTYsNnY4YTYsNiwwLDAsMCwxMiwwdi04QTYsNiwwLDAsMCw0MCwxODZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNzJWMjAwYTEyLDEyLDAsMCwxLTI0LDBWNzJhMTIsMTIsMCwwLDEsMjQsMFptMjgtNTJhMTIsMTIsMCwwLDAtMTIsMTJWMjAwYTEyLDEyLDAsMCwwLDI0LDBWMzJBMTIsMTIsMCwwLDAsMjAwLDIwWm0tODAsODBhMTIsMTIsMCwwLDAtMTIsMTJ2ODhhMTIsMTIsMCwwLDAsMjQsMFYxMTJBMTIsMTIsMCwwLDAsMTIwLDEwMFpNODAsMTQwYTEyLDEyLDAsMCwwLTEyLDEydjQ4YTEyLDEyLDAsMCwwLDI0LDBWMTUyQTEyLDEyLDAsMCwwLDgwLDE0MFpNNDAsMTgwYTEyLDEyLDAsMCwwLTEyLDEydjhhMTIsMTIsMCwwLDAsMjQsMHYtOEExMiwxMiwwLDAsMCw0MCwxODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDMyQTE2LDE2LDAsMCwxLDIwLjcsMTg4LjY4bDE2MC0xNjBBMTYsMTYsMCwwLDEsMjA4LDQwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBWMjAwYTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTUuNjYtMTMuNjZsMTYwLTE2MEE4LDgsMCwwLDEsMjAwLDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE5OC4xMiwyNS4yM2ExNiwxNiwwLDAsMC0xNy40NCwzLjQ2bC0xNjAsMTYwQTE2LDE2LDAsMCwwLDMyLDIxNkgxOTJhMTYsMTYsMCwwLDAsMTYtMTZWNDBBMTUuOTQsMTUuOTQsMCwwLDAsMTk4LjEyLDI1LjIzWk0xOTIsMjAwSDMyTDE5Miw0MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CellSignalFull";
export { I as CellSignalFull };