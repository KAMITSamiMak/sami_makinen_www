String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g,"");
}

function disableSubmit() {
  document.getElementById("mySubmit").disabled = true;
}

function sortTable() {
  var input, filter, table, tr, tdname,tdplatform, tdgenre , i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    tdname = tr[i].getElementsByTagName("td")[1];
    tdplatform = tr[i].getElementsByTagName("td")[2];
    tdgenre = tr[i].getElementsByTagName("td")[3];
    tdstatus = tr[i].getElementsByTagName("td")[4];
    if (tdname && tdplatform && tdgenre) {
      if (tdname.innerHTML.toUpperCase().indexOf(filter) > -1 || tdplatform.innerHTML.toUpperCase().indexOf(filter) > -1 || tdgenre.innerHTML.toUpperCase().indexOf(filter) > -1 || tdstatus.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
      else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function validateForm() {
if (document.forms["contactForm"]["email"].value==null || document.forms["contactForm"]["email"].value=="")
  {
  alert("Must insert Email address!")
  return false;
  }
if (document.getElementById("message").value.trim() == '')
  {
  alert("There must be a message")
  return false;
  }
}

function allowDrop(event) {
    event.preventDefault();
}

function dragImage(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dropImage(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    if(event.target.appendChild(document.getElementById(data)))
    {
      document.getElementById("mySubmit").disabled = false; 
    }
}

