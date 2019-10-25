Our client wants us to make a "todo list" app for them. They have some grand ideas about people being able to log in and collaborate with each other, so we want to keep scalability in mind as we build this. However for now we've narrowed down the scope to the following stories:

### Story 1: Add Tasks View

As an organized person, I want an add tasks view, for adding tasks to the app.

Given a node server
When navigating a browser to the homepage
Then there is an "Add Task" button

Given an "Add Task" button
When the button is clicked
Then an "Add Task" view is shown
And the view has a "Back" button

Given an "Add Task" view with a "Back" button
When the "Back" button is clicked
Then the browser is redirected to the homepage

---
### Story 2: Add Tasks Form

As an organized person, I want a form for adding tasks on the add tasks view, so that I can add tasks.

Given an Add Task view
When the view is shown
Then there is a form with a "Task" field
And the form has a "Save & Add Task" button

Given a "Save & Add Task" button
When there is nothing entered in the "Task" field
And the button is clicked
Then a validation error is shown on the "Task" field
And the Add Task view is still shown

---
### Story 3:

As an organized person, I want tasks added on the Add Task view to be shown in a list on the homepage, so that I can see them.

Given an Add Task view
And a "Save & Add Task" button
When a task is entered in the "Task" field
And the button is clicked
Then the browser is redirected to the homepage

Given the homepage after a Task has been submitted from the Add Task view
When the homepage is loaded
Then the task is shown at the bottom of a list on the homepage

---
### Story 4: Add description to tasks

As a detail oriented person, I want to add additional description to my tasks, so that I don't forget them

Given an "Add Task" view
When the view is loaded
Then a "Description" field is shown below the "Task" field

Given a "Task" field with a task
And a "Description" field with a description
When the "Save & Add Task" button is clicked
The view changes to the task list
And the saved task is added to the bottom of the list
And the saved description appears below the saved task

---
### Story 5: Edit tasks

As a flexible person, I want to be able to edit tasks, so I can adjust my goals as situations change.

Given a task with description in the task list
When the edit icon next to the task is clicked
Then the "Edit Task" view is shown
And the task and the description are populated in their respective fields
And changes made to the task and description are applied to the task list

---
### Story 6: Delete tasks

As an over planner, I want to be able to remove the tasks I’ve found to be unnecessary, so that I can remain more focused on what is important

Given a task with description
When a task is edited
Then a "Delete" button is shown

Given a Delete button
When the button is clicked
Then the task is immediately deleted

---
### Story 7: Mark tasks complete

As a student of Jean-Paul Sartre, I want to be able to mark as completed the tasks that I have done, so that I know what I am.

Given a task list
When the toggle next to a task is clicked
Then the task toggles between being complete or incomplete
And the font for completed tasks is styled with strikethrough

---
### Story 8: Create subtasks

As an organized person, I want to be able to specify subtasks, so that I can break large tasks down into smaller pieces.

Given the Add Task view
When the Add Subtask button is clicked
Then a field is added to a list below the subtask button
And when saved the subtask appears in the task list below the task

Given a subtask
When the toggle next to the subtask is clicked
Then the subtask toggles between complete and incomplete

Given the Edit Task view
When a subtask is edited
Then changes to the subtask are saved

Given the Edit Task view
When the delete button next to a subtask field is clicked
Then the subtask and field are deleted
And they do not appear in the task list

---
### Story 9: Filter completed tasks

As an organized person, I want to be able to hide completed tasks from my list, so that I can more easily see the things that I have left to do

Given a task list with complete and incomplete tasks
When a “Hide Completed” button is clicked
Then the task list will only display incomplete tasks
And the "Hide Completed" button will be changed to a "Show Completed" button

Given a task list with completed tasks hidden
When the "Show Completed" button is clicked
Then the task list will show both complete and incomplete tasks
And the "Show Completed" button will be changed to a "Hide Completed" button

---
### Story 10: Save changes

As someone who shuts down their device, I want my task list to persist, so that I can see my tasks the next time I load the app.

Given the task list app
When the app loads
Then the previous state of the app is retrieved from the server

Given the task list
When changes are made
Then changes are saved on the server

---
### Story 11: Tag tasks

As an organized person, I want to be able to organize my tasks by tags, so that I can divide them into discreet groups

Given the Add Task view
When the view loads
Then a tags field is show between the Description field and the Subtasks
And entered tags appear as pills in the field

Acceptance Criteria

- Tags should be added when text is entered, and enter is pressed
- Tags should use 'pills' for presentation and appear to the right of the entry box
- Tags should arbitrarily be assigned colors, and displayed under the task names in the main list

---
### Story 12: Tagged task list

As an organized person, I want to be able to see tagged tasks for a given tag, so that I can view only the tasks grouped discreetly into it

Given a Task list and a task with tags
When the filter button is clicked
Then the filter view is shown with a list of tags

Given a filter view with a list of tags
When a tag is clicked
Then the Task List view is shown
And only tasks with the selected tag are show in the list

---
### Story 13: Status bar

As a self-manager, I want to see a status bar at the top of every page that tells me the total number of tasks I have and the percent of them that are completed, so that I can keep track of my progress in the big picture.

Given a page with a task list
When the header is loaded
Then the header contains a single bar graph depicting the number of tasks completed and the total number of tasks
