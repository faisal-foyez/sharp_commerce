/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TreeStructure";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTEyaDQ4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4YTE2LDE2LDAsMCwwLTE2LTE2SDE2MGExNiwxNiwwLDAsMC0xNiwxNlY2NEgxMjhhMjQsMjQsMCwwLDAtMjQsMjR2MzJINzJ2LThBMTYsMTYsMCwwLDAsNTYsOTZIMjRBMTYsMTYsMCwwLDAsOCwxMTJ2MzJhMTYsMTYsMCwwLDAsMTYsMTZINTZhMTYsMTYsMCwwLDAsMTYtMTZ2LThoMzJ2MzJhMjQsMjQsMCwwLDAsMjQsMjRoMTZ2MTZhMTYsMTYsMCwwLDAsMTYsMTZoNDhhMTYsMTYsMCwwLDAsMTYtMTZWMTYwYTE2LDE2LDAsMCwwLTE2LTE2SDE2MGExNiwxNiwwLDAsMC0xNiwxNnYxNkgxMjhhOCw4LDAsMCwxLTgtOFY4OGE4LDgsMCwwLDEsOC04aDE2Vjk2QTE2LDE2LDAsMCwwLDE2MCwxMTJaTTU2LDE0NEgyNFYxMTJINTZ2MzJabTEwNCwxNmg0OHY0OEgxNjBabTAtMTEyaDQ4Vjk2SDE2MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTA4aDQ4YTEyLDEyLDAsMCwwLDEyLTEyVjQ4YTEyLDEyLDAsMCwwLTEyLTEySDE2MGExMiwxMiwwLDAsMC0xMiwxMlY2OEgxMjhhMjAsMjAsMCwwLDAtMjAsMjB2MzZINjhWMTEyYTEyLDEyLDAsMCwwLTEyLTEySDI0YTEyLDEyLDAsMCwwLTEyLDEydjMyYTEyLDEyLDAsMCwwLDEyLDEySDU2YTEyLDEyLDAsMCwwLDEyLTEyVjEzMmg0MHYzNmEyMCwyMCwwLDAsMCwyMCwyMGgyMHYyMGExMiwxMiwwLDAsMCwxMiwxMmg0OGExMiwxMiwwLDAsMCwxMi0xMlYxNjBhMTIsMTIsMCwwLDAtMTItMTJIMTYwYTEyLDEyLDAsMCwwLTEyLDEydjIwSDEyOGExMiwxMiwwLDAsMS0xMi0xMlY4OGExMiwxMiwwLDAsMSwxMi0xMmgyMFY5NkExMiwxMiwwLDAsMCwxNjAsMTA4Wk02MCwxNDRhNCw0LDAsMCwxLTQsNEgyNGE0LDQsMCwwLDEtNC00VjExMmE0LDQsMCwwLDEsNC00SDU2YTQsNCwwLDAsMSw0LDRabTk2LDE2YTQsNCwwLDAsMSw0LTRoNDhhNCw0LDAsMCwxLDQsNHY0OGE0LDQsMCwwLDEtNCw0SDE2MGE0LDQsMCwwLDEtNC00Wm0wLTExMmE0LDQsMCwwLDEsNC00aDQ4YTQsNCwwLDAsMSw0LDRWOTZhNCw0LDAsMCwxLTQsNEgxNjBhNCw0LDAsMCwxLTQtNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTEwaDQ4YTE0LDE0LDAsMCwwLDE0LTE0VjQ4YTE0LDE0LDAsMCwwLTE0LTE0SDE2MGExNCwxNCwwLDAsMC0xNCwxNFY2NkgxMjhhMjIsMjIsMCwwLDAtMjIsMjJ2MzRINzBWMTEyQTE0LDE0LDAsMCwwLDU2LDk4SDI0YTE0LDE0LDAsMCwwLTE0LDE0djMyYTE0LDE0LDAsMCwwLDE0LDE0SDU2YTE0LDE0LDAsMCwwLDE0LTE0VjEzNGgzNnYzNGEyMiwyMiwwLDAsMCwyMiwyMmgxOHYxOGExNCwxNCwwLDAsMCwxNCwxNGg0OGExNCwxNCwwLDAsMCwxNC0xNFYxNjBhMTQsMTQsMCwwLDAtMTQtMTRIMTYwYTE0LDE0LDAsMCwwLTE0LDE0djE4SDEyOGExMCwxMCwwLDAsMS0xMC0xMFY4OGExMCwxMCwwLDAsMSwxMC0xMGgxOFY5NkExNCwxNCwwLDAsMCwxNjAsMTEwWk01OCwxNDRhMiwyLDAsMCwxLTIsMkgyNGEyLDIsMCwwLDEtMi0yVjExMmEyLDIsMCwwLDEsMi0ySDU2YTIsMiwwLDAsMSwyLDJabTEwMCwxNmEyLDIsMCwwLDEsMi0yaDQ4YTIsMiwwLDAsMSwyLDJ2NDhhMiwyLDAsMCwxLTIsMkgxNjBhMiwyLDAsMCwxLTItMlptMC0xMTJhMiwyLDAsMCwxLDItMmg0OGEyLDIsMCwwLDEsMiwyVjk2YTIsMiwwLDAsMS0yLDJIMTYwYTIsMiwwLDAsMS0yLTJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTE2aDQ4YTIwLDIwLDAsMCwwLDIwLTIwVjQ4YTIwLDIwLDAsMCwwLTIwLTIwSDE2MGEyMCwyMCwwLDAsMC0yMCwyMFY2MEgxMjhhMjgsMjgsMCwwLDAtMjgsMjh2MjhINzZ2LTRBMjAsMjAsMCwwLDAsNTYsOTJIMjRBMjAsMjAsMCwwLDAsNCwxMTJ2MzJhMjAsMjAsMCwwLDAsMjAsMjBINTZhMjAsMjAsMCwwLDAsMjAtMjB2LTRoMjR2MjhhMjgsMjgsMCwwLDAsMjgsMjhoMTJ2MTJhMjAsMjAsMCwwLDAsMjAsMjBoNDhhMjAsMjAsMCwwLDAsMjAtMjBWMTYwYTIwLDIwLDAsMCwwLTIwLTIwSDE2MGEyMCwyMCwwLDAsMC0yMCwyMHYxMkgxMjhhNCw0LDAsMCwxLTQtNFY4OGE0LDQsMCwwLDEsNC00aDEyVjk2QTIwLDIwLDAsMCwwLDE2MCwxMTZaTTUyLDE0MEgyOFYxMTZINTJabTExMiwyNGg0MHY0MEgxNjRabTAtMTEyaDQwVjkySDE2NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsOTZWODBIMTI4YTgsOCwwLDAsMC04LDh2ODBhOCw4LDAsMCwwLDgsOGgxNlYxNjBhMTYsMTYsMCwwLDEsMTYtMTZoNDhhMTYsMTYsMCwwLDEsMTYsMTZ2NDhhMTYsMTYsMCwwLDEtMTYsMTZIMTYwYTE2LDE2LDAsMCwxLTE2LTE2VjE5MkgxMjhhMjQsMjQsMCwwLDEtMjQtMjRWMTM2SDcydjhhMTYsMTYsMCwwLDEtMTYsMTZIMjRBMTYsMTYsMCwwLDEsOCwxNDRWMTEyQTE2LDE2LDAsMCwxLDI0LDk2SDU2YTE2LDE2LDAsMCwxLDE2LDE2djhoMzJWODhhMjQsMjQsMCwwLDEsMjQtMjRoMTZWNDhhMTYsMTYsMCwwLDEsMTYtMTZoNDhhMTYsMTYsMCwwLDEsMTYsMTZWOTZhMTYsMTYsMCwwLDEtMTYsMTZIMTYwQTE2LDE2LDAsMCwxLDE0NCw5NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02NCwxMTJ2MzJhOCw4LDAsMCwxLTgsOEgyNGE4LDgsMCwwLDEtOC04VjExMmE4LDgsMCwwLDEsOC04SDU2QTgsOCwwLDAsMSw2NCwxMTJaTTIwOCw0MEgxNjBhOCw4LDAsMCwwLTgsOFY5NmE4LDgsMCwwLDAsOCw4aDQ4YTgsOCwwLDAsMCw4LThWNDhBOCw4LDAsMCwwLDIwOCw0MFptMCwxMTJIMTYwYTgsOCwwLDAsMC04LDh2NDhhOCw4LDAsMCwwLDgsOGg0OGE4LDgsMCwwLDAsOC04VjE2MEE4LDgsMCwwLDAsMjA4LDE1MloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjAsMTEyaDQ4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4YTE2LDE2LDAsMCwwLTE2LTE2SDE2MGExNiwxNiwwLDAsMC0xNiwxNlY2NEgxMjhhMjQsMjQsMCwwLDAtMjQsMjR2MzJINzJ2LThBMTYsMTYsMCwwLDAsNTYsOTZIMjRBMTYsMTYsMCwwLDAsOCwxMTJ2MzJhMTYsMTYsMCwwLDAsMTYsMTZINTZhMTYsMTYsMCwwLDAsMTYtMTZ2LThoMzJ2MzJhMjQsMjQsMCwwLDAsMjQsMjRoMTZ2MTZhMTYsMTYsMCwwLDAsMTYsMTZoNDhhMTYsMTYsMCwwLDAsMTYtMTZWMTYwYTE2LDE2LDAsMCwwLTE2LTE2SDE2MGExNiwxNiwwLDAsMC0xNiwxNnYxNkgxMjhhOCw4LDAsMCwxLTgtOFY4OGE4LDgsMCwwLDEsOC04aDE2Vjk2QTE2LDE2LDAsMCwwLDE2MCwxMTJaTTU2LDE0NEgyNFYxMTJINTZ2MzJabTEwNCwxNmg0OHY0OEgxNjBabTAtMTEyaDQ4Vjk2SDE2MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TreeStructure";
export { I as TreeStructure };