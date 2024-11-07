# draw.io plugin for Saltcorn

Provides an edit fieldview for the HTML data type

Caveats:

- only works with any-bootstrap-theme or tabler Saltcorn themes.
- Contacts embedded.diagrams.net when you edit. Unclear what data is shared.
- Diagrams cannot be escaped for Cross Site Scripting (XSS) payloads. you must show diagrams with unsafeNotEscaped HTML fieldview. You should not allow untrusted users to run the editor.
- Can't be used in popup edit forms.
