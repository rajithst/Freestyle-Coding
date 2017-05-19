@extends('layout.main')

@section('title')

   lorem
@endsection


@section('body')

   <div class="row">


       @if (count($errors) > 0)
           <div class="alert alert-danger">
               <ul>
                   @foreach ($errors->all() as $error)
                       <li>{{ $error }}</li>
                   @endforeach
               </ul>
           </div>
       @endif


       @if( session()->has('message'))

           <div class="alert alert-success">

               {{ session()->get('message') }}
           </div>@endif


       <div class="col-md-6">

            <h2>Register</h2>
           <form class="form-horizontal" method="post" action=" {{ route('signup')  }}">

               <div class="form-group">
                   <label for="inputEmail3" class="col-sm-2 control-label">FirstName</label>
                   <div class="col-sm-10">
                       <input type="text" class="form-control" id="inputEmail3" placeholder="first name" name="firstname">
                   </div>
               </div>


               <div class="form-group">
                   <label for="inputEmail3" class="col-sm-2 control-label">Last Name</label>
                   <div class="col-sm-10">
                       <input type="text" class="form-control" id="inputEmail3" placeholder="last name" name="lastname">
                   </div>
               </div>

               <div class="form-group">
                   <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                   <div class="col-sm-10">
                       <input type="text" class="form-control" id="inputEmail3" placeholder="Email" name="email">
                   </div>
               </div>
               <div class="form-group">
                   <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                   <div class="col-sm-10">
                       <input type="password" class="form-control" id="inputPassword3" placeholder="Password" name="password">
                   </div>
               </div>
               <div class="form-group">
                   <div class="col-sm-offset-2 col-sm-10">
                       <button type="submit" class="btn btn-default">Sign up</button>

                   </div>

                   {{ csrf_field() }}
               </div>
           </form>
       </div>


       <div class="col-md-6">

           <h2>Login</h2>
           <form class="form-horizontal" method="post" action="{{ route('signin') }}">
               {{ csrf_field() }}
               <div class="form-group">
                   <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                   <div class="col-sm-10">
                       <input type="email" class="form-control" id="inputEmail3" placeholder="Email" name="email">
                   </div>
               </div>
               <div class="form-group">
                   <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                   <div class="col-sm-10">
                       <input type="password" class="form-control" id="inputPassword3" placeholder="Password" name="password">
                   </div>
               </div>
               <div class="form-group">
                   <div class="col-sm-offset-2 col-sm-10">
                       <div class="checkbox">
                           <label>
                               <input type="checkbox"> Remember me
                           </label>
                       </div>
                   </div>
               </div>
               <div class="form-group">
                   <div class="col-sm-offset-2 col-sm-10">
                       <button type="submit" class="btn btn-default">Sign in</button>
                   </div>
               </div>
           </form>
       </div>


   </div>



@endsection