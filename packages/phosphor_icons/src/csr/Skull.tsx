/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Skull";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwxMDRhMjgsMjgsMCwxLDAsMjgsMjhBMjgsMjgsMCwwLDAsOTIsMTA0Wm0wLDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDkyLDE0NFptNzItNDBhMjgsMjgsMCwxLDAsMjgsMjhBMjgsMjgsMCwwLDAsMTY0LDEwNFptMCw0MGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxNjQsMTQ0Wk0xMjgsMTZDNzAuNjUsMTYsMjQsNjAuODYsMjQsMTE2YzAsMzQuMSwxOC4yNyw2Niw0OCw4NC4yOFYyMTZhMTYsMTYsMCwwLDAsMTYsMTZoODBhMTYsMTYsMCwwLDAsMTYtMTZWMjAwLjI4QzIxMy43MywxODIsMjMyLDE1MC4xLDIzMiwxMTYsMjMyLDYwLjg2LDE4NS4zNSwxNiwxMjgsMTZabTQ0LjEyLDE3Mi42OWE4LDgsMCwwLDAtNC4xMiw3VjIxNkgxNTJWMTkyYTgsOCwwLDAsMC0xNiwwdjI0SDEyMFYxOTJhOCw4LDAsMCwwLTE2LDB2MjRIODhWMTk1LjY5YTgsOCwwLDAsMC00LjEyLTdDNTYuODEsMTczLjY5LDQwLDE0NS44NCw0MCwxMTZjMC00Ni4zMiwzOS40OC04NCw4OC04NHM4OCwzNy42OCw4OCw4NEMyMTYsMTQ1LjgzLDE5OS4xOSwxNzMuNjksMTcyLjEyLDE4OC42OVoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwxMDhhMjQsMjQsMCwxLDAsMjQsMjRBMjQsMjQsMCwwLDAsOTIsMTA4Wm0wLDQwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDkyLDE0OFptNzItNDBhMjQsMjQsMCwxLDAsMjQsMjRBMjQsMjQsMCwwLDAsMTY0LDEwOFptMCw0MGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxNjQsMTQ4Wk0xMjgsMjBDNzIuODYsMjAsMjgsNjMuMDcsMjgsMTE2YzAsMzMuNDMsMTguMzMsNjQuNjQsNDgsODJ2MThhMTIsMTIsMCwwLDAsMTIsMTJoODBhMTIsMTIsMCwwLDAsMTItMTJWMTk4YzI5LjY3LTE3LjM4LDQ4LTQ4LjU5LDQ4LTgyQzIyOCw2My4wNywxODMuMTQsMjAsMTI4LDIwWm00Ni4wNiwxNzIuMTlhNCw0LDAsMCwwLTIuMDYsMy41VjIxNmE0LDQsMCwwLDEtNCw0SDE0OFYxOTJhNCw0LDAsMCwwLTgsMHYyOEgxMTZWMTkyYTQsNCwwLDAsMC04LDB2MjhIODhhNCw0LDAsMCwxLTQtNFYxOTUuNjlhNCw0LDAsMCwwLTIuMDYtMy41QzUzLjYsMTc2LjQ4LDM2LDE0Ny4yOSwzNiwxMTZjMC00OC41Miw0MS4yNy04OCw5Mi04OHM5MiwzOS40OCw5Miw4OEMyMjAsMTQ3LjI5LDIwMi40LDE3Ni40OCwxNzQuMDYsMTkyLjE5WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwxMDZhMjYsMjYsMCwxLDAsMjYsMjZBMjYsMjYsMCwwLDAsOTIsMTA2Wm0wLDQwYTE0LDE0LDAsMSwxLDE0LTE0QTE0LDE0LDAsMCwxLDkyLDE0NlptNzItNDBhMjYsMjYsMCwxLDAsMjYsMjZBMjYsMjYsMCwwLDAsMTY0LDEwNlptMCw0MGExNCwxNCwwLDEsMSwxNC0xNEExNCwxNCwwLDAsMSwxNjQsMTQ2Wk0xMjgsMThDNzEuNzYsMTgsMjYsNjIsMjYsMTE2YzAsMzMuNzcsMTguMyw2NS4zMSw0OCw4My4xNVYyMTZhMTQsMTQsMCwwLDAsMTQsMTRoODBhMTQsMTQsMCwwLDAsMTQtMTRWMTk5LjE1YzI5LjctMTcuODQsNDgtNDkuMzgsNDgtODMuMTVDMjMwLDYyLDE4NC4yNCwxOCwxMjgsMThabTQ1LjA5LDE3Mi40NGE2LDYsMCwwLDAtMy4wOSw1LjI1VjIxNmEyLDIsMCwwLDEtMiwySDE1MFYxOTJhNiw2LDAsMCwwLTEyLDB2MjZIMTE4VjE5MmE2LDYsMCwwLDAtMTIsMHYyNkg4OGEyLDIsMCwwLDEtMi0yVjE5NS42OWE2LDYsMCwwLDAtMy4wOS01LjI1QzU1LjIxLDE3NS4wOSwzOCwxNDYuNTYsMzgsMTE2YzAtNDcuNDIsNDAuMzctODYsOTAtODZzOTAsMzguNTgsOTAsODZDMjE4LDE0Ni41NiwyMDAuNzksMTc1LjA5LDE3My4wOSwxOTAuNDRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTMyYTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDExNiwxMzJabTQ4LTI0YTI0LDI0LDAsMSwwLDI0LDI0QTI0LDI0LDAsMCwwLDE2NCwxMDhabTcyLDhjMCwyOS44NS0xMy4wNSw1Ny43OC0zNiw3Ny41MlYyMTZhMjAsMjAsMCwwLDEtMjAsMjBINzZhMjAsMjAsMCwwLDEtMjAtMjBWMTkzLjUyYy0yMy0xOS43NC0zNi00Ny42Ny0zNi03Ny41MkMyMCw1OC42NSw2OC40NSwxMiwxMjgsMTJTMjM2LDU4LjY1LDIzNiwxMTZabS0yNCwwYzAtNDQuMTEtMzcuNjgtODAtODQtODBTNDQsNzEuODksNDQsMTE2YzAsMjQuMzEsMTEuNDEsNDcsMzEuMzEsNjIuM0ExMiwxMiwwLDAsMSw4MCwxODcuODJWMjEySDk2VjE5MmExMiwxMiwwLDAsMSwyNCwwdjIwaDE2VjE5MmExMiwxMiwwLDAsMSwyNCwwdjIwaDE2VjE4Ny44MmExMiwxMiwwLDAsMSw0LjY5LTkuNTFDMjAwLjU5LDE2MywyMTIsMTQwLjMxLDIxMiwxMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTZDNzAuNjUsMTYsMjQsNjAuODYsMjQsMTE2YzAsMzQuMSwxOC4yNyw2Niw0OCw4NC4yOFYyMTZhMTYsMTYsMCwwLDAsMTYsMTZoOGE0LDQsMCwwLDAsNC00VjIwMC4yN2E4LjE3LDguMTcsMCwwLDEsNy40Ny04LjI1LDgsOCwwLDAsMSw4LjUzLDh2MjhhNCw0LDAsMCwwLDQsNGgxNmE0LDQsMCwwLDAsNC00VjIwMC4yN2E4LjE3LDguMTcsMCwwLDEsNy40Ny04LjI1LDgsOCwwLDAsMSw4LjUzLDh2MjhhNCw0LDAsMCwwLDQsNGg4YTE2LDE2LDAsMCwwLDE2LTE2VjIwMC4yOEMyMTMuNzMsMTgyLDIzMiwxNTAuMSwyMzIsMTE2LDIzMiw2MC44NiwxODUuMzUsMTYsMTI4LDE2Wk05MiwxNTJhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsOTIsMTUyWm03MiwwYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDE2NCwxNTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRjLTUzLDAtOTYsNDEuMTktOTYsOTIsMCwzNC4wNSwxOS4zMSw2My43OCw0OCw3OS42OVYyMTZhOCw4LDAsMCwwLDgsOGg4MGE4LDgsMCwwLDAsOC04VjE5NS42OWMyOC42OS0xNS45MSw0OC00NS42NCw0OC03OS42OUMyMjQsNjUuMTksMTgxLDI0LDEyOCwyNFpNOTIsMTUyYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDkyLDE1MlptNzIsMGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwxNjQsMTUyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTkyLDEwNGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCw5MiwxMDRabTAsNDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsOTIsMTQ0Wm03Mi00MGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCwxNjQsMTA0Wm0wLDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2NCwxNDRaTTEyOCwxNkM3MC42NSwxNiwyNCw2MC44NiwyNCwxMTZjMCwzNC4xLDE4LjI3LDY2LDQ4LDg0LjI4VjIxNmExNiwxNiwwLDAsMCwxNiwxNmg4MGExNiwxNiwwLDAsMCwxNi0xNlYyMDAuMjhDMjEzLjczLDE4MiwyMzIsMTUwLjEsMjMyLDExNiwyMzIsNjAuODYsMTg1LjM1LDE2LDEyOCwxNlptNDQuMTIsMTcyLjY5YTgsOCwwLDAsMC00LjEyLDdWMjE2SDE1MlYxOTJhOCw4LDAsMCwwLTE2LDB2MjRIMTIwVjE5MmE4LDgsMCwwLDAtMTYsMHYyNEg4OFYxOTUuNjlhOCw4LDAsMCwwLTQuMTItN0M1Ni44MSwxNzMuNjksNDAsMTQ1Ljg0LDQwLDExNmMwLTQ2LjMyLDM5LjQ4LTg0LDg4LTg0czg4LDM3LjY4LDg4LDg0QzIxNiwxNDUuODMsMTk5LjE5LDE3My42OSwxNzIuMTIsMTg4LjY5WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Skull";
export { I as Skull };