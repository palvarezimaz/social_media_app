const db = require("../db/db")

const Post = {
  create: (name, post, attachment) => {
    const sql = `
      INSERT INTO posts(poster_user_id, post, attachment)
      VALUES ($1, $2, $3)
      RETURNING *
    `
    return db
    .query(sql, [name, post, attachment])
    .then(dbRes => dbRes.rows[0])
  },

  findAll: () => { 
    const sql = 'SELECT * FROM posts'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },
}

module.exports = Post