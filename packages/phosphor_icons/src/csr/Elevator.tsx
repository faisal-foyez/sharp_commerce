/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Elevator";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabS0zMiw4MHY5NkgxMzZWMTEyWm0tNTYsOTZIODBWMTEyaDQwWm04OCwwSDE5MlYxMDRhOCw4LDAsMCwwLTgtOEg3MmE4LDgsMCwwLDAtOCw4VjIwOEg0OFY0OEgyMDhWMjA4Wk0xNTIsNzJhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLDAtMTZoMzJBOCw4LDAsMCwxLDE1Miw3MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabS0yOCw3MlYyMTJIMTMyVjEwOFpNMTI0LDIxMkg3NlYxMDhoNDhabTg4LTRhNCw0LDAsMCwxLTQsNEgxODhWMTA0YTQsNCwwLDAsMC00LTRINzJhNCw0LDAsMCwwLTQsNFYyMTJINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wk0xNDgsNzJhNCw0LDAsMCwxLTQsNEgxMTJhNCw0LDAsMCwxLDAtOGgzMkE0LDQsMCwwLDEsMTQ4LDcyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabS0zMCw3NlYyMTBIMTM0VjExMFpNMTIyLDIxMEg3OFYxMTBoNDRabTg4LTJhMiwyLDAsMCwxLTIsMkgxOTBWMTA0YTYsNiwwLDAsMC02LTZINzJhNiw2LDAsMCwwLTYsNlYyMTBINDhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWk0xNTAsNzJhNiw2LDAsMCwxLTYsNkgxMTJhNiw2LDAsMCwxLDAtMTJoMzJBNiw2LDAsMCwxLDE1MCw3MloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhaTTE2NCwxMjh2NzZIMTQwVjEyOFptLTQ4LDc2SDkyVjEyOGgyNFptODgsMEgxODhWMTE2YTEyLDEyLDAsMCwwLTEyLTEySDgwYTEyLDEyLDAsMCwwLTEyLDEydjg4SDUyVjUySDIwNFpNMTAwLDc2YTEyLDEyLDAsMCwxLDEyLTEyaDMyYTEyLDEyLDAsMCwxLDAsMjRIMTEyQTEyLDEyLDAsMCwxLDEwMCw3NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTExMiw1NmgzMmE4LDgsMCwwLDEsMCwxNkgxMTJhOCw4LDAsMCwxLDAtMTZabTgsMTUySDY0Vjk2aDU2Wm03MiwwSDEzNlY5Nmg1NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTA0VjIxNkg3MlYxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDMySDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWm0tMzIsODB2OTZIMTM2VjExMlptLTU2LDk2SDgwVjExMmg0MFptODgsMEgxOTJWMTA0YTgsOCwwLDAsMC04LThINzJhOCw4LDAsMCwwLTgsOFYyMDhINDhWNDhIMjA4VjIwOFpNMTUyLDcyYTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2aDMyQTgsOCwwLDAsMSwxNTIsNzJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Elevator";
export { I as Elevator };