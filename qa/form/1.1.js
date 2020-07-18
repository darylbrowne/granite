export let jsonBlock = {
    "feature": "form",
    "id": "a__795ea52dd5931d1108fb8382aad0c830",
    "options": {
      "title": "Another Form",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo id mi at rutrum. Etiam erat justo, posuere vitae massa eu, aliquam interdum sapien. Sed ornare sapien quis purus tincidunt auctor. Cras volutpat quam id ligula aliquet facilisis. Duis ac dolor nec metus lobortis egestas id vitae leo. Aliquam eu lacus consequat, hendrerit lectus et, tincidunt dolor. Sed congue congue purus, nec suscipit lectus ultricies id.",
      "action": "/form_dev",
      "method": "POST",
      "enctype": "application/x-www-form-urlencoded",
      "autosave": true,
      "inline": false,
      "show_loader": false,
      "db_id": "",
      "db_object": "",
      "db_action": "",
      "db_redirect": ""
    },
    "records": [
      {
        "type": "text",
        "id": "a__795ea52dd5931d1108fb8382344dred",
        "value": "First and Last Name",
        "name": "name",
        "title": "Name",
        "required": true
      },    
      {
        "type": "currency",
        "id": "a__795ea52dd5931d1108fb8382344d44",
        "value": "$0.00",
        "name": "currency",
        "title": "Amount",
        "required": true
      },    
      {
        "type": "email",
        "id": "a__795ea52dd5931d1108fb8382344dsd43",
        "value": "me@you.com",
        "name": "email",
        "title": "Email",
        "required": true
      },
      {
        "type":"checkbox",
        "id":"a__6d48d2ca0e40c0252d9faa24c3cbab4b",
        "value":"two",
        "name":"checkbox2",
        "title":"Checkbox 2",
        "required":false,
        "checked": true,
        "inline":true
      },
      {
        "type":"checkbox",
        "id":"a__f1f70a4208440305cb066d76e7b4a80d",
        "value":"three",
        "name":"checkbox3",
        "title":"Checkbox 3",
        "required":false,
        "checked": false,
        "inline":true
      },
      {
        "type":"checkbox",
        "id":"a__a44c87e773792f82a5bcb84afa08d69w",
        "value":"four",
        "name":"checkbox4",
        "title":"Checkbox 4",
        "required":false,
        "checked": false,
        "inline":true
      },
      {
      "type": "select",
      "id": "a__#{SecureRandom.hex}",
      "value": "New Hampshire",
      "name": "select1",
      "title": "Multiselect",
      "required": false,
      "options": ["New Hampshire","Montana","New York","Vermont","Florida"],
      "multiple": true,
      "disabled": false,
      },
      {
        "type": "textarea",
        "id": "a__795ea52dd5931d1108fb8382344dred",
        "value": "Description",
        "name": "textarea",
        "title": "Description",
        "required": true
      },
      {
        "type": "url",
        "id": "a__795ea52dd5931d1108fb8382aa328c0d",
        "value": null,
        "name": "text",
        "title": "URL",
        "required": false
      },
      {
        "type":"radio",
        "id":"a__6d48d2ca0e40c0252d9faa24c3cbab44",
        "value":2,
        "name":"radio",
        "title":"Radio2",
        "required":false,
        "inline":true
      },
      {
        "type":"radio",
        "id":"a__f1f70a4208440305cb066d76e7b4a80e",
        "value":3,
        "name":"radio",
        "title":"Radio3",
        "required":false,
        "inline":true
      },
      {
        "type":"radio",
        "id":"a__a44c87e773792f82a5bcb84afa08d69f",
        "value":4,
        "name":"radio",
        "title":"Radio4",
        "required":false,
        "inline":true
      },
      {
        "type": "date",
        "id": "a__795ea52dd5931d1108fb8382aa328c0d",
        "value": null,
        "name": "text",
        "title": "Date",
        "required": false
      },
      {
        "type": "range",
        "id": "a__795ea52dd5931d1108fb8382aa328c0d",
        "value": null,
        "name": "range",
        "title": "Range",
        "required": false
      },
      {
        "type": "number",
        "id": "a__795ea52dd5931d1108fb8382aa328c0d",
        "value": 54,
        "name": "number",
        "title": "number",
        "required": false
      },
      {
        "type": "file",
        "id": "a__795ea52dd5931d1108fb8382344d998",
        "value": "",
        "name": "file",
        "title": "File to Upload",
        "required": true
      }
    ]
};
export let jsonTheme = {};
