function loadData(data) {
  const pageSize = 20; // default page size
  let currentPage = 1; // default current page
  let filteredData = data; // all data is displayed by default

  // select elements
  const selectPageSize = document.querySelector("#select-page-size");
  const selectPage = document.querySelector("#select-page");

  // update the select options with the available page sizes
  const pageSizes = [10, 20, 50, 100, filteredData.length];
  selectPageSize.innerHTML = pageSizes.map(size => `<option value="${size}">${size}</option>`).join("");

  // update the filteredData based on the selected page size
  selectPageSize.addEventListener("change", (event) => {
    pageSize = parseInt(event.target.value);
    currentPage = 1;
    filteredData = data.slice(0, pageSize);
    updateTable(filteredData);
    updatePagination(currentPage, filteredData.length, pageSize);
  });

  // update the table and pagination based on the selected page
  selectPage.addEventListener("change", (event) => {
    currentPage = parseInt(event.target.value);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    filteredData = data.slice(startIndex, endIndex);
    updateTable(filteredData);
    updatePagination(currentPage, filteredData.length, pageSize);
  });

  // update the table and pagination with the default values
  filteredData = data.slice(0, pageSize);
  updateTable(filteredData);
  updatePagination(currentPage, filteredData.length, pageSize);

  // listen to search input changes and update filtered data
  const searchInput = document.querySelector("#search-input");
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredHeroes = data.filter(hero => hero.name.toLowerCase().includes(searchText));
    filteredData = filteredHeroes.slice(0, pageSize);
    updateTable(filteredData);
    updatePagination(currentPage, filteredData.length, pageSize);
  });
}

  function updateTable(data) {
    const table = document.querySelector("#superheroes-table");
    const headers = [    "Icon",    "Name",    "Full Name",    "Intelligence",    "Strength",    "Speed",    "Durability",    "Power",    "Combat",    "Race",    "Gender",    "Height",    "Weight",    "Place of Birth",    "Alignment"  ];
  
    // Créer un élément table head et ajouter les headers dans une ligne de table
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    headers.forEach(header => {
      const th = document.createElement("th");
      const button = document.createElement("button");
      button.textContent = header;
      button.setAttribute("id", `sortBy${header}Btn`);
      th.appendChild(button);
      tr.appendChild(th);
    });
    thead.appendChild(tr);
  
    // Créer un élément table body et ajouter les lignes de données dans des lignes de table
    const tbody = document.createElement("tbody");
    data.forEach(hero => {
      const tr = document.createElement("tr");
  
      // Créer chaque cellule de données et y ajouter le contenu approprié
      const tdIcon = document.createElement("td");
      tdIcon.innerHTML = `<img src="${hero.images.xs}" alt="${hero.name} icon">`;
  
      const tdName = document.createElement("td");
      tdName.textContent = hero.name;
  
      const tdFullName = document.createElement("td");
      tdFullName.textContent = hero.biography.fullName;
  
      const tdIntelligence = document.createElement("td");
      tdIntelligence.textContent = hero.powerstats.intelligence;
  
      const tdStrength = document.createElement("td");
      tdStrength.textContent = hero.powerstats.strength;
  
      const tdSpeed = document.createElement("td");
      tdSpeed.textContent = hero.powerstats.speed;
  
      const tdDurability = document.createElement("td");
      tdDurability.textContent = hero.powerstats.durability;
  
      const tdPower = document.createElement("td");
      tdPower.textContent = hero.powerstats.power;
  
      const tdCombat = document.createElement("td");
      tdCombat.textContent = hero.powerstats.combat;
  
      const tdRace = document.createElement("td");
      tdRace.textContent = hero.appearance.race;
  
      const tdGender = document.createElement("td");
      tdGender.textContent = hero.appearance.gender;
  
      const tdHeight = document.createElement("td");
      tdHeight.textContent = hero.appearance.height[1];
  
      const tdWeight = document.createElement("td");
      tdWeight.textContent = hero.appearance.weight[1];
  
      const tdPlaceOfBirth = document.createElement("td");
      tdPlaceOfBirth.textContent = hero.biography.placeOfBirth;
  
      const tdAlignment = document.createElement("td");
      tdAlignment.textContent = hero.biography.alignment;
  
      // Ajouter chaque cellule à la ligne de table
      tr.appendChild(tdIcon);
      tr.appendChild(tdName);
      tr.appendChild(tdFullName);
      tr.appendChild(tdIntelligence);
      tr.appendChild(tdStrength);
      tr.appendChild(tdSpeed);
      tr.appendChild(tdDurability);
      tr.appendChild(tdPower);
      tr.appendChild(tdCombat);
      tr.appendChild(tdRace);
      tr.appendChild(tdGender);
      tr.appendChild(tdHeight);
      tr.appendChild(tdWeight);
      tr.appendChild(tdPlaceOfBirth);
      tr.appendChild(tdAlignment);
  
      // Ajouter la ligne de table au corps de la table
      tbody.appendChild(tr);
    });
  
    // Effacer le contenu précédent de la table et ajouter le nouveau thead et tbody
    table.innerHTML = "";
    table.appendChild(thead);
    table.appendChild(tbody);
  }

 // Create a function to render the table data
 const renderTable = (start, end) => {
  // Create a table element
  const table = document.createElement('table');

  // Create the table header row
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
  <				<th>Icon</th>
<th>Name</th>
<th>Full Name</th>
<th>Intelligence</th>
<th>Strength</th>
<th>Speed</th>
<th>Durability</th>
<th>Power</th>
<th>Combat</th>
<th>Race</th>
<th>Gender</th>
<th>Height</th>
<th>Weight</th>
<th>Place of Birth</th>
<th>Alignment</th>
`;

  // Append the header row to the table
  table.appendChild(headerRow);

  // Loop through the superheroes data and create a row for each one
  for (let i = start; i < end; i++) {
      // Create a table row element
      const row = document.createElement('tr');

      // Create a table data element for each field
      const iconCell = document.createElement('td');
      const icon = document.createElement('img');
      icon.src = superheroes[i].images.xs;
      iconCell.appendChild(icon);

      const nameCell = document.createElement('td');
      nameCell.textContent = superheroes[i].name;

      const fullNameCell = document.createElement('td');
      fullNameCell.textContent = superheroes[i].biography.fullName;

      const intelligenceCell = document.createElement('td');
      intelligenceCell.textContent = superheroes[i].powerstats.intelligence;

      const strengthCell = document.createElement('td');
      strengthCell.textContent = superheroes[i].powerstats.strength;

      const speedCell = document.createElement('td');
      speedCell.textContent = superheroes[i].powerstats.speed;

      const durabilityCell = document.createElement('td');
      durabilityCell.textContent = superheroes[i].powerstats.durability;

      const powerCell = document.createElement('td');
      powerCell.textContent = superheroes[i].powerstats.power;

      const combatCell = document.createElement('td');
      combatCell.textContent = superheroes[i].powerstats.combat;

      const raceCell = document.createElement('td');
      raceCell.textContent = superheroes[i].appearance.race;

      const genderCell = document.createElement('td');
      genderCell.textContent = superheroes[i].appearance.gender;

      const heightCell = document.createElement('td');
      heightCell.textContent = superheroes[i].appearance.height[1];

      const weightCell = document.createElement('td');
      weightCell.textContent = superheroes[i].appearance.weight[1];

      const placeOfBirthCell = document.createElement('td');
      placeOfBirthCell.textContent = superheroes[i].biography.placeOfBirth;

      const alignmentCell = document.createElement('td');
      alignmentCell.textContent = superheroes[i].biography.alignment;

      // Append the table data elements to the table row
      row.appendChild(iconCell);
      row.appendChild(nameCell);
      row.appendChild(fullNameCell);
      row.appendChild(intelligenceCell);
      row.appendChild(strengthCell);
      row.appendChild(speedCell);
      row.appendChild(durabilityCell);
      row.appendChild(powerCell);
      row.appendChild(combatCell);
      row.appendChild(raceCell);
      row.appendChild(genderCell);
      row.appendChild(heightCell);
      row.appendChild(weightCell);
      row.appendChild(placeOfBirthCell);
      row.appendChild(alignmentCell);

      // Append the table row to the table
      table.appendChild(row);
  }

  // Append the table to the table container
  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
};

// a function to create pagination buttons
function createPaginationButtons(totalPages, currentPage) {
  // Get the pagination container element
  const paginationContainer = document.getElementById('pagination-container');
  // Clear any existing pagination buttons
  paginationContainer.innerHTML = '';

  // Create a button for each page
  for (let i = 1; i <= totalPages; i++) {
      // Create a button element
      const button = document.createElement('button');

      // Set the button text to the page number
      button.textContent = i;

      // If the button is for the current page, add the active class
      if (i === currentPage) {
          button.classList.add('active');
      }

      // Add an event listener to the button that calls the displaySuperheroes function with the appropriate start and end values
      button.addEventListener('click', function () {
          displaySuperheroes((i - 1) * superheroesPerPage, i * superheroesPerPage);

          // Remove the active class from all buttons and add it to the clicked button
          const buttons = paginationContainer.querySelectorAll('button');
          buttons.forEach(function (button) {
              button.classList.remove('active');
          });
          button.classList.add('active');
      });

      // Append the button to the pagination container
      paginationContainer.appendChild(button);
  }
}

// Set the initial page to 1 and display the first set of superheroes
let currentPage = 1;
displaySuperheroes(0, superheroesPerPage);

// Calculate the total number of pages
const totalPages = Math.ceil(superheroes.length / superheroesPerPage);

// Create the pagination buttons
createPaginationButtons(totalPages, currentPage);

