/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/BracketsAngle";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Ni43NSw0NC4zLDMzLjQ4LDEyOGw1My4yNyw4My43YTgsOCwwLDAsMS0yLjQ2LDExLjA1QTcuOTEsNy45MSwwLDAsMSw4MCwyMjRhOCw4LDAsMCwxLTYuNzYtMy43MWwtNTYtODhhOCw4LDAsMCwxLDAtOC41OWw1Ni04OGE4LDgsMCwxLDEsMTMuNSw4LjU5Wm0xNTIsNzkuNDEtNTYtODhhOCw4LDAsMSwwLTEzLjUsOC41OUwyMjIuNTIsMTI4bC01My4yNyw4My43YTgsOCwwLDAsMCwyLjQ2LDExLjA1QTcuOTEsNy45MSwwLDAsMCwxNzYsMjI0YTgsOCwwLDAsMCw2Ljc2LTMuNzFsNTYtODhBOCw4LDAsMCwwLDIzOC43NSwxMjMuNzFaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04My4zNyw0Mi4xNSwyOC43NCwxMjhsNTQuNjMsODUuODVhNCw0LDAsMCwxLTEuMjIsNS41MkE0LDQsMCwwLDEsODAsMjIwYTQsNCwwLDAsMS0zLjM3LTEuODVsLTU2LTg4YTQsNCwwLDAsMSwwLTQuM2w1Ni04OGE0LDQsMCwxLDEsNi43NCw0LjNabTE1Miw4My43LTU2LTg4YTQsNCwwLDEsMC02Ljc0LDQuM0wyMjcuMjYsMTI4bC01NC42Myw4NS44NWE0LDQsMCwwLDAsMS4yMiw1LjUyQTQsNCwwLDAsMCwxNzYsMjIwYTQsNCwwLDAsMCwzLjM3LTEuODVsNTYtODhBNCw0LDAsMCwwLDIzNS4zNywxMjUuODVaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NS4wNiw0My4yMiwzMS4xMSwxMjhsNTQsODQuNzhhNiw2LDAsMCwxLTEuODQsOC4yOCw2LDYsMCwwLDEtOC4yOC0xLjg0bC01Ni04OGE2LDYsMCwwLDEsMC02LjQ0bDU2LTg4YTYsNiwwLDAsMSwxMC4xMiw2LjQ0Wm0xNTIsODEuNTYtNTYtODhhNiw2LDAsMSwwLTEwLjEyLDYuNDRMMjI0Ljg5LDEyOGwtNTMuOTUsODQuNzhhNiw2LDAsMCwwLDEuODQsOC4yOCw2LDYsMCwwLDAsOC4yOC0xLjg0bDU2LTg4QTYsNiwwLDAsMCwyMzcuMDYsMTI0Ljc4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MC4xMiw0Ni40NCwzOC4yMiwxMjhsNTEuOSw4MS41NmExMiwxMiwwLDEsMS0yMC4yNCwxMi44OGwtNTYtODhhMTIsMTIsMCwwLDEsMC0xMi44OGw1Ni04OEExMiwxMiwwLDAsMSw5MC4xMiw0Ni40NFptMTUyLDc1LjEyLTU2LTg4YTEyLDEyLDAsMSwwLTIwLjI0LDEyLjg4TDIxNy43OCwxMjhsLTUxLjksODEuNTZhMTIsMTIsMCwxLDAsMjAuMjQsMTIuODhsNTYtODhBMTIsMTIsMCwwLDAsMjQyLjEyLDEyMS41NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTEwMywxODBBOCw4LDAsMCwxLDg5LjA1LDE4OGwtMzItNTZhOCw4LDAsMCwxLDAtNy45NGwzMi01NkE4LDgsMCwwLDEsMTAzLDc2TDczLjIxLDEyOFpNMTk5LDEzMmwtMzIsNTZhOCw4LDAsMCwxLTEzLjktNy45NGwyOS43NC01MkwxNTMuMDUsNzZBOCw4LDAsMSwxLDE2Nyw2OGwzMiw1NkE4LDgsMCwwLDEsMTk5LDEzMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI4bC01Niw4OEg4MEwyNCwxMjgsODAsNDBoOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNODYuNzUsNDQuMywzMy40OCwxMjhsNTMuMjcsODMuN2E4LDgsMCwwLDEtMi40NiwxMS4wNUE3LjkxLDcuOTEsMCwwLDEsODAsMjI0YTgsOCwwLDAsMS02Ljc2LTMuNzFsLTU2LTg4YTgsOCwwLDAsMSwwLTguNTlsNTYtODhhOCw4LDAsMSwxLDEzLjUsOC41OVptMTUyLDc5LjQxLTU2LTg4YTgsOCwwLDEsMC0xMy41LDguNTlMMjIyLjUyLDEyOGwtNTMuMjcsODMuN2E4LDgsMCwwLDAsMi40NiwxMS4wNUE3LjkxLDcuOTEsMCwwLDAsMTc2LDIyNGE4LDgsMCwwLDAsNi43Ni0zLjcxbDU2LTg4QTgsOCwwLDAsMCwyMzguNzUsMTIzLjcxWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BracketsAngle";
export { I as BracketsAngle };