/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SpeakerSimpleSlash";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTUyVjEwNGE4LDgsMCwwLDEsMTYsMHY0OGE4LDgsMCwwLDEtMTYsMFptNDAtNzJhOCw4LDAsMCwwLTgsOHY4MGE4LDgsMCwwLDAsMTYsMFY4OEE4LDgsMCwwLDAsMjMyLDgwWk0yMjEuOTIsMjEwLjYyYTgsOCwwLDEsMS0xMS44NCwxMC43NkwxNjgsMTc1LjA5VjIyNGE4LDgsMCwwLDEtMTIuOTEsNi4zMUw4NS4yNSwxNzZINDBhMTYsMTYsMCwwLDEtMTYtMTZWOTZBMTYsMTYsMCwwLDEsNDAsODBIODEuNTVMNTAuMDgsNDUuMzhBOCw4LDAsMCwxLDYxLjkyLDM0LjYyWk0xNTIsMTU3LjQ5LDk2LjEsOTZINDB2NjRIODhhNy45NCw3Ljk0LDAsMCwxLDQuOTEsMS42OUwxNTIsMjA3LjY0Wk0xMjUuMDYsNjkuMzFsMjYuOTQtMjF2NTguNDdhOCw4LDAsMCwwLDE2LDBWMzJhOCw4LDAsMCwwLTEyLjkxLTYuMzFsLTM5Ljg1LDMxYTgsOCwwLDAsMCw5LjgyLDEyLjYzWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTUyVjEwNGE0LDQsMCwwLDEsOCwwdjQ4YTQsNCwwLDAsMS04LDBabTM2LTY4YTQsNCwwLDAsMC00LDR2ODBhNCw0LDAsMCwwLDgsMFY4OEE0LDQsMCwwLDAsMjMyLDg0Wk0yMTksMjEzLjMxYTQsNCwwLDEsMS01LjkyLDUuMzhsLTQ5LTUzLjk0VjIyNGE0LDQsMCwwLDEtMi4yNCwzLjU5QTMuOTIsMy45MiwwLDAsMSwxNjAsMjI4YTQuMDcsNC4wNywwLDAsMS0yLjQ2LS44NEw4Ni42MywxNzJINDBhMTIsMTIsMCwwLDEtMTItMTJWOTZBMTIsMTIsMCwwLDEsNDAsODRIOTAuNTlMNTMsNDIuNjlBNCw0LDAsMCwxLDU5LDM3LjMxWk0xNTYsMTU2LDk3Ljg3LDkySDQwYTQsNCwwLDAsMC00LDR2NjRhNCw0LDAsMCwwLDQsNEg4OGE0LjA2LDQuMDYsMCwwLDEsMi40Ni44NGw2NS41NCw1MVptLTMzLjM5LTg5LjgsMzMuMzktMjZ2NjYuNjVhNCw0LDAsMCwwLDgsMFYzMmE0LDQsMCwwLDAtNi40Ni0zLjE2bC0zOS44NSwzMWE0LDQsMCwxLDAsNC45Miw2LjMxWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTQsMTUyVjEwNGE2LDYsMCwwLDEsMTIsMHY0OGE2LDYsMCwwLDEtMTIsMFptMzgtNzBhNiw2LDAsMCwwLTYsNnY4MGE2LDYsMCwwLDAsMTIsMFY4OEE2LDYsMCwwLDAsMjMyLDgyWk0yMjAuNDQsMjEyYTYsNiwwLDAsMS04Ljg4LDguMDhMMTY2LDE2OS45MlYyMjRhNiw2LDAsMCwxLTkuNjgsNC43NEw4NS45NCwxNzRINDBhMTQsMTQsMCwwLDEtMTQtMTRWOTZBMTQsMTQsMCwwLDEsNDAsODJIODYuMDdMNTEuNTYsNDRBNiw2LDAsMCwxLDYwLjQ0LDM2Wk0xNTQsMTU2LjcyLDk3LDk0SDQwYTIsMiwwLDAsMC0yLDJ2NjRhMiwyLDAsMCwwLDIsMkg4OGE2LDYsMCwwLDEsMy42OCwxLjI2TDE1NCwyMTEuNzNabS0zMC4xNy04OUwxNTQsNDQuMjd2NjIuNTZhNiw2LDAsMCwwLDEyLDBWMzJhNiw2LDAsMCwwLTkuNjgtNC43NGwtMzkuODUsMzFhNiw2LDAsMSwwLDcuMzYsOS40N1oiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsODh2ODBhMTIsMTIsMCwwLDEtMjQsMFY4OGExMiwxMiwwLDAsMSwyNCwwWk0yMjQuODgsMjA3LjkzYTEyLDEyLDAsMSwxLTE3Ljc2LDE2LjE0TDE3MiwxODUuNDRWMjI0YTEyLDEyLDAsMCwxLTE5LjM3LDkuNDdMODMuODgsMTgwSDQwYTIwLDIwLDAsMCwxLTIwLTIwVjk2QTIwLDIwLDAsMCwxLDQwLDc2SDcyLjUxTDQ3LjEyLDQ4LjA3QTEyLDEyLDAsMCwxLDY0Ljg4LDMxLjkzWk0xNDgsMTU5LDk0LjMzLDEwMEg0NHY1Nkg4OGExMiwxMiwwLDAsMSw3LjM3LDIuNTNMMTQ4LDE5OS40NlptLTE0LjE1LTkxLjUsMTQuMTUtMTF2MzguNGExMiwxMiwwLDAsMCwyNCwwVjMyYTEyLDEyLDAsMCwwLTE5LjM3LTkuNDdMMTE5LjEyLDQ4LjZhMTIsMTIsMCwxLDAsMTQuNzMsMTguOTRaTTIwMCwxNTAuOTRhMTIsMTIsMCwwLDAsMTItMTJWMTA0YTEyLDEyLDAsMCwwLTI0LDB2MzQuOTRBMTIsMTIsMCwwLDAsMjAwLDE1MC45NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuOTIsMjEwLjYyYTgsOCwwLDEsMS0xMS44NCwxMC43NkwxNjgsMTc1LjA5djQ4LjZhOC4yOSw4LjI5LDAsMCwxLTMuOTEsNy4xOCw4LDgsMCwwLDEtOS0uNTZMODUuMjUsMTc2SDQwYTE2LDE2LDAsMCwxLTE2LTE2Vjk2QTE2LDE2LDAsMCwxLDQwLDgwSDgxLjU1TDUwLjA4LDQ1LjM4QTgsOCwwLDAsMSw2MS45MiwzNC42MlpNMjAwLjUzLDE2MGE4LjE3LDguMTcsMCwwLDAsNy40Ny04LjI1VjEwNC4yN0E4LjE3LDguMTcsMCwwLDAsMjAwLjUzLDk2YTgsOCwwLDAsMC04LjUzLDh2NDhBOCw4LDAsMCwwLDIwMC41MywxNjBaTTE2MSwxMTkuODdhNCw0LDAsMCwwLDctMi43VjMyLjI0YTguMjUsOC4yNSwwLDAsMC0yLjg4LTYuMzksOCw4LDAsMCwwLTEwLS4xNkwxMTEuODMsNTkuMzNhNCw0LDAsMCwwLS41LDUuODVaTTIzMS40Nyw4MEE4LjE3LDguMTcsMCwwLDAsMjI0LDg4LjI3djc5LjQ2YTguMTcsOC4xNywwLDAsMCw3LjQ3LDguMjUsOCw4LDAsMCwwLDguNTMtOFY4OEE4LDgsMCwwLDAsMjMxLjQ3LDgwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMzJWMjI0TDg4LDE2OEg0MGE4LDgsMCwwLDEtOC04Vjk2YTgsOCwwLDAsMSw4LThIODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTkyLDE1MlYxMDRhOCw4LDAsMCwxLDE2LDB2NDhhOCw4LDAsMCwxLTE2LDBabTQwLTcyYTgsOCwwLDAsMC04LDh2ODBhOCw4LDAsMCwwLDE2LDBWODhBOCw4LDAsMCwwLDIzMiw4MFpNMjIxLjkyLDIxMC42MmE4LDgsMCwxLDEtMTEuODQsMTAuNzZMMTY4LDE3NS4wOVYyMjRhOCw4LDAsMCwxLTEyLjkxLDYuMzFMODUuMjUsMTc2SDQwYTE2LDE2LDAsMCwxLTE2LTE2Vjk2QTE2LDE2LDAsMCwxLDQwLDgwSDgxLjU1TDUwLjA4LDQ1LjM4QTgsOCwwLDAsMSw2MS45MiwzNC42MlpNMTUyLDE1Ny40OSw5Ni4xLDk2SDQwdjY0SDg4YTcuOTQsNy45NCwwLDAsMSw0LjkxLDEuNjlMMTUyLDIwNy42NFpNMTI1LjA2LDY5LjMxbDI2Ljk0LTIxdjU4LjQ3YTgsOCwwLDAsMCwxNiwwVjMyYTgsOCwwLDAsMC0xMi45MS02LjMxbC0zOS44NSwzMWE4LDgsMCwwLDAsOS44MiwxMi42M1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SpeakerSimpleSlash";
export { I as SpeakerSimpleSlash };