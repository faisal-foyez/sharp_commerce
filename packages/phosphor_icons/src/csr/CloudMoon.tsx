/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/CloudMoon";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNzJhNzYuNDUsNzYuNDUsMCwwLDAtMTIuMzYsMUE3MS45Myw3MS45MywwLDAsMCwxMDQuMTcsOS44M2E4LDgsMCwwLDAtOS41OSw5LjU4QTU2LjA1LDU2LjA1LDAsMCwxLDQwLDg4YTU2LjQ1LDU2LjQ1LDAsMCwxLTEyLjU5LTEuNDIsOCw4LDAsMCwwLTkuNTksOS41OSw3Mi4yMiw3Mi4yMiwwLDAsMCwzMi4yOSw0NS4wNkE1Miw1MiwwLDAsMCw5MiwyMjRoODBhNzYsNzYsMCwwLDAsMC0xNTJaTTM3LjM3LDEwNGMuODcsMCwxLjc1LDAsMi42MywwYTcyLjA4LDcyLjA4LDAsMCwwLDcyLTcyYzAtLjg5LDAtMS43OCwwLTIuNjdhNTUuNjMsNTUuNjMsMCwwLDEsMzIsNDgsNzYuMjgsNzYuMjgsMCwwLDAtNDMsNDMuNEE1Miw1MiwwLDAsMCw2MiwxMjkuNTksNTYuMjIsNTYuMjIsMCwwLDEsMzcuMzcsMTA0Wk0xNzIsMjA4SDkyYTM2LDM2LDAsMSwxLDQuNzgtNzEuNjljLS4zNywyLjM3LS42Myw0Ljc5LS43Nyw3LjIzYTgsOCwwLDAsMCwxNiwuOTIsNTguOTEsNTguOTEsMCwwLDEsMS44OC0xMS44MWMwLS4xNi4wOS0uMzIuMTItLjQ4QTYwLjA2LDYwLjA2LDAsMSwxLDE3MiwyMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNzZBNzIsNzIsMCwwLDAsMTU2LDc3LjgxYTY4LDY4LDAsMCwwLTUyLjY4LTY0LjA5LDQsNCwwLDAsMC00Ljc5LDQuOCw2MC4wNSw2MC4wNSwwLDAsMS03Miw3Miw0LDQsMCwwLDAtNC44LDQuOEE2OC4yLDY4LjIsMCwwLDAsNTYuMTcsMTQwLjEsNDgsNDgsMCwwLDAsOTIsMjIwaDgwYTcyLDcyLDAsMCwwLDAtMTQ0Wk0zMS4yMiw5OS40NEE2OS40Niw2OS40NiwwLDAsMCw0MCwxMDBhNjguMDcsNjguMDcsMCwwLDAsNjgtNjgsNjkuNzQsNjkuNzQsMCwwLDAtLjU2LTguNzlBNTkuNjYsNTkuNjYsMCwwLDEsMTQ4LDgwdi4xMWE3Mi4yNyw3Mi4yNywwLDAsMC00NC40OSw0NS4yOEE0OC4yOCw0OC4yOCwwLDAsMCw5MiwxMjRhNDcuNzUsNDcuNzUsMCwwLDAtMjkuNjEsMTAuMjZBNjAuMjEsNjAuMjEsMCwwLDEsMzEuMjIsOTkuNDRaTTE3MiwyMTJIOTJhNDAsNDAsMCwxLDEsOS40My03OC44OEE3MS42Myw3MS42MywwLDAsMCwxMDAsMTQzLjc3YTQsNCwwLDAsMCw4LC40Niw2NC4zLDY0LjMsMCwwLDEsMi0xMi42N2MwLS4xMi4wNy0uMjQuMDktLjM2QTY0LjA2LDY0LjA2LDAsMSwxLDE3MiwyMTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNzRhNzQuNDEsNzQuNDEsMCwwLDAtMTQuMTcsMS4zNiw3MCw3MCwwLDAsMC01NC4xMS02My41OUE2LDYsMCwwLDAsOTYuNTMsMTksNTguMDYsNTguMDYsMCwwLDEsMjcsODguNTNhNiw2LDAsMCwwLTcuMTksNy4xOSw3MC4yMiw3MC4yMiwwLDAsMCwzMy4zLDQ0Ljk1QTUwLDUwLDAsMCwwLDkyLDIyMmg4MGE3NCw3NCwwLDAsMCwwLTE0OFpNMzQuMjIsMTAxLjc2UTM3LjEsMTAyLDQwLDEwMmE3MC4wOCw3MC4wOCwwLDAsMCw3MC03MGMwLTEuOTQtLjA4LTMuODgtLjI0LTUuOEE1Ny42NCw1Ny42NCwwLDAsMSwxNDYsNzguNzEsNzQuMzIsNzQuMzIsMCwwLDAsMTAyLjIsMTIzLDUwLjM2LDUwLjM2LDAsMCwwLDkyLDEyMmE0OS43NCw0OS43NCwwLDAsMC0yOS44Niw5LjkyQTU4LjI0LDU4LjI0LDAsMCwxLDM0LjIyLDEwMS43NlpNMTcyLDIxMEg5MmEzOCwzOCwwLDEsMSw3LjA4LTc1LjM0LDc1Ljg0LDc1Ljg0LDAsMCwwLTEuMDcsOSw2LDYsMCwwLDAsMTIsLjcsNjEuNTQsNjEuNTQsMCwwLDEsMi0xMi4yNGMwLS4xNS4wOC0uMjkuMTEtLjQzQTYyLjA2LDYyLjA2LDAsMSwxLDE3MiwyMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNjhjLTEuNjYsMC0zLjMxLjA2LTQuOTUuMTZhNzUuOTMsNzUuOTMsMCwwLDAtNTgtNjIuMjNBMTIsMTIsMCwwLDAsOTQuNjgsMjAuMzEsNTIuMDUsNTIuMDUsMCwwLDEsMzIuMyw4Mi42OCwxMiwxMiwwLDAsMCwxNy45Myw5Ny4wN2E3Ni42MSw3Ni42MSwwLDAsMCwyNy45MSw0My4yN0E1Niw1NiwwLDAsMCw5MiwyMjhoODBhODAsODAsMCwwLDAsMC0xNjBaTTExOS44OSwzNmE1MS42NCw1MS42NCwwLDAsMSwyMy42OCwzNy4xNyw4MC4zOSw4MC4zOSwwLDAsMC00NS4xOCw0My4xNUE1Ni41LDU2LjUsMCwwLDAsOTIsMTE2YTU1LjY5LDU1LjY5LDAsMCwwLTI4LjIzLDcuNjYsNTIuNjksNTIuNjksMCwwLDEtMTUuNjMtMTUuNzdBNzYuMTEsNzYuMTEsMCwwLDAsMTE5Ljg5LDM2Wk0xNzIsMjA0SDkyYTMyLDMyLDAsMCwxLDAtNjRoLjI4Yy0uMTEsMS4xLS4yLDIuMi0uMjYsMy4zYTEyLDEyLDAsMCwwLDI0LDEuNCw1NS43OCw1NS43OCwwLDAsMSwxLjc0LTExbC4xNS0uNTVBNTYuMDYsNTYuMDYsMCwxLDEsMTcyLDIwNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNzJhNzYuMzUsNzYuMzUsMCwwLDAtMTIuMzYsMUE3MS45Myw3MS45MywwLDAsMCwxMDQuMTcsOS44M2E4LDgsMCwwLDAtOS41OSw5LjU4QTU2LjA1LDU2LjA1LDAsMCwxLDQwLDg4YTU2LjQ1LDU2LjQ1LDAsMCwxLTEyLjU5LTEuNDIsOCw4LDAsMCwwLTkuNTksOS41OSw3Mi4yMiw3Mi4yMiwwLDAsMCwzMi4yOSw0NS4wNkE1Miw1MiwwLDAsMCw5MiwyMjRoODBhNzYsNzYsMCwwLDAsMC0xNTJaTTM3LjM3LDEwNGMuODcsMCwxLjc1LDAsMi42MywwYTcyLjA4LDcyLjA4LDAsMCwwLDcyLTcyYzAtLjg5LDAtMS43OCwwLTIuNjdhNTUuNjQsNTUuNjQsMCwwLDEsMzIsNDguMDVBNzYuNCw3Ni40LDAsMCwwLDEwMSwxMjAuNzhhNTIuMzgsNTIuMzgsMCwwLDAtOS0uNzgsNTEuNjksNTEuNjksMCwwLDAtMzAsOS41OUE1Ni4yMiw1Ni4yMiwwLDAsMSwzNy4zNywxMDRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDYuMzEsMTMwLjM4Wk0xMDIuMzgsMTcuNjJoMEE2NC4wNiw2NC4wNiwwLDAsMSwyNS42Miw5NC4zOGgwQTY0LjEyLDY0LjEyLDAsMCwwLDYzLDEzOC45M2gwYTQ0LjA4LDQ0LjA4LDAsMCwxLDQzLjMzLTguNTQsNjguMTMsNjguMTMsMCwwLDEsNDUuNDctNDcuMzJsLjE1LDBjMC0xLC4wNy0yLC4wNy0zQTY0LDY0LDAsMCwwLDEwMi4zOCwxNy42MloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNzIsNzJhNzYuNDUsNzYuNDUsMCwwLDAtMTIuMzYsMUE3MS45Myw3MS45MywwLDAsMCwxMDQuMTcsOS44M2E4LDgsMCwwLDAtOS41OSw5LjU4QTU2LjA1LDU2LjA1LDAsMCwxLDQwLDg4YTU2LjQ1LDU2LjQ1LDAsMCwxLTEyLjU5LTEuNDIsOCw4LDAsMCwwLTkuNTksOS41OSw3Mi4yMiw3Mi4yMiwwLDAsMCwzMi4yOSw0NS4wNkE1Miw1MiwwLDAsMCw5MiwyMjRoODBhNzYsNzYsMCwwLDAsMC0xNTJaTTM3LjM3LDEwNGMuODcsMCwxLjc1LDAsMi42MywwYTcyLjA4LDcyLjA4LDAsMCwwLDcyLTcyYzAtLjg5LDAtMS43OCwwLTIuNjdhNTUuNjMsNTUuNjMsMCwwLDEsMzIsNDgsNzYuMjgsNzYuMjgsMCwwLDAtNDMsNDMuNEE1Miw1MiwwLDAsMCw2MiwxMjkuNTksNTYuMjIsNTYuMjIsMCwwLDEsMzcuMzcsMTA0Wk0xNzIsMjA4SDkyYTM2LDM2LDAsMSwxLDQuNzgtNzEuNjljLS4zNywyLjM3LS42Myw0Ljc5LS43Nyw3LjIzYTgsOCwwLDAsMCwxNiwuOTIsNTguOTEsNTguOTEsMCwwLDEsMS44OC0xMS44MWMwLS4xNi4wOS0uMzIuMTItLjQ4QTYwLjA2LDYwLjA2LDAsMSwxLDE3MiwyMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CloudMoon";
export { I as CloudMoon };