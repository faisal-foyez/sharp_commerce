/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/UserList";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsODBhOCw4LDAsMCwxLDgtOGg4OGE4LDgsMCwwLDEsMCwxNkgxNjBBOCw4LDAsMCwxLDE1Miw4MFptOTYsNDBIMTYwYTgsOCwwLDAsMCwwLDE2aDg4YTgsOCwwLDAsMCwwLTE2Wm0wLDQ4SDE4NGE4LDgsMCwwLDAsMCwxNmg2NGE4LDgsMCwwLDAsMC0xNlptLTk2LjI1LDIyYTgsOCwwLDAsMS01Ljc2LDkuNzQsNy41NSw3LjU1LDAsMCwxLTIsLjI2LDgsOCwwLDAsMS03Ljc1LTZjLTYuMTYtMjMuOTQtMzAuMzQtNDItNTYuMjUtNDJzLTUwLjA5LDE4LjA1LTU2LjI1LDQyYTgsOCwwLDAsMS0xNS41LTRjNS41OS0yMS43MSwyMS44NC0zOS4yOSw0Mi40Ni00OGE0OCw0OCwwLDEsMSw1OC41OCwwQzEyOS45MSwxNTAuNzEsMTQ2LjE2LDE2OC4yOSwxNTEuNzUsMTkwWk04MCwxMzZhMzIsMzIsMCwxLDAtMzItMzJBMzIsMzIsMCwwLDAsODAsMTM2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsODBhNCw0LDAsMCwxLDQtNGg4OGE0LDQsMCwwLDEsMCw4SDE2MEE0LDQsMCwwLDEsMTU2LDgwWm05Miw0NEgxNjBhNCw0LDAsMCwwLDAsOGg4OGE0LDQsMCwwLDAsMC04Wm0wLDQ4SDE4NGE0LDQsMCwwLDAsMCw4aDY0YTQsNCwwLDAsMCwwLThaTTE0Ny44NywxOTFhNCw0LDAsMCwxLTIuODcsNC44NywzLjg3LDMuODcsMCwwLDEtMSwuMTMsNCw0LDAsMCwxLTMuODctM2MtNi43MS0yNi4wOC0zMi00NS02MC4xMy00NXMtNTMuNDEsMTguOTItNjAuMTMsNDVhNCw0LDAsMSwxLTcuNzQtMmM1LjkyLTIzLDI0LjU3LTQxLjE0LDQ3LjUyLTQ4YTQ0LDQ0LDAsMSwxLDQwLjcsMEMxMjMuMywxNDkuODYsMTQyLDE2OCwxNDcuODcsMTkxWk04MCwxNDBhMzYsMzYsMCwxLDAtMzYtMzZBMzYsMzYsMCwwLDAsODAsMTQwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTQsODBhNiw2LDAsMCwxLDYtNmg4OGE2LDYsMCwwLDEsMCwxMkgxNjBBNiw2LDAsMCwxLDE1NCw4MFptOTQsNDJIMTYwYTYsNiwwLDAsMCwwLDEyaDg4YTYsNiwwLDAsMCwwLTEyWm0wLDQ4SDE4NGE2LDYsMCwwLDAsMCwxMmg2NGE2LDYsMCwwLDAsMC0xMlptLTk4LjE5LDIwLjVhNiw2LDAsMSwxLTExLjYyLDNDMTMxLjcsMTY4LjI5LDEwNy4yMywxNTAsODAsMTUwcy01MS43LDE4LjI5LTU4LjE5LDQzLjQ5YTYsNiwwLDEsMS0xMS42Mi0zYzUuNzQtMjIuMjgsMjMtNDAuMDcsNDQuNjctNDhhNDYsNDYsMCwxLDEsNTAuMjgsMEMxMjYuNzksMTUwLjQzLDE0NC4wOCwxNjguMjIsMTQ5LjgxLDE5MC41Wk04MCwxMzhhMzQsMzQsMCwxLDAtMzQtMzRBMzQsMzQsMCwwLDAsODAsMTM4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsODBhMTIsMTIsMCwwLDEsMTItMTJoODBhMTIsMTIsMCwwLDEsMCwyNEgxNjRBMTIsMTIsMCwwLDEsMTUyLDgwWm05MiwzNkgxNjRhMTIsMTIsMCwwLDAsMCwyNGg4MGExMiwxMiwwLDAsMCwwLTI0Wm0wLDQ4SDE4OGExMiwxMiwwLDAsMCwwLDI0aDU2YTEyLDEyLDAsMCwwLDAtMjRabS04OC4zOCwyNWExMiwxMiwwLDEsMS0yMy4yNCw2Yy01LjcyLTIyLjIzLTI4LjI0LTM5LTUyLjM4LTM5cy00Ni42NiwxNi43Ni01Mi4zOCwzOWExMiwxMiwwLDEsMS0yMy4yNC02YzUuMzgtMjAuOSwyMC4wOS0zOC4xNiwzOS4xMS00OGE1Miw1MiwwLDEsMSw3MywwQzEzNS41MywxNTAuODUsMTUwLjI0LDE2OC4xMSwxNTUuNjIsMTg5Wk04MCwxMzJhMjgsMjgsMCwxLDAtMjgtMjhBMjgsMjgsMCwwLDAsODAsMTMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsODBhOCw4LDAsMCwxLDgtOGg4OGE4LDgsMCwwLDEsMCwxNkgxNjBBOCw4LDAsMCwxLDE1Miw4MFptOTYsNDBIMTYwYTgsOCwwLDAsMCwwLDE2aDg4YTgsOCwwLDAsMCwwLTE2Wm0wLDQ4SDE4NGE4LDgsMCwwLDAsMCwxNmg2NGE4LDgsMCwwLDAsMC0xNlpNMTA5LjI5LDE0MmE0OCw0OCwwLDEsMC01OC41OCwwYy0yMC42Miw4LjczLTM2Ljg3LDI2LjMtNDIuNDYsNDhBOCw4LDAsMCwwLDE2LDIwMEgxNDRhOCw4LDAsMCwwLDcuNzUtMTBDMTQ2LjE2LDE2OC4yOSwxMjkuOTEsMTUwLjcyLDEwOS4yOSwxNDJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTA0QTQwLDQwLDAsMSwxLDgwLDY0LDQwLDQwLDAsMCwxLDEyMCwxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTUyLDgwYTgsOCwwLDAsMSw4LThoODhhOCw4LDAsMCwxLDAsMTZIMTYwQTgsOCwwLDAsMSwxNTIsODBabTk2LDQwSDE2MGE4LDgsMCwwLDAsMCwxNmg4OGE4LDgsMCwwLDAsMC0xNlptMCw0OEgxODRhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZabS05Ni4yNSwyMmE4LDgsMCwwLDEtNS43Niw5Ljc0LDcuNTUsNy41NSwwLDAsMS0yLC4yNiw4LDgsMCwwLDEtNy43NS02Yy02LjE2LTIzLjk0LTMwLjM0LTQyLTU2LjI1LTQycy01MC4wOSwxOC4wNS01Ni4yNSw0MmE4LDgsMCwwLDEtMTUuNS00YzUuNTktMjEuNzEsMjEuODQtMzkuMjksNDIuNDYtNDhhNDgsNDgsMCwxLDEsNTguNTgsMEMxMjkuOTEsMTUwLjcxLDE0Ni4xNiwxNjguMjksMTUxLjc1LDE5MFpNODAsMTM2YTMyLDMyLDAsMSwwLTMyLTMyQTMyLDMyLDAsMCwwLDgwLDEzNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "UserList";
export { I as UserList };