/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ProjectorScreen";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWNDhhMTYsMTYsMCwwLDAtMTYtMTZINDBBMTYsMTYsMCwwLDAsMjQsNDhWNjRBMTYsMTYsMCwwLDAsNDAsODB2OTZIMzJhOCw4LDAsMCwwLDAsMTZoODh2MTcuMzhhMjQsMjQsMCwxLDAsMTYsMFYxOTJoODhhOCw4LDAsMCwwLDAtMTZoLThWODBBMTYsMTYsMCwwLDAsMjMyLDY0Wk0xMjgsMjQwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyOCwyNDBaTTQwLDQ4SDIxNlY2NEg0MFpNMjAwLDE3Nkg1NlY4MEgyMDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzZhMTIsMTIsMCwwLDAsMTItMTJWNDhhMTIsMTIsMCwwLDAtMTItMTJINDBBMTIsMTIsMCwwLDAsMjgsNDhWNjRBMTIsMTIsMCwwLDAsNDAsNzZoNFYxODBIMzJhNCw0LDAsMCwwLDAsOGg5MnYyNC40YTIwLDIwLDAsMSwwLDgsMFYxODhoOTJhNCw0LDAsMCwwLDAtOEgyMTJWNzZaTTE0MCwyMzJhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDIzMlpNMzYsNjRWNDhhNCw0LDAsMCwxLDQtNEgyMTZhNCw0LDAsMCwxLDQsNFY2NGE0LDQsMCwwLDEtNCw0SDQwQTQsNCwwLDAsMSwzNiw2NFpNMjA0LDE4MEg1MlY3NkgyMDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzhhMTQsMTQsMCwwLDAsMTQtMTRWNDhhMTQsMTQsMCwwLDAtMTQtMTRINDBBMTQsMTQsMCwwLDAsMjYsNDhWNjRBMTQsMTQsMCwwLDAsNDAsNzhoMlYxNzhIMzJhNiw2LDAsMCwwLDAsMTJoOTB2MjAuODRhMjIsMjIsMCwxLDAsMTIsMFYxOTBoOTBhNiw2LDAsMCwwLDAtMTJIMjE0Vjc4Wk0xMzgsMjMyYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwyMzJaTTM4LDY0VjQ4YTIsMiwwLDAsMSwyLTJIMjE2YTIsMiwwLDAsMSwyLDJWNjRhMiwyLDAsMCwxLTIsMkg0MEEyLDIsMCwwLDEsMzgsNjRaTTIwMiwxNzhINTRWNzhIMjAyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNzJWNDhhMjAsMjAsMCwwLDAtMjAtMjBINDBBMjAsMjAsMCwwLDAsMjAsNDhWNzJBMjAsMjAsMCwwLDAsMzYsOTEuNlYxNjRIMzJhMTIsMTIsMCwwLDAsMCwyNGg4NHYyMy4yMmEyNCwyNCwwLDEsMCwyNCwwVjE4OGg4NGExMiwxMiwwLDAsMCwwLTI0aC00VjkxLjZBMjAsMjAsMCwwLDAsMjM2LDcyWk00NCw1MkgyMTJWNjhINDRaTTYwLDE2NFY5MkgxOTZ2NzJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWNDhhMTYsMTYsMCwwLDAtMTYtMTZINDBBMTYsMTYsMCwwLDAsMjQsNDhWNjRBMTYsMTYsMCwwLDAsNDAsODB2OTZIMzJhOCw4LDAsMCwwLDAsMTZoODh2MTcuMzhhMjQsMjQsMCwxLDAsMTYsMFYxOTJoODhhOCw4LDAsMCwwLDAtMTZoLThWODBBMTYsMTYsMCwwLDAsMjMyLDY0Wk0xMjgsMjQwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyOCwyNDBaTTQwLDQ4SDIxNlY2NEg0MFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzJWMTg0SDQ4VjcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiw2NFY0OGExNiwxNiwwLDAsMC0xNi0xNkg0MEExNiwxNiwwLDAsMCwyNCw0OFY2NEExNiwxNiwwLDAsMCw0MCw4MHY5NkgzMmE4LDgsMCwwLDAsMCwxNmg4OHYxNy4zOGEyNCwyNCwwLDEsMCwxNiwwVjE5Mmg4OGE4LDgsMCwwLDAsMC0xNmgtOFY4MEExNiwxNiwwLDAsMCwyMzIsNjRaTTEyOCwyNDBhOCw4LDAsMSwxLDgtOEE4LDgsMCwwLDEsMTI4LDI0MFpNNDAsNDhIMjE2VjY0SDQwWk0yMDAsMTc2SDU2VjgwSDIwMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ProjectorScreen";
export { I as ProjectorScreen };