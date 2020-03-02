### Display my categories/folders

/api/categories/userid

### Display articles from a category

/api/categories/userid/articles

Add an endpoint for retrieving a `project` by its `id` that returns an object with the following structure:

```js
{
  id: 1,
  name: 'project name here',
  description: 'the project description',
  completed: false, // or true, the database will return 1 for true and 0 for false, extra code is required to convert a 1 to true and a 0 to false.
  tasks: [
    {
      id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false // or true
    },
    {
      id: 7,
      description: 'another task description',
      notes: 'the task notes',
      completed: false // or true
    }
  ],
  resources: [
    {
      id: 1,
      name: 'Lambda Student',
      description: 'a soon to be hired developer'
    },
    {
      id: 2,
      name: 'MacBook Pro #1'
      description: 'an overly expensive laptop computer'
    }
  ]
}
```

exports.up = function(knex) {
return knex.schema.createTable('articles', tbl => {
tbl.increments();
tbl.text('art_name');
tbl.text('link').notNullable();
tbl.text('image').notNullable();
tbl
.integer('category_id')
.notNullable()
.unsigned()
.references('id')
.inTable('categories')
.onUpdate('CASCADE')
.onDelete('CASCADE');

    	tbl
    		.integer('user_id')
    		.notNullable()
    		.unsigned()
    		.references('id')
    		.inTable('auth')
    		.onUpdate('CASCADE')
    		.onDelete('CASCADE');
    });

};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('articles');
};
