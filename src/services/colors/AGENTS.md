# Colors service

**Files**: `src/services/colors/` (`ColorStore.ts`, `palette/`, `constants.ts`)

## Purpose
The value → Notion color map shared by select chips, board columns and tag colors, and the only palette UI. Always loaded, so these features depend on it and never on each other.

## Behavior
- `ColorStore` (created in `main.ts` from the `DataStore`): `get(value)`, `set(value, color | null)`, `onChange(listener)` (returns its unsubscribe). Keys are lowercased values, tags without `#`. The `map` object is never replaced: features may keep a reference to it. It has no prototype and holds only colors of `NOTION_COLORS` (`readColorMap.ts`, on load and in `set`): a value named `constructor` has no color, and a color from a hand-edited `data.json` never reaches a class name.
- Persisted under `selectColors` in `data.json` (`DataStore.write`).
- `NotionColor` (`constants.ts`): the 23 colors of values (`styles/_notion-colors.scss`), same hues as the icon palette (`IconColor`, icons feature) plus Notion's original 9. The icon palette colors are a superset used for glyphs only.
- `palette/openColorPalette`: floating palette anchored on an element, in that element's window (popouts); `palette/renderSwatches`: the swatch row, also used inline in the select bottom sheet. One palette open at a time (`paletteState`), closed by `dismissColorPalette`.
- Class helpers: `chipClass`, `tagColorClass`, `swatchClass`; `data-notion-color` attribute (`ATTRS`).

## Users
select-property (chips), board (columns), tag-colors, the select picker service.
