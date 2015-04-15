cmapi.channel["map.view.area.selected"].description = {
  "description": "Send a message indicating the user has drag selected a rectangular area (bbox) on the map.  This can be used to notify widgets that the user is interested in this particular area of the current view.",
  "properties": {
    "bounds": {
      "description": "Bounding box of area selected on map",
      "default": " ",
      "properties": {
        "southWest": {
          "description": "Bottom right of the bounds",
          "default": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "default": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "default": ""
            }
          }
        },
        "northEast": {
          "description": "Top left of the bounds",
          "default": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "default": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "default": ""
            }
          }
        }
      }
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
      "default": "left"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'. Default value is 'none'.",
      "default": ["none"]
    }
  }
};
