export let jsonBlock = {
      "id": "795ea52dd5931d1108fb8382aad0c825",
      "feature": "tabs",
      "options": {
        "style": "tabs", // accepted styles: tabs, multi & block
        "align": "left",
        "font_size": "small",
        "hover_color": "",
        "height": "150px",
        "width": "150px",
        "highlight_color": "",
        "theme": "dark",
        "padding": "large",
        "noLoad": "true"
      },
      "records": [
        {
          "name": "Basic Info",
          "icon": "fal fa-home",
          "dropdown": "false",
          "completed": "true",
          "href": "?step=1"
        },
        {
          "name": "Registration",
          "icon": "",
          "dropdown": "false",
          "completed": "false",
          "href": "?step=2"
        },
        {
            "name": "Upload Content",
            "icon": "",
            "completed": "false",
            "href": "?step=3",
            "dropdown": "true",
            "dropdown_item": [
            { "name": "Basic Info", "href": "?step=3a" },
            { "name": "Registration History", "href": "?step=3b" },
            { "name": "Sign Out", "href": "?step=3c" }
            ],
        },
        {
          "name": "Details",
          "icon": "",
          "dropdown": "false",
          "completed": "false",
          "href": "?step=4"
        },
        {
          "name": "Marketing Materials",
          "icon": "",
          "dropdown": "false",
          "completed": "false",
          "href": "?step=5&name=justin&age=34"
        }
      ]
    };
export let jsonTheme = {};
