<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Users</title>
  </head>
  <body>
<h1>Users Register page</h1>

  <form class="" action="/register" method="post">
    {{ csrf_field() }}
    <label for=""> Name</label>
    <input type="text" name="name" value=""> <br> <br>


<label for=""> email</label>
    <input type="email" name="email" value=""> <br> <br>


<label for=""> password</label>
    <input type="password" name="password" value="">

<br><br>
    <input type="submit" name="" value="Register Now">



  </form>


  </body>
</html>
