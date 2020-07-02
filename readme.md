### Seed data to DB

Mongo Seeding CLI is needed to add quiz questions to db.
To install Mongo Seeding CLI
`npm install -g mongo-seeding-cli`

Then run `seed --db-name quizzes --drop-database ./data-import`
This command drops local quizzes db, creates new one ond seeds data from data-import folder.
`seed --db-name quizzes --drop-database ./data-import`
