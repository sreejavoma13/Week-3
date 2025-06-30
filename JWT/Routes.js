const express=require('express')
const app=express();
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt');
const authenticateToken=require('./auth')

const PORT=3000
app.use(express.json())
const SECRET_KEY='secret_key'
const users = [{ id: 1, username: 'testuser', password: 'password123' },
    { id: 2, username: 'testuser1', password: 'password123' },
    { id: 3, username: 'testuser2', password: 'password123' },
    { id: 4, username: 'testuser3', password: 'password123' },
    { id: 5, username: 'testuser4', password: 'password123' },
    { id: 6, username: 'testuser5', password: 'password123' },
    { id: 7, username: 'testuser6', password: 'password123' },
    { id: 8, username: 'testuser7', password: 'password123' },

];
const todos = [];
app.post('/register',async (req,res)=>{
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser={
        id:users.length+1,
        username:username,
        password:hashedPassword,
    };
    users.push(newuser)
    res.status(200).json(newuser)
})

app.post('/login',async (req,res)=>{
    const { username, password } = req.body;
    const user=users.find(user=>user.username===username)
    if(!user){
        res.status(404).json('User Not Found')
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json('Invalid Credentials');
    
    const token=jwt.sign({id:user.id,username:user.username},SECRET_KEY,{expiresIn:'1h'});
    res.json({token})

})
app.get('/api/todos', authenticateToken, (req, res) => {
  const userTodos = todos.filter((todo) => todo.userId === req.user.id);
  res.json(userTodos);
});

app.post('/api/todos', authenticateToken, (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    userId: req.user.id,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', authenticateToken, (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === todoId && t.userId === req.user.id);

  if (todoIndex === -1) return res.status(403).json('Not authorized or todo not found');

  const deletedTodo = todos.splice(todoIndex, 1);
  res.json(deletedTodo[0]);
});

app.get('/protected',authenticateToken,(req,res)=>{
    res.json({
    message: 'Protected route accessed!',
    user: req.user, 
  });
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});