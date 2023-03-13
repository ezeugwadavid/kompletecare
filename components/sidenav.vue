<template>
    <div class="main">
      <div class="nav-menu">
        <div class="menu-item px-4 py-2 my-1 highlight d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/dashboard.svg" /></div>
           <div class="item">Dashboard</div>
        </div>
        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/profile.svg" /></div>
           <div class="item">Profile</div>
        </div>
        <div class="menu-item pl-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/services.svg" /></div>
           <div class="item">Services</div>
           <div class="icon drop-down"><img class="ml-5" src="~/assets/images/arrow down.svg" /></div>
        </div>
        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/medical-records.svg" /></div>
           <div class="item">Medical Records</div>
        </div>
        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/care-wallet.svg" /></div>
           <div class="item">Care Wallet</div>
        </div>
        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/messages.svg" /></div>
           <div class="item">Messages</div>
        </div>
        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/resources.svg" /></div>
           <div class="item">Resources</div>
        </div>

        <div class="hr px-0 my-1 py-2"><hr></div>

        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/settings.svg" /></div>
           <div class="item">Account Settings</div>
        </div>
        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/contact.svg" /></div>
           <div class="item">Contact Support</div>
        </div>
        <div class="menu-item px-4 py-2 my-1 d-flex">
           <div class="icon"><img class="mb-1 mr-3" src="~/assets/images/logout-user.svg" /></div>
           <div class="item">Logout</div>
        </div>
      </div>
   
    </div>
</template>
    
    <script>
    export default {
        name: 'Sidenav'
    }
    </script>
