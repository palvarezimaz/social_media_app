function renderComments(event) {
  const page = document.querySelector('#page');
  const commentBtn = event.target;
  const postDOM = commentBtn.closest('.post');
  const postId = postDOM.dataset.id;

  let targetPost = state.posts.filter((post) => Number(post.id) == postId)[0];
  let targetPostWithComments = state.postsWithComments.filter(
    (post) => Number(post.id) == postId
  );

  let renderChildComment = targetPostWithComments
    .map(
      (comment) =>
        `
        <h3>${comment.name} Commented</h3>
        <p class="comment">${comment.comments}</p>
        `
    )
    .join('');
  //
  page.innerHTML = `
<div class="entry-page-wrapper user-page-wrapper">
    <div class= "user-page-details">
        ${navBar}
        <section class="comment-form post-new-tweets">
        <section class='entry-page-container user-post-info' data-id='${targetPost.id}'>
            <header>
                <img class="avatar-mini" src="${state.loggedInUserName.avatar}" alt="User's avatar">
                <h2>${state.loggedInUserName.userName}</h2>
            </header>
            <p class="p-tweets">${targetPost.post}</p>
            <img src="${targetPost.attachment}">
            
            <form onSubmit="commentPost(event)">
                <input name='post_id' value='${targetPost.id}' type='hidden'>
                <input name='comments' type='text'>
                
                
                <button class="profile-delete-button">Add Comment!</button>
            </form>
            </section>
        
            <section class="comment-section entry-page-container">
                ${renderChildComment}
            </section>
            
        </section>
    </div>
</div>
        `;
}

function commentPost(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  // .then((comment) => {}
}
