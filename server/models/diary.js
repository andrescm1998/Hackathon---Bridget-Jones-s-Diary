const e = require('express');
const db = require('../database/connect');

class Diary {

    constructor({ entry_id, user_id, title, content, date_created, is_public }) {
        this.id = entry_id;
        this.title = title;
        this.content = content;
        this.user_id = user_id;
        this.date_created = date_created;
        this.is_public = is_public;
    }

    static async getAll(id=null) {
        console.log(id);
        if (!id){
            const response = await db.query("SELECT * FROM diary");
            return response.rows.map(p => new Diary(p));
        } else {
            const response = await db.query("SELECT * FROM diary JOIN user_account ON diary.entry_id = user_account.user_id WHERE user_id = $1", [id]);
            return response.rows.map(p => new Diary(p));
        }
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diary JOIN user_account ON diary.entry_id = user_account.user_id WHERE entry_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate post.")
        }
        console.log(response.rows[0])
        return new Diary(response.rows[0]);
    }

    static async create(data) {
        
        try {
            const {user_id, title, content, is_public } = data;
            const date_created = new Date().toDateString() 
            let response = await db.query("INSERT INTO diary (user_id, title, content, date_created, is_public) VALUES ($1, $2, $3, $4, $5)", [user_id, title, content, date_created, is_public]);
            return "New entry has been created"
        } catch (error) {
            return {error: error}
        }
    }

    async destroy() {
        let response = await db.query("DELETE FROM diary WHERE entry_id = $1 RETURNING *;", [this.id]);
        return new Diary (response.rows[0]);
    }

    async update(data) {
        const {title, content} = data;
        const date_created = new Date().toDateString()
        let response = await db.query("UPDATE diary SET title='$1', content='$2', date_created='$3' WHERE entry_id='$4'", [title, content, date_created, this.id])
        return response
    }
}

module.exports = Diary;
