module Funciones where

{- Funciones iniciales -}

-- 1. sucesor
sucesor :: Integer -> Integer
sucesor 2 = 4
sucesor 4 = 8 
sucesor x = x + 1

pre :: Integer -> Integer
pre x = x - 1 

-- 2. doble 
doble :: Integer -> Integer 
doble x = x*2 

cuadruple :: Integer -> Integer
cuadruple x = doble(doble(x))

isPar :: Integer -> Bool
isPar x = x `mod` 2 == 0

isMayor :: Integer -> Bool
isMayor x = if x>= 18 then True else False

mayor :: (Integer, Integer) -> Integer
mayor (x, y) = if x>=y then x else y

division :: (Integer, Integer) -> Double
division (x,y) = fromInteger(x) / fromInteger(y)


factorial_a :: Integer -> Integer
factorial_a x = if ( x == 1 ) then 1
                else
                  x * factorial_a(x-1)

factorial_b :: Integer -> Integer
factorial_b 0 = 1
factorial_b x = x * factorial_b(x-1)


factorial_c :: Integer -> Integer
factorial_c 0 = 1
factorial_c x = factorialAux(1, x, 1) 

factorialAux :: (Integer, Integer, Integer) -> Integer
factorialAux(it, base, tot) = if it > base then tot
                              else
                                factorialAux(it+1, base, tot*it)

longitud :: [Integer] -> Integer
longitud [] = 0 
longitud (x:xs) = 1 + longitud(xs)

customFilter(f, []) = []
customFilter(f, x:xs) = if (f(x)== True)then
                          x : customFilter(f, xs)
                        else  
                          customFilter(f, xs)