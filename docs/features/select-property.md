# Select chips

Select properties show as colored chips, edited with a picker: in base tables, lists and cards, and in the properties of a note.

![Select chips](../images/select-property.webp)

## How to use

- Click a select value: a picker lists the options, with a search field that also creates a new one. Pick a value to set it.
- Each value has a color: click the dot next to it in the picker. 23 colors, the same hues as the icon palette. Colors are shared by every base, the board columns and [Tag colors](tag-colors.md).
- Double-click edits the value as text.
- On a phone, a tap opens a bottom sheet instead of the picker (no keyboard), a double tap edits the text.
- Options offered: the `select.options` of the base (all the bases in a note's properties), the common statuses for `status`, then the values already used.

## Settings

*Settings → Notionalize → Properties*, on by default.

## What it writes

- The value, in the note's frontmatter.
- The value colors, in the plugin's `data.json` (`selectColors`).

## Network

None.
