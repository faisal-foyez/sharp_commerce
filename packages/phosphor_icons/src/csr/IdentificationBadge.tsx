/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/IdentificationBadge";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03NS4xOSwxOTguNGE4LDgsMCwwLDAsMTEuMjEtMS42LDUyLDUyLDAsMCwxLDgzLjIsMCw4LDgsMCwxLDAsMTIuOC05LjZBNjcuODgsNjcuODgsMCwwLDAsMTU1LDE2NS41MWE0MCw0MCwwLDEsMC01My45NCwwQTY3Ljg4LDY3Ljg4LDAsMCwwLDczLjYsMTg3LjIsOCw4LDAsMCwwLDc1LjE5LDE5OC40Wk0xMjgsMTEyYTI0LDI0LDAsMSwxLTI0LDI0QTI0LDI0LDAsMCwxLDEyOCwxMTJabTcyLTg4SDU2QTE2LDE2LDAsMCwwLDQwLDQwVjIxNmExNiwxNiwwLDAsMCwxNiwxNkgyMDBhMTYsMTYsMCwwLDAsMTYtMTZWNDBBMTYsMTYsMCwwLDAsMjAwLDI0Wm0wLDE5Mkg1NlY0MEgyMDBaTTg4LDY0YTgsOCwwLDAsMSw4LThoNjRhOCw4LDAsMCwxLDAsMTZIOTZBOCw4LDAsMCwxLDg4LDY0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDYuNywxNjYuNzVhMzYsMzYsMCwxLDAtMzcuNCwwQTYzLjYxLDYzLjYxLDAsMCwwLDc2LjgsMTg5LjZhNCw0LDAsMCwwLDYuNCw0LjgsNTYsNTYsMCwwLDEsODkuNiwwLDQsNCwwLDAsMCw2LjQtNC44QTYzLjY1LDYzLjY1LDAsMCwwLDE0Ni43LDE2Ni43NVpNMTAwLDEzNmEyOCwyOCwwLDEsMSwyOCwyOEEyOCwyOCwwLDAsMSwxMDAsMTM2Wk0yMDAsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDBWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY0MEExMiwxMiwwLDAsMCwyMDAsMjhabTQsMTg4YTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLTQtNFY0MGE0LDQsMCwwLDEsNC00SDIwMGE0LDQsMCwwLDEsNCw0Wk05Miw2NGE0LDQsMCwwLDEsNC00aDY0YTQsNCwwLDAsMSwwLDhIOTZBNCw0LDAsMCwxLDkyLDY0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTEuMTEsMTY2LjEzYTM4LDM4LDAsMSwwLTQ2LjIyLDBBNjUuNzUsNjUuNzUsMCwwLDAsNzUuMiwxODguNGE2LDYsMCwwLDAsOS42LDcuMiw1NCw1NCwwLDAsMSw4Ni40LDAsNiw2LDAsMCwwLDkuNi03LjJBNjUuNzUsNjUuNzUsMCwwLDAsMTUxLjExLDE2Ni4xM1pNMTI4LDExMGEyNiwyNiwwLDEsMS0yNiwyNkEyNiwyNiwwLDAsMSwxMjgsMTEwWm03Mi04NEg1NkExNCwxNCwwLDAsMCw0Miw0MFYyMTZhMTQsMTQsMCwwLDAsMTQsMTRIMjAwYTE0LDE0LDAsMCwwLDE0LTE0VjQwQTE0LDE0LDAsMCwwLDIwMCwyNlptMiwxOTBhMiwyLDAsMCwxLTIsMkg1NmEyLDIsMCwwLDEtMi0yVjQwYTIsMiwwLDAsMSwyLTJIMjAwYTIsMiwwLDAsMSwyLDJaTTkwLDY0YTYsNiwwLDAsMSw2LTZoNjRhNiw2LDAsMCwxLDAsMTJIOTZBNiw2LDAsMCwxLDkwLDY0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjBINTZBMjAsMjAsMCwwLDAsMzYsNDBWMjE2YTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY0MEEyMCwyMCwwLDAsMCwyMDAsMjBabS00LDE5Mkg2MFY0NEgxOTZaTTg0LDY4QTEyLDEyLDAsMCwxLDk2LDU2aDY0YTEyLDEyLDAsMCwxLDAsMjRIOTZBMTIsMTIsMCwwLDEsODQsNjhabTguOCwxMjcuMzdhNDgsNDgsMCwwLDEsNzAuNCwwLDEyLDEyLDAsMCwwLDE3LjYtMTYuMzIsNzIsNzIsMCwwLDAtMTkuMjEtMTQuNjgsNDQsNDQsMCwxLDAtNjcuMTksMCw3Mi4xMiw3Mi4xMiwwLDAsMC0xOS4yLDE0LjY4LDEyLDEyLDAsMCwwLDE3LjYsMTYuMzJaTTEyOCwxMTZhMjAsMjAsMCwxLDEtMjAsMjBBMjAsMjAsMCwwLDEsMTI4LDExNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDAsMjRaTTk2LDQ4aDY0YTgsOCwwLDAsMSwwLDE2SDk2YTgsOCwwLDAsMSwwLTE2Wm04NC44MSwxNTAuNGE4LDgsMCwwLDEtMTEuMjEtMS42LDUyLDUyLDAsMCwwLTgzLjIsMCw4LDgsMCwxLDEtMTIuOC05LjZBNjcuODgsNjcuODgsMCwwLDEsMTAxLDE2NS41MWE0MCw0MCwwLDEsMSw1My45NCwwQTY3Ljg4LDY3Ljg4LDAsMCwxLDE4Mi40LDE4Ny4yLDgsOCwwLDAsMSwxODAuODEsMTk4LjRaTTE1MiwxMzZhMjQsMjQsMCwxLDEtMjQtMjRBMjQsMjQsMCwwLDEsMTUyLDEzNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzJINTZhOCw4LDAsMCwwLTgsOFYyMTZhOCw4LDAsMCwwLDgsOEgyMDBhOCw4LDAsMCwwLDgtOFY0MEE4LDgsMCwwLDAsMjAwLDMyWk0xMjgsMTY4YTMyLDMyLDAsMSwxLDMyLTMyQTMyLDMyLDAsMCwxLDEyOCwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNzUuMTksMTk4LjRhOCw4LDAsMCwwLDExLjIxLTEuNiw1Miw1MiwwLDAsMSw4My4yLDAsOCw4LDAsMSwwLDEyLjgtOS42QTY3Ljg4LDY3Ljg4LDAsMCwwLDE1NSwxNjUuNTFhNDAsNDAsMCwxLDAtNTMuOTQsMEE2Ny44OCw2Ny44OCwwLDAsMCw3My42LDE4Ny4yLDgsOCwwLDAsMCw3NS4xOSwxOTguNFpNMTI4LDExMmEyNCwyNCwwLDEsMS0yNCwyNEEyNCwyNCwwLDAsMSwxMjgsMTEyWm03Mi04OEg1NkExNiwxNiwwLDAsMCw0MCw0MFYyMTZhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2VjQwQTE2LDE2LDAsMCwwLDIwMCwyNFptMCwxOTJINTZWNDBIMjAwWk04OCw2NGE4LDgsMCwwLDEsOC04aDY0YTgsOCwwLDAsMSwwLDE2SDk2QTgsOCwwLDAsMSw4OCw2NFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "IdentificationBadge";
export { I as IdentificationBadge };