const express=require('express')
const app=express();
const jwt=require('jsonwebtoken')
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
app.post('/register',(req,res)=>{
    const newuser={
        id:users.length+1,
        username:req.body.username,
        password:req.body.password
    };
    users.push(newuser)
    res.status(200).json(newuser)
})

app.post('/login',(req,res)=>{
    const { username, password: pass } = req.body;
    const user=users.find(user=>user.username===username)
    if(!user){
        res.status(404).json('User Not Found')
    }
    if(user.password!==pass){
        res.status(404).json('InValid Credentials')
    }
    const token=jwt.sign({id:user.id,username:user.username},SECRET_KEY,{expiresIn:'1h'});
    res.json({token})

})
app.get('/protected',authenticateToken,(req,res)=>{
    res.json({
    message: 'Protected route accessed!',
    user: req.user, 
  });
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});