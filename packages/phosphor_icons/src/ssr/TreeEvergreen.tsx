/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TreeEvergreen";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMzIsMTg3LjA5bC00Ni01OS4wOUgyMDhhOCw4LDAsMCwwLDYuMzQtMTIuODhsLTgwLTEwNGE4LDgsMCwwLDAtMTIuNjgsMGwtODAsMTA0QTgsOCwwLDAsMCw0OCwxMjhINzEuNjRsLTQ2LDU5LjA5QTgsOCwwLDAsMCwzMiwyMDBoODh2NDBhOCw4LDAsMCwwLDE2LDBWMjAwaDg4YTgsOCwwLDAsMCw2LjMyLTEyLjkxWk00OC4zNiwxODRsNDYtNTkuMDlBOCw4LDAsMCwwLDg4LDExMkg2NC4yNUwxMjgsMjkuMTIsMTkxLjc1LDExMkgxNjhhOCw4LDAsMCwwLTYuMzEsMTIuOTFMMjA3LjY0LDE4NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMTYsMTg5LjU0bC01MS02NS41NEgyMDhhNCw0LDAsMCwwLDMuMTctNi40NGwtODAtMTA0YTQsNCwwLDAsMC02LjM0LDBsLTgwLDEwNEE0LDQsMCwwLDAsNDgsMTI0SDc5LjgybC01MSw2NS41NEE0LDQsMCwwLDAsMzIsMTk2aDkydjQ0YTQsNCwwLDAsMCw4LDBWMTk2aDkyYTQsNCwwLDAsMCwzLjE2LTYuNDZaTTQwLjE4LDE4OGw1MS02NS41NEE0LDQsMCwwLDAsODgsMTE2SDU2LjEyTDEyOCwyMi41NiwxOTkuODgsMTE2SDE2OGE0LDQsMCwwLDAtMy4xNiw2LjQ2bDUxLDY1LjU0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNzQsMTg4LjMyLDE4MC4yNywxMjZIMjA4YTYsNiwwLDAsMCw0Ljc2LTkuNjZsLTgwLTEwNGE2LDYsMCwwLDAtOS41MiwwbC04MCwxMDRBNiw2LDAsMCwwLDQ4LDEyNkg3NS43M0wyNy4yNiwxODguMzJBNiw2LDAsMCwwLDMyLDE5OGg5MHY0MmE2LDYsMCwwLDAsMTIsMFYxOThoOTBhNiw2LDAsMCwwLDQuNzQtOS42OFpNNDQuMjcsMTg2bDQ4LjQ3LTYyLjMyQTYsNiwwLDAsMCw4OCwxMTRINjAuMTlMMTI4LDI1Ljg0LDE5NS44MSwxMTRIMTY4YTYsNiwwLDAsMC00Ljc0LDkuNjhMMjExLjczLDE4NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzMuNDcsMTg0LjYzLDE5Mi41NCwxMzJIMjA4YTEyLDEyLDAsMCwwLDkuNTEtMTkuMzJsLTgwLTEwNGExMiwxMiwwLDAsMC0xOSwwbC04MCwxMDRBMTIsMTIsMCwwLDAsNDgsMTMySDYzLjQ2TDIyLjUzLDE4NC42M0ExMiwxMiwwLDAsMCwzMiwyMDRoODR2MzZhMTIsMTIsMCwwLDAsMjQsMFYyMDRoODRhMTIsMTIsMCwwLDAsOS40Ny0xOS4zN1pNNTYuNTQsMTgwbDQwLjkzLTUyLjYzQTEyLDEyLDAsMCwwLDg4LDEwOEg3Mi4zN0wxMjgsMzUuNjgsMTgzLjYzLDEwOEgxNjhhMTIsMTIsMCwwLDAtOS40NywxOS4zN0wxOTkuNDYsMTgwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuMTksMTk1LjUxQTgsOCwwLDAsMSwyMjQsMjAwSDEzNnY0MGE4LDgsMCwwLDEtMTYsMFYyMDBIMzJhOCw4LDAsMCwxLTYuMzEtMTIuOTFsNDYtNTkuMDlINDhhOCw4LDAsMCwxLTYuMzQtMTIuODhsODAtMTA0YTgsOCwwLDAsMSwxMi42OCwwbDgwLDEwNEE4LDgsMCwwLDEsMjA4LDEyOEgxODQuMzZsNDUuOTUsNTkuMDlBOCw4LDAsMCwxLDIzMS4xOSwxOTUuNTFaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiwxOTJsNTYtNzJINDhMMTI4LDE2bDgwLDEwNEgxNjhsNTYsNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMwLjMxLDE4Ny4wOSwxODQuMzYsMTI4SDIwOGE4LDgsMCwwLDAsNi4zNC0xMi44OGwtODAtMTA0YTgsOCwwLDAsMC0xMi42OCwwbC04MCwxMDRBOCw4LDAsMCwwLDQ4LDEyOEg3MS42NEwyNS42OSwxODcuMDlBOCw4LDAsMCwwLDMyLDIwMGg4OHY0MGE4LDgsMCwwLDAsMTYsMFYyMDBoODhhOCw4LDAsMCwwLDYuMzEtMTIuOTFaTTQ4LjM2LDE4NGw0Ni01OS4wOUE4LDgsMCwwLDAsODgsMTEySDY0LjI1TDEyOCwyOS4xMiwxOTEuNzUsMTEySDE2OGE4LDgsMCwwLDAtNi4zMSwxMi45MUwyMDcuNjQsMTg0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TreeEvergreen";
export { I as TreeEvergreen };