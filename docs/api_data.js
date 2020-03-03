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
    "type": "post",
    "url": "/api/categories/${id}",
    "title": "Create Folder/Category",
    "name": "Create_Categories",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name - req.body</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"Created\": \"New Folder\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./categories/router.js",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/api/categories/${id}",
    "title": "Delete Folder/Category",
    "name": "Delete_Categories",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>1</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category/Folder id - sent in params as id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 Created\n{\n 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./categories/router.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/categories/${id}",
    "title": "Request All Categories from a User",
    "name": "GetCategories",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Folder id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Folder name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 6,\n  \"name\": \"folder\",\n  \"user_id\": 2\n},\n{\n  \"id\": 7,\n  \"name\": \"another folder\",\n  \"user_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./categories/router.js",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/api/categories/${id}",
    "title": "Update Folder/Category",
    "name": "Update_Categories",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>1</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category/Folder id - sent in params as id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name - sent in body</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 Created\n{\n \"Updated\": 1",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./categories/router.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/categories/${id}/articles",
    "title": "Request All Categories and Articles for a User",
    "name": "GetArticlesandCategories",
    "group": "Category_and_Articles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Article Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Link to Article</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlToImage",
            "description": "<p>Link to Image</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"category_id\": 6,\n  \"title\": \"article name\",\n  \"url\": \"www.google.com\",\n  \"urlToImage\": \"https://source.unsplash.com/random/200x200\",\n  \"user_id\": 1\n  \"author\": \"name of author\"\n},\n{\n  \"category_id\": 6,\n  \"title\": \"article name\",\n  \"url\": \"www.google.com\",\n  \"urlToImage\": \"https://source.unsplash.com/random/200x200\",\n  \"user_id\": 1\n  \"author\": \"name of author\"\n}\n],",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./categories/router.js",
    "groupTitle": "Category_and_Articles"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login User",
    "name": "Login",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
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
          "content": "HTTP/1.1 201 Created\n\t{\n\t  \"username\": \"ana\",\n\t  \"password\": \"token\"\n\t}",
          "type": "json"
        }
      ]
    },
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
          "content": "HTTP/1.1 201 Created\n\t{\n\t  \"username\": \"ana\",\n\t  \"password\": \"token\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/router.js",
    "groupTitle": "Users"
  }
] });
