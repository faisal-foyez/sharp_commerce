/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/LightningA";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzUuODQsMTExLjU0YTgsOCwwLDAsMC00LjU2LTUuN2wtNTAtMjIuNDNMMTM1LDI1Ljg1YTgsOCwwLDAsMC0xMy42NS03LjI4TDI2LjEzLDEyMS40MmE4LDgsMCwwLDAsMi41OSwxMi43M2w1MCwyMi40NEw2NSwyMTQuMTVhOCw4LDAsMCwwLDEzLjY1LDcuMjhsOTUuMi0xMDIuODVBOCw4LDAsMCwwLDE3NS44NCwxMTEuNTRaTTg3LjYyLDE4OC4yMWw4LjE2LTM0LjM2YTgsOCwwLDAsMC00LjUtOS4xNUw0NS40MywxMjQuMTJsNjYuOTUtNzIuMzMtOC4xNiwzNC4zNmE4LDgsMCwwLDAsNC41LDkuMTVsNDUuODQsMjAuNThabTE1MS41MywyNC4yMS0zNi03MmE4LDgsMCwwLDAtMTQuMzEsMGwtMzYsNzJhOCw4LDAsMCwwLDE0LjMxLDcuMTZMMTc2Ljk0LDIwMGgzOC4xMWw5Ljc5LDE5LjU4QTgsOCwwLDAsMCwyMzIsMjI0YTgsOCwwLDAsMCw3LjE1LTExLjU4Wk0xODQuOTQsMTg0LDE5NiwxNjEuODksMjA3LjA1LDE4NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuOTIsMTEyLjM0YTQsNCwwLDAsMC0yLjI4LTIuODVsLTUzLTIzLjc4LDE0LjQzLTYwLjc5YTQsNCwwLDAsMC02LjgzLTMuNjRMMjkuMDYsMTI0LjE0YTQsNCwwLDAsMCwxLjMsNi4zN2w1MywyMy43OEw2OC45MSwyMTUuMDdhNCw0LDAsMCwwLDIsNC40NiwzLjk0LDMuOTQsMCwwLDAsMS44OC40Nyw0LDQsMCwwLDAsMi45NC0xLjI4bDk1LjItMTAyLjg2QTQsNCwwLDAsMCwxNzEuOTIsMTEyLjM0Wk04MC4yMSwyMDIuMWwxMS42OC00OS4xOGE0LDQsMCwwLDAtMi4yNS00LjU3TDM4LjcyLDEyNS40OSwxMTkuNzksMzcuOSwxMDguMTEsODcuMDhhNCw0LDAsMCwwLDIuMjUsNC41N2w1MC45MiwyMi44NlptMTU1LjM3LDEyLjExLTM2LTcyYTQsNCwwLDAsMC03LjE2LDBsLTM2LDcyYTQsNCwwLDEsMCw3LjE2LDMuNThMMTc0LjQ3LDE5Nmg0My4wNmwxMC44OSwyMS43OUE0LDQsMCwwLDAsMjMyLDIyMGE0LjEyLDQuMTIsMCwwLDAsMS43OS0uNDJBNCw0LDAsMCwwLDIzNS41OCwyMTQuMjFaTTE3OC40NywxODgsMTk2LDE1Mi45NCwyMTMuNTMsMTg4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuODgsMTExLjk0YTYsNiwwLDAsMC0zLjQyLTQuMjdMMTE5LDg0LjU2LDEzMywyNS4zOWE2LDYsMCwwLDAtMTAuMjQtNS40N0wyNy42LDEyMi43OGE2LDYsMCwwLDAsMS45NCw5LjU1TDgxLDE1NS40NCw2NywyMTQuNjFhNiw2LDAsMCwwLDMsNi42OCw2LDYsMCwwLDAsNy4yMi0xLjIybDk1LjItMTAyLjg1QTYsNiwwLDAsMCwxNzMuODgsMTExLjk0Wm0tOTAsODMuMjEsOS45Mi00MS43NmE2LDYsMCwwLDAtMy4zOC02Ljg2TDQyLjA4LDEyNC44bDc0LTgwLTkuOTIsNDEuNzdhNiw2LDAsMCwwLDMuMzgsNi44Nmw0OC4zOCwyMS43M1ptMTUzLjQ0LDE4LjE2LTM2LTcyYTYsNiwwLDAsMC0xMC43NCwwbC0zNiw3MmE2LDYsMCwwLDAsMTAuNzQsNS4zN0wxNzUuNzEsMTk4aDQwLjU4bDEwLjM0LDIwLjY4QTYsNiwwLDAsMCwyMzIsMjIyYTUuODcsNS44NywwLDAsMCwyLjY4LS42NEE2LDYsMCwwLDAsMjM3LjM2LDIxMy4zMVpNMTgxLjcxLDE4NiwxOTYsMTU3LjQyLDIxMC4yOSwxODZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzkuNzYsMTEwLjc1YTEyLDEyLDAsMCwwLTYuODUtOC41NkwxMjYsODEuMTJsMTIuOS01NC4zNWExMiwxMiwwLDAsMC0yMC40OC0xMC45MkwyMy4xOSwxMTguN2ExMiwxMiwwLDAsMCwzLjg5LDE5LjFsNDcsMjEuMDhMNjEuMTIsMjEzLjIyYTEyLDEyLDAsMCwwLDIwLjQ5LDEwLjkzTDE3Ni44LDEyMS4yOUExMiwxMiwwLDAsMCwxNzkuNzYsMTEwLjc1Wk05NSwxNzQuMzFsNC42NC0xOS41NGExMiwxMiwwLDAsMC02Ljc2LTEzLjcybC00MC43Ni0xOC4zTDEwNSw2NS42OWwtNC42NCwxOS41NEExMiwxMiwwLDAsMCwxMDcuMDgsOTlsNDAuNzcsMTguM1ptMTQ3LjcsMzYuMzItMzYtNzJhMTIsMTIsMCwwLDAtMjEuNDcsMGwtMzYsNzJhMTIsMTIsMCwxLDAsMjEuNDYsMTAuNzNsNC42OC05LjM2aDQxLjE3bDQuNjgsOS4zNmExMiwxMiwwLDEsMCwyMS40Ny0xMC43M1pNMTg3LjQxLDE4OCwxOTYsMTcwLjgzLDIwNC41OCwxODhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuODcsMTE4LjU4LDc4LjY3LDIyMS40M0E4LDgsMCwwLDEsNjUsMjE0LjE1bDEzLjY3LTU3LjU2LTUwLTIyLjQ0YTgsOCwwLDAsMS0yLjU5LTEyLjczbDk1LjItMTAyLjg1QTgsOCwwLDAsMSwxMzUsMjUuODVMMTIxLjMxLDgzLjQxbDUwLDIyLjQzYTgsOCwwLDAsMSwyLjU5LDEyLjc0Wm02MS43MSwxMDQuNTdBNy45MSw3LjkxLDAsMCwxLDIzMiwyMjRhOCw4LDAsMCwxLTcuMTYtNC40MkwyMTUuMDUsMjAwSDE3Ni45NGwtOS43OSwxOS41OGE4LDgsMCwwLDEtMTQuMzEtNy4xNmwzNi03MmE4LDgsMCwwLDEsMTQuMzEsMGwzNiw3MkE4LDgsMCwwLDEsMjM1LjU4LDIyMy4xNVpNMjA3LjA1LDE4NCwxOTYsMTYxLjg5LDE4NC45NCwxODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Mi44LDIxNiw4OCwxNTIsMzIsMTI2Ljg2LDEyNy4yLDI0LDExMiw4OGw1NiwyNS4xNFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNzUuODQsMTExLjU0YTgsOCwwLDAsMC00LjU2LTUuN2wtNTAtMjIuNDNMMTM1LDI1Ljg1YTgsOCwwLDAsMC0xMy42NS03LjI4TDI2LjEzLDEyMS40MmE4LDgsMCwwLDAsMi41OSwxMi43M2w1MCwyMi40NEw2NSwyMTQuMTVhOCw4LDAsMCwwLDEzLjY1LDcuMjhsOTUuMi0xMDIuODVBOCw4LDAsMCwwLDE3NS44NCwxMTEuNTRaTTg3LjYyLDE4OC4yMWw4LjE2LTM0LjM2YTgsOCwwLDAsMC00LjUtOS4xNUw0NS40MywxMjQuMTJsNjYuOTUtNzIuMzMtOC4xNiwzNC4zNmE4LDgsMCwwLDAsNC41LDkuMTVsNDUuODQsMjAuNThabTE1MS41MywyNC4yMS0zNi03MmE4LDgsMCwwLDAtMTQuMzEsMGwtMzYsNzJhOCw4LDAsMCwwLDE0LjMxLDcuMTZMMTc2Ljk0LDIwMGgzOC4xMWw5Ljc5LDE5LjU4QTgsOCwwLDAsMCwyMzIsMjI0YTgsOCwwLDAsMCw3LjE1LTExLjU4Wk0xODQuOTQsMTg0LDE5NiwxNjEuODksMjA3LjA1LDE4NFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "LightningA";
export { I as LightningA };