// function header() {
//   const page = document.querySelector("#page");
//   if (state.loggerInUserName) {
//     page.innerHTML = `
//     <nav class="nav-bar">
//       <ul>
//         <li class="" onClick="renderHomePage()">Home</li>
//         <li class="" onClick="renderProfilePage()">Your Profile</li>
//         <li class="" onClick="renderSearchPage()">Search</li>
//         <li class="" onClick="renderPostPage()">Post!</li>
//         <li onclick="logOut()">Log out</li>
//     </ul>
//     </nav>

//     `;
//   }
// }

const navBar = `
    <nav class="nav-bar">
      <ul>
        <li onClick="renderUserHomePage()"><span class="material-icons nav-icon">other_houses</span><span class="nav-text">Home</span></li>
        <li onClick="renderProfilePage()"><span class="material-icons nav-icon">person</span><span class="nav-text">Profile</span></li>
        <li  onClick="renderPostPage()"><span class="material-icons nav-icon">sms</span><span class="nav-text">Tweet</span></li>
        <li onclick="logOut()"><span class="material-icons nav-icon" >logout</span><span class="nav-text">Log out</span></li>
    </ul>
    </nav>`;
