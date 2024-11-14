es_un_pais('Argentina'). % regla significa que es un pais
es_un_pais('Uruguay').
es_un_pais('Brasil').
es_un_pais('Chile').
es_un_pais('Paraguay').
limita_con('Argentina', 'Brasil'). % significa que arg limita con brasil
limita_con('Uruguay', 'Brasil').
limita_con('Argentina', 'Chile').
limita_con('Argentina', 'Paraguay').

