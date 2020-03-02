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
    "filename": "./public/main.js",
    "group": "C:\\Users\\Kika\\Documents\\LAMBDA\\back-end\\public\\main.js",
    "groupTitle": "C:\\Users\\Kika\\Documents\\LAMBDA\\back-end\\public\\main.js",
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
    "url": "/api/auth/login",
    "title": "Login User",
    "name": "Login",
    "group": "Users",
    "version": "0.0.0",
    "filename": "./auth/router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Create User",
    "name": "Signup",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 Created\n\t{\n\t\"id\": 1,\n\t\"username\": \"ana\",\n\t\"password\": \"token\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/router.js",
    "groupTitle": "Users"
  }
] });
