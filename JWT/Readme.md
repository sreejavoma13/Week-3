<h1>OUTPUT SCREENS & INSTRUCTIONS</h1>
<p>EASY,MEDIUM</p>
<h3>install Dependencies</h3>
npm install
<h3>Start the Server</h3>
node Routes.js
The server runs at: http://localhost:3000

<h3>API Testing with Postman</h3> 
<h3>Registration (POST /register)</h3>
<h4>URL: http://localhost:3000/register</h4>

Body (JSON):
<pre>
{
  "username": "yourname",
  "password": "yourpassword"
}
</pre>

<h3>Login (POST /login)</h3>
<h4>URL: http://localhost:3000/login</h4>
Body (JSON):
<pre>
{
  "username": "yourname",
  "password": "yourpassword"
}
</pre>
Response:
<pre>
{
  "token": "your_jwt_token"
}
</pre>
<h3>Protected To-Do Routes (Authorization Required)</h3>
<h4>Add Bearer Token</h4>
<p>In Postman, go to Authorization tab → type = "Bearer Token" → paste your JWT token.</p>

<h3>Get To-Dos (GET /api/todos)</h3>
<p>Returns only the to-dos of the logged-in user.</p>

<h3>Create To-Do (POST /api/todos)</h3> 
Body (JSON):
<pre>
{
  "task": "Learn JWT"
}
</pre>

<h3> Delete To-Do (DELETE /api/todos/:id)</h3>
<p>You can only delete your own to-do item by its ID.</p>


<h1>OUTPUT SCREENS</h1>
<p>For the above endpoints attached below</p>




![Screenshot (69)](https://github.com/user-attachments/assets/5c461e85-5385-45c8-9798-2abbe9c032dc)





![Screenshot (70)](https://github.com/user-attachments/assets/663b5acd-5404-4bd6-9ebb-26909a56b18c)





![Screenshot (71)](https://github.com/user-attachments/assets/a28bc8fc-08db-4b84-9ae2-62db7902b209)





![Screenshot (72)](https://github.com/user-attachments/assets/25d75b7e-5491-4c54-beaf-d083fda89736)





![Screenshot (73)](https://github.com/user-attachments/assets/e5bb5dc2-1fd6-4a03-bed6-2cba40fb7e81)





![Screenshot (74)](https://github.com/user-attachments/assets/8221801f-ece9-4861-932f-d24717432e4c)





![Screenshot (75)](https://github.com/user-attachments/assets/de57fdc7-d21d-4b0d-98fd-f836451a89c9)
