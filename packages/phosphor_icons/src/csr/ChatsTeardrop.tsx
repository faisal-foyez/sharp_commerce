/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ChatsTeardrop";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjkuNTcsNzIuNTlBODAsODAsMCwwLDAsMTYsMTA0djY0YTE2LDE2LDAsMCwwLDE2LDE2SDg2LjY3QTgwLjE1LDgwLjE1LDAsMCwwLDE2MCwyMzJoNjRhMTYsMTYsMCwwLDAsMTYtMTZWMTUyQTgwLDgwLDAsMCwwLDE2OS41Nyw3Mi41OVpNMzIsMTA0YTY0LDY0LDAsMSwxLDY0LDY0SDMyWk0yMjQsMjE2SDE2MGE2NC4xNCw2NC4xNCwwLDAsMS01NS42OC0zMi40M0E3OS45Myw3OS45MywwLDAsMCwxNzQuNyw4OS43MSw2NCw2NCwwLDAsMSwyMjQsMTUyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYuNzYsNzYuMzJBNzYsNzYsMCwwLDAsMjAsMTA0djY0YTEyLDEyLDAsMCwwLDEyLDEySDg5LjMzQTc2LjEzLDc2LjEzLDAsMCwwLDE2MCwyMjhoNjRhMTIsMTIsMCwwLDAsMTItMTJWMTUyQTc2LDc2LDAsMCwwLDE2Ni43Niw3Ni4zMlpNMjgsMTY4VjEwNGE2OCw2OCwwLDEsMSw2OCw2OEgzMkE0LDQsMCwwLDEsMjgsMTY4Wm0yMDAsNDhhNCw0LDAsMCwxLTQsNEgxNjBBNjguMTYsNjguMTYsMCwwLDEsOTgsMTgwLDc2LDc2LDAsMCwwLDE2OS41LDg0LjY3LDY4LDY4LDAsMCwxLDIyOCwxNTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjguMTYsNzQuNDJBNzgsNzgsMCwwLDAsMTgsMTA0djY0YTE0LDE0LDAsMCwwLDE0LDE0SDg4YTc4LjE1LDc4LjE1LDAsMCwwLDcyLDQ4aDY0YTE0LDE0LDAsMCwwLDE0LTE0VjE1MkE3OCw3OCwwLDAsMCwxNjguMTYsNzQuNDJaTTMwLDE2OFYxMDRhNjYsNjYsMCwxLDEsNjYsNjZIMzJBMiwyLDAsMCwxLDMwLDE2OFptMTk2LDQ4YTIsMiwwLDAsMS0yLDJIMTYwYTY2LjEzLDY2LjEzLDAsMCwxLTU4Ljg5LTM2LjE5LDc3LjkyLDc3LjkyLDAsMCwwLDcxLTk0LjY4QTY2LDY2LDAsMCwxLDIyNiwxNTJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuMjksNjguOUE4NCw4NCwwLDAsMCwxMiwxMDR2NjRhMjAsMjAsMCwwLDAsMjAsMjBIODQuMUE4NC4xOCw4NC4xOCwwLDAsMCwxNjAsMjM2aDY0YTIwLDIwLDAsMCwwLDIwLTIwVjE1MkE4NCw4NCwwLDAsMCwxNzIuMjksNjguOVpNMzYsMTA0YTYwLDYwLDAsMSwxLDYwLDYwSDM2Wk0yMjAsMjEySDE2MGE2MC4xNCw2MC4xNCwwLDAsMS00OS0yNS4zNyw4My45Myw4My45MywwLDAsMCw2OC41NS05MS4zN0E2MCw2MCwwLDAsMSwyMjAsMTUyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjkuNTcsNzIuNTlBODAsODAsMCwwLDAsMTYsMTA0djY0YTE2LDE2LDAsMCwwLDE2LDE2SDg2LjY3QTgwLjE1LDgwLjE1LDAsMCwwLDE2MCwyMzJoNjRhMTYsMTYsMCwwLDAsMTYtMTZWMTUyQTgwLDgwLDAsMCwwLDE2OS41Nyw3Mi41OVpNMjI0LDIxNkgxNjBhNjQuMTQsNjQuMTQsMCwwLDEtNTUuNjgtMzIuNDNBNzkuOTMsNzkuOTMsMCwwLDAsMTc0LjcsODkuNzEsNjQsNjQsMCwwLDEsMjI0LDE1MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTUydjY0YTgsOCwwLDAsMS04LDhIMTYwYTcyLDcyLDAsMCwxLTY3LjktNDhIOTZhNzIsNzIsMCwwLDAsNzItNzJoMGE3MS44Myw3MS44MywwLDAsMC00LjA3LTIzLjg4aDBBNzIsNzIsMCwwLDEsMjMyLDE1MloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjkuNTcsNzIuNTlBODAsODAsMCwwLDAsMTYsMTA0djY0YTE2LDE2LDAsMCwwLDE2LDE2SDg2LjY3QTgwLjE1LDgwLjE1LDAsMCwwLDE2MCwyMzJoNjRhMTYsMTYsMCwwLDAsMTYtMTZWMTUyQTgwLDgwLDAsMCwwLDE2OS41Nyw3Mi41OVpNMzIsMTA0YTY0LDY0LDAsMSwxLDY0LDY0SDMyWk0yMjQsMjE2SDE2MGE2NC4xNCw2NC4xNCwwLDAsMS01NS42OC0zMi40M0E3OS45Myw3OS45MywwLDAsMCwxNzQuNyw4OS43MSw2NCw2NCwwLDAsMSwyMjQsMTUyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ChatsTeardrop";
export { I as ChatsTeardrop };