/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Truck";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuNDIsMTE3bC0xNC0zNUExNS45MywxNS45MywwLDAsMCwyMjYuNTgsNzJIMTkyVjY0YTgsOCwwLDAsMC04LThIMzJBMTYsMTYsMCwwLDAsMTYsNzJWMTg0YTE2LDE2LDAsMCwwLDE2LDE2SDQ5YTMyLDMyLDAsMCwwLDYyLDBoNTBhMzIsMzIsMCwwLDAsNjIsMGgxN2ExNiwxNiwwLDAsMCwxNi0xNlYxMjBBNy45NCw3Ljk0LDAsMCwwLDI1NS40MiwxMTdaTTE5Miw4OGgzNC41OGw5LjYsMjRIMTkyWk0zMiw3MkgxNzZ2NjRIMzJaTTgwLDIwOGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSw4MCwyMDhabTgxLTI0SDExMWEzMiwzMiwwLDAsMC02MiwwSDMyVjE1MkgxNzZ2MTIuMzFBMzIuMTEsMzIuMTEsMCwwLDAsMTYxLDE4NFptMzEsMjRhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTkyLDIwOFptNDgtMjRIMjIzYTMyLjA2LDMyLjA2LDAsMCwwLTMxLTI0VjEyOGg0OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEuNzEsMTE4LjUybC0xNC0zNUExMiwxMiwwLDAsMCwyMjYuNTgsNzZIMTg4VjY0YTQsNCwwLDAsMC00LTRIMzJBMTIsMTIsMCwwLDAsMjAsNzJWMTg0YTEyLDEyLDAsMCwwLDEyLDEySDUyLjI5YTI4LDI4LDAsMCwwLDU1LjQyLDBoNTYuNThhMjgsMjgsMCwwLDAsNTUuNDIsMEgyNDBhMTIsMTIsMCwwLDAsMTItMTJWMTIwQTQsNCwwLDAsMCwyNTEuNzEsMTE4LjUyWk0xODgsODRoMzguNThhNCw0LDAsMCwxLDMuNzIsMi41MUwyNDIuMDksMTE2SDE4OFpNMjgsNzJhNCw0LDAsMCwxLDQtNEgxODB2NzJIMjhaTTgwLDIxMmEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSw4MCwyMTJabTg0LjI5LTI0SDEwNy43MWEyOCwyOCwwLDAsMC01NS40MiwwSDMyYTQsNCwwLDAsMS00LTRWMTQ4SDE4MHYxOC43MUEyOC4wNSwyOC4wNSwwLDAsMCwxNjQuMjksMTg4Wk0xOTIsMjEyYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDE5MiwyMTJabTUyLTI4YTQsNCwwLDAsMS00LDRIMjE5LjcxQTI4LDI4LDAsMCwwLDE4OCwxNjQuMjlWMTI0aDU2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuNTcsMTE3Ljc4bC0xNC0zNWExMy45MywxMy45MywwLDAsMC0xMy04LjhIMTkwVjY0YTYsNiwwLDAsMC02LTZIMzJBMTQsMTQsMCwwLDAsMTgsNzJWMTg0YTE0LDE0LDAsMCwwLDE0LDE0SDUwLjZhMzAsMzAsMCwwLDAsNTguOCwwaDUzLjJhMzAsMzAsMCwwLDAsNTguOCwwSDI0MGExNCwxNCwwLDAsMCwxNC0xNFYxMjBBNiw2LDAsMCwwLDI1My41NywxMTcuNzhaTTE5MCw4NmgzNi41OGEyLDIsMCwwLDEsMS44NiwxLjI2TDIzOS4xNCwxMTRIMTkwWk0zMCw3MmEyLDIsMCwwLDEsMi0ySDE3OHY2OEgzMFpNODAsMjEwYTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDgwLDIxMFptODIuNi0yNEgxMDkuNGEzMCwzMCwwLDAsMC01OC44LDBIMzJhMiwyLDAsMCwxLTItMlYxNTBIMTc4djE1LjQ4QTMwLjEsMzAuMSwwLDAsMCwxNjIuNiwxODZaTTE5MiwyMTBhMTgsMTgsMCwxLDEsMTgtMThBMTgsMTgsMCwwLDEsMTkyLDIxMFptNTAtMjZhMiwyLDAsMCwxLTIsMkgyMjEuNEEzMC4wNSwzMC4wNSwwLDAsMCwxOTIsMTYyYy0uNjcsMC0xLjM0LDAtMiwuMDdWMTI2aDUyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuMTQsMTE1LjU0bC0xNC0zNUExOS44OSwxOS44OSwwLDAsMCwyMjIuNTgsNjhIMTk2VjY0YTEyLDEyLDAsMCwwLTEyLTEySDMyQTIwLDIwLDAsMCwwLDEyLDcyVjE4NGEyMCwyMCwwLDAsMCwyMCwyMEg0Ni4wNmEzNiwzNiwwLDAsMCw2Ny44OCwwaDQ0LjEyYTM2LDM2LDAsMCwwLDY3Ljg4LDBIMjM2YTIwLDIwLDAsMCwwLDIwLTIwVjEyMEEyMS43LDIxLjcsMCwwLDAsMjU1LjE0LDExNS41NFpNMTk2LDkyaDIzLjg4bDYuNCwxNkgxOTZaTTgwLDIwNGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw4MCwyMDRabTkyLTQxLjkyQTM2LjMyLDM2LjMyLDAsMCwwLDE1OC4wNiwxODBIMTEzLjk0YTM2LDM2LDAsMCwwLTY3Ljg4LDBIMzZWMTQwSDE3MlpNMTcyLDExNkgzNlY3NkgxNzJabTIwLDg4YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE5MiwyMDRabTQwLTI0aC02LjA2QTM2LjA5LDM2LjA5LDAsMCwwLDE5NiwxNTYuMjNWMTMyaDM2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuNDMsMTE3bC0xNC0zNUExNS45MywxNS45MywwLDAsMCwyMjYuNTgsNzJIMTkyVjY0YTgsOCwwLDAsMC04LThIMzJBMTYsMTYsMCwwLDAsMTYsNzJWMTg0YTE2LDE2LDAsMCwwLDE2LDE2SDQ5YTMyLDMyLDAsMCwwLDYyLDBoNTBhMzIsMzIsMCwwLDAsNjIsMGgxN2ExNiwxNiwwLDAsMCwxNi0xNlYxMjBBOC4xMyw4LjEzLDAsMCwwLDI1NS40MywxMTdaTTgwLDIwOGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSw4MCwyMDhaTTMyLDEzNlY3MkgxNzZ2NjRabTE2MCw3MmExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxOTIsMjA4Wm0wLTk2Vjg4aDM0LjU4bDkuNiwyNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTIwdjY0YTgsOCwwLDAsMS04LDhIMjE2YTI0LDI0LDAsMCwwLTQ4LDBIMTA0YTI0LDI0LDAsMCwwLTQ4LDBIMzJhOCw4LDAsMCwxLTgtOFYxNDRIMTg0VjEyMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNTUuNDIsMTE3bC0xNC0zNUExNS45MywxNS45MywwLDAsMCwyMjYuNTgsNzJIMTkyVjY0YTgsOCwwLDAsMC04LThIMzJBMTYsMTYsMCwwLDAsMTYsNzJWMTg0YTE2LDE2LDAsMCwwLDE2LDE2SDQ5YTMyLDMyLDAsMCwwLDYyLDBoNTBhMzIsMzIsMCwwLDAsNjIsMGgxN2ExNiwxNiwwLDAsMCwxNi0xNlYxMjBBNy45NCw3Ljk0LDAsMCwwLDI1NS40MiwxMTdaTTE5Miw4OGgzNC41OGw5LjYsMjRIMTkyWk0zMiw3MkgxNzZ2NjRIMzJaTTgwLDIwOGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSw4MCwyMDhabTgxLTI0SDExMWEzMiwzMiwwLDAsMC02MiwwSDMyVjE1MkgxNzZ2MTIuMzFBMzIuMTEsMzIuMTEsMCwwLDAsMTYxLDE4NFptMzEsMjRhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTkyLDIwOFptNDgtMjRIMjIzYTMyLjA2LDMyLjA2LDAsMCwwLTMxLTI0VjEyOGg0OFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Truck";
export { I as Truck };