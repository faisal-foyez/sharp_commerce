/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/FadersHorizontal";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsODBhOCw4LDAsMCwxLDgtOGgzMmE4LDgsMCwwLDEsMCwxNkgxODRBOCw4LDAsMCwxLDE3Niw4MFpNNDAsODhIMTQ0djE2YTgsOCwwLDAsMCwxNiwwVjU2YTgsOCwwLDAsMC0xNiwwVjcySDQwYTgsOCwwLDAsMCwwLDE2Wm0xNzYsODBIMTIwYTgsOCwwLDAsMCwwLDE2aDk2YTgsOCwwLDAsMCwwLTE2Wk04OCwxNDRhOCw4LDAsMCwwLTgsOHYxNkg0MGE4LDgsMCwwLDAsMCwxNkg4MHYxNmE4LDgsMCwwLDAsMTYsMFYxNTJBOCw4LDAsMCwwLDg4LDE0NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsODBhNCw0LDAsMCwxLDQtNGgzMmE0LDQsMCwwLDEsMCw4SDE4NEE0LDQsMCwwLDEsMTgwLDgwWk00MCw4NEgxNDh2MjBhNCw0LDAsMCwwLDgsMFY1NmE0LDQsMCwwLDAtOCwwVjc2SDQwYTQsNCwwLDAsMCwwLDhabTE3Niw4OEgxMjBhNCw0LDAsMCwwLDAsOGg5NmE0LDQsMCwwLDAsMC04Wk04OCwxNDhhNCw0LDAsMCwwLTQsNHYyMEg0MGE0LDQsMCwwLDAsMCw4SDg0djIwYTQsNCwwLDAsMCw4LDBWMTUyQTQsNCwwLDAsMCw4OCwxNDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsODBhNiw2LDAsMCwxLDYtNmgzMmE2LDYsMCwwLDEsMCwxMkgxODRBNiw2LDAsMCwxLDE3OCw4MFpNNDAsODZIMTQ2djE4YTYsNiwwLDAsMCwxMiwwVjU2YTYsNiwwLDAsMC0xMiwwVjc0SDQwYTYsNiwwLDAsMCwwLDEyWm0xNzYsODRIMTIwYTYsNiwwLDAsMCwwLDEyaDk2YTYsNiwwLDAsMCwwLTEyWk04OCwxNDZhNiw2LDAsMCwwLTYsNnYxOEg0MGE2LDYsMCwwLDAsMCwxMkg4MnYxOGE2LDYsMCwwLDAsMTIsMFYxNTJBNiw2LDAsMCwwLDg4LDE0NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsODBhMTIsMTIsMCwwLDEsMTItMTJoMjhhMTIsMTIsMCwwLDEsMCwyNEgxODhBMTIsMTIsMCwwLDEsMTc2LDgwWk00MCw5Mmg5NnYxMmExMiwxMiwwLDAsMCwyNCwwVjU2YTEyLDEyLDAsMCwwLTI0LDBWNjhINDBhMTIsMTIsMCwwLDAsMCwyNFptMTc2LDcySDEyNGExMiwxMiwwLDAsMCwwLDI0aDkyYTEyLDEyLDAsMCwwLDAtMjRaTTg0LDE0MGExMiwxMiwwLDAsMC0xMiwxMnYxMkg0MGExMiwxMiwwLDAsMCwwLDI0SDcydjEyYTEyLDEyLDAsMCwwLDI0LDBWMTUyQTEyLDEyLDAsMCwwLDg0LDE0MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsODBhOCw4LDAsMCwxLDgtOGgyNGE4LDgsMCwwLDEsMCwxNkgxOTJBOCw4LDAsMCwxLDE4NCw4MFpNNDAsODhoOTZ2MTZhOCw4LDAsMCwwLDgsOGgxNmE4LDgsMCwwLDAsOC04VjU2YTgsOCwwLDAsMC04LThIMTQ0YTgsOCwwLDAsMC04LDhWNzJINDBhOCw4LDAsMCwwLDAsMTZabTE3Niw4MEgxMjhhOCw4LDAsMCwwLDAsMTZoODhhOCw4LDAsMCwwLDAtMTZaTTk2LDE0NEg4MGE4LDgsMCwwLDAtOCw4djE2SDQwYTgsOCwwLDAsMCwwLDE2SDcydjE2YTgsOCwwLDAsMCw4LDhIOTZhOCw4LDAsMCwwLDgtOFYxNTJBOCw4LDAsMCwwLDk2LDE0NFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODB2OTZINDBWODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc2LDgwYTgsOCwwLDAsMSw4LThoMzJhOCw4LDAsMCwxLDAsMTZIMTg0QTgsOCwwLDAsMSwxNzYsODBaTTQwLDg4SDE0NHYxNmE4LDgsMCwwLDAsMTYsMFY1NmE4LDgsMCwwLDAtMTYsMFY3Mkg0MGE4LDgsMCwwLDAsMCwxNlptMTc2LDgwSDEyMGE4LDgsMCwwLDAsMCwxNmg5NmE4LDgsMCwwLDAsMC0xNlpNODgsMTQ0YTgsOCwwLDAsMC04LDh2MTZINDBhOCw4LDAsMCwwLDAsMTZIODB2MTZhOCw4LDAsMCwwLDE2LDBWMTUyQTgsOCwwLDAsMCw4OCwxNDRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FadersHorizontal";
export { I as FadersHorizontal };