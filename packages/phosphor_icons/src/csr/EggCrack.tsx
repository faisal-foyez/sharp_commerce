/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/EggCrack";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODYuNjYsNTkuNTZDMTY4LjQ3LDMyLjI5LDE0Ni41NCwxNiwxMjgsMTZTODcuNTMsMzIuMjksNjkuMzQsNTkuNTZDNTAuNyw4Ny41NCw0MCwxMjEuMjMsNDAsMTUyYTg4LDg4LDAsMCwwLDE3NiwwQzIxNiwxMjEuMjMsMjA1LjMsODcuNTQsMTg2LjY2LDU5LjU2Wk0xMjgsMjI0YTcyLjA4LDcyLjA4LDAsMCwxLTcyLTcyYzAtMjcuNjksOS43Mi01OC4xNSwyNi42Ni04My41NkM5Ny4xOSw0Ni42NCwxMTUuNDEsMzIsMTI4LDMyYzkuNSwwLDIyLjIsOC4zMywzNC4xLDIxLjc4TDEyMiw5OC42N2E4LDgsMCwwLDAsNCwxMy4wOWwyNC42LDYuMTUtNi41LDMyLjUyYTgsOCwwLDAsMCw2LjI3LDkuNDFBNy43Nyw3Ljc3LDAsMCwwLDE1MiwxNjBhOCw4LDAsMCwwLDcuODMtNi40M2w4LTQwYTgsOCwwLDAsMC01LjktOS4zM2wtMTkuMTYtNC43OUwxNzIuMSw2Ni42Yy40Mi42MS44MywxLjIyLDEuMjQsMS44NEMxOTAuMjgsOTMuODUsMjAwLDEyNC4zMSwyMDAsMTUyQTcyLjA4LDcyLjA4LDAsMCwxLDEyOCwyMjRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBDOTIuODcsMjAsNDQsODYuNTIsNDQsMTUyYTg0LDg0LDAsMCwwLDE2OCwwQzIxMiw4Ni41MiwxNjMuMTMsMjAsMTI4LDIwWm0wLDIwOGE3Ni4wOCw3Ni4wOCwwLDAsMS03Ni03NmMwLTI4LjQ2LDEwLTU5LjczLDI3LjMzLTg1Ljc4Qzk0LjgxLDQzLDExMy45MSwyOCwxMjgsMjhjMTEuMzksMCwyNi4wNSw5LjgsMzkuNDIsMjUuODJMMTI1LDEwMS4zNGE0LDQsMCwwLDAsMiw2LjU0bDI4LjMsNy4wOC03LjI1LDM2LjI2YTQsNCwwLDAsMCwzLjE0LDQuNywzLjQ0LDMuNDQsMCwwLDAsLjc4LjA4LDQsNCwwLDAsMCwzLjkyLTMuMjJsOC00MGE0LDQsMCwwLDAtMi45NS00LjY2bC0yNS41OC02LjRMMTcyLjQ0LDYwLjJxMi4xNiwyLjkxLDQuMjMsNkMxOTQsOTIuMjcsMjA0LDEyMy41NCwyMDQsMTUyQTc2LjA4LDc2LjA4LDAsMCwxLDEyOCwyMjhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODUsNjAuNjdDMTY3LjE4LDM0LDE0NS44NywxOCwxMjgsMThTODguODIsMzQsNzEsNjAuNjdDNTIuNTcsODguMzIsNDIsMTIxLjYxLDQyLDE1MmE4Niw4NiwwLDAsMCwxNzIsMEMyMTQsMTIxLjYxLDIwMy40Myw4OC4zMiwxODUsNjAuNjdaTTEyOCwyMjZhNzQuMDksNzQuMDksMCwwLDEtNzQtNzRjMC0yOC4wOCw5Ljg0LTU4Ljk0LDI3LTg0LjY3Qzk2LjExLDQ0LjY1LDExNC41NiwzMCwxMjgsMzBjMTAuNTIsMCwyNC4xMiw5LDM2Ljc4LDIzLjc3TDEyMy41MiwxMDBhNiw2LDAsMCwwLDMsOS44MkwxNTMsMTE2LjQzbC02Ljg3LDM0LjM5YTYsNiwwLDAsMCw0LjcsNy4wNkE2LjA4LDYuMDgsMCwwLDAsMTUyLDE1OGE2LDYsMCwwLDAsNS44Ny00LjgybDgtNDBhNiw2LDAsMCwwLTQuNDItN2wtMjIuMzctNS41OSwzMy4yLTM3LjJxMS4zNiwxLjkyLDIuNzIsMy45NGMxNy4xNSwyNS43MywyNyw1Ni41OSwyNyw4NC42N0E3NC4wOSw3NC4wOSwwLDAsMSwxMjgsMjI2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTAsNTcuMzRDMTcxLjA2LDI5LDE0Ny44OCwxMiwxMjgsMTJTODQuOTQsMjksNjYsNTcuMzRDNDYuOTQsODYsMzYsMTIwLjQ2LDM2LDE1MmE5Miw5MiwwLDAsMCwxODQsMEMyMjAsMTIwLjQ2LDIwOS4wNiw4NiwxOTAsNTcuMzRaTTEyOCwyMjBhNjguMDcsNjguMDcsMCwwLDEtNjgtNjhjMC02MS4xMiw0Ni4xOS0xMTYsNjgtMTE2LDcuNTksMCwxOC4xMyw2LjY1LDI4LjY0LDE3Ljg4TDExOS4wNSw5NmExMiwxMiwwLDAsMCw2LDE5LjYzbDIwLjksNS4yMy01Ljc2LDI4Ljc4YTEyLDEyLDAsMCwwLDkuNDIsMTQuMTJBMTEuODcsMTEuODcsMCwwLDAsMTUyLDE2NGExMiwxMiwwLDAsMCwxMS43Ni05LjY1bDgtNDBhMTIsMTIsMCwwLDAtOC44Ni0xNGwtMTIuNzQtMy4xOSwyMS40LTI0QzE4NS4yLDk0LjM0LDE5NiwxMjIuNDQsMTk2LDE1MkE2OC4wNyw2OC4wNywwLDAsMSwxMjgsMjIwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTUyYTg4LjExLDg4LjExLDAsMCwxLTg3LjgsODhjLTUwLjY2LjEyLTkwLjIxLTQzLTg4LjEyLTkzLjYyLDEuMjEtMjkuMjEsMTEuNzEtNjAuNTQsMjkuMjMtODYuODJDODcuNSwzMi4yOSwxMDkuNDMsMTYsMTI4LDE2YzEzLjI1LDAsMjguMjMsOC4zMiw0Mi4zNCwyM2E0LDQsMCwwLDEsLjA5LDUuNDRMMTIyLDk4LjY3YTgsOCwwLDAsMCw0LDEzLjA5bDI0LjYxLDYuMTUtNi41MSwzMi41MmE4LDgsMCwwLDAsNi4yOCw5LjQxQTcuNyw3LjcsMCwwLDAsMTUyLDE2MGE4LDgsMCwwLDAsNy44My02LjQzbDgtNDBhOCw4LDAsMCwwLTUuOS05LjMzbC0xOS4xNi00Ljc5LDM2Ljg5LTQxLjMzYTQsNCwwLDAsMSw2LjI5LjQxYy4yNC4zNC40Ny42OC43LDFDMjA1LjMsODcuNTQsMjE2LDEyMS4yMywyMTYsMTUyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTUyYTgwLDgwLDAsMCwxLTE2MCwwQzQ4LDg4LDk2LDI0LDEyOCwyNFMyMDgsODgsMjA4LDE1MloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODYuNjYsNTkuNTZDMTY4LjQ3LDMyLjI5LDE0Ni41NCwxNiwxMjgsMTZTODcuNTMsMzIuMjksNjkuMzQsNTkuNTZDNTAuNyw4Ny41NCw0MCwxMjEuMjMsNDAsMTUyYTg4LDg4LDAsMCwwLDE3NiwwQzIxNiwxMjEuMjMsMjA1LjMsODcuNTQsMTg2LjY2LDU5LjU2Wk0xMjgsMjI0YTcyLjA4LDcyLjA4LDAsMCwxLTcyLTcyYzAtMjcuNjksOS43Mi01OC4xNSwyNi42Ni04My41NkM5Ny4xOSw0Ni42NCwxMTUuNDEsMzIsMTI4LDMyYzkuNSwwLDIyLjIsOC4zMywzNC4xLDIxLjc4TDEyMiw5OC42N2E4LDgsMCwwLDAsNCwxMy4wOWwyNC42LDYuMTUtNi41LDMyLjUyYTgsOCwwLDAsMCw2LjI3LDkuNDFBNy43Nyw3Ljc3LDAsMCwwLDE1MiwxNjBhOCw4LDAsMCwwLDcuODMtNi40M2w4LTQwYTgsOCwwLDAsMC01LjktOS4zM2wtMTkuMTYtNC43OUwxNzIuMSw2Ni42Yy40Mi42MS44MywxLjIyLDEuMjQsMS44NEMxOTAuMjgsOTMuODUsMjAwLDEyNC4zMSwyMDAsMTUyQTcyLjA4LDcyLjA4LDAsMCwxLDEyOCwyMjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "EggCrack";
export { I as EggCrack };