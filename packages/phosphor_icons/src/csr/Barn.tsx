/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Barn";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTkyaC04VjEzMC41N2wxLjQ5LDIuMDhhOCw4LDAsMSwwLDEzLTkuM2wtNDAtNTZhOCw4LDAsMCwwLTItMS45NEwxMzcsMTguNzdsLS4xLS4wN2ExNiwxNiwwLDAsMC0xNy43NiwwbC0uMS4wN0w1MS40NSw2NS40MmE4LDgsMCwwLDAtMiwxLjk0bC00MCw1NmE4LDgsMCwxLDAsMTMsOS4zTDI0LDEzMC41N1YxOTJIMTZhOCw4LDAsMCwwLDAsMTZIMjQwYTgsOCwwLDAsMCwwLTE2Wk00MCwxMDguMTcsNjEuNyw3Ny43OSwxMjgsMzJsNjYuMyw0NS43OEwyMTYsMTA4LjE3VjE5MkgxOTJWMTIwYTgsOCwwLDAsMC04LThINzJhOCw4LDAsMCwwLTgsOHY3Mkg0MFptODgsNDJMOTcsMTI4SDE1OVptNDgtMTQuNjJ2NDguOTFMMTQxLjc2LDE2MFpNMTE0LjI0LDE2MCw4MCwxODQuNDZWMTM1LjU1Wk0xMjgsMTY5LjgzLDE1OSwxOTJIOTdaTTEwNCw4OGE4LDgsMCwwLDEsOC04aDMyYTgsOCwwLDEsMSwwLDE2SDExMkE4LDgsMCwwLDEsMTA0LDg4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTk2SDIyOFYxMTguMDhsOC43NCwxMi4yNUE0LDQsMCwwLDAsMjQwLDEzMmE0LDQsMCwwLDAsMy4yNS02LjMybC00MC01NmEzLjc3LDMuNzcsMCwwLDAtMS0xTDEzNC42NiwyMmExMiwxMiwwLDAsMC0xMy4zNywwTDUzLjczLDY4LjcxYTMuNzcsMy43NywwLDAsMC0xLDFsLTQwLDU2YTQsNCwwLDEsMCw2LjUxLDQuNjVMMjgsMTE4LjA4VjE5NkgxNmE0LDQsMCwwLDAsMCw4SDI0MGE0LDQsMCwwLDAsMC04Wk0zNiwxMDYuODhsMjIuODUtMzIsNjYuOTMtNDYuMjNhNCw0LDAsMCwxLDQuMzgsMGw2Nyw0Ni4yNiwyMi44NSwzMlYxOTZIMTg4VjEyMGE0LDQsMCwwLDAtNC00SDcyYTQsNCwwLDAsMC00LDR2NzZIMzZabTkyLDQ4LjJMODQuNDgsMTI0aDg3Wm01Mi0yNy4zMXY2NC40NkwxMzQuODgsMTYwWk0xMjEuMTIsMTYwLDc2LDE5Mi4yM1YxMjcuNzdabTYuODgsNC45MkwxNzEuNTIsMTk2aC04N1pNMTA4LDg4YTQsNCwwLDAsMSw0LTRoMzJhNCw0LDAsMCwxLDAsOEgxMTJBNCw0LDAsMCwxLDEwOCw4OFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTk0SDIzMFYxMjQuMzJsNS4xMiw3LjE3YTYsNiwwLDEsMCw5Ljc2LTdsLTQwLTU2YTYuMTQsNi4xNCwwLDAsMC0xLjQ3LTEuNDVMMTM1Ljc3LDIwLjM1YTE0LDE0LDAsMCwwLTE1LjYyLjA2TDUyLjU5LDY3LjA2YTYuMTQsNi4xNCwwLDAsMC0xLjQ3LDEuNDVsLTQwLDU2YTYsNiwwLDEsMCw5Ljc2LDdMMjYsMTI0LjMyVjE5NEgxNmE2LDYsMCwwLDAsMCwxMkgyNDBhNiw2LDAsMCwwLDAtMTJaTTM4LDEwNy41Miw2MC4yNyw3Ni4zNGw2Ni42Mi00NmEyLDIsMCwwLDEsMi4xNC0uMDZsNjYuNyw0Ni4wNkwyMTgsMTA3LjUyVjE5NEgxOTBWMTIwYTYsNiwwLDAsMC02LTZINzJhNiw2LDAsMCwwLTYsNnY3NEgzOFptOTAsNDUuMTFMOTAuNzIsMTI2aDc0LjU2Wm01MC0yMXY1Ni42OEwxMzguMzIsMTYwWk0xMTcuNjgsMTYwLDc4LDE4OC4zNFYxMzEuNjZaTTEyOCwxNjcuMzcsMTY1LjI4LDE5NEg5MC43MlpNMTA2LDg4YTYsNiwwLDAsMSw2LTZoMzJhNiw2LDAsMCwxLDAsMTJIMTEyQTYsNiwwLDAsMSwxMDYsODhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsODRhMTIsMTIsMCwwLDEsMTItMTJoMzJhMTIsMTIsMCwwLDEsMCwyNEgxMTJBMTIsMTIsMCwwLDEsMTAwLDg0Wk0yNTIsMjAwYTEyLDEyLDAsMCwxLTEyLDEySDE2YTEyLDEyLDAsMCwxLDAtMjRoNFYxMzkuMzFBMTIsMTIsMCwwLDEsNi4yNCwxMjFsNDAtNTZhMTEuOTEsMTEuOTEsMCwwLDEsMi45NC0yLjlsNjcuNTYtNDYuNjUuMTctLjExYTE5Ljk0LDE5Ljk0LDAsMCwxLDIyLjE4LDBsLjE3LjExLDY3LjU2LDQ2LjY1YTExLjkxLDExLjkxLDAsMCwxLDIuOTQsMi45bDQwLDU2QTEyLDEyLDAsMCwxLDIzNiwxMzkuMzFWMTg4aDRBMTIsMTIsMCwwLDEsMjUyLDIwMFpNNDQsMTg4SDY0VjEyNGExMiwxMiwwLDAsMSwxMi0xMkgxODBhMTIsMTIsMCwwLDEsMTIsMTJ2NjRoMjBWMTA5LjQ1TDE5MS40NSw4MC42OSwxMjgsMzYuODcsNjQuNTUsODAuNjksNDQsMTA5LjQ1Wm0xMjQtNTJIMTEzLjlMMTY4LDE3NC4wN1pNODgsMTg4aDU4LjFMODgsMTQ3LjEyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTkyaC04VjEzMC41N2wxLjQ5LDIuMDhhOCw4LDAsMSwwLDEzLTkuM2wtNDAtNTZhOCw4LDAsMCwwLTItMS45NEwxMzcsMTguNzdsLS4xLS4wN2ExNiwxNiwwLDAsMC0xNy43NiwwbC0uMS4wN0w1MS40NSw2NS40MmE4LDgsMCwwLDAtMiwxLjk0bC00MCw1NmE4LDgsMCwxLDAsMTMsOS4zTDI0LDEzMC41N1YxOTJIMTZhOCw4LDAsMCwwLDAsMTZIMjQwYTgsOCwwLDAsMCwwLTE2Wk0xMTIsODBoMzJhOCw4LDAsMSwxLDAsMTZIMTEyYTgsOCwwLDEsMSwwLTE2Wm01Mi42NCw0MEwxMjgsMTQ2LjE3LDkxLjM2LDEyMFpNNzIsMTI1LjgzLDExNC4yNCwxNTYsNzIsMTg2LjE3Wk05MS4zNiwxOTIsMTI4LDE2NS44MywxNjQuNjQsMTkyWk0xODQsMTg2LjE3LDE0MS43NiwxNTYsMTg0LDEyNS44M1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTIwdjgwSDcyVjEyMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDAsMTkyaC04VjEzMC41N2wxLjQ5LDIuMDhhOCw4LDAsMSwwLDEzLTkuM2wtNDAtNTZhOCw4LDAsMCwwLTItMS45NEwxMzcsMTguNzdsLS4xLS4wN2ExNiwxNiwwLDAsMC0xNy43NiwwbC0uMS4wN0w1MS40NSw2NS40MmE4LDgsMCwwLDAtMiwxLjk0bC00MCw1NmE4LDgsMCwxLDAsMTMsOS4zTDI0LDEzMC41N1YxOTJIMTZhOCw4LDAsMCwwLDAsMTZIMjQwYTgsOCwwLDAsMCwwLTE2Wk00MCwxMDguMTcsNjEuNyw3Ny43OSwxMjgsMzJsNjYuMyw0NS43OEwyMTYsMTA4LjE3VjE5MkgxOTJWMTIwYTgsOCwwLDAsMC04LThINzJhOCw4LDAsMCwwLTgsOHY3Mkg0MFptODgsNDJMOTcsMTI4SDE1OVptNDgtMTQuNjJ2NDguOTFMMTQxLjc2LDE2MFpNMTE0LjI0LDE2MCw4MCwxODQuNDZWMTM1LjU1Wk0xMjgsMTY5LjgzLDE1OSwxOTJIOTdaTTEwNCw4OGE4LDgsMCwwLDEsOC04aDMyYTgsOCwwLDEsMSwwLDE2SDExMkE4LDgsMCwwLDEsMTA0LDg4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Barn";
export { I as Barn };