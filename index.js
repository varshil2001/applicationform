

function addRow() {

    var myName = document.getElementById("name");
    var employeeId=document.getElementById("EmployeeId");
    var department=document.getElementById("dept");
    var emailid=document.getElementById("EmailId");
    var doj=document.getElementById("DOJ");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= employeeId.value;
    row.insertCell(3).innerHTML= department.value;
    row.insertCell(4).innerHTML= emailid.value;
    row.insertCell(5).innerHTML= doj.value;


}

function deleteRow(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);

}

function isEmpty(){
  var n = document.forms["myForm"]["name"].value;
  var eid = document.forms["myForm"]["EmployeeId"].value;
  var emailid = document.forms["myForm"]["EmailId"].value;
  var doj = document.forms["myForm"]["DOJ"].value;

  if(n==="")
  {
    alert("No Name Added");
  }
  if(eid==="")
  {
    alert("No Id Provided");
  }
  if(emailid==="")
  {
    alert("No Email address given");
  }
  if(doj==="")
  {
    alert("No Date of Joining given");
  }
}




function load() {

    console.log("Page load finished");

}
