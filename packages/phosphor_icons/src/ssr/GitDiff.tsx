/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/GitDiff";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsMTUyYTgsOCwwLDAsMC04LDh2MjguNjlMNjYuMzQsMTUxQTgsOCwwLDAsMSw2NCwxNDUuMzdWOTVhMzIsMzIsMCwxLDAtMTYsMHY1MC4zOGEyMy44NSwyMy44NSwwLDAsMCw3LDE3TDkyLjY5LDIwMEg2NGE4LDgsMCwwLDAsMCwxNmg0OGE4LDgsMCwwLDAsOC04VjE2MEE4LDgsMCwwLDAsMTEyLDE1MlpNNDAsNjRBMTYsMTYsMCwxLDEsNTYsODAsMTYsMTYsMCwwLDEsNDAsNjRabTE2OCw5N1YxMTAuNjNhMjMuODUsMjMuODUsMCwwLDAtNy0xN0wxNjMuMzEsNTZIMTkyYTgsOCwwLDAsMCwwLTE2SDE0NGE4LDgsMCwwLDAtOCw4Vjk2YTgsOCwwLDAsMCwxNiwwVjY3LjMxTDE4OS42NiwxMDVhOCw4LDAsMCwxLDIuMzQsNS42NlYxNjFhMzIsMzIsMCwxLDAsMTYsMFptLTgsNDdhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMjAwLDIwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsMTU2YTQsNCwwLDAsMC00LDR2MzguMzRMNjMuNTEsMTUzLjg2QTEyLDEyLDAsMCwxLDYwLDE0NS4zN1Y5MS43MWEyOCwyOCwwLDEsMC04LDB2NTMuNjZhMTkuODUsMTkuODUsMCwwLDAsNS44NiwxNC4xNEwxMDIuMzQsMjA0SDY0YTQsNCwwLDAsMCwwLDhoNDhhNCw0LDAsMCwwLDQtNFYxNjBBNCw0LDAsMCwwLDExMiwxNTZaTTM2LDY0QTIwLDIwLDAsMSwxLDU2LDg0LDIwLDIwLDAsMCwxLDM2LDY0Wk0yMDQsMTY0LjI5VjExMC42M2ExOS44NSwxOS44NSwwLDAsMC01Ljg2LTE0LjE0TDE1My42Niw1MkgxOTJhNCw0LDAsMCwwLDAtOEgxNDRhNCw0LDAsMCwwLTQsNFY5NmE0LDQsMCwwLDAsOCwwVjU3LjY2bDQ0LjQ5LDQ0LjQ4YTEyLDEyLDAsMCwxLDMuNTEsOC40OXY1My42NmEyOCwyOCwwLDEsMCw4LDBaTTIwMCwyMTJhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMjAwLDIxMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsMTU0YTYsNiwwLDAsMC02LDZ2MzMuNTJMNjQuOTMsMTUyLjQ0QTkuOTMsOS45MywwLDAsMSw2MiwxNDUuMzd2LTUyYTMwLDMwLDAsMSwwLTEyLDB2NTJhMjEuODgsMjEuODgsMCwwLDAsNi40NCwxNS41Nkw5Ny41MiwyMDJINjRhNiw2LDAsMCwwLDAsMTJoNDhhNiw2LDAsMCwwLDYtNlYxNjBBNiw2LDAsMCwwLDExMiwxNTRaTTM4LDY0QTE4LDE4LDAsMSwxLDU2LDgyLDE4LDE4LDAsMCwxLDM4LDY0Wm0xNjgsOTguNnYtNTJhMjEuODgsMjEuODgsMCwwLDAtNi40NC0xNS41NkwxNTguNDgsNTRIMTkyYTYsNiwwLDAsMCwwLTEySDE0NGE2LDYsMCwwLDAtNiw2Vjk2YTYsNiwwLDAsMCwxMiwwVjYyLjQ4bDQxLjA3LDQxLjA4YTkuOTMsOS45MywwLDAsMSwyLjkzLDcuMDd2NTJhMzAsMzAsMCwxLDAsMTIsMFpNMjAwLDIxMGExOCwxOCwwLDEsMSwxOC0xOEExOCwxOCwwLDAsMSwyMDAsMjEwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsMTQ4YTEyLDEyLDAsMCwwLTEyLDEydjE5TDY5LjE3LDE0OC4yQTQsNCwwLDAsMSw2OCwxNDUuMzdWOTcuOTRhMzYsMzYsMCwxLDAtMjQsMHY0Ny40M2EyNy44MSwyNy44MSwwLDAsMCw4LjIsMTkuOEw4MywxOTZINjRhMTIsMTIsMCwwLDAsMCwyNGg0OGExMiwxMiwwLDAsMCwxMi0xMlYxNjBBMTIsMTIsMCwwLDAsMTEyLDE0OFpNNTYsNTJBMTIsMTIsMCwxLDEsNDQsNjQsMTIsMTIsMCwwLDEsNTYsNTJaTTIxMiwxNTguMDZWMTEwLjYzYTI3LjgxLDI3LjgxLDAsMCwwLTguMi0xOS44TDE3Myw2MGgxOWExMiwxMiwwLDAsMCwwLTI0SDE0NGExMiwxMiwwLDAsMC0xMiwxMlY5NmExMiwxMiwwLDAsMCwyNCwwVjc3bDMwLjgzLDMwLjgzYTQsNCwwLDAsMSwxLjE3LDIuODN2NDcuNDNhMzYsMzYsMCwxLDAsMjQsMFpNMjAwLDIwNGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwyMDAsMjA0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTguMTgsMjEzLjA4Yy0uMTEuMTQtLjI0LjI3LS4zNi40bC0uMTYuMTgtLjE3LjE1YTQuODMsNC44MywwLDAsMS0uNDIuMzcsMy45MiwzLjkyLDAsMCwxLS4zMi4yNWwtLjMuMjItLjM4LjIzYTIuOTEsMi45MSwwLDAsMS0uMy4xN2wtLjM3LjE5LS4zNC4xNS0uMzYuMTNhMi44NCwyLjg0LDAsMCwxLS4zOC4xM2wtLjM2LjFjLS4xNCwwLS4yNi4wNy0uNC4wOWwtLjQyLjA3LS4zNS4wNWE3LDcsMCwwLDEtLjc5LDBINjRhOCw4LDAsMCwxLDAtMTZIOTIuNjlMNTUsMTYyLjM0YTIzLjg1LDIzLjg1LDAsMCwxLTctMTdWOTVhMzIsMzIsMCwxLDEsMTYsMHY1MC4zOEE4LDgsMCwwLDAsNjYuMzQsMTUxTDEwNCwxODguNjlWMTYwYTgsOCwwLDAsMSwxNiwwdjQ4YTcsNywwLDAsMSwwLC44YzAsLjExLDAsLjIxLDAsLjMyczAsLjMtLjA3LjQ2YTIuODMsMi44MywwLDAsMS0uMDkuMzdjMCwuMTMtLjA2LjI2LS4xLjM5cy0uMDguMjMtLjEyLjM1bC0uMTQuMzktLjE1LjMxYy0uMDYuMTMtLjEyLjI3LS4xOS40cy0uMTEuMTgtLjE2LjI4bC0uMjQuMzktLjIxLjI4Wk0yMDgsMTYxVjExMC42M2EyMy44NSwyMy44NSwwLDAsMC03LTE3TDE2My4zMSw1NkgxOTJhOCw4LDAsMCwwLDAtMTZIMTQzLjgybC0uNiwwYy0uMTQsMC0uMjgsMC0uNDEuMDZsLS4zNywwLS40My4xMS0uMzMuMDgtLjQuMTQtLjM0LjEzLS4zNS4xNi0uMzYuMThhMy4xNCwzLjE0LDAsMCwwLS4zMS4xOGMtLjEyLjA3LS4yNS4xNC0uMzYuMjJhMy41NSwzLjU1LDAsMCwwLS4zMS4yMywzLjgxLDMuODEsMCwwLDAtLjMyLjI0Yy0uMTUuMTItLjI4LjI0LS40Mi4zN2wtLjE3LjE1LS4xNi4xOGMtLjEyLjEzLS4yNS4yNi0uMzYuNGwtLjI2LjM1LS4yMS4yOC0uMjQuMzljLS4wNS4xLS4xMS4xOS0uMTYuMjhzLS4xMy4yNy0uMTkuNGwtLjE1LjMxLS4xNC4zOWMwLC4xMi0uMDkuMjMtLjEyLjM1cy0uMDcuMjYtLjEuMzlhMi44MywyLjgzLDAsMCwwLS4wOS4zN2MwLC4xNiwwLC4zMS0uMDcuNDZzMCwuMjEtLjA1LjMyYTcsNywwLDAsMCwwLC44Vjk2YTgsOCwwLDAsMCwxNiwwVjY3LjMxTDE4OS42NiwxMDVhOCw4LDAsMCwxLDIuMzQsNS42NlYxNjFhMzIsMzIsMCwxLDAsMTYsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCw2NEEyNCwyNCwwLDEsMSw1Niw0MCwyNCwyNCwwLDAsMSw4MCw2NFpNMjAwLDE2OGEyNCwyNCwwLDEsMCwyNCwyNEEyNCwyNCwwLDAsMCwyMDAsMTY4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTExMiwxNTJhOCw4LDAsMCwwLTgsOHYyOC42OUw2Ni4zNCwxNTFBOCw4LDAsMCwxLDY0LDE0NS4zN1Y5NWEzMiwzMiwwLDEsMC0xNiwwdjUwLjM4YTIzLjg1LDIzLjg1LDAsMCwwLDcsMTdMOTIuNjksMjAwSDY0YTgsOCwwLDAsMCwwLDE2aDQ4YTgsOCwwLDAsMCw4LThWMTYwQTgsOCwwLDAsMCwxMTIsMTUyWk00MCw2NEExNiwxNiwwLDEsMSw1Niw4MCwxNiwxNiwwLDAsMSw0MCw2NFptMTY4LDk3VjExMC42M2EyMy44NSwyMy44NSwwLDAsMC03LTE3TDE2My4zMSw1NkgxOTJhOCw4LDAsMCwwLDAtMTZIMTQ0YTgsOCwwLDAsMC04LDhWOTZhOCw4LDAsMCwwLDE2LDBWNjcuMzFMMTg5LjY2LDEwNWE4LDgsMCwwLDEsMi4zNCw1LjY2VjE2MWEzMiwzMiwwLDEsMCwxNiwwWm0tOCw0N2ExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwyMDAsMjA4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "GitDiff";
export { I as GitDiff };