# Express Mongoose CRUD Mastery

Develop a Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management.

**Vercel Deploy Live Link:** https://express-mongoose-crud-mastery.vercel.app/

## Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- MongoDB

## Getting Started

1. Clone the repository:

```bash
  git clone https://github.com/Sabbir2809/express-mongoose-crud-mastery
  cd express-mongoose-crud-mastery
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```.env
PORT=your_server_port
DATABASE_URL=your_mongodb_connection_string
BCRYPT_SALT_ROUNDS=bcrypt_salt_rounds_number
```

4. Run the application:

```bash
npm run start
```

5.  User API Endpoints:

    - Create a new user `POST: /api/users`

    - Retrieve a list of all users `GET: /api/users`

    - Retrieve a specific user by ID `GET: /api/users/:userId`

    - Update user information `PUT: /api/users/:userId`

    - Delete a user `DELETE: /api/users/:userId`

6.  Order API Endpoints:

    - Add New Product in Order `PUT: /api/users/:userId/orders`

    - Retrieve all orders for a specific user `GET: /api/users/:userId/orders`

    - Calculate Total Price of Orders for a Specific User `GET: /api/users/:userId/orders/total-price`

---

#### Package Dependencies:

Main Dependencies Package:

```bash
npm install express mongoose cors bcrypt dotenv zod
```

DevDependencies Package:

```bash
npm install -D typescript @types/express @types/cors @types/bcrypt ts-node-dev
```
