/*---------------------------------------------
Theme Name: addapptation Form Micro
Theme URI: CDN Directory Here
Author: addapptation Dev Team
Author URI: https://addapptation.com/
Description: User can create and fill out forms and submit them to an endpoint with required fields.
Version: 0.1
Edited: March 20, 2020 - Bean
---------------------------------------------*/
export function form(jsonForm, jsonTheme) {
  console.log("Forms 1.0");
  var json = JSON.parse(jsonForm);
  var jsonTheme = JSON.parse(jsonTheme);
  const g__id = json.id;
  const options = json.options;
  const records = json.records;
  const root = document.documentElement;
  let formCSS = document.createElement('style');  
    console.log(jsonForm);

  formCSS.innerHTML = `
    /*---------------------------------------------
    DatePicker
    ---------------------------------------------*/
    .the-datepicker__main table.the-datepicker__calendar tbody tr,
    .the-datepicker__main table.the-datepicker__calendar thead tr{
      box-shadow: none;
    }
    .a__datatable_wrapper .the-datepicker__main tr a span.the-datepicker__day-content{
        color: #b4b4b4;
    }
    .a__datatable_wrapper .the-datepicker__main th {
      border-bottom: 0;
    }
    .the-datepicker__main table.the-datepicker__calendar tbody{
      border: 0;
    }
    td.the-datepicker__cell{
      border: 0;
    }
    .the-datepicker__container{
      right: 0;
    }
      .the-datepicker__container .the-datepicker__main tbody tr:nth-of-type(odd) {
      background-color: #fff;
      }
      .the-datepicker__container .the-datepicker__main tbody tr:nth-of-type(even) {
      background-color: #fff;
      }
      .the-datepicker__main {
        position: absolute;
        right: 0;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 0.3em;
      padding: 0.2em;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1em;
      box-sizing: border-box;
      }
      .the-datepicker__main th.the-datepicker__week-day {
      width: 2.1em;
      min-width: 2.1em;
      max-width: 2.1em;
      text-align: center;
      font-weight: bold;
      color: #666;
      padding: 0;
      font-size:12px;
      }
      .the-datepicker__main a.the-datepicker__button {
      display: block;
      width: 2.1em;
      min-width: 2.1em;
      max-width: 2.1em;
      padding: 0.6em 0;
      text-decoration: none;
      text-align: center;
      color: #000;
      font-size:12px;
      border-radius: 0.3em;
      }
      .the-datepicker__main a.the-datepicker__button:hover {
      text-decoration: none;
      }
      .the-datepicker__main .the-datepicker__title {
      display: inline-block;
      width: 70%;
      }
      .the-datepicker__main .the-datepicker__title-content {
      display: inline-block;
      padding: 0.5em;
      }
      .the-datepicker__main .the-datepicker__control {
      display: inline-block;
      width: 30%;
      text-align: right;
      }
      .the-datepicker__main .the-datepicker__reset,
      .the-datepicker__main .the-datepicker__close {
      display: inline-block;
      font-weight: bold;
      }
      .the-datepicker__main .the-datepicker__navigation {
      display: flex;
      justify-content: space-around;
      align-items: center;
      }
      .the-datepicker__main .the-datepicker__go a.the-datepicker__button {
      display: inline-block;
      font-weight: bold;
      }
      .the-datepicker__main .the-datepicker__go-next {
      text-align: right;
      }
      .the-datepicker__main .the-datepicker__state {
      display: inline-block;
      width: 70%;
      }
      .the-datepicker__main .the-datepicker__month {
      display: inline-block;
      width: 55%;
      text-align: left;
      border: 1px solid #b4b4b4;
      position: relative;
      }
      .the-datepicker__month:after{
      position: absolute;
        content: "\f0d7";
        font-family: "FontAwesome";
        font-weight: 400;
        font-size: 12px;
        top: 2px;
        transition: transform .3s;
        right: 4px;
      }
      .the-datepicker__main .the-datepicker__year {
      display: inline-block;
      width: 36%;
      text-align: left;
      border: 1px solid #b4b4b4;
      margin-left:10px;
      position: relative;
      }
      .the-datepicker__year:after{
      position: absolute;
        content: "\f0d7";
        font-family: "FontAwesome";
        font-weight: 400;
        font-size: 12px;
        top: 2px;
        transition: transform .3s;
        right: 4px;
      }
      .the-datepicker__main .the-datepicker__month-year {
      text-align: left;
      }
      .the-datepicker__main select.the-datepicker__select {
      font-size: 0.7em;
      margin: 0;
      padding: .1em;
      background: #fff;
      width: 100%;
      border: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
      }

      .the-datepicker__main table.the-datepicker__calendar {
      display: table;
      border-collapse: collapse;
      }
      .the-datepicker__main table.the-datepicker__calendar thead {
      display: table-header-group;
      }
      .the-datepicker__main table.the-datepicker__calendar tbody {
      display: table-row-group;
      }
      .the-datepicker__main table.the-datepicker__calendar tr {
      display: table-row;
      }
      .the-datepicker__main table.the-datepicker__calendar tr td,
      .the-datepicker__main table.the-datepicker__calendar tr th {
      display: table-cell;
      }
      .the-datepicker__main td.the-datepicker__cell {
      padding: 0;
      }
      .the-datepicker__main td.the-datepicker__cell a.the-datepicker__button {
      padding: 0.1em;
      }
      .the-datepicker__main td.the-datepicker__cell a.the-datepicker__button .the-datepicker__day-content {
      display: block;
      padding: 0.2em 0;
      }
      .the-datepicker__main td.the-datepicker__day a.the-datepicker__button .the-datepicker__day-content {
      text-align: center;
      border-radius: 0.3em;
      }
      .the-datepicker__main td.the-datepicker__day a.the-datepicker__button:hover {
      background-color: transparent;
      }
      .the-datepicker__main td.the-datepicker__day a.the-datepicker__button:hover .the-datepicker__day-content {
      background-color: rgba(161, 161, 161, 0.35);
      }
      .the-datepicker__main td.the-datepicker__day--highlighted a.the-datepicker__button .the-datepicker__day-content {
      background-color: #d1e8ff;
      }
      .the-datepicker__main td.the-datepicker__day--outside a.the-datepicker__button {
      color: #BF458A;
      }
      .the-datepicker__main td.the-datepicker__day--unavailable a.the-datepicker__button {
      color: #aaa;
      }
      .the-datepicker__main td.the-datepicker__day--unavailable a.the-datepicker__button:hover .the-datepicker__day-content {
      background-color: transparent;
      }
      .the-datepicker__main td.the-datepicker__day--selected a.the-datepicker__button,
      .the-datepicker__main td.the-datepicker__day--selected.the-datepicker__day--highlighted a.the-datepicker__button {
      color: #fff;
      }
      .the-datepicker__main td.the-datepicker__day--selected a.the-datepicker__button .the-datepicker__day-content,
      .the-datepicker__main td.the-datepicker__day--selected.the-datepicker__day--highlighted a.the-datepicker__button .the-datepicker__day-content {
      background-color: rgba(161, 161, 161, 0.15);
      }
      .the-datepicker__main td.the-datepicker__day--selected a.the-datepicker__button:hover .the-datepicker__day-content,
      .the-datepicker__main td.the-datepicker__day--selected.the-datepicker__day--highlighted a.the-datepicker__button:hover .the-datepicker__day-content {
      background-color: rgba(161, 161, 161, 0.35);
      }
      .a__datatable_wrapper .the-datepicker__main tr:hover a {
      color: #333;
      }
      .the-datepicker__main .the-datepicker__day--weekend,
      .the-datepicker__main .the-datepicker__week-day--weekend,
      .the-datepicker__main td.the-datepicker__day--today {
      font-weight: bold;
      }
      .the-datepicker__deselect-button {
      text-decoration: none;
      color: #BF458A;
      font-weight: bold;
      }
      .the-datepicker__deselect-button:hover {
      text-decoration: none;
      }
      .the-datepicker__main .a__datatable_wrapper tr td a{
      color: #000;
      }

  form {
      width: 100%;
  }
  .form-group{
      position: relative;
  }
  .g__input_text_wrapper label,
  .g__input_file_wrapper label,
  .g__input_email_wrapper label,
  .g__input_url_wrapper label,
  .g__input_number_wrapper label,
  .g__input_date_wrapper label,
  .g__input_textarea_wrapper label{
      position: absolute;
      top: 0;
      padding: 0.425rem 0.75rem;
      opacity: 0.35;
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all .5s;
  }
  .g__input_text_wrapper.active label,
  .g__input_file_wrapper.active label,
  .g__input_email_wrapper.active label,
  .g__input_url_wrapper.active label,
  .g__input_date_wrapper.active label,
  .g__input_number_wrapper.active label,
  .g__input_textarea_wrapper.active label{
      font-size: 0.775rem;
      transform: translate3d(0.75rem, -50%, 0);
      opacity: 1;
      line-height: normal;
      padding: 0 0.25rem;
      border-radius: 0.25rem;
      background: #fff;
      max-width: calc(100% - 1.5rem);
  }
  .form-control {
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #000000;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #BFBFBF;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  /*--------------------------
  RANGE
  --------------------------*/

  .g__input_range_wrapper .g__custom-range{
    -webkit-appearance: none;
  }
  .g__input_range_wrapper .g__custom-range{
    width: 100%;
    padding: 0;
    height: 9px;
    background-color: #e4e4e4;
    border-radius: 5px;
  }
  .g__input_range_wrapper .g__custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #b4b4b4;
    border-radius: 15px;
    cursor: pointer;
  }
  .g__input_range_wrapper .g__custom-range::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #b4b4b4;
    border-radius: 15px;
    cursor: pointer;
  }
  /*--------------------------
  DATE
  --------------------------*/
  .g__input_date_wrapper{
    display: flex;
  }
  .g__input_date_wrapper .input-group-text{
    border-radius: .25rem 0rem 0rem .25rem;
  }
  .g__input_date_wrapper .form-control {
    border-radius: 0rem .25rem .25rem 0rem;
  }
  .g__input_date_wrapper label {
    left: 40px;
  }
  /*--------------------------
  RADIO
  --------------------------*/
  .custom-control-input~.g__custom-radio::before  {
    display: block;
    margin-right: 5px;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    background: #fff;
    border: #a1a1a1 solid 1px;
    border-radius: 50px;;
    transition: all 0.5s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }
  .custom-control-input:checked~.g__custom-radio::before {
    color: #fff;
    background: #00B28B linear-gradient(180deg, #26be9c, #00B28B) repeat-x;
  }
  .g__form-radio label {
    position: relative;
    display: inline-block;
    margin-bottom: .5rem;
    display: flex;
    align-items: center;
    margin-right:15px;
    color: #101010;
  }
  .custom-control-input:checked~.g__custom-radio::after {
    position: absolute;
    content: "";
    left: 5px;
    top: 9px;
    height: 6px;
    width: 6px;
    background: #fff;
    border-radius: 10px;
  }

  .form-radio-inline {
    margin-bottom: .6rem;
    display: inline-block;
    padding-left: 0;
    margin-right: .75rem;
  }
  /*--------------------------
  CHECKBOX
  --------------------------*/
  .custom-control-input~.g__custom-checkbox::before  {
      display: block;
      margin-right: 5px;
      width: 1.5rem;
      height: 1.5rem;
      pointer-events: none;
      content: "";
      background: #fff;
      border: #a1a1a1 solid 1px;
      transition: all 0.5s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
  }
  .custom-control-input:checked~.g__custom-checkbox::before {
      color: #fff;
      background: #00B28B linear-gradient(180deg, #26be9c, #00B28B) repeat-x;
  }
  .g__form-check label {
      position: relative;
      display: inline-block;
      margin-bottom: .5rem;
      display: flex;
      align-items: center;
      margin-right:15px;
      color: #101010;
  }
  .custom-control-input:checked~.g__custom-checkbox::after {
      position: absolute;
      content: "";
      left: 12px;
      top: 12px;
      height: 0px;
      width: 0px;
      border-radius: 5px;
      border: solid #fff;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(0deg) scale(0);
      -ms-transform: rotate(0deg) scale(0);
      transform: rotate(0deg) scale(0);
      opacity:1;
      transition: all 0.5s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
  }
  .custom-control-input:checked~.g__custom-checkbox::after{
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity:1;
    left: 9px;
    top: 4px;
    width: 6px;
    height: 12px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0;
  }
  .form-check-inline {
      margin-bottom: .6rem;
  }
  /*--------------------------
  SELECT
  --------------------------*/
  /* The container must be positioned relative: */
  .custom-select {
      position: relative;
      background: none;
    }
    
    .custom-select select {
      display: none; /*hide original SELECT element: */
    }
    
    /* Style the arrow inside the select element: */
    .select-selected:after {
      position: absolute;
      content: "\f078";
      font-family: "FontAwesome";
      font-weight: 400;
      font-size: 12px;
      display: block;
      right: 0px;
      top: 0px;
      padding: 11px 15px;
      transition: transform .3s;
      height: calc(1.5em + .75rem + 6px);
      background: #f5f5f5;
      border-radius: 0 0.25rem 0.25rem 0;
      border-left: 1px solid #BFBFBF;
    }
    
    /* Point the arrow upwards when the select box is open (active): */
    .select-selected.select-arrow-active:after {
      border-color: transparent transparent #fff transparent;
    }
    
    /* style the items (options), including the selected item: */
    .select-items div,.select-selected {
      color: #101010;
      border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
      cursor: pointer;
    }
    
    /* Style items (options): */
    .select-items {
      position: absolute;
      background-color: #fff;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 99;
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      border: 1px solid #ced4da;
      border-radius: .25rem;
    }
    .select-items div{
      padding: .375rem 1.75rem .375rem .75rem;
    }
    
    /* Hide the items when the select box is closed: */
    .select-hide {
      display: none;
    }
    
    .select-items div:hover, .same-as-selected {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;

  document.head.appendChild(formCSS);
  
  const objClasses = {
      "micro" : {
          "container" : ["container", "mt-2"],
          "item" : ["row"]
      },
      "action" : {
          "container" : ["g__tile_action", "mt-1"]
      },
      "email" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_email_wrapper"]
      },
      "range" : {
          "container" : ["form-group"],
          "item" : ["g__input_range_wrapper"]
      },
      "text" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_text_wrapper"]
      },
      "currency" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_text_wrapper"]
      },
      "file" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_file_wrapper"]
      },
      "number" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_number_wrapper"]
      },
      "date" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_date_wrapper"]
      },
      "checkbox" : {
          "container" : ["g__form-check", "form-check-inline"],
          "input" : ["form-check-input"],
          "label" : ["form-check-label"]
      },
      "radio" : {
          "container" : ["g__form-radio", "form-radio-inline"],
          "input" : ["form-radio-input"],
          "label" : ["form-radio-label"]
      },
      "textarea" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_textarea_wrapper"]
      },
      "url" : {
          "container" : ["form-group", "g__super_text"],
          "item" : ["g__input_url_wrapper"]
      },
      "select" : {
          "container" : ["form-group"]
      }
  };

  /*---------------------------------------------
      Helpers - Should be moved to there own file
      ---------------------------------------------*/
      var isObject = function (val) {
          return Object.prototype.toString.call(val) === "[object Object]";
      };

      var isArray = function (val) {
          return Array.isArray(val);
      };
      var createElement = function (a, b) {
          var d = document.createElement(a);
          if (b && "object" == typeof b) {
              var e;
              for (e in b) {
                  if ("html" === e) {
                      d.innerHTML = b[e];
                  } else {
                      d.setAttribute(e, b[e]);
                  }
              }
          }
          return d;
      };
      var each = function (arr, fn, scope) {
          var n;
          if (isObject(arr)) {
              for (n in arr) {
                  if (Object.prototype.hasOwnProperty.call(arr, n)) {
                      fn.call(scope, arr[n], n);
                  }
              }
          } else {
              for (n = 0; n < arr.length; n++) {
                  fn.call(scope, arr[n], n);
              }
          }
      };
  /*---------------------------------------------
  Element Functions
  ---------------------------------------------*/
  //Container build based on objClass - does not return class
  function strClass(style, level) {
      var arrClasses = objClasses[style][level] || "";
      var strClasses = arrClasses === "" ? "" : arrClasses.join(" ") + "";
      return strClasses;
      }
  //Inner Class builder that returns 'class'
  function innerClass(style, level) {
      var arrClasses = objClasses[style][level] || "";
      var strClasses = arrClasses === "" ? "" : "class='" + arrClasses.join(" ") + "'"; 
      return strClasses;
      }
  function checked(val){
      var c = val ? "checked" : "";
      return c;
  }
  function action(o){
      var title = o.title ? `<h2>${o.title}</h2>` : "";
      var desc = o.description ? `<p>${o.description}</p>` : "";
          return title + desc;
          }
  function selectOptions(val, count) {
      var item = `<option value='${count}'>${val}</option>`;
      return item;
      }

  /*---------------------------------------------
  Container Build
  ---------------------------------------------*/
  function formMicro(o, r){
      if (records && records.length) {
          var wrapper = createElement("div", {
              "class": `${strClass("micro", "container")} ${g__id}`
          });
          var row = createElement("div", {
              "class": strClass("micro", "item")
          });
          
          if(o.header || o.description){
              var action_row = createElement("div", {
                  html: `${ action(o) }`,
                  "class": strClass("action", "container")
              });
              
          };
          var form = createElement("form", {
              "id": g__id,
              "method": o.method,
              "action": o.action
          })
          wrapper.appendChild(row);
          row.appendChild(action_row);
          row.appendChild(form);
          each(r, function(r){
              var fieldWrap = createElement("div", {
                  "class": `${ strClass(r.type, "container") }`
              })
              form.appendChild(fieldWrap);
              fieldWrap.innerHTML = formField(r);
          });          
      };
      document.getElementById(g__id).appendChild(wrapper);
      console.log(wrapper);
  }
  function formField(r){
      let type = r.type;
      let value = r.value;
      let id = r.id;
      let title = r.title;
      let name = r.name;
      console.log(type);
      switch (type){
          case "text":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <input type="email" form_id="${g__id}" autocomplete="new-password" id="${id}" name="${name}" class="form-control" ></input>
                        </div>
                    </div>`;
            break;

          case "currency":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <input type="text" pattern="^\\d*(\\.\\d{2}$)?" form_id="${g__id}" id="${id}" name="${name}" class="form-control" ></input>
                        </div>
                    </div>`;
            break;

          case "file":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <input type="file" form_id="${g__id}" autocomplete="new-password" id="${id}" name="${name}" class="form-control" ></input>
                        </div>
                    </div>`;
            break;

          case "number":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <input type="number" form_id="${g__id}" autocomplete="new-password" value="${value}" id="${id}" name="${name}" class="form-control" ></input>
                        </div>
                    </div>`;
            break;

          case "email":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <input type="email" form_id="${g__id}" autocomplete="new-password" id="${id}" name="${name}" class="form-control" ></input>
                        </div>
                    </div>`;
            break;

          case "select":
            return `<div class="custom-select">
                        <select>
                        ${r.options.map(selectOptions).join(" ")}
                        </select>
                    </div>`;
            break;

          case "checkbox":
            return `<input type="checkbox" form_id="${g__id}" id="${id}" name="${name}" class="custom-control-input" value="${r.value}" ${checked(r.checked)}></input>
                    <label for="${id}" class="g__custom-checkbox">${title}</label>`;
            break;

          case "radio":
            return `<input type="radio" form_id="${g__id}" id="${id}" name="${name}" class="custom-control-input" value="${r.value}" ${checked(r.checked)}></input>
                    <label for="${id}" class="g__custom-radio">${title}</label>`;
            break;

          case "textarea":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <textarea form_id="${g__id}" autocomplete="new-password" id="${id}" name="${name}" class="form-control" ></textarea>
                        </div>
                    </div>`;
            break;

          case "url":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <input form_id="${g__id}" autocomplete="new-password" id="${id}" name="${name}" class="form-control" ></input>
                        </div>
                    </div>`;
            break;

          case "date":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">
                                    <i class="far fa-calendar-alt"></i>
                                </span>
                            </div>
                            <label for="${id}">${title}</label>
                            <input type="text" form_id="${g__id}" autocomplete="new-password" id="${id}" name="${name}" class="form-control g__date_field" ></input>
                        </div>
                    </div>`;
            break;

          case "range":
            return `<div ${innerClass(type, "container")}>
                        <div ${innerClass(type, "item")}>
                            <label for="${id}">${title}</label>
                            <input type="range" form_id="${g__id}" min="1" max="100" value="50" autocomplete="new-password" id="${id}" name="${name}" class="g__custom-range" ></input>
                        </div>
                    </div>`;
            break;

          case "checkbox":
            return `<label title="${val.type}">${val.type}</label>
                    <input type="${val.type}" class="form-control">`;
            break;
          
          case "section":
            console.log("section");
            break;
          
          default:
            console.log("Unaccepted attribute");
            break;
      } 
  }

  formMicro(options, records);

  //Label Active state
  var field = document.getElementsByClassName('form-control');
  for (i = 0; i < field.length; i++) {
      field[i].addEventListener("focus", function() {
          var el = this.parentElement;
          el.classList.toggle('active');
      })
  }

  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = "Bean";
  //   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

/*const valid = document.querySelectorAll();
valid.addEventListener("keypress", event => {
  if (event.pattern.test(event.key)) {
    event.preventDefault();
  }
});
*/

  /*---------------------------------------------
  Date Edit
  ---------------------------------------------*/
  var input = document.getElementsByClassName('g__date_field');
  for (i = 0; i < input.length; i++) {
      var cal = input[i];
      var date = input[i].value;
      var datepicker = new TheDatepicker.Datepicker(cal);
      datepicker.options.setInputFormat("n/j/Y");
      datepicker.options.setInitialDate(date);
      datepicker.options.setShowDeselectButton(false);
      datepicker.options.setShowCloseButton();
      datepicker.render();
  }

};
