package API

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ContactList extends Simulation{
  //Protocol
    val httpProtocol = http.baseUrl("https://s1apiv2.rapidfunnel.com")
      .authorizationHeader("\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NTE2NjAyODYsImp0aSI6IlpUQTNPR0UyT0dNMk1qQmhObVJtTWpsaU0yWXdaVFZoTkdNeU56TTVNamsxTUdZNU9ETTRaVGN5T0RJME5tRm1aREV4WlRnell6TmlObVUyWkRKbU53PT0iLCJpc3MiOiJodHRwczpcL1wvczEucmFwaWRmdW5uZWwuY29tIiwibmJmIjoxNjUxNjYwMjk2LCJleHAiOjE2NTE2NjkyOTYsImRhdGEiOnsidXNlcklkIjoiNjkzMyIsImFjY2Vzc1Rva2VuIjoiNmY1MTkyZGFiNzVjYTJjOWYxZTVmYzUzY2U4ZmU5N2QifX0.fXGlC0klaAU0_x213g28a9ITseannlfzjZJer0yTF2DUn4Cjn5DnukVHAC4CRAO14lZ-QWW7ChWL7R6l--E7FQ\"")

  //Scenario
  val GetContactList = scenario(scenarioName = "Get API Request")
    .exec(
      http(requestName = "Get Contact list")
        .get("/v2/users/6933/contacts")
        // .body(RawFileBody("Data/Contact.json"))
        .check(status.is(expected = 200))

    )
    .pause(duration = 1)

  //Setup
    setUp(GetContactList.inject(rampUsers(users = 100 ).during(5))
      .protocols(httpProtocol))

}
