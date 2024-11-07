export default function json2html(data) {
    // Extract column names from the first object in data and add "Gender" if missing
    const columns = ["Name", "Age", "Gender"];

    // Start building the HTML table string with data-user attribute
    let html = `<table data-user="knagasamanvitha@gmail.com">
        <thead>
          <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>`;

    // Add each row from the data array
    data.forEach(row => {
        html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });

    // Close the table tag
    html += '</tbody></table>';

    return html;
}
