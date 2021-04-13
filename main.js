const g = require("./global")
const Database = require("./db")
const Prompt = require("./prompt")
const Mail = require("./mail")

class Server {
	database = new Database(this)
	prompt = new Prompt(this)
	mail = new Mail(this)
	constructor() {
		console.log(g.tagInfo, "Serevr 0.1")
	}
	async start() {
		await this.database.connect()
		this.prompt.start()
	}
}

main = new Server()
main.start()