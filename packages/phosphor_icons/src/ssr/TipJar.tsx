/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TipJar";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDguODFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODhBMTYsMTYsMCwwLDAsNzIsMzJWNDguODFBNDAuMDUsNDAuMDUsMCwwLDAsNDAsODhWMjAwYTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwVjg4QTQwLjA1LDQwLjA1LDAsMCwwLDE4NCw0OC44MVpNMTY4LDQ4SDE1MlYzMmgxNlptLTQ4LDBWMzJoMTZWNDhaTTEwNCwzMlY0OEg4OFYzMlptOTYsMTY4YTI0LDI0LDAsMCwxLTI0LDI0SDgwYTI0LDI0LDAsMCwxLTI0LTI0Vjg4QTI0LDI0LDAsMCwxLDgwLDY0aDk2YTI0LDI0LDAsMCwxLDI0LDI0Wm0tNDAtNDBhMjQsMjQsMCwwLDEtMjQsMjR2OGE4LDgsMCwwLDEtMTYsMHYtOGgtOGE4LDgsMCwwLDEsMC0xNmgyNGE4LDgsMCwwLDAsMC0xNkgxMjBhMjQsMjQsMCwwLDEsMC00OFY5NmE4LDgsMCwwLDEsMTYsMHY4aDhhOCw4LDAsMCwxLDAsMTZIMTIwYTgsOCwwLDAsMCwwLDE2aDE2QTI0LDI0LDAsMCwxLDE2MCwxNjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsNTIuMjNWMzJhMTIsMTIsMCwwLDAtMTItMTJIODhBMTIsMTIsMCwwLDAsNzYsMzJWNTIuMjNBMzYsMzYsMCwwLDAsNDQsODhWMjAwYTM2LDM2LDAsMCwwLDM2LDM2aDk2YTM2LDM2LDAsMCwwLDM2LTM2Vjg4QTM2LDM2LDAsMCwwLDE4MCw1Mi4yM1pNMTQ4LDI4aDIwYTQsNCwwLDAsMSw0LDRWNTJIMTQ4Wm0tMzIsMGgyNFY1MkgxMTZaTTg0LDMyYTQsNCwwLDAsMSw0LTRoMjBWNTJIODRaTTIwNCwyMDBhMjgsMjgsMCwwLDEtMjgsMjhIODBhMjgsMjgsMCwwLDEtMjgtMjhWODhBMjgsMjgsMCwwLDEsODAsNjBoOTZhMjgsMjgsMCwwLDEsMjgsMjhabS00OC00MGEyMCwyMCwwLDAsMS0yMCwyMGgtNHYxMmE0LDQsMCwwLDEtOCwwVjE4MEgxMTJhNCw0LDAsMCwxLDAtOGgyNGExMiwxMiwwLDAsMCwwLTI0SDEyMGEyMCwyMCwwLDAsMSwwLTQwaDRWOTZhNCw0LDAsMCwxLDgsMHYxMmgxMmE0LDQsMCwwLDEsMCw4SDEyMGExMiwxMiwwLDAsMCwwLDI0aDE2QTIwLDIwLDAsMCwxLDE1NiwxNjBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODIsNTAuNDhWMzJhMTQsMTQsMCwwLDAtMTQtMTRIODhBMTQsMTQsMCwwLDAsNzQsMzJWNTAuNDhBMzguMDUsMzguMDUsMCwwLDAsNDIsODhWMjAwYTM4LDM4LDAsMCwwLDM4LDM4aDk2YTM4LDM4LDAsMCwwLDM4LTM4Vjg4QTM4LjA1LDM4LjA1LDAsMCwwLDE4Miw1MC40OFpNMTcwLDMyVjUwSDE1MFYzMGgxOEEyLDIsMCwwLDEsMTcwLDMyWk0xMTgsNTBWMzBoMjBWNTBaTTg4LDMwaDE4VjUwSDg2VjMyQTIsMiwwLDAsMSw4OCwzMFpNMjAyLDIwMGEyNiwyNiwwLDAsMS0yNiwyNkg4MGEyNiwyNiwwLDAsMS0yNi0yNlY4OEEyNiwyNiwwLDAsMSw4MCw2Mmg5NmEyNiwyNiwwLDAsMSwyNiwyNlptLTQ0LTQwYTIyLDIyLDAsMCwxLTIyLDIyaC0ydjEwYTYsNiwwLDAsMS0xMiwwVjE4MkgxMTJhNiw2LDAsMCwxLDAtMTJoMjRhMTAsMTAsMCwwLDAsMC0yMEgxMjBhMjIsMjIsMCwwLDEsMC00NGgyVjk2YTYsNiwwLDAsMSwxMiwwdjEwaDEwYTYsNiwwLDAsMSwwLDEySDEyMGExMCwxMCwwLDAsMCwwLDIwaDE2QTIyLDIyLDAsMCwxLDE1OCwxNjBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsNDkuNjhWMzJhMjAsMjAsMCwwLDAtMjAtMjBIODhBMjAsMjAsMCwwLDAsNjgsMzJWNDkuNjhBNDQuMDYsNDQuMDYsMCwwLDAsMzYsOTJWMjAwYTQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LDQ0aDk2YTQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LTQ0VjkyQTQ0LjA2LDQ0LjA2LDAsMCwwLDE4OCw0OS42OFpNMTY0LDQ4SDE0MFYzNmgyNFpNMTE2LDM2VjQ4SDkyVjM2Wm04MCwxNjRhMjAsMjAsMCwwLDEtMjAsMjBIODBhMjAsMjAsMCwwLDEtMjAtMjBWOTJBMjAsMjAsMCwwLDEsODAsNzJoOTZhMjAsMjAsMCwwLDEsMjAsMjBabS0yOC0zOGEzMCwzMCwwLDAsMS0yOCwyOS45M1YxOTZhMTIsMTIsMCwwLDEtMjQsMHYtNGgtOGExMiwxMiwwLDAsMSwwLTI0aDMwYTYsNiwwLDAsMCwwLTEySDExOGEzMCwzMCwwLDAsMS0yLTU5LjkzVjk2YTEyLDEyLDAsMCwxLDI0LDBoOGExMiwxMiwwLDAsMSwwLDI0SDExOGE2LDYsMCwwLDAsMCwxMmgyMEEzMCwzMCwwLDAsMSwxNjgsMTYyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDguODFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODhBMTYsMTYsMCwwLDAsNzIsMzJWNDguODFBNDAuMDUsNDAuMDUsMCwwLDAsNDAsODhWMjAwYTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwVjg4QTQwLjA1LDQwLjA1LDAsMCwwLDE4NCw0OC44MVpNMTIwLDMyaDE2VjQ4SDEyMFpNODgsMzJoMTZWNDhIODhabTQ4LDE1MnY4YTgsOCwwLDAsMS0xNiwwdi04aC04YTgsOCwwLDAsMSwwLTE2aDI0YTgsOCwwLDAsMCwwLTE2SDEyMGEyNCwyNCwwLDAsMSwwLTQ4Vjk2YTgsOCwwLDAsMSwxNiwwdjhoOGE4LDgsMCwwLDEsMCwxNkgxMjBhOCw4LDAsMCwwLDAsMTZoMTZhMjQsMjQsMCwwLDEsMCw0OFpNMTY4LDQ4SDE1MlYzMmgxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhWMjAwYTMyLDMyLDAsMCwxLTMyLDMySDgwYTMyLDMyLDAsMCwxLTMyLTMyVjg4QTMyLDMyLDAsMCwxLDgwLDU2aDk2QTMyLDMyLDAsMCwxLDIwOCw4OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODQsNDguODFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODhBMTYsMTYsMCwwLDAsNzIsMzJWNDguODFBNDAuMDUsNDAuMDUsMCwwLDAsNDAsODhWMjAwYTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwVjg4QTQwLjA1LDQwLjA1LDAsMCwwLDE4NCw0OC44MVpNMTY4LDQ4SDE1MlYzMmgxNlptLTQ4LDBWMzJoMTZWNDhaTTEwNCwzMlY0OEg4OFYzMlptOTYsMTY4YTI0LDI0LDAsMCwxLTI0LDI0SDgwYTI0LDI0LDAsMCwxLTI0LTI0Vjg4QTI0LDI0LDAsMCwxLDgwLDY0aDk2YTI0LDI0LDAsMCwxLDI0LDI0Wm0tNDAtNDBhMjQsMjQsMCwwLDEtMjQsMjR2OGE4LDgsMCwwLDEtMTYsMHYtOGgtOGE4LDgsMCwwLDEsMC0xNmgyNGE4LDgsMCwwLDAsMC0xNkgxMjBhMjQsMjQsMCwwLDEsMC00OFY5NmE4LDgsMCwwLDEsMTYsMHY4aDhhOCw4LDAsMCwxLDAsMTZIMTIwYTgsOCwwLDAsMCwwLDE2aDE2QTI0LDI0LDAsMCwxLDE2MCwxNjBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TipJar";
export { I as TipJar };