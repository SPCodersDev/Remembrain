var nav = document.querySelector(".navbar");

nav.innerHTML = "";

nav.innerHTML=(`<div class="navLeft">
                    <div class="navLogo">
                        <a href = "home.html"><i class = "fas fa-brain"></i> Remembrain</a>
                    </div>
                    <div class="navSearch">
                        <input type="text" class="navSearchInput" placeholder="Search Games...">
                        <i class = "fas fa-search"></i>
                    </div>
                    <div class="navLink">
                        <a href="">All Games</a>
                    </div>
                    <div class="navLink">
                        <a href="">Memory</a>
                    </div>
                    <div class="navLink">
                        <a href="">Logic</a>
                    </div>
                </div>
                <div class="navRight">
                    <div id="popup" style="display: none;">
                        <div class="arrow-up"></div>
                        <span style="display: flex; justify-content: space-between; align-items: center;">
                            <span id="enterName"></span>
                            <i style="font-size: 30px;" class="fas fa-user-circle"></i>
                        </span>
                        <div class="info">
                            <a href="settings.html"><i class="fas fa-cog"></i>&nbsp;&nbsp;Settings</a>
                            <br>
                            <button id="signOut"><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Log Out</button>
                        </div>
                    </div>
                    <span class="user"></span>
                    <span class="person">
                        <div class="userImg">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <button class="openPopup" id = "open">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </span>
                </div>`)