/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Visor";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuMDUsNTZINzJBNzIsNzIsMCwwLDAsLjA4LDEzMS40YzEuNjksMzYuNjksMzEuNzYsNjYuNzksNjguNDUsNjguNTIsMTUuODUuNzQsMzItNS45LDQ5LjM4LTIwLjNhMTUuODgsMTUuODgsMCwwLDEsMjAuMjQsMEMxNDguNzIsMTg4LjM5LDE2NSwyMDAsMTg0LDIwMGE3Miw3MiwwLDAsMCw3Mi03Mi45NUMyNTUuNDksODcuODcsMjIyLjc2LDU2LDE4My4wNSw1NlptNDAuODEsMTExLjM0QTU1LjYzLDU1LjYzLDAsMCwxLDE4NCwxODRjLTEzLjg4LDAtMjctOS41MS0zNS42NS0xNi42N2EzMS45MSwzMS45MSwwLDAsMC00MC42NSwwQzkzLjUyLDE3OSw4MC45NCwxODQuNDksNjkuMjgsMTgzLjk0YTU2LjM2LDU2LjM2LDAsMCwxLTUzLjIyLTUzLjI4QTU2LDU2LDAsMCwxLDcyLDcySDE4My4wNWMzMSwwLDU2LjU1LDI0Ljc5LDU2Ljk1LDU1LjI1QTU1LjY2LDU1LjY2LDAsMCwxLDIyMy44NiwxNjcuMzRaTTE4NCw5NmE4LDgsMCwwLDEtOCw4SDgwYTgsOCwwLDAsMSwwLTE2aDk2QTgsOCwwLDAsMSwxODQsOTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuMDUsNjBINzJBNjgsNjgsMCwwLDAsNC4wNywxMzEuMjFjMS42LDM0LjY2LDMwLDYzLjA4LDY0LjY1LDY0LjcxLDE0Ljc3LjcyLDMwLTUuNjQsNDYuNjMtMTkuMzhhMTkuOSwxOS45LDAsMCwxLDI1LjM1LDBDMTUwLjc5LDE4NC45MiwxNjYuMjUsMTk2LDE4NCwxOTZhNjgsNjgsMCwwLDAsNjgtNjguOUMyNTEuNTEsOTAuMSwyMjAuNTgsNjAsMTgzLjA1LDYwWk0yMjYuNywxNzAuMTVBNTkuNTcsNTkuNTcsMCwwLDEsMTg0LDE4OGMtMTUuMTcsMC0yOS4wNy0xMC0zOC4yLTE3LjU4YTI3Ljg4LDI3Ljg4LDAsMCwwLTM1LjU1LDBjLTE1LDEyLjQxLTI4LjQ1LDE4LjE0LTQxLjE1LDE3LjU1YTYwLjM3LDYwLjM3LDAsMCwxLTU3LTU3LjA5QTYwLDYwLDAsMCwxLDcyLDY4SDE4My4wNWMzMy4xOCwwLDYwLjUyLDI2LjU2LDYwLjk0LDU5LjJBNTkuNTksNTkuNTksMCwwLDEsMjI2LjcsMTcwLjE1Wk0xODAsOTZhNCw0LDAsMCwxLTQsNEg4MGE0LDQsMCwwLDEsMC04aDk2QTQsNCwwLDAsMSwxODAsOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuMDUsNThINzJBNzAsNzAsMCwwLDAsMi4wOCwxMzEuM0MzLjcyLDE2NywzMywxOTYuMjQsNjguNjIsMTk3LjkyYzE1LjMxLjcxLDMxLTUuNzcsNDgtMTkuODRhMTcuODksMTcuODksMCwwLDEsMjIuOCwwQzE0OS43NSwxODYuNjYsMTY1LjYsMTk4LDE4NCwxOThhNzAsNzAsMCwwLDAsNzAtNzAuOTNDMjUzLjUsODksMjIxLjY3LDU4LDE4My4wNSw1OFptNDIuMjMsMTEwLjc0QTU3LjU3LDU3LjU3LDAsMCwxLDE4NCwxODZjLTE0LjUzLDAtMjgtOS43Ny0zNi45My0xNy4xM2EyOS45LDI5LjksMCwwLDAtMzguMDksMGgwYy0xNC41OCwxMi4wOS0yNy42LDE3LjY3LTM5Ljc4LDE3LjFhNTguMzYsNTguMzYsMCwwLDEtNTUuMTItNTUuMThBNTgsNTgsMCwwLDEsNzIsNzBIMTgzLjA1YzMyLjA5LDAsNTguNTQsMjUuNjcsNTguOTUsNTcuMjNBNTcuNjIsNTcuNjIsMCwwLDEsMjI1LjI4LDE2OC43NFpNMTgyLDk2YTYsNiwwLDAsMS02LDZIODBhNiw2LDAsMCwxLDAtMTJoOTZBNiw2LDAsMCwxLDE4Miw5NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsMTA0YTEyLDEyLDAsMCwxLTEyLDEySDgwYTEyLDEyLDAsMCwxLDAtMjRoOTZBMTIsMTIsMCwwLDEsMTg4LDEwNFptNjcuOTEsMjcuNjNBNzYuMjksNzYuMjksMCwwLDEsMTgyLjQzLDIwNGMtLjU2LDAtMS4xMywwLTEuNjksMC0xNC40NCwwLTI5LjM3LTUuNzgtNDUuNTgtMTcuNjRhMTIuMDgsMTIuMDgsMCwwLDAtMTQuMzIsMEMxMDQsMTk4LjY4LDg4LjU2LDIwNC40NCw3My41NywyMDRBNzYuMjksNzYuMjksMCwwLDEsLjA5LDEzMS42Myw3Niw3NiwwLDAsMSw3Niw1MkgxODBhNzYsNzYsMCwwLDEsNzUuOTEsNzkuNjNaTTIxNy42Miw5Mi4xQTUxLjU2LDUxLjU2LDAsMCwwLDE4MCw3Nkg3NmE1Miw1MiwwLDAsMC01MS45NCw1NC41MUE1Mi4xOSw1Mi4xOSwwLDAsMCw3NC4zMiwxODBjOS40Mi4yOSwyMC00LDMyLjM1LTEzYTM2LDM2LDAsMCwxLDQyLjY2LDBjMTIuMzYsOSwyMi45MSwxMy4yOSwzMi4zNSwxM2E1Mi4xOSw1Mi4xOSwwLDAsMCw1MC4yNi00OS40OEE1MS42Myw1MS42MywwLDAsMCwyMTcuNjIsOTIuMVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuMDUsNTZINzJBNzIsNzIsMCwwLDAsLjA4LDEzMS40YzEuNjksMzYuNjksMzEuNzYsNjYuNzksNjguNDUsNjguNTIsMTUuODQuNzIsMzItNS45LDQ5LjM4LTIwLjNhMTUuODcsMTUuODcsMCwwLDEsMjAuMjQsMEMxNDguNzIsMTg4LjM5LDE2NSwyMDAsMTg0LDIwMGE3Miw3MiwwLDAsMCw3Mi03Mi45NUMyNTUuNDksODcuODcsMjIyLjc2LDU2LDE4My4wNSw1NlpNMTc2LDEwNEg4MGE4LDgsMCwwLDEsMC0xNmg5NmE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTI3LjE1QTY0LDY0LDAsMCwxLDE4NCwxOTJjLTE1LjQ4LDAtMjkuNjgtOS4zNS00MC43NS0xOC41YTIzLjkxLDIzLjkxLDAsMCwwLTMwLjQ1LS4wNWMtMTEuODEsOS43OS0yNy4xOSwxOS4yNi00My44OSwxOC40OEE2NCw2NCwwLDAsMSw3Miw2NEgxODMuMDVDMjE4LjIyLDY0LDI0Ny41NCw5MiwyNDgsMTI3LjE1WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4My4wNSw1Nkg3MkE3Miw3MiwwLDAsMCwuMDgsMTMxLjRjMS42OSwzNi42OSwzMS43Niw2Ni43OSw2OC40NSw2OC41MiwxNS44NS43NCwzMi01LjksNDkuMzgtMjAuM2ExNS44OCwxNS44OCwwLDAsMSwyMC4yNCwwQzE0OC43MiwxODguMzksMTY1LDIwMCwxODQsMjAwYTcyLDcyLDAsMCwwLDcyLTcyLjk1QzI1NS40OSw4Ny44NywyMjIuNzYsNTYsMTgzLjA1LDU2Wm00MC44MSwxMTEuMzRBNTUuNjMsNTUuNjMsMCwwLDEsMTg0LDE4NGMtMTMuODgsMC0yNy05LjUxLTM1LjY1LTE2LjY3YTMxLjkxLDMxLjkxLDAsMCwwLTQwLjY1LDBDOTMuNTIsMTc5LDgxLDE4NC40OSw2OS4yOCwxODMuOTRhNTYuMzYsNTYuMzYsMCwwLDEtNTMuMjItNTMuMjhBNTYsNTYsMCwwLDEsNzIsNzJIMTgzLjA1YzMxLDAsNTYuNTUsMjQuNzksNTYuOTUsNTUuMjVBNTUuNjYsNTUuNjYsMCwwLDEsMjIzLjg2LDE2Ny4zNFpNMTg0LDk2YTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZoOTZBOCw4LDAsMCwxLDE4NCw5NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Visor";
export { I as Visor };