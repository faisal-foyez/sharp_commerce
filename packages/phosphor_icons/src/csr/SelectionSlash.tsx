/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SelectionSlash";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsNDBhOCw4LDAsMCwxLDgtOGgzMmE4LDgsMCwwLDEsMCwxNkgxMTJBOCw4LDAsMCwxLDEwNCw0MFptNDAsMTY4SDExMmE4LDgsMCwwLDAsMCwxNmgzMmE4LDgsMCwwLDAsMC0xNlpNMjA4LDMySDE4NGE4LDgsMCwwLDAsMCwxNmgyNFY3MmE4LDgsMCwwLDAsMTYsMFY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTgsNzJhOCw4LDAsMCwwLTgsOHYzMmE4LDgsMCwwLDAsMTYsMFYxMTJBOCw4LDAsMCwwLDIxNiwxMDRaTTQwLDE1MmE4LDgsMCwwLDAsOC04VjExMmE4LDgsMCwwLDAtMTYsMHYzMkE4LDgsMCwwLDAsNDAsMTUyWm0zMiw1Nkg0OFYxODRhOCw4LDAsMCwwLTE2LDB2MjRhMTYsMTYsMCwwLDAsMTYsMTZINzJhOCw4LDAsMCwwLDAtMTZaTTUzLjkyLDM0LjYyQTgsOCwwLDEsMCw0Mi4wOCw0NS4zOGwxNjAsMTc2YTgsOCwwLDEsMCwxMS44NC0xMC43NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsNDBhNCw0LDAsMCwxLDQtNGgzMmE0LDQsMCwwLDEsMCw4SDExMkE0LDQsMCwwLDEsMTA4LDQwWm0zNiwxNzJIMTEyYTQsNCwwLDAsMCwwLDhoMzJhNCw0LDAsMCwwLDAtOFpNMjA4LDM2SDE4NGE0LDQsMCwwLDAsMCw4aDI0YTQsNCwwLDAsMSw0LDRWNzJhNCw0LDAsMCwwLDgsMFY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTgsNzJhNCw0LDAsMCwwLTQsNHYzMmE0LDQsMCwwLDAsOCwwVjExMkE0LDQsMCwwLDAsMjE2LDEwOFpNNDAsMTQ4YTQsNCwwLDAsMCw0LTRWMTEyYTQsNCwwLDAsMC04LDB2MzJBNCw0LDAsMCwwLDQwLDE0OFptMzIsNjRINDhhNCw0LDAsMCwxLTQtNFYxODRhNCw0LDAsMCwwLTgsMHYyNGExMiwxMiwwLDAsMCwxMiwxMkg3MmE0LDQsMCwwLDAsMC04Wk01MSwzNy4zMUE0LDQsMCwwLDAsNDUsNDIuNjlsMTYwLDE3NmE0LDQsMCwxLDAsNS45Mi01LjM4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDYsNDBhNiw2LDAsMCwxLDYtNmgzMmE2LDYsMCwwLDEsMCwxMkgxMTJBNiw2LDAsMCwxLDEwNiw0MFptMzgsMTcwSDExMmE2LDYsMCwwLDAsMCwxMmgzMmE2LDYsMCwwLDAsMC0xMlpNMjA4LDM0SDE4NGE2LDYsMCwwLDAsMCwxMmgyNGEyLDIsMCwwLDEsMiwyVjcyYTYsNiwwLDAsMCwxMiwwVjQ4QTE0LDE0LDAsMCwwLDIwOCwzNFptOCw3MmE2LDYsMCwwLDAtNiw2djMyYTYsNiwwLDAsMCwxMiwwVjExMkE2LDYsMCwwLDAsMjE2LDEwNlpNNDAsMTUwYTYsNiwwLDAsMCw2LTZWMTEyYTYsNiwwLDAsMC0xMiwwdjMyQTYsNiwwLDAsMCw0MCwxNTBabTMyLDYwSDQ4YTIsMiwwLDAsMS0yLTJWMTg0YTYsNiwwLDAsMC0xMiwwdjI0YTE0LDE0LDAsMCwwLDE0LDE0SDcyYTYsNiwwLDAsMCwwLTEyWk01Mi40NCwzNkE2LDYsMCwwLDAsNDMuNTYsNDRsMTYwLDE3NmE2LDYsMCwwLDAsOC44OC04LjA4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsNDBhMTIsMTIsMCwwLDEsMTItMTJoMzJhMTIsMTIsMCwwLDEsMCwyNEgxMTJBMTIsMTIsMCwwLDEsMTAwLDQwWm00NCwxNjRIMTEyYTEyLDEyLDAsMCwwLDAsMjRoMzJhMTIsMTIsMCwwLDAsMC0yNFpNMjA4LDI4SDE4NGExMiwxMiwwLDAsMCwwLDI0aDIwVjcyYTEyLDEyLDAsMCwwLDI0LDBWNDhBMjAsMjAsMCwwLDAsMjA4LDI4Wm04LDcyYTEyLDEyLDAsMCwwLTEyLDEydjMyYTEyLDEyLDAsMCwwLDI0LDBWMTEyQTEyLDEyLDAsMCwwLDIxNiwxMDBaTTQwLDE1NmExMiwxMiwwLDAsMCwxMi0xMlYxMTJhMTIsMTIsMCwwLDAtMjQsMHYzMkExMiwxMiwwLDAsMCw0MCwxNTZabTMyLDQ4SDUyVjE4NGExMiwxMiwwLDAsMC0yNCwwdjI0YTIwLDIwLDAsMCwwLDIwLDIwSDcyYTEyLDEyLDAsMCwwLDAtMjRaTTU2Ljg4LDMxLjkzQTEyLDEyLDAsMSwwLDM5LjEyLDQ4LjA3bDE2MCwxNzZhMTIsMTIsMCwwLDAsMTcuNzYtMTYuMTRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE1Miw1NmgzMmExNiwxNiwwLDAsMSwxNiwxNnYzMmE4LDgsMCwwLDEtMTYsMFY3MkgxNTJhOCw4LDAsMCwxLDAtMTZaTTEwNCwyMDBINzJhMTYsMTYsMCwwLDEtMTYtMTZWMTUyYTgsOCwwLDAsMSwxNiwwdjMyaDMyYTgsOCwwLDAsMSwwLDE2Wm0xMDEuNjYsNS42NmE4LDgsMCwwLDEtMTEuMzIsMEwxODguNjksMjAwSDE1MmE4LDgsMCwwLDEsMC0xNmgyMC42OUw3Miw4My4zMVYxMDRhOCw4LDAsMCwxLTE2LDBWNjcuMzFsLTUuNjYtNS42NUE4LDgsMCwwLDEsNjEuNjYsNTAuMzRsOCw4aDBsMTM2LDEzNkE4LDgsMCwwLDEsMjA1LjY2LDIwNS42NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBWMjE2SDQwVjQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEwNCw0MGE4LDgsMCwwLDEsOC04aDMyYTgsOCwwLDAsMSwwLDE2SDExMkE4LDgsMCwwLDEsMTA0LDQwWm00MCwxNjhIMTEyYTgsOCwwLDAsMCwwLDE2aDMyYTgsOCwwLDAsMCwwLTE2Wk0yMDgsMzJIMTg0YTgsOCwwLDAsMCwwLDE2aDI0VjcyYTgsOCwwLDAsMCwxNiwwVjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlptOCw3MmE4LDgsMCwwLDAtOCw4djMyYTgsOCwwLDAsMCwxNiwwVjExMkE4LDgsMCwwLDAsMjE2LDEwNFpNNDAsMTUyYTgsOCwwLDAsMCw4LThWMTEyYTgsOCwwLDAsMC0xNiwwdjMyQTgsOCwwLDAsMCw0MCwxNTJabTMyLDU2SDQ4VjE4NGE4LDgsMCwwLDAtMTYsMHYyNGExNiwxNiwwLDAsMCwxNiwxNkg3MmE4LDgsMCwwLDAsMC0xNlpNNTMuOTIsMzQuNjJBOCw4LDAsMSwwLDQyLjA4LDQ1LjM4bDE2MCwxNzZhOCw4LDAsMSwwLDExLjg0LTEwLjc2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SelectionSlash";
export { I as SelectionSlash };