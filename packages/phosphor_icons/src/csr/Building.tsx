/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Building";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjI0SDIwOFYzMmg4YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2aDhWMjI0SDI0YTgsOCwwLDAsMCwwLDE2SDIzMmE4LDgsMCwwLDAsMC0xNlpNNjQsMzJIMTkyVjIyNEgxNjBWMTg0YTgsOCwwLDAsMC04LThIMTA0YTgsOCwwLDAsMC04LDh2NDBINjRabTgwLDE5MkgxMTJWMTkyaDMyWk04OCw2NGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDk2QTgsOCwwLDAsMSw4OCw2NFptNDgsMGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDE0NEE4LDgsMCwwLDEsMTM2LDY0Wk04OCwxMDRhOCw4LDAsMCwxLDgtOGgxNmE4LDgsMCwwLDEsMCwxNkg5NkE4LDgsMCwwLDEsODgsMTA0Wm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTQ0QTgsOCwwLDAsMSwxMzYsMTA0Wk04OCwxNDRhOCw4LDAsMCwxLDgtOGgxNmE4LDgsMCwwLDEsMCwxNkg5NkE4LDgsMCwwLDEsODgsMTQ0Wm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTQ0QTgsOCwwLDAsMSwxMzYsMTQ0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjI4SDIwNFYyOGgxMmE0LDQsMCwwLDAsMC04SDQwYTQsNCwwLDAsMCwwLDhINTJWMjI4SDI0YTQsNCwwLDAsMCwwLDhIMjMyYTQsNCwwLDAsMCwwLThaTTYwLDI4SDE5NlYyMjhIMTU2VjE4NGE0LDQsMCwwLDAtNC00SDEwNGE0LDQsMCwwLDAtNCw0djQ0SDYwWm04OCwyMDBIMTA4VjE4OGg0MFpNOTIsNjRhNCw0LDAsMCwxLDQtNGgxNmE0LDQsMCwwLDEsMCw4SDk2QTQsNCwwLDAsMSw5Miw2NFptNDgsMGE0LDQsMCwwLDEsNC00aDE2YTQsNCwwLDAsMSwwLDhIMTQ0QTQsNCwwLDAsMSwxNDAsNjRaTTkyLDEwNGE0LDQsMCwwLDEsNC00aDE2YTQsNCwwLDAsMSwwLDhIOTZBNCw0LDAsMCwxLDkyLDEwNFptNDgsMGE0LDQsMCwwLDEsNC00aDE2YTQsNCwwLDAsMSwwLDhIMTQ0QTQsNCwwLDAsMSwxNDAsMTA0Wk05NiwxNDhhNCw0LDAsMCwxLDAtOGgxNmE0LDQsMCwwLDEsMCw4Wm00NC00YTQsNCwwLDAsMSw0LTRoMTZhNCw0LDAsMCwxLDAsOEgxNDRBNCw0LDAsMCwxLDE0MCwxNDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjI2SDIwNlYzMGgxMGE2LDYsMCwwLDAsMC0xMkg0MGE2LDYsMCwwLDAsMCwxMkg1MFYyMjZIMjRhNiw2LDAsMCwwLDAsMTJIMjMyYTYsNiwwLDAsMCwwLTEyWk02MiwzMEgxOTRWMjI2SDE1OFYxODRhNiw2LDAsMCwwLTYtNkgxMDRhNiw2LDAsMCwwLTYsNnY0Mkg2MlptODQsMTk2SDExMFYxOTBoMzZaTTkwLDY0YTYsNiwwLDAsMSw2LTZoMTZhNiw2LDAsMCwxLDAsMTJIOTZBNiw2LDAsMCwxLDkwLDY0Wm00OCwwYTYsNiwwLDAsMSw2LTZoMTZhNiw2LDAsMCwxLDAsMTJIMTQ0QTYsNiwwLDAsMSwxMzgsNjRaTTkwLDEwNGE2LDYsMCwwLDEsNi02aDE2YTYsNiwwLDAsMSwwLDEySDk2QTYsNiwwLDAsMSw5MCwxMDRabTQ4LDBhNiw2LDAsMCwxLDYtNmgxNmE2LDYsMCwwLDEsMCwxMkgxNDRBNiw2LDAsMCwxLDEzOCwxMDRaTTk2LDE1MGE2LDYsMCwwLDEsMC0xMmgxNmE2LDYsMCwwLDEsMCwxMlptNDItNmE2LDYsMCwwLDEsNi02aDE2YTYsNiwwLDAsMSwwLDEySDE0NEE2LDYsMCwwLDEsMTM4LDE0NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjIwSDIxMlYzNmg0YTEyLDEyLDAsMCwwLDAtMjRINDBhMTIsMTIsMCwwLDAsMCwyNGg0VjIyMEgyNGExMiwxMiwwLDAsMCwwLDI0SDIzMmExMiwxMiwwLDAsMCwwLTI0Wk02OCwzNkgxODhWMjIwSDE2NFYxODRhMTIsMTIsMCwwLDAtMTItMTJIMTA0YTEyLDEyLDAsMCwwLTEyLDEydjM2SDY4Wm03MiwxODRIMTE2VjE5NmgyNFpNODQsNjRBMTIsMTIsMCwwLDEsOTYsNTJoMTJhMTIsMTIsMCwwLDEsMCwyNEg5NkExMiwxMiwwLDAsMSw4NCw2NFptNTIsMGExMiwxMiwwLDAsMSwxMi0xMmgxMmExMiwxMiwwLDAsMSwwLDI0SDE0OEExMiwxMiwwLDAsMSwxMzYsNjRaTTg0LDEwNEExMiwxMiwwLDAsMSw5Niw5MmgxMmExMiwxMiwwLDAsMSwwLDI0SDk2QTEyLDEyLDAsMCwxLDg0LDEwNFptNTIsMGExMiwxMiwwLDAsMSwxMi0xMmgxMmExMiwxMiwwLDAsMSwwLDI0SDE0OEExMiwxMiwwLDAsMSwxMzYsMTA0Wk04NCwxNDRhMTIsMTIsMCwwLDEsMTItMTJoMTJhMTIsMTIsMCwwLDEsMCwyNEg5NkExMiwxMiwwLDAsMSw4NCwxNDRabTUyLDBhMTIsMTIsMCwwLDEsMTItMTJoMTJhMTIsMTIsMCwwLDEsMCwyNEgxNDhBMTIsMTIsMCwwLDEsMTM2LDE0NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjI0SDIwOFYzMmg4YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2aDhWMjI0SDI0YTgsOCwwLDAsMCwwLDE2SDIzMmE4LDgsMCwwLDAsMC0xNlpNODgsNTZoMjRhOCw4LDAsMCwxLDAsMTZIODhhOCw4LDAsMCwxLDAtMTZabTAsNDBoMjRhOCw4LDAsMCwxLDAsMTZIODhhOCw4LDAsMCwxLDAtMTZabS04LDQ4YTgsOCwwLDAsMSw4LThoMjRhOCw4LDAsMCwxLDAsMTZIODhBOCw4LDAsMCwxLDgwLDE0NFptNzIsODBIMTA0VjE4NGg0OFptMTYtNzJIMTQ0YTgsOCwwLDAsMSwwLTE2aDI0YTgsOCwwLDAsMSwwLDE2Wm0wLTQwSDE0NGE4LDgsMCwwLDEsMC0xNmgyNGE4LDgsMCwwLDEsMCwxNlptMC00MEgxNDRhOCw4LDAsMCwxLDAtMTZoMjRhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRWMjMySDE1MlYxODRIMTA0djQ4SDU2VjI0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiwyMjRIMjA4VjMyaDhhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZoOFYyMjRIMjRhOCw4LDAsMCwwLDAsMTZIMjMyYTgsOCwwLDAsMCwwLTE2Wk02NCwzMkgxOTJWMjI0SDE2MFYxODRhOCw4LDAsMCwwLTgtOEgxMDRhOCw4LDAsMCwwLTgsOHY0MEg2NFptODAsMTkySDExMlYxOTJoMzJaTTg4LDY0YTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIOTZBOCw4LDAsMCwxLDg4LDY0Wm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTQ0QTgsOCwwLDAsMSwxMzYsNjRaTTg4LDEwNGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDk2QTgsOCwwLDAsMSw4OCwxMDRabTQ4LDBhOCw4LDAsMCwxLDgtOGgxNmE4LDgsMCwwLDEsMCwxNkgxNDRBOCw4LDAsMCwxLDEzNiwxMDRaTTg4LDE0NGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDk2QTgsOCwwLDAsMSw4OCwxNDRabTQ4LDBhOCw4LDAsMCwxLDgtOGgxNmE4LDgsMCwwLDEsMCwxNkgxNDRBOCw4LDAsMCwxLDEzNiwxNDRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Building";
export { I as Building };