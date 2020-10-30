var getNames = function(person)
{return person.firstName + " " + person.lastName;}
var last = employees.map(getNames)

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getNames)
