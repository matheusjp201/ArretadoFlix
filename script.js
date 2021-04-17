function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)  
  } else {
    alert("Imagem inválida, por favor digite novamente")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BNzhjZDU5NWMtMGMyZS00ZTkyLThjN2MtZWJhNDkxODNlMjJhXkEyXkFqcGdeQXVyMjUyMTE3MTc@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDM0MDA3NzYtMDE1MS00YjZmLWJmNjQtNzgxYzlhMmMyZjQ2XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UY268_CR3,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZWQ1MDNlMjgtYjUwYS00ZGU0LWJjNTYtYmRlY2FhMWFkZjI1XkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDA2YTQzNTktNzA5Yi00Mzg2LWE1NzMtZTQxYTBhNDVjYTAxXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTkxMjc1NTg2MF5BMl5BanBnXkFtZTgwNDAwMDgwNDE@._V1_UY268_CR87,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDgwMDg1NWItMzljNC00NGRkLWI1ODctMGEwYjExYzE3ODllL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjMyNTYyNTY@._V1_UY268_CR3,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjAxYjZkMDUtZmJkZi00NDdmLWIyZjgtZGQ2NjYwMzE1ZTkwXkEyXkFqcGdeQXVyNDI3MzQyOTM@._V1_UY268_CR15,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNGIzNDViMjAtYzYwZS00MzJlLTkyZTUtYzZlOWFkYmEyMTdlXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMWMxMTgyODAtNTMwNS00ZGVjLTlkODAtZWJlYjIxMGRmZWY0XkEyXkFqcGdeQXVyNTk5ODg4NDA@._V1_UY268_CR13,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BY2U2MTg5ZjMtZmIxMi00YzhjLWI0MmYtNjIxZjc3MTdkODRiXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BN2I2Y2I5N2MtMzJhMy00NzE2LThlMzEtNGE0ODA4M2JhOWNiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzAxMDA0MGUtMWJjYy00YWNlLTk1NmEtNTM5Y2FjYjMzNjM5XkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTM5NTIwMjg1Ml5BMl5BanBnXkFtZTcwOTY2MDY0OQ@@._V1_UY268_CR5,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNGExYzJjMzUtNGExMy00YTgwLTgzOTUtMjM5MDEwMTJkMTM1XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_UY268_CR7,0,182,268_AL_.jpg",]

for (var i = 0; i < listaFilmes.length; i++){   document.write("<img src=" + listaFilmes[i] + ">") }