/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Racquet";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMjYuMDVDMjAyLTEuODgsMTUxLjUzLDMuMTYsMTE3LjQsMzcuM2MtMzEuNzksMzEuNzktMzguMzMsNzcuNzctMTYuNTEsMTA2LjQ5TDcxLjMzLDE3My4zNWwtLjY4LS42OGExNiwxNiwwLDAsMC0yMi42NCwwTDIwLjY5LDIwMGExNiwxNiwwLDAsMCwwLDIyLjY0bDEyLjY5LDEyLjY5YTE2LDE2LDAsMCwwLDIyLjYzLDBoMEw4My4zNCwyMDhhMTYsMTYsMCwwLDAsMC0yMi42M2wtLjY5LS42OSwyOS41Ni0yOS41NmMxMS4yOSw4LjU4LDI1LjI0LDEyLjc5LDQwLDEyLjc5LDIyLjcyLDAsNDcuMjUtMTAsNjYuNTQtMjkuM0MyNTIuODMsMTA0LjQ3LDI1Ny44OCw1NCwyMzAsMjYuMDVaTTQ0LjcsMjI0LDMyLDIxMS4zMSw1OS4zMywxODRsNi4zMyw2LjM0aDBMNzIsMTk2LjY3Wk0yMjQuMjMsMTA0SDIwMC4wNnYtMzJoMzJBNzIuNDUsNzIuNDUsMCwwLDEsMjI0LjIzLDEwNFpNMTM2LDE0OS42MUE0NC4xNSw0NC4xNSwwLDAsMSwxMDYuMzksMTIwSDEzNlpNMTA0LDEwNGE3Mi4yNCw3Mi4yNCwwLDAsMSw3Ljg2LTMySDEzNnYzMlptNDgtMzJoMzJ2MzJoLTMyWm03Ny42Ny0xNkgyMDAuMDZWMjYuMjhhNDQuMjMsNDQuMjMsMCwwLDEsMjkuNjYsMjkuNjZabS00NS44Mi0zMmguMTZ2MzJoLTMyVjMxLjc2QTcyLjQ3LDcyLjQ3LDAsMCwxLDE4My45LDIzLjlaTTEzNiw0Mi4wNlY1NS45NEgxMjIuMTZhODkuNzIsODkuNzIsMCwwLDEsNi41Ni03LjMyQTkzLjE3LDkzLjE3LDAsMCwxLDEzNiw0Mi4wNlptMTYsMTA5LjkyVjEyMGgzMnYyNC4xNkE3Mi4yNCw3Mi4yNCwwLDAsMSwxNTIuMDUsMTUyWm00OC0xOC4xNFYxMjBIMjE0YTkxLjYyLDkxLjYyLDAsMCwxLTYuNTYsNy4zMkE4OS42NCw4OS42NCwwLDAsMSwyMDAuMDYsMTMzLjg0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMSwyOC45QzIwMC43NCwyLjUzLDE1Mi43OSw3LjU4LDEyMC4yMiw0MC4xNWMtMzEuMzksMzEuMzktMzcuMiw3Ny4wNy0xNCwxMDMuOTRMNzEuMzMsMTc5bC0zLjUyLTMuNTJhMTIsMTIsMCwwLDAtMTcsMEwyMy41MiwyMDIuODJhMTIsMTIsMCwwLDAsMCwxN2wxMi42OSwxMi42OWExMiwxMiwwLDAsMCwxNywwaDBMODAuNSwyMDUuMTdhMTIsMTIsMCwwLDAsMC0xN0w3NywxODQuNjhsMzQuOTMtMzQuOTRjMTEsOS41MywyNS4xOCwxNC4xOSw0MC4yNCwxNC4xOSwyMS42NywwLDQ1LjE3LTkuNjIsNjMuNy0yOC4xNUMyNDguNDIsMTAzLjIxLDI1My40Nyw1NS4yNiwyMjcuMSwyOC45Wk03NC44NCwxOTkuNTEsNDcuNTIsMjI2LjgzYTQsNCwwLDAsMS01LjY2LDBMMjkuMTcsMjE0LjE0YTQsNCwwLDAsMSwwLTUuNjZMNTYuNSwxODEuMTZhNCw0LDAsMCwxLDUuNjUsMGw2LjM1LDYuMzRoMGw2LjM0LDYuMzRhNCw0LDAsMCwxLDAsNS42NlpNMjM0LjgzLDYwSDE5Ni4wNVYyMS4xN0E0OC41NSw0OC41NSwwLDAsMSwyMzQuODMsNjBaTTE4My45LDIwYzEuMzksMCwyLjc3LjA2LDQuMTQuMTVWNjBIMTQ4VjI5LjM3QTc3LjMyLDc3LjMyLDAsMCwxLDE4My45LDIwWk0xODgsNjh2NDBIMTQ4VjY4Wk0xMjUuODgsNDUuOEE5NS4zNCw5NS4zNCwwLDAsMSwxNDAsMzQuMTZWNjBoLTI1LjhBOTQuMzYsOTQuMzYsMCwwLDEsMTI1Ljg4LDQ1LjhaTTEwOS40NCw2OEgxNDB2NDBIMTAwLjE3Qzk5LjMzLDk1LDEwMi40OSw4MS4wNywxMDkuNDQsNjhabS04LjE5LDQ4SDE0MHYzOC43OEE0OC40OCw0OC40OCwwLDAsMSwxMDEuMjUsMTE2Wk0xNDgsMTU1LjgzVjExNmg0MHYzMC41OUMxNzQuOTMsMTUzLjUxLDE2MSwxNTYuNjgsMTQ4LDE1NS44M1ptNjIuMTctMjUuNzFhOTQuOCw5NC44LDAsMCwxLTE0LjE1LDExLjY1VjExNmgyNS44QTkzLjgsOTMuOCwwLDAsMSwyMTAuMiwxMzAuMTJaTTIyNi42MywxMDhIMTk2LjA1VjY4SDIzNS45QzIzNi43NSw4MC44OSwyMzMuNTgsOTQuODYsMjI2LjYzLDEwOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNTMsMjcuNDdDMjAxLjM4LjMzLDE1Mi4xNiw1LjM3LDExOC44MSwzOC43Miw4Ny4yMiw3MC4zMSw4MS4wNSwxMTYuMTMsMTAzLjU2LDE0NEw3MS4zMywxNzYuMTlsLTIuMS0yLjExYTE0LDE0LDAsMCwwLTE5LjgsMEwyMi4xLDIwMS40MWExNCwxNCwwLDAsMCwwLDE5LjhsMTIuNjksMTIuN2ExNCwxNCwwLDAsMCwxOS44MSwwaDBsMjcuMzItMjcuMzJhMTQsMTQsMCwwLDAsMC0xOS44MWwtMi4xLTIuMUwxMTIsMTUyLjQ2YzExLjE3LDksMjUuMjQsMTMuNDUsNDAuMTMsMTMuNDUsMjIuMiwwLDQ2LjIxLTkuODEsNjUuMTItMjguNzJDMjUwLjYzLDEwMy44NCwyNTUuNjcsNTQuNjIsMjI4LjUzLDI3LjQ3Wk03My40MywxOTguMDksNDYuMTEsMjI1LjQyYTIsMiwwLDAsMS0yLjgzLDBMMzAuNTksMjEyLjczYTIsMiwwLDAsMSwwLTIuODNsMjcuMzItMjcuMzNhMiwyLDAsMCwxLDEuNDItLjU4LDIsMiwwLDAsMSwxLjQxLjU4bDYuMzUsNi4zNGgwbDYuMzQsNi4zNGEyLDIsMCwwLDEsMCwyLjgzWk0yMzIuMzQsNThIMTk4LjA2VjIzLjY2QTQ2LjMzLDQ2LjMzLDAsMCwxLDIzMi4zNCw1OFptLTQ4LjQ0LTM2Yy43MiwwLDEuNDQsMCwyLjE1LDBWNThIMTUwVjMwLjU3QTc0Ljg0LDc0Ljg0LDAsMCwxLDE4My45LDIxLjkyWm0yLjE1LDQ4djM2SDE1MFY3MFpNMTI3LjMsNDcuMjFBOTMuMiw5My4yLDAsMCwxLDEzOCwzOFY1OGgtMjBBOTMuMyw5My4zLDAsMCwxLDEyNy4zLDQ3LjIxWk0xMTAuNjUsNzBIMTM4djM2aC0zNkMxMDEuNjYsOTQuMjgsMTA0LjU4LDgxLjc5LDExMC42NSw3MFptLTYuOSw0OEgxMzh2MzQuMjhBNDYuMzMsNDYuMzMsMCwwLDEsMTAzLjc1LDExOFptNDYuMjksMzZWMTE4aDM2djI3LjM4QzE3NC4yMSwxNTEuNDIsMTYxLjcyLDE1NC4zNCwxNTAsMTUzLjkzWm01OC43NS0yNS4yM2E5My4wNyw5My4wNywwLDAsMS0xMC43Myw5LjIyVjExOEgyMThBOTQuMDYsOTQuMDYsMCwwLDEsMjA4Ljc5LDEyOC43Wk0yMjUuNDQsMTA2SDE5OC4wNlY3MGgzNkMyMzQuNDMsODEuNjMsMjMxLjUxLDk0LjEyLDIyNS40NCwxMDZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNywyMy4zQzIxOC4wNSw4LjY2LDE5Ny40MywyLDE3NC42Miw0LjUzYy0yMS44MSwyLjQyLTQzLjE1LDEzLjA4LTYwLjA5LDMwcy0yNy41OSwzOC4yNy0zMCw2MC4wOWMtMiwxOC4zMywxLjg5LDM1LjI0LDExLjEsNDguNzhsLTIwLjMsMjAuMzEtMS44Ni0xLjg2YTIwLDIwLDAsMCwwLTI4LjI4LDBMMTMuODYsMTkzLjE4YTIwLDIwLDAsMCwwLDAsMjguMjlsMjAuNjgsMjAuNjhhMjAsMjAsMCwwLDAsMjguMjksMGgwbDMxLjMxLTMxLjMxYTIwLDIwLDAsMCwwLDAtMjguMjlsLTEuODYtMS44NSwyMC4zMS0yMC4zMUMxMjMuNzgsMTY4LDEzNy4yOCwxNzIsMTUyLDE3MmE4My4wOSw4My4wOSwwLDAsMCw5LjM4LS41M2MyMS44MS0yLjQyLDQzLjE1LTEzLjA4LDYwLjA4LTMwczI3LjYtMzguMjcsMzAtNjAuMDlDMjU0LDU4LjU3LDI0Ny4zNCwzOCwyMzIuNywyMy4zWm0tMTg0LDE5OS0xNS0xNSwyNS42NS0yNS42NSwxNSwxNVpNMTI4LDE0MS43NkEzOS4zMywzOS4zMywwLDAsMSwxMTQuMjUsMTI4SDEyOFptLTIwLTM3Ljc1YTY4Ljg1LDY4Ljg1LDAsMCwxLDguMzgtMzJIMTI4djMyWk0xNTIsNzJoMzJ2MzJIMTUyWm01NiwzMlY3MmgyMGE2OC42OCw2OC42OCwwLDAsMS04LjM3LDMyWm0xMy43NS01NkgyMDhWMzQuMjZBMzkuNDcsMzkuNDcsMCwwLDEsMjIxLjc0LDQ4Wk0xODMuODIsMjhIMTg0VjQ4SDE1MlYzNi4zNEMxNjIuNDcsMzAuODIsMTczLjQ4LDI4LDE4My44MiwyOFpNMTUyLDE0OC4wNlYxMjhoMzJ2MTEuNjdBNjguNyw2OC43LDAsMCwxLDE1MiwxNDguMDZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMjYuMDVDMjAyLTEuODgsMTUxLjUzLDMuMTYsMTE3LjQsMzcuM2MtMzEuNzksMzEuNzktMzguMzMsNzcuNzctMTYuNTEsMTA2LjQ5TDcxLjMzLDE3My4zNWwtLjY4LS42OGExNiwxNiwwLDAsMC0yMi42NCwwTDIwLjY5LDIwMGExNiwxNiwwLDAsMCwwLDIyLjY0bDEyLjY5LDEyLjY5YTE2LDE2LDAsMCwwLDIyLjYzLDBoMEw4My4zNCwyMDhhMTYsMTYsMCwwLDAsMC0yMi42M2wtLjY5LS42OSwyOS41Ni0yOS41NmMxMS4yOSw4LjU4LDI1LjI0LDEyLjc5LDQwLDEyLjc5LDIyLjcyLDAsNDcuMjUtMTAsNjYuNTQtMjkuM0MyNTIuODMsMTA0LjQ3LDI1Ny44OCw1NCwyMzAsMjYuMDVaTTIyNC4yMywxMDRIMjAwLjA2di0zMmgzMkE3Mi40NSw3Mi40NSwwLDAsMSwyMjQuMjMsMTA0Wk0xMzYsMTQ5LjYxQTQ0LjE1LDQ0LjE1LDAsMCwxLDEwNi4zOSwxMjBIMTM2Wk0xMDQsMTA0YTcyLjI0LDcyLjI0LDAsMCwxLDcuODYtMzJIMTM2djMyWm00OC0zMmgzMnYzMmgtMzJabTc3LjY3LTE2SDIwMC4wNlYyNi4yOGE0NC4yMyw0NC4yMywwLDAsMSwyOS42NiwyOS42NlptLTQ1LjgyLTMyaC4xNnYzMmgtMzJWMzEuNzZBNzIuNDcsNzIuNDcsMCwwLDEsMTgzLjksMjMuOVpNMTM2LDQyLjA2VjU1Ljk0SDEyMi4xNmE4OS43Miw4OS43MiwwLDAsMSw2LjU2LTcuMzJBOTMuMTcsOTMuMTcsMCwwLDEsMTM2LDQyLjA2Wm0xNiwxMDkuOTJWMTIwaDMydjI0LjE2QTcyLjI0LDcyLjI0LDAsMCwxLDE1Mi4wNSwxNTJabTQ4LTE4LjE0VjEyMEgyMTRhOTEuNjIsOTEuNjIsMCwwLDEtNi41Niw3LjMyQTg5LjY0LDg5LjY0LDAsMCwxLDIwMC4wNiwxMzMuODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMsMTMzYy0zMSwzMS4wNS03Ni4zNiwzNi4wOC0xMDEuMiwxMS4yNFM5Miw3NC4wNywxMjMsNDNzNzYuMzYtMzYuMDgsMTAxLjItMTEuMjRTMjQ0LDEwMS45MywyMTMsMTMzWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMCwyNi4wNUMyMDItMS44OCwxNTEuNTMsMy4xNiwxMTcuNCwzNy4zYy0zMS43OSwzMS43OS0zOC4zMyw3Ny43Ny0xNi41MSwxMDYuNDlMNzEuMzMsMTczLjM1bC0uNjgtLjY4YTE2LDE2LDAsMCwwLTIyLjY0LDBMMjAuNjksMjAwYTE2LDE2LDAsMCwwLDAsMjIuNjRsMTIuNjksMTIuNjlhMTYsMTYsMCwwLDAsMjIuNjMsMGgwTDgzLjM0LDIwOGExNiwxNiwwLDAsMCwwLTIyLjYzbC0uNjktLjY5LDI5LjU2LTI5LjU2YzExLjI5LDguNTgsMjUuMjQsMTIuNzksNDAsMTIuNzksMjIuNzIsMCw0Ny4yNS0xMCw2Ni41NC0yOS4zQzI1Mi44MywxMDQuNDcsMjU3Ljg4LDU0LDIzMCwyNi4wNVpNNDQuNywyMjQsMzIsMjExLjMxLDU5LjMzLDE4NGw2LjMzLDYuMzRoMEw3MiwxOTYuNjdaTTIyNC4yMywxMDRIMjAwLjA2di0zMmgzMkE3Mi40NSw3Mi40NSwwLDAsMSwyMjQuMjMsMTA0Wk0xMzYsMTQ5LjYxQTQ0LjE1LDQ0LjE1LDAsMCwxLDEwNi4zOSwxMjBIMTM2Wk0xMDQsMTA0YTcyLjI0LDcyLjI0LDAsMCwxLDcuODYtMzJIMTM2djMyWm00OC0zMmgzMnYzMmgtMzJabTc3LjY3LTE2SDIwMC4wNlYyNi4yOGE0NC4yMyw0NC4yMywwLDAsMSwyOS42NiwyOS42NlptLTQ1LjgyLTMyaC4xNnYzMmgtMzJWMzEuNzZBNzIuNDcsNzIuNDcsMCwwLDEsMTgzLjksMjMuOVpNMTM2LDQyLjA2VjU1Ljk0SDEyMi4xNmE4OS43Miw4OS43MiwwLDAsMSw2LjU2LTcuMzJBOTMuMTcsOTMuMTcsMCwwLDEsMTM2LDQyLjA2Wm0xNiwxMDkuOTJWMTIwaDMydjI0LjE2QTcyLjI0LDcyLjI0LDAsMCwxLDE1Mi4wNSwxNTJabTQ4LTE4LjE0VjEyMEgyMTRhOTEuNjIsOTEuNjIsMCwwLDEtNi41Niw3LjMyQTg5LjY0LDg5LjY0LDAsMCwxLDIwMC4wNiwxMzMuODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Racquet";
export { I as Racquet };