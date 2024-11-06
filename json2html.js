export default function json2html(data) {
    // Generate the table structure
    let html = '<table data-user="ayushrupapara@gmail.com">';
    html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    html += '<tbody>';
  
    // Iterate over the data array to create table rows
    data.forEach(row => {
      html += '<tr>';
      html += `<td>${row.Name || ''}</td>`;
      html += `<td>${row.Age || ''}</td>`;
      html += `<td>${row.Gender || ''}</td>`;
      html += '</tr>';
    });
  
    html += '</tbody></table>';
    return html;
  }
  