/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Robot";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDhIMTM2VjE2YTgsOCwwLDAsMC0xNiwwVjQ4SDU2QTMyLDMyLDAsMCwwLDI0LDgwVjE5MmEzMiwzMiwwLDAsMCwzMiwzMkgyMDBhMzIsMzIsMCwwLDAsMzItMzJWODBBMzIsMzIsMCwwLDAsMjAwLDQ4Wm0xNiwxNDRhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWODBBMTYsMTYsMCwwLDEsNTYsNjRIMjAwYTE2LDE2LDAsMCwxLDE2LDE2Wm0tNTItNTZIOTJhMjgsMjgsMCwwLDAsMCw1Nmg3MmEyOCwyOCwwLDAsMCwwLTU2Wm0tMjQsMTZ2MjRIMTE2VjE1MlpNODAsMTY0YTEyLDEyLDAsMCwxLDEyLTEyaDh2MjRIOTJBMTIsMTIsMCwwLDEsODAsMTY0Wm04NCwxMmgtOFYxNTJoOGExMiwxMiwwLDAsMSwwLDI0Wk03MiwxMDhhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsNzIsMTA4Wm04OCwwYTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDE2MCwxMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTJIMTMyVjE2YTQsNCwwLDAsMC04LDBWNTJINTZBMjgsMjgsMCwwLDAsMjgsODBWMTkyYTI4LDI4LDAsMCwwLDI4LDI4SDIwMGEyOCwyOCwwLDAsMCwyOC0yOFY4MEEyOCwyOCwwLDAsMCwyMDAsNTJabTIwLDE0MGEyMCwyMCwwLDAsMS0yMCwyMEg1NmEyMCwyMCwwLDAsMS0yMC0yMFY4MEEyMCwyMCwwLDAsMSw1Niw2MEgyMDBhMjAsMjAsMCwwLDEsMjAsMjBaTTc2LDEwOGE4LDgsMCwxLDEsOCw4QTgsOCwwLDAsMSw3NiwxMDhabTg4LDBhOCw4LDAsMSwxLDgsOEE4LDgsMCwwLDEsMTY0LDEwOFptMCwzMkg5MmEyNCwyNCwwLDAsMCwwLDQ4aDcyYTI0LDI0LDAsMCwwLDAtNDhabS0yMCw4djMySDExMlYxNDhaTTc2LDE2NGExNiwxNiwwLDAsMSwxNi0xNmgxMnYzMkg5MkExNiwxNiwwLDAsMSw3NiwxNjRabTg4LDE2SDE1MlYxNDhoMTJhMTYsMTYsMCwwLDEsMCwzMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTBIMTM0VjE2YTYsNiwwLDAsMC0xMiwwVjUwSDU2QTMwLDMwLDAsMCwwLDI2LDgwVjE5MmEzMCwzMCwwLDAsMCwzMCwzMEgyMDBhMzAsMzAsMCwwLDAsMzAtMzBWODBBMzAsMzAsMCwwLDAsMjAwLDUwWm0xOCwxNDJhMTgsMTgsMCwwLDEtMTgsMThINTZhMTgsMTgsMCwwLDEtMTgtMThWODBBMTgsMTgsMCwwLDEsNTYsNjJIMjAwYTE4LDE4LDAsMCwxLDE4LDE4Wk03NCwxMDhhMTAsMTAsMCwxLDEsMTAsMTBBMTAsMTAsMCwwLDEsNzQsMTA4Wm04OCwwYTEwLDEwLDAsMSwxLDEwLDEwQTEwLDEwLDAsMCwxLDE2MiwxMDhabTIsMzBIOTJhMjYsMjYsMCwwLDAsMCw1Mmg3MmEyNiwyNiwwLDAsMCwwLTUyWm0tMjIsMTJ2MjhIMTE0VjE1MFpNNzgsMTY0YTE0LDE0LDAsMCwxLDE0LTE0aDEwdjI4SDkyQTE0LDE0LDAsMCwxLDc4LDE2NFptODYsMTRIMTU0VjE1MGgxMGExNCwxNCwwLDAsMSwwLDI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MiwxMDRhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsNzIsMTA0Wm05NiwxNmExNiwxNiwwLDEsMC0xNi0xNkExNiwxNiwwLDAsMCwxNjgsMTIwWm02OC00MFYxOTJhMzYsMzYsMCwwLDEtMzYsMzZINTZhMzYsMzYsMCwwLDEtMzYtMzZWODBBMzYsMzYsMCwwLDEsNTYsNDRoNjBWMTZhMTIsMTIsMCwwLDEsMjQsMFY0NGg2MEEzNiwzNiwwLDAsMSwyMzYsODBabS0yNCwwYTEyLDEyLDAsMCwwLTEyLTEySDU2QTEyLDEyLDAsMCwwLDQ0LDgwVjE5MmExMiwxMiwwLDAsMCwxMiwxMkgyMDBhMTIsMTIsMCwwLDAsMTItMTJabS0xMiw4MmEzMCwzMCwwLDAsMS0zMCwzMEg4NmEzMCwzMCwwLDAsMSwwLTYwaDg0QTMwLDMwLDAsMCwxLDIwMCwxNjJabS04MC02djEyaDE2VjE1NlpNODYsMTY4SDk2VjE1Nkg4NmE2LDYsMCwwLDAsMCwxMlptOTAtNmE2LDYsMCwwLDAtNi02SDE2MHYxMmgxMEE2LDYsMCwwLDAsMTc2LDE2MloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDhIMTM2VjE2YTgsOCwwLDAsMC0xNiwwVjQ4SDU2QTMyLDMyLDAsMCwwLDI0LDgwVjE5MmEzMiwzMiwwLDAsMCwzMiwzMkgyMDBhMzIsMzIsMCwwLDAsMzItMzJWODBBMzIsMzIsMCwwLDAsMjAwLDQ4Wk0xNzIsOTZhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTcyLDk2Wk05NiwxODRIODBhMTYsMTYsMCwwLDEsMC0zMkg5NlpNODQsMTIwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDg0LDEyMFptNjAsNjRIMTEyVjE1MmgzMlptMzIsMEgxNjBWMTUyaDE2YTE2LDE2LDAsMCwxLDAsMzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZINTZBMjQsMjQsMCwwLDAsMzIsODBWMTkyYTI0LDI0LDAsMCwwLDI0LDI0SDIwMGEyNCwyNCwwLDAsMCwyNC0yNFY4MEEyNCwyNCwwLDAsMCwyMDAsNTZaTTE2NCwxODRIOTJhMjAsMjAsMCwwLDEsMC00MGg3MmEyMCwyMCwwLDAsMSwwLDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMCw0OEgxMzZWMTZhOCw4LDAsMCwwLTE2LDBWNDhINTZBMzIsMzIsMCwwLDAsMjQsODBWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDIwMGEzMiwzMiwwLDAsMCwzMi0zMlY4MEEzMiwzMiwwLDAsMCwyMDAsNDhabTE2LDE0NGExNiwxNiwwLDAsMS0xNiwxNkg1NmExNiwxNiwwLDAsMS0xNi0xNlY4MEExNiwxNiwwLDAsMSw1Niw2NEgyMDBhMTYsMTYsMCwwLDEsMTYsMTZaTTcyLDEwOGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSw3MiwxMDhabTg4LDBhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsMTYwLDEwOFptNCwyOEg5MmEyOCwyOCwwLDAsMCwwLDU2aDcyYTI4LDI4LDAsMCwwLDAtNTZabS0yNCwxNnYyNEgxMTZWMTUyWk04MCwxNjRhMTIsMTIsMCwwLDEsMTItMTJoOHYyNEg5MkExMiwxMiwwLDAsMSw4MCwxNjRabTg0LDEyaC04VjE1Mmg4YTEyLDEyLDAsMCwxLDAsMjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Robot";
export { I as Robot };