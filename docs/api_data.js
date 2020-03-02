define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\Kika\\Documents\\LAMBDA\\back-end\\docs\\main.js",
    "groupTitle": "C:\\Users\\Kika\\Documents\\LAMBDA\\back-end\\docs\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/categories/${id}",
    "title": "Request All Categories for a User",
    "name": "GetCategories",
    "group": "Category",
    "version": "0.0.0",
    "filename": "./categories/router.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Create User",
    "name": "Signup",
    "group": "Users",
    "version": "0.0.0",
    "filename": "./auth/router.js",
    "groupTitle": "Users"
  }
] });
