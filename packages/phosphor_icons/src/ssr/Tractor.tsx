/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Tractor";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTY1LjQxVjEzNGExNS44OSwxNS44OSwwLDAsMC0xMS40LTE1LjMybC0uMjEtLjA2TDE5MiwxMDguNzFWNzJhOCw4LDAsMCwwLTE2LDB2MzIuMzhsLTI0LTYuNVY1Nmg4YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2aDhWODhINDBhOCw4LDAsMCwwLDAsMTZINjhhNjguMDcsNjguMDcsMCwwLDEsNjgsNjh2MTJhOCw4LDAsMCwwLDgsOGgzMi4yM0EzNiwzNiwwLDEsMCwyNDAsMTY1LjQxWk02OCw4OEg2NFY1Nmg3MnY2Ni43N0E4My45Miw4My45MiwwLDAsMCw2OCw4OFptODQsMjYuNDVMMjI0LDEzNHYyMC4xQTM2LDM2LDAsMCwwLDE3OC4wNiwxNzZIMTUyWk0yMTIsMjA4YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDIxMiwyMDhaTTY4LDEyMGE1Miw1MiwwLDEsMCw1Miw1MkE1Mi4wNiw1Mi4wNiwwLDAsMCw2OCwxMjBabTAsODhhMzYsMzYsMCwxLDEsMzYtMzZBMzYsMzYsMCwwLDEsNjgsMjA4Wm0xMi0zNmExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSw4MCwxNzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTY2Ljg3VjEzNGExMS45MiwxMS45MiwwLDAsMC04LjU1LTExLjQ5bC0uMTEsMEwxODgsMTExLjc3VjcyYTQsNCwwLDAsMC04LDB2MzcuNjFsLTMyLTguNjdWNTJoMTJhNCw0LDAsMCwwLDAtOEg0MGE0LDQsMCwwLDAsMCw4SDUyVjkySDQwYTQsNCwwLDAsMCwwLDhINjhhNzIuMDgsNzIuMDgsMCwwLDEsNzIsNzJ2MTJhNCw0LDAsMCwwLDQsNGgzNmEzMiwzMiwwLDEsMCw1Ni0yMS4xM1pNNjgsOTJINjBWNTJoODB2ODUuMTVBODAuMSw4MC4xLDAsMCwwLDY4LDkyWm04MCw4OFYxMDkuMjNsNzcuMTksMjAuOUE0LDQsMCwwLDEsMjI4LDEzNHYyNi4zNkEzMS43MSwzMS43MSwwLDAsMCwyMTIsMTU2YTMyLjA2LDMyLjA2LDAsMCwwLTMxLDI0Wm02NCwzMmEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSwyMTIsMjEyWk02OCwxMjRhNDgsNDgsMCwxLDAsNDgsNDhBNDguMDUsNDguMDUsMCwwLDAsNjgsMTI0Wm0wLDg4YTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDY4LDIxMlptOC00MGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSw3NiwxNzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsMTY2LjEyVjEzNGExMy45MSwxMy45MSwwLDAsMC0xMC0xMy40MWwtLjE1LDBMMTkwLDExMC4yNFY3MmE2LDYsMCwwLDAtMTIsMHYzNWwtMjgtNy41OFY1NGgxMGE2LDYsMCwwLDAsMC0xMkg0MGE2LDYsMCwwLDAsMCwxMkg1MFY5MEg0MGE2LDYsMCwwLDAsMCwxMkg2OGE3MC4wOCw3MC4wOCwwLDAsMSw3MCw3MHYxMmE2LDYsMCwwLDAsNiw2aDM0LjA2QTM0LDM0LDAsMSwwLDIzOCwxNjYuMTJaTTY4LDkwSDYyVjU0aDc2djc1LjM0QTgyLDgyLDAsMCwwLDY4LDkwWm04Miw4MlYxMTEuODRsNzQuNjMsMjAuMjFBMiwyLDAsMCwxLDIyNiwxMzRWMTU3YTM0LDM0LDAsMCwwLTQ2LjUsMjFIMTUwWm02MiwzOGEyMiwyMiwwLDEsMSwyMi0yMkEyMiwyMiwwLDAsMSwyMTIsMjEwWk02OCwxMjJhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDYsNTAuMDYsMCwwLDAsNjgsMTIyWm0wLDg4YTM4LDM4LDAsMSwxLDM4LTM4QTM4LDM4LDAsMCwxLDY4LDIxMFptMTAtMzhhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsNzgsMTcyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTY0VjEzNGExOS44NywxOS44NywwLDAsMC0xNC4yNS0xOS4xNWwtLjMxLS4wOUwxOTYsMTA1LjY1Vjc2YTEyLDEyLDAsMCwwLTI0LDBWOTkuMTVsLTE2LTQuMzNWNjBoNGExMiwxMiwwLDAsMCwwLTI0SDQwYTEyLDEyLDAsMCwwLDAsMjRoNFY4NEg0MGExMiwxMiwwLDAsMCwwLDI0SDY4YTY0LjA3LDY0LjA3LDAsMCwxLDY0LDY0djEyYTEyLDEyLDAsMCwwLDEyLDEyaDI4LjhBNDAsNDAsMCwxLDAsMjQ0LDE2NFpNMTMyLDExMS42N0E4Ny43NSw4Ny43NSwwLDAsMCw2OCw4NFY2MGg2NFpNMTc1LjM1LDE3MkgxNTZWMTE5LjY4TDIyMCwxMzdWMTQ4LjhhNDAuNTcsNDAuNTcsMCwwLDAtOC0uOEE0MC4wNiw0MC4wNiwwLDAsMCwxNzUuMzUsMTcyWk0yMTIsMjA0YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDIxMiwyMDRaTTY0LDEyNGE1Miw1MiwwLDEsMCw1Miw1MkE1Mi4wNiw1Mi4wNiwwLDAsMCw2NCwxMjRabTAsODBhMjgsMjgsMCwxLDEsMjgtMjhBMjgsMjgsMCwwLDEsNjQsMjA0Wm0xNi0yOGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSw4MCwxNzZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxNzJhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsODAsMTcyWm00MCwwYTUyLDUyLDAsMSwxLTUyLTUyQTUyLjA2LDUyLjA2LDAsMCwxLDEyMCwxNzJabS0yNCwwYTI4LDI4LDAsMSwwLTI4LDI4QTI4LDI4LDAsMCwwLDk2LDE3MlptMTUyLDE2YTM2LDM2LDAsMCwxLTcxLjc3LDRIMTQ0YTgsOCwwLDAsMS04LThWMTcyYTY4LjA3LDY4LjA3LDAsMCwwLTY4LTY4SDQwYTgsOCwwLDAsMSwwLTE2aDhWNTZINDBhOCw4LDAsMCwxLDAtMTZIMTYwYTgsOCwwLDAsMSwwLDE2aC04Vjk3Ljg4bDI0LDYuNVY3MmE4LDgsMCwwLDEsMTYsMHYzNi43MWwzNi4zOSw5Ljg2LjIxLjA2QTE1Ljg5LDE1Ljg5LDAsMCwxLDI0MCwxMzR2MzEuNDZBMzUuOCwzNS44LDAsMCwxLDI0OCwxODhabS0yMCwwYTE2LDE2LDAsMSwwLTE2LDE2QTE2LDE2LDAsMCwwLDIyOCwxODhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg4YTI4LDI4LDAsMSwxLTI4LTI4QTI4LDI4LDAsMCwxLDI0MCwxODhaTTY4LDEyOGE0NCw0NCwwLDEsMCw0NCw0NEE0NCw0NCwwLDAsMCw2OCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQwLDE2NS40MVYxMzRhMTUuODksMTUuODksMCwwLDAtMTEuNC0xNS4zMmwtLjIxLS4wNkwxOTIsMTA4LjcxVjcyYTgsOCwwLDAsMC0xNiwwdjMyLjM4bC0yNC02LjVWNTZoOGE4LDgsMCwwLDAsMC0xNkg0MGE4LDgsMCwwLDAsMCwxNmg4Vjg4SDQwYTgsOCwwLDAsMCwwLDE2SDY4YTY4LjA3LDY4LjA3LDAsMCwxLDY4LDY4djEyYTgsOCwwLDAsMCw4LDhoMzIuMjNBMzYsMzYsMCwxLDAsMjQwLDE2NS40MVpNNjgsODhINjRWNTZoNzJ2NjYuNzdBODMuOTIsODMuOTIsMCwwLDAsNjgsODhabTg0LDI2LjQ1TDIyNCwxMzR2MjAuMUEzNiwzNiwwLDAsMCwxNzguMDYsMTc2SDE1MlpNMjEyLDIwOGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwyMTIsMjA4Wk02OCwxMjBhNTIsNTIsMCwxLDAsNTIsNTJBNTIuMDYsNTIuMDYsMCwwLDAsNjgsMTIwWm0wLDg4YTM2LDM2LDAsMSwxLDM2LTM2QTM2LDM2LDAsMCwxLDY4LDIwOFptMTItMzZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsODAsMTcyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tractor";
export { I as Tractor };