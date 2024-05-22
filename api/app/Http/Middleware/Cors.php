<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{function handle($request, Closure $next)
    {
        return $next($request)
        ->header("Access-Control-Allow-Origin", "http://localhost:5173/")
        //Métodos que a los que se da acceso, agregas los que necesites 
        ->header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        //Headers de la petición
        ->header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, X-Token-Auth, Authorization");
    }
}
