/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ClockClockwise";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsODB2NDMuNDdsMzYuMTIsMjEuNjdhOCw4LDAsMCwxLTguMjQsMTMuNzJsLTQwLTI0QTgsOCwwLDAsMSwxMjAsMTI4VjgwYTgsOCwwLDAsMSwxNiwwWm04OC0yNGE4LDgsMCwwLDAtOCw4VjgyYy02LjM1LTcuMzYtMTIuODMtMTQuNDUtMjAuMTItMjEuODNhOTYsOTYsMCwxLDAtMiwxMzcuNyw4LDgsMCwwLDAtMTEtMTEuNjRBODAsODAsMCwxLDEsMTg0LjU0LDcxLjRDMTkyLjY4LDc5LjY0LDE5OS44MSw4Ny41OCwyMDcsOTZIMTg0YTgsOCwwLDAsMCwwLDE2aDQwYTgsOCwwLDAsMCw4LThWNjRBOCw4LDAsMCwwLDIyNCw1NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzIsODB2NDUuNzRsMzguMDYsMjIuODNhNCw0LDAsMCwxLTQuMTIsNi44NmwtNDAtMjRBNCw0LDAsMCwxLDEyNCwxMjhWODBhNCw0LDAsMCwxLDgsMFptOTItMjBhNCw0LDAsMCwwLTQsNFY5Mi44NUMyMTEuMzMsODIuNDYsMjAzLDczLDE5My4wNSw2M2E5Miw5MiwwLDEsMC0xLjksMTMyLDQsNCwwLDAsMC01LjUtNS44Miw4NCw4NCwwLDEsMSwxLjczLTEyMC41QzE5Ny43LDc5LDIwNi4zOSw4OSwyMTUuNTMsMTAwSDE4NGE0LDQsMCwwLDAsMCw4aDQwYTQsNCwwLDAsMCw0LTRWNjRBNCw0LDAsMCwwLDIyNCw2MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzQsODB2NDQuNmwzNy4wOSwyMi4yNWE2LDYsMCwwLDEtNi4xOCwxMC4zbC00MC0yNEE2LDYsMCwwLDEsMTIyLDEyOFY4MGE2LDYsMCwwLDEsMTIsMFptOTAtMjJhNiw2LDAsMCwwLTYsNlY4Ny4zNmMtNy40OC04LjgzLTE0Ljk0LTE3LjEzLTIzLjUzLTI1LjgzYTk0LDk0LDAsMSwwLTEuOTUsMTM0LjgzLDYsNiwwLDAsMC04LjI0LTguNzJBODIsODIsMCwxLDEsMTg2LDcwYzkuMjQsOS4zNiwxNy4xOCwxOC4zLDI1LjMxLDI4SDE4NGE2LDYsMCwwLDAsMCwxMmg0MGE2LDYsMCwwLDAsNi02VjY0QTYsNiwwLDAsMCwyMjQsNThaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsODB2NDEuMjFsMzQuMTcsMjAuNWExMiwxMiwwLDEsMS0xMi4zNCwyMC41OGwtNDAtMjRBMTIsMTIsMCwwLDEsMTE2LDEyOFY4MGExMiwxMiwwLDAsMSwyNCwwWm04NC0yOGExMiwxMiwwLDAsMC0xMiwxMnY3LjM3Yy00LjIxLTQuNjctOC41OC05LjMxLTEzLjI5LTE0LjA4YTEwMCwxMDAsMCwxLDAtMi4wNywxNDMuNDQsMTIsMTIsMCwwLDAtMTYuNDgtMTcuNDYsNzYsNzYsMCwxLDEsMS41My0xMDkuMDZDMTg3LjYxLDgwLjIsMTkzLDg2LDE5OC4yMyw5MkgxODRhMTIsMTIsMCwwLDAsMCwyNGg0MGExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwyMjQsNTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsODB2NDMuNDdsMzYuMTIsMjEuNjdhOCw4LDAsMCwxLTguMjQsMTMuNzJsLTQwLTI0QTgsOCwwLDAsMSwxMjAsMTI4VjgwYTgsOCwwLDAsMSwxNiwwWm05MS4wNi0yMy4zOWE4LDgsMCwwLDAtOC43MiwxLjczTDIwNiw3MC43MWMtMy4yMy0zLjUxLTYuNTYtNy0xMC4xLTEwLjU5YTk2LDk2LDAsMSwwLTIsMTM3LjcsOCw4LDAsMCwwLTExLTExLjY0QTgwLDgwLDAsMSwxLDE4NC41NCw3MS40YzMuNTQsMy41OCw2Ljg3LDcuMSwxMC4xMSwxMC42M0wxNzguMzQsOTguMzRBOCw4LDAsMCwwLDE4NCwxMTJoNDBhOCw4LDAsMCwwLDgtOFY2NEE4LDgsMCwwLDAsMjI3LjA2LDU2LjYxWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4YTg4LDg4LDAsMSwxLTg4LTg4QTg4LDg4LDAsMCwxLDIxNiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTM2LDgwdjQzLjQ3bDM2LjEyLDIxLjY3YTgsOCwwLDAsMS04LjI0LDEzLjcybC00MC0yNEE4LDgsMCwwLDEsMTIwLDEyOFY4MGE4LDgsMCwwLDEsMTYsMFptODgtMjRhOCw4LDAsMCwwLTgsOFY4MmMtNi4zNS03LjM2LTEyLjgzLTE0LjQ1LTIwLjEyLTIxLjgzYTk2LDk2LDAsMSwwLTIsMTM3LjcsOCw4LDAsMCwwLTExLTExLjY0QTgwLDgwLDAsMSwxLDE4NC41NCw3MS40QzE5Mi42OCw3OS42NCwxOTkuODEsODcuNTgsMjA3LDk2SDE4NGE4LDgsMCwwLDAsMCwxNmg0MGE4LDgsMCwwLDAsOC04VjY0QTgsOCwwLDAsMCwyMjQsNTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ClockClockwise";
export { I as ClockClockwise };