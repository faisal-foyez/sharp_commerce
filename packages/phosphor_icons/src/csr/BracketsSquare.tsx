/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/BracketsSquare";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCw0OFYyMDhIODBhOCw4LDAsMCwxLDAsMTZINDBhOCw4LDAsMCwxLTgtOFY0MGE4LDgsMCwwLDEsOC04SDgwYTgsOCwwLDAsMSwwLDE2Wk0yMTYsMzJIMTc2YTgsOCwwLDAsMCwwLDE2aDMyVjIwOEgxNzZhOCw4LDAsMCwwLDAsMTZoNDBhOCw4LDAsMCwwLDgtOFY0MEE4LDgsMCwwLDAsMjE2LDMyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00NCw0NFYyMTJIODBhNCw0LDAsMCwxLDAsOEg0MGE0LDQsMCwwLDEtNC00VjQwYTQsNCwwLDAsMSw0LTRIODBhNCw0LDAsMCwxLDAsOFptMTcyLThIMTc2YTQsNCwwLDAsMCwwLDhoMzZWMjEySDE3NmE0LDQsMCwwLDAsMCw4aDQwYTQsNCwwLDAsMCw0LTRWNDBBNCw0LDAsMCwwLDIxNiwzNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00Niw0NlYyMTBIODBhNiw2LDAsMCwxLDAsMTJINDBhNiw2LDAsMCwxLTYtNlY0MGE2LDYsMCwwLDEsNi02SDgwYTYsNiwwLDAsMSwwLDEyWk0yMTYsMzRIMTc2YTYsNiwwLDAsMCwwLDEyaDM0VjIxMEgxNzZhNiw2LDAsMCwwLDAsMTJoNDBhNiw2LDAsMCwwLDYtNlY0MEE2LDYsMCwwLDAsMjE2LDM0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Miw1MlYyMDRIODBhMTIsMTIsMCwwLDEsMCwyNEg0MGExMiwxMiwwLDAsMS0xMi0xMlY0MEExMiwxMiwwLDAsMSw0MCwyOEg4MGExMiwxMiwwLDAsMSwwLDI0Wk0yMTYsMjhIMTc2YTEyLDEyLDAsMCwwLDAsMjRoMjhWMjA0SDE3NmExMiwxMiwwLDAsMCwwLDI0aDQwYTEyLDEyLDAsMCwwLDEyLTEyVjQwQTEyLDEyLDAsMCwwLDIxNiwyOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTEwNCwxNzZhOCw4LDAsMCwxLDAsMTZINzJhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04aDMyYTgsOCwwLDAsMSwwLDE2SDgwdjk2Wm04OCw4YTgsOCwwLDAsMS04LDhIMTUyYTgsOCwwLDAsMSwwLTE2aDI0VjgwSDE1MmE4LDgsMCwwLDEsMC0xNmgzMmE4LDgsMCwwLDEsOCw4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBWMjE2SDQwVjQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTQ4LDQ4VjIwOEg4MGE4LDgsMCwwLDEsMCwxNkg0MGE4LDgsMCwwLDEtOC04VjQwYTgsOCwwLDAsMSw4LThIODBhOCw4LDAsMCwxLDAsMTZaTTIxNiwzMkgxNzZhOCw4LDAsMCwwLDAsMTZoMzJWMjA4SDE3NmE4LDgsMCwwLDAsMCwxNmg0MGE4LDgsMCwwLDAsOC04VjQwQTgsOCwwLDAsMCwyMTYsMzJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BracketsSquare";
export { I as BracketsSquare };