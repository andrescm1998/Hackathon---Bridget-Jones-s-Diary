const Diary = require('../models/diary');
const Token = require('../models/token')

async function index (req, res) {
    try {
        //console.log('Hi')
        //console.log(req.cookies)
        const token = await Token.getOneByToken(req.cookies["discretionUser"])
        const userId = token["user_id"]
        //console.log(userId)
        const diaryEntries = await Diary.getAll(userId);
        res.json(diaryEntries);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
};

async function create (req, res) {
    console.log('Hi')
    try {
        const token = await Token.getOneByToken(req.cookies["discretionUser"])
        console.log(token);
        const data = req.body;
        data['user_id'] = token.user_id;
        console.log(data);
        const result = await Diary.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
};

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const diaryEntry = await Diary.getOneById(id);
        res.json(diaryEntry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const diaryEntry = await Diary.getOneById(id);
        const result = await diaryEntry.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

async function updateDiary (req, res) {
    const id = parseInt(req.params.id)
    try {
        const diaryEntry = await Diary.show(id)
        diaryEntry.updateDiary(req.body)
        res.send();
    } catch (err) {
        res.status(404).send({"error": err.message});
    }
};

module.exports = {
    index, create, show, destroy, updateDiary
}
