use_module(library(readutil)).

preguntar_y_evaluar_puesta_huevos :-
    writeln('¿Cuantas patas tiene? '),
    read_line_to_string(user_input, PatasString),
    atom_number(PatasString, Patas),
    
    writeln('¿Tiene pelos? (0 para no, 1 para si) '),
    read_line_to_string(user_input, PelosString),
    atom_number(PelosString, Pelos),

    writeln('¿Tiene pulmones? (0 para no, 1 para si) '),
    read_line_to_string(user_input, PulmonesString),
    atom_number(PulmonesString, Pulmones),

    writeln('¿Tiene escamas? (0 para no, 1 para si) '),
    read_line_to_string(user_input, EscamasString),
    atom_number(EscamasString, Escamas),
   
    pone_huevo(Resultado, Patas, Pelos, Pulmones, Escamas),

    writeln('Resultado: '), write(Resultado).
%--------------------------------------------------------------------------
% Reglas para determinar si un animal pone o no pone huevos
pone_huevo('Viviparo (no pone huevos)', _, 1, _, _).
pone_huevo('Oviparo (pone huevos)', Patas, 0, _, _) :-
    Patas > 1.
pone_huevo('Oviparo (pone huevos)', Patas, 0, 0, _) :-
    Patas =< 1.
pone_huevo('Oviparo (pone huevos)', Patas, 0, 0, 1) :-
    Patas =< 1.
pone_huevo('Viviparo (no pone huevos)', Patas, 0, 0, 0) :-
    Patas =< 1.
%--------------------------------------------------------------------------
% Llamamos al predicado principal para iniciar la interacción con el usuario
% :- preguntar_y_evaluar_puesta_huevos.