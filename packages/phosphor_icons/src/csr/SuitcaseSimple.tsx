/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SuitcaseSimple";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZIMTc2VjQ4YTI0LDI0LDAsMCwwLTI0LTI0SDEwNEEyNCwyNCwwLDAsMCw4MCw0OHY4SDQwQTE2LDE2LDAsMCwwLDI0LDcyVjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBMTYsMTYsMCwwLDAsMjE2LDU2Wk05Niw0OGE4LDgsMCwwLDEsOC04aDQ4YTgsOCwwLDAsMSw4LDh2OEg5NlpNMjE2LDcydjcySDQwVjcyWm0wLDEyOEg0MFYxNjBIMjE2djQwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjBIMTcyVjQ4YTIwLDIwLDAsMCwwLTIwLTIwSDEwNEEyMCwyMCwwLDAsMCw4NCw0OFY2MEg0MEExMiwxMiwwLDAsMCwyOCw3MlYyMDBhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjcyQTEyLDEyLDAsMCwwLDIxNiw2MFpNOTIsNDhhMTIsMTIsMCwwLDEsMTItMTJoNDhhMTIsMTIsMCwwLDEsMTIsMTJWNjBIOTJaTTQwLDY4SDIxNmE0LDQsMCwwLDEsNCw0djc2SDM2VjcyQTQsNCwwLDAsMSw0MCw2OFpNMjE2LDIwNEg0MGE0LDQsMCwwLDEtNC00VjE1NkgyMjB2NDRBNCw0LDAsMCwxLDIxNiwyMDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNThIMTc0VjQ4YTIyLDIyLDAsMCwwLTIyLTIySDEwNEEyMiwyMiwwLDAsMCw4Miw0OFY1OEg0MEExNCwxNCwwLDAsMCwyNiw3MlYyMDBhMTQsMTQsMCwwLDAsMTQsMTRIMjE2YTE0LDE0LDAsMCwwLDE0LTE0VjcyQTE0LDE0LDAsMCwwLDIxNiw1OFpNOTQsNDhhMTAsMTAsMCwwLDEsMTAtMTBoNDhhMTAsMTAsMCwwLDEsMTAsMTBWNThIOTRaTTQwLDcwSDIxNmEyLDIsMCwwLDEsMiwydjc0SDM4VjcyQTIsMiwwLDAsMSw0MCw3MFpNMjE2LDIwMkg0MGEyLDIsMCwwLDEtMi0yVjE1OEgyMTh2NDJBMiwyLDAsMCwxLDIxNiwyMDJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhIMTgwVjQwYTI4LDI4LDAsMCwwLTI4LTI4SDEwNEEyOCwyOCwwLDAsMCw3Niw0MHY4SDQwQTIwLDIwLDAsMCwwLDIwLDY4VjE5NmEyMCwyMCwwLDAsMCwyMCwyMEgyMTZhMjAsMjAsMCwwLDAsMjAtMjBWNjhBMjAsMjAsMCwwLDAsMjE2LDQ4Wk0xMDAsNDBhNCw0LDAsMCwxLDQtNGg0OGE0LDQsMCwwLDEsNCw0djhIMTAwWk0yMTIsNzJ2NjRINDRWNzJaTTQ0LDE5MlYxNjBIMjEydjMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZIMTc2VjQ4YTI0LDI0LDAsMCwwLTI0LTI0SDEwNEEyNCwyNCwwLDAsMCw4MCw0OHY4SDQwQTE2LDE2LDAsMCwwLDI0LDcyVjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBMTYsMTYsMCwwLDAsMjE2LDU2Wk05Niw0OGE4LDgsMCwwLDEsOC04aDQ4YTgsOCwwLDAsMSw4LDh2OEg5NlpNMjE2LDcydjcySDQwVjcyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTUydjQ4YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFYxNTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDU2SDE3NlY0OGEyNCwyNCwwLDAsMC0yNC0yNEgxMDRBMjQsMjQsMCwwLDAsODAsNDh2OEg0MEExNiwxNiwwLDAsMCwyNCw3MlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjcyQTE2LDE2LDAsMCwwLDIxNiw1NlpNOTYsNDhhOCw4LDAsMCwxLDgtOGg0OGE4LDgsMCwwLDEsOCw4djhIOTZaTTIxNiw3MnY3Mkg0MFY3MlptMCwxMjhINDBWMTYwSDIxNnY0MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SuitcaseSimple";
export { I as SuitcaseSimple };