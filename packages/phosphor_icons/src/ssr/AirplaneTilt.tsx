/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/AirplaneTilt";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODUuMzMsMTE0LjIxbDI5LjE0LTI3LjQyLjE3LS4xN2EzMiwzMiwwLDAsMC00NS4yNi00NS4yNmMwLC4wNi0uMTEuMTEtLjE3LjE3TDE0MS43OSw3MC42N2wtODMtMzAuMmE4LDgsMCwwLDAtOC4zOSwxLjg2bC0yNCwyNGE4LDgsMCwwLDAsMS4yMiwxMi4zMWw2My44OSw0Mi41OUw3Ni42OSwxMzZINTZhOCw4LDAsMCwwLTUuNjUsMi4zNGwtMjQsMjRBOCw4LDAsMCwwLDI5LDE3NS40MmwzNi44MiwxNC43MywxNC43LDM2Ljc1LjA2LjE2YTgsOCwwLDAsMCwxMy4xOCwyLjQ3bDIzLjg3LTIzLjg4QTgsOCwwLDAsMCwxMjAsMjAwVjE3OS4zMWwxNC43Ni0xNC43Niw0Mi41OSw2My44OWE4LDgsMCwwLDAsMTIuMzEsMS4yMmwyNC0yNGE4LDgsMCwwLDAsMS44Ni04LjM5Wm0tLjA3LDk3LjIzLTQyLjU5LTYzLjg4QTgsOCwwLDAsMCwxMzYuOCwxNDRjLS4yNywwLS41MywwLS43OSwwYTgsOCwwLDAsMC01LjY2LDIuMzVsLTI0LDI0QTgsOCwwLDAsMCwxMDQsMTc2djIwLjY5TDkwLjkzLDIwOS43Niw3OS40MywxODFBOCw4LDAsMCwwLDc1LDE3Ni41N2wtMjguNzQtMTEuNUw1OS4zMiwxNTJIODBhOCw4LDAsMCwwLDUuNjYtMi4zNGwyNC0yNGE4LDgsMCwwLDAtMS4yMi0xMi4zMkw0NC41Niw3MC43NGwxMy41LTEzLjQ5LDgzLjIyLDMwLjI2YTgsOCwwLDAsMCw4LjU2LTJMMTgwLjc4LDUyLjZBMTYsMTYsMCwwLDEsMjAzLjQsNzUuMjNsLTMyLjg3LDMwLjkzYTgsOCwwLDAsMC0yLDguNTZsMzAuMjYsODMuMjJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAuNjcsMTEzLjFsMzEuMDUtMjkuMjMuMDktLjA4YTI4LDI4LDAsMCwwLTM5LjYtMzkuNmwtLjA4LjA5TDE0Mi45LDc1LjMzLDU3LjM3LDQ0LjIzYTQsNCwwLDAsMC00LjIuOTNsLTI0LDI0YTQsNCwwLDAsMCwuNjEsNi4xNmw2OCw0NS4yOUw3OC4zNSwxNDBINTZhNCw0LDAsMCwwLTIuODMsMS4xOGwtMjQsMjRhNCw0LDAsMCwwLDEuMzQsNi41NGwzOC40MiwxNS4zNiwxNS4zNCwzOC4zNywwLC4wOWE0LDQsMCwwLDAsNi41OSwxLjIzbDIzLjkzLTIzLjkzQTQsNCwwLDAsMCwxMTYsMjAwVjE3Ny42NWwxOS4zOC0xOS4zOCw0NS4yOSw2Ny45NWE0LDQsMCwwLDAsNi4xNi42MWwyNC0yNGE0LDQsMCwwLDAsLjkzLTQuMlptNCwxMDQuNjItNDUuMjktNjcuOTRBNCw0LDAsMCwwLDEzNi40LDE0OGwtLjM5LDBhNCw0LDAsMCwwLTIuODMsMS4xOGwtMjQsMjRBNCw0LDAsMCwwLDEwOCwxNzZ2MjIuMzRMODkuNDcsMjE2Ljg4LDc1LjcyLDE4Mi41MWE0LDQsMCwwLDAtMi4yMy0yLjIzTDM5LjEyLDE2Ni41Myw1Ny42NiwxNDhIODBhNCw0LDAsMCwwLDIuODMtMS4xN2wyNC0yNGE0LDQsMCwwLDAtLjYxLTYuMTZMMzguMjgsNzEuMzcsNTcsNTIuNjJsODUuNjEsMzEuMTNhNCw0LDAsMCwwLDQuMjgtMWwzMS0zMi45M0EyMCwyMCwwLDAsMSwyMDYuMiw3OC4wOWwtMzIuOTMsMzFhNCw0LDAsMCwwLTEsNC4yOEwyMDMuMzgsMTk5WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMsMTEzLjY1bDMwLjEtMjguMzIuMTMtLjEzQTMwLDMwLDAsMCwwLDE3MC44LDQyLjc3bC0uMTMuMTNMMTQyLjM1LDczLDU4LjA1LDQyLjM1YTYsNiwwLDAsMC02LjI5LDEuMzlsLTI0LDI0QTYsNiwwLDAsMCwyOC42Nyw3N2w2NS45Miw0My45NEw3Ny41MiwxMzhINTZhNiw2LDAsMCwwLTQuMjQsMS43NmwtMjQsMjRhNiw2LDAsMCwwLDIsOS44MmwzNy42MiwxNSwxNSwzNy41NiwwLC4xMmE2LDYsMCwwLDAsNy44MSwzLjI3LDUuOTQsNS45NCwwLDAsMCwyLjA3LTEuNDFsMjMuOTEtMjMuOTFBNiw2LDAsMCwwLDExOCwyMDBWMTc4LjQ4bDE3LjA3LTE3LjA3TDE3OSwyMjcuMzNhNiw2LDAsMCwwLDkuMjMuOTFsMjQtMjRhNiw2LDAsMCwwLDEuMzktNi4yOVptMS45NCwxMDAuOTNMMTQxLDE0OC42NmE2LDYsMCwwLDAtNC40LTIuNjRsLS41OSwwYTYsNiwwLDAsMC00LjI0LDEuNzZsLTI0LDI0QTYsNiwwLDAsMCwxMDYsMTc2djIxLjUyTDkwLjIsMjEzLjMyLDc3LjU3LDE4MS43N2E2LDYsMCwwLDAtMy4zNC0zLjM1TDQyLjY4LDE2NS44LDU4LjQ5LDE1MEg4MGE2LDYsMCwwLDAsNC4yNS0xLjc2bDI0LTI0YTYsNiwwLDAsMC0uOTItOS4yM0w0MS40Miw3MS4wNiw1Ny41NCw1NC45MywxNDIsODUuNjNhNiw2LDAsMCwwLDYuNDItMS41M2wzMS0zMi45QTE4LDE4LDAsMCwxLDIwNC44LDc2LjY2bC0zMi45LDMxYTYsNiwwLDAsMC0xLjUzLDYuNDJsMzAuNyw4NC40MVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTAsMTE1LjMxLDIxNy4yMSw4OS43bC4yNi0uMjZhMzYsMzYsMCwwLDAtNTAuOTEtNTAuOTFjLS4wOS4wOC0uMTcuMTctLjI2LjI2TDE0MC42OSw2Niw2MC4xLDM2LjcxQTEyLDEyLDAsMCwwLDQ3LjUyLDM5LjVsLTI0LDI0QTEyLDEyLDAsMCwwLDI1LjM0LDgybDU5LjgzLDM5Ljg4TDc1LDEzMkg1NmExMiwxMiwwLDAsMC04LjQ4LDMuNTFsLTI0LDI0YTEyLDEyLDAsMCwwLDQsMTkuNjJsMzUuMjMsMTQuMSwxNC4wNiwzNS4xNC4wOS4yMmExMiwxMiwwLDAsMCwxOS43NiwzLjdsMjMuODEtMjMuODFBMTIsMTIsMCwwLDAsMTI0LDIwMFYxODFsMTAuMTMtMTAuMTNMMTc0LDIzMC42NWExMiwxMiwwLDAsMCwxOC40NywxLjgzbDI0LTI0YTEyLDEyLDAsMCwwLDIuNzktMTIuNTlabS00LjExLDg5Ljg1TDE0NiwxNDUuMzNhMTIsMTIsMCwwLDAtOC44LTUuMjhBMTEuNjYsMTEuNjYsMCwwLDAsMTM2LDE0MGExMiwxMiwwLDAsMC04LjQ5LDMuNTJsLTI0LDI0QTEyLDEyLDAsMCwwLDEwMCwxNzZ2MTlsLTcuNjIsNy42Mi05LjI0LTIzLjFhMTIsMTIsMCwwLDAtNi42OS02LjY5bC0yMy4xLTkuMjRMNjEsMTU2SDgwYTEyLDEyLDAsMCwwLDguNDgtMy41MWwyNC0yNEExMiwxMiwwLDAsMCwxMTAuNjYsMTEwTDUwLjg0LDcwLjEybDguMjQtOC4yNSw4MC44MywyOS4zOWExMiwxMiwwLDAsMCwxMi44NC0zLjA1bDMwLjg5LTMyLjgyYTEyLDEyLDAsMCwxLDE3LDE3bC0zMi44MiwzMC44OWExMiwxMiwwLDAsMC0zLjA2LDEyLjg0bDI5LjQsODAuODJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuNTIsMTk3LjI2YTgsOCwwLDAsMS0xLjg2LDguMzlsLTI0LDI0QTgsOCwwLDAsMSwxODQsMjMyYTcuMDksNy4wOSwwLDAsMS0uNzksMCw4LDgsMCwwLDEtNS44Ny0zLjUybC00NC4wNy02Ni4xMkwxMTIsMTgzLjU5VjIwOGE4LDgsMCwwLDEtMi4zNCw1LjY1cy0xNCwxNC4wNi0xNS44OCwxNS44OEE3LjkxLDcuOTEsMCwwLDEsOTEsMjMxLjQxYTgsOCwwLDAsMS0xMC40MS00LjM1bC0uMDYtLjE1LTE0LjctMzYuNzZMMjksMTc1LjQyYTgsOCwwLDAsMS0yLjY5LTEzLjA4bDE2LTE2QTgsOCwwLDAsMSw0OCwxNDRINzIuNGwyMS4yNy0yMS4yN0wyNy41Niw3OC42NWE4LDgsMCwwLDEtMS4yMi0xMi4zMmwyNC0yNGE4LDgsMCwwLDEsOC4zOS0xLjg2bDg1Ljk0LDMxLjI1TDE3Ni4yLDQwLjE5YTI4LDI4LDAsMCwxLDM5LjYsMzkuNmwtMzEuNTMsMzEuNTNaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDksODFsLTMzLDMxLDMyLDg4LTI0LDI0LTQ4LTcyLTI0LDI0djI0TDg4LDIyNCw3MiwxODQsMzIsMTY4bDI0LTI0SDgwbDI0LTI0TDMyLDcyLDU2LDQ4bDg4LDMyLDMxLTMzQTI0LDI0LDAsMCwxLDIwOSw4MVoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODUuMzMsMTE0LjIxbDI5LjE0LTI3LjQzLjE3LS4xNmEzMiwzMiwwLDAsMC00NS4yNi00NS4yNmwtLjE2LjE3TDE0MS43OSw3MC42N2wtODMtMzAuMmE4LDgsMCwwLDAtOC4zOSwxLjg2bC0yNCwyNGE4LDgsMCwwLDAsMS4yMiwxMi4zMWw2My44OSw0Mi41OUw3Ni42OSwxMzZINTZhOCw4LDAsMCwwLTUuNjUsMi4zNGwtMjQsMjRBOCw4LDAsMCwwLDI5LDE3NS40MmwzNi44MiwxNC43MywxNC43LDM2Ljc1LjA2LjE2YTgsOCwwLDAsMCwxMy4xOCwyLjQ3bDIzLjg3LTIzLjg4QTgsOCwwLDAsMCwxMjAsMjAwVjE3OS4zMWwxNC43Ni0xNC43Niw0Mi41OSw2My44OWE4LDgsMCwwLDAsMTIuMzEsMS4yMmwyNC0yNGE4LDgsMCwwLDAsMS44Ni04LjM5Wm0tLjA3LDk3LjIzLTQyLjU5LTYzLjg5QTgsOCwwLDAsMCwxMzYuOCwxNDRhNy4wOSw3LjA5LDAsMCwwLS43OSwwLDgsOCwwLDAsMC01LjY2LDIuMzRsLTI0LDI0QTgsOCwwLDAsMCwxMDQsMTc2djIwLjY5TDkwLjkzLDIwOS43Niw3OS40MywxODFBOCw4LDAsMCwwLDc1LDE3Ni41N2wtMjguNzQtMTEuNUw1OS4zMiwxNTJIODBhOCw4LDAsMCwwLDUuNjYtMi4zNGwyNC0yNGE4LDgsMCwwLDAtMS4yMi0xMi4zMkw0NC41Niw3MC43NGwxMy41LTEzLjQ5LDgzLjIyLDMwLjI2YTgsOCwwLDAsMCw4LjU2LTJsMzAuOTQtMzIuODhBMTYsMTYsMCwwLDEsMjAzLjQsNzUuMjJsLTMyLjg3LDMwLjk0YTgsOCwwLDAsMC0yLDguNTZsMzAuMjYsODMuMjJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "AirplaneTilt";
export { I as AirplaneTilt };