padre(clara,pedro).
padre(pedro,jose).
padre(ana,clara).
padre(jose,clara).
abuelo(X,Y) :- padre(X,Z) , padre(Z,Y).
bisabuelo(X,Y) :- padre(X,Z) , abuelo(Z,Y).
