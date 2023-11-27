// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId


const containerWithCommentsEl = document.querySelector("#postsWithComments");

async function parseDataWithComments() {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await postsResponse.json();

    const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
    const commentsData = await commentsResponse.json();

    postsData.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("userBox");
        postDiv.style.padding = "20px";
        postDiv.style.margin = "10px";
        postDiv.style.color = "gray";
        postDiv.style.backgroundColor = "lightgray";

        postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;

        const postComments = commentsData.filter(comment => comment.postId === post.id);
        postComments.forEach(comment => {
            const commentDiv = document.createElement("div");
            commentDiv.style.padding = "10px";
            commentDiv.style.marginTop = "10px";
            commentDiv.style.backgroundColor = "lightgray";

            commentDiv.innerHTML = `<strong>${comment.name}</strong><br>${comment.body}`;

            postDiv.appendChild(commentDiv);
        });

        postDiv.addEventListener("mouseover", () => {
            postDiv.style.backgroundColor = "white";
        });

        postDiv.addEventListener("mouseout", () => {
            postDiv.style.backgroundColor = "lightgray";
        });

        containerWithCommentsEl.appendChild(postDiv);
    });
}

parseDataWithComments();


