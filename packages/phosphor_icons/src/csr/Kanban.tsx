/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Kanban";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLTgsOFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIODhhMTYsMTYsMCwwLDAsMTYtMTZWMTYwaDQ4djE2YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjU2QTgsOCwwLDAsMCwyMTYsNDhaTTg4LDIwOEg0OFYxMjhIODhabTAtOTZINDhWNjRIODhabTY0LDMySDEwNFY2NGg0OFptNTYsMzJIMTY4VjEyOGg0MFptMC02NEgxNjhWNjRoNDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTJINDBhNCw0LDAsMCwwLTQsNFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIODhhMTIsMTIsMCwwLDAsMTItMTJWMTU2aDU2djIwYTEyLDEyLDAsMCwwLDEyLDEyaDQwYTEyLDEyLDAsMCwwLDEyLTEyVjU2QTQsNCwwLDAsMCwyMTYsNTJaTTkyLDIwOGE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTI0SDkyWm0wLTkySDQ0VjYwSDkyWm02NCwzMkgxMDBWNjBoNTZabTU2LDI4YTQsNCwwLDAsMS00LDRIMTY4YTQsNCwwLDAsMS00LTRWMTI0aDQ4Wm0wLTYwSDE2NFY2MGg0OFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTBINDBhNiw2LDAsMCwwLTYsNlYyMDhhMTQsMTQsMCwwLDAsMTQsMTRIODhhMTQsMTQsMCwwLDAsMTQtMTRWMTU4aDUydjE4YTE0LDE0LDAsMCwwLDE0LDE0aDQwYTE0LDE0LDAsMCwwLDE0LTE0VjU2QTYsNiwwLDAsMCwyMTYsNTBabS02LDY0SDE2NlY2Mmg0NFpNOTAsNjJ2NTJINDZWNjJabTAsMTQ2YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlYxMjZIOTBabTEyLTYyVjYyaDUydjg0Wm0xMDYsMzJIMTY4YTIsMiwwLDAsMS0yLTJWMTI2aDQ0djUwQTIsMiwwLDAsMSwyMDgsMTc4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDg4YTIwLDIwLDAsMCwwLDIwLTIwVjE2NGg0MHYxMmEyMCwyMCwwLDAsMCwyMCwyMGg0MGEyMCwyMCwwLDAsMCwyMC0yMFY1NkExMiwxMiwwLDAsMCwyMTYsNDRabS0xMiw2NEgxNzJWNjhoMzJaTTg0LDY4djQwSDUyVjY4Wm0wLDEzNkg1MlYxMzJIODRabTI0LTY0VjY4aDQwdjcyWm02NCwzMlYxMzJoMzJ2NDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNTZ2OTZhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04aDQwQTgsOCwwLDAsMSwxNjAsNTZabTY0LThIMTg0YTgsOCwwLDAsMC04LDh2NTJhNCw0LDAsMCwwLDQsNGg0OGE0LDQsMCwwLDAsNC00VjU2QTgsOCwwLDAsMCwyMjQsNDhabTQsODBIMTgwYTQsNCwwLDAsMC00LDR2NDRhMTYsMTYsMCwwLDAsMTYsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWMTMyQTQsNCwwLDAsMCwyMjgsMTI4Wk04MCw0OEg0MGE4LDgsMCwwLDAtOCw4djUyYTQsNCwwLDAsMCw0LDRIODRhNCw0LDAsMCwwLDQtNFY1NkE4LDgsMCwwLDAsODAsNDhabTQsODBIMzZhNCw0LDAsMCwwLTQsNHY3NmExNiwxNiwwLDAsMCwxNiwxNkg3MmExNiwxNiwwLDAsMCwxNi0xNlYxMzJBNCw0LDAsMCwwLDg0LDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZ2NjRIMTYwVjU2Wk00MCwyMDhhOCw4LDAsMCwwLDgsOEg4OGE4LDgsMCwwLDAsOC04VjEyMEg0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLTgsOFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIODhhMTYsMTYsMCwwLDAsMTYtMTZWMTYwaDQ4djE2YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjU2QTgsOCwwLDAsMCwyMTYsNDhabS04LDY0SDE2OFY2NGg0MFpNODgsNjR2NDhINDhWNjRabTAsMTQ0SDQ4VjEyOEg4OFptMTYtNjRWNjRoNDh2ODBabTY0LDMyVjEyOGg0MHY0OFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Kanban";
export { I as Kanban };