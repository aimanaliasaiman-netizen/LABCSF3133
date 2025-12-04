function generateTable() {
    // Get the number of rows and columns from user input
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    // Validate the input
    if (isNaN(rows) || rows < 1 || isNaN(columns) || columns < 1) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

    // Create the table
    let tableHTML = "<table>";
    
    // Create header row with multiplication symbols
    tableHTML += "<tr><th>×</th>";
    for (let j = 1; j <= columns; j++) {
        tableHTML += `<th>${j}</th>`;
    }
    tableHTML += "</tr>";
    
    // Create data rows
    for (let i = 1; i <= rows; i++) {
        tableHTML += `<tr><th>${i}</th>`;
        for (let j = 1; j <= columns; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }
    
    tableHTML += "</table>";

    // Display the table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}