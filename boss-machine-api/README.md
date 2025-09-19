# Boss Machine

## Project Overview

This project is an exercise from [Codecademy](https://www.codecademy.com/) to learn how to manage **Express.js**. The Boss Machine is a unique management application for today's most accomplished (evil) entrepreneurs. It allows you to manage your "minions," your brilliant "million dollar ideas," and handle all the annoying meetings that keep getting added to your busy schedule.

### Features
- Manage minions: Create, read, update, and delete minions.
- Manage ideas: Create, read, update, and delete million-dollar ideas.
- Manage meetings: Create and delete meetings.
- Bonus: Manage work for minions, including creating, reading, updating, and deleting work items.

### Technologies Used
- **Node.js**
- **Express.js**

---

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Start the server with `npm run start`. You should see `Server listening on port 4001` in your terminal.

---

## Usage

You can test the API using **Postman**. Here are some example requests:

### Minions
- **GET all minions**: `GET http://localhost:4001/api/minions`
- **GET a specific minion**: `GET http://localhost:4001/api/minions/1`
- **POST a new minion**:
  ```bash
  POST http://localhost:4001/api/minions
  Body (raw, JSON):
  {
      "name": "New Minion",
      "title": "Developer",
      "salary": 50000
  }
  ```
- **PUT update a minion**:
  ```bash
  PUT http://localhost:4001/api/minions/1
  Body (raw, JSON):
  {
      "name": "Updated Minion",
      "title": "Senior Developer",
      "salary": 60000
  }
  ```
- **DELETE a minion**: `DELETE http://localhost:4001/api/minions/1`

### Ideas
- **GET all ideas**: `GET http://localhost:4001/api/ideas`
- **POST a new idea**:
  ```bash
  POST http://localhost:4001/api/ideas
  Body (raw, JSON):
  {
      "name": "New Idea",
      "description": "A brilliant idea",
      "numWeeks": 10,
      "weeklyRevenue": 100000
  }
  ```

### Meetings
- **GET all meetings**: `GET http://localhost:4001/api/meetings`
- **POST a new meeting**: `POST http://localhost:4001/api/meetings`
- **DELETE all meetings**: `DELETE http://localhost:4001/api/meetings`

### Work (Bonus)
- **GET all work for a minion**: `GET http://localhost:4001/api/minions/1/work`
- **POST new work for a minion**:
  ```bash
  POST http://localhost:4001/api/minions/1/work
  Body (raw, JSON):
  {
      "title": "New Work",
      "description": "Description of the work",
      "hours": 10
  }
  ```

---

## License

This project is licensed under the **MIT License**.

---

## Credits

This project is based on an exercise from [Codecademy](https://www.codecademy.com/).

---

## Future Plans

I plan to integrate this project into my portfolio to continue experimenting and improving it.
```