// ==========================================
// GET HTML ELEMENTS
// ==========================================

// Find the dropdown.
let employeeSelect = document.getElementById("employee-select");

// Find the profile area.
let profile = document.getElementById("profile");


// ==========================================
// FETCH USERS
// ==========================================

// Fetch 10 users from DummyJSON.
fetch("https://dummyjson.com/users?limit=10")

    // Convert the response into JavaScript data.
    .then(function (response) {
        return response.json();
    })

    // Work with the user data.
    .then(function (data) {

        // Loop through the users.
        for (let user of data.users) {

            // Create a new option for the dropdown.
            let option = document.createElement("option");

            // Use the user's ID as the option value.
            option.value = user.id;

            // Display the user's first and last name.
            option.textContent = user.firstName + " " + user.lastName;

            // Add the option to the dropdown.
            employeeSelect.appendChild(option);
        }
    });


// ==========================================
// SELECT AN EMPLOYEE
// ==========================================

// Listen for the user changing the dropdown.
employeeSelect.addEventListener("change", function () {

    // Get the ID of the selected employee.
    let userId = employeeSelect.value;


    // Check that an employee was selected.
    if (userId !== "") {

        // Fetch that specific user's information.
        fetch("https://dummyjson.com/users/" + userId)

            // Convert the response into JavaScript data.
            .then(function (response) {
                return response.json();
            })

            // Display the user's information.
            .then(function (user) {

                // Create the profile HTML.
                let html = `
                    <div class="profile-content">

                        <img src="${user.image}">

                        <div>

                            <h2>
                                ${user.firstName} ${user.lastName}
                            </h2>

                            <p>
                                Email: ${user.email}
                            </p>

                            <p>
                                Phone: ${user.phone}
                            </p>

                            <p>
                                Age: ${user.age}
                            </p>

                            <p>
                                City: ${user.address.city}
                            </p>

                        </div>

                    </div>
                `;


                // Put the profile onto the webpage.
                profile.innerHTML = html;
            });
    }

    else {

        // Clear the profile if no employee is selected.
        profile.innerHTML = "";
    }

});