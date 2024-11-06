const {
  input,
  div,
  text,
  script,
  domReady,
  textarea,
  style,
  text_attr,
} = require("@saltcorn/markup/tags");
const File = require("@saltcorn/data/models/file");
const User = require("@saltcorn/data/models/user");
const { features } = require("@saltcorn/data/db/state");

const headers = [
  {
    script: `/plugins/public/drawio@${
      require("./package.json").version
    }/diagram-editor.js`,
  },
];

const emptySvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="121px" height="61px" viewBox="-0.5 -0.5 121 61" content="&lt;mxfile host=&quot;www.draw.io&quot; modified=&quot;2020-01-27T15:32:40.178Z&quot; agent=&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36&quot; etag=&quot;EXPbqWyuHeuT2c_98d6U&quot; version=&quot;12.5.8&quot;&gt;&lt;diagram id=&quot;emYRSDDRkDP2Yd3EZy3r&quot; name=&quot;Page-1&quot;&gt;jZLBboQgEIafhmuzSmLca+1299KTTXqmMhVSBIO4ap++UoYqMU160ZlvhpmfGQituvlqWS9eDAdF8hOfCX0ieZ4VJV1/niyBnPMygNZKHtBpA7X8AjwZ6Sg5DMgCcsYoJ/sUNkZraFzCmLVmStM+jEq79qyFJMODumHqSN8kdyLQMi82fgPZitg5K84h8s6az9aaUWM/bTSESMdiGdQwCMbNtEP0QmhljXHB6uYKlB9rOrHnP6IoeXBLvETUakG7f1WIl7gzNWKNVyEHn+I/zG8BBvdw6DQJ6aDuWeP9aX0ShD4K16nVy1bzKATF3sE6mHcIhV3BdODssqZgNA5tSd1pW04WmdgtpkDG8D20v4W3OawGjiK62w5+Yrs3Ti/f&lt;/diagram&gt;&lt;/mxfile&gt;">
   <defs></defs>
   <g>
      <rect x="0" y="0" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all"/>
      <g transform="translate(-0.5 -0.5)">
         <switch>
            <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
               <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 30px; margin-left: 2px;">
                  <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                     <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">This is a test.</div>
                  </div>
               </div>
            </foreignObject>
            <text x="60" y="34" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Click to add drawing</text>
         </switch>
      </g>
   </g>
</svg>`;

const drawio_edit = {
  type: "HTML",
  isEdit: true,
  blockDisplay: true,
  handlesTextStyle: true,
  configFields: [],
  run: (nm, v, attrs, cls, required, field) => {
    const rndid = `drawio${Math.floor(Math.random() * 16777215).toString(16)}`;

    return div(
      { class: "drawio-edit-wrap", id: rndid },
      textarea({
        name: text_attr(nm),
        id: `input${text_attr(nm)}`,
        class: "d-none",
        onChange: attrs.onChange,
        "data-fieldname": text_attr(field.name),
        value: v,
      }),
      div(
        {
          style: "cursor: pointer; display:inline-block;",
          title: "Click to edit",
          onclick: `DiagramEditor.editElement(this.firstChild, '${rndid}');`,
        },
        v || emptySvg
      ),
      style(`.tox .tox-editor-header {z-index: 0;}`)
    );
  },
};

const dependencies = ["@saltcorn/html"];

module.exports = {
  sc_plugin_api_version: 1,
  fieldviews: { drawio_edit },
  plugin_name: "drawio",
  headers,
  dependencies,
};
