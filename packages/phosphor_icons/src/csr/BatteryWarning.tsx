/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/BatteryWarning";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTIyNCw4MHY5NmEyNCwyNCwwLDAsMS0yNCwyNEgzMkEyNCwyNCwwLDAsMSw4LDE3NlY4MEEyNCwyNCwwLDAsMSwzMiw1NkgyMDBBMjQsMjQsMCwwLDEsMjI0LDgwWm0tMTYsMGE4LDgsMCwwLDAtOC04SDMyYTgsOCwwLDAsMC04LDh2OTZhOCw4LDAsMCwwLDgsOEgyMDBhOCw4LDAsMCwwLDgtOFptLTkyLDUyYTgsOCwwLDAsMCw4LThWOTZhOCw4LDAsMCwwLTE2LDB2MjhBOCw4LDAsMCwwLDExNiwxMzJabTAsMTJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTE2LDE0NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjBIMzJBMjAsMjAsMCwwLDAsMTIsODB2OTZhMjAsMjAsMCwwLDAsMjAsMjBIMjAwYTIwLDIwLDAsMCwwLDIwLTIwVjgwQTIwLDIwLDAsMCwwLDIwMCw2MFptMTIsMTE2YTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLTEyLTEyVjgwQTEyLDEyLDAsMCwxLDMyLDY4SDIwMGExMiwxMiwwLDAsMSwxMiwxMlptNDAtODB2NjRhNCw0LDAsMCwxLTgsMFY5NmE0LDQsMCwwLDEsOCwwWk0xMTIsMTI0Vjk2YTQsNCwwLDAsMSw4LDB2MjhhNCw0LDAsMCwxLTgsMFptMTIsMzJhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTI0LDE1NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNThIMzJBMjIsMjIsMCwwLDAsMTAsODB2OTZhMjIsMjIsMCwwLDAsMjIsMjJIMjAwYTIyLDIyLDAsMCwwLDIyLTIyVjgwQTIyLDIyLDAsMCwwLDIwMCw1OFptMTAsMTE4YTEwLDEwLDAsMCwxLTEwLDEwSDMyYTEwLDEwLDAsMCwxLTEwLTEwVjgwQTEwLDEwLDAsMCwxLDMyLDcwSDIwMGExMCwxMCwwLDAsMSwxMCwxMFptNDQtODB2NjRhNiw2LDAsMCwxLTEyLDBWOTZhNiw2LDAsMCwxLDEyLDBaTTExMCwxMjRWOTZhNiw2LDAsMCwxLDEyLDB2MjhhNiw2LDAsMCwxLTEyLDBabTE2LDMyYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEyNiwxNTZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNTJIMjhBMjgsMjgsMCwwLDAsMCw4MHY5NmEyOCwyOCwwLDAsMCwyOCwyOEgxOTZhMjgsMjgsMCwwLDAsMjgtMjhWODBBMjgsMjgsMCwwLDAsMTk2LDUyWm00LDEyNGE0LDQsMCwwLDEtNCw0SDI4YTQsNCwwLDAsMS00LTRWODBhNCw0LDAsMCwxLDQtNEgxOTZhNCw0LDAsMCwxLDQsNFptNTYtNzJ2NDhhMTIsMTIsMCwwLDEtMjQsMFYxMDRhMTIsMTIsMCwwLDEsMjQsMFpNMTAwLDExNlYxMDBhMTIsMTIsMCwwLDEsMjQsMHYxNmExMiwxMiwwLDAsMS0yNCwwWm0yOCwzNmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxMjgsMTUyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wk0xMDgsODhhOCw4LDAsMCwxLDE2LDB2NDBhOCw4LDAsMCwxLTE2LDBabTgsODhhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTE2LDE3NlpNMjU2LDk2djY0YTgsOCwwLDAsMS0xNiwwVjk2YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODB2OTZhMTYsMTYsMCwwLDEtMTYsMTZIMzJhMTYsMTYsMCwwLDEtMTYtMTZWODBBMTYsMTYsMCwwLDEsMzIsNjRIMjAwQTE2LDE2LDAsMCwxLDIxNiw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wm04LDEyMGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDBhOCw4LDAsMCwxLDgsOFptNDgtODB2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTEwOCwxMjRWOTZhOCw4LDAsMCwxLDE2LDB2MjhhOCw4LDAsMCwxLTE2LDBabTIwLDMyYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BatteryWarning";
export { I as BatteryWarning };