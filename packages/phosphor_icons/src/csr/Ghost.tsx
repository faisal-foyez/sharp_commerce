/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Ghost";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsMTE2YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDExMiwxMTZabTQ0LTEyYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDE1NiwxMDRabTY4LDE2djk2YTgsOCwwLDAsMS0xMy4wNyw2LjE5bC0yNC4yNi0xOS44NUwxNjIuNCwyMjIuMTlhOCw4LDAsMCwxLTEwLjEzLDBMMTI4LDIwMi4zNGwtMjQuMjcsMTkuODVhOCw4LDAsMCwxLTEwLjEzLDBMNjkuMzMsMjAyLjM0LDQ1LjA3LDIyMi4xOUE4LDgsMCwwLDEsMzIsMjE2VjEyMGE5Niw5NiwwLDAsMSwxOTIsMFptLTE2LDBhODAsODAsMCwwLDAtMTYwLDB2NzkuMTJsMTYuMjctMTMuMzFhOCw4LDAsMCwxLDEwLjEzLDBsMjQuMjcsMTkuODUsMjQuMjYtMTkuODVhOCw4LDAsMCwxLDEwLjE0LDBsMjQuMjYsMTkuODUsMjQuMjctMTkuODVhOCw4LDAsMCwxLDEwLjEzLDBMMjA4LDE5OS4xMloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsMTE2YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEwOCwxMTZabTQ4LThhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsMTU2LDEwOFptNjQsMTJ2OTZhNCw0LDAsMCwxLTYuNTMsMy4xbC0yNi44LTIxLjkzLTI2LjgsMjEuOTNhNCw0LDAsMCwxLTUuMDcsMEwxMjgsMTk3LjE3LDEwMS4yLDIxOS4xYTQsNCwwLDAsMS01LjA3LDBsLTI2LjgtMjEuOTNMNDIuNTMsMjE5LjFBNCw0LDAsMCwxLDM2LDIxNlYxMjBhOTIsOTIsMCwwLDEsMTg0LDBabS04LDBhODQsODQsMCwwLDAtMTY4LDB2ODcuNTZMNjYuOCwxODguOWE0LDQsMCwwLDEsNS4wNywwbDI2LjgsMjEuOTMsMjYuOC0yMS45M2E0LDQsMCwwLDEsNS4wNiwwbDI2LjgsMjEuOTMsMjYuOC0yMS45M2E0LDQsMCwwLDEsNS4wNywwTDIxMiwyMDcuNTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTAsMTE2YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDExMCwxMTZabTQ2LTEwYTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDE1NiwxMDZabTY2LDE0djk2YTYsNiwwLDAsMS05LjgsNC42NGwtMjUuNTMtMjAuODktMjUuNTQsMjAuODlhNiw2LDAsMCwxLTcuNiwwTDEyOCwxOTkuNzVsLTI1LjUzLDIwLjg5YTYsNiwwLDAsMS03LjYsMEw2OS4zMywxOTkuNzUsNDMuOCwyMjAuNjRBNiw2LDAsMCwxLDM0LDIxNlYxMjBhOTQsOTQsMCwwLDEsMTg4LDBabS0xMiwwYTgyLDgyLDAsMCwwLTE2NCwwdjgzLjM0bDE5LjUzLTE2YTYsNiwwLDAsMSw3LjYsMGwyNS41NCwyMC44OSwyNS41My0yMC44OWE2LDYsMCwwLDEsNy42LDBsMjUuNTMsMjAuODksMjUuNTQtMjAuODlhNiw2LDAsMCwxLDcuNiwwbDE5LjUzLDE2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTE2YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDExNiwxMTZabTQwLTE2YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDE1NiwxMDBabTcyLDIwdjk2YTEyLDEyLDAsMCwxLTE5LjYsOS4yOUwxODYuNjcsMjA3LjVsLTIxLjc0LDE3Ljc5YTEyLDEyLDAsMCwxLTE1LjIsMEwxMjgsMjA3LjVsLTIxLjczLDE3Ljc5YTEyLDEyLDAsMCwxLTE1LjIsMEw2OS4zMywyMDcuNSw0Ny42LDIyNS4yOUExMiwxMiwwLDAsMSwyOCwyMTZWMTIwYTEwMCwxMDAsMCwwLDEsMjAwLDBabS0yNCwwYTc2LDc2LDAsMCwwLTE1MiwwdjcwLjY4bDkuNzMtOGExMiwxMiwwLDAsMSwxNS4yLDBMOTguNjcsMjAwLjVsMjEuNzMtMTcuNzlhMTIsMTIsMCwwLDEsMTUuMiwwbDIxLjczLDE3Ljc5LDIxLjc0LTE3Ljc5YTEyLDEyLDAsMCwxLDE1LjIsMGw5LjczLDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRhOTYuMTEsOTYuMTEsMCwwLDAtOTYsOTZ2OTZhOCw4LDAsMCwwLDEzLjA3LDYuMTlsMjQuMjYtMTkuODVMOTMuNiwyMjIuMTlhOCw4LDAsMCwwLDEwLjEzLDBMMTI4LDIwMi4zNGwyNC4yNywxOS44NWE4LDgsMCwwLDAsMTAuMTMsMGwyNC4yNy0xOS44NSwyNC4yNiwxOS44NUE4LDgsMCwwLDAsMjI0LDIxNlYxMjBBOTYuMTEsOTYuMTEsMCwwLDAsMTI4LDI0Wk0xMDAsMTI4YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEwMCwxMjhabTU2LDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTU2LDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTIwdjk2bC0yOS4zMy0yNC0yOS4zNCwyNEwxMjgsMTkyLDk4LjY3LDIxNiw2OS4zMywxOTIsNDAsMjE2VjEyMGE4OCw4OCwwLDAsMSwxNzYsMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMTIsMTE2YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDExMiwxMTZabTQ0LTEyYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDE1NiwxMDRabTY4LDE2djk2YTgsOCwwLDAsMS0xMy4wNyw2LjE5bC0yNC4yNi0xOS44NUwxNjIuNCwyMjIuMTlhOCw4LDAsMCwxLTEwLjEzLDBMMTI4LDIwMi4zNGwtMjQuMjcsMTkuODVhOCw4LDAsMCwxLTEwLjEzLDBMNjkuMzMsMjAyLjM0LDQ1LjA3LDIyMi4xOUE4LDgsMCwwLDEsMzIsMjE2VjEyMGE5Niw5NiwwLDAsMSwxOTIsMFptLTE2LDBhODAsODAsMCwwLDAtMTYwLDB2NzkuMTJsMTYuMjctMTMuMzFhOCw4LDAsMCwxLDEwLjEzLDBsMjQuMjcsMTkuODUsMjQuMjYtMTkuODVhOCw4LDAsMCwxLDEwLjE0LDBsMjQuMjYsMTkuODUsMjQuMjctMTkuODVhOCw4LDAsMCwxLDEwLjEzLDBMMjA4LDE5OS4xMloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Ghost";
export { I as Ghost };