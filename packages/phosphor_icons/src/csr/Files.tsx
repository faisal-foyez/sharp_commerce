/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Files";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsNjYuMzRsLTQwLTQwQTgsOCwwLDAsMCwxNjgsMjRIODhBMTYsMTYsMCwwLDAsNzIsNDBWNTZINTZBMTYsMTYsMCwwLDAsNDAsNzJWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDE2OGExNiwxNiwwLDAsMCwxNi0xNlYyMDBoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBOCw4LDAsMCwwLDIxMy42Niw2Ni4zNFpNMTY4LDIxNkg1NlY3Mmg3Ni42OUwxNjgsMTA3LjMxdjg0LjUzYzAsLjA2LDAsLjExLDAsLjE2czAsLjEsMCwuMTZWMjE2Wm0zMi0zMkgxODRWMTA0YTgsOCwwLDAsMC0yLjM0LTUuNjZsLTQwLTQwQTgsOCwwLDAsMCwxMzYsNTZIODhWNDBoNzYuNjlMMjAwLDc1LjMxWm0tNTYtMzJhOCw4LDAsMCwxLTgsOEg4OGE4LDgsMCwwLDEsMC0xNmg0OEE4LDgsMCwwLDEsMTQ0LDE1MlptMCwzMmE4LDgsMCwwLDEtOCw4SDg4YTgsOCwwLDAsMSwwLTE2aDQ4QTgsOCwwLDAsMSwxNDQsMTg0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsNjkuMTdsLTQwLTQwQTQsNCwwLDAsMCwxNjgsMjhIODhBMTIsMTIsMCwwLDAsNzYsNDBWNjBINTZBMTIsMTIsMCwwLDAsNDQsNzJWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDE2OGExMiwxMiwwLDAsMCwxMi0xMlYxOTZoMjBhMTIsMTIsMCwwLDAsMTItMTJWNzJBNCw0LDAsMCwwLDIxMC44Myw2OS4xN1pNMTcyLDIxNmE0LDQsMCwwLDEtNCw0SDU2YTQsNCwwLDAsMS00LTRWNzJhNCw0LDAsMCwxLDQtNGg3OC4zNEwxNzIsMTA1LjY2Wm0zMi0zMmE0LDQsMCwwLDEtNCw0SDE4MFYxMDRhNCw0LDAsMCwwLTEuMTctMi44M2wtNDAtNDBBNCw0LDAsMCwwLDEzNiw2MEg4NFY0MGE0LDQsMCwwLDEsNC00aDc4LjM0TDIwNCw3My42NlptLTY0LTMyYTQsNCwwLDAsMS00LDRIODhhNCw0LDAsMCwxLDAtOGg0OEE0LDQsMCwwLDEsMTQwLDE1MlptMCwzMmE0LDQsMCwwLDEtNCw0SDg4YTQsNCwwLDAsMSwwLThoNDhBNCw0LDAsMCwxLDE0MCwxODRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsNjcuNzZsLTQwLTQwQTYsNiwwLDAsMCwxNjgsMjZIODhBMTQsMTQsMCwwLDAsNzQsNDBWNThINTZBMTQsMTQsMCwwLDAsNDIsNzJWMjE2YTE0LDE0LDAsMCwwLDE0LDE0SDE2OGExNCwxNCwwLDAsMCwxNC0xNFYxOThoMThhMTQsMTQsMCwwLDAsMTQtMTRWNzJBNiw2LDAsMCwwLDIxMi4yNCw2Ny43NlpNMTcwLDIxNmEyLDIsMCwwLDEtMiwySDU2YTIsMiwwLDAsMS0yLTJWNzJhMiwyLDAsMCwxLDItMmg3Ny41MUwxNzAsMTA2LjQ5Wm0zMi0zMmEyLDIsMCwwLDEtMiwySDE4MlYxMDRhNiw2LDAsMCwwLTEuNzYtNC4yNGwtNDAtNDBBNiw2LDAsMCwwLDEzNiw1OEg4NlY0MGEyLDIsMCwwLDEsMi0yaDc3LjUxTDIwMiw3NC40OVptLTYwLTMyYTYsNiwwLDAsMS02LDZIODhhNiw2LDAsMCwxLDAtMTJoNDhBNiw2LDAsMCwxLDE0MiwxNTJabTAsMzJhNiw2LDAsMCwxLTYsNkg4OGE2LDYsMCwwLDEsMC0xMmg0OEE2LDYsMCwwLDEsMTQyLDE4NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNDksNTkuNTFsLTQwLTQwQTEyLDEyLDAsMCwwLDE3MiwxNkg5MkEyMCwyMCwwLDAsMCw3MiwzNlY1Nkg1NkEyMCwyMCwwLDAsMCwzNiw3NlYyMTZhMjAsMjAsMCwwLDAsMjAsMjBIMTY0YTIwLDIwLDAsMCwwLDIwLTIwVjE5NmgyMGEyMCwyMCwwLDAsMCwyMC0yMFY2OEExMiwxMiwwLDAsMCwyMjAuNDksNTkuNTFaTTE2MCwyMTJINjBWODBoNjdsMzMsMzNabTQwLTQwSDE4NFYxMDhhMTIsMTIsMCwwLDAtMy41MS04LjQ5bC00MC00MEExMiwxMiwwLDAsMCwxMzIsNTZIOTZWNDBoNzFsMzMsMzNabS01Ni0yOGExMiwxMiwwLDAsMS0xMiwxMkg4OGExMiwxMiwwLDAsMSwwLTI0aDQ0QTEyLDEyLDAsMCwxLDE0NCwxNDRabTAsNDBhMTIsMTIsMCwwLDEtMTIsMTJIODhhMTIsMTIsMCwwLDEsMC0yNGg0NEExMiwxMiwwLDAsMSwxNDQsMTg0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsNjYuMzRsLTQwLTQwQTgsOCwwLDAsMCwxNjgsMjRIODhBMTYsMTYsMCwwLDAsNzIsNDBWNTZINTZBMTYsMTYsMCwwLDAsNDAsNzJWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDE2OGExNiwxNiwwLDAsMCwxNi0xNlYyMDBoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBOCw4LDAsMCwwLDIxMy42Niw2Ni4zNFpNMTM2LDE5Mkg4OGE4LDgsMCwwLDEsMC0xNmg0OGE4LDgsMCwwLDEsMCwxNlptMC0zMkg4OGE4LDgsMCwwLDEsMC0xNmg0OGE4LDgsMCwwLDEsMCwxNlptNjQsMjRIMTg0VjEwNGE4LDgsMCwwLDAtMi4zNC01LjY2bC00MC00MEE4LDgsMCwwLDAsMTM2LDU2SDg4VjQwaDc2LjY5TDIwMCw3NS4zMVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzJWMTg0YTgsOCwwLDAsMS04LDhIMTc2VjEwNEwxMzYsNjRIODBWNDBhOCw4LDAsMCwxLDgtOGg4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTMuNjYsNjYuMzRsLTQwLTQwQTgsOCwwLDAsMCwxNjgsMjRIODhBMTYsMTYsMCwwLDAsNzIsNDBWNTZINTZBMTYsMTYsMCwwLDAsNDAsNzJWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDE2OGExNiwxNiwwLDAsMCwxNi0xNlYyMDBoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBOCw4LDAsMCwwLDIxMy42Niw2Ni4zNFpNMTY4LDIxNkg1NlY3Mmg3Ni42OUwxNjgsMTA3LjMxdjg0LjUzYzAsLjA2LDAsLjExLDAsLjE2czAsLjEsMCwuMTZWMjE2Wm0zMi0zMkgxODRWMTA0YTgsOCwwLDAsMC0yLjM0LTUuNjZsLTQwLTQwQTgsOCwwLDAsMCwxMzYsNTZIODhWNDBoNzYuNjlMMjAwLDc1LjMxWm0tNTYtMzJhOCw4LDAsMCwxLTgsOEg4OGE4LDgsMCwwLDEsMC0xNmg0OEE4LDgsMCwwLDEsMTQ0LDE1MlptMCwzMmE4LDgsMCwwLDEtOCw4SDg4YTgsOCwwLDAsMSwwLTE2aDQ4QTgsOCwwLDAsMSwxNDQsMTg0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Files";
export { I as Files };