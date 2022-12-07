const { assert } = require('chai');
const { describe, it } = require('mocha');
const TaskManager = require('../assets/js/taskManager').TaskManager;

describe('TaskManager', () => {
    describe('addTask', () => {
        it('should add task to the task array', () => {
            const myTaskManager = new TaskManager();
            //Exercise: call function under test; define result
            myTaskManager.addTask('laundry', 'do laundry', 'charles', '12/05/2022', 'TODO');
            //Verify: use assert method to compare actual and expected result
            assert.ok(myTaskManager.tasks.length === 1);
        })
    })

    describe('deleteTask', () => {
        it('should delete task from the task array when delete button is pressed', () => {
            //Setup: define expected result
            const myTaskManager = new TaskManager();
            //Exercise: call function under test; define result
            myTaskManager.addTask('laundry', 'do laundry', 'charles', '12/05/2022', 'TODO');
            myTaskManager.deleteTask(0);
            //Verify: use assert method to compare actual and expected result
            assert.ok(myTaskManager.tasks.length === 0);
        })
    })


    describe('getTaskById', () => {
        it('should select a task by its id', () => {
            //Setup: define expected result
            const myTaskManager = new TaskManager();
            //Exercise: call function under test; define result
            myTaskManager.addTask('laundry', 'do laundry', 'charles', '12/05/2022', 'TODO');
            const expectedResult = {
                name: 'laundry', description: 'do laundry', assignedTo: 'charles', dueDate: '12/05/2022', status: 'TODO', id: 0
            };
            const result = myTaskManager.getTaskById(0);
            //Verify: use assert method to compare actual and expected result
            assert.deepEqual(result, expectedResult)
        })
    })

})