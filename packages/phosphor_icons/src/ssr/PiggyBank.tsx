/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/PiggyBank";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTE2YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE5MiwxMTZaTTE1Miw2NEgxMTJhOCw4LDAsMCwwLDAsMTZoNDBhOCw4LDAsMCwwLDAtMTZabTk2LDQ4djMyYTI0LDI0LDAsMCwxLTI0LDI0aC0yLjM2bC0xNi4yMSw0NS4zOEExNiwxNiwwLDAsMSwxOTAuMzYsMjI0SDE3Ny42NGExNiwxNiwwLDAsMS0xNS4wNy0xMC42MkwxNjAuNjUsMjA4aC01Ny4zbC0xLjkyLDUuMzhBMTYsMTYsMCwwLDEsODYuMzYsMjI0SDczLjY0YTE2LDE2LDAsMCwxLTE1LjA3LTEwLjYyTDQ2LDE3OC4yMmE4Ny42OSw4Ny42OSwwLDAsMS0yMS40NC00OC4zOEExNiwxNiwwLDAsMCwxNiwxNDRhOCw4LDAsMCwxLTE2LDAsMzIsMzIsMCwwLDEsMjQuMjgtMzFBODguMTIsODguMTIsMCwwLDEsMTEyLDMySDIxNmE4LDgsMCwwLDEsMCwxNkgxOTQuNjFhODcuOTMsODcuOTMsMCwwLDEsMzAuMTcsMzdjLjQzLDEsLjg1LDIsMS4yNSwzQTI0LDI0LDAsMCwxLDI0OCwxMTJabS0xNiwwYTgsOCwwLDAsMC04LThoLTMuNjZhOCw4LDAsMCwxLTcuNjQtNS42QTcxLjksNzEuOSwwLDAsMCwxNDQsNDhIMTEyQTcyLDcyLDAsMCwwLDU4LjkxLDE2OC42NGE4LDgsMCwwLDEsMS42NCwyLjcxTDczLjY0LDIwOEg4Ni4zNmwzLjgyLTEwLjY5QTgsOCwwLDAsMSw5Ny43MSwxOTJoNjguNThhOCw4LDAsMCwxLDcuNTMsNS4zMUwxNzcuNjQsMjA4aDEyLjcybDE4LjExLTUwLjY5QTgsOCwwLDAsMSwyMTYsMTUyaDhhOCw4LDAsMCwwLDgtOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsMTE2YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDE4OCwxMTZaTTE1Miw2OEgxMTJhNCw0LDAsMCwwLDAsOGg0MGE0LDQsMCwwLDAsMC04Wm05Miw0NHYzMmEyMCwyMCwwLDAsMS0yMCwyMGgtNS4xOGwtMTcuMTYsNDhhMTIsMTIsMCwwLDEtMTEuMyw4SDE3Ny42NGExMiwxMiwwLDAsMS0xMS4zLThsLTIuODctOEgxMDAuNTNsLTIuODcsOGExMiwxMiwwLDAsMS0xMS4zLDhINzMuNjRhMTIsMTIsMCwwLDEtMTEuMy04bC0xMi44Mi0zNS45YTgzLjczLDgzLjczLDAsMCwxLTIxLjQtNTEuNzZBMjAsMjAsMCwwLDAsMTIsMTQ0YTQsNCwwLDAsMS04LDAsMjgsMjgsMCwwLDEsMjQuMDktMjcuNzJBODQuMSw4NC4xLDAsMCwxLDExMiwzNkgyMTZhNCw0LDAsMCwxLDAsOEgxNzkuOGE4NCw4NCwwLDAsMSw0MS4zMSw0Mi42M2MuNzYsMS43NiwxLjQ3LDMuNTUsMi4xMSw1LjM3SDIyNEEyMCwyMCwwLDAsMSwyNDQsMTEyWm0tOCwwYTEyLDEyLDAsMCwwLTEyLTEyaC0zLjY2YTQsNCwwLDAsMS0zLjgyLTIuOCw3NC40NSw3NC40NSwwLDAsMC0yLjc1LTcuMzlBNzYsNzYsMCwwLDAsMTQ0LDQ0SDExMkE3Niw3NiwwLDAsMCw1NiwxNzEuMzRhNCw0LDAsMCwxLC44MiwxLjM2bDEzLjA5LDM2LjY1QTQsNCwwLDAsMCw3My42NCwyMTJIODYuMzZhNCw0LDAsMCwwLDMuNzctMi42NUw5NCwxOTguNjVBNCw0LDAsMCwxLDk3LjcxLDE5Nmg2OC41OGE0LDQsMCwwLDEsMy43NiwyLjY1bDMuODIsMTAuN2E0LDQsMCwwLDAsMy43NywyLjY1aDEyLjcyYTQsNCwwLDAsMCwzLjc3LTIuNjVsMTguMS01MC43QTQsNCwwLDAsMSwyMTYsMTU2aDhhMTIsMTIsMCwwLDAsMTItMTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTAsMTE2YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDE5MCwxMTZaTTE1Miw2NkgxMTJhNiw2LDAsMCwwLDAsMTJoNDBhNiw2LDAsMCwwLDAtMTJabTk0LDQ2djMyYTIyLDIyLDAsMCwxLTIyLDIyaC0zLjc3bC0xNi42OCw0Ni43MUExNCwxNCwwLDAsMSwxOTAuMzYsMjIySDE3Ny42NGExNCwxNCwwLDAsMS0xMy4xOS05LjI5TDE2Mi4wNiwyMDZIMTAxLjk0bC0yLjM5LDYuNzFBMTQsMTQsMCwwLDEsODYuMzYsMjIySDczLjY0YTE0LDE0LDAsMCwxLTEzLjE5LTkuMjlMNDcuNzYsMTc3LjE4YTg1LjcyLDg1LjcyLDAsMCwxLTIxLjQ3LTUwLjI0QTE4LDE4LDAsMCwwLDE0LDE0NGE2LDYsMCwwLDEtMTIsMCwzMCwzMCwwLDAsMSwyNC4xOS0yOS40M0E4Ni4xLDg2LjEsMCwwLDEsMTEyLDM0SDIxNmE2LDYsMCwwLDEsMCwxMkgxODcuODJhODUuOTIsODUuOTIsMCwwLDEsMzUuMTIsMzkuODNjLjYsMS4zOCwxLjE2LDIuNzcsMS42OCw0LjE4QTIyLDIyLDAsMCwxLDI0NiwxMTJabS0xMiwwYTEwLDEwLDAsMCwwLTEwLTEwaC0zLjY2YTYsNiwwLDAsMS01LjczLTQuMiw3MS40LDcxLjQsMCwwLDAtMi42OC03LjE5QTc0LDc0LDAsMCwwLDE0NCw0NkgxMTJBNzQsNzQsMCwwLDAsNTcuNDQsMTcwYTUuODEsNS44MSwwLDAsMSwxLjIyLDJsMTMuMDksMzYuNjRBMiwyLDAsMCwwLDczLjY0LDIxMEg4Ni4zNmEyLDIsMCwwLDAsMS44OS0xLjMzTDkyLjA2LDE5OGE2LDYsMCwwLDEsNS42NS00aDY4LjU4YTYsNiwwLDAsMSw1LjY1LDRsMy44MSwxMC42OWEyLDIsMCwwLDAsMS44OSwxLjMzaDEyLjcyYTIsMiwwLDAsMCwxLjg5LTEuMzNMMjEwLjM1LDE1OGE2LDYsMCwwLDEsNS42NS00aDhhMTAsMTAsMCwwLDAsMTAtMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTIwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDIwMCwxMjBaTTE1Niw2NEgxMTZhMTIsMTIsMCwwLDAsMCwyNGg0MGExMiwxMiwwLDAsMCwwLTI0Wm0xMDAsNDh2MzJhMjgsMjgsMCwwLDEtMjcuNTQsMjhMMjEzLjIsMjE0LjczQTIwLDIwLDAsMCwxLDE5NC4zNiwyMjhIMTgxLjY0YTIwLDIwLDAsMCwxLTE4Ljg0LTEzLjI3bC0xLTIuNzNIMTEwLjE3bC0xLDIuNzNBMjAsMjAsMCwwLDEsOTAuMzYsMjI4SDc3LjY0QTIwLDIwLDAsMCwxLDU4LjgsMjE0LjczTDQ2LjUsMTgwLjI4QTkxLjYzLDkxLjYzLDAsMCwxLDI1Ljc1LDEzNy44LDExLjkxLDExLjkxLDAsMCwwLDI0LDE0NGExMiwxMiwwLDAsMS0yNCwwLDM2LjA3LDM2LjA3LDAsMCwxLDI0LjU2LTM0LjEzQTkyLjEzLDkyLjEzLDAsMCwxLDExNiwyOEgyMjBhMTIsMTIsMCwwLDEsMCwyNEgyMTBhOTIsOTIsMCwwLDEsMjIuNDgsMzEuNDVsLjQyLDFBMjguMDUsMjguMDUsMCwwLDEsMjU2LDExMlptLTI0LDBhNCw0LDAsMCwwLTQtNGgtMy42NmExMiwxMiwwLDAsMS0xMS40NS04LjQxQTY4LDY4LDAsMCwwLDE0OCw1MkgxMTZBNjgsNjgsMCwwLDAsNjUuODYsMTY1Ljk0LDExLjg1LDExLjg1LDAsMCwxLDY4LjMxLDE3MGwxMi4xNSwzNGg3LjA4bDIuODctOGExMiwxMiwwLDAsMSwxMS4zLThoNjguNThhMTIsMTIsMCwwLDEsMTEuMyw4bDIuODcsOGg3LjA4bDE3LjE2LTQ4YTEyLDEyLDAsMCwxLDExLjMtOGg4YTQsNCwwLDAsMCw0LTRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYsODguMDhjLS40LTEtLjgyLTItMS4yNS0zYTg3LjkzLDg3LjkzLDAsMCwwLTMwLjE3LTM3SDIxNmE4LDgsMCwwLDAsMC0xNkgxMTJhODguMTIsODguMTIsMCwwLDAtODcuNzIsODFBMzIsMzIsMCwwLDAsMCwxNDRhOCw4LDAsMCwwLDE2LDAsMTYsMTYsMCwwLDEsOC41Ny0xNC4xNkE4Ny42OSw4Ny42OSwwLDAsMCw0NiwxNzguMjJsMTIuNTYsMzUuMTZBMTYsMTYsMCwwLDAsNzMuNjQsMjI0SDg2LjM2YTE2LDE2LDAsMCwwLDE1LjA3LTEwLjYybDEuOTItNS4zOGg1Ny4zbDEuOTIsNS4zOEExNiwxNiwwLDAsMCwxNzcuNjQsMjI0aDEyLjcyYTE2LDE2LDAsMCwwLDE1LjA3LTEwLjYyTDIyMS42NCwxNjhIMjI0YTI0LDI0LDAsMCwwLDI0LTI0VjExMkEyNCwyNCwwLDAsMCwyMjYsODguMDhaTTE1Miw3MkgxMTJhOCw4LDAsMCwxLDAtMTZoNDBhOCw4LDAsMCwxLDAsMTZabTI4LDU2YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE4MCwxMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTEydjMyYTE2LDE2LDAsMCwxLTE2LDE2aC04bC0xOC4xLDUwLjY5YTgsOCwwLDAsMS03LjU0LDUuMzFIMTc3LjY0YTgsOCwwLDAsMS03LjU0LTUuMzFMMTY2LjI5LDIwMEg5Ny43MUw5My45LDIxMC42OUE4LDgsMCwwLDEsODYuMzYsMjE2SDczLjY0YTgsOCwwLDAsMS03LjU0LTUuMzFMNTMsMTc0YTc5LjcsNzkuNywwLDAsMS0yMS01NGgwYTgwLDgwLDAsMCwxLDgwLTgwaDMyYTgwLDgwLDAsMCwxLDczLjQ0LDQ4LjIyLDgyLjIyLDgyLjIyLDAsMCwxLDIuOSw3Ljc4SDIyNEExNiwxNiwwLDAsMSwyNDAsMTEyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE5MiwxMTZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTkyLDExNlpNMTUyLDY0SDExMmE4LDgsMCwwLDAsMCwxNmg0MGE4LDgsMCwwLDAsMC0xNlptOTYsNDh2MzJhMjQsMjQsMCwwLDEtMjQsMjRoLTIuMzZsLTE2LjIxLDQ1LjM4QTE2LDE2LDAsMCwxLDE5MC4zNiwyMjRIMTc3LjY0YTE2LDE2LDAsMCwxLTE1LjA3LTEwLjYyTDE2MC42NSwyMDhoLTU3LjNsLTEuOTIsNS4zOEExNiwxNiwwLDAsMSw4Ni4zNiwyMjRINzMuNjRhMTYsMTYsMCwwLDEtMTUuMDctMTAuNjJMNDYsMTc4LjIyYTg3LjY5LDg3LjY5LDAsMCwxLTIxLjQ0LTQ4LjM4QTE2LDE2LDAsMCwwLDE2LDE0NGE4LDgsMCwwLDEtMTYsMCwzMiwzMiwwLDAsMSwyNC4yOC0zMUE4OC4xMiw4OC4xMiwwLDAsMSwxMTIsMzJIMjE2YTgsOCwwLDAsMSwwLDE2SDE5NC42MWE4Ny45Myw4Ny45MywwLDAsMSwzMC4xNywzN2MuNDMsMSwuODUsMiwxLjI1LDNBMjQsMjQsMCwwLDEsMjQ4LDExMlptLTE2LDBhOCw4LDAsMCwwLTgtOGgtMy42NmE4LDgsMCwwLDEtNy42NC01LjZBNzEuOSw3MS45LDAsMCwwLDE0NCw0OEgxMTJBNzIsNzIsMCwwLDAsNTguOTEsMTY4LjY0YTgsOCwwLDAsMSwxLjY0LDIuNzFMNzMuNjQsMjA4SDg2LjM2bDMuODItMTAuNjlBOCw4LDAsMCwxLDk3LjcxLDE5Mmg2OC41OGE4LDgsMCwwLDEsNy41Myw1LjMxTDE3Ny42NCwyMDhoMTIuNzJsMTguMTEtNTAuNjlBOCw4LDAsMCwxLDIxNiwxNTJoOGE4LDgsMCwwLDAsOC04WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PiggyBank";
export { I as PiggyBank };