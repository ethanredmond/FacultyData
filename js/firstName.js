var getName = function(person)
{return person.firstName;}
var answer = employees.map(getName)

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getName)