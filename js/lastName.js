var getLast = function(person)
{return person.lastName;}
var last = employees.map(getLast)

d3.select("body")
.append("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getLast)