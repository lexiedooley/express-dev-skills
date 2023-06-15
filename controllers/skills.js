module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

const Skill = require('../models/skill');

function create(req, res) {
    const skill = req.body;
    skill.id = Date.now() % 1000000;
    Skill.create(skill);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('new', { title: 'New Skill' });
}
function index(req, res) {
    const skillList = Skill.getAll();


    res.render('listView', { skillList });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);

    res.render('skillView', { skill });
}