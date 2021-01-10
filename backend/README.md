### PROJECT DETAILS
- Postgres database on Developer and Production environment
- H2 database on Test environment
- Java
- Spring Boot

### ROUTES
- GET  /games: return all games
- GET  /records: return all records. Params: max, min, page, linesPerPage, orderBy, direction(DESC Or ASC)
- POST /records: receives an RecordInsertDTO and returns an RecordDTO.

### CLASS DIAGRAM
![CLASS-DIAGRAM](https://cdn.discordapp.com/attachments/590682723870310410/797625540441145354/ClassDiagram.jpg)

### DATABASE DIAGRAM
![DATABASE-DIAGRAM](https://cdn.discordapp.com/attachments/590682723870310410/797625727008505896/modelo_logico_big_game_survey.jpg)

### DTO'S DIAGRAM
![DTO'S-DIAGRAM](https://cdn.discordapp.com/attachments/590682723870310410/797627228955476018/Captura_de_tela_2021-01-09_214539.jpg)

### LINKS
- http://localhost:8080 when running test and developer environment
- https://sds1-pedro.herokuapp.com Production mode
