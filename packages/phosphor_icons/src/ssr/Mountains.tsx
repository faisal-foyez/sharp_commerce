/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Mountains";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsODBhMjgsMjgsMCwxLDAtMjgtMjhBMjgsMjgsMCwwLDAsMTY0LDgwWm0wLTQwYTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDE2NCw0MFptOTAuODgsMTU1LjkyLTU0LjU2LTkyLjA4QTE1Ljg3LDE1Ljg3LDAsMCwwLDE4Ni41NSw5NmgwYTE1Ljg1LDE1Ljg1LDAsMCwwLTEzLjc2LDcuODRMMTQ2LjYzLDE0OGwtNDQuODQtNzYuMWExNiwxNiwwLDAsMC0yNy41OCwwTDEuMTEsMTk1Ljk0QTgsOCwwLDAsMCw4LDIwOEgyNDhhOCw4LDAsMCwwLDYuODgtMTIuMDhaTTg4LDgwbDIzLjU3LDQwSDY0LjQzWk0yMiwxOTJsMzMtNTZoNjZsMTguNzQsMzEuOCwwLDBMMTU0LDE5MlptMTUwLjU3LDAtMTYuNjYtMjguMjhMMTg2LjU1LDExMiwyMzQsMTkyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzZhMjQsMjQsMCwxLDAtMjQtMjRBMjQsMjQsMCwwLDAsMTY0LDc2Wm0wLTQwYTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDE2NCwzNlptODcuNDQsMTYyLTU0LjU2LTkyLjA4QTExLjkxLDExLjkxLDAsMCwwLDE4Ni41NSwxMDBoMGExMS44OSwxMS44OSwwLDAsMC0xMC4zMiw1Ljg4bC0yOS42MSw1MEw5OC4zNCw3My45MWExMiwxMiwwLDAsMC0yMC42OCwwTDQuNTUsMTk4QTQsNCwwLDAsMCw4LDIwNEgyNDhhNCw0LDAsMCwwLDMuNDQtNlpNODQuNTUsNzhhNCw0LDAsMCwxLDYuOSwwbDI3LjEyLDQ2SDU3LjQzWk0xNSwxOTZsMzcuNzEtNjRoNzAuNThMMTYxLDE5NlptMTU1LjI5LDAtMTktMzIuMjlMMTgzLjExLDExMGE0LDQsMCwwLDEsNi44OCwwbDUxLDg2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzhhMjYsMjYsMCwxLDAtMjYtMjZBMjYsMjYsMCwwLDAsMTY0LDc4Wm0wLTQwYTE0LDE0LDAsMSwxLTE0LDE0QTE0LDE0LDAsMCwxLDE2NCwzOFptODkuMTYsMTU4Ljk0TDE5OC42LDEwNC44NmExMy45LDEzLjksMCwwLDAtMTItNi44NmgwYTEzLjg4LDEzLjg4LDAsMCwwLTEyLDYuODZsLTI3Ljg4LDQ3LjA1LTQ2LjU2LTc5YTE0LDE0LDAsMCwwLTI0LjEzLDBMMi44MywxOTdBNiw2LDAsMCwwLDgsMjA2SDI0OGE2LDYsMCwwLDAsNS4xNi05LjA2Wk04Ni4yNyw3OWEyLDIsMCwwLDEsMy40NiwwbDI1LjM0LDQzSDYwLjkzWk0xOC41LDE5NGwzNS4zNi02MGg2OC4yOWwxOS4zLDMyLjc3LDAsMCwxNiwyNy4yWm0xNTIuOTMsMC0xNy44NS0zMC4yOUwxODQuODMsMTExYTIsMiwwLDAsMSwxLjcyLTEsMS45MywxLjkzLDAsMCwxLDEuNzIsMWw0OS4yLDgzWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsODBhMzIsMzIsMCwxLDAtMzItMzJBMzIsMzIsMCwwLDAsMTYwLDgwWm0wLTQwYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDE2MCw0MFptOTQuMzIsMTUzLjg4TDE5OS43NiwxMDEuOEExOS44NSwxOS44NSwwLDAsMCwxODIuNTUsOTJoMGExOS44MywxOS44MywwLDAsMC0xNy4yLDkuOGwtMTguNywzMS41NS0zNy40Mi02My41YTIwLDIwLDAsMCwwLTM0LjQ2LDBMMS42NiwxOTMuOTFBMTIsMTIsMCwwLDAsMTIsMjEySDI0NGExMiwxMiwwLDAsMCwxMC4zMi0xOC4xMlpNOTIsODcuODcsMTA4LjU3LDExNkg3NS40M1pNMzMsMTg4bDI4LjI4LTQ4aDYxLjQ0TDE1MSwxODhabTE0NS44NiwwTDE2MC41NiwxNTdsMjItMzcuMUwyMjIuOTQsMTg4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTQuODgsMTk1LjkybC01NC41Ni05Mi4wOEExNS44NywxNS44NywwLDAsMCwxODYuNTUsOTZoMGExNS44NSwxNS44NSwwLDAsMC0xMy43Niw3Ljg0bC0xNS42NCwyNi4zOWE0LDQsMCwwLDAsMCw0LjA3bDI2LjgsNDUuNDdhOC4xMyw4LjEzLDAsMCwxLTEuODksMTAuNTUsOCw4LDAsMCwxLTExLjgtMi4yNkwxMDEuNzksNzEuODhhMTYsMTYsMCwwLDAtMjcuNTgsMEwxLjExLDE5NS45NGE4LDgsMCwwLDAsMSw5LjUyQTguMjMsOC4yMywwLDAsMCw4LjIzLDIwOEgyNDcuNzdhOC4yOSw4LjI5LDAsMCwwLDYuMDktMi41NUE4LDgsMCwwLDAsMjU0Ljg4LDE5NS45MlpNNjQuNDMsMTIwLDg4LDgwbDIzLjU3LDQwWk0xNDAsNTJhMjQsMjQsMCwxLDEsMjQsMjRBMjQsMjQsMCwwLDEsMTQwLDUyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsNTJhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTQ0LDUyWm00OS40NCw1NS45MmE4LDgsMCwwLDAtMTMuNzcsMGwtMzMsNTUuNzUtMjEtMzUuNjdINTAuMzVMOCwyMDBIMjQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE2NCw4MGEyOCwyOCwwLDEsMC0yOC0yOEEyOCwyOCwwLDAsMCwxNjQsODBabTAtNDBhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTY0LDQwWm05MC44OCwxNTUuOTItNTQuNTYtOTIuMDhBMTUuODcsMTUuODcsMCwwLDAsMTg2LjU1LDk2aDBhMTUuODUsMTUuODUsMCwwLDAtMTMuNzYsNy44NEwxNDYuNjMsMTQ4bC00NC44NC03Ni4xYTE2LDE2LDAsMCwwLTI3LjU4LDBMMS4xMSwxOTUuOTRBOCw4LDAsMCwwLDgsMjA4SDI0OGE4LDgsMCwwLDAsNi44OC0xMi4wOFpNODgsODBsMjMuNTcsNDBINjQuNDNaTTIyLDE5MmwzMy01Nmg2NmwzMyw1NlptMTUwLjU3LDAtMTYuNjYtMjguMjhMMTg2LjU1LDExMiwyMzQsMTkyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Mountains";
export { I as Mountains };