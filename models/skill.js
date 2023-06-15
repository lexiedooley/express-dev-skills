const { name } = require("ejs");

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

let skills = [
    {
        id: 234,
        name:'JavaScript',
        difficulty: 'Medium',
        enjoyment: '!!!'
    },
    {
        id: 323,
        name: 'CSS',
        difficulty: 'Easy',
        enjoyment: '!!!!!'
    },
    {
        id: 883,
        name: 'HTML',
        difficulty: 'Easy',
        enjoyment: '!!!'
    },
    {
        id: 543,
        name: 'Node',
        difficulty: 'Medium',
        enjoyment: '!!'
    },
    {
        id: 366,
        name: 'Express',
        difficulty: 'Hard',
        enjoyment:'!'
    },


];

function deleteOne(id) {
    id=parseInt(id);
    
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}
function create(skill) {
    skills.push(skill)
}
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(s => s.id === id);
};