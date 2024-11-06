# draw.io plugin for Saltcorn

Provides an edit fieldview for the HTML data type

Caveats:

- only works with any-bootstrap-theme Saltcorn theme.
- Contacts embedded.diagrams.net when you edit. Unclear what data is shared.
- Diagrams cannot be escaped for Cross Site Scripting (XSS) payloads. you must show diagrams with unsafeNotEscaped HTML fieldview. You should not allow untrusted users to run the editor.
- Save button does not work inside the editor, only Save & Exit
