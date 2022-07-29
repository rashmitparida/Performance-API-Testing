package API

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetTaskList extends Simulation{

  //Protocol
  val httpProtocol = http.baseUrl(url = "https://s1apiv2.rapidfunnel.com")
    .authorizationHeader(value="\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NTg5MjUxNjUsImp0aSI6IlpUTmpOekppTW1ReU1UUmxaRGMyTVRrMlpqYzBOREZpWm1VME5UazNZMlV4TnpRNE5HRXhNelZtWlRrMk5qSXlZMlptTnpka1l6ZGpNV0U0Tm1ObFlRPT0iLCJpc3MiOiJodHRwczpcL1wvczEucmFwaWRmdW5uZWwuY29tIiwibmJmIjoxNjU4OTI1MTc1LCJleHAiOjE2NTg5MzQxNzUsImRhdGEiOnsidXNlcklkIjoiNjkzMyIsImFjY2Vzc1Rva2VuIjoiMWUxYzZkNTEwZjcxMTE3MGZmZDljYjVlM2U3NTM3ZDYifX0.ka97ceWX-z3K_XectasnoDQOx58PlduT21zZvoTnKiTlNnAvlbpx4M91o0RHH6psDbiXctH_wKAYfdvcUQbctg\"")

  //Scenario
  val GetTaskList = scenario(scenarioName = "Get Task API Request")
  .exec(
    http(requestName = "Get Task list")
  .get("/v3/tasks")
    .check(status.is(expected = 200))
  )
    .pause(duration = 1)

  //Set up
  setUp(GetTaskList.inject(rampUsers(users = 200).during(5))
  .protocols(httpProtocol))
}
