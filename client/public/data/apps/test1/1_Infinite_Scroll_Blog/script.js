const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loading');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

// Fetch posts from API, returns a promise
async function getPosts() {
  url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
  // recieves promise
  const res = await fetch(url);
  // recieves promise
  const data = await res.json();
  return data;
}

// Show posts in DOM
async function showPosts() {
  // must use await because recieving a promise
  const posts = await getPosts();
  console.log(posts);
  posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postsContainer.appendChild(postEl);
  });
}

// Show loading & fetch more posts
function showLoading() {
  loading.classList.add('show');
  setTimeout(() => {
    loading.classList.remove('show');
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

// filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    // indexOf() is searching the string to see if it contains
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
}

// show initial posts
showPosts();

window.addEventListener('scroll', () => {
  // destructuring
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener('input', filterPosts)