export default function json2html(data) {
    // Define the columns for the table
    const columns = ["Name", "Age", "Gender"];

    // Start building the HTML table string with data-user attribute
    let html = `<table data-user="knagasamanvitha@gmail.com">
        <thead>
          <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>`;

    // Populate rows in the table body
    data.forEach(row => {
        html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });

    // Close the table tag
    html += '</tbody></table>';

    return html;
}
