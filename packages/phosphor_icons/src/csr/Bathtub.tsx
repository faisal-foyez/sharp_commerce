/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Bathtub";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsOTZIMjA4YTgsOCwwLDAsMC04LThIMTM2YTgsOCwwLDAsMC04LDhINjRWNTJBMTIsMTIsMCwwLDEsNzYsNDBhMTIuNDQsMTIuNDQsMCwwLDEsMTIuMTYsOS41OSw4LDgsMCwwLDAsMTUuNjgtMy4xOEEyOC4zMiwyOC4zMiwwLDAsMCw3NiwyNCwyOCwyOCwwLDAsMCw0OCw1MlY5NkgxNmE4LDgsMCwwLDAtOCw4djQwYTU2LjA2LDU2LjA2LDAsMCwwLDU2LDU2djE2YTgsOCwwLDAsMCwxNiwwVjIwMGg5NnYxNmE4LDgsMCwwLDAsMTYsMFYyMDBhNTYuMDYsNTYuMDYsMCwwLDAsNTYtNTZWMTA0QTgsOCwwLDAsMCwyNDAsOTZabS00OCw4djMySDE0NFYxMDRabTQwLDQwYTQwLDQwLDAsMCwxLTQwLDQwSDY0YTQwLDQwLDAsMCwxLTQwLTQwVjExMkgxMjh2MzJhOCw4LDAsMCwwLDgsOGg2NGE4LDgsMCwwLDAsOC04VjExMmgyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTAwSDIwNFY5NmE0LDQsMCwwLDAtNC00SDEzNmE0LDQsMCwwLDAtNCw0djRINjBWNTJBMTYsMTYsMCwwLDEsNzYsMzYsMTYuNDksMTYuNDksMCwwLDEsOTIuMDgsNDguOGE0LDQsMCwxLDAsNy44NC0xLjZBMjQuMzIsMjQuMzIsMCwwLDAsNzYsMjgsMjQsMjQsMCwwLDAsNTIsNTJ2NDhIMTZhNCw0LDAsMCwwLTQsNHY0MGE1Mi4wNiw1Mi4wNiwwLDAsMCw1Miw1Mmg0djIwYTQsNCwwLDAsMCw4LDBWMTk2SDE4MHYyMGE0LDQsMCwwLDAsOCwwVjE5Nmg0YTUyLjA2LDUyLjA2LDAsMCwwLDUyLTUyVjEwNEE0LDQsMCwwLDAsMjQwLDEwMFptLTEwMCwwaDU2djQwSDE0MFptOTYsNDRhNDQuMDUsNDQuMDUsMCwwLDEtNDQsNDRINjRhNDQuMDUsNDQuMDUsMCwwLDEtNDQtNDRWMTA4SDEzMnYzNmE0LDQsMCwwLDAsNCw0aDY0YTQsNCwwLDAsMCw0LTRWMTA4aDMyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsOThIMjA2Vjk2YTYsNiwwLDAsMC02LTZIMTM2YTYsNiwwLDAsMC02LDZ2Mkg2MlY1MkExNCwxNCwwLDAsMSw3NiwzOCwxNC40NywxNC40NywwLDAsMSw5MC4xMiw0OS4xOWE2LDYsMCwxLDAsMTEuNzYtMi4zOEEyNi4zMiwyNi4zMiwwLDAsMCw3NiwyNiwyNiwyNiwwLDAsMCw1MCw1MlY5OEgxNmE2LDYsMCwwLDAtNiw2djQwYTU0LjA2LDU0LjA2LDAsMCwwLDU0LDU0aDJ2MThhNiw2LDAsMCwwLDEyLDBWMTk4SDE3OHYxOGE2LDYsMCwwLDAsMTIsMFYxOThoMmE1NC4wNiw1NC4wNiwwLDAsMCw1NC01NFYxMDRBNiw2LDAsMCwwLDI0MCw5OFptLTk4LDRoNTJ2MzZIMTQyWm05Miw0MmE0Miw0MiwwLDAsMS00Miw0Mkg2NGE0Miw0MiwwLDAsMS00Mi00MlYxMTBIMTMwdjM0YTYsNiwwLDAsMCw2LDZoNjRhNiw2LDAsMCwwLDYtNlYxMTBoMjhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsOTJIMjExLjNBMTIsMTIsMCwwLDAsMjAwLDg0SDEzNmExMiwxMiwwLDAsMC0xMS4zLDhINjhWNTJhOCw4LDAsMCwxLDgtOCw4LjUsOC41LDAsMCwxLDguMjQsNi4zOSwxMiwxMiwwLDAsMCwyMy41Mi00Ljc4QTMyLjIyLDMyLjIyLDAsMCwwLDQ0LDUyVjkySDE2QTEyLDEyLDAsMCwwLDQsMTA0djQwYTYwLjA3LDYwLjA3LDAsMCwwLDU2LDU5Ljg1VjIxNmExMiwxMiwwLDAsMCwyNCwwVjIwNGg4OHYxMmExMiwxMiwwLDAsMCwyNCwwVjIwMy44NUE2MC4wNyw2MC4wNywwLDAsMCwyNTIsMTQ0VjEwNEExMiwxMiwwLDAsMCwyNDAsOTJabS05MiwxNmg0MHYyNEgxNDhabTgwLDM2YTM2LDM2LDAsMCwxLTM2LDM2SDY0YTM2LDM2LDAsMCwxLTM2LTM2VjExNmg5NnYyOGExMiwxMiwwLDAsMCwxMiwxMmg2NGExMiwxMiwwLDAsMCwxMi0xMlYxMTZoMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsOTZIMjE2YTgsOCwwLDAsMC04LThIMTM2YTgsOCwwLDAsMC04LDhINjRWNTJBMTIsMTIsMCwwLDEsNzYsNDBhMTIuNDQsMTIuNDQsMCwwLDEsMTIuMTYsOS41OSw4LDgsMCwwLDAsMTUuNjgtMy4xOEEyOC4zMiwyOC4zMiwwLDAsMCw3NiwyNCwyOCwyOCwwLDAsMCw0OCw1MlY5NkgxNmE4LDgsMCwwLDAtOCw4djQwYTU2LjA2LDU2LjA2LDAsMCwwLDU2LDU2djE2YTgsOCwwLDAsMCwxNiwwVjIwMGg5NnYxNmE4LDgsMCwwLDAsMTYsMFYyMDBhNTYuMDYsNTYuMDYsMCwwLDAsNTYtNTZWMTA0QTgsOCwwLDAsMCwyNDAsOTZabS00MCw4djQwSDE0NFYxMDRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA0djQwYTQ4LDQ4LDAsMCwxLTQ4LDQ4SDY0YTQ4LDQ4LDAsMCwxLTQ4LTQ4VjEwNEgxMzZ2NDBoNjRWMTA0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCw5NkgyMDhhOCw4LDAsMCwwLTgtOEgxMzZhOCw4LDAsMCwwLTgsOEg2NFY1MkExMiwxMiwwLDAsMSw3Niw0MGExMi40NCwxMi40NCwwLDAsMSwxMi4xNiw5LjU5LDgsOCwwLDAsMCwxNS42OC0zLjE4QTI4LjMyLDI4LjMyLDAsMCwwLDc2LDI0LDI4LDI4LDAsMCwwLDQ4LDUyVjk2SDE2YTgsOCwwLDAsMC04LDh2NDBhNTYuMDYsNTYuMDYsMCwwLDAsNTYsNTZ2MTZhOCw4LDAsMCwwLDE2LDBWMjAwaDk2djE2YTgsOCwwLDAsMCwxNiwwVjIwMGE1Ni4wNiw1Ni4wNiwwLDAsMCw1Ni01NlYxMDRBOCw4LDAsMCwwLDI0MCw5NlptLTQ4LDh2MzJIMTQ0VjEwNFptNDAsNDBhNDAsNDAsMCwwLDEtNDAsNDBINjRhNDAsNDAsMCwwLDEtNDAtNDBWMTEySDEyOHYzMmE4LDgsMCwwLDAsOCw4aDY0YTgsOCwwLDAsMCw4LThWMTEyaDI0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Bathtub";
export { I as Bathtub };