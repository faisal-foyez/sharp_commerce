/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SpotifyLogo";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptMzEuMDctNDYuMjZhOCw4LDAsMCwxLTEwLjgxLDMuMzMsNDIuNzksNDIuNzksMCwwLDAtNDAuNTIsMCw4LDgsMCwwLDEtNy40OC0xNC4xNCw1OS4zMyw1OS4zMywwLDAsMSw1NS40OCwwQTgsOCwwLDAsMSwxNTkuMDcsMTY5Ljc0Wm0zMi01NmE4LDgsMCwwLDEtMTAuODMsMy4yOSwxMTAuNjIsMTEwLjYyLDAsMCwwLTEwNC40NiwwLDgsOCwwLDAsMS03LjU0LTE0LjEyLDEyNi42NywxMjYuNjcsMCwwLDEsMTE5LjU0LDBBOCw4LDAsMCwxLDE5MS4wNiwxMTMuNzZabS0xNiwyOGE4LDgsMCwwLDEtMTAuODIsMy4zLDc3LDc3LDAsMCwwLTcyLjQ4LDAsOCw4LDAsMCwxLTcuNTItMTQuMTIsOTMsOTMsMCwwLDEsODcuNTIsMEE4LDgsMCwwLDEsMTc1LjA2LDE0MS43NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptMjcuNTQtNTIuMTNhNCw0LDAsMCwxLTUuNDEsMS42Nyw0Ni43Myw0Ni43MywwLDAsMC00NC4yNiwwQTQuMDcsNC4wNywwLDAsMSwxMDQsMTcwYTQsNCwwLDAsMS0xLjg3LTcuNTQsNTUuMzksNTUuMzksMCwwLDEsNTEuNzQsMEE0LDQsMCwwLDEsMTU1LjU0LDE2Ny44N1ptMzItNTZhNCw0LDAsMCwxLTUuNDEsMS42NSwxMTQuNjcsMTE0LjY3LDAsMCwwLTEwOC4yNCwwLDQsNCwwLDAsMS0zLjc2LTcuMDYsMTIyLjY1LDEyMi42NSwwLDAsMSwxMTUuNzYsMEE0LDQsMCwwLDEsMTg3LjUzLDExMS44N1ptLTE2LDI4YTQsNCwwLDAsMS01LjQxLDEuNjUsODEsODEsMCwwLDAtNzYuMjQsMCw0LDQsMCwwLDEtMy43Ni03LjA2LDg5LDg5LDAsMCwxLDgzLjc2LDBBNCw0LDAsMCwxLDE3MS41MywxMzkuODhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptMjkuMzEtNDkuMmE2LDYsMCwwLDEtOC4xMSwyLjUxLDQ0Ljc1LDQ0Ljc1LDAsMCwwLTQyLjQsMCw2LDYsMCwxLDEtNS42LTEwLjYyLDU3LjM3LDU3LjM3LDAsMCwxLDUzLjYsMEE2LDYsMCwwLDEsMTU3LjMxLDE2OC44Wm0zMi01NmE2LDYsMCwwLDEtOC4xMiwyLjQ2LDExMi42NywxMTIuNjcsMCwwLDAtMTA2LjM0LDAsNiw2LDAsMSwxLTUuNjYtMTAuNTgsMTI0LjY1LDEyNC42NSwwLDAsMSwxMTcuNjYsMEE2LDYsMCwwLDEsMTg5LjI5LDExMi44MlptLTE2LDI4QTYsNiwwLDAsMSwxNjgsMTQ0YTYuMDcsNi4wNywwLDAsMS0yLjgyLS43LDc5LDc5LDAsMCwwLTc0LjM2LDAsNiw2LDAsMSwxLTUuNjQtMTAuNiw5MSw5MSwwLDAsMSw4NS42NCwwQTYsNiwwLDAsMSwxNzMuMywxNDAuODJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWm02Ni41OS04NC4zNmExMiwxMiwwLDAsMS0xNi4yNCw0LjkzLDEwNi43LDEwNi43LDAsMCwwLTEwMC43LDBBMTEuODMsMTEuODMsMCwwLDEsNzIsMTM0YTEyLDEyLDAsMCwxLTUuNjYtMjIuNTgsMTMwLjYxLDEzMC42MSwwLDAsMSwxMjMuMywwQTEyLDEyLDAsMCwxLDE5NC41OSwxMjcuNjRabS0xNiwzNmExMiwxMiwwLDAsMS0xNi4yMyw1LDczLDczLDAsMCwwLTY4LjcyLDAsMTIsMTIsMCwwLDEtMTEuMjgtMjEuMTgsOTcsOTcsMCwwLDEsOTEuMjgsMEExMiwxMiwwLDAsMSwxNzguNTksMTYzLjY0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0zMS4wNywxNDUuNzRhOCw4LDAsMCwxLTEwLjgxLDMuMzMsNDIuNzksNDIuNzksMCwwLDAtNDAuNTIsMCw4LDgsMCwwLDEtNy40OC0xNC4xNCw1OS4zMyw1OS4zMywwLDAsMSw1NS40OCwwQTgsOCwwLDAsMSwxNTkuMDcsMTY5Ljc0Wm0xNi0yOGE4LDgsMCwwLDEtMTAuODIsMy4zLDc3LjA3LDc3LjA3LDAsMCwwLTcyLjQ4LDAsOCw4LDAsMCwxLTcuNTItMTQuMTIsOTMsOTMsMCwwLDEsODcuNTIsMEE4LDgsMCwwLDEsMTc1LjA2LDE0MS43NlptMTYtMjhhOCw4LDAsMCwxLTEwLjgzLDMuMjksMTEwLjYyLDExMC42MiwwLDAsMC0xMDQuNDYsMCw4LDgsMCwwLDEtNy41NC0xNC4xMiwxMjYuNjcsMTI2LjY3LDAsMCwxLDExOS41NCwwQTgsOCwwLDAsMSwxOTEuMDYsMTEzLjc2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZabTMxLjA3LTQ2LjI2YTgsOCwwLDAsMS0xMC44MSwzLjMzLDQyLjc5LDQyLjc5LDAsMCwwLTQwLjUyLDAsOCw4LDAsMCwxLTcuNDgtMTQuMTQsNTkuMzMsNTkuMzMsMCwwLDEsNTUuNDgsMEE4LDgsMCwwLDEsMTU5LjA3LDE2OS43NFptMzItNTZhOCw4LDAsMCwxLTEwLjgzLDMuMjksMTEwLjYyLDExMC42MiwwLDAsMC0xMDQuNDYsMCw4LDgsMCwwLDEtNy41NC0xNC4xMiwxMjYuNjcsMTI2LjY3LDAsMCwxLDExOS41NCwwQTgsOCwwLDAsMSwxOTEuMDYsMTEzLjc2Wm0tMTYsMjhhOCw4LDAsMCwxLTEwLjgyLDMuMyw3Ny4wNyw3Ny4wNywwLDAsMC03Mi40OCwwLDgsOCwwLDAsMS03LjUyLTE0LjEyLDkzLDkzLDAsMCwxLDg3LjUyLDBBOCw4LDAsMCwxLDE3NS4wNiwxNDEuNzZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SpotifyLogo";
export { I as SpotifyLogo };