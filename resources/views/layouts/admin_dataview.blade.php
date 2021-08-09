<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal</title>

    <!-- Font -->
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@600&display=swap" rel="stylesheet">
    
    {{-- css --}}  
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/dataview.css')}}">

    {{-- other links --}}
    <link rel="shortcut icon" href="{{asset('media/logos/favicon.ico')}}"/>

</head>



<body>
    <nav class="p-6 bg-white flex justify-between mb-6">
        <ul class="flex items-center">
            <li>
                <a href="{{ route('admin_dashboard') }}" class="p-3">Admin Dashboard</a>
            </li>
            <li>
                <a href="{{ route('admin_audience') }}" class="p-3">Audience</a>
            </li>
            <li>
                <a href="{{ route('admin_market_analysis') }}" class="p-3">Market Analysis</a>
            </li>
            <li>
                <a href="{{ route('admin_reports') }}" class="p-3">Reports</a>
            </li>
            <li>
                <a href="{{ route('admin_payment') }}" class="p-3">Payment</a>
            </li>
           

        </ul>
        <ul class="flex items-center">
        
            @auth
                <li>
                    <a href="" class="p-3">{{ auth()->user()->name }}</a>
                </li>
                <li>
                    <form action="{{ route('logout') }}" method="post" class="p-3 inline">
                        @csrf
                        <button type="submit">Logout</button>
                    </form>                    
                </li>   
            @endauth
            @guest
                <li>
                    <a href="{{ route('login')}}" class="p-3">Login</a>
                </li>
                <li>
                    <a href="{{ route('register')}}" class="p-3">Register</a>
                </li>
            @endguest
        </ul>
    </nav>
    <div class="flexcontainer">
        <div class="container">
            <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
            @yield('content')
        </form>
        </div>
        
    </div>

  
    
</body>

</html>