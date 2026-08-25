// Create a Promise that simulates fetching user data
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@email.com`,
                    registrationDate: "2025-01-15"
                });
            } else {
                reject(new Error("Invalid User ID"));
            }
        }, 1500);
    });
}

// Create a function that uses template literals for HTML generation
function generateUserHTML(user) {
    return `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Registered: ${user.registrationDate}</p>
        </div>
    `;
}

// Create a Promise that simulates fetching user posts
function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    {
                        id: 1,
                        title: "My First Post",
                        content: "This is my first post.",
                        userId: userId
                    },
                    {
                        id: 2,
                        title: "Learning JavaScript",
                        content: "Promises and async/await are useful.",
                        userId: userId
                    }
                ]);
            } else {
                reject(new Error("User does not exist"));
            }
        }, 1000);
    });
}

// Create a function that chains multiple Promises together
function getUserAndPosts(userId) {
    return fetchUserData(userId)
        .then(user => {
            return fetchUserPosts(userId)
                .then(posts => {
                    return {
                        user,
                        posts
                    };
                });
        })
        .catch(error => {
            console.error("Promise Chain Error:", error.message);
            throw error;
        });
}

// Convert the above Promise chain to use async/await
async function getUserAndPostsAsync(userId) {
    try {
        console.log("Fetching user data...");

        const user = await fetchUserData(userId);

        console.log("User data received.");
        console.log("Fetching user posts...");

        const posts = await fetchUserPosts(userId);

        console.log("Posts received.");

        return {
            user,
            posts
        };
    } catch (error) {
        console.error("Async/Await Error:", error.message);
    }
}

// Create a function that fetches multiple users in parallel
async function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id =>
        fetchUserData(id).catch(error => {
            console.error(`Failed to fetch user ${id}:`, error.message);
            return null;
        })
    );

    const users = await Promise.all(promises);

    return users.filter(user => user !== null);
}

// Create a function that fetches users and their posts in parallel
async function fetchUsersAndPosts(userIds) {
    try {
        const users = await fetchMultipleUsers(userIds);

        const userPostPromises = users.map(async user => {
            const posts = await fetchUserPosts(user.id);

            return {
                user,
                posts
            };
        });

        return await Promise.all(userPostPromises);

    } catch (error) {
        console.error("Error fetching users and posts:", error.message);
    }
}

// Test success cases

console.log("=== Single User Fetch (Promise Chain) ===");

getUserAndPosts(1)
    .then(result => {
        console.log(result);
    });

console.log("=== Single User Fetch (Async/Await) ===");

getUserAndPostsAsync(2)
    .then(result => {
        console.log(result);
    });

console.log("=== Multiple User Fetch ===");

fetchMultipleUsers([1, 2, 3])
    .then(users => {
        console.log(users);
    });

console.log("=== Users and Posts Fetch ===");

fetchUsersAndPosts([1, 2, 3])
    .then(data => {
        console.log(data);
    });

// Test error handling

console.log("=== Error Handling Test ===");

getUserAndPosts(-1)
    .catch(error => {
        console.log("Caught Error:", error.message);
    });
