@extends('layout.main')


@section('body')


    <h2> Welcome logged in user</h2>

    <ul>

        <li>FIRST NAME : {{ Auth::user()->fist_name}} </li>
        <li>LAST NAME : {{ Auth::user()->last_name}}</li>
        <li> EMAIL : {{ Auth::user()->email}}</li>
        <li><a href=" {{ route('signout') }}">logout</a></li>

    </ul>


    @endsection