/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CurrencyDollarSimple";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTY4YTQ4LjA1LDQ4LjA1LDAsMCwxLTQ4LDQ4SDEzNnYxNmE4LDgsMCwwLDEtMTYsMFYyMTZIMTA0YTQ4LjA1LDQ4LjA1LDAsMCwxLTQ4LTQ4LDgsOCwwLDAsMSwxNiwwLDMyLDMyLDAsMCwwLDMyLDMyaDQ4YTMyLDMyLDAsMCwwLDAtNjRIMTEyYTQ4LDQ4LDAsMCwxLDAtOTZoOFYyNGE4LDgsMCwwLDEsMTYsMFY0MGg4YTQ4LjA1LDQ4LjA1LDAsMCwxLDQ4LDQ4LDgsOCwwLDAsMS0xNiwwLDMyLDMyLDAsMCwwLTMyLTMySDExMmEzMiwzMiwwLDAsMCwwLDY0aDQwQTQ4LjA1LDQ4LjA1LDAsMCwxLDIwMCwxNjhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTY4YTQ0LjA1LDQ0LjA1LDAsMCwxLTQ0LDQ0SDEzMnYyMGE0LDQsMCwwLDEtOCwwVjIxMkgxMDRhNDQuMDUsNDQuMDUsMCwwLDEtNDQtNDQsNCw0LDAsMCwxLDgsMCwzNiwzNiwwLDAsMCwzNiwzNmg0OGEzNiwzNiwwLDAsMCwwLTcySDExMmE0NCw0NCwwLDAsMSwwLTg4aDEyVjI0YTQsNCwwLDAsMSw4LDBWNDRoMTJhNDQuMDUsNDQuMDUsMCwwLDEsNDQsNDQsNCw0LDAsMCwxLTgsMCwzNiwzNiwwLDAsMC0zNi0zNkgxMTJhMzYsMzYsMCwwLDAsMCw3Mmg0MEE0NC4wNSw0NC4wNSwwLDAsMSwxOTYsMTY4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTgsMTY4YTQ2LjA2LDQ2LjA2LDAsMCwxLTQ2LDQ2SDEzNHYxOGE2LDYsMCwwLDEtMTIsMFYyMTRIMTA0YTQ2LjA2LDQ2LjA2LDAsMCwxLTQ2LTQ2LDYsNiwwLDAsMSwxMiwwLDM0LDM0LDAsMCwwLDM0LDM0aDQ4YTM0LDM0LDAsMCwwLDAtNjhIMTEyYTQ2LDQ2LDAsMCwxLDAtOTJoMTBWMjRhNiw2LDAsMCwxLDEyLDBWNDJoMTBhNDYuMDYsNDYuMDYsMCwwLDEsNDYsNDYsNiw2LDAsMCwxLTEyLDAsMzQsMzQsMCwwLDAtMzQtMzRIMTEyYTM0LDM0LDAsMCwwLDAsNjhoNDBBNDYuMDYsNDYuMDYsMCwwLDEsMTk4LDE2OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMTY4YTUyLjA2LDUyLjA2LDAsMCwxLTUyLDUySDE0MHYxMmExMiwxMiwwLDAsMS0yNCwwVjIyMEgxMDRhNTIuMDYsNTIuMDYsMCwwLDEtNTItNTIsMTIsMTIsMCwwLDEsMjQsMCwyOCwyOCwwLDAsMCwyOCwyOGg0OGEyOCwyOCwwLDAsMCwwLTU2SDExMmE1Miw1MiwwLDAsMSwwLTEwNGg0VjI0YTEyLDEyLDAsMCwxLDI0LDBWMzZoNGE1Mi4wNiw1Mi4wNiwwLDAsMSw1Miw1MiwxMiwxMiwwLDAsMS0yNCwwLDI4LDI4LDAsMCwwLTI4LTI4SDExMmEyOCwyOCwwLDAsMCwwLDU2aDQwQTUyLjA2LDUyLjA2LDAsMCwxLDIwNCwxNjhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0xNiwxNjBoLTh2OGE4LDgsMCwwLDEtMTYsMHYtOGgtOGEzMiwzMiwwLDAsMS0zMi0zMiw4LDgsMCwwLDEsMTYsMCwxNiwxNiwwLDAsMCwxNiwxNmgzMmExNiwxNiwwLDAsMCwwLTMySDExNmEzMiwzMiwwLDAsMSwwLTY0aDRWNjRhOCw4LDAsMCwxLDE2LDB2OGg0YTMyLDMyLDAsMCwxLDMyLDMyLDgsOCwwLDAsMS0xNiwwLDE2LDE2LDAsMCwwLTE2LTE2SDExNmExNiwxNiwwLDAsMCwwLDMyaDI4YTMyLDMyLDAsMCwxLDAsNjRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTY4YTQwLDQwLDAsMCwxLTQwLDQwSDEyOFYxMjhoMjRBNDAsNDAsMCwwLDEsMTkyLDE2OFpNMTEyLDQ4YTQwLDQwLDAsMCwwLDAsODBoMTZWNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjAwLDE2OGE0OC4wNSw0OC4wNSwwLDAsMS00OCw0OEgxMzZ2MTZhOCw4LDAsMCwxLTE2LDBWMjE2SDEwNGE0OC4wNSw0OC4wNSwwLDAsMS00OC00OCw4LDgsMCwwLDEsMTYsMCwzMiwzMiwwLDAsMCwzMiwzMmg0OGEzMiwzMiwwLDAsMCwwLTY0SDExMmE0OCw0OCwwLDAsMSwwLTk2aDhWMjRhOCw4LDAsMCwxLDE2LDBWNDBoOGE0OC4wNSw0OC4wNSwwLDAsMSw0OCw0OCw4LDgsMCwwLDEtMTYsMCwzMiwzMiwwLDAsMC0zMi0zMkgxMTJhMzIsMzIsMCwwLDAsMCw2NGg0MEE0OC4wNSw0OC4wNSwwLDAsMSwyMDAsMTY4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CurrencyDollarSimple";
export { I as CurrencyDollarSimple };