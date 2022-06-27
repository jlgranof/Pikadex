# Backend Routes

## Authentication - ```authenticate```
```GET '/'``` : Authenticates a Specifc User<br>
```POST '/login'``` : Logs In a Specifc User<br>
```GET '/logout'``` : Logs Out a Specifc User<br>
```POST '/signup'``` : Signs Up a New User<br>

## API
### Pokemon Routes - ```pokemon```
```GET '/'``` : Returns Basic Information for All Pokemon<br>
```GET '/id'``` : Returns All Information for Specific Pokemon<br> 

### User Routes - ```users```
```GET '/id'``` : Returns Basic Information and Pokedexes for Specific User<br>

### Pokedex Routes - ```pokedexes```
```GET '/'``` : Returns Basic Information for All Pokedexes<br>
```GET '/id'``` : Returns All Inormation for Specific Pokedex<br>
```GET '/game/id'``` : Returns all Basic Information for All Pokedexes from Specifc Game<br>
```POST '/'``` : Create a New Pokedex<br>
```PUT '/id'``` : Updates a Specifc Pokedex<br>
```DELETE '/id'``` : Deletes a Specific Pokedex<br>
```POST /pokemon/``` : Adds a new Pokemon to an Existing Pokedex<br>
```PUT /pokemon/id``` : Updates a Specific Pokemon<br>
```DELETE /pokemon/id``` : Deletes a Specifc Pokemon<br>