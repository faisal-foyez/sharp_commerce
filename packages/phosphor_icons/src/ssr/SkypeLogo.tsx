/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SkypeLogo";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTUyYzAsMTcuNjQtMTcuOTQsMzItNDAsMzJzLTQwLTE0LjM2LTQwLTMyYTgsOCwwLDAsMSwxNiwwYzAsOC42NywxMSwxNiwyNCwxNnMyNC03LjMzLDI0LTE2YzAtOS40OC04LjYxLTEzLTI2Ljg4LTE4LjI2QzEwOS4zNywxMjkuMiw4OS43OCwxMjMuNTUsODkuNzgsMTA0YzAtMTguMjQsMTYuNDMtMzIsMzguMjItMzIsMTUuNzIsMCwyOS4xOCw3LjMsMzUuMTIsMTlhOCw4LDAsMSwxLTE0LjI3LDcuMjJDMTQ1LjY0LDkxLjk0LDEzNy42NSw4OCwxMjgsODhjLTEyLjY3LDAtMjIuMjIsNi44OC0yMi4yMiwxNiwwLDcsOSwxMC4xLDIzLjc3LDE0LjM2QzE0NS43OCwxMjMsMTY4LDEyOS40NSwxNjgsMTUyWm02NCwyNGE1Ni4wNiw1Ni4wNiwwLDAsMS01Niw1Niw1NS4zOCw1NS4zOCwwLDAsMS0zMS4xNy05LjQ3QTk2LjA5LDk2LjA5LDAsMCwxLDMzLjQ3LDExMS4xNyw1NS4zOCw1NS4zOCwwLDAsMSwyNCw4MCw1Ni4wNiw1Ni4wNiwwLDAsMSw4MCwyNGE1NS4zOCw1NS4zOCwwLDAsMSwzMS4xNyw5LjQ3QTk2LjA5LDk2LjA5LDAsMCwxLDIyMi41MywxNDQuODMsNTUuMzgsNTUuMzgsMCwwLDEsMjMyLDE3NlptLTE2LDBhMzkuNiwzOS42LDAsMCwwLTguMzItMjQuNDIsOCw4LDAsMCwxLTEuNDktNi41OEE4MC4wNyw4MC4wNywwLDAsMCwxMTEsNDkuODFhOCw4LDAsMCwxLTYuNTgtMS40OUEzOS42LDM5LjYsMCwwLDAsODAsNDAsNDAsNDAsMCwwLDAsNDAsODBhMzkuNiwzOS42LDAsMCwwLDguMzIsMjQuNDJBOCw4LDAsMCwxLDQ5LjgxLDExMSw4MC4wNyw4MC4wNywwLDAsMCwxNDUsMjA2LjE5YTgsOCwwLDAsMSw2LjU4LDEuNDlBMzkuNiwzOS42LDAsMCwwLDE3NiwyMTYsNDAsNDAsMCwwLDAsMjE2LDE3NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMTUyYzAsMTUuNDQtMTYuMTUsMjgtMzYsMjhzLTM2LTEyLjU2LTM2LTI4YTQsNCwwLDAsMSw4LDBjMCwxMSwxMi41NiwyMCwyOCwyMHMyOC05LDI4LTIwYzAtMTIuNTgtMTEuNzktMTYuOTItMjkuNzgtMjIuMTFDMTExLDEyNS41MSw5My43OCwxMjAuNTQsOTMuNzgsMTA0YzAtMTYsMTQuNzEtMjgsMzQuMjItMjgsMTQuMiwwLDI2LjI5LDYuNDYsMzEuNTUsMTYuODVhNCw0LDAsMSwxLTcuMTMsMy42MUMxNDguNTMsODguNzgsMTM5LjE3LDg0LDEyOCw4NGMtMTUsMC0yNi4yMiw4LjYtMjYuMjIsMjAsMCw5LjgxLDEwLjA3LDEzLjQzLDI2LjY2LDE4LjIxUzE2NCwxMzIuNDYsMTY0LDE1MlptNjQsMjRhNTIuMDYsNTIuMDYsMCwwLDEtNTIsNTIsNTEuNDMsNTEuNDMsMCwwLDEtMzAuMjYtOS43MSw5Mi4wOCw5Mi4wOCwwLDAsMS0xMDgtMTA4QTUxLjQzLDUxLjQzLDAsMCwxLDI4LDgwLDUyLjA2LDUyLjA2LDAsMCwxLDgwLDI4YTUxLjQzLDUxLjQzLDAsMCwxLDMwLjI2LDkuNzEsOTIuMDgsOTIuMDgsMCwwLDEsMTA4LDEwOEE1MS40Myw1MS40MywwLDAsMSwyMjgsMTc2Wm0tOCwwYTQzLjYzLDQzLjYzLDAsMCwwLTkuMTUtMjYuODcsNCw0LDAsMCwxLS43NS0zLjI5QTg0LjA3LDg0LjA3LDAsMCwwLDExMC4xNiw0NS45YTQsNCwwLDAsMS0zLjI5LS43NSw0NCw0NCwwLDAsMC02MS43Miw2MS43Miw0LDQsMCwwLDEsLjc1LDMuMjksODQuMDcsODQuMDcsMCwwLDAsOTkuOTQsOTkuOTQsNCw0LDAsMCwxLDMuMjkuNzVBNDQsNDQsMCwwLDAsMjIwLDE3NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYsMTUyYzAsMTYuNTQtMTcuMDUsMzAtMzgsMzBzLTM4LTEzLjQ2LTM4LTMwYTYsNiwwLDAsMSwxMiwwYzAsOS43NiwxMS45MSwxOCwyNiwxOHMyNi04LjI0LDI2LTE4YzAtMTEuMjEtMTAuNy0xNS4xLTI4LjMzLTIwLjE4LTE1Ljg5LTQuNTgtMzMuODktOS43Ny0zMy44OS0yNy44MiwwLTE3LjEsMTUuNTctMzAsMzYuMjItMzAsMTUsMCwyNy43NCw2Ljg4LDMzLjM0LDE4YTYsNiwwLDAsMS0xMC43MSw1LjQyQzE0Ny4wOCw5MC4zNiwxMzguNDEsODYsMTI4LDg2Yy0xMy44MSwwLTI0LjIyLDcuNzQtMjQuMjIsMTgsMCw4LjQxLDkuNTIsMTEuNzYsMjUuMjEsMTYuMjlDMTQ1LjQ4LDEyNSwxNjYsMTMxLDE2NiwxNTJabTY0LDI0YTU0LjA2LDU0LjA2LDAsMCwxLTU0LDU0LDUzLjQzLDUzLjQzLDAsMCwxLTMwLjcyLTkuNTlBOTQuMDYsOTQuMDYsMCwwLDEsMzUuNTksMTEwLjcyLDUzLjQzLDUzLjQzLDAsMCwxLDI2LDgwLDU0LjA2LDU0LjA2LDAsMCwxLDgwLDI2YTUzLjQzLDUzLjQzLDAsMCwxLDMwLjcyLDkuNTlBOTQuMDYsOTQuMDYsMCwwLDEsMjIwLjQxLDE0NS4yOCw1My40Myw1My40MywwLDAsMSwyMzAsMTc2Wm0tMTIsMGE0MS41Nyw0MS41NywwLDAsMC04Ljc0LTI1LjY1LDYsNiwwLDAsMS0xLjExLTQuOTMsODIuMDksODIuMDksMCwwLDAtOTcuNTctOTcuNTcsNiw2LDAsMCwxLTQuOTMtMS4xMUE0MS41Nyw0MS41NywwLDAsMCw4MCwzOCw0Miw0MiwwLDAsMCwzOCw4MGE0MS41Nyw0MS41NywwLDAsMCw4Ljc0LDI1LjY1LDYsNiwwLDAsMSwxLjExLDQuOTMsODIuMDksODIuMDksMCwwLDAsOTcuNTcsOTcuNTcsNS45NSw1Ljk1LDAsMCwxLDQuOTMsMS4xMUE0MS41Nyw0MS41NywwLDAsMCwxNzYsMjE4LDQyLDQyLDAsMCwwLDIxOCwxNzZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTUyYzAsMjAuMTktMTkuMzMsMzYtNDQsMzYtMjEuMjYsMC0zOS40Ni0xMi4zNS00My4yNy0yOS4zOGExMiwxMiwwLDAsMSwyMy40Mi01LjI0QzEwOS4zLDE1OC40OSwxMTcuMjEsMTY0LDEyOCwxNjRjOS40NCwwLDIwLTUuMTMsMjAtMTIsMC02LjM3LTYuMjktOS4zMi0yNC0xNC40Mi0xNi4xNC00LjY1LTM4LjIzLTExLTM4LjIzLTMzLjU4LDAtMjAuNTIsMTguMTUtMzYsNDIuMjItMzYsMTcuMjQsMCwzMi4wNiw4LjE0LDM4LjY5LDIxLjI0YTEyLDEyLDAsMSwxLTIxLjQxLDEwLjg0QzE0Mi44LDk1LjE3LDEzNiw5MiwxMjgsOTJjLTEwLjIyLDAtMTguMjIsNS4yNy0xOC4yMiwxMiwwLDEuMDksMCwyLjIxLDMuMjgsNC4xNyw0LjE4LDIuNDgsMTEsNC40NSwxNy42LDYuMzUsOC43NSwyLjUyLDE3LjgsNS4xMywyNS4zOCw5Ljg2QzE2OS4yMywxMzIuNjEsMTcyLDE0My45NCwxNzIsMTUyWm02NCwyNGE2MC4wNyw2MC4wNywwLDAsMS02MCw2MEE1OS4zNiw1OS4zNiwwLDAsMSwxNDQsMjI2LjczLDEwMS4yMSwxMDEuMjEsMCwwLDEsMTI4LDIyOCwxMDAuMTEsMTAwLjExLDAsMCwxLDI4LDEyOGExMDEuMjEsMTAxLjIxLDAsMCwxLDEuMjctMTZBNTkuMzYsNTkuMzYsMCwwLDEsMjAsODAsNjAuMDcsNjAuMDcsMCwwLDEsODAsMjBhNTkuMzYsNTkuMzYsMCwwLDEsMzIuMDUsOS4yN0ExMDEuMjEsMTAxLjIxLDAsMCwxLDEyOCwyOCwxMDAuMTEsMTAwLjExLDAsMCwxLDIyOCwxMjgsMTAxLjIxLDEwMS4yMSwwLDAsMSwyMjYuNzMsMTQ0LDU5LjM2LDU5LjM2LDAsMCwxLDIzNiwxNzZabS0yNCwwYTM1LjYzLDM1LjYzLDAsMCwwLTcuNDktMjIsMTIsMTIsMCwwLDEtMi4yMy05Ljg3LDc2LjA3LDc2LjA3LDAsMCwwLTkwLjQzLTkwLjQzQTEyLDEyLDAsMCwxLDEwMiw1MS40OSwzNS42MywzNS42MywwLDAsMCw4MCw0NCwzNiwzNiwwLDAsMCw0NCw4MGEzNS42MywzNS42MywwLDAsMCw3LjQ5LDIyLDEyLDEyLDAsMCwxLDIuMjMsOS44Nyw3Ni4wNyw3Ni4wNywwLDAsMCw5MC40Myw5MC40MywxMiwxMiwwLDAsMSw5Ljg3LDIuMjNBMzUuNjMsMzUuNjMsMCwwLDAsMTc2LDIxMiwzNiwzNiwwLDAsMCwyMTIsMTc2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuNTMsMTQ0LjgzQTk2LjA5LDk2LjA5LDAsMCwwLDExMS4xNywzMy40Nyw1NS4zOCw1NS4zOCwwLDAsMCw4MCwyNCw1Ni4wNiw1Ni4wNiwwLDAsMCwyNCw4MGE1NS4zOCw1NS4zOCwwLDAsMCw5LjQ3LDMxLjE3QTk2LjA5LDk2LjA5LDAsMCwwLDE0NC44MywyMjIuNTMsNTUuMzgsNTUuMzgsMCwwLDAsMTc2LDIzMmE1Ni4wNiw1Ni4wNiwwLDAsMCw1Ni01NkE1NS4zOCw1NS4zOCwwLDAsMCwyMjIuNTMsMTQ0LjgzWk0xMjgsMTg0Yy0yMi4wNiwwLTQwLTE0LjM2LTQwLTMyYTgsOCwwLDAsMSwxNiwwYzAsOC42NywxMSwxNiwyNCwxNnMyNC03LjMzLDI0LTE2YzAtOS40OC04LjYxLTEzLTI2Ljg4LTE4LjI2QzEwOS4zNywxMjkuMiw4OS43OCwxMjMuNTUsODkuNzgsMTA0YzAtMTguMjQsMTYuNDMtMzIsMzguMjItMzIsMTUuNzIsMCwyOS4xOCw3LjMsMzUuMTIsMTlhOCw4LDAsMSwxLTE0LjI3LDcuMjJDMTQ1LjY0LDkxLjk0LDEzNy42NSw4OCwxMjgsODhjLTEyLjY3LDAtMjIuMjIsNi44OC0yMi4yMiwxNiwwLDcsOSwxMC4xLDIzLjc3LDE0LjM2QzE0NS43OCwxMjMsMTY4LDEyOS40NSwxNjgsMTUyLDE2OCwxNjkuNjQsMTUwLjA2LDE4NCwxMjgsMTg0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTc2YTQ4LDQ4LDAsMCwxLTc3LjMxLDM4QTg4LjA3LDg4LjA3LDAsMCwxLDQyLDEwOS4zMSw0OCw0OCwwLDAsMSwxMDkuMzEsNDIsODguMDcsODguMDcsMCwwLDEsMjE0LDE0Ni42OSw0Ny43Nyw0Ny43NywwLDAsMSwyMjQsMTc2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE2OCwxNTJjMCwxNy42NC0xNy45NCwzMi00MCwzMnMtNDAtMTQuMzYtNDAtMzJhOCw4LDAsMCwxLDE2LDBjMCw4LjY3LDExLDE2LDI0LDE2czI0LTcuMzMsMjQtMTZjMC05LjQ4LTguNjEtMTMtMjYuODgtMTguMjZDMTA5LjM3LDEyOS4yLDg5Ljc4LDEyMy41NSw4OS43OCwxMDRjMC0xOC4yNCwxNi40My0zMiwzOC4yMi0zMiwxNS43MiwwLDI5LjE4LDcuMywzNS4xMiwxOWE4LDgsMCwxLDEtMTQuMjcsNy4yMkMxNDUuNjQsOTEuOTQsMTM3LjY1LDg4LDEyOCw4OGMtMTIuNjcsMC0yMi4yMiw2Ljg4LTIyLjIyLDE2LDAsNyw5LDEwLjEsMjMuNzcsMTQuMzZDMTQ1Ljc4LDEyMywxNjgsMTI5LjQ1LDE2OCwxNTJabTY0LDI0YTU2LjA2LDU2LjA2LDAsMCwxLTU2LDU2LDU1LjM4LDU1LjM4LDAsMCwxLTMxLjE3LTkuNDdBOTYuMDksOTYuMDksMCwwLDEsMzMuNDcsMTExLjE3LDU1LjM4LDU1LjM4LDAsMCwxLDI0LDgwLDU2LjA2LDU2LjA2LDAsMCwxLDgwLDI0YTU1LjM4LDU1LjM4LDAsMCwxLDMxLjE3LDkuNDdBOTYuMDksOTYuMDksMCwwLDEsMjIyLjUzLDE0NC44Myw1NS4zOCw1NS4zOCwwLDAsMSwyMzIsMTc2Wm0tMTYsMGEzOS42LDM5LjYsMCwwLDAtOC4zMi0yNC40Miw4LDgsMCwwLDEtMS40OS02LjU4QTgwLjA3LDgwLjA3LDAsMCwwLDExMSw0OS44MWE4LDgsMCwwLDEtNi41OC0xLjQ5QTM5LjYsMzkuNiwwLDAsMCw4MCw0MCw0MCw0MCwwLDAsMCw0MCw4MGEzOS42LDM5LjYsMCwwLDAsOC4zMiwyNC40MkE4LDgsMCwwLDEsNDkuODEsMTExLDgwLjA3LDgwLjA3LDAsMCwwLDE0NSwyMDYuMTlhOCw4LDAsMCwxLDYuNTgsMS40OUEzOS42LDM5LjYsMCwwLDAsMTc2LDIxNiw0MCw0MCwwLDAsMCwyMTYsMTc2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SkypeLogo";
export { I as SkypeLogo };