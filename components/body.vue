<template>
  <div class="section">
    <div class="row no-gutters">
      <div class="head pr-2 py-4 w-100 d-flex justify-content-end">
        <div class="tour my-auto mr-5">Take a tour</div>
        <div class="message my-auto mr-3"><img class="mb-1 mr-3" src="~/assets/images/messages-group.svg" /></div>
        <div class="notification my-auto mr-3"><img class="mb-1 mr-3" src="~/assets/images/notifications.svg" /></div>
        <div class="avatar my-auto mr-3"><img class="mb-1 mr-3" src="~/assets/images/profile-avatar.svg" /></div>

      </div>
    </div>

    <div class="row  ml-sm-5 no-gutters">
      <div class="heading  col-12">Update Patient Medical Record</div>
      <div class="desc col-12">Click the tab to view and edit patient medical details</div>

      <div v-if="showAlert" class="alert mt-3 alert-danger d-flex" role="alert">
        <div class="mes">something went wrong</div>
        <div @click="toggleAlert" class="close-btn ml-5">x</div>
      </div>

      <form @submit.prevent="() => handleSubmit()">
        <div class="mt-4 mr-xs-2 p-xs-3 p-sm-5 bg-white col-xs-12 col-sm-10">
          <p v-if="$fetchState.pending">loading..</p>
          <p v-else-if="$fetchState.error">An error occured :(</p>
          <div v-for="post in posts" v-else :key="post.id" class="row mt-3 row-cols-4 xs-row-cols-2 no-gutters">
            <div class="x-ray  mb-2 col-12">
              {{ post.title }}
            </div>

            <div v-for="pos in post.investigations" :key="pos.id" class="col-xs-12 mt-3">
              <div class="select-box d-flex">
                <input v-model="form[`investigations[${pos.id}]`]" type="checkbox" class="checkbox  mt-2" :id="pos.id"
                  :name="pos.title" :value="pos.id">
                <div class="part ml-2">{{ pos.title }}</div>
              </div>
            </div>

            <div class="col-12 mt-3">
              <hr>
            </div>
          </div>

          <div class="row no-gutters">
            <div class="col-5 mr-5">
              <div class="label">CT Scan</div>
              <img class="drop-down-input" src="~/assets/images/arrow down.svg" />
              <input placeholder="*Specify" class="input-field" type="text">
            </div>
            <div class="col-5">
              <div class="label">MRI</div>
              <img class="drop-down-input" src="~/assets/images/arrow down.svg" />
              <input placeholder="*Specify" class="input-field" type="text">
            </div>
          </div>

          <div class="row mt-4 no-gutters">
            <div class="col-11 d-flex justify-content-end">
              <button class="button mr-1">Save and Send</button>
            </div>
          </div>

        </div>

      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppBody',

  data() {
    return {
      posts: [],
      showAlert: false,
      token: '',
      showAlert: '',
      formSubmit: false,
      submitted: false,
      form: {
        "investigations[0]": '',
        "investigations[1]": '',
        "investigations[2]": '',
        "investigations[3]": '',
        "investigations[4]": '',
        "investigations[5]": '',
        "investigations[6]": '',
        "investigations[7]": '',
        "investigations[8]": '',
        "investigations[9]": '',
        "investigations[10]": '',
        "investigations[11]": '',
        "investigations[12]": '',
        "investigations[13]": '',

      },
    }
  },

  async fetch() {
    let data = {
      email: "tester@kompletecare.com",
      password: "password"
    }

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },

    };

    this.token = await fetch("https://testdrive.kompletecare.com/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        let token = result.data.token;
        return 'your supposed token'
      })
      .catch(error => console.log('error', error));

    var newRequestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },

    };

    this.posts = await fetch("https://testdrive.kompletecare.com/api/investigations", newRequestOptions).then(res => res.json())
      .then(response => {
        return response.data;
      });
  },
  fetchOnServer: true,

  methods: {
    async handleSubmit() {
      try {
        const postData = {
          investigations: [],
          "ctscan": "Scan needed in the left cerebral hemisphere",
          "mri": "Full body MRI",
          "developer": "Developer"
        };

        for (let [key, value] of Object.entries(this.form)) {
          if (value === true) {
            let valueId = key[key.length - 2]
            postData.investigations.push(valueId);
          }
        }
           // having error posting form data from here but can get investigation data from here
           //will make this more optimal if given more time.

        await fetch("https://testdrive.kompletecare.com/api/investigations", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}`
          },
          body: JSON.stringify(postData),
        })
          .then((response) => response.json())
          .then((data) => {
            return data
          })

      } catch (error) {
        console.log(error)
        this.showAlert = true;
      }
    },

    toggleAlert() {
      this.showAlert = !this.showAlert;
    }
  },

}
</script> 
