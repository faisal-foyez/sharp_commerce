/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Swap";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWMTUyYTE2LDE2LDAsMCwxLTE2LDE2SDk5LjMxbDEwLjM1LDEwLjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMmwtMjQtMjRhOCw4LDAsMCwxLDAtMTEuMzJsMjQtMjRhOCw4LDAsMCwxLDExLjMyLDExLjMyTDk5LjMxLDE1MkgyMDhWNDhIOTZ2OGE4LDgsMCwwLDEtMTYsMFY0OEExNiwxNiwwLDAsMSw5NiwzMkgyMDhBMTYsMTYsMCwwLDEsMjI0LDQ4Wk0xNjgsMTkyYTgsOCwwLDAsMC04LDh2OEg0OFYxMDRIMTU2LjY5bC0xMC4zNSwxMC4zNGE4LDgsMCwwLDAsMTEuMzIsMTEuMzJsMjQtMjRhOCw4LDAsMCwwLDAtMTEuMzJsLTI0LTI0YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwxNTYuNjksODhINDhhMTYsMTYsMCwwLDAtMTYsMTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE2MGExNiwxNiwwLDAsMCwxNi0xNnYtOEE4LDgsMCwwLDAsMTY4LDE5MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsNDhWMTUyYTEyLDEyLDAsMCwxLTEyLDEySDg5LjY2bDE3LjE3LDE3LjE3YTQsNCwwLDAsMS01LjY2LDUuNjZsLTI0LTI0YTQsNCwwLDAsMSwwLTUuNjZsMjQtMjRhNCw0LDAsMCwxLDUuNjYsNS42Nkw4OS42NiwxNTZIMjA4YTQsNCwwLDAsMCw0LTRWNDhhNCw0LDAsMCwwLTQtNEg5NmE0LDQsMCwwLDAtNCw0djhhNCw0LDAsMCwxLTgsMFY0OEExMiwxMiwwLDAsMSw5NiwzNkgyMDhBMTIsMTIsMCwwLDEsMjIwLDQ4Wk0xNjgsMTk2YTQsNCwwLDAsMC00LDR2OGE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTA0YTQsNCwwLDAsMSw0LTRIMTY2LjM0bC0xNy4xNywxNy4xN2E0LDQsMCwwLDAsNS42Niw1LjY2bDI0LTI0YTQsNCwwLDAsMCwwLTUuNjZsLTI0LTI0YTQsNCwwLDAsMC01LjY2LDUuNjZMMTY2LjM0LDkySDQ4YTEyLDEyLDAsMCwwLTEyLDEyVjIwOGExMiwxMiwwLDAsMCwxMiwxMkgxNjBhMTIsMTIsMCwwLDAsMTItMTJ2LThBNCw0LDAsMCwwLDE2OCwxOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsNDhWMTUyYTE0LDE0LDAsMCwxLTE0LDE0SDk0LjQ5bDEzLjc1LDEzLjc2YTYsNiwwLDEsMS04LjQ4LDguNDhsLTI0LTI0YTYsNiwwLDAsMSwwLTguNDhsMjQtMjRhNiw2LDAsMCwxLDguNDgsOC40OEw5NC40OSwxNTRIMjA4YTIsMiwwLDAsMCwyLTJWNDhhMiwyLDAsMCwwLTItMkg5NmEyLDIsMCwwLDAtMiwydjhhNiw2LDAsMCwxLTEyLDBWNDhBMTQsMTQsMCwwLDEsOTYsMzRIMjA4QTE0LDE0LDAsMCwxLDIyMiw0OFpNMTY4LDE5NGE2LDYsMCwwLDAtNiw2djhhMiwyLDAsMCwxLTIsMkg0OGEyLDIsMCwwLDEtMi0yVjEwNGEyLDIsMCwwLDEsMi0ySDE2MS41MWwtMTMuNzUsMTMuNzZhNiw2LDAsMSwwLDguNDgsOC40OGwyNC0yNGE2LDYsMCwwLDAsMC04LjQ4bC0yNC0yNGE2LDYsMCwwLDAtOC40OCw4LjQ4TDE2MS41MSw5MEg0OGExNCwxNCwwLDAsMC0xNCwxNFYyMDhhMTQsMTQsMCwwLDAsMTQsMTRIMTYwYTE0LDE0LDAsMCwwLDE0LTE0di04QTYsNiwwLDAsMCwxNjgsMTk0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNDhWMTUyYTIwLDIwLDAsMCwxLTIwLDIwSDExMi45MmExMiwxMiwwLDAsMS0xNy40MSwxNi40OWwtMjAtMjBhMTIsMTIsMCwwLDEsMC0xN2wyMC0yMEExMiwxMiwwLDAsMSwxMTIuOTIsMTQ4SDIwNFY1MkgxMDBhMTIsMTIsMCwwLDEtMjQsMFY0OEEyMCwyMCwwLDAsMSw5NiwyOEgyMDhBMjAsMjAsMCwwLDEsMjI4LDQ4Wk0xNjgsMTkyYTEyLDEyLDAsMCwwLTEyLDEySDUyVjEwOGg5MS4wOGExMiwxMiwwLDAsMCwxNy40MSwxNi40OWwyMC0yMGExMiwxMiwwLDAsMCwwLTE3bC0yMC0yMEExMiwxMiwwLDAsMCwxNDMuMDgsODRINDhhMjAsMjAsMCwwLDAtMjAsMjBWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE2MGEyMCwyMCwwLDAsMCwyMC0yMHYtNEExMiwxMiwwLDAsMCwxNjgsMTkyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWMTUyYTE2LDE2LDAsMCwxLTE2LDE2SDExMnYxNmE4LDgsMCwwLDEtMTMuNjYsNS42NmwtMjQtMjRhOCw4LDAsMCwxLDAtMTEuMzJsMjQtMjRBOCw4LDAsMCwxLDExMiwxMzZ2MTZoOTZWNDhIOTZ2OGE4LDgsMCwwLDEtMTYsMFY0OEExNiwxNiwwLDAsMSw5NiwzMkgyMDhBMTYsMTYsMCwwLDEsMjI0LDQ4Wk0xNjgsMTkyYTgsOCwwLDAsMC04LDh2OEg0OFYxMDRoOTZ2MTZhOCw4LDAsMCwwLDEzLjY2LDUuNjZsMjQtMjRhOCw4LDAsMCwwLDAtMTEuMzJsLTI0LTI0QTgsOCwwLDAsMCwxNDQsNzJWODhINDhhMTYsMTYsMCwwLDAtMTYsMTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE2MGExNiwxNiwwLDAsMCwxNi0xNnYtOEE4LDgsMCwwLDAsMTY4LDE5MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMTUyYTgsOCwwLDAsMS04LDhIMTY4djQ4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFYxMDRhOCw4LDAsMCwxLDgtOEg4OFY0OGE4LDgsMCwwLDEsOC04SDIwOEE4LDgsMCwwLDEsMjE2LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCw0OFYxNTJhMTYsMTYsMCwwLDEtMTYsMTZIOTkuMzFsMTAuMzUsMTAuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMybC0yNC0yNGE4LDgsMCwwLDEsMC0xMS4zMmwyNC0yNGE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMOTkuMzEsMTUySDIwOFY0OEg5NnY4YTgsOCwwLDAsMS0xNiwwVjQ4QTE2LDE2LDAsMCwxLDk2LDMySDIwOEExNiwxNiwwLDAsMSwyMjQsNDhaTTE2OCwxOTJhOCw4LDAsMCwwLTgsOHY4SDQ4VjEwNEgxNTYuNjlsLTEwLjM1LDEwLjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmwyNC0yNGE4LDgsMCwwLDAsMC0xMS4zMmwtMjQtMjRhOCw4LDAsMCwwLTExLjMyLDExLjMyTDE1Ni42OSw4OEg0OGExNiwxNiwwLDAsMC0xNiwxNlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTYwYTE2LDE2LDAsMCwwLDE2LTE2di04QTgsOCwwLDAsMCwxNjgsMTkyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Swap";
export { I as Swap };